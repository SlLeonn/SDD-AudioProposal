import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const pagePath = resolve(root, 'site/index.html');
const stylesPath = resolve(root, 'site/styles.css');
const scriptPath = resolve(root, 'site/script.js');
const licensePath = resolve(root, 'site/assets/images/guitar-photo.license.md');

const sections = [
  ['identidad', 'Portable Guitar MultiFX'],
  ['necesidad', 'Necesidad de práctica'],
  ['solucion', 'Solución propuesta'],
  ['prototipo-validacion', 'Prototipo y validación'],
  ['valor', 'Valor esperado'],
  ['siguientes-pasos', 'Siguientes pasos'],
];

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

test('defines the Spanish semantic six-section academic pitch', async () => {
  const html = await readFile(pagePath, 'utf8');

  assert.match(html, /<html[^>]+lang="es"/i);
  assert.match(html, /<header\b/i);
  assert.match(html, /<nav\b[^>]*aria-label="Navegación principal"/i);
  assert.match(html, /<main\b/i);

  for (const [id, heading] of sections) {
    assert.match(html, new RegExp(`<section\\b[^>]*id="${id}"`, 'i'));
    assert.match(html, new RegExp(`<h2[^>]*>${heading}</h2>`, 'i'));
    assert.match(html, new RegExp(`href="#${id}"`, 'i'));
  }

  assert.match(html, /entrada de guitarra/i);
  assert.match(html, /altavoz compacto/i);
  assert.match(html, /pocos efectos seleccionables/i);
  assert.match(html, /prototipo académico para el semestre/i);
  assert.match(html, /validar la integración/i);
  assert.match(html, /objetivo de diseño/i);
});

test('excludes prohibited public claims and uncommitted targets', async () => {
  const html = await readFile(pagePath, 'utf8');
  const prohibited = /precio|costo|mercado|competidor|comparaci(?:ón|ones)|benchmark|rendimiento|desempeño|superior|mejor que|\b\d+\s?(?:db|w)\b/iu;
  const uncommitted = /producción|circuito|certificación|batería|decibel|loudness|cobertura amplia/iu;

  assert.doesNotMatch(html, prohibited);
  assert.doesNotMatch(html, uncommitted);
});

test('uses only relative asset paths when assets are referenced', async () => {
  const html = await readFile(pagePath, 'utf8');
  const references = [...html.matchAll(/(?:src|href)="([^"]+)"/gi)].map((match) => match[1]);

  for (const reference of references) {
    assert.ok(!reference.startsWith('/'), `asset reference must not be root-relative: ${reference}`);
  }
});

test('provides responsive visual and keyboard navigation enhancements', async () => {
  const [html, styles, script] = await Promise.all([
    readFile(pagePath, 'utf8'),
    readFile(stylesPath, 'utf8'),
    readFile(scriptPath, 'utf8'),
  ]);

  assert.match(html, /<link rel="stylesheet" href="styles\.css">/i);
  assert.match(html, /<script src="script\.js" defer><\/script>/i);
  assert.match(styles, /--page-background:\s*#ffffff/i);
  assert.match(styles, /a:focus-visible\s*\{/i);
  assert.match(styles, /outline:\s*3px solid var\(--accent\)/i);
  assert.match(styles, /@media \(min-width: 48rem\)/i);
  assert.match(styles, /@media \(prefers-reduced-motion: reduce\)/i);
  assert.match(script, /IntersectionObserver/i);
  assert.match(script, /setAttribute\('aria-current', 'location'\)/i);
  assert.match(script, /removeAttribute\('aria-current'\)/i);
});

test('omits the guitar figure and credit until license terms are verified', async () => {
  const html = await readFile(pagePath, 'utf8');
  const hasLicenseRecord = await exists(licensePath);
  const publishesGuitar = /guitar-photo\.(?:jpe?g|png|webp)/i.test(html);

  if (!hasLicenseRecord) {
    assert.equal(publishesGuitar, false);
    assert.doesNotMatch(html, /<(?:figure|img|figcaption)\b/i);
    return;
  }

  const license = await readFile(licensePath, 'utf8');
  assert.match(license, /(?:file name|archivo)/i);
  assert.match(license, /(?:creator|autor)/i);
  assert.match(license, /source.*https?:\/\//i);
  assert.match(license, /license.*https?:\/\//i);
  assert.match(license, /(?:retrieval date|fecha de consulta)/i);
  assert.match(license, /(?:changes|cambios)/i);
  assert.match(license, /(?:attribution|atribución)/i);
  assert.match(html, /<figure\b/i);
  assert.match(html, /<img[^>]+alt="[^"]+"/i);
  assert.match(html, /<figcaption>[^<]+<\/figcaption>/i);
});
