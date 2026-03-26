# MoIAT Strategy Prototype

Leadership-grade prototype for demonstrating how MoIAT can become an AI-Native, evidence-native ministry.

This repository is intentionally set up around a controller/implementer workflow:

- Codex owns product framing, architecture, planning, task packets, and final acceptance.
- Claude owns implementation, validation, and day-to-day git hygiene after bootstrap.

## Initial repository shape

- `apps/web` - Next.js app shell for the prototype UI
- `docs` - controller-owned product, architecture, planning, and execution docs
- `data/raw` - versioned source snapshots for approved public datasets
- `data/processed` - transformed analytical outputs for the demo
- `scripts` - ETL and utility scripts
- `tests` - repository-level test surfaces

## Core repository workflow

1. Codex writes the active packet in `AI_LOOP.md`.
2. Claude reads required docs and implements within the approved boundary.
3. Claude records exact validation evidence in `AI_LOOP.md`.
4. Codex reviews repo state and records `ACCEPT`, `REQUEST CHANGES`, `REJECT`, or `HOLD`.

## Secrets

Use `.env.local` for local development only. Never commit real secrets.

