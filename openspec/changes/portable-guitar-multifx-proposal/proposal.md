# Proposal: Portable Guitar MultiFX

## Intent

Formalize and present a credible semester prototype: a portable guitar unit with guitar input, compact speaker amplification, and a deliberately small selectable-effects set. The project needs a concise, professional Spanish pitch that supports a five-minute Electronics Engineering presentation without unsupported commercial claims.

## Scope

### In Scope
- Define the project identity, intended practice use, bounded prototype, validation intent, and affordability as a design objective.
- Create a minimalist, predominantly white, Spanish one-page static presentation with an academic five-minute narrative.
- Prepare the repository and static site for GitHub Pages publication, including an appropriately licensed real-guitar photograph, required credit, and Spanish accessible alt text.

### Out of Scope
- Hardware production, detailed circuit design, certification, battery or loudness targets, and broad effects coverage.
- Prices, competitor or product comparisons, performance benchmarks, market-position claims, and research-based assertions.
- A framework, content management system, or multi-page documentation site.

## Capabilities

### New Capabilities
- `project-formalization`: Defines the identity, user context, semester prototype boundary, affordability objective, and claims boundary.
- `academic-pitch-page`: Provides an accessible Spanish static one-page pitch with the project narrative, visual hierarchy, and required image credit.
- `github-pages-publication`: Makes the repository’s static presentation publishable through GitHub Pages with a documented repository identity.

### Modified Capabilities
None. No existing capability specifications are present.

## Approach

Use content-first semantic HTML and a small CSS layer rather than a framework. Structure the page as identity, practice need, proposed solution, bounded prototype and validation, expected value, and next steps. Include a real-guitar photograph only after its reuse terms are verified; provide any required attribution and meaningful Spanish alt text. State affordability solely as an objective.

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `README.md` | New | Formal project identity, scope, and publication guidance. |
| `index.html` | New | Spanish one-page academic pitch. |
| `styles.css` | New | Minimalist visual system and responsive layout. |
| `assets/images/` | New | Verified reusable guitar photograph and associated attribution data. |
| GitHub Pages repository settings | New | Static-site publication configuration. |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Photograph lacks clear reuse terms | Med | Do not publish it; select a compliant image and retain required credit. |
| Unsupported claims weaken the pitch | Med | Keep claims within the confirmed prototype boundary and omit comparisons. |
| Prototype scope expands beyond a semester | Med | Limit the effects set and document exclusions. |
| Pages deployment fails before presentation | Low | Rehearse the published page and retain a local static fallback. |

## Rollback Plan

Disable GitHub Pages in repository settings, revert the static-site commit, and remove any published image asset and attribution together. Retain this proposal as the planning audit trail.

## Dependencies

- A GitHub repository using the `portable-guitar-multifx` identity.
- A real-guitar photograph with verified public-web reuse terms and any required attribution.

## Success Criteria

- [ ] The published Spanish page communicates the project, practice need, bounded prototype, and next steps within a five-minute presentation.
- [ ] The page is accessible, responsive, predominantly white, and uses a verified photograph with Spanish alt text and required credit.
- [ ] The repository is ready for GitHub Pages, and no public copy includes prohibited price, comparison, benchmark, or unsupported external claims.
