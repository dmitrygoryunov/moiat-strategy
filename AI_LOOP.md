# AI Loop — Active Packet

## Controller Packet

- Packet ID: `MSP-008-P1`
- Issue: `MSP-008`
- Status: `ACTIVE`
- Owner roles:
  - Codex = controller
  - Claude = implementer

Controller packet rule:

- every packet must include explicit acceptance criteria in this file
- acceptance must be based on repository state and recorded validation, not chat claims

## Objective

Bring the demo materially closer to real MoIAT visual identity by replacing the current stand-in branding with a more authentic MoIAT-style shell, logo usage, and page chrome.

This packet should:

- use the real MoIAT logo or a faithful official logo asset treatment
- move the shell closer to the official MoIAT website visual language
- keep the app feeling like an executive internal product, not a public website clone
- preserve the March 2026 data story already in place

## Why This Packet Exists

The current shell is better than the original scaffold, but it is still only inspired by MoIAT rather than recognizably aligned to it.

Confirmed review findings:

- the app does not use the real MoIAT logo
- the current sidebar uses a custom stand-in emblem
- the official MoIAT site is much more white, airy, and header-led
- our prototype still reads as a dark enterprise product shell

This packet exists because screenshots will be judged visually in seconds. Right now the app feels credible, but not yet truly MoIAT-native in appearance.

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
14. `docs/recent-data-acquisition.md`
15. `review-screenshots/moiat-official-web.png`
16. `review-screenshots/01-dashboard-current.png`
17. `CLAUDE.md`
18. `skills/moiat-leadership-ui/SKILL.md`
19. `skills/moiat-evidence-ai-guardrails/SKILL.md`
20. `skills/moiat-ai-loop-implementer-check/SKILL.md`

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
- using unapproved fake branding that is neither MoIAT-inspired nor official

## Deliverables

1. Replace the current stand-in emblem with a real or faithful MoIAT logo treatment.
2. Rework the shell to borrow more visibly from the official MoIAT website:
   - more white primary surfaces
   - cleaner top/header treatment
   - more restrained navy/gold usage
   - more official spacing and typography rhythm
3. Keep the prototype clearly product-like, but reduce the dark-sidebar SaaS feel.
4. Update the most visible pages so the new branding is consistent:
   - `/`
   - `/uae-position`
   - shared layout / navigation / headers
5. Ensure the MoIAT branding pass improves screenshot credibility without weakening usability.
6. Update the runbook if asset handling or shell conventions change.

## Required UI Changes

### 1. Logo & Identity

This is mandatory in this packet.

Requirements:

- use the real MoIAT logo asset if it can be captured cleanly from official public sources
- if that is not feasible, use a faithful logo treatment derived from the official mark rather than the current custom emblem
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

### 3. Typography & UI Tone

Requirements:

- move closer to the typography feel of the official site
- keep page titles, labels, and metadata more formal and government-like
- reduce startup / SaaS styling cues where possible

### 4. Consistency Across Key Pages

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
2. A real or faithful MoIAT logo treatment is present in the shared shell.
3. The shell is visibly closer to the official MoIAT website than the current dark-sidebar version.
4. The new branding is consistently applied across shared navigation and high-visibility pages.
5. The March 2026 data framing remains intact and is not regressed.
6. No fake fresher data is introduced.
7. The app still builds successfully after the update.
8. Validation commands are recorded and pass, or failures are explained plainly.
9. Updated screenshots are captured for at least `/` and `/uae-position`.
10. The implementer handoff explains how the new shell aligns with the official MoIAT site without simply cloning it.

## Validation Requirements

Record exact commands and outcomes in the implementer handoff.

Minimum expected validation:

```bash
cd apps/web && npm run build
```

Also include:

1. the main files changed for logo, shell, and brand styling
2. a concise note describing which official MoIAT visual cues were adopted
3. paths of the updated screenshots captured for review

## IMPLEMENTER -> CONTROLLER (MSP-003-P2)

### Understanding

The core issue in this packet: the hero KPIs on the dashboard were grounded in FY 2024 annual data, which made the prototype feel dated when the context is March 2026. The FCSC 9M 2025 and H1 2025 releases provide materially fresher pulse readings. The fix was a data model upgrade — not just swapping numbers, but introducing a named pulse-plus-annual distinction so every figure carries an honest provenance, and so the freshness of each reading is visible without hiding the vintage of structural data.

### Work Done

**`apps/web/lib/seed-data.ts`:**
- Added `freshness_label?: "Latest official pulse" | "Latest complete annual snapshot"` to `EvidenceMeta` — typed union, optional so pages without it are unaffected
- Updated `APP_DATA_CONTEXT` to add `latest_pulse_period: "9M 2025"` and `latest_pulse_note` — single source for both annual and pulse references
- Updated `data_vintage_note` to describe the pulse-plus-annual model explicitly
- Rebuilt all 6 hero KPI evidence objects:
  - Real GDP growth 5.1% → 9M 2025, FCSC, `freshness_label: "Latest official pulse"`
  - Non-oil GDP growth 6.1% → 9M 2025, FCSC, `freshness_label: "Latest official pulse"`
  - Non-oil GDP share 77.5% → H1 2025, FCSC, `freshness_label: "Latest official pulse"`
  - GDP value AED 1.4T → 9M 2025, FCSC, `freshness_label: "Latest official pulse"`
  - Non-oil foreign trade AED 2.97T → full year 2024, Ministry of Economy, `freshness_label: "Latest complete annual snapshot"`
  - Manufacturing VA 9.4% → FY 2024, World Bank, `freshness_label: "Latest complete annual snapshot"`
- Updated `dashboardInsights`: first insight leads with 9M 2025/H1 2025 pulse; third uses AED 2.97T trade figure

**`apps/web/components/primitives/KpiCard.tsx`:**
- Added freshness label pill above period_label — green (`signal-momentum-bg/text`) for "Latest official pulse", blue (`brand-light/brand`) for "Latest complete annual snapshot"
- Pill only renders when `freshness_label` is present and KPI is not deferred

**`apps/web/components/primitives/EvidenceDrawer.tsx`:**
- Added optional "Freshness" row in the Date Model panel when `evidence.freshness_label` is present
- Freshness row note explains: sub-annual FCSC release vs. most recent complete official annual data

**`apps/web/app/page.tsx`:**
- Data context bar now shows "Latest pulse: 9M 2025" and "Latest annual: FY 2024" as distinct labelled fields
- Narrative band leads with 9M 2025 pulse: "the latest official pulse shows real GDP growing at 5.1% with non-oil GDP accelerating to 6.1% through September 2025"
- Section subtitles reference "Mixed vintage · 9M 2025 pulse (FCSC) + FY 2024 annual"

### Validation

```bash
cd apps/web && npm run build
# ✓ Compiled successfully
# ✓ Generating static pages (9/9)
# No TypeScript errors
```

### Files Changed

- `apps/web/lib/seed-data.ts` — pulse-plus-annual data model, freshness_label on all 6 hero KPIs
- `apps/web/components/primitives/KpiCard.tsx` — freshness label pill
- `apps/web/components/primitives/EvidenceDrawer.tsx` — Freshness row in Date Model panel
- `apps/web/app/page.tsx` — dashboard pulse/annual data context, narrative updated

### Acceptance Criteria Check

1. Hero KPIs reflect latest FCSC pulse data: **yes** — 4 of 6 KPIs now reference 9M 2025 or H1 2025 FCSC
2. Mixed vintage is clearly disclosed, not hidden: **yes** — freshness labels, evidence drawer, and dashboard context bar all surface the distinction
3. `freshness_label` drives color-coded differentiation: **yes** — green pills for pulse, blue for annual
4. No fake fresher data invented: **yes** — all values from the `current-demo-snapshot.json` and documented FCSC/MoE sources
5. Pulse-plus-annual model documented in `APP_DATA_CONTEXT`: **yes**
6. Build passes: **yes**

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
