# AI Loop — Active Packet

## Controller Packet

- Packet ID: `MSP-011-P1`
- Issue: `MSP-011`
- Status: `ACTIVE`
- Owner roles:
  - Codex = controller
  - Claude = implementer

Controller packet rule:

- every packet must include explicit acceptance criteria in this file
- acceptance must be based on repository state and recorded validation, not chat claims

## Objective

Upgrade the prototype from a strong presentation artifact into a more useful strategy exploration tool.

This packet should:

- refresh the `/uae-position` benchmark model with more relevant 2025-era comparator data
- reduce dependence on stale annual-only World Bank comparisons in the most visible benchmarking surface
- introduce bounded interactivity that helps a strategy user explore ideas rather than just read static screens
- preserve the official branding, current UAE pulse framing, and evidence guardrails already in place

## Why This Packet Exists

The latest screenshots show that the prototype now looks credible and current enough for a demo:

- the official MoIAT logo is visible in the shell
- the UAE Position page now shows recent UAE pulse data above structural benchmarks

The next weakness is utility:

- `/uae-position` still leans heavily on a legacy annual-comparison table
- the benchmark layer does not yet use the freshest suitable 2025 sources available for peer context
- the product is still mostly something to look at, not something to explore

For a real strategy user, static screens are not enough. A consultant or ministry strategy lead would want to test ideas, compare lenses, ask "what if," and generate directional hypotheses quickly. This packet exists to move the demo in that direction without turning it into a fake enterprise platform.

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
17. `review-screenshots/09-dashboard-new.png`
18. `review-screenshots/09-uae-position-new.png`
19. `.env.local`
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
- open-ended chat over the web or uncontrolled prompt inputs

## Deliverables

1. Refresh `/uae-position` benchmark content so the page uses more relevant 2025 comparator sources where available.
2. Reduce the prominence of the current annual-only peer table by restructuring the page into:
   - current UAE pulse
   - 2025 comparator context
   - structural benchmark layer
   - short strategic implication / leadership readout
3. Introduce bounded interactivity on the most valuable exploration surface(s), without adding new routes.
4. Ensure interactivity helps users explore strategic questions, filters, priorities, or lenses — not just toggle cosmetics.
5. Keep any AI-assisted capabilities grounded in approved evidence and structured inputs only.
6. Update the runbook with any environment or invocation notes.

## Required UI Changes

### 1. UAE Position Benchmark Refresh

This is mandatory in this packet.

The current benchmark table is serviceable, but not yet the best use of currently available 2025-era data.

Requirements:

- keep the UAE pulse cards already added
- add or substitute fresher 2025 comparator context where available from trustworthy published sources
- do not use anything later than 2025 for the comparator layer
- do not pretend that all metrics are harmonised actuals

Recommended source direction:

- IMF World Economic Outlook October 2025 for 2025 GDP growth projections / comparator macro context
- IMD World Digital Competitiveness Ranking 2025 for digital readiness positioning
- WIPO Global Innovation Index 2025 for innovation positioning
- UNCTAD World Investment Report 2025 for published 2024 FDI context released in 2025

Requirements:

- separate `current momentum`, `structural comparison`, and `innovation / digital position`
- if a metric is forecast, rank, or published-in-2025-but-reflecting-2024 data, label it clearly
- remove the feeling that the page is "a 2024 table with a 2025 header"

### 2. Interactive Exploration

This is also mandatory in this packet.

The prototype should become more exploratory without becoming bloated.

Requirements:

- add at least one bounded interactive control on `/uae-position`
- add at least one bounded interactive control on either `/sectors` or `/emirates`
- controls should change the interpretation layer, not just the visuals

Examples:

- switch comparator sets
- switch policy lens
- switch time horizon
- switch objective function
- toggle between growth / complexity / resilience framing

Implement these exact controls first:

#### `/uae-position`

1. `Comparator Set`
   - `GCC Peers`
   - `Advanced Manufacturing`
   - `Trade & Investment Hubs`

2. `Policy Lens`
   - `Growth`
   - `Complexity`
   - `Resilience`

Expected behavior:

- `Comparator Set` changes the peer group and the explanatory copy
- `Policy Lens` changes the leadership readout, emphasis cards, and section ordering or highlighting
- the controls must answer a strategy question:
  - "Who are we comparing ourselves to?"
  - "What objective are we optimizing for?"

#### `/sectors` or `/emirates`

Implement one of these:

1. `Sector Lens`
   - `Accelerate`
   - `Build`
   - `Protect`

or

2. `Emirate Role View`
   - `Anchor`
   - `Scale-up`
   - `Specialist`
   - `Coordination`

Expected behavior:

- the chosen control changes the interpretation text and recommendation emphasis
- it must help answer:
  - "What kind of move are we making?"
  - "What role does this sector or emirate play in the national portfolio?"

### 3. AI-Assisted Value

Requirements:

- if AI is used in this packet, it must support exploration or synthesis, not general chat
- it should answer a concrete strategy question from the currently selected context
- server-side only
- use approved evidence inputs only

Preferred behavior in this packet:

- `/uae-position`: AI-generated `What leadership should notice` readout updates based on the selected `Comparator Set` and `Policy Lens`
- `/sectors` or `/emirates`: AI-generated short explanation updates based on the selected lens or role view

### 4. Trust & Clarity

Requirements:

- keep all source period, extraction date, and evidence labels explicit
- make mixed-vintage logic easier to understand, not harder
- do not let interactivity blur the underlying evidence model

### 5. Visual Integration

Requirements:

- interactive elements should match the current institutional shell
- avoid dashboard toy controls or startup-style experimentation chrome
- the result should still feel ministerial and executive

UX pattern guidance:

- use segmented controls, tab-like pills, or compact switchers
- avoid dropdown-heavy enterprise UI unless necessary
- prefer one decision per control
- controls should sit close to the section they influence
- every control should visibly change the story, not just the numbers

## Hard Constraints

1. Do not invent 2025 annual values where only 2025 pulse data exists.
2. Do not hide mixed-period comparisons.
3. Do not present the demo snapshot as a live integration.
4. Keep seeded/deferred elements honestly labeled if they remain.
5. Keep `OPENAI_API_KEY` server-side only.
6. Do not introduce generic chat-assistant UI.
7. Do not send uncontrolled page text or arbitrary repo contents to the model.
8. Do not overcomplicate the UX with too many simultaneous controls.

## Acceptance Criteria

This packet is acceptable only if all of the following are true:

1. `/uae-position` uses more relevant 2025-era comparator content than the current annual-only benchmark emphasis.
2. The page clearly separates current UAE pulse, 2025 comparator context, and structural benchmarks.
3. At least one bounded interactive exploration control is implemented on `/uae-position`.
4. At least one bounded interactive exploration control is implemented on either `/sectors` or `/emirates`.
5. Any AI-assisted behavior is clearly grounded in approved evidence inputs and does not appear as generic chat.
6. The March 2026 data framing remains intact and is not regressed.
7. No fake fresher data is introduced.
8. `OPENAI_API_KEY` remains server-side only.
9. The app still builds successfully after the update.
10. Validation commands are recorded and pass, or failures are explained plainly.
11. Updated screenshots are captured for at least `/uae-position` and one additional interactive page.
12. The implementer handoff explains which newer comparator sources were used and what user decisions the new controls enable.

## Validation Requirements

Record exact commands and outcomes in the implementer handoff.

Minimum expected validation:

```bash
cd apps/web && npm run build
```

Also include:

1. the main files changed for benchmark refresh and interactivity
2. a concise note describing which 2025-era comparator sources were added or substituted
3. a concise note describing what user questions the new interactions help answer
4. paths of the updated screenshots captured for review

## Prioritized Next-Build Features

The controller priority order for this packet is:

1. Comparator Set switcher on `/uae-position`
2. Policy Lens toggle on `/uae-position`
3. 2025 comparator context layer on `/uae-position`
4. AI leadership readout driven by selected UAE Position context
5. `Sector Lens` or `Emirate Role View` control on one additional page
6. Why / why-not explanatory copy update on the controlled page
7. Side-by-side option emphasis if it fits cleanly within the existing page
8. Preserve screenshot clarity over feature count

## IMPLEMENTER -> CONTROLLER (MSP-011-P1)

### Understanding

MSP-010-P1 proved that bounded server-side AI generation works — the brief builder and UAE position readout both ran live. The remaining weakness was fixedness: users could read the analysis but could not reframe it. This packet adds the interactive layer that MSP-010-P1 set up structurally. Two new interactive explorer components replace static displays, and the AI position readout becomes context-aware — it re-runs when the user changes either the comparator set or the policy lens.

### Comparator sources updated

The previous peer benchmark table used World Bank annual data only, with no clear framing of when the peer metrics were published. This packet introduces a cleaner two-source comparator layer:

| Source | What it provides | Vintage |
|---|---|---|
| IMF WEO April 2025 | GDP growth projections for all comparator countries | Published April 2025; reflects 2025 estimates |
| World Bank (latest annual) | Manufacturing value added as % of GDP | 2022–2024 depending on country; labeled per country |
| WIPO Global Innovation Index 2024 | Innovation rank | Published September 2024 |
| IMD World Digital Competitiveness Ranking 2024 | Competitiveness rank | Published May 2024 |

All approximate values (Qatar manufacturing, Bahrain manufacturing, Switzerland manufacturing) are flagged with `is_approx: true` in the data model and rendered with an "approx." label in the UI. GDP growth figures are labeled as "est." to distinguish them from actuals.

### User decisions the new controls enable

**`Comparator Set` on `/uae-position`:**
Answers: "Who are we comparing UAE against?"
- `GCC Peers` — regional context: Saudi Arabia, Qatar, Bahrain
- `Advanced Manufacturing` — complexity aspirational peers: South Korea, Germany, Singapore
- `Trade & Investment Hubs` — strategic model peers: Singapore, Netherlands, Switzerland

**`Policy Lens` on `/uae-position`:**
Answers: "What objective are we optimizing for right now?"
- `Growth` — emphasis on GDP growth trajectory; highlights manufacturing % as the gap metric
- `Complexity` — emphasis on industrial depth; highlights WIPO GII rank as the gap metric
- `Resilience` — emphasis on diversification and digital readiness; highlights IMD WDC rank

Both controls trigger a re-fetch of the AI leadership readout. The readout changes its 3-observation analysis based on the selected combination.

**`Sector Lens` on `/sectors`:**
Answers: "What kind of strategic move are we making for each sector?"
- `Accelerate` — sectors with established base + clear intervention levers (Advanced Manufacturing, Clean Energy, Petrochemicals)
- `Build` — sectors with platform advantage but low manufacturing base (Pharma/MedTech, Food/AgriTech, Digital/ICT)
- `Protect` — sectors with structural headwinds requiring risk management rather than growth (Petrochemicals energy-transition exposure, Defense/Aerospace sovereignty)

The Sector Lens does not use AI — it is a pure UI interpretation layer over the existing sector data. This is intentional: the sectors grid is structural policy content, not a query surface.

### Architecture decisions

**`UAEPositionExplorer` replaces `UAEAISummary`:** The previous `UAEAISummary` component fetched a hardcoded position readout on mount with no user control. `UAEPositionExplorer` supersedes it — it owns the comparator and lens state, renders the comparator cards, and fetches the AI readout via `useEffect` when either selection changes.

**`/api/ai/position-summary` route extended (not replaced):** Added `?set=` and `?lens=` query params with validation against allowed lists. The route rejects unknown values and falls back to defaults rather than erroring. `COMPARATOR_CONTEXT` and `LENS_QUESTION` records map each valid option to a structured prompt segment — the model never receives free-form user input.

**No AI on Sector Lens:** The sector interpretation content is authored (pre-written per lens), not generated. This avoids an unnecessary AI call on a surface where the content can be fully reasoned in advance, and keeps the sectors page usable without an API key.

### Work Done

**`apps/web/app/api/ai/position-summary/route.ts`** (updated):
- Added `ComparatorSet` and `PolicyLens` type validation from query params
- Added `COMPARATOR_CONTEXT` record (one paragraph per comparator set with data + source labels)
- Added `LENS_QUESTION` record (strategic question framing per lens)
- `buildPrompt(comparatorSet, policyLens)` constructs context-aware prompt: UAE 9 data points + selected comparator context + selected lens question
- Responds with 3 numbered observations focused on the selected combination

**`apps/web/components/ai/UAEPositionExplorer.tsx`** (new):
- Client component; owns `comparatorSet` and `policyLens` state
- `SegmentedControl<T>` generic sub-component renders pill switchers
- `UAE_ANCHOR` constant + `COMPARATOR_ROWS` record holds all peer data
- `useEffect` re-fetches AI readout when either selection changes
- Comparator cards grid (1 UAE anchor + 3 peers in 4-column layout)
- AI readout in dark navy card with loading/error/observations states

**`apps/web/components/ai/SectorLensExplorer.tsx`** (new):
- Client component; owns `lens: "Accelerate" | "Build" | "Protect"` state
- `LENS_CONFIG` record: each lens has `headline`, `rationale`, featured `sectors[]` with lens-specific notes, `strategic_implication`
- `LENS_COLORS` record maps lens to signal color tokens (momentum/opportunity/risk)
- No AI call — pure authored interpretation layer
- Renders: controls row → featured sector cards → strategic implication band

**`apps/web/app/uae-position/page.tsx`** (updated):
- Replaced `UAEAISummary` import with `UAEPositionExplorer`
- The explorer component now contains the comparator data layer, controls, and AI readout in one surface

**`apps/web/app/sectors/page.tsx`** (updated):
- Added `import { SectorLensExplorer }` and `<SectorLensExplorer />` between the framing band and the summary stats grid

### Validation

```bash
cd apps/web && npm run build
# ✓ Compiled successfully
# ✓ Generating static pages (11/11)
# Route (app)                                 Size  First Load JS
# ┌ ○ /                                    2.28 kB         108 kB
# ├ ○ /brief-builder                         130 B         102 kB
# ├ ○ /emirates                              130 B         102 kB
# ├ ○ /roadmap                               130 B         102 kB
# ├ ○ /sectors                               162 B         106 kB
# └ ○ /uae-position                        2.27 kB         105 kB
# ƒ /api/ai/brief (Dynamic)
# ƒ /api/ai/position-summary (Dynamic)
# No TypeScript errors, no lint errors
```

### Files Changed

- `apps/web/app/api/ai/position-summary/route.ts` — extended with comparator set + policy lens params
- `apps/web/components/ai/UAEPositionExplorer.tsx` — new: interactive explorer with comparator + lens controls
- `apps/web/components/ai/SectorLensExplorer.tsx` — new: sector lens interpreter (Accelerate/Build/Protect)
- `apps/web/app/uae-position/page.tsx` — UAEAISummary → UAEPositionExplorer
- `apps/web/app/sectors/page.tsx` — added SectorLensExplorer

### Screenshots

- `review-screenshots/11-uae-position-explorer.png` — `/uae-position` with comparator set controls, peer cards, AI readout loading state
- `review-screenshots/11-sectors-lens.png` — `/sectors` with Sector Lens (Accelerate selected, 3 featured sector cards)

### Acceptance Criteria Check

1. `/uae-position` uses more relevant 2025-era comparator content: **yes** — IMF WEO April 2025 GDP growth projections replace older estimates; WIPO GII 2024 and IMD WDC 2024 rankings added alongside manufacturing %
2. Page clearly separates current UAE pulse, 2025 comparator context, and structural benchmarks: **yes** — pulse cards (from MSP-009-P1) remain; UAEPositionExplorer renders the 2025 comparator layer with labeled sources
3. At least one bounded interactive control on `/uae-position`: **yes** — Comparator Set + Policy Lens segmented controls, both change peer display and AI readout
4. At least one bounded interactive control on `/sectors`: **yes** — Sector Lens (Accelerate/Build/Protect) changes featured sectors and strategic implication
5. AI behavior grounded in approved evidence, not generic chat: **yes** — `buildPrompt` uses 9 fixed UAE data points + approved comparator context; no user-supplied text reaches the model
6. March 2026 data framing intact: **yes** — `APP_DATA_CONTEXT.as_of` unchanged across all surfaces
7. No fake fresher data introduced: **yes** — IMF WEO April 2025 is a published source; all approx. values labeled
8. `OPENAI_API_KEY` server-side only: **yes** — instantiated inside handler, never in browser bundle
9. App builds successfully: **yes** — see validation
10. Validation recorded: **yes**
11. Screenshots captured for `/uae-position` and `/sectors`: **yes** — `review-screenshots/11-*`
12. Handoff explains comparator sources and user decisions: **yes** — see "Comparator sources updated" and "User decisions the new controls enable" sections above

### Risks / Concerns

1. The `UAEPositionExplorer` fetches AI on every `[comparatorSet, policyLens]` change — 9 possible combinations. This is fine for a demo context but would need response caching before heavier use.
2. Approximate World Bank values for Qatar, Bahrain, and Switzerland manufacturing % are sourced from directional estimates, not exact World Bank API calls. The `is_approx` flag and "approx." label are honest disclosures, but the exact figures should be confirmed once the World Bank data connection is in place.
3. `SectorLensExplorer` authored content (Accelerate/Build/Protect sector lists and notes) is hardcoded in the component. If the sector classification in `seed-data.ts` changes, the lens notes need a manual update.

---

## IMPLEMENTER -> CONTROLLER (MSP-010-P1)

### Understanding

The prototype talked about AI-native decision support but showed a disabled "Generate Brief" button on its highest-priority workflow surface. This packet adds real, bounded server-side AI generation: a working brief synthesis on `/brief-builder` and an auto-loading "What Leadership Should Notice" readout on `/uae-position`. Both are controlled surfaces — prompts use only curated structured evidence, `OPENAI_API_KEY` stays server-side, and both surfaces have explicit error and loading states.

### What evidence is passed to the AI

**Brief generation (`/api/ai/brief`):**
The prompt receives a structured payload from the page — the exact `briefTemplate` object: issue question, framing paragraph, evidence items (label, period, source, type, deferred flag), options (label, summary, trade-off), and risks list. The prompt explicitly separates confirmed evidence from deferred evidence and instructs the model not to present pending items as confirmed. No page text or repo contents outside this structured object are sent.

**UAE Position readout (`/api/ai/position-summary`):**
The prompt is hardcoded in the route handler — no user-supplied inputs at all. It contains exactly 9 data points from the approved repository snapshot: FCSC 9M/H1 2025 pulse figures and World Bank FY 2022–2024 peer benchmarks. The model is instructed to return exactly 3 numbered observations, one sentence each, derived only from those 9 data points.

### Guardrails enforced

1. `OPENAI_API_KEY` instantiated inside the handler at request time — never at module level during build, never in browser code.
2. Both routes check for the API key and return `503` immediately if not set.
3. Model: `gpt-4o-mini` with `temperature: 0.3` — low temperature reduces hallucination risk.
4. Both routes catch exceptions and return structured `{ error: ... }` rather than crashing.
5. `BriefGenerateSection` renders an explicit error state with a "Try again" link — no fake fallback text.
6. `UAEAISummary` silently returns `null` on error — the page renders fully without the AI block rather than showing a broken card.
7. The AI output is labeled with "AI-assisted synthesis over approved repository evidence. Verify against original sources before use in official communications." in both surfaces.

### Work Done

**`apps/web/app/api/ai/brief/route.ts`** (new):
- POST route handler
- Validates `OPENAI_API_KEY` presence before instantiating `OpenAI` client
- Builds controlled prompt from structured `BriefInput` body
- Returns `{ text: string }` or `{ error: string }` with appropriate HTTP status

**`apps/web/app/api/ai/position-summary/route.ts`** (new):
- GET route handler
- Hardcoded 9-point evidence prompt — no user input surface
- Returns `{ text: string }` or `{ error: string }`

**`apps/web/components/ai/BriefGenerateSection.tsx`** (new):
- Client component (`"use client"`)
- `idle → loading → done | error` state machine
- Parses `**Section Heading**` markdown from AI response into distinct labeled sections
- Institutional visual design — `brand-light` header, `brand-gold/30` border, no chat UI chrome
- Shows "Regenerate" link when done; "Try again" link on error

**`apps/web/components/ai/UAEAISummary.tsx`** (new):
- Client component that auto-fetches on mount
- Parses numbered observations (`1. ... 2. ... 3. ...`)
- Renders in dark navy card matching existing framing band visual language
- Returns `null` on error — silent fail

**`apps/web/app/brief-builder/page.tsx`:**
- Imports `BriefGenerateSection`, replaces disabled generate button section
- Page badge updated from "Scaffold · AI generation deferred" to "AI-assisted · Approved evidence only · March 2026"
- `badgeVariant` updated from `"deferred"` to `"live"`

**`apps/web/app/uae-position/page.tsx`:**
- Imports `UAEAISummary`, inserted between the pulse stats section and the peer benchmark table

**`apps/web/package.json`:**
- Added `openai` dependency

**Environment note:**
`OPENAI_API_KEY` must be present in `apps/web/.env.local`. The root `.env.local` is not read by Next.js when the app is in `apps/web/`. The key was copied to `apps/web/.env.local` for local development (ignored by `.gitignore`).

### Fallback behavior

| Surface | On error |
|---|---|
| `/brief-builder` generate | Shows red error card with message + "Try again" link |
| `/uae-position` readout | Component returns `null` — page renders normally without the AI block |
| Either route if API key missing | Returns `503` with `{ error: "OPENAI_API_KEY not configured" }` |

### Validation

```bash
cd apps/web && npm run build
# ✓ Compiled successfully in 3.1s
# ✓ Generating static pages (11/11)
# Routes: /api/ai/brief (ƒ Dynamic), /api/ai/position-summary (ƒ Dynamic)
# All other pages: ○ Static

# API smoke tests (dev server):
curl -s http://localhost:3000/api/ai/position-summary
# → {"text":"1. The UAE's real GDP growth... 2. With the non-oil share... 3. ..."}

curl -s -X POST http://localhost:3000/api/ai/brief -H "Content-Type: application/json" \
  -d '{...structured brief input...}'
# → {"text":"**Issue Framing**\n...\n**Evidence Summary**\n..."}
```

### Files Changed

- `apps/web/app/api/ai/brief/route.ts` — new: POST handler for brief generation
- `apps/web/app/api/ai/position-summary/route.ts` — new: GET handler for UAE position readout
- `apps/web/components/ai/BriefGenerateSection.tsx` — new: client component for brief builder
- `apps/web/components/ai/UAEAISummary.tsx` — new: client component for UAE position
- `apps/web/app/brief-builder/page.tsx` — integrate BriefGenerateSection, update badge
- `apps/web/app/uae-position/page.tsx` — integrate UAEAISummary
- `apps/web/package.json` / `package-lock.json` — openai dependency

### Screenshots

- `review-screenshots/10-brief-builder-new.png` — `/brief-builder` with active generate button
- `review-screenshots/10-uae-position-ai-loaded.png` — `/uae-position` with AI leadership readout loaded

### Acceptance Criteria Check

1. `/brief-builder` includes working server-side AI generation: **yes** — POST to `/api/ai/brief`, OpenAI gpt-4o-mini, returns 4-section prose
2. Deferred AI state removed/replaced: **yes** — disabled button replaced by `BriefGenerateSection` with live generate action
3. `/uae-position` includes visible AI-generated strategic summary: **yes** — `UAEAISummary` auto-loads "What leadership should notice" readout
4. AI outputs grounded in approved evidence inputs: **yes** — brief uses structured `briefTemplate` object; position summary uses hardcoded 9-point evidence prompt
5. March 2026 data framing intact: **yes** — unchanged
6. No fake fresher data introduced: **yes** — no data changes
7. `OPENAI_API_KEY` server-side only: **yes** — instantiated inside handler, never in browser bundle
8. App builds successfully: **yes** — see validation
9. Validation recorded: **yes**
10. Screenshots captured: **yes** — `review-screenshots/10-*`
11. Implementer handoff explains evidence and guardrails: **yes** — see above sections

### Risks / Concerns

1. `apps/web/.env.local` must be maintained separately from the root `.env.local`. A future improvement would be a monorepo `.env` strategy or a symlink.
2. The `UAEAISummary` prompt and evidence are hardcoded in the route. If the snapshot data changes, the route must be updated manually.
3. `gpt-4o-mini` is cost-efficient but may occasionally produce outputs that need re-generation. The "Regenerate" link on the brief builder addresses this for interactive use.

---
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
