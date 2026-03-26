import { PageHeader } from "@/components/primitives/PageHeader";
import { DeferredBadge } from "@/components/primitives/DeferredBadge";
import { EvidenceDrawer } from "@/components/primitives/EvidenceDrawer";
import type { EvidenceMeta } from "@/lib/seed-data";

// Peer comparison data — real World Bank indicator values
// Source: World Bank API, extracted 2026-03-26
const peerData = [
  {
    country: "UAE",
    gdp_growth: 4.0,
    manuf_pct_gdp: 9.4,
    fdi_pct_gdp: 8.3,
    note: "Anchor",
    highlight: true,
  },
  {
    country: "Saudi Arabia",
    gdp_growth: 1.3,
    manuf_pct_gdp: 11.8,
    fdi_pct_gdp: 3.1,
    note: "Regional peer",
    highlight: false,
  },
  {
    country: "Singapore",
    gdp_growth: 1.1,
    manuf_pct_gdp: 21.2,
    fdi_pct_gdp: 19.4,
    note: "Aspirational benchmark",
    highlight: false,
  },
  {
    country: "South Korea",
    gdp_growth: 2.5,
    manuf_pct_gdp: 26.1,
    fdi_pct_gdp: 0.9,
    note: "Manufacturing benchmark",
    highlight: false,
  },
  {
    country: "Netherlands",
    gdp_growth: 0.9,
    manuf_pct_gdp: 12.3,
    fdi_pct_gdp: 38.2,
    note: "Trade hub benchmark",
    highlight: false,
  },
];

const peerEvidence: EvidenceMeta = {
  source_name: "World Bank Open Data — multiple indicators",
  source_id: "wb_peer_comparison_2024",
  publisher: "World Bank",
  geography: "Multiple (ARE, SAU, SGP, KOR, NLD)",
  unit: "Various (% of GDP, annual %)",
  extraction_date: "2026-03-26",
  source_period: "2022–2024 (latest available per country)",
  caveats:
    "Peer values drawn from World Bank latest available year per country. Years may differ by 1–2 years across comparators. Saudi Arabia manufacturing figure is 2022 estimate. Comparison is directional, not definitive.",
  confidence: "medium",
  evidence_type: "official",
};

const competitivenessAreas = [
  {
    area: "Industrial Structure",
    uae_summary:
      "Manufacturing at 9.4% of GDP (2024), growing from a low base. Diversified services sector dominant. Free zone industrial clusters driving non-oil output.",
    status: "strength",
    data_status: "available",
  },
  {
    area: "Export Mix & Complexity",
    uae_summary:
      "High export-to-GDP ratio (>100%). Mix includes re-exports, hydrocarbons, and growing manufacturing. Complexity profile shows adjacency potential toward higher-value industry.",
    status: "opportunity",
    data_status: "partial",
    deferred_note:
      "Full Harvard Atlas complexity score pending bulk data access.",
  },
  {
    area: "FDI Attractiveness",
    uae_summary:
      "FDI at 8.3% of GDP — strong by regional and global standards. Free zone infrastructure is a competitive differentiator. Industrial sector breakdown not yet isolated.",
    status: "strength",
    data_status: "partial",
    deferred_note:
      "Sector-level FDI split requires Ministry of Economy structured export.",
  },
  {
    area: "Digital Government Readiness",
    uae_summary:
      "UAE consistently scores well on global e-government and digital readiness indices. Strong foundation for AI-Native ministry operations.",
    status: "strength",
    data_status: "available",
  },
  {
    area: "Innovation & Tech Adoption",
    uae_summary:
      "Patent activity growing from a low base. WIPO data shows trademark filings accelerating. Innovation-output metrics lag innovation-input investment.",
    status: "risk",
    data_status: "partial",
    deferred_note:
      "WIPO tabular data requires second-pass extraction (current snapshot is HTML only).",
  },
  {
    area: "Regulatory Enablement",
    uae_summary:
      "ICV, ITTI, and Industrial Registry provide strong policy instruments. Regulatory turnaround time and license cycle metrics are MoIAT-native and require ministry data connection.",
    status: "opportunity",
    data_status: "deferred",
    deferred_note:
      "Regulatory efficiency KPIs require live ministry data. Illustrative values only in this prototype.",
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
        subtitle="Where the UAE sits relative to peers across key industrial competitiveness dimensions"
        badge="World Bank data · 2024"
        badgeVariant="live"
      />

      {/* Narrative header */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8 shadow-sm">
        <div className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
          Strategic framing
        </div>
        <h2 className="text-lg font-bold text-brand-navy mb-2 leading-snug">
          The UAE is a strong regional platform — the next challenge is
          deepening industrial complexity
        </h2>
        <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
          Compared to regional peers, the UAE leads on GDP growth and FDI
          attractiveness. Compared to manufacturing-led benchmarks like
          Singapore or South Korea, the opportunity to grow manufacturing&apos;s
          share of GDP and increase export complexity is significant. The
          strategic question for MoIAT is how to close that complexity gap
          through targeted sector and emirate prioritization.
        </p>
      </div>

      {/* Peer comparison table */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-semibold text-gray-700">
            Peer Comparison — Selected Indicators
          </h2>
          <EvidenceDrawer
            evidence={peerEvidence}
            triggerLabel="Peer comparison"
          />
        </div>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500">
                  Country
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
                  Role
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
              World Bank indicators · Latest available year per country ·
              Extracted 2026-03-26 · Directional comparison only
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
              All peer comparison figures are drawn from the World Bank Open
              Data API (extracted 2026-03-26). Peer selection is illustrative —
              the controlled peer list will be finalized with MoIAT in the next
              phase. Harvard Atlas complexity data and WIPO innovation metrics
              are referenced but not yet loaded; those sections are marked
              accordingly.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
