# Repository Structure

## Top-Level Layout

| Path | Purpose |
| --- | --- |
| `apps/web/` | Next.js app for the leadership and strategy prototype UI |
| `docs/` | Product, architecture, UX, planning, and delivery control docs |
| `data/raw/` | Raw source snapshots from approved public datasets |
| `data/processed/` | Cleaned and transformed demo datasets |
| `scripts/` | ETL, KPI generation, export generation, and utilities |
| `tests/` | Repository-level tests and integration checks |
| `AI_LOOP.md` | Active controller/implementer packet |
| `CLAUDE.md` | Claude execution rules |
| `codex_role.md` | Codex controller role |
| `claude_role.md` | Claude implementer role |

## Data Structure

Expected conventions:

- raw source files should remain immutable once added
- processed datasets should be reproducible from scripts
- each dataset should retain source metadata and versioning

## App Structure

`apps/web/` is the first application surface and should eventually contain:

- app shell and navigation
- page routes for the six main product sections
- evidence drawer patterns
- brief generation UX
- server-side AI integrations

## Documentation Structure

Controller-owned docs define:

- product intent
- architecture
- UI direction
- technical requirements
- plan and issue tracking
- deployment instructions

