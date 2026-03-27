import { PageHeader } from "@/components/primitives/PageHeader";
import { BriefGenerateSection } from "@/components/ai/BriefGenerateSection";
import { APP_DATA_CONTEXT } from "@/lib/seed-data";

// Brief template scaffold — AI generation deferred pending server-side OpenAI integration.
// This page shows the structural workflow and section content.
// The "Generate" button is explicitly disabled with a plain explanation.

const briefTemplate = {
  issue:
    "Manufacturing sector adjacency: where should the nation concentrate industrial policy effort through 2026–2031?",
  framing:
    `As of ${APP_DATA_CONTEXT.as_of}, the latest official pulse (FCSC 9M 2025) shows non-oil GDP growing at 6.1% with real GDP at 5.1%. Non-oil GDP share reached 77.5% in H1 2025, up from 75.5% in FY 2024. Manufacturing value added stands at 9.4% of GDP (FY 2024, World Bank). The strategic question for the Ministry is not whether to act, but where: which sector adjacencies offer the highest combination of strategic value, the nation platform advantage, and achievable complexity uplift before the 2031 Operation 300bn deadline. Answering this precisely requires completing the UN Comtrade and Harvard Atlas data connections.`,
  evidence: [
    {
      id: "non_oil_growth",
      label: "Non-oil GDP growth: 6.1%",
      period: "9M 2025",
      source: "FCSC (press release 2026-02-20)",
      type: "official" as const,
    },
    {
      id: "non_oil_share",
      label: "Non-oil GDP share: 77.5%",
      period: "H1 2025",
      source: "FCSC (press release 2025-12-11)",
      type: "official" as const,
    },
    {
      id: "manuf_va",
      label: "Manufacturing value added: 9.4% of GDP",
      period: "FY 2024",
      source: "World Bank (NV.IND.MANF.ZS)",
      type: "official" as const,
    },
    {
      id: "complexity",
      label: "Export complexity adjacency score — pending",
      period: "Pending",
      source: "Harvard Atlas (bulk data access not yet secured)",
      type: "illustrative" as const,
      deferred: true,
    },
    {
      id: "comtrade",
      label: "Product-level export analysis — pending",
      period: "Pending",
      source: "UN Comtrade (API subscription — 401 error on current access)",
      type: "illustrative" as const,
      deferred: true,
    },
  ],
  options: [
    {
      id: "opt_a",
      label: "Option A: Accelerate existing strong sectors up the value chain",
      summary:
        "Concentrate ICV, ITTI, and investment facilitation on sectors where the nation already has an established industrial base — petrochemicals, metals, building materials — and drive them toward higher-complexity, higher-margin output.",
      tradeoff:
        "Lower transformation risk and quicker near-term Operation 300bn contribution. But this path may not generate the structural complexity shift needed to close the Singapore/South Korea gap within the 2031 horizon.",
    },
    {
      id: "opt_b",
      label: "Option B: Build new capability in pharma, food tech, and medtech",
      summary:
        "Target sectors where the nation has comparative logistics and infrastructure advantages but low current manufacturing base. Use free zone regulatory fast-tracks and anchor investor targeting to catalyse entry.",
      tradeoff:
        "Higher complexity upside but longer lead times and higher execution risk. Requires sustained cross-emirate coordination and committed policy continuity. Evidence base for adjacency scoring is currently partial — Comtrade data pending.",
    },
    {
      id: "opt_c",
      label: "Option C: Portfolio approach — parallel tracks with differentiated KPIs",
      summary:
        "Run acceleration and seeding tracks simultaneously with separate performance metrics, review cadences, and resource allocations. Protects near-term targets while positioning for medium-term complexity growth.",
      tradeoff:
        "Most resource-intensive. Requires strong portfolio governance and disciplined prioritisation of what not to do. Recommended if leadership confirms both objectives are simultaneously non-negotiable.",
    },
  ],
  risks: [
    `Evidence base is incomplete as of ${APP_DATA_CONTEXT.as_of}: Comtrade product data and Harvard Atlas complexity scores are not yet loaded. The sector adjacency recommendation will strengthen materially once these are connected.`,
    "Cross-emirate ICV incentive arbitrage risk: without aligned incentive structures across free zones, investors may arbitrage regulatory differences rather than committing to manufacturing investment.",
    "FDI headline strength may mask industrial sector weakness: total FDI at 8.3% of GDP is strong, but without industrial-sector decomposition (Ministry of Economy export pending), manufacturing-directed FDI cannot be confirmed.",
    "Regulatory continuity risk: policy instruments like ICV and ITTI require sustained operational discipline to be effective. Coverage and enforcement consistency need monitoring.",
  ],
  actions: [
    "Commission full Comtrade and Harvard Atlas analysis to produce quantitative sector adjacency scores — this is the highest-priority data gap for this brief.",
    "Initiate cross-emirate working session on industrial land allocation, ICV incentive harmonisation, and free zone manufacturing policy alignment.",
    "Commission Ministry of Economy industrial FDI breakdown to validate whether headline FDI flows are reaching manufacturing sectors.",
    "Review current ICV and ITTI coverage rates across the seven target sectors identified in this prototype.",
    "Present option framework to Undersecretary for strategic direction before the next sector review cycle.",
  ],
};

const typeConfig = {
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

export default function BriefBuilderPage() {
  return (
    <div>
      <PageHeader
        title="Decision Brief Builder"
        subtitle="Structure a ministerial decision brief from evidence — issue, options, risks, and next actions"
        badge={`AI-assisted · Approved evidence only · ${APP_DATA_CONTEXT.as_of}`}
        badgeVariant="live"
      />

      {/* Executive framing band */}
      <div className="bg-[#F9F7ED] border border-[#E6D7A2] rounded-2xl px-8 py-6 mb-10">
        <div className="max-w-3xl">
          <div className="text-xs font-heading font-semibold uppercase tracking-wider text-[#7C5E24] mb-3">
            Decision Brief · {APP_DATA_CONTEXT.as_of}
          </div>
          <h2 className="text-xl font-bold font-heading leading-snug mb-3 text-[#5D3B26]">
            Manufacturing sector adjacency: where should the nation concentrate
            industrial policy effort through 2026–2031?
          </h2>
          <p className="text-base text-[#7C5E24] leading-relaxed">
            The latest official pulse (9M 2025) confirms non-oil GDP growth at
            6.1% and non-oil GDP share at 77.5%. Manufacturing value added
            stands at 9.4% of GDP. This brief structures the evidence,
            trade-offs, and options available to leadership before the next
            sector strategy review.
          </p>
        </div>
      </div>

      {/* Brief scaffold */}
      <div className="space-y-6">
        {/* Issue framing */}
        <section className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <div className="section-label mb-3">Issue</div>
          <h2 className="text-lg font-bold text-brand-navy mb-3 leading-snug">
            {briefTemplate.issue}
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            {briefTemplate.framing}
          </p>
        </section>

        {/* Supporting evidence */}
        <section className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="section-label">Supporting Evidence</div>
            <span className="text-xs text-gray-400">
              Data vintage: {APP_DATA_CONTEXT.data_vintage} · Extracted {APP_DATA_CONTEXT.extraction_date}
            </span>
          </div>
          <div className="space-y-2.5">
            {briefTemplate.evidence.map((ev) => {
              const config = typeConfig[ev.type];
              return (
                <div
                  key={ev.id}
                  className={`flex items-center justify-between gap-3 rounded-lg px-4 py-3 ${
                    ev.deferred ? "bg-gray-50 opacity-60" : config.bg
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    {ev.deferred ? (
                      <svg
                        className="w-3.5 h-3.5 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    ) : (
                      <svg
                        className={`w-3.5 h-3.5 ${config.color}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    )}
                    <span
                      className={`text-sm font-medium ${ev.deferred ? "text-gray-400" : "text-gray-800"}`}
                    >
                      {ev.label}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="text-xs font-medium text-gray-400">
                      {ev.period}
                    </span>
                    <span className="text-xs text-gray-400">{ev.source}</span>
                    <span
                      className={`text-xs font-medium px-1.5 py-0.5 rounded ${config.bg} ${config.color}`}
                    >
                      {config.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="text-xs text-gray-400 mt-3">
            3 of 5 evidence items are confirmed official data (9M 2025 / H1 2025 pulse + FY 2024 annual). 2 items are deferred pending data access. Brief confidence will improve when Comtrade and Harvard Atlas are connected.
          </p>
        </section>

        {/* Options and trade-offs */}
        <section className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <div className="section-label mb-3">Options & Trade-offs</div>
          <div className="space-y-4">
            {briefTemplate.options.map((opt, i) => (
              <div key={opt.id} className="rounded-lg border border-gray-200 p-4">
                <div className="flex items-start gap-3 mb-2">
                  <span className="w-6 h-6 rounded-full bg-[#92722A] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {String.fromCharCode(65 + i)}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-1.5">
                      {opt.label}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-2">
                      {opt.summary}
                    </p>
                    <div className="flex items-start gap-2">
                      <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide mt-0.5 flex-shrink-0">
                        Trade-off:
                      </span>
                      <p className="text-sm text-gray-500 leading-relaxed italic">
                        {opt.tradeoff}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key risks */}
        <section className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <div className="section-label mb-3">Key Risks</div>
          <ul className="space-y-2.5">
            {briefTemplate.risks.map((risk, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg
                  className="w-4 h-4 text-signal-risk mt-0.5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                <span className="text-sm text-gray-700 leading-snug">
                  {risk}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Suggested next actions */}
        <section className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <div className="section-label mb-3">Suggested Next Actions</div>
          <ul className="space-y-2.5">
            {briefTemplate.actions.map((action, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-brand-light text-brand text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span className="text-sm text-gray-700 leading-snug">
                  {action}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Generate section — live AI */}
        <BriefGenerateSection brief={briefTemplate} />
      </div>
    </div>
  );
}
