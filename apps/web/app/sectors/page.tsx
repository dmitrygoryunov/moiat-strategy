import { PageHeader } from "@/components/primitives/PageHeader";
import { sectorRows, APP_DATA_CONTEXT } from "@/lib/seed-data";
import Link from "next/link";

const statusConfig = {
  strong: {
    label: "Strong",
    color: "text-signal-momentum",
    bg: "bg-signal-momentum-bg",
    border: "border-signal-momentum/20",
    dot: "bg-signal-momentum",
  },
  opportunity: {
    label: "Opportunity",
    color: "text-signal-opportunity",
    bg: "bg-signal-opportunity-bg",
    border: "border-signal-opportunity/20",
    dot: "bg-signal-opportunity",
  },
  "at-risk": {
    label: "At Risk",
    color: "text-signal-risk",
    bg: "bg-signal-risk-bg",
    border: "border-signal-risk/20",
    dot: "bg-signal-risk",
  },
  strategic: {
    label: "Strategic",
    color: "text-brand",
    bg: "bg-brand-light",
    border: "border-brand/20",
    dot: "bg-brand",
  },
};

const evidenceTypeConfig = {
  official: { label: "Official", color: "text-evidence-official", bg: "bg-evidence-official-bg" },
  modeled: { label: "Modeled", color: "text-evidence-modeled", bg: "bg-evidence-modeled-bg" },
  illustrative: { label: "Illustrative", color: "text-evidence-illustrative", bg: "bg-evidence-illustrative-bg" },
};

export default function SectorsPage() {
  const strongSectors = sectorRows.filter((s) => s.status === "strong");
  const opportunitySectors = sectorRows.filter((s) => s.status === "opportunity");
  const strategicSectors = sectorRows.filter((s) => s.status === "strategic");

  return (
    <div>
      <PageHeader
        title="Sector Prioritization"
        subtitle="Which sectors should MoIAT prioritise for national industrial policy through 2031?"
        badge={`Directional · modeled signals · ${APP_DATA_CONTEXT.as_of}`}
        badgeVariant="deferred"
      />

      {/* Framing */}
      <div className="bg-brand-navy rounded-xl px-6 py-5 mb-8 text-white">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-blue-300 mb-2">
            Sector Prioritisation · {APP_DATA_CONTEXT.as_of}
          </div>
          <h2 className="text-xl font-bold leading-snug mb-2">
            Not every sector deserves equal attention — precision is the
            strategic advantage
          </h2>
          <p className="text-sm text-blue-100 leading-relaxed">
            The portfolio below organises UAE industrial sectors by current
            strength, growth attractiveness, strategic importance, and risk
            exposure. Classification is directional, drawing on FY 2024 data
            and MoIAT public context. Full quantitative scoring awaits UN
            Comtrade and UNIDO data connections.
          </p>
        </div>
      </div>

      {/* Core questions summary */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        {[
          {
            q: "Already strong?",
            count: strongSectors.length,
            color: "text-signal-momentum",
            bg: "bg-signal-momentum-bg",
          },
          {
            q: "Attractive but underdeveloped?",
            count: opportunitySectors.length,
            color: "text-signal-opportunity",
            bg: "bg-signal-opportunity-bg",
          },
          {
            q: "Strategically critical?",
            count: strategicSectors.length,
            color: "text-brand",
            bg: "bg-brand-light",
          },
          {
            q: "Cross-emirate coordination required?",
            count: "TBD",
            color: "text-gray-400",
            bg: "bg-gray-100",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm"
          >
            <div className={`text-2xl font-bold mb-2 ${item.color}`}>
              {item.count}
            </div>
            <p className="text-xs text-gray-500 leading-snug">{item.q}</p>
          </div>
        ))}
      </div>

      {/* Sector card grid */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-semibold text-gray-700">
            Sector Overview
          </h2>
          <span className="text-xs text-gray-400">
            FY 2024 data where available · directional classification
          </span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {sectorRows.map((sector) => {
            const status = statusConfig[sector.status];
            const evidType = evidenceTypeConfig[sector.evidence_type];
            return (
              <div
                key={sector.id}
                className={`bg-white rounded-xl border p-5 shadow-sm ${status.border}`}
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2.5">
                    <span className={`w-2 h-2 rounded-full flex-shrink-0 ${status.dot}`} />
                    <h3 className="text-sm font-semibold text-gray-900">
                      {sector.name}
                    </h3>
                  </div>
                  <span
                    className={`flex-shrink-0 text-[11px] font-semibold px-2 py-0.5 rounded-full ${status.bg} ${status.color}`}
                  >
                    {status.label}
                  </span>
                </div>

                <p className="text-xs text-gray-600 leading-relaxed mb-3">
                  {sector.notes}
                </p>

                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[10px] font-medium px-1.5 py-0.5 rounded ${evidType.bg} ${evidType.color}`}
                    >
                      {evidType.label}
                    </span>
                    <span className="text-[10px] text-gray-400">
                      Momentum: {sector.momentum_label}
                    </span>
                  </div>
                  <Link
                    href="/brief-builder"
                    className="text-xs text-brand-medium hover:underline font-medium"
                  >
                    Brief →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Opportunity and risk callouts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <section>
          <h2 className="text-sm font-semibold text-gray-700 mb-3">
            Leading Opportunity Signal
          </h2>
          <div className="bg-white rounded-xl border border-signal-opportunity/20 p-5 shadow-sm">
            <div className="text-[11px] font-semibold uppercase tracking-wide text-signal-opportunity bg-signal-opportunity-bg px-2.5 py-1 rounded-full inline-flex mb-3">
              Opportunity
            </div>
            <h3 className="text-sm font-semibold text-gray-900 mb-2">
              Pharma and food security sectors are underdeveloped relative to the
              existing UAE logistics and cold-chain platform
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              As of March 2026, UAE free zone and cold-chain infrastructure
              represents an underutilised foundation for pharma and agri-tech
              manufacturing entry. FY 2024 FDI data is strong but does not yet
              isolate industrial-sector flows. Export complexity adjacency
              analysis — pending Comtrade and Harvard Atlas access — will
              quantify how close this opportunity is to current UAE capabilities.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-sm font-semibold text-gray-700 mb-3">
            Leading Risk Signal
          </h2>
          <div className="bg-white rounded-xl border border-signal-risk/20 p-5 shadow-sm">
            <div className="text-[11px] font-semibold uppercase tracking-wide text-signal-risk bg-signal-risk-bg px-2.5 py-1 rounded-full inline-flex mb-3">
              Risk
            </div>
            <h3 className="text-sm font-semibold text-gray-900 mb-2">
              Petrochemical and downstream sectors face medium-term demand risk
              from the energy transition in key export markets
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              The petrochemical sector remains a strong contributor to national
              industrial output as of FY 2024 data. However, the medium-term
              demand outlook in Europe and East Asia — the UAE&apos;s primary
              petrochemical export markets — is sensitive to energy transition
              policy. The timing and scale of this risk require a dedicated
              monitoring track and diversification investment planning.
            </p>
          </div>
        </section>
      </div>

      {/* Evidence access */}
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
              Data & Evidence Status · {APP_DATA_CONTEXT.as_of}
            </div>
            <p className="text-xs text-brand/80 leading-relaxed">
              Sector classification in this view is directional, based on FY 2024
              World Bank indicators and MoIAT public policy context. Full
              quantitative scoring requires UN Comtrade product-level exports (API
              access pending) and UNIDO manufacturing structure data (download not
              complete). Evidence confidence badges on each card reflect current
              data quality. No values have been fabricated — gaps are shown as
              deferred.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
