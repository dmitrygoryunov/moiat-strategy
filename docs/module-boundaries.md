# Module Boundaries

This repository should preserve clear boundaries between product definition, UI delivery, data preparation, and AI-backed decision support.

## Primary Boundaries

### `apps/web`

Owns:

- presentation logic
- route composition
- user interactions
- page-level server actions and API handlers where needed
- brief rendering and evidence navigation UX

Does not own:

- canonical KPI formulas
- raw ETL logic
- persistent data-model definitions outside app-local needs
- uncontrolled AI prompting over arbitrary sources

### `scripts`

Owns:

- data ingestion helpers
- transforms
- KPI calculations
- export generation
- validation scripts

Does not own:

- UI rendering
- browser-delivered interactions

### `docs`

Owns:

- product and architecture intent
- controller decisions
- acceptance criteria
- planning state

### `data`

Owns:

- raw source snapshots
- processed outputs used by the prototype

Does not own:

- hand-edited business logic hidden inside data files

## Change Rules

- A packet should avoid changing product docs, ETL logic, and broad UI behavior all at once unless explicitly approved.
- If a feature needs new data contracts, document the contract first and keep the implementation slice reviewable.
- If an AI feature is added, keep the prompt inputs bounded to curated evidence structures.

