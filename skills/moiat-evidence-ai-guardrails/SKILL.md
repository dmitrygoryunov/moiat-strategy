---
name: moiat-evidence-ai-guardrails
description: Apply evidence and AI guardrails for the MoIAT strategy prototype. Use when implementing evidence drawers, KPI provenance, structured insight cards, server-side OpenAI usage, or any feature that could blur real, modeled, or illustrative data.
---

# MoIAT Evidence and AI Guardrails

## Purpose

Keep the prototype credible by ensuring every metric, insight, and AI-assisted brief is traceable and clearly labeled.

## Read First

1. `docs/product-requirements-document.md`
2. `docs/data-sources.md`
3. `docs/technical-requirements.md`
4. `docs/system-architecture.md`
5. `data/raw/source_manifests/download-manifest.md`
6. `AI_LOOP.md`

## Workflow

1. Distinguish data types explicitly:
   - official
   - modeled
   - illustrative
2. Keep source, date, formula, and caveat access visible in the UI contract.
3. If a feature uses OpenAI:
   - keep calls server-side only
   - prompt over structured evidence inputs only
   - validate outputs before display or storage
4. Prefer deterministic insight structures first, prose generation second.
5. Use honest language for seeded/demo content.

## Constraints

- Never expose `OPENAI_API_KEY` in browser code.
- Never present illustrative ministry metrics as real ministry data.
- Never synthesize evidence provenance after the fact.
- Do not let model output become canonical truth without schema validation and human-readable caveats.

