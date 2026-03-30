import { PageHeader } from "@/components/primitives/PageHeader";
import { SectorLensExplorer } from "@/components/ai/SectorLensExplorer";
import { sectorRows, APP_DATA_CONTEXT } from "@/lib/seed-data";
import Link from "next/link";

const SECTOR_ICONS: Record<string, React.ReactNode> = {
  advanced_manufacturing: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085" />
    </svg>
  ),
  clean_energy: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    </svg>
  ),
  food_agritech: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
  ),
  pharma_medtech: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
    </svg>
  ),
  defense_aerospace: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  petrochemicals_downstream: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1.001A3.75 3.75 0 0012 18z" />
    </svg>
  ),
  digital_ict: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
    </svg>
  ),
};

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
        subtitle="Which sectors should the Ministry prioritise for national industrial policy through 2031?"
        badge={`Directional · modeled signals · ${APP_DATA_CONTEXT.as_of}`}
        badgeVariant="deferred"
      />

      {/* Framing */}
      <div className="bg-[#F9F7ED] border border-[#E6D7A2] rounded-2xl px-8 py-6 mb-10">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <div className="text-xs font-heading font-semibold uppercase tracking-wider text-[#7C5E24] mb-3">
              Sector Prioritisation · {APP_DATA_CONTEXT.as_of}
            </div>
            <h2 className="text-xl font-bold font-heading leading-snug mb-3 text-[#5D3B26]">
              Not every sector deserves equal attention — precision is the
              strategic advantage
            </h2>
            <p className="text-base text-[#7C5E24] leading-relaxed">
              The portfolio below organises national industrial sectors by current
              strength, growth attractiveness, strategic importance, and risk
              exposure. Classification is directional, drawing on FY 2024 data
              and ministry public context. Full quantitative scoring awaits UN
              Comtrade and UNIDO data connections.
            </p>
          </div>
          <div className="lg:w-56 flex-shrink-0 flex flex-col gap-3">
            <div className="bg-white/60 rounded-xl p-4 text-center">
              <div className="text-2xl font-extrabold text-[#5D3B26] font-heading">7</div>
              <div className="text-xs text-[#7C5E24] mt-1">Sectors Assessed</div>
              <div className="text-[11px] text-[#92722A] mt-0.5">FY 2024 data</div>
            </div>
            <div className="bg-white/60 rounded-xl p-4 text-center">
              <div className="text-2xl font-extrabold text-[#5D3B26] font-heading">3</div>
              <div className="text-xs text-[#7C5E24] mt-1">Strong Momentum</div>
              <div className="text-[11px] text-[#92722A] mt-0.5">Accelerate candidates</div>
            </div>
          </div>
        </div>
      </div>

      {/* Sector Lens — interactive exploration */}
      <SectorLensExplorer />

      {/* Core questions summary */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {[
          { q: "Already strong?", count: strongSectors.length, color: "text-signal-momentum" },
          { q: "Attractive but underdeveloped?", count: opportunitySectors.length, color: "text-signal-opportunity" },
          { q: "Strategically critical?", count: strategicSectors.length, color: "text-brand" },
          { q: "Cross-emirate coordination?", count: "TBD", color: "text-aeblack-400" },
        ].map((item, i) => (
          <div key={i} className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
            <div className={`text-3xl font-extrabold mb-2 font-heading ${item.color}`}>
              {item.count}
            </div>
            <p className="text-sm text-aeblack-600 leading-snug">{item.q}</p>
          </div>
        ))}
      </div>

      {/* Sector card grid */}
      <section className="mb-10">
        <div className="flex items-baseline justify-between mb-5">
          <h2 className="text-lg font-bold text-aeblack-900 font-heading">
            Sector Overview
          </h2>
          <span className="text-xs text-aeblack-400">
            FY 2024 data where available · directional classification
          </span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {sectorRows.map((sector) => {
            const status = statusConfig[sector.status];
            const evidType = evidenceTypeConfig[sector.evidence_type];
            const icon = SECTOR_ICONS[sector.id];
            return (
              <div
                key={sector.id}
                className={`bg-white rounded-2xl border p-6 shadow-sm ${status.border}`}
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    {icon && (
                      <span className="text-[#92722A] flex-shrink-0">{icon}</span>
                    )}
                    <h3 className="text-base font-bold text-aeblack-900 font-heading">
                      {sector.name}
                    </h3>
                  </div>
                  <span
                    className={`flex-shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full ${status.bg} ${status.color}`}
                  >
                    {status.label}
                  </span>
                </div>

                <p className="text-sm text-aeblack-600 leading-relaxed mb-4">
                  {sector.notes}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`text-xs font-medium px-2 py-0.5 rounded ${evidType.bg} ${evidType.color}`}
                    >
                      {evidType.label}
                    </span>
                    <span className="text-xs text-aeblack-400">
                      Momentum: {sector.momentum_label}
                    </span>
                  </div>
                  <Link
                    href="/brief-builder"
                    className="text-sm text-[#92722A] hover:text-[#B68A35] font-medium transition-colors"
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
        <section>
          <h2 className="text-lg font-bold text-aeblack-900 font-heading mb-4">
            Leading Opportunity Signal
          </h2>
          <div className="bg-white rounded-2xl border border-signal-opportunity/20 p-6 shadow-sm">
            <div className="text-xs font-semibold uppercase tracking-wider text-signal-opportunity bg-signal-opportunity-bg px-2.5 py-1 rounded-full inline-flex mb-4">
              Opportunity
            </div>
            <h3 className="text-base font-bold text-aeblack-900 mb-3 font-heading">
              Pharma and food security sectors are underdeveloped relative to the
              existing national logistics and cold-chain platform
            </h3>
            <p className="text-sm text-aeblack-600 leading-relaxed">
              As of March 2026, national free zone and cold-chain infrastructure
              represents an underutilised foundation for pharma and agri-tech
              manufacturing entry. FY 2024 FDI data is strong but does not yet
              isolate industrial-sector flows. Export complexity adjacency
              analysis — pending Comtrade and Harvard Atlas access — will
              quantify how close this opportunity is to current national capabilities.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-bold text-aeblack-900 font-heading mb-4">
            Leading Risk Signal
          </h2>
          <div className="bg-white rounded-2xl border border-signal-risk/20 p-6 shadow-sm">
            <div className="text-xs font-semibold uppercase tracking-wider text-signal-risk bg-signal-risk-bg px-2.5 py-1 rounded-full inline-flex mb-4">
              Risk
            </div>
            <h3 className="text-base font-bold text-aeblack-900 mb-3 font-heading">
              Petrochemical and downstream sectors face medium-term demand risk
              from the energy transition in key export markets
            </h3>
            <p className="text-sm text-aeblack-600 leading-relaxed">
              The petrochemical sector remains a strong contributor to national
              industrial output as of FY 2024 data. However, the medium-term
              demand outlook in Europe and East Asia — the nation&apos;s primary
              petrochemical export markets — is sensitive to energy transition
              policy. The timing and scale of this risk require a dedicated
              monitoring track and diversification investment planning.
            </p>
          </div>
        </section>
      </div>

      {/* Evidence access */}
      <section>
        <div className="bg-[#F9F7ED] border border-[#E6D7A2] rounded-2xl p-6 flex items-start gap-4">
          <svg
            className="w-5 h-5 text-[#92722A] mt-0.5 flex-shrink-0"
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
            <div className="text-sm font-bold text-[#5D3B26] mb-1 font-heading">
              Data & Evidence Status · {APP_DATA_CONTEXT.as_of}
            </div>
            <p className="text-sm text-[#7C5E24] leading-relaxed">
              Sector classification in this view is directional, based on FY 2024
              World Bank indicators and ministry public policy context. Full
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
