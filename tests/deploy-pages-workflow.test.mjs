import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const workflowPath = resolve(root, '.github/workflows/deploy-pages.yml');

function usesSafeArtifactPath(path) {
  return path === './site';
}

function usesDefaultCheckout(options) {
  return !('repository' in options) && !('path' in options);
}

function permitsDeployment({ event, ref }) {
  return (event === 'push' || event === 'workflow_dispatch') && ref === 'refs/heads/main';
}

test('uses default checkout and packages only the site directory', async () => {
  const workflow = await readFile(workflowPath, 'utf8');

  assert.match(workflow, /^\s*- uses: actions\/checkout@v4$/m);
  assert.doesNotMatch(workflow, /actions\/checkout@v4\s*\n\s*with:/);
  assert.match(workflow, /^\s*- uses: actions\/upload-pages-artifact@v4$/m);
  assert.match(workflow, /^\s*path: \.\/site$/m);
  assert.doesNotMatch(workflow, /\bgit\s+-C\b/);

  assert.equal(usesSafeArtifactPath('./site'), true);

  for (const unsafePath of ['git -C /tmp/repository', '../site', '/tmp/site']) {
    assert.equal(usesSafeArtifactPath(unsafePath), false);
  }

  assert.equal(usesDefaultCheckout({}), true);
  assert.equal(usesDefaultCheckout({ repository: 'owner/repository' }), false);
  assert.equal(usesDefaultCheckout({ path: 'checkout' }), false);
});

test('uses the constrained Pages deployment boundary on main only', async () => {
  const workflow = await readFile(workflowPath, 'utf8');

  assert.match(workflow, /^on:\n  push:\n    branches:\n      - main\n  workflow_dispatch:/m);
  assert.match(workflow, /^permissions:\n  contents: read\n  pages: write\n  id-token: write$/m);
  assert.match(workflow, /^\s*if: github\.ref == 'refs\/heads\/main'$/m);
  assert.match(workflow, /^\s*- uses: actions\/configure-pages@v5$/m);
  assert.match(
    workflow,
    /^\s*- id: deployment\n\s+uses: actions\/deploy-pages@v4$/m,
  );

  const allowedMainPushes = [
    { name: 'tracked main push', event: 'push', ref: 'refs/heads/main' },
    { name: 'first main push', event: 'push', ref: 'refs/heads/main' },
    { name: 'explicit-refspec main push', event: 'push', ref: 'refs/heads/main' },
  ];

  for (const fixture of allowedMainPushes) {
    assert.equal(permitsDeployment(fixture), true, fixture.name);
  }

  assert.equal(
    permitsDeployment({ event: 'push', ref: 'refs/heads/feature/pitch' }),
    false,
  );
  assert.equal(
    permitsDeployment({ event: 'workflow_dispatch', ref: 'refs/heads/feature/pitch' }),
    false,
  );
});
