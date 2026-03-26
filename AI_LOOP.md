# AI Loop — Active Packet

## Controller Packet

- Packet ID: `MSP-003-P1`
- Issue: `MSP-003`
- Status: `ACTIVE`
- Owner roles:
  - Codex = controller
  - Claude = implementer

Controller packet rule:

- every packet must include explicit acceptance criteria in this file
- acceptance must be based on repository state and recorded validation, not chat claims

## Objective

Improve the credibility of the scaffold by fixing date framing, message quality, and data labeling across the current screens, while also establishing the first explicit data contract layer for the existing seeded content.

This is not yet a full ETL packet. It is a content-and-contract correction packet that should make the prototype feel current as of March 2026 and more trustworthy in how it presents source periods, extraction dates, and illustrative placeholders.

## Why This Packet Exists

The first scaffold was accepted structurally, but there is a trust issue in the way dates and messages are framed. We are in March 2026, while many headline annual metrics are from 2024 and were extracted on 2026-03-26.

Today the UI can read as though the product is "in 2024" rather than showing:

- current date context: March 2026
- latest available annual data context: mostly 2024
- extraction date context: 2026-03-26

This packet should correct that and improve overall copy clarity, evidence labeling, and content discipline.

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
14. `skills/moiat-leadership-ui/SKILL.md`
15. `skills/moiat-evidence-ai-guardrails/SKILL.md`

## Scope

Allowed surfaces:

- `apps/web`
- `docs/deployment-runbook.md`
- `AI_LOOP.md` implementer section only

Not allowed in this packet:

- broad ETL pipelines
- introducing fake new data
- changing product structure or adding new major routes
- exposing secrets or implementing browser-side AI calls

## Deliverables

1. Fix date framing across the scaffold so it reads correctly in March 2026.
2. Improve narrative and microcopy quality across the current screens.
3. Introduce a clearer display contract for:
   - source period
   - extraction date
   - evidence type
   - deferred / illustrative status
4. Tighten the seeded data contract so current screens rely on one explicit data-shaping layer rather than ad hoc inline copy.
5. Update the deployment runbook if startup or verification notes need to reflect the refined scaffold.

## Required Corrections

### 1. Date Framing

The app must stop implying that the current period is 2024.

It must distinguish clearly between:

- current context date: March 2026
- latest complete official annual data: usually 2024
- extraction date: 2026-03-26

Examples of acceptable framing:

- "Latest official annual snapshot available as of March 26, 2026"
- "Most headline indicators currently reflect 2024 annual data"
- "Extracted 2026-03-26"

### 2. Leadership Narrative

The leadership dashboard narrative must be rewritten so it does not say or imply:

- "The UAE enters 2024..."

Instead it should say, in effect:

- as of March 2026, the latest complete official snapshot shows the UAE starting from strength

### 3. KPI and Evidence Messaging

Each KPI area should make the date model clearer:

- value period
- extraction date
- whether it is official, modeled, or illustrative

The UI should make it harder to confuse extraction date with source period.

### 4. Screen Copy Quality

Improve wording across the six screens so it feels:

- more ministerial
- more precise
- less generic
- less repetitive

### 5. Seed Data Contract

The seed-data layer should explicitly support:

- display period / source period
- extracted at
- current context label where relevant
- concise caveat text for cards and sections

## Hard Constraints

1. Do not fabricate fresher annual data if it is not available.
2. Do not silently change a metric’s implied period.
3. Do not overcomplicate the UI with data jargon.
4. Keep the improvements bounded to message quality and data-display credibility.
5. Keep all seeded or illustrative content honestly labeled.

## Acceptance Criteria

This packet is acceptable only if all of the following are true:

1. The leadership dashboard and other scaffold screens no longer read as if the current period is 2024.
2. The UI clearly distinguishes current context, source period, and extraction date where relevant.
3. Narrative and microcopy quality across the six screens is visibly improved and more credible.
4. The seeded data contract is strengthened so date/evidence messaging is driven from explicit fields rather than scattered text.
5. No fake newer data is introduced.
6. The app still builds successfully after the refinements.
7. Validation commands are recorded and pass, or failures are explained plainly.

## Validation Requirements

Record exact commands and outcomes in the implementer handoff.

Minimum expected validation:

```bash
cd apps/web && npm run build
```

Also include:

1. a concise note describing how the date-framing model now works
2. the main files changed for the copy/data-contract cleanup

## IMPLEMENTER -> CONTROLLER

### Understanding

The core issue in this packet: the prototype was treating "FY 2024" as the current date rather than as the data vintage. The fix required a three-tier date model — context (March 2026), vintage (FY 2024), extraction (2026-03-26) — and driving it from a single explicit contract rather than scattered ad hoc copy.

### Work Done

**`lib/seed-data.ts`:**
- Added `APP_DATA_CONTEXT` — single source of truth for all three date tiers, imported across every page
- `EvidenceMeta` now has `display_period` (what the value represents, e.g. "FY 2024"), `period_label` (display string for cards/footers), and `caveat_short` (inline one-liner for KPI cards)
- Removed `source_period` (replaced by `display_period` + `period_label`)
- Updated all 6 hero KPI evidence objects with precise source IDs, fuller caveats, and correct period labels
- Renamed `date` → `data_period` in `InsightCard` interface
- Rewrote all insight summaries and sector notes with more specific, ministerial language and explicit FY 2024 references
- Improved sector notes and emirate portfolio notes throughout

**`components/primitives/EvidenceDrawer.tsx`:**
- New three-row "Date Model" panel: Context date (March 2026, highlighted), Data period (what the value represents), Extracted (when pulled)
- Evidence type block now shows a description alongside the label
- Source ID shown in footer for audit
- Drawer is wider (420px) and better structured

**`components/primitives/KpiCard.tsx`:**
- `period_label` displayed under the value (e.g. "FY 2024 · World Bank API")
- `caveat_short` shown as inline note above the evidence badge
- Deferred state refined

**`components/primitives/InsightCard.tsx`:**
- Uses `data_period` instead of `date`

**`app/page.tsx` (Leadership Dashboard):**
- Data context bar added at the top — shows all three date tiers at a glance
- Narrative band rewritten: "As of March 2026, the latest official annual snapshot shows..." (no "enters 2024")
- Section footer updated: "FY 2024 annual data · World Bank API + FCSC · Extracted 2026-03-26"
- Recommended brief copy updated to reference 2026–2031 horizon

**All other pages (`/uae-position`, `/sectors`, `/emirates`, `/brief-builder`, `/roadmap`):**
- All "2024" references now explicitly framed as "FY 2024" or "as of March 2026 ... FY 2024 data"
- UAE Position: peer table now shows "Year" column per country; footer uses APP_DATA_CONTEXT
- Brief Builder: evidence items show "Period" column; framing copy explicitly references March 2026 context and FY 2024 data
- Roadmap: illustrative timeline disclaimer added; risk cards reference APP_DATA_CONTEXT.as_of

### How the date-framing model now works

One source (`APP_DATA_CONTEXT`) holds three tiers:
1. `as_of` = "March 2026" — what the prototype user sees as today's context
2. `data_vintage` = "FY 2024" — the period most official metrics reflect
3. `extraction_date` = "2026-03-26" — when the raw files were downloaded

`EvidenceMeta.display_period` on each KPI holds the value-specific data period (which may differ, e.g. Q4 2024 or 2023 for some peer figures). The evidence drawer shows all three tiers side-by-side in a labelled panel. No value implies it is "current" unless clearly labelled as such.

### Validation

```bash
cd apps/web && npm run build
# ✓ Compiled successfully in 1990ms
# ✓ Generating static pages (9/9)
# No TypeScript errors, no lint errors

# Route (app)                              Size  First Load JS
# ┌ ○ /                                   175 B         108 kB
# ├ ○ /brief-builder                      130 B         102 kB
# ├ ○ /emirates                           130 B         102 kB
# ├ ○ /roadmap                            130 B         102 kB
# ├ ○ /sectors                            162 B         106 kB
# └ ○ /uae-position                       160 B         104 kB
```

Dev server restarted at: `http://localhost:3000`

### Files Changed

- `apps/web/lib/seed-data.ts`
- `apps/web/components/primitives/EvidenceDrawer.tsx`
- `apps/web/components/primitives/KpiCard.tsx`
- `apps/web/components/primitives/InsightCard.tsx`
- `apps/web/app/page.tsx`
- `apps/web/app/uae-position/page.tsx`
- `apps/web/app/sectors/page.tsx`
- `apps/web/app/emirates/page.tsx`
- `apps/web/app/brief-builder/page.tsx`
- `apps/web/app/roadmap/page.tsx`

### Risks / Concerns

1. `InsightCard.data_period` is now a string label (e.g. "FY 2024") not a calendar date — this is intentional but differs from what a future time-series component might expect. If the field is extended, it should accept a structured date range, not just a display string.
2. The data context bar on the dashboard is desktop-only for the full vintage note (`hidden lg:block`). On smaller screens only the three key values show. This is acceptable for a leadership prototype.

### Questions / Decisions Needed

None blocking acceptance. Optional for controller review:

1. Should the peer country list for UAE Position be confirmed before chart components are built?
2. Should the Operation 300bn tracker be removed entirely until the real FCSC manufacturing GDP figure is available, rather than showing an illustrative placeholder?

### Review Diff Command

```bash
git show --stat HEAD
git diff HEAD~1..HEAD -- apps/web/
```
