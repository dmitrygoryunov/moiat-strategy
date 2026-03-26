# AI Loop — Active Packet

## Controller Packet

- Packet ID: `MSP-002-P1`
- Issue: `MSP-002`
- Status: `ACTIVE`
- Owner roles:
  - Codex = controller
  - Claude = implementer

Controller packet rule:

- every packet must include explicit acceptance criteria in this file
- acceptance must be based on repository state and recorded validation, not chat claims

## Objective

Build the first real web application scaffold in `apps/web`: a leadership-grade product shell with 5-7 screens, core navigation, and the key content sections needed to make the prototype reviewable and demoable.

This packet is intentionally UI-first. It should establish the application shell, route structure, and evidence-aware layout patterns without overclaiming live data, AI capability, or full analytics completeness.

## Why This Packet Exists

The repository now has product, architecture, UI, and source documents, plus an initial raw-data cache. The next step is to make the prototype tangible through a real web shell that reflects the planned product structure:

- Leadership Dashboard
- UAE Position
- Sector Prioritization
- Emirate Portfolio
- Decision Brief Builder
- Roadmap & Operating Model
- evidence access patterns

This should follow the same practical approach as the reference project:

- real product shell, not disconnected mockups
- honest empty/deferred states where data is not wired yet
- visible structure that Claude can build on iteratively

## Required Repo Docs

Read before coding:

1. `docs/development-workflow.md`
2. `docs/repository-structure.md`
3. `docs/module-boundaries.md`
4. `docs/engineering-standards.md`
5. `docs/project-plan.md`
6. `docs/issue-list.md`
7. `docs/ui-design.md`
8. `docs/product-requirements-document.md`
9. `docs/system-architecture.md`
10. `docs/technical-requirements.md`
11. `docs/data-sources.md`
12. `data/raw/source_manifests/download-manifest.md`
13. `CLAUDE.md`

## Scope

Allowed surfaces:

- `apps/web`
- `tests`
- `docs/deployment-runbook.md`
- `AI_LOOP.md` implementer section only

Not allowed in this packet:

- broad ETL implementation
- KPI computation pipelines
- backend services beyond the minimum required by a Next.js scaffold
- fake live data integrations
- browser-side secret exposure

## Deliverables

1. Initialize the Next.js web app in `apps/web`.
2. Implement a shared application shell with navigation for 5-7 screens.
3. Add routes/pages for:
   - Leadership Dashboard
   - UAE Position
   - Sector Prioritization
   - Emirate Portfolio
   - Decision Brief Builder
   - Roadmap & Operating Model
4. Add shared UI primitives for:
   - KPI cards
   - insight cards
   - page narrative headers
   - evidence drawer or evidence side-panel pattern
5. Populate each screen with realistic scaffold sections and honest placeholder/deferred states where real data wiring is not yet implemented.
6. Keep the design aligned with `docs/ui-design.md`:
   - leadership-grade
   - editorial and evidence-led
   - not a generic BI dashboard

## Required Screen Content

### 1. Leadership Dashboard

Must include:

- top narrative summary
- six hero KPI placeholders or static seed values clearly tied to the documented KPI set
- momentum / opportunity / risk insight row
- anomaly or watchlist section
- recommended brief section

### 2. UAE Position

Must include:

- benchmark narrative header
- peer comparison section
- competitiveness dimensions section
- methodology / evidence access entry point

### 3. Sector Prioritization

Must include:

- national prioritization framing
- sector matrix or card grid
- opportunity and risk sections
- evidence access pattern

### 4. Emirate Portfolio

Must include:

- emirate portfolio framing
- emirate cards, table, or map-placeholder section
- comparative strengths and dependencies section

### 5. Decision Brief Builder

Must include:

- issue framing section
- supporting evidence section
- options and trade-offs section
- risks and next actions section

### 6. Roadmap & Operating Model

Must include:

- AI-Native MoIAT framing
- 0-3, 3-12, and 12-24 month sections
- governance, data, and capability sections

## Hard Constraints

1. No fake live integrations.
   - If data is static or seeded, present it honestly as scaffold/demo content.

2. No generic "AI copilot" shell.
   - The UI must feel like ministerial decision support, not a chatbot wrapper.

3. Evidence access must be visible.
   - The UI must include a reusable evidence drawer or panel pattern, even if backed by static seed content in this packet.

4. Keep the UI bounded.
   - Fewer polished sections are better than broad superficial coverage.

5. Keep `OPENAI_API_KEY` server-side only.

## Acceptance Criteria

This packet is acceptable only if all of the following are true:

1. `apps/web` contains a runnable Next.js app scaffold.
2. The app has 5-7 real routes/screens matching the product structure above.
3. There is a shared shell/navigation pattern across screens.
4. There are shared reusable components for KPI/insight/evidence-oriented content.
5. The UI clearly follows the leadership-first, evidence-led direction in `docs/ui-design.md`.
6. Any seeded or illustrative content is presented honestly and does not pretend to be live ministry data.
7. Validation commands are recorded and pass, or failures are explained plainly.

## Validation Requirements

Record exact commands and outcomes in the implementer handoff.

Minimum expected validation:

```bash
cd apps/web && npm install
cd apps/web && npm run build
```

Also include:

1. the command used to start the app locally
2. a brief note describing each implemented route

## Implementer -> Controller

Pending.
