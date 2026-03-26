import { PageHeader } from "@/components/primitives/PageHeader";
import { DeferredBadge } from "@/components/primitives/DeferredBadge";
import { EvidenceDrawer } from "@/components/primitives/EvidenceDrawer";
import type { EvidenceMeta } from "@/lib/seed-data";
import { APP_DATA_CONTEXT } from "@/lib/seed-data";

// ─── Recent UAE Pulse ──────────────────────────────────────────────────────────
// FCSC official sub-annual releases — latest available as of extraction date.
const pulseStats = [
  {
    label: "Real GDP Growth",
    value: "5.1%",
    period: "9M 2025",
    source: "FCSC",
    note: "Published 2026-02-20",
  },
  {
    label: "Non-oil GDP Growth",
    value: "6.1%",
    period: "9M 2025",
    source: "FCSC",
    note: "Published 2026-02-20",
  },
  {
    label: "Non-oil GDP Share",
    value: "77.5%",
    period: "H1 2025",
    source: "FCSC",
    note: "Published 2025-12-11",
  },
];

const pulseEvidence: EvidenceMeta = {
  source_name:
    "Federal Competitiveness and Statistics Centre (FCSC) — sub-annual GDP releases",
  source_id: "fcsc_gdp_9m_2025_h1_2025",
  publisher: "FCSC",
  geography: "UAE",
  unit: "Percent (real annual growth rate / share of real GDP)",
  extraction_date: "2026-03-26",
  display_period: "9M 2025 / H1 2025",
  period_label: "9M 2025 (real GDP, non-oil GDP) · H1 2025 (non-oil share)",
  caveats:
    "Real GDP growth (5.1%) and non-oil GDP growth (6.1%) are from the FCSC 9M 2025 release published 2026-02-20. Non-oil GDP share (77.5%) is from the FCSC H1 2025 release published 2025-12-11. These are the latest official sub-annual pulse readings as of 2026-03-26. These are not full-year 2025 figures — annualised comparison with peer benchmarks (which are full-year) is directional only.",
  caveat_short: "Sub-annual FCSC pulse — not harmonised to full-year peer figures",
  confidence: "high",
  evidence_type: "official",
  freshness_label: "Latest official pulse",
};

// ─── Annual Structural Benchmarks ─────────────────────────────────────────────
// World Bank indicators, latest available year per country.
// UAE figure is FY 2024. Other countries reflect latest available (2022–2024).
const peerData = [
  {
    country: "UAE",
    period: "2024",
    gdp_growth: 4.0,
    manuf_pct_gdp: 9.4,
    fdi_pct_gdp: 8.3,
    note: "Anchor",
    highlight: true,
  },
  {
    country: "Saudi Arabia",
    period: "2022",
    gdp_growth: 1.3,
    manuf_pct_gdp: 11.8,
    fdi_pct_gdp: 3.1,
    note: "Regional peer",
    highlight: false,
  },
  {
    country: "Singapore",
    period: "2023",
    gdp_growth: 1.1,
    manuf_pct_gdp: 21.2,
    fdi_pct_gdp: 19.4,
    note: "Aspirational benchmark",
    highlight: false,
  },
  {
    country: "South Korea",
    period: "2023",
    gdp_growth: 2.5,
    manuf_pct_gdp: 26.1,
    fdi_pct_gdp: 0.9,
    note: "Manufacturing benchmark",
    highlight: false,
  },
  {
    country: "Netherlands",
    period: "2023",
    gdp_growth: 0.9,
    manuf_pct_gdp: 12.3,
    fdi_pct_gdp: 38.2,
    note: "Trade hub benchmark",
    highlight: false,
  },
];

const peerEvidence: EvidenceMeta = {
  source_name: "World Bank Open Data — multiple indicators",
  source_id: "wb_peer_comparison_multi",
  publisher: "World Bank",
  geography: "UAE, Saudi Arabia, Singapore, South Korea, Netherlands",
  unit: "Various (% of GDP, annual %)",
  extraction_date: "2026-03-26",
  display_period: "2022–2024 (latest per country)",
  period_label: "2022–2024 · latest available per country",
  caveats:
    "Each country's values reflect the latest available year in the World Bank API as of extraction date 2026-03-26. UAE values are FY 2024. Saudi Arabia manufacturing figure is 2022. Other peers are 2023. Years differ by up to two years — this is a directional structural comparison, not a harmonised single-year ranking.",
  caveat_short: "Latest available year per country — not harmonised to a single year",
  confidence: "medium",
  evidence_type: "official",
};

const competitivenessAreas = [
  {
    area: "Industrial Structure",
    uae_summary:
      "Manufacturing at 9.4% of GDP (FY 2024, World Bank). Services sector dominant at over 50% of non-oil output. Free zone industrial clusters are the primary engine of non-oil manufacturing growth.",
    status: "strength",
    data_status: "available",
  },
  {
    area: "Export Mix & Complexity",
    uae_summary:
      "Total exports exceed 100% of GDP (re-exports, hydrocarbons, and growing manufacturing). The complexity profile — how sophisticated the export basket is — shows a meaningful gap relative to Singapore and South Korea. Adjacency analysis pending full Comtrade and Harvard Atlas access.",
    status: "opportunity",
    data_status: "partial",
    deferred_note:
      "Full export complexity scoring requires Harvard Atlas bulk data (access not yet secured) and UN Comtrade product-level data (API subscription pending).",
  },
  {
    area: "FDI Attractiveness",
    uae_summary:
      "FDI at 8.3% of GDP (FY 2024, World Bank) — strong by both regional and global standards. Free zone infrastructure is a differentiated competitive advantage. The critical gap: without an industrial-sector FDI breakdown, the headline figure may overstate manufacturing-directed investment.",
    status: "strength",
    data_status: "partial",
    deferred_note:
      "Sector-level FDI decomposition requires Ministry of Economy structured data export — not yet in the repository cache.",
  },
  {
    area: "Digital Government Readiness",
    uae_summary:
      "UAE consistently ranks among the top globally on e-government and digital readiness indices. Digital infrastructure quality is a genuine competitive advantage and the foundational platform for an AI-Native MoIAT operating model.",
    status: "strength",
    data_status: "available",
  },
  {
    area: "Innovation & Technology Output",
    uae_summary:
      "Patent and trademark activity is growing from a low base (WIPO data, extracted as HTML snapshot — tabular extraction pending). Innovation-output metrics still lag significantly behind innovation-input investment, which is the pattern of a market in early transition toward knowledge-based industry.",
    status: "risk",
    data_status: "partial",
    deferred_note:
      "WIPO tabular data extraction not yet complete — current repository holds HTML snapshot only. Structured IP statistics available in second data pass.",
  },
  {
    area: "Regulatory Enablement",
    uae_summary:
      "ICV, ITTI, and the Industrial Registry are strong policy instruments with real operational reach. Regulatory turnaround time, licence cycle time, and conformity processing metrics are MoIAT-native KPIs that require direct ministry data connection — not yet available in the public data cache.",
    status: "opportunity",
    data_status: "deferred",
    deferred_note:
      "Regulatory efficiency KPIs require live ministry data. Any values shown in this section are illustrative workflow placeholders only.",
  },
];

const statusConfig = {
  strength: {
    label: "Strength",
    color: "text-signal-momentum",
    bg: "bg-signal-momentum-bg",
  },
  opportunity: {
    label: "Opportunity",
    color: "text-signal-opportunity",
    bg: "bg-signal-opportunity-bg",
  },
  risk: {
    label: "Risk",
    color: "text-signal-risk",
    bg: "bg-signal-risk-bg",
  },
};

export default function UAEPositionPage() {
  return (
    <div>
      <PageHeader
        title="UAE Position & Peer Benchmarking"
        subtitle="Current UAE performance pulse alongside structural peer benchmarks"
        badge={`FCSC pulse + World Bank benchmarks · ${APP_DATA_CONTEXT.extraction_label}`}
        badgeVariant="live"
      />

      {/* Narrative framing band */}
      <div className="bg-brand-navy rounded-xl px-6 py-5 mb-8 text-white">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-blue-300 mb-2">
            UAE Position · {APP_DATA_CONTEXT.as_of}
          </div>
          <h2 className="text-xl font-bold leading-snug mb-2">
            UAE real GDP grew 5.1% through September 2025 — ahead on key
            foundations, the strategic gap is manufacturing complexity
          </h2>
          <p className="text-sm text-blue-100 leading-relaxed">
            The latest official pulse (FCSC, 9M 2025) confirms strong momentum:
            5.1% real GDP growth and 6.1% non-oil GDP growth, with non-oil
            activity reaching 77.5% of real GDP in H1 2025. Against
            manufacturing-led benchmarks — Singapore at 21%, South Korea at 26%
            — the complexity gap is wide and the strategic opportunity is
            significant. The central question for MoIAT is how to close that
            gap through targeted sector and emirate decisions over the next five
            years.
          </p>
        </div>
      </div>

      {/* Recent UAE Pulse */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-sm font-semibold text-gray-700">
              Recent UAE Performance
            </h2>
            <p className="text-xs text-gray-400 mt-0.5">
              Latest official sub-annual releases · FCSC
            </p>
          </div>
          <EvidenceDrawer evidence={pulseEvidence} triggerLabel="FCSC pulse" />
        </div>
        <div className="grid grid-cols-3 gap-4">
          {pulseStats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm"
            >
              <div className="text-[10px] font-semibold text-signal-momentum uppercase tracking-wider mb-2">
                Latest official pulse
              </div>
              <div className="text-3xl font-bold text-brand-navy leading-none mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-gray-700">
                {stat.label}
              </div>
              <div className="text-[10px] text-gray-400 mt-1.5">
                {stat.period} · {stat.source} · {stat.note}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Annual structural benchmark table */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-sm font-semibold text-gray-700">
              Annual Structural Benchmarks — Peer Comparison
            </h2>
            <p className="text-xs text-gray-400 mt-0.5">
              World Bank annual data · latest available year per country · directional comparison only
            </p>
          </div>
          <EvidenceDrawer
            evidence={peerEvidence}
            triggerLabel="World Bank source"
          />
        </div>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500">
                  Country
                </th>
                <th className="text-center px-3 py-3 text-xs font-semibold text-gray-500">
                  Year
                </th>
                <th className="text-right px-5 py-3 text-xs font-semibold text-gray-500">
                  GDP Growth
                </th>
                <th className="text-right px-5 py-3 text-xs font-semibold text-gray-500">
                  Manuf. % GDP
                </th>
                <th className="text-right px-5 py-3 text-xs font-semibold text-gray-500">
                  FDI % GDP
                </th>
                <th className="px-5 py-3 text-xs font-semibold text-gray-500">
                  Comparator role
                </th>
              </tr>
            </thead>
            <tbody>
              {peerData.map((row, i) => (
                <tr
                  key={row.country}
                  className={`border-b border-gray-50 ${
                    row.highlight
                      ? "bg-brand-light"
                      : i % 2 === 0
                      ? "bg-white"
                      : "bg-gray-50/50"
                  }`}
                >
                  <td className="px-5 py-3.5">
                    <span
                      className={`font-semibold ${
                        row.highlight ? "text-brand" : "text-gray-800"
                      }`}
                    >
                      {row.country}
                    </span>
                  </td>
                  <td className="px-3 py-3.5 text-center">
                    <span className="text-xs text-gray-400 font-medium">
                      {row.period}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-right">
                    <span
                      className={`font-medium ${
                        row.highlight ? "text-brand" : "text-gray-700"
                      }`}
                    >
                      {row.gdp_growth.toFixed(1)}%
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-right">
                    <span
                      className={`font-medium ${
                        row.highlight ? "text-brand" : "text-gray-700"
                      }`}
                    >
                      {row.manuf_pct_gdp.toFixed(1)}%
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-right">
                    <span
                      className={`font-medium ${
                        row.highlight ? "text-brand" : "text-gray-700"
                      }`}
                    >
                      {row.fdi_pct_gdp.toFixed(1)}%
                    </span>
                  </td>
                  <td className="px-5 py-3.5">
                    <span className="text-xs text-gray-500">{row.note}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="px-5 py-2.5 bg-gray-50 border-t border-gray-100">
            <span className="text-[10px] text-gray-400">
              World Bank Open Data API · Extracted {APP_DATA_CONTEXT.extraction_date} · Years vary per country · Annual structural data — compare directionally with FCSC pulse above
            </span>
          </div>
        </div>
      </section>

      {/* Competitiveness dimensions */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-semibold text-gray-700">
            Competitiveness Dimensions
          </h2>
          <span className="text-xs text-gray-400">
            As of {APP_DATA_CONTEXT.as_of} · FY 2024 data where available
          </span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {competitivenessAreas.map((area) => {
            const config = statusConfig[area.status as keyof typeof statusConfig];
            return (
              <div
                key={area.area}
                className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-sm font-semibold text-gray-900">
                    {area.area}
                  </h3>
                  <span
                    className={`flex-shrink-0 text-[11px] font-semibold px-2 py-0.5 rounded-full ${config.bg} ${config.color}`}
                  >
                    {config.label}
                  </span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed mb-3">
                  {area.uae_summary}
                </p>
                {area.deferred_note && (
                  <DeferredBadge reason={area.deferred_note} />
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Methodology / evidence access */}
      <section>
        <div className="bg-brand-light rounded-xl p-5 flex items-start gap-4">
          <svg
            className="w-5 h-5 text-brand-medium mt-0.5 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <div>
            <div className="text-sm font-semibold text-brand mb-1">
              Methodology & Evidence Access
            </div>
            <p className="text-xs text-brand/80 leading-relaxed">
              This page combines two data layers. The <strong>recent UAE pulse</strong>{" "}
              uses FCSC official sub-annual releases: 9M 2025 (published
              2026-02-20) for real and non-oil GDP growth, H1 2025 (published
              2025-12-11) for non-oil share. The{" "}
              <strong>annual structural benchmarks</strong> use World Bank Open
              Data API (extracted {APP_DATA_CONTEXT.extraction_date}); years
              vary per country by 1–2 years. The two layers are intentionally
              not merged — sub-annual UAE pulse figures are not directly
              comparable to full-year peer benchmarks and should be read as
              directional context only. The controlled comparator set will be
              confirmed with MoIAT in the next phase.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
