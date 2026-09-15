# GitHub Pages Publication Specification

## Purpose

Publish the static academic presentation through GitHub Pages.

## Requirements

### Requirement: Repository Identity and Publication Guidance

The repository MUST document its `portable-guitar-multifx` identity and GitHub Pages publication steps. It MUST identify a local static fallback if publication is unavailable.

#### Scenario: Prepare publication

- GIVEN a maintainer follows repository guidance
- WHEN they prepare the presentation for GitHub Pages
- THEN they can identify its identity and publication steps

#### Scenario: Use the publication fallback

- GIVEN GitHub Pages is unavailable
- WHEN the maintainer needs to present the material
- THEN the local static fallback remains available

### Requirement: Published Content Integrity

The GitHub Pages presentation MUST expose the approved Spanish page without adding prohibited claims or separating required image attribution from its image.

#### Scenario: Publish approved content

- GIVEN the approved presentation is published
- WHEN a visitor opens the GitHub Pages address
- THEN the approved Spanish pitch page is available with its required content

#### Scenario: Validate deployment changes

- GIVEN a publication change alters public content or image handling
- WHEN the deployment is reviewed
- THEN prohibited claims are absent and required image attribution remains available
