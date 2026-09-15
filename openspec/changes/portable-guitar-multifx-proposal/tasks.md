# Tasks: Portable Guitar MultiFX

## Review Workload Forecast

| Field | Value |
|---|---|
| Estimated changed lines | 520–700 |
| 400-line budget risk | High |
| 800-line session stop risk | Low |
| Chained PRs recommended | Yes |
| Suggested split | PR 1 → PR 2 → PR 3 |
| Delivery strategy | ask-on-risk |
| Chain strategy | stacked-to-main |

Decision needed before apply: Yes
Chained PRs recommended: Yes
Chain strategy: stacked-to-main
400-line budget risk: High
800-line session stop budget: 800

### Suggested Work Units

| Unit | Goal | Likely PR | Focused test command | Runtime harness | Rollback boundary |
|---|---|---|---|---|---|
| 1 | Semantic Spanish pitch and contracts | PR 1 | `node --test tests/site-contract.test.mjs` | Open `site/index.html` offline | `site/index.html`, `tests/site-contract.test.mjs` |
| 2 | Visual, image, and navigation enhancement | PR 2 | `node --test tests/site-contract.test.mjs` | Keyboard review at 320px and desktop | `site/styles.css`, `site/script.js`, `site/assets/` |
| 3 | Pages publication boundary | PR 3 | `node --test tests/deploy-pages-workflow.test.mjs` | Run workflow from `main` and inspect artifact | `.github/workflows/deploy-pages.yml`, workflow test |
| 4 | Public remote and Pages release after local verification | Post-merge release after PR 3 | `node --test tests/site-contract.test.mjs tests/deploy-pages-workflow.test.mjs && gh auth status` | Create the public remote, select GitHub Actions Pages, inspect the `main` URL | `origin` and Pages configuration; retain `site/index.html` |

## Phase 1: Repository and RED Contracts

- [x] 1.1 Initialize the Git repository in `/home/leon/projects/SDD-AudioProposal`; create `site/`, `site/assets/images/`, `tests/`, and `.github/workflows/`, then verify `node --test`.
- [x] 1.2 RED: Add `tests/site-contract.test.mjs` for Spanish landmarks and six narrative sections, relative assets, prohibited-claim absence, and the licensed-image/omission gate.
- [x] 1.3 RED: Add `tests/deploy-pages-workflow.test.mjs` rejecting `git -C`, checkout repository/path overrides, `../site`, and `/tmp/site`; accept only `./site`.
- [x] 1.4 RED: Add main-ref fixtures in `tests/deploy-pages-workflow.test.mjs` for tracked, first, and explicit-refspec pushes; deny feature-ref deployment.

## Phase 2: Accessible Static Pitch

- [x] 2.1 Create `site/index.html` with Spanish semantic identity, need, solution, bounded prototype/validation, value, and next-step sections; omit prohibited claims.
- [x] 2.2 Create `site/styles.css` with mostly-white responsive layout, visible focus states, and reduced-motion rules.
- [x] 2.3 Create `site/script.js` as optional `IntersectionObserver` navigation enhancement that maintains native anchors without JavaScript.
- [x] 2.4 Add `site/assets/images/guitar-photo.jpg` and `site/assets/images/guitar-photo.license.md` only after provenance fields and credit verify; otherwise omit its figure and credit from `site/index.html`.

## Phase 3: Publication Wiring

- [x] 3.1 Create `README.md` with repository identity, bounded scope, GitHub Pages activation steps, and the direct-file fallback `site/index.html`.
- [x] 3.2 GREEN: Create `.github/workflows/deploy-pages.yml` with pinned Pages actions, minimum permissions, default checkout, exact `./site` artifact, and `main` ref guard.
- [x] 3.3 Run `node --test tests/site-contract.test.mjs tests/deploy-pages-workflow.test.mjs`; resolve all RED contracts without adding unsupported claims.

## Phase 4: Release Checks

- [x] 4.1 Manually verify `site/index.html` offline and JavaScript-disabled, including keyboard focus and 320px/desktop layouts.
- [x] 4.2 Review image source/credit before publication; retain `site/index.html` as the local fallback if remote publication is unavailable.
- [x] 4.3 After 4.1–4.2 and PRs 1–3 merge to `main`, require `gh auth status`; use existing authentication only (no tokens or secrets) to run `gh repo create portable-guitar-multifx --public --source=. --remote=origin --push`.
- [x] 4.4 Select GitHub Actions as the public repository’s Pages source; inspect the `main` deployment URL and artifact, or leave the local fallback intact if authentication, creation, configuration, or deployment cannot run.
