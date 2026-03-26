# Technical Requirements

## 1. Product-Level Requirements

The prototype must:

- feel trustworthy and ministerial
- use curated official-first data
- separate real public data from illustrative workflow data
- provide drill-down evidence for key metrics and insights
- support bounded AI brief generation from structured evidence

## 2. Web Application Requirements

The web application shall:

- provide a leadership-first home page
- provide dedicated views for benchmarking, sectors, emirates, decision briefs, and roadmap
- support evidence drawers on KPI cards, charts, and insight surfaces
- display source metadata, formulas, and caveats
- clearly distinguish official, modeled, and illustrative data

## 3. Data Requirements

The system shall:

- load curated source snapshots from repository-controlled datasets
- transform raw data into reusable analytical tables
- maintain a KPI dictionary with source mappings and formulas
- generate structured insight payloads before any prose generation

## 4. AI Requirements

The system shall:

- use OpenAI server-side only
- generate prose only from structured evidence inputs
- preserve source references in brief-generation flows
- fail explicitly when the AI dependency is unavailable

## 5. UX Integrity Requirements

The UI shall:

- avoid fake enterprise states or placeholder "smartness"
- present honest empty, loading, deferred, and unavailable states
- prioritize clarity for senior leadership
- allow deeper inspection for strategy and transformation users

