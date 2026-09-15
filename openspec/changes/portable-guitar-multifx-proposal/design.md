# Design: Portable Guitar MultiFX

## Technical Approach

Deliver a no-build site from `site/`: semantic HTML holds the Spanish five-minute narrative, CSS provides a mostly-white responsive layout, and a small vanilla-JS enhancement marks the current in-page navigation link. All essential content and navigation work without JavaScript or network access, so opening `site/index.html` is the local presentation fallback.

This implements `academic-pitch-page`, `project-formalization`, and `github-pages-publication` without a framework, market evidence, or performance promises. External deployment guidance: [GitHub Docs—Deploying GitHub Pages with custom workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages). The workflow adopts `actions/configure-pages@v5`, `actions/upload-pages-artifact@v4`, and `actions/deploy-pages@v4` with `contents: read`, `pages: write`, and `id-token: write`; this is design guidance, not publication readiness.

## Architecture Decisions

| Decision | Option and tradeoff | Decision and rationale |
|---|---|---|
| Published root | Repository root is simpler but could publish planning files. | Publish only `site/`; it isolates the public artifact from `openspec/`. |
| Runtime | A framework could add components but needs a build chain. | Use HTML/CSS/vanilla JS only; the page remains portable and directly runnable. |
| Guitar treatment | A background image or hotlink hides attribution and adds availability risk. | Use a local `<figure>` with descriptive Spanish `alt`, adjacent credit, and license record. |
| Enhancement | Scripted navigation could become a dependency. | JS only updates `aria-current` through `IntersectionObserver`; absent support, native anchor navigation remains. |

## Data Flow

    Reviewed Spanish copy ──→ site/index.html ──→ local browser fallback
                                      │
    verified image + license record ──┤
                                      ▼
    push/dispatch on main ─→ Pages workflow ─→ packaged site/ ─→ Pages URL

## File Changes

| File | Action | Description |
|---|---|---|
| `README.md` | Create | Identity, scope, Pages steps, and direct-file fallback. |
| `site/index.html` | Create | Spanish semantic one-page pitch and image figure. |
| `site/styles.css` | Create | Responsive visual tokens, focus states, and reduced-motion rules. |
| `site/script.js` | Create | Optional current-section navigation enhancement. |
| `site/assets/images/guitar-photo.jpg` | Create | Locally served, verified real-guitar photograph. |
| `site/assets/images/guitar-photo.license.md` | Create | Image provenance and required credit. |
| `.github/workflows/deploy-pages.yml` | Create | Constrained GitHub Pages workflow. |
| `tests/site-contract.test.mjs` | Create | Dependency-free content and image contract checks. |
| `tests/deploy-pages-workflow.test.mjs` | Create | Workflow boundary checks. |

## Interfaces / Contracts

- `site/index.html` uses `header`, `nav`, `main`, ordered sections (identity, need, solution, prototype/validation, value, next steps), and Spanish copy only. Copy may call affordability a design objective; it excludes prices, comparisons, markets, benchmarks, and unverified assertions.
- Asset URLs are relative to `site/`, never root-relative, so local files and project Pages URLs resolve identically.
- The image is admitted only when its license record contains file name, creator, source URL, license/terms and URL, retrieval date, changes, and required attribution. Its adjacent `<figcaption>` must satisfy that record; its `alt` describes the final photograph in Spanish. If verification fails, omit both image and credit rather than publish uncertain material.
- The workflow checks out its event repository without repository/path overrides, configures Pages, uploads exactly `./site`, then deploys. It permits `push` and `workflow_dispatch` only when `github.ref` is `refs/heads/main`.

## Testing Strategy

| Layer | What to test | Approach |
|---|---|---|
| Contract | Required Spanish sections, prohibited claims, landmarks, relative assets, image metadata/credit/alt | `node --test` textual checks, added RED before the page. |
| Workflow | Actions, permissions, fixed artifact root, and branch guard | `node --test` workflow-contract fixtures, added RED first. |
| Manual | Keyboard/focus, 320px and desktop layout, JS-disabled and direct-file fallback | Browser review; inspect license source and credit before accepting the asset. |

No test runner exists today; these tests use Node's built-in runner only after its availability is verified. A successful GitHub Action and published URL remain a separate manual release check.

## Threat Matrix

| Boundary | Applicability | Design response | Planned RED tests |
|---|---|---|---|
| Documentation-like paths | N/A — Pages packages static files and executes no classified documentation. | N/A | N/A |
| Git repository selection | Applicable — the workflow consumes an Actions event repository. Safe: default checkout and exact `./site` only. Failure: workflow review rejects `git -C`, repository/path overrides, `../` traversal, and absolute artifact paths. | `deploy-pages-workflow.test.mjs` rejects fixtures for `git -C`, `../site`, and `/tmp/site`; accepts only `./site`. |
| Commit state | N/A — no step stages, commits, or uses `commit -a`. | N/A | N/A |
| Push state | Applicable — deployment is controlled by the incoming ref. Safe: a tracked, first, or explicit-refspec push resolving to `refs/heads/main` may deploy; all other refs do not. Failure: no deployment attempt from a feature ref or non-main dispatch. | Three RED event-ref fixtures cover tracked, first, and explicit-refspec main pushes; a feature-ref fixture is denied. |
| PR commands | N/A — no PR trigger, CLI, or composed PR command is present. | N/A | N/A |

## Migration / Rollout

No migration required. After copy and image review, configure the repository to use GitHub Actions Pages, merge to `main`, inspect the run and URL, and present the local `site/index.html` fallback if deployment is unavailable.

## Open Questions

- [ ] Confirm the final image source, creator, and reuse terms before adding the asset.
- [ ] Confirm that `main` is the repository's intended publication branch before enabling the workflow.
