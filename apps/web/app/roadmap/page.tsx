import { PageHeader } from "@/components/primitives/PageHeader";
import { roadmapPhases, APP_DATA_CONTEXT } from "@/lib/seed-data";

const focusAreaColors: Record<string, { bg: string; text: string }> = {
  Governance: { bg: "bg-brand-light", text: "text-brand" },
  Data: { bg: "bg-signal-opportunity-bg", text: "text-signal-opportunity" },
  Workflow: { bg: "bg-signal-momentum-bg", text: "text-signal-momentum" },
  Capability: { bg: "bg-signal-action-bg", text: "text-signal-action" },
};

const horizonColors = [
  { border: "border-[#92722A]", bg: "bg-[#92722A]", accent: "text-[#E6D7A2]" },
  { border: "border-signal-momentum", bg: "bg-signal-momentum", accent: "text-green-100" },
  { border: "border-aeblack-600", bg: "bg-aeblack-600", accent: "text-gray-200" },
];

export default function RoadmapPage() {
  return (
    <div>
      <PageHeader
        title="Roadmap & Operating Model"
        subtitle="What does an AI-Native Ministry look like — and what does the transformation path require?"
        badge={`Structured content · ${APP_DATA_CONTEXT.as_of}`}
        badgeVariant="deferred"
      />

      {/* Framing */}
      <div className="bg-[#F9F7ED] border border-[#E6D7A2] rounded-2xl px-8 py-6 mb-10">
        <div className="text-xs font-heading font-semibold uppercase tracking-wider text-[#7C5E24] mb-3">
          Chapter 3 · The Ministry Can Become Evidence-Native · {APP_DATA_CONTEXT.as_of}
        </div>
        <h2 className="text-xl font-bold font-heading leading-snug mb-3 text-[#5D3B26]">
          The transformation is not primarily about technology — it is about
          embedding evidence discipline into every major decision cycle
        </h2>
        <p className="text-base text-[#7C5E24] leading-relaxed max-w-3xl">
          An AI-Native Ministry does not simply digitise existing reporting. It
          restructures how evidence flows from source to decision: which KPIs are
          owned and refreshed, how briefs are prepared, how sector and emirate
          signals are monitored, and how the ministry coordinates across the
          federation. The roadmap below shows three horizons — Foundation,
          Build, Scale — spanning 24 months from the point of programme initiation.
        </p>
      </div>

      {/* What AI-Native means */}
      <section className="mb-10">
        <h2 className="text-base font-semibold text-gray-700 font-heading mb-5">
          What AI-Native Means for the Ministry
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
          {[
            {
              icon: (
                <svg className="w-5 h-5 text-brand-medium" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              ),
              title: "Faster signal-to-action",
              body: "Reduce the time from a data signal to a ministerial decision from weeks to days through automated KPI monitoring and pre-structured brief templates with locked evidence sources.",
            },
            {
              icon: (
                <svg className="w-5 h-5 text-brand-medium" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              ),
              title: "Better emirate integration",
              body: "Connect sub-national industrial data across all seven emirates so the Ministry can coordinate national industrial policy rather than simply aggregate separate reporting.",
            },
            {
              icon: (
                <svg className="w-5 h-5 text-brand-medium" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              ),
              title: "Explicit KPI ownership",
              body: "Every KPI has an assigned owner, a known source, and a defined refresh cadence. Accountability is visible in the operating rhythm and surfaced in the prototype's evidence layer.",
            },
            {
              icon: (
                <svg className="w-5 h-5 text-brand-medium" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              ),
              title: "Explicit strategy-execution link",
              body: "Strategy, regulation, and operational execution are connected through a shared evidence layer — not siloed in separate ministry systems with incompatible KPI definitions.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm"
            >
              <div className="mb-3 p-2 bg-brand-light rounded-lg inline-flex">{item.icon}</div>
              <h3 className="text-sm font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Roadmap phases */}
      <section className="mb-10">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-base font-semibold text-gray-700 font-heading">
            Transformation Roadmap
          </h2>
          <span className="text-xs text-gray-400">
            Illustrative timelines from programme initiation · not calendar dates
          </span>
        </div>
        <div className="space-y-6">
          {roadmapPhases.map((phase, i) => {
            const colors = horizonColors[i];
            return (
              <div
                key={phase.horizon}
                className={`bg-white rounded-xl border-l-4 ${colors.border} border border-gray-200 shadow-sm overflow-hidden`}
              >
                <div className={`${colors.bg} px-6 py-4`}>
                  <div className={`text-xs font-semibold uppercase tracking-widest ${colors.accent} mb-0.5`}>
                    {phase.horizon}
                  </div>
                  <div className="text-lg font-bold text-white">
                    {phase.label}
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {phase.focus_areas.map((fa) => {
                      const areaColors =
                        focusAreaColors[fa.area] || {
                          bg: "bg-gray-100",
                          text: "text-gray-600",
                        };
                      return (
                        <div key={fa.area} className="flex items-start gap-3">
                          <span
                            className={`flex-shrink-0 text-xs font-semibold px-2 py-0.5 rounded mt-0.5 ${areaColors.bg} ${areaColors.text}`}
                          >
                            {fa.area}
                          </span>
                          <p className="text-sm text-gray-600 leading-snug">
                            {fa.action}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Governance and capability */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
        <section>
          <h2 className="text-base font-semibold text-gray-700 font-heading mb-3">
            Governance Model
          </h2>
          <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm space-y-4">
            {[
              {
                tier: "Strategic",
                desc: "AI-Native steering committee sets evidence standards, KPI ownership rules, and investment priorities. Provides leadership mandate and accountability.",
                roles: ["Undersecretary", "Assistant Undersecretaries", "Director of AI"],
              },
              {
                tier: "Operational",
                desc: "Evidence operations team manages the KPI dictionary, source refresh cycle, and brief quality standards across all product surfaces.",
                roles: ["Strategy office", "Data and analytics team", "Sector leads"],
              },
              {
                tier: "Execution",
                desc: "Sector and emirate working groups produce and validate sector-level KPI updates, evidence packs, and decision briefs for leadership review.",
                roles: ["Sector directors", "Emirate coordination leads", "PMO"],
              },
            ].map((tier) => (
              <div
                key={tier.tier}
                className="pb-4 border-b border-gray-100 last:border-0 last:pb-0"
              >
                <div className="text-xs font-semibold text-brand mb-1">
                  {tier.tier} Layer
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-1.5">
                  {tier.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {tier.roles.map((r) => (
                    <span
                      key={r}
                      className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded font-medium"
                    >
                      {r}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-700 font-heading mb-3">
            Capability Building Priorities
          </h2>
          <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm space-y-3">
            {[
              {
                label: "Evidence literacy",
                desc: "Leadership and strategy teams understand what makes a KPI trustworthy — source, formula, confidence level, and refresh cadence.",
                priority: "high",
              },
              {
                label: "Data pipeline ownership",
                desc: "Internal capability to manage source refresh, transform scripts, and KPI dictionary updates without full dependency on external teams.",
                priority: "high",
              },
              {
                label: "Brief workflow discipline",
                desc: "The structured issue-options-evidence workflow is embedded in regular ministerial review cycles, not used only for ad hoc requests.",
                priority: "medium",
              },
              {
                label: "AI-assisted analysis skills",
                desc: "Strategy teams can use AI summarisation tools with evidence guardrails effectively — as a productivity tool, not a substitute for policy judgement.",
                priority: "medium",
              },
              {
                label: "Cross-emirate data coordination",
                desc: "Coordination protocols with emirate statistical offices for data sharing agreements and shared KPI ownership at the federation level.",
                priority: "medium",
              },
            ].map((cap) => (
              <div key={cap.label} className="flex items-start gap-3">
                <span
                  className={`flex-shrink-0 text-xs font-semibold px-1.5 py-0.5 rounded mt-0.5 ${
                    cap.priority === "high"
                      ? "bg-signal-risk-bg text-signal-risk"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {cap.priority.toUpperCase()}
                </span>
                <div>
                  <div className="text-xs font-semibold text-gray-800 mb-0.5">
                    {cap.label}
                  </div>
                  <p className="text-sm text-gray-500 leading-snug">{cap.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Visible risks */}
      <section>
        <h2 className="text-base font-semibold text-gray-700 font-heading mb-3">
          Chapter 4 — Risks Are Visible and Actionable
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {[
            {
              risk: "Data fragmentation across actors",
              desc: `As of ${APP_DATA_CONTEXT.as_of}, KPI data is distributed across FCSC, Ministry of Economy, emirate authorities, and international data providers. Integration requires deliberate governance and data-sharing agreements — not just technical pipelines.`,
            },
            {
              risk: "Overreliance on lagging indicators",
              desc: "Most available public indicators reflect conditions 1–2 years in the past. Real-time decision support requires investment in more frequent data collection, modelled leading indicators, or faster official publication cadences.",
            },
            {
              risk: "Sector concentration risk",
              desc: "Both the export basket and FDI profile show concentration in a limited number of sectors and partner markets. Without deliberate diversification policy, structural resilience remains constrained — even as headline macroeconomic indicators look strong.",
            },
            {
              risk: "Strategy-cadence gap",
              desc: "Operation 300bn and AI-Native Ministry ambitions are high. But operating cadences — how often KPIs are reviewed, briefs are prepared, sector signals are acted on — have not yet been redesigned to match the ambition. Closing this gap is the core purpose of this prototype.",
            },
          ].map((item) => (
            <div
              key={item.risk}
              className="bg-white rounded-xl border border-signal-risk/20 p-5 shadow-sm"
            >
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-signal-risk mt-1.5 flex-shrink-0" />
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1.5">
                    {item.risk}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
