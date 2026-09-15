## Exploration: portable-guitar-multifx-proposal

### Current State
The workspace contains only SDD metadata: no application, Git repository, implementation stack, tests, or existing presentation. Native dispatch makes OpenSpec authoritative for this change; the active artifact is this exploration.

- **Credible semester scope:** propose and later demonstrate a portable proof-of-concept with one guitar input path, compact amplification stage, a deliberately limited selectable-effects chain, enclosure/power considerations, and a documented bench demonstration. Production readiness, broad effects coverage, certification, battery endurance, acoustic loudness, and commercial price/performance claims are out of scope until evidenced.
- **Five-minute narrative:** problem during portable electric-guitar practice → proposed device and intended user → bounded prototype architecture → semester validation plan and expected learning → close with the project value and approval ask.
- **Page information architecture:** hero and project identity; practice problem; proposed solution; bounded scope and validation; expected value/next steps; image and source credits. Use a predominantly white layout, generous spacing, dark neutral typography, one restrained accent color, and a real-guitar photograph as the visual anchor.

### Affected Areas
- `openspec/changes/portable-guitar-multifx-proposal/exploration.md` — records scope, narrative, technical direction, and decisions needed before proposal.
- `openspec/changes/portable-guitar-multifx-proposal/proposal.md` — future proposal must turn the confirmed scope and claims boundary into objectives, risks, and deliverables.
- Future GitHub Pages source and deployment configuration — not yet present; their stack and repository identity remain intentionally undecided.

### Approaches
1. **Content-first static one-page site** — semantic HTML and a small CSS layer, deployed directly through GitHub Pages.
   - Pros: minimal dependencies and maintenance; fast load; clear review surface; suitable for a single five-minute presentation.
   - Cons: layout evolution is manual; no reusable content system if the project expands.
   - Effort: Low

2. **Static-site generator with a build step** — generate the same one-page presentation from a small component/content structure.
   - Pros: easier reuse if the pitch becomes a project log or documentation site; structured content can scale.
   - Cons: adds a toolchain, deployment configuration, and maintenance without a confirmed need.
   - Effort: Medium

### Recommendation
Use the content-first static one-page direction unless the proposal confirms an ongoing documentation need. It best fits a formal five-minute pitch and keeps GitHub Pages maintenance low. Define the hardware deliverable as a limited proof-of-concept and phrase affordability only as a design objective; any competitor, market-price, or comparative-performance statement belongs to a separate research lane with verifiable sources. The selected photograph must have a license compatible with public web reuse, retain required attribution in the credits, and receive meaningful alt text; do not use it as a substitute for explaining the concept.

### Risks
- **Unconfirmed product decisions:** approve the public-facing language, project and repository name, target audience, prototype boundary, and whether the site may make no price claims, only a qualified objective, or evidence-backed comparisons.
- A photograph without clear reuse rights or required attribution cannot be safely published; decorative treatment must not remove accessible text alternatives or credit information.
- Unsupported hardware performance, price, or market statements would undermine the academic pitch; commission research before making any such comparison.
- A framework/toolchain chosen before content scope is settled could add needless deployment and review complexity.

### Ready for Proposal
No — obtain the listed product decisions first, especially the public page language, project/repository name, prototype boundary, and permitted strength of market-price claims. After confirmation, proceed to `sdd-propose`; use a research lane first if the proposal needs externally supported comparisons.
