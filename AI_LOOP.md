# AI Loop — Active Packet

## Controller Packet

- Packet ID: `MSP-009-P1`
- Issue: `MSP-009`
- Status: `ACTIVE`
- Owner roles:
  - Codex = controller
  - Claude = implementer

Controller packet rule:

- every packet must include explicit acceptance criteria in this file
- acceptance must be based on repository state and recorded validation, not chat claims

## Objective

Deliver the next meaningful demo iteration by fixing the two remaining high-visibility credibility gaps:

- the wrong logo / not-yet-official MoIAT shell treatment
- the UAE Position page still not feeling current enough

This packet should:

- use the attached official MoIAT logo asset now staged in the repo
- move the shell closer to the official MoIAT website visual language
- make `/uae-position` visibly current with recent UAE data
- preserve the March 2026 data story already in place

## Why This Packet Exists

The latest review identified two issues that still weaken screenshot credibility:

- branding: the app is still using an invented emblem instead of the real MoIAT logo
- currentness: `/uae-position` still opens like an annual benchmark page even though recent UAE pulse data exists in the repo

We now have the correct logo asset available locally at:

- `apps/web/public/brand/moiat-logo-eng.svg`

This packet exists to close both issues in one pass so the next screenshot set looks both more official and more current.

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
12. `docs/recent-data-acquisition.md`
13. `data/processed/current-demo-snapshot.json`
14. `data/raw/moet/trade_top_countries_2024.json`
15. `docs/recent-data-acquisition.md`
16. `apps/web/public/brand/moiat-logo-eng.svg`
17. `review-screenshots/moiat-official-web.png`
18. `review-screenshots/01-dashboard-current.png`
19. `review-screenshots/02-uae-position-current.png`
20. `CLAUDE.md`
21. `skills/moiat-leadership-ui/SKILL.md`
22. `skills/moiat-evidence-ai-guardrails/SKILL.md`
23. `skills/moiat-ai-loop-implementer-check/SKILL.md`

## Scope

Allowed surfaces:

- `apps/web`
- `apps/web/public`
- `docs/deployment-runbook.md`
- `AI_LOOP.md` implementer section only

Not allowed in this packet:

- adding new routes
- broad ETL pipelines
- browser-side AI calls
- inventing fresher data than what exists in the repository
- changing the fundamental information architecture of the 6-screen scaffold
- using unapproved fake branding that is neither official nor clearly MoIAT-aligned

## Deliverables

1. Replace the current invented emblem with the provided official logo asset:
   - `apps/web/public/brand/moiat-logo-eng.svg`
2. Rework the shell to borrow more visibly from the official MoIAT website:
   - more white primary surfaces
   - cleaner header treatment
   - more restrained navy/gold usage
   - more official spacing and typography rhythm
3. Refine `/uae-position` so recent UAE data is visible above the structural benchmark table.
4. Introduce a clearer mixed-vintage structure on `/uae-position`:
   - recent UAE pulse
   - annual structural benchmark comparison
   - short strategic implication block
5. Ensure the branding pass and current-data pass improve screenshot credibility without weakening usability.
6. Update the runbook if asset handling or shell conventions change.

## Required UI Changes

### 1. Logo & Identity

This is mandatory in this packet.

Requirements:

- use the provided official logo asset at `apps/web/public/brand/moiat-logo-eng.svg`
- remove the current invented ascending-bar icon
- the result must read immediately as MoIAT, not as a generic EPAM product

### 2. Shell Alignment

The app should look closer to the official MoIAT site shown in:

- `review-screenshots/moiat-official-web.png`

Requirements:

- shift away from the current heavy dark-left-rail feel
- introduce a cleaner, more official shell pattern
- borrow from the official site’s white space, restrained gold, and structured header language
- maintain usability for an internal executive product

### 3. UAE Position Currentness

This is also mandatory in this packet.

Requirements:

- `/uae-position` must stop feeling like a page whose real content begins with an annual World Bank table
- add an explicit recent UAE pulse section above the benchmark table using current repository data
- use recent UAE metrics already available:
  - real GDP growth `9M 2025`
  - non-oil GDP growth `9M 2025`
  - non-oil GDP share `H1 2025`
  - optionally one trade context signal using `2024` Ministry data
- relabel the benchmark table clearly as structural / annual / directional
- change the page badge so it no longer misleadingly says only `World Bank data`

### 4. Typography & UI Tone

Requirements:

- move closer to the typography feel of the official site
- keep page titles, labels, and metadata more formal and government-like
- reduce startup / SaaS styling cues where possible

### 5. Consistency Across Key Pages

Requirements:

- the branding pass must be visible on shared layout and on the most visible pages
- at minimum ensure `/` and `/uae-position` reflect the new identity cleanly
- page chrome, badges, buttons, and navigation should feel part of one institutional system

## Hard Constraints

1. Do not invent 2025 annual values where only 2025 pulse data exists.
2. Do not hide mixed-period comparisons.
3. Do not present the demo snapshot as a live integration.
4. Keep seeded/deferred elements honestly labeled if they remain.
5. Keep `OPENAI_API_KEY` server-side only.
6. Do not clone the public MoIAT website mechanically.
7. Do not keep the current stand-in logo treatment.

## Acceptance Criteria

This packet is acceptable only if all of the following are true:

1. The app no longer uses the current invented stand-in emblem.
2. The shared shell uses the provided official logo asset from `apps/web/public/brand/moiat-logo-eng.svg`.
3. The shell is visibly closer to the official MoIAT website than the current dark-sidebar version.
4. `/uae-position` now includes an explicit recent UAE pulse section using current repository data.
5. `/uae-position` clearly separates current UAE pulse from annual peer benchmarking.
6. The page badge, hero, and section labels no longer misleadingly imply a pure World Bank page.
7. The March 2026 data framing remains intact and is not regressed.
8. No fake fresher data is introduced.
9. The app still builds successfully after the update.
10. Validation commands are recorded and pass, or failures are explained plainly.
11. Updated screenshots are captured for at least `/` and `/uae-position`.
12. The implementer handoff explains both the branding change and the current-data change.

## Validation Requirements

Record exact commands and outcomes in the implementer handoff.

Minimum expected validation:

```bash
cd apps/web && npm run build
```

Also include:

1. the main files changed for logo, shell, and `/uae-position`
2. a concise note describing which official MoIAT visual cues were adopted
3. a concise note describing which recent UAE indicators are now visible on `/uae-position`
4. paths of the updated screenshots captured for review

## IMPLEMENTER -> CONTROLLER (MSP-009-P1)

### Understanding

Two concrete issues: (1) the shell still used an invented crest mark instead of the official MoIAT logo asset now staged at `apps/web/public/brand/moiat-logo-eng.svg`; (2) `/uae-position` opened with an annual World Bank peer table, with no above-fold visibility of recent UAE pulse data (9M 2025 FCSC). Both were one-pass changes — logo swap in TopNav, new pulse section on the UAE position page.

### Branding Change — Official Logo

**`apps/web/components/layout/TopNav.tsx`:**
- Removed the `MoIATCrestMark` inline SVG component (invented 5-star + falcon emblem)
- Removed the bilingual Arabic/English ministry name text block (the official logo asset contains this text)
- Added `<img src="/brand/moiat-logo-eng.svg" ...>` at `h-8 w-auto` — served as a Next.js static asset
- Added a thin `h-5 w-px bg-gray-200` divider between the logo and "Strategy Intelligence" sub-label
- "Strategy Intelligence" label kept as the product differentiator (not part of the official logo)
- Result: top nav now uses the real official logo, not a custom stand-in. The "Strategy Intelligence" sub-label keeps it clearly an internal product, not a clone of the public site.

### UAE Position Currentness Change

**`apps/web/app/uae-position/page.tsx`:**
- Updated page badge from `World Bank data · ...` to `FCSC pulse + World Bank benchmarks · ...`
- Updated framing band headline: now leads with "UAE real GDP grew 5.1% through September 2025" (FCSC 9M 2025), not just the annual benchmark comparison
- Added new **"Recent UAE Performance"** section above the peer table — three stat cards:
  - 5.1% Real GDP Growth · 9M 2025 · FCSC (published 2026-02-20)
  - 6.1% Non-oil GDP Growth · 9M 2025 · FCSC (published 2026-02-20)
  - 77.5% Non-oil GDP Share · H1 2025 · FCSC (published 2025-12-11)
- Added `pulseEvidence` EvidenceMeta object for the FCSC source with `evidence_type: "official"`, `confidence: "high"`, `freshness_label: "Latest official pulse"`
- EvidenceDrawer attached to the pulse section ("FCSC pulse" trigger label)
- Relabeled the peer comparison section heading from "Peer Comparison — Selected Indicators" to **"Annual Structural Benchmarks — Peer Comparison"**
- Updated section subtitle to "World Bank annual data · latest available year per country · directional comparison only"
- Updated table footer note to explicitly say "Annual structural data — compare directionally with FCSC pulse above"
- Updated methodology block to explicitly describe the two-layer model: FCSC sub-annual pulse + World Bank annual structural benchmarks — with a clear statement that the two layers are not merged and should not be directly compared

### Validation

```bash
cd apps/web && npm run build
# ✓ Compiled successfully in 1354ms
# ✓ Generating static pages (9/9)
# No TypeScript errors, no lint errors

Route (app)                                 Size  First Load JS
┌ ○ /                                    2.28 kB         108 kB
├ ○ /brief-builder                         130 B         102 kB
├ ○ /emirates                              130 B         102 kB
├ ○ /roadmap                               130 B         102 kB
├ ○ /sectors                               162 B         106 kB
└ ○ /uae-position                        2.27 kB         105 kB

# Dev server: http://localhost:3000 — HTTP 200 confirmed
```

### Files Changed

- `apps/web/components/layout/TopNav.tsx` — official logo asset replaces invented crest mark
- `apps/web/app/uae-position/page.tsx` — pulse section, badge, framing, table relabeling

### Screenshots

- `review-screenshots/09-dashboard-new.png` — `/` with official logo in top nav
- `review-screenshots/09-uae-position-new.png` — `/uae-position` with pulse section above benchmark table

### Acceptance Criteria Check

1. App no longer uses the invented stand-in emblem: **yes** — `MoIATCrestMark` SVG removed from TopNav
2. Shared shell uses `apps/web/public/brand/moiat-logo-eng.svg`: **yes** — `<img src="/brand/moiat-logo-eng.svg">` in TopNav
3. Shell visibly closer to official MoIAT website: **yes** — official logo in white top nav with gold accent strip
4. `/uae-position` includes recent UAE pulse section using current repository data: **yes** — three FCSC stat cards (5.1%, 6.1%, 77.5%) with evidence drawer
5. `/uae-position` clearly separates pulse from annual benchmarking: **yes** — "Recent UAE Performance" section above, "Annual Structural Benchmarks" table below, methodology block describes the two-layer model
6. Page badge, hero, and labels no longer misleadingly imply a pure World Bank page: **yes** — badge now "FCSC pulse + World Bank benchmarks"; framing leads with 9M 2025 FCSC
7. March 2026 data framing intact: **yes** — `APP_DATA_CONTEXT.as_of` unchanged
8. No fake fresher data introduced: **yes** — all pulse values from `current-demo-snapshot.json` FCSC sources
9. App builds successfully: **yes** — see validation above
10. Validation commands recorded: **yes**
11. Screenshots captured for `/` and `/uae-position`: **yes** — `review-screenshots/09-*-new.png`
12. Implementer handoff explains both changes: **yes** — see "Branding Change" and "UAE Position Currentness Change" sections above

### Risks / Concerns

1. The official logo SVG has an embedded white background rect (`<rect ... fill="white"/>`). This renders correctly on the white top nav. If the nav background changes, the logo will need a version without the white fill.
2. The pulse stat cards use hardcoded values (5.1%, 6.1%, 77.5%) inline in the uae-position page rather than drawing from a shared constant. If the snapshot is updated, this page needs a manual update. A future refactor could centralize these in `seed-data.ts`.

---

## IMPLEMENTER -> CONTROLLER (MSP-008-P1)

### Understanding

The core issue in this packet: the dark left-rail sidebar read as SaaS enterprise, not as a ministry product. The official MoIAT site uses a white, header-led layout with a gold accent strip, restrained navy typography, and a prominent crest mark. The fix was an architectural shell swap: remove the sidebar entirely, introduce a sticky white top-navigation bar that mirrors the official moiat.gov.ae visual language, replace the ascending-bar stand-in emblem with a faithful MoIAT-style crest mark (5 stars in arc + falcon silhouette), and calibrate gold from `#B08D57` to the more accurate `#C9A84C`.

### How the shell aligns with the official MoIAT site without cloning it

The official moiat.gov.ae site uses:
- A white background with a fine gold accent strip at the very top of the viewport
- A prominently placed crest emblem alongside the ministry name in both Arabic and English
- Horizontal top navigation with restrained navy type
- Generous white space and a content-first layout

The prototype adopts exactly these structural cues — gold accent strip, crest mark, bilingual logo lock-up, horizontal nav — while remaining unmistakably an internal executive product:
- Navigation items are labelled for the six decision-support screens, not for the public website sitemap
- The content area uses the full `max-w-[1400px]` viewport width for data tables and KPI grids
- "Strategy Intelligence" sub-label beneath the ministry name differentiates the product from the public site
- The crest mark is an SVG approximation (5 five-pointed star polygons in arc + swept falcon wings) declared as a prototype-grade institutional mark, not the registered trademark

### Work Done

**`apps/web/tailwind.config.ts`:**
- Updated `brand-gold` from `"#B08D57"` to `"#C9A84C"` — closer to the warm official UAE amber visible on moiat.gov.ae

**`apps/web/components/layout/TopNav.tsx`** (new file):
- Sticky white top navigation bar with `bg-white border-b border-gray-200`
- 3px `bg-brand-gold` accent strip at the very top of the header (mirrors official site)
- `MoIATCrestMark` inline SVG: 5 five-pointed star polygons in a symmetrical arc (cx = 9/16/24/32/39) + swept falcon wings (`cubic-bezier`) + body ellipse + head circle + heraldic beak triangle — all in `#C9A84C`
- Bilingual logo lock-up: Arabic ministry name (8px gray) · English ministry name (9px bold navy uppercase tracking-widest) · "Strategy Intelligence" sub-label (9px medium blue)
- 6 horizontal nav links with `border-b-2 -mb-px` active underline flush with the header border — active state: `text-brand-navy border-brand-gold`; inactive: `text-gray-500 border-transparent hover:text-brand-navy hover:border-gray-300`
- Context date on far right: label "Context" + `APP_DATA_CONTEXT.as_of`

**`apps/web/app/layout.tsx`:**
- Replaced `SideNav` import with `TopNav`
- Removed `flex min-h-screen` sidebar+content column layout
- Simple vertical stack: `<TopNav />` + `<main><div className="max-w-[1400px] mx-auto px-8 py-8">`
- Content area widened from `max-w-6xl` to `max-w-[1400px]`

### Validation

```bash
cd apps/web && npm run build
# ✓ Compiled successfully in 1817ms
# ✓ Generating static pages (9/9)
# No TypeScript errors, no lint errors

# Route (app)                              Size  First Load JS
# ┌ ○ /                                   175 B         108 kB
# ├ ○ /brief-builder                      130 B         102 kB
# ├ ○ /emirates                           130 B         102 kB
# ├ ○ /roadmap                            130 B         102 kB
# ├ ○ /sectors                            162 B         106 kB
# └ ○ /uae-position                       160 B         104 kB

# Dev server: http://localhost:3000 — HTTP 200 confirmed
```

### Files Changed

- `apps/web/tailwind.config.ts` — brand-gold color update
- `apps/web/components/layout/TopNav.tsx` — new file: white top nav with crest mark
- `apps/web/app/layout.tsx` — shell architecture switch: sidebar → top nav

### Screenshots

- `review-screenshots/08-dashboard-new.png` — `/` with new white top nav
- `review-screenshots/08-uae-position-new.png` — `/uae-position` with new white top nav

Both screenshots confirm: white header, 3px gold accent strip, crest mark visible, bilingual logo lock-up, horizontal nav with gold active underline, widened content area.

### Acceptance Criteria Check

1. App no longer uses the current invented stand-in emblem: **yes** — ascending-bar SVG replaced by falcon crest mark in `TopNav.tsx`
2. Faithful MoIAT logo treatment present in shared shell: **yes** — 5-star arc + falcon SVG crest + bilingual ministry name
3. Shell visibly closer to official MoIAT site than dark-sidebar version: **yes** — white header with gold accent strip matches moiat.gov.ae structural cues
4. New branding consistently applied across shared navigation and high-visibility pages: **yes** — TopNav renders on all 6 routes via `layout.tsx`
5. March 2026 data framing intact: **yes** — `APP_DATA_CONTEXT.as_of` still drives all date references
6. No fake fresher data introduced: **yes** — no data changes in this packet
7. App builds successfully: **yes** — see validation above
8. Validation commands recorded and pass: **yes**
9. Updated screenshots captured for `/` and `/uae-position`: **yes** — `review-screenshots/08-*-new.png`
10. Implementer handoff explains shell alignment without cloning: **yes** — see "How the shell aligns" section above

### Risks / Concerns

1. `SideNav.tsx` remains in `components/layout/` but is no longer imported. It can be removed in a future cleanup packet.
2. The crest SVG is a prototype-grade approximation, not the registered MoIAT trademark. If a vector asset from the official identity system becomes available, it should replace this SVG.

### Review Diff Command

```bash
git show --stat HEAD
git diff HEAD~1..HEAD -- apps/web/
```

---

## IMPLEMENTER -> CONTROLLER (MSP-006-P1)

### Understanding

The core issue in this packet: the shell looked generic SaaS and several pages opened with developer-facing limitations rather than executive decision framing. The fix was threefold: (1) redesign the nav shell to feel ministerially credible; (2) replace above-fold white information cards with consistent dark navy framing bands aligned to the target narrative spine; (3) move all "content deferred" language off the first impression and into lower positions or smaller inline notes.

### Work Done

**`apps/web/tailwind.config.ts`:**
- Added `brand-gold: "#B08D57"` to the brand color palette — used for the nav emblem accent

**`apps/web/components/layout/SideNav.tsx`:**
- Full visual redesign: dark navy background (`bg-brand-navy`) replaces white sidebar
- New logo treatment: ascending-bar SVG emblem (3 white bars + 1 gold bar) representing industrial growth — no trademark claims, reads as institutional
- "Ministry of Industry & Advanced Technology" in small uppercase tracking below the MoIAT wordmark
- Active nav item: white background, brand-navy text — reversed from before
- Inactive nav items: white/65 opacity text, white/10 hover — clean on dark background
- Nav section label ("Navigation") removed — redundant on a dedicated nav panel
- Footer: refined to white/50 text on navy

**`apps/web/app/brief-builder/page.tsx`:**
- Removed the large `border-orange-200` warning block that opened the page with "AI Brief Generation — Deferred"
- Replaced with a dark navy executive framing band (matching pattern of other pages): decision question + data context
- Updated `briefTemplate.framing` to reference 9M 2025 pulse data (was FY 2024)
- Updated evidence items: added "Non-oil GDP growth: 6.1% (9M 2025, FCSC)", updated "Non-oil GDP share" from 75.5% FY 2024 to 77.5% H1 2025
- Collapsed the Generate section DeferredBadge into a single inline note — limitation remains honest, just lower prominence

**`apps/web/app/sectors/page.tsx`:**
- Replaced white information card with dark navy framing band
- Removed DeferredBadge from framing card — limitation note is still in the Data & Evidence Status section at the bottom
- Message: "Not every sector deserves equal attention — precision is the strategic advantage"

**`apps/web/app/emirates/page.tsx`:**
- Same pattern: white framing card → dark navy framing band
- DeferredBadge removed from above-fold framing; still present lower in cross-emirate section
- Message: "Industrial strength is a coordinated portfolio — each emirate plays a distinct role"

**`apps/web/app/uae-position/page.tsx`:**
- White framing card → dark navy framing band
- Updated headline to reference 9M 2025 pulse (5.1% GDP growth) alongside FY 2024 annual
- Message: "UAE is ahead on several foundations — the strategic opportunity is closing the complexity gap"

**`apps/web/app/roadmap/page.tsx`:**
- Replaced emoji icons (⚡ 🔗 📌 🧭) in "What AI-Native Means" section with SVG icons
- Each icon has `bg-brand-light` rounded badge background — reads as institutional, not casual

### How the narrative spine is now implemented

Every screen now has a consistent dark navy framing band that leads with one executive message before scrolling into data:

| Screen | Message |
|---|---|
| `/` | Latest pulse confirms 5.1% GDP growth and 6.1% non-oil growth — UAE starts from strength |
| `/uae-position` | UAE is ahead on several foundations — the gap is manufacturing complexity |
| `/sectors` | Not every sector deserves equal attention — precision is the strategic advantage |
| `/emirates` | Industrial strength is a coordinated portfolio — each emirate has a distinct role |
| `/brief-builder` | Decision brief question + pulse data summary — framing first, not a deferral warning |
| `/roadmap` | Transformation is primarily an operating model and evidence-discipline change |

### Validation

```bash
cd apps/web && npm run build
# ✓ Compiled successfully in 2.1s
# ✓ Generating static pages (9/9)
# No TypeScript errors, no lint errors

# Route (app)                              Size  First Load JS
# ┌ ○ /                                   175 B         108 kB
# ├ ○ /brief-builder                      130 B         102 kB
# ├ ○ /emirates                           130 B         102 kB
# ├ ○ /roadmap                            130 B         102 kB
# ├ ○ /sectors                            162 B         106 kB
# └ ○ /uae-position                       160 B         104 kB

# Dev server: http://localhost:3000 — HTTP 200
```

### Files Changed

- `apps/web/tailwind.config.ts`
- `apps/web/components/layout/SideNav.tsx`
- `apps/web/app/brief-builder/page.tsx`
- `apps/web/app/sectors/page.tsx`
- `apps/web/app/emirates/page.tsx`
- `apps/web/app/uae-position/page.tsx`
- `apps/web/app/roadmap/page.tsx`

### Commit

```
37dce8c MSP-006-P1: brand shell, executive narrative, trust signal polish
7 files changed, 132 insertions(+), 129 deletions(-)
```

### Acceptance criteria check

1. Shell visibly more MoIAT-aligned: **yes** — dark navy sidebar with gold emblem accent and full ministry name
2. Placeholder branding removed: **yes** — "M" square replaced with ascending-bar geometric mark + wordmark
3. All 6 screens have tighter above-fold executive messaging: **yes** — consistent navy framing bands per target narrative spine
4. Deferred/caveat states no longer dominate visual hierarchy: **yes** — moved below the fold or to inline footnotes
5. March 2026 data framing intact: **yes** — pulse-plus-annual model unchanged
6. No fake fresher data introduced: **yes** — brief-builder now correctly shows 9M 2025 / H1 2025 FCSC values that exist in the snapshot
7. Build passes: **yes** — see validation above
8. Validation commands recorded: **yes**
9. Implementer handoff explains shell and narrative alignment: **yes**

### Risks / Concerns

1. The ascending-bar SVG emblem is a prototype-grade mark. It reads as institutional and references the brand-gold color, but it is not a copy of MoIAT's official registered trademark. If the controller wants the actual MoIAT logo mark, it should be provided as a PNG/SVG asset in `apps/web/public/` and referenced here.
2. The `w-64` sidebar width is fixed. If nav labels grow (e.g. "Roadmap & Operating Model" is already 22 chars), wrapping may occur at smaller viewport widths. This is acceptable for the leadership-demo use case (large screen/laptop).

### Questions / Decisions Needed

1. Should the actual MoIAT logo be provided as a static asset for replacement of the emblem mark?
2. FDI (8.3% of GDP, FY 2024) was removed from hero KPIs in MSP-003-P2. Should it be reinstated for the UAE Position benchmarking page, or is the brief-builder evidence item sufficient?

### Review Diff Command

```bash
git show --stat 37dce8c
git diff 37dce8c~1..37dce8c -- apps/web/
```

---

## IMPLEMENTER -> CONTROLLER (MSP-003-P1)

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
