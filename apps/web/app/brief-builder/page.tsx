import { PageHeader } from "@/components/primitives/PageHeader";
import { DeferredBadge } from "@/components/primitives/DeferredBadge";

// Brief template scaffold — AI generation deferred pending server-side OpenAI integration
// This page shows the structural UX flow. The "Generate" action is labeled as deferred.

const briefTemplate = {
  issue:
    "Manufacturing sector adjacency: where should UAE prioritize in 2025–2026?",
  framing:
    "Manufacturing value added has reached 9.4% of GDP (2024) and FDI inflows are at 8.3% of GDP — both strong signals. However, the export complexity profile suggests an opportunity gap in higher-value industries. The strategic question is whether MoIAT should concentrate resources on accelerating existing strong sectors or on building new capability in adjacent areas.",
  evidence: [
    {
      id: "manuf_va",
      label: "Manufacturing value added: 9.4% of GDP (2024)",
      source: "World Bank",
      type: "official" as const,
    },
    {
      id: "fdi_inflows",
      label: "FDI net inflows: 8.3% of GDP (2024)",
      source: "World Bank",
      type: "official" as const,
    },
    {
      id: "non_oil_share",
      label: "Non-oil GDP share: 75.5% (2024)",
      source: "FCSC / UAE.Stat",
      type: "official" as const,
    },
    {
      id: "complexity",
      label: "Export complexity adjacency — pending",
      source: "Harvard Atlas (access pending)",
      type: "illustrative" as const,
      deferred: true,
    },
    {
      id: "comtrade",
      label: "Product-level export analysis — pending",
      source: "UN Comtrade (subscription pending)",
      type: "illustrative" as const,
      deferred: true,
    },
  ],
  options: [
    {
      id: "opt_a",
      label: "Option A: Concentrate on advanced manufacturing scale-up",
      summary:
        "Prioritize sectors where the UAE already has established industrial platforms (petrochemicals, metals, building materials) and accelerate their move up the value chain through ICV and ITTI incentives.",
      tradeoff: "Lower transformation risk. Preserves existing industrial employment. But may not generate the step-change in complexity that Operation 300bn aspirations require.",
    },
    {
      id: "opt_b",
      label: "Option B: Seed new capability in pharma, food tech, and medtech",
      summary:
        "Target sectors where UAE has comparative advantages in logistics, cold chain, and talent access but low current manufacturing base. Use free zone platforms and regulatory fast-tracks to attract anchor investors.",
      tradeoff: "Higher upside but longer lead times. Requires sustained policy commitment and cross-emirate coordination. Evidence base for this option is currently partial (Comtrade data pending).",
    },
    {
      id: "opt_c",
      label: "Option C: Portfolio approach — both tracks with differentiated timelines",
      summary:
        "Run scale-up and seed tracks in parallel with differentiated KPIs and review cadences. Protects near-term Operation 300bn progress while positioning for medium-term complexity shift.",
      tradeoff: "More resource-intensive. Requires clear portfolio governance and discipline on where not to invest. Recommended if leadership confirms both objectives are non-negotiable.",
    },
  ],
  risks: [
    "Evidence base for sector adjacency scoring is not yet complete (Comtrade and Harvard Atlas pending).",
    "Emirate coordination risk: without aligned ICV incentives across free zones, firms may arbitrage rather than invest.",
    "FDI concentration risk: total FDI is strong but industrial sector breakdown is not yet available — headline figure may overstate manufacturing-directed investment.",
  ],
  actions: [
    "Commission full Comtrade and Harvard Atlas analysis to sharpen sector adjacency scores.",
    "Initiate cross-emirate working session on industrial land and incentive alignment.",
    "Review ICV and ITTI coverage rates across target sectors.",
    "Present option framework to Undersecretary for strategic direction.",
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
        subtitle="Structure a ministerial decision brief from evidence — issue, options, risks, actions"
        badge="Scaffold · AI generation deferred"
        badgeVariant="deferred"
      />

      {/* AI generation notice */}
      <div className="bg-white rounded-xl border border-orange-200 p-5 mb-8 shadow-sm">
        <div className="flex items-start gap-3">
          <svg
            className="w-5 h-5 text-signal-action mt-0.5 flex-shrink-0"
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
          <div>
            <div className="text-sm font-semibold text-signal-action mb-1">
              AI Brief Generation — Deferred
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              Server-side AI summarization from structured evidence inputs is
              designed but not yet wired. The brief below is a structured
              scaffold showing the workflow and section structure.{" "}
              <code className="text-xs bg-gray-100 px-1 py-0.5 rounded font-mono">
                OPENAI_API_KEY
              </code>{" "}
              is kept server-side only and will be connected in the next packet.
              The section structure, evidence references, and option framing are
              all real and reviewable.
            </p>
          </div>
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
          <div className="section-label mb-3">Supporting Evidence</div>
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
                    <span className="text-xs text-gray-400">{ev.source}</span>
                    <span
                      className={`text-[10px] font-medium px-1.5 py-0.5 rounded ${config.bg} ${config.color}`}
                    >
                      {config.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="text-xs text-gray-400 mt-3">
            2 of 5 evidence items are currently deferred (data access pending).
            Brief confidence will improve when Comtrade and Harvard Atlas are
            connected.
          </p>
        </section>

        {/* Options and trade-offs */}
        <section className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <div className="section-label mb-3">Options & Trade-offs</div>
          <div className="space-y-4">
            {briefTemplate.options.map((opt, i) => (
              <div key={opt.id} className="rounded-lg border border-gray-200 p-4">
                <div className="flex items-start gap-3 mb-2">
                  <span className="w-6 h-6 rounded-full bg-brand-navy text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {String.fromCharCode(65 + i)}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-1.5">
                      {opt.label}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed mb-2">
                      {opt.summary}
                    </p>
                    <div className="flex items-start gap-2">
                      <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide mt-0.5 flex-shrink-0">
                        Trade-off:
                      </span>
                      <p className="text-xs text-gray-500 leading-relaxed italic">
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

        {/* Export / generate section */}
        <section className="bg-gray-50 rounded-xl border border-dashed border-gray-300 p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="text-sm font-semibold text-gray-700 mb-1">
                Generate & Export
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">
                AI-assisted prose generation from structured evidence and
                downloadable PDF export are planned for the next implementation
                packet.
              </p>
              <DeferredBadge
                reason="Server-side OpenAI integration and PDF export are deferred to packet MSP-005. OPENAI_API_KEY is configured server-side only."
                className="mt-3"
              />
            </div>
            <button
              disabled
              className="flex-shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-gray-200 text-gray-400 cursor-not-allowed"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              Generate Brief
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
