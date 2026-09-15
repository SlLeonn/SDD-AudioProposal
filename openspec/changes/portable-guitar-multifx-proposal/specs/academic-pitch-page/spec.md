# Academic Pitch Page Specification

## Purpose

Provide a Spanish five-minute academic pitch page.

## Requirements

### Requirement: Spanish Academic Narrative

The public page MUST be accessible, Spanish, and one-page. Its professional public copy MUST communicate identity, practice need, solution, bounded prototype and validation, expected value, and next steps. It MUST preserve the claims boundary.

#### Scenario: Present the complete pitch

- GIVEN a visitor opens the page
- WHEN they read it
- THEN they can identify every required Spanish narrative element
- AND it supports a five-minute explanation

#### Scenario: Review prohibited public claims

- GIVEN public copy is reviewed
- WHEN it contains price, market, competitor, performance, or benchmark language
- THEN it is absent from the approved page

### Requirement: Accessible Minimalist Presentation

The page MUST use clear hierarchy, minimalist mostly-white visuals, and responsive access. A real-guitar image MAY be used only with verified publication terms. It MUST have meaningful Spanish alternative text and SHALL show required attribution.

#### Scenario: Render an approved image

- GIVEN a real-guitar image has verified terms
- WHEN it appears on the page
- THEN it has meaningful Spanish alternative text
- AND it shows required attribution

#### Scenario: Handle an unverified image

- GIVEN a real-guitar image lacks verifiable terms
- WHEN publication is prepared
- THEN the image is not published
