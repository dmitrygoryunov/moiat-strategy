"use client";

import { useState } from "react";

type SectorLens = "Accelerate" | "Build" | "Protect";

interface LensConfig {
  headline: string;
  rationale: string;
  sectors: {
    name: string;
    id: string;
    status: "strong" | "opportunity" | "strategic" | "at-risk";
    lens_note: string;
  }[];
  strategic_implication: string;
}

const LENS_CONFIG: Record<SectorLens, LensConfig> = {
  Accelerate: {
    headline: "Which sectors can deliver near-term impact if the Ministry concentrates intervention now?",
    rationale:
      "Accelerate lens focuses on sectors with an established industrial base, rising momentum, and clear ICV/ITTI levers. These are the highest-confidence near-term contributors to Operation 300bn targets.",
    sectors: [
      { name: "Advanced Manufacturing", id: "advanced_manufacturing", status: "strong", lens_note: "Established base at 9.4% of GDP. ICV and ITTI instruments already active. Priority: drive complexity uplift — from intermediate goods toward precision equipment and industrial technology." },
      { name: "Clean Energy & Sustainability", id: "clean_energy", status: "strong", lens_note: "Strong project pipeline and confirmed policy backing. Near-term manufacturing content opportunity in solar, battery storage, and water treatment component supply chains." },
      { name: "Petrochemicals & Downstream", id: "petrochemicals_downstream", status: "strong", lens_note: "Significant existing output and employment. Accelerate specialised downstream diversification before energy-transition demand shifts compress the window." },
    ],
    strategic_implication:
      "Accelerate lens selects for 'win from strength' — concentrating the Ministry resources where the nation already competes and where incremental intervention delivers fast, measurable output. Risk: this path widens the complexity gap unless paired with deliberate complexity-building targets within each sector.",
  },
  Build: {
    headline: "Which sectors offer the highest long-term complexity upside if the right investment foundations are laid now?",
    rationale:
      "Build lens focuses on sectors where the nation has a platform advantage — logistics, cold chain, digital infrastructure, regulatory speed — but a low current manufacturing base. These require patient capital and regulatory enablement.",
    sectors: [
      { name: "Pharma & MedTech", id: "pharma_medtech", status: "opportunity", lens_note: "Low domestic manufacturing base relative to regional healthcare spend. Free zone fast-track and anchor investor strategy is the right entry mechanism. First step: commission a detailed adjacency analysis once Comtrade data is connected." },
      { name: "Food Security & AgriTech", id: "food_agritech", status: "opportunity", lens_note: "Import-dependence creates a national strategic pull. Existing cold-chain logistics is an underutilised platform. Early movers in controlled-environment agriculture and functional food manufacturing can establish durable positions." },
      { name: "Digital & ICT", id: "digital_ict", status: "opportunity", lens_note: "World-class government digital infrastructure. Near-term manufacturing upside is in AI-embedded hardware assembly and IoT device integration rather than semiconductor fabrication. Talent and IP attraction are the critical enablers." },
    ],
    strategic_implication:
      "Build lens selects for 'invest ahead of complexity' — accepting longer lead times in exchange for higher-value industrial positions by 2031. Risk: execution requires sustained cross-emirate coordination and policy continuity beyond individual election or budget cycles.",
  },
  Protect: {
    headline: "Which sectors face structural headwinds that require active risk management rather than accelerated investment?",
    rationale:
      "Protect lens identifies sectors where the nation has current strength but faces external demand risk, regulatory transition, or competitive displacement. These require monitoring tracks, scenario planning, and selective defensive investment.",
    sectors: [
      { name: "Petrochemicals & Downstream", id: "petrochemicals_downstream", status: "strong", lens_note: "Energy transition demand risk in Europe and East Asia is the primary exposure. Near-term output remains strong, but a 5–10 year market contraction scenario for legacy petrochemical products requires a credible transition roadmap." },
      { name: "Defense & Aerospace", id: "defense_aerospace", status: "strategic", lens_note: "High geopolitical sensitivity and sovereignty requirements. Protect lens means maintaining manufacturing capability and supply chain independence — not growth, but resilience. ICV instruments are the right mechanism." },
    ],
    strategic_implication:
      "Protect lens does not mean withdraw — it means invest in resilience, not growth, in these sectors. The primary tools are scenario-based monitoring, supply chain mapping, and regulatory continuity. Freeing investment from these sectors enables Build and Accelerate strategies elsewhere.",
  },
};

const LENS_COLORS: Record<SectorLens, { bg: string; text: string; border: string; pill: string }> = {
  Accelerate: { bg: "bg-signal-momentum-bg", text: "text-signal-momentum", border: "border-signal-momentum/20", pill: "bg-signal-momentum text-white" },
  Build: { bg: "bg-signal-opportunity-bg", text: "text-signal-opportunity", border: "border-signal-opportunity/20", pill: "bg-signal-opportunity text-white" },
  Protect: { bg: "bg-signal-risk-bg", text: "text-signal-risk", border: "border-signal-risk/20", pill: "bg-signal-risk text-white" },
};

export function SectorLensExplorer() {
  const [lens, setLens] = useState<SectorLens>("Accelerate");
  const config = LENS_CONFIG[lens];
  const colors = LENS_COLORS[lens];

  return (
    <section className="mb-10">
      {/* Controls + question */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm mb-5">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-aeblack-400 font-heading">
            Sector Lens
          </span>
          <div className="flex gap-1.5">
            {(["Accelerate", "Build", "Protect"] as SectorLens[]).map((opt) => (
              <button
                key={opt}
                onClick={() => setLens(opt)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  lens === opt
                    ? LENS_COLORS[opt].pill
                    : "bg-gray-100 text-aeblack-500 hover:bg-gray-200"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
        <p className="text-base font-semibold text-aeblack-900 leading-snug font-heading">
          {config.headline}
        </p>
        <p className="text-sm text-aeblack-500 leading-relaxed mt-2">{config.rationale}</p>
      </div>

      {/* Featured sectors for this lens */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">
        {config.sectors.map((sector) => (
          <div
            key={sector.id}
            className={`bg-white rounded-2xl border p-6 shadow-sm ${colors.border}`}
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <h3 className="text-base font-bold text-aeblack-900 font-heading">{sector.name}</h3>
              <span className={`flex-shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full ${colors.bg} ${colors.text}`}>
                {lens}
              </span>
            </div>
            <p className="text-sm text-aeblack-600 leading-relaxed">{sector.lens_note}</p>
          </div>
        ))}
      </div>

      {/* Strategic implication */}
      <div className={`rounded-2xl p-5 ${colors.bg} border ${colors.border}`}>
        <span className={`text-xs font-semibold uppercase tracking-wider ${colors.text} font-heading`}>
          Strategic implication · {lens} lens
        </span>
        <p className="text-sm text-aeblack-700 leading-relaxed mt-2">
          {config.strategic_implication}
        </p>
      </div>
    </section>
  );
}
