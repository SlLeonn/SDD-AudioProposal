# Project Formalization Specification

## Purpose

Define the semester prototype scope.

## Requirements

### Requirement: Bounded Project Concept

The project MUST be named **Portable Guitar MultiFX**. It MUST describe a portable practice unit with guitar input, compact speaker amplification, and few selectable effects. It MUST state its semester-prototype boundary and validation intent. It MUST NOT promise production, circuits, certification, battery or loudness targets, or broad effects coverage.

#### Scenario: Describe the proposed prototype

- GIVEN pitch material is prepared
- WHEN a reviewer reads it
- THEN it identifies the guitar input, speaker-inclusive practice use, and few effects
- AND it states the semester scope and validation intent

#### Scenario: Exclude uncommitted scope

- GIVEN a draft includes an unconfirmed technical target
- WHEN the draft is reviewed
- THEN excluded commitments are absent

### Requirement: Claims and Affordability Boundary

The project MUST present affordability only as a design objective. Project and public copy MUST NOT contain price, market, competitor, performance, benchmark, or unsupported external claims.

#### Scenario: State a non-comparative objective

- GIVEN the project explains value
- WHEN affordability is mentioned
- THEN it is an objective without a price or comparison

#### Scenario: Reject unsupported assertions

- GIVEN copy claims superiority or performance
- WHEN the copy is approved for use
- THEN the assertion is removed or bounded
