import { PageHeader } from "@/components/primitives/PageHeader";
import { roadmapPhases } from "@/lib/seed-data";

const focusAreaColors: Record<string, { bg: string; text: string }> = {
  Governance: { bg: "bg-brand-light", text: "text-brand" },
  Data: { bg: "bg-signal-opportunity-bg", text: "text-signal-opportunity" },
  Workflow: { bg: "bg-signal-momentum-bg", text: "text-signal-momentum" },
  Capability: { bg: "bg-signal-action-bg", text: "text-signal-action" },
};

const horizonColors = [
  {
    border: "border-brand-medium",
    bg: "bg-brand-navy",
    accent: "text-blue-300",
  },
  {
    border: "border-signal-momentum",
    bg: "bg-signal-momentum",
    accent: "text-green-200",
  },
  { border: "border-brand", bg: "bg-brand", accent: "text-blue-200" },
];

export default function RoadmapPage() {
  return (
    <div>
      <PageHeader
        title="Roadmap & Operating Model"
        subtitle="What does an AI-Native MoIAT look like — and how do you get there?"
        badge="Structured context · illustrative timelines"
        badgeVariant="deferred"
      />

      {/* Framing */}
      <div className="bg-brand-navy rounded-xl px-6 py-5 mb-8 text-white">
        <div className="text-xs font-semibold uppercase tracking-widest text-blue-300 mb-2">
          Chapter 3 · MoIAT Can Become Evidence-Native
        </div>
        <h2 className="text-xl font-bold leading-snug mb-2">
          The transformation is not about technology — it is about
          decision-making discipline
        </h2>
        <p className="text-sm text-blue-100 leading-relaxed max-w-3xl">
          An AI-Native MoIAT does not just digitize reporting. It embeds
          evidence-led workflows into every major decision cycle: sector
          prioritization, emirate coordination, regulatory review, and KPI
          accountability. The roadmap below shows three horizons of
          transformation across governance, data, workflow, and capability.
        </p>
      </div>

      {/* What AI-Native means */}
      <section className="mb-8">
        <h2 className="text-sm font-semibold text-gray-700 mb-4">
          What AI-Native Means for MoIAT
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {[
            {
              icon: "⚡",
              title: "Faster signal-to-action",
              body: "Reduce the time from data signal to ministerial decision from weeks to days through automated KPI monitoring and pre-structured brief templates.",
            },
            {
              icon: "🔗",
              title: "Better emirate integration",
              body: "Connect sub-national industrial data across all seven emirates so MoIAT can coordinate rather than just report.",
            },
            {
              icon: "📌",
              title: "Stronger KPI ownership",
              body: "Each KPI has an assigned owner, a known source, and a refresh cadence. Accountability is visible in the operating rhythm.",
            },
            {
              icon: "🧭",
              title: "Explicit strategy-execution link",
              body: "Strategy, regulation, and operational execution are connected through a shared evidence layer — not siloed in separate systems.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm"
            >
              <div className="text-2xl mb-3">{item.icon}</div>
              <h3 className="text-sm font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Roadmap phases */}
      <section className="mb-8">
        <h2 className="text-sm font-semibold text-gray-700 mb-4">
          Transformation Roadmap
        </h2>
        <div className="space-y-6">
          {roadmapPhases.map((phase, i) => {
            const colors = horizonColors[i];
            return (
              <div
                key={phase.horizon}
                className={`bg-white rounded-xl border-l-4 ${colors.border} border border-gray-200 shadow-sm overflow-hidden`}
              >
                {/* Phase header */}
                <div className={`${colors.bg} px-6 py-4`}>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className={`text-xs font-semibold uppercase tracking-widest ${colors.accent} mb-0.5`}>
                        {phase.horizon}
                      </div>
                      <div className="text-lg font-bold text-white">
                        {phase.label}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Focus areas */}
                <div className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {phase.focus_areas.map((fa) => {
                      const areaColors =
                        focusAreaColors[fa.area] || {
                          bg: "bg-gray-100",
                          text: "text-gray-600",
                        };
                      return (
                        <div
                          key={fa.area}
                          className="flex items-start gap-3"
                        >
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

      {/* Governance and capability sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <section>
          <h2 className="text-sm font-semibold text-gray-700 mb-3">
            Governance Model
          </h2>
          <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm space-y-4">
            {[
              {
                tier: "Strategic",
                desc: "AI-Native steering committee — sets evidence standards, KPI ownership rules, and investment priorities.",
                roles: ["Undersecretary", "Assistant Undersecretaries", "Director of AI"],
              },
              {
                tier: "Operational",
                desc: "Evidence operations team — manages KPI dictionary, source refresh, and brief quality.",
                roles: ["Strategy office", "Data team", "Sector leads"],
              },
              {
                tier: "Execution",
                desc: "Sector and emirate working groups — produce and validate sector-level KPI updates and briefs.",
                roles: ["Sector directors", "Emirate liaisons", "PMO"],
              },
            ].map((tier) => (
              <div key={tier.tier} className="pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                <div className="text-xs font-semibold text-brand mb-1">
                  {tier.tier} Layer
                </div>
                <p className="text-xs text-gray-600 leading-relaxed mb-1.5">
                  {tier.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {tier.roles.map((r) => (
                    <span
                      key={r}
                      className="text-[10px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded font-medium"
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
          <h2 className="text-sm font-semibold text-gray-700 mb-3">
            Capability Building Priorities
          </h2>
          <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm space-y-3">
            {[
              {
                label: "Evidence literacy",
                desc: "Leadership and strategy teams understand what makes a KPI trustworthy — source, formula, confidence.",
                priority: "high",
              },
              {
                label: "Data pipeline ownership",
                desc: "Internal team can manage source refresh, transform scripts, and KPI dictionary updates without full external dependency.",
                priority: "high",
              },
              {
                label: "Brief workflow discipline",
                desc: "Structured issue-options-evidence workflow embedded in regular ministerial review cycles.",
                priority: "medium",
              },
              {
                label: "AI-assisted analysis skills",
                desc: "Strategy team trained to use AI summarization tools with evidence guardrails — not as a replacement for judgment.",
                priority: "medium",
              },
              {
                label: "Cross-emirate data coordination",
                desc: "Coordination protocols with emirate statistical offices for data sharing and joint KPI ownership.",
                priority: "medium",
              },
            ].map((cap) => (
              <div key={cap.label} className="flex items-start gap-3">
                <span
                  className={`flex-shrink-0 text-[10px] font-semibold px-1.5 py-0.5 rounded mt-0.5 ${
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
                  <p className="text-xs text-gray-500 leading-snug">
                    {cap.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Visible risks */}
      <section>
        <h2 className="text-sm font-semibold text-gray-700 mb-3">
          Chapter 4 — Risks Are Visible and Actionable
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {[
            {
              risk: "Data fragmentation across actors",
              desc: "KPI data is currently distributed across FCSC, MoE, emirate authorities, and international sources. Integration requires coordinated governance, not just technical pipelines.",
            },
            {
              risk: "Overreliance on lagging indicators",
              desc: "Most available public indicators reflect conditions 1–2 years in the past. Real-time decision support requires investment in more frequent data collection or modeled leading indicators.",
            },
            {
              risk: "Sector concentration risk",
              desc: "Both export and FDI profiles show concentration in a limited number of sectors and partners. Without deliberate diversification, resilience remains structurally limited.",
            },
            {
              risk: "Ambition-cadence gap",
              desc: "The strategy ambition (Operation 300bn, AI-Native ministry) is high. But operating cadences — how often KPIs are reviewed, briefs are prepared, actions are tracked — have not yet been redesigned to match.",
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
                  <p className="text-xs text-gray-600 leading-relaxed">
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
