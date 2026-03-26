import { PageHeader } from "@/components/primitives/PageHeader";
import { DeferredBadge } from "@/components/primitives/DeferredBadge";
import { emirateRows } from "@/lib/seed-data";

const evidenceTypeConfig = {
  official: {
    label: "Official",
    color: "text-evidence-official",
    bg: "bg-evidence-official-bg",
  },
  modeled: {
    label: "Modeled",
    color: "text-evidence-modeled",
    bg: "bg-evidence-modeled-bg",
  },
  illustrative: {
    label: "Illustrative",
    color: "text-evidence-illustrative",
    bg: "bg-evidence-illustrative-bg",
  },
};

export default function EmiratesPage() {
  return (
    <div>
      <PageHeader
        title="Emirate Portfolio"
        subtitle="How each emirate contributes to a national industrial portfolio — roles, strengths, and dependencies"
        badge="Scaffold · structured context"
        badgeVariant="deferred"
      />

      {/* Portfolio framing */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8 shadow-sm">
        <div className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
          Portfolio logic
        </div>
        <h2 className="text-lg font-bold text-brand-navy mb-2 leading-snug">
          The UAE&apos;s industrial strength is a portfolio story — each emirate
          plays a distinct role that MoIAT can amplify
        </h2>
        <p className="text-sm text-gray-600 leading-relaxed max-w-3xl mb-4">
          Rather than ranking emirates by size or output alone, the portfolio
          view frames each emirate by its strategic industrial role: what it does
          best, how it connects to the national ambition, and where it has
          untapped potential. This framing supports MoIAT&apos;s coordination mandate
          across the federation.
        </p>
        <DeferredBadge reason="Emirate-level economic statistics are limited in public sources. Quantitative metrics will require UAE.Stat sub-national tables or Ministry of Economy emirate data (not yet available as structured exports). Current view uses structured contextual analysis." />
      </div>

      {/* Emirate cards */}
      <section className="mb-8">
        <h2 className="text-sm font-semibold text-gray-700 mb-4">
          Emirate Industrial Roles
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {emirateRows.map((emirate, i) => {
            const evidType = evidenceTypeConfig[emirate.evidence_type];
            return (
              <div
                key={emirate.id}
                className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-6 h-6 rounded-full bg-brand-navy text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0">
                        {i + 1}
                      </div>
                      <h3 className="text-base font-bold text-brand-navy">
                        {emirate.name}
                      </h3>
                    </div>
                    <p className="text-xs font-medium text-brand-medium ml-8">
                      {emirate.industrial_role}
                    </p>
                  </div>
                  <span
                    className={`flex-shrink-0 text-[10px] font-medium px-2 py-0.5 rounded ${evidType.bg} ${evidType.color}`}
                  >
                    {evidType.label}
                  </span>
                </div>

                {/* Strengths */}
                <div className="mb-3">
                  <div className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-2">
                    Industrial Strengths
                  </div>
                  <ul className="space-y-1">
                    {emirate.strengths.map((strength, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-brand-medium mt-1.5 flex-shrink-0" />
                        <span className="text-xs text-gray-600">{strength}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Portfolio note */}
                <div className="pt-3 border-t border-gray-100">
                  <p className="text-xs text-gray-500 italic leading-relaxed">
                    {emirate.portfolio_note}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Comparative strengths and dependencies */}
      <section className="mb-8">
        <h2 className="text-sm font-semibold text-gray-700 mb-4">
          Cross-Emirate Portfolio Logic
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
            <div className="text-xs font-semibold uppercase tracking-widest text-signal-momentum mb-3">
              Complementary Roles
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              Abu Dhabi provides capital and sovereign direction. Dubai provides
              market access and logistics. Sharjah provides industrial land and
              SME capacity. The combined platform is greater than any single
              emirate.
            </p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
            <div className="text-xs font-semibold uppercase tracking-widest text-signal-opportunity mb-3">
              Centre-of-Excellence Hypotheses
            </div>
            <p className="text-xs text-gray-600 leading-relaxed mb-3">
              RAK for advanced materials and ceramics. Sharjah for SME and
              light manufacturing. Abu Dhabi for capital-intensive and
              strategic industries. Fujairah for logistics and energy
              infrastructure.
            </p>
            <DeferredBadge reason="Centre-of-excellence mapping requires validation with emirate economic authorities. Currently directional." />
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
            <div className="text-xs font-semibold uppercase tracking-widest text-signal-risk mb-3">
              Dependencies & Risks
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              Northern Emirates depend heavily on Abu Dhabi and Dubai
              ecosystems for supply chain integration. Smaller emirates face
              talent retention risk. Cross-emirate data sharing for industrial
              KPIs is fragmented and requires federation-level coordination.
            </p>
          </div>
        </div>
      </section>

      {/* Evidence note */}
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
              Evidence Status
            </div>
            <p className="text-xs text-brand/80 leading-relaxed">
              Sub-national industrial statistics for UAE emirates are not
              available in the current raw data cache. Emirate profiles are based
              on public context analysis (MoIAT, Ministry of Economy, emirate
              authority publications). Quantitative emirate-level KPIs will
              require structured data agreements with UAE.Stat or emirate
              statistical offices. All profile entries are labeled with their
              evidence confidence level.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
