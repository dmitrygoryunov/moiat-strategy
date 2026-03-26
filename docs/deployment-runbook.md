# Deployment Runbook

Last updated: 2026-03-26 (MSP-002-P1)

---

## 1. Overview

This runbook covers local development, build verification, and deployment for the MoIAT strategy prototype web application (`apps/web`).

---

## 2. Local Development Steps

### Prerequisites

- Node.js 18+ (tested with v24.13.0)
- npm 9+ (tested with v11.6.0)

### Setup

```bash
cd apps/web
npm install
```

### Environment variables

Copy the example file and fill in real values:

```bash
cp apps/web/.env.example apps/web/.env.local
# Edit .env.local with real values
```

`OPENAI_API_KEY` is **server-side only**. It must never appear in browser-delivered code. See `CLAUDE.md` section 8.

### Start development server

```bash
cd apps/web
npm run dev
```

App runs at: `http://localhost:3000`

---

## 3. Build Verification Steps

```bash
cd apps/web && npm install
cd apps/web && npm run build
```

Expected output:

- `✓ Compiled successfully`
- All routes listed in the route table below
- No TypeScript errors
- No lint errors

### Validated build output (2026-03-26)

```
Route (app)                              Size  First Load JS
┌ ○ /                                 1.73 kB         107 kB
├ ○ /_not-found                         992 B         103 kB
├ ○ /brief-builder                      130 B         102 kB
├ ○ /emirates                           130 B         102 kB
├ ○ /roadmap                            130 B         102 kB
├ ○ /sectors                            162 B         106 kB
└ ○ /uae-position                     1.71 kB         104 kB
```

All routes are static (○). No errors.

---

## 4. Route Table

| Route | Description | Status |
| --- | --- | --- |
| `/` | Leadership Dashboard | ✅ Implemented |
| `/uae-position` | UAE Position & Peer Benchmarking | ✅ Implemented |
| `/sectors` | Sector Prioritization | ✅ Implemented |
| `/emirates` | Emirate Portfolio | ✅ Implemented |
| `/brief-builder` | Decision Brief Builder | ✅ Implemented (AI deferred) |
| `/roadmap` | Roadmap & Operating Model | ✅ Implemented |

---

## 5. Startup Steps

```bash
# Production (after build)
cd apps/web
npm run build
npm run start
```

App runs at: `http://localhost:3000`

---

## 6. Verification Steps

After starting the app:

1. Open `http://localhost:3000` — Leadership Dashboard should load with 6 KPI cards and 3 insight cards.
2. Click each nav item — all 6 routes should render without error.
3. Click any "Evidence" badge on a KPI card — evidence drawer should open from the right side.
4. Navigate to `/brief-builder` — brief scaffold should display with deferred AI generation state.
5. Navigate to `/roadmap` — three roadmap phases should render.

---

## 7. Implemented Behavior

| Feature | Status |
| --- | --- |
| App shell and shared navigation (SideNav) | ✅ |
| Leadership Dashboard (seed data + World Bank values) | ✅ |
| UAE Position page (World Bank peer comparison) | ✅ |
| Sector Prioritization page (modeled scaffold) | ✅ |
| Emirate Portfolio page (structured context) | ✅ |
| Decision Brief Builder page (scaffold, AI deferred) | ✅ |
| Roadmap & Operating Model page | ✅ |
| KpiCard component | ✅ |
| InsightCard component | ✅ |
| EvidenceDrawer component (side panel, opens on click) | ✅ |
| PageHeader component | ✅ |
| DeferredBadge component | ✅ |
| Evidence type labeling (official / modeled / illustrative) | ✅ |
| Seed data with real World Bank extracted values | ✅ |
| OPENAI_API_KEY kept server-side only | ✅ (.env.example, server config only) |

---

## 8. Deferred Behavior

| Feature | Reason | Planned packet |
| --- | --- | --- |
| Server-side OpenAI brief generation | API wiring not implemented | MSP-005 |
| PDF export of decision briefs | Depends on brief generation | MSP-005 |
| Live KPI ETL pipeline | ETL scripts in `scripts/` (separate packet) | MSP-003 / MSP-004 |
| UN Comtrade product-level data | API subscription pending (401 error) | MSP-003 |
| FCSC/UAE.Stat structured export | Manual export not yet complete | MSP-003 |
| Harvard Atlas complexity scores | Bulk data access not yet secured | MSP-003 |
| WIPO IP metrics (tabular) | HTML snapshot only in current cache | MSP-003 |
| UNIDO manufacturing tables | Download not complete | MSP-003 |
| Emirate sub-national statistics | No public structured source available | Future |

---

## 9. Rollback / Cleanup Steps

```bash
cd apps/web
rm -rf .next node_modules
npm install
npm run build
```

---

## 10. Known Issues

- Google Fonts import in `globals.css` requires network access during dev server startup. If offline, app falls back to the system font stack — no functional impact.
- `next.config.ts` uses TypeScript config format (Next.js 15+). If downgrading Next.js, rename to `next.config.js`.
