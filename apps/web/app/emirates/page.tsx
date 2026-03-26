import { PageHeader } from "@/components/primitives/PageHeader";
import { DeferredBadge } from "@/components/primitives/DeferredBadge";
import { emirateRows, APP_DATA_CONTEXT } from "@/lib/seed-data";

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
        subtitle="How each emirate contributes to a national industrial portfolio — roles, strengths, and strategic dependencies"
        badge={`Structured context · ${APP_DATA_CONTEXT.as_of}`}
        badgeVariant="deferred"
      />

      {/* Portfolio framing */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8 shadow-sm">
        <div className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
          Portfolio logic · as of {APP_DATA_CONTEXT.as_of}
        </div>
        <h2 className="text-lg font-bold text-brand-navy mb-2 leading-snug">
          The UAE&apos;s industrial strength is a portfolio story — each emirate
          plays a distinct role that MoIAT can coordinate and amplify
        </h2>
        <p className="text-sm text-gray-600 leading-relaxed max-w-3xl mb-4">
          Rather than ranking emirates by size or output alone, this view frames
          each by its strategic industrial role: what it does best, how it
          connects to the national ambition, and where it has untapped potential.
          This framing reflects MoIAT&apos;s coordination mandate across the
          federation and the need for cross-emirate portfolio logic rather than
          seven parallel strategies.
        </p>
        <DeferredBadge reason="Sub-national economic statistics for UAE emirates are not available as structured public exports in the current data cache. Quantitative emirate-level KPIs require UAE.Stat sub-national tables or Ministry of Economy emirate-level data — neither is yet in the repository. This view uses structured contextual analysis based on public institutional and policy sources." />
      </div>

      {/* Emirate cards */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-semibold text-gray-700">
            Emirate Industrial Roles
          </h2>
          <span className="text-xs text-gray-400">
            Structured context · no sub-national quantitative data available yet
          </span>
        </div>
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

      {/* Cross-emirate portfolio logic */}
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
              market access and global logistics. Sharjah provides cost-effective
              manufacturing land and academic capacity. The combined platform is
              stronger than any single emirate operating independently.
            </p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
            <div className="text-xs font-semibold uppercase tracking-widest text-signal-opportunity mb-3">
              Centre-of-Excellence Hypotheses
            </div>
            <p className="text-xs text-gray-600 leading-relaxed mb-3">
              RAK for advanced materials and ceramics. Sharjah for SME and light
              manufacturing supply chains. Abu Dhabi for capital-intensive and
              strategically sensitive industries. Fujairah for energy and
              logistics infrastructure. These are directional hypotheses pending
              validation with emirate authorities.
            </p>
            <DeferredBadge reason="Centre-of-excellence mapping requires validation with emirate economic development authorities. Currently directional and subject to revision." />
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
            <div className="text-xs font-semibold uppercase tracking-widest text-signal-risk mb-3">
              Dependencies & Risks
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              Smaller northern emirates depend heavily on Abu Dhabi and Dubai
              supply chain integration for industrial viability. Talent
              retention outside the two major hubs is a persistent structural
              constraint. Cross-emirate industrial data sharing for shared KPI
              reporting remains fragmented and requires a deliberate federation-
              level coordination agreement under MoIAT leadership.
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
              Evidence Status · {APP_DATA_CONTEXT.as_of}
            </div>
            <p className="text-xs text-brand/80 leading-relaxed">
              Sub-national industrial statistics for UAE emirates are not
              available in the current data cache (extracted{" "}
              {APP_DATA_CONTEXT.extraction_date}). Emirate profiles are based on
              public context from MoIAT, Ministry of Economy, and emirate
              authority publications. Quantitative emirate-level KPIs will require
              structured data agreements with UAE.Stat or individual emirate
              statistical offices. All profile entries carry an evidence
              confidence label — none are presented as quantitative official data
              unless explicitly stated.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
