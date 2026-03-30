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
      <div className="bg-[#F9F7ED] border border-[#E6D7A2] rounded-2xl px-8 py-6 mb-10">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <div className="text-xs font-heading font-semibold uppercase tracking-wider text-[#7C5E24] mb-3">
              Emirate Portfolio · {APP_DATA_CONTEXT.as_of}
            </div>
            <h2 className="text-xl font-bold font-heading leading-snug mb-3 text-[#5D3B26]">
              Industrial strength is a coordinated portfolio — each emirate plays
              a distinct role that the Ministry can amplify
            </h2>
            <p className="text-base text-[#7C5E24] leading-relaxed">
              Rather than ranking emirates by size alone, this view frames each by
              strategic industrial role: what it does best, how it connects to the
              national ambition, and where it has untapped potential. The portfolio
              logic reflects the Ministry&apos;s federation coordination mandate.
            </p>
          </div>
          <div className="lg:w-56 flex-shrink-0 flex flex-col gap-3">
            <div className="bg-white/60 rounded-xl p-4 text-center">
              <div className="text-2xl font-extrabold text-[#5D3B26] font-heading">7</div>
              <div className="text-xs text-[#7C5E24] mt-1">Emirates</div>
              <div className="text-[11px] text-[#92722A] mt-0.5">Federation portfolio</div>
            </div>
            <div className="bg-white/60 rounded-xl p-4 text-center">
              <div className="text-2xl font-extrabold text-[#5D3B26] font-heading">2</div>
              <div className="text-xs text-[#7C5E24] mt-1">Anchor Hubs</div>
              <div className="text-[11px] text-[#92722A] mt-0.5">Abu Dhabi · Dubai</div>
            </div>
          </div>
        </div>
      </div>

      {/* Emirate cards */}
      <section className="mb-10">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-base font-semibold text-gray-700 font-heading">
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
                      <div className="w-6 h-6 rounded-full bg-[#92722A] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
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
                    className={`flex-shrink-0 text-xs font-medium px-2 py-0.5 rounded ${evidType.bg} ${evidType.color}`}
                  >
                    {evidType.label}
                  </span>
                </div>

                <div className="mb-3">
                  <div className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
                    Industrial Strengths
                  </div>
                  <ul className="space-y-1">
                    {emirate.strengths.map((strength, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-brand-medium mt-1.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{strength}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-gray-100">
                  <p className="text-sm text-gray-500 italic leading-relaxed">
                    {emirate.portfolio_note}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Cross-emirate portfolio logic */}
      <section className="mb-10">
        <h2 className="text-base font-semibold text-gray-700 font-heading mb-5">
          Cross-Emirate Portfolio Logic
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
            <div className="text-xs font-semibold uppercase tracking-widest text-signal-momentum mb-3">
              Complementary Roles
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
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
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
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
            <p className="text-sm text-gray-600 leading-relaxed">
              Smaller northern emirates depend heavily on Abu Dhabi and Dubai
              supply chain integration for industrial viability. Talent
              retention outside the two major hubs is a persistent structural
              constraint. Cross-emirate industrial data sharing for shared KPI
              reporting remains fragmented and requires a deliberate federation-
              level coordination agreement under ministry leadership.
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
            <p className="text-sm text-brand/80 leading-relaxed">
              Sub-national industrial statistics for the seven emirates are not
              available in the current data cache (extracted{" "}
              {APP_DATA_CONTEXT.extraction_date}). Emirate profiles are based on
              public context from the Ministry, Ministry of Economy, and emirate
              authority publications. Quantitative emirate-level KPIs will require
              structured data agreements with the national statistics portal or individual emirate
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
