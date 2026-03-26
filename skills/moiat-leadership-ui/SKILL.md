---
name: moiat-leadership-ui
description: Build or modify the MoIAT strategy prototype web UI, especially the leadership dashboard, benchmark pages, strategy screens, navigation shell, KPI cards, insight cards, and evidence drawers. Use when tasks affect the browser experience, page structure, or leadership-first interaction design.
---

# MoIAT Leadership UI

## Purpose

Deliver a bounded, leadership-grade interface that feels ministerial, evidence-led, and honest about current implementation state.

## Read First

1. `docs/ui-design.md`
2. `docs/product-requirements-document.md`
3. `docs/technical-requirements.md`
4. `docs/system-architecture.md`
5. `docs/module-boundaries.md`
6. `AI_LOOP.md`

## Workflow

1. Start from the real app shell and route structure, not disconnected mock screens.
2. Keep navigation aligned to the six core product sections.
3. Make the narrative hierarchy visible:
   - narrative framing first
   - KPIs and insight signals second
   - deeper analytical sections after
4. Reuse shared components for:
   - page headers
   - KPI cards
   - insight cards
   - evidence drawers or evidence side panels
5. Use honest seeded or deferred states when live or transformed data is not implemented yet.
6. Keep the screens polished but bounded. Prefer a few strong sections over broad shallow coverage.

## Constraints

- Do not make the UI feel like a generic BI dashboard.
- Do not add fake live behavior.
- Do not hide missing capability behind “AI” language.
- Do not put KPI logic or heavy data transformations in the browser.

