/**
 * Seed data for the strategy prototype scaffold.
 *
 * DATE MODEL — three tiers, always kept distinct:
 *
 *   APP_DATA_CONTEXT.as_of          → current prototype context date: March 2026
 *   EvidenceMeta.display_period     → what period the value represents: e.g. "FY 2024"
 *   EvidenceMeta.extraction_date    → when the data was pulled: 2026-03-26
 *
 * The UI must never conflate these three. "FY 2024" is the data vintage,
 * not the current date. The current date is March 2026.
 *
 * DATA TYPE RULES:
 *   evidence_type: "official"     → real public data from a named authoritative source
 *   evidence_type: "modeled"      → derived or computed from official inputs
 *   evidence_type: "illustrative" → workflow/demo data — not real ministry data
 *
 * All "illustrative" entries must carry:
 *   "Illustrative workflow data — to be replaced by live ministry data in production"
 */

export type EvidenceType = "official" | "modeled" | "illustrative";
export type SignalType = "momentum" | "opportunity" | "risk" | "action";

// ─────────────────────────────────────────────
// APP DATA CONTEXT — single source of truth for date framing
// ─────────────────────────────────────────────

export const APP_DATA_CONTEXT = {
  /** Current prototype context: the date the prototype is being reviewed */
  as_of: "March 2026",
  as_of_iso: "2026-03-26",
  /** The latest complete annual year available */
  data_vintage: "FY 2024",
  /** Latest sub-annual official pulse period */
  latest_pulse_period: "9M 2025",
  latest_pulse_note: "Latest official pulse: FCSC 9M 2025 (published 2026-02-20)",
  /** Human-readable note for the dashboard data bar */
  data_vintage_note:
    "Pulse-plus-annual model: latest official pulse (9M 2025 / H1 2025, FCSC) plus latest complete annual snapshot (FY 2024, World Bank / Ministry of Economy). Extracted 2026-03-26.",
  /** When the raw data files were downloaded */
  extraction_date: "2026-03-26",
  extraction_label: "Extracted 2026-03-26",
} as const;

// ─────────────────────────────────────────────
// EVIDENCE METADATA CONTRACT
// ─────────────────────────────────────────────

export interface EvidenceMeta {
  source_name: string;
  source_id: string;
  publisher: string;
  geography: string;
  unit: string;
  /** ISO date the raw data file was downloaded: e.g. "2026-03-26" */
  extraction_date: string;
  /** The period the value represents: e.g. "FY 2024", "Q4 2024", "2023" */
  display_period: string;
  /** One-line display label for cards and section footers */
  period_label: string;
  formula?: string;
  /** Full caveat text for the evidence drawer */
  caveats?: string;
  /** Short caveat for inline card display — max ~80 chars */
  caveat_short?: string;
  /**
   * Freshness classification — distinguishes pulse data from annual structural data.
   * "Latest official pulse"          → sub-annual FCSC release (9M 2025 / H1 2025)
   * "Latest complete annual snapshot" → most recent full-year official data (FY 2024)
   */
  freshness_label?: "Latest official pulse" | "Latest complete annual snapshot";
  confidence: "high" | "medium" | "low";
  evidence_type: EvidenceType;
  methodology_notes?: string;
}

// ─────────────────────────────────────────────
// KPI DEFINITION
// ─────────────────────────────────────────────

export interface KpiDef {
  id: string;
  label: string;
  value: string;
  delta?: string;
  delta_direction?: "up" | "down" | "neutral";
  unit_label?: string;
  evidence: EvidenceMeta;
  deferred?: boolean;
  deferred_reason?: string;
}

export interface InsightCard {
  id: string;
  signal_type: SignalType;
  title: string;
  summary: string;
  evidence_ids: string[];
  /** The data period this insight reflects — not "current date" */
  data_period: string;
  deferred?: boolean;
}

export interface SectorRow {
  id: string;
  name: string;
  status: "strong" | "opportunity" | "at-risk" | "strategic";
  momentum_label: string;
  notes: string;
  evidence_type: EvidenceType;
}

export interface EmirateRow {
  id: string;
  name: string;
  industrial_role: string;
  strengths: string[];
  portfolio_note: string;
  evidence_type: EvidenceType;
}

// ─────────────────────────────────────────────
// HERO KPIs — Leadership Dashboard
//
// Pulse-plus-annual model (as of March 2026):
//
//   Latest official pulse:
//     - FCSC 9M 2025 (published 2026-02-20) — GDP growth, non-oil GDP growth, GDP value
//     - FCSC H1 2025 (published 2025-12-11) — non-oil GDP share
//
//   Latest complete annual snapshot:
//     - World Bank FY 2024 — manufacturing value added % GDP
//     - Ministry of Economy trade map endpoint — non-oil foreign trade 2024
//
// Current context date is March 2026.
// ─────────────────────────────────────────────

export const heroKpis: KpiDef[] = [
  {
    id: "real_gdp_growth",
    label: "Real GDP Growth",
    value: "5.1%",
    delta: "9M 2025",
    delta_direction: "neutral",
    unit_label: "annual %",
    evidence: {
      source_name: "FCSC / GDP Reaches AED 1.4 Trillion with 6.1% Growth in Non-Oil GDP",
      source_id: "fcsc_gdp_growth_9m_2025",
      publisher: "Federal Competitiveness and Statistics Centre",
      geography: "National",
      unit: "% real growth",
      extraction_date: "2026-03-26",
      display_period: "9M 2025",
      period_label: "9M 2025 · FCSC official",
      freshness_label: "Latest official pulse",
      caveats:
        "FCSC press release published 2026-02-20. Period covers first 9 months of 2025. This is the freshest official growth figure available as of March 2026 — full-year 2025 data is not yet published.",
      caveat_short: "FCSC 9M 2025 · Full-year 2025 not yet published",
      confidence: "high",
      evidence_type: "official",
    },
  },
  {
    id: "non_oil_gdp_growth",
    label: "Non-Oil GDP Growth",
    value: "6.1%",
    delta: "9M 2025",
    delta_direction: "neutral",
    unit_label: "real growth",
    evidence: {
      source_name: "FCSC / GDP Reaches AED 1.4 Trillion with 6.1% Growth in Non-Oil GDP",
      source_id: "fcsc_non_oil_gdp_growth_9m_2025",
      publisher: "Federal Competitiveness and Statistics Centre",
      geography: "National",
      unit: "% real growth",
      extraction_date: "2026-03-26",
      display_period: "9M 2025",
      period_label: "9M 2025 · FCSC official",
      freshness_label: "Latest official pulse",
      caveats:
        "FCSC press release published 2026-02-20. Covers first 9 months of 2025. Non-oil sector growth is the primary the Ministry tracking indicator for diversification progress.",
      caveat_short: "FCSC 9M 2025 · primary diversification indicator",
      confidence: "high",
      evidence_type: "official",
    },
  },
  {
    id: "non_oil_gdp_share",
    label: "Non-Oil GDP Share",
    value: "77.5%",
    delta: "+2pp vs FY 2024",
    delta_direction: "up",
    unit_label: "of real GDP",
    evidence: {
      source_name: "FCSC / Non-oil GDP grows by 5.7% in H1 2025",
      source_id: "fcsc_non_oil_share_h1_2025",
      publisher: "Federal Competitiveness and Statistics Centre",
      geography: "National",
      unit: "% of real GDP",
      extraction_date: "2026-03-26",
      display_period: "H1 2025",
      period_label: "H1 2025 · FCSC official",
      freshness_label: "Latest official pulse",
      formula: "Non-oil real GDP / Total real GDP × 100",
      caveats:
        "FCSC press release published 2025-12-11. Covers first half of 2025. Compared to FY 2024 official figure of 75.5% — showing continued structural diversification momentum.",
      caveat_short: "FCSC H1 2025 · vs FY 2024 at 75.5%",
      confidence: "high",
      evidence_type: "official",
    },
  },
  {
    id: "gdp_value",
    label: "GDP Value",
    value: "AED 1.4T",
    delta: "9M 2025",
    delta_direction: "neutral",
    unit_label: "first 9 months",
    evidence: {
      source_name: "FCSC / GDP Reaches AED 1.4 Trillion with 6.1% Growth in Non-Oil GDP",
      source_id: "fcsc_gdp_value_9m_2025",
      publisher: "Federal Competitiveness and Statistics Centre",
      geography: "National",
      unit: "AED trillion",
      extraction_date: "2026-03-26",
      display_period: "9M 2025",
      period_label: "9M 2025 · FCSC official",
      freshness_label: "Latest official pulse",
      caveats:
        "FCSC press release published 2026-02-20. AED 1.4 trillion covers the first 9 months of 2025 — not a full-year figure. Full-year 2025 data not yet published as of March 2026.",
      caveat_short: "9M 2025 only — not a full-year figure",
      confidence: "high",
      evidence_type: "official",
    },
  },
  {
    id: "non_oil_exports_proxy",
    label: "Non-Oil Foreign Trade",
    value: "AED 2.97T",
    delta: "2024 total",
    delta_direction: "neutral",
    unit_label: "total trade value",
    evidence: {
      source_name: "Ministry of Economy & Tourism — International Trade Map endpoint",
      source_id: "moet_trade_total_2024",
      publisher: "Ministry of Economy & Tourism",
      geography: "National",
      unit: "AED trillion",
      extraction_date: "2026-03-26",
      display_period: "2024",
      period_label: "2024 · Ministry of Economy",
      freshness_label: "Latest complete annual snapshot",
      caveats:
        "Data sourced from Ministry of Economy trade map API endpoint (trademap.economy.ae). 2024 is the latest year returned. Total trade: AED 2,971.3 billion (re-exports 717.8B + non-oil exports 559.3B + imports 1,694.1B). Top partners: China, India, Saudi Arabia, Türkiye, Iraq.",
      caveat_short: "MoE trade map · re-exports + non-oil exports + imports · 2024",
      confidence: "high",
      evidence_type: "official",
    },
  },
  {
    id: "manufacturing_va_pct_gdp",
    label: "Manufacturing Value Added",
    value: "9.4%",
    delta: "+0.3pp vs 2023",
    delta_direction: "up",
    unit_label: "% of GDP",
    evidence: {
      source_name: "World Bank — NV.IND.MANF.ZS",
      source_id: "wb_nv_ind_manf_zs_2024",
      publisher: "World Bank Open Data",
      geography: "National (ARE)",
      unit: "% of GDP",
      extraction_date: "2026-03-26",
      display_period: "FY 2024",
      period_label: "FY 2024 · World Bank API",
      freshness_label: "Latest complete annual snapshot",
      formula: "World Bank indicator NV.IND.MANF.ZS — Manufacturing, value added (% of GDP)",
      caveats:
        "Raw value is 9.37% for 2024. Rounded to 9.4% for display. World Bank data for ARE is sourced from national accounts and may differ slightly from FCSC direct publication.",
      caveat_short: "World Bank 9.37% → rounded 9.4% · FY 2024",
      confidence: "high",
      evidence_type: "official",
    },
  },
];

// ─────────────────────────────────────────────
// INSIGHT CARDS
// data_period reflects the underlying data vintage, not the current date
// ─────────────────────────────────────────────

export const dashboardInsights: InsightCard[] = [
  {
    id: "insight_momentum_nonoil",
    signal_type: "momentum",
    title: "Non-oil GDP share reaches 77.5% — diversification momentum is accelerating",
    summary:
      "The latest FCSC official pulse (H1 2025) puts non-oil GDP at 77.5% of real output — up from 75.5% in FY 2024. Non-oil sector real growth reached 6.1% in the first 9 months of 2025. This sustained structural shift is the foundational evidence for the Ministry's industrial strategy narrative and the freshest available signal as of March 2026.",
    evidence_ids: ["non_oil_gdp_share", "non_oil_gdp_growth"],
    data_period: "H1 2025 / 9M 2025",
  },
  {
    id: "insight_opportunity_manuf",
    signal_type: "opportunity",
    title: "Manufacturing value added is rising — but the complexity gap remains open",
    summary:
      "FY 2024 World Bank data shows manufacturing value added at 9.4% of GDP, recovering from historical lows below 5%. Peer benchmarks — Singapore at 21%, South Korea at 26% — show how wide the complexity opportunity is. Sector adjacency scoring (pending Comtrade access) will quantify the priority areas.",
    evidence_ids: ["manufacturing_va_pct_gdp"],
    data_period: "FY 2024",
  },
  {
    id: "insight_risk_concentration",
    signal_type: "risk",
    title: "Trade partner concentration is a quantifiable but unresolved resilience risk",
    summary:
      "At AED 2.97 trillion total, non-oil foreign trade is substantial (2024, Ministry of Economy). Top-5 partners — China, India, Saudi Arabia, Türkiye, Iraq — account for a material share of flows. Without product-level decomposition — pending UN Comtrade subscription — the precise concentration risk cannot be measured.",
    evidence_ids: ["non_oil_exports_proxy"],
    data_period: "2024",
    deferred: true,
  },
];

// ─────────────────────────────────────────────
// WATCHLIST / ANOMALY
// ─────────────────────────────────────────────

export const watchlistItem = {
  id: "watchlist_fdi_concentration",
  title: "Strong trade and FDI headlines may mask industrial sector concentration",
  summary:
    "Non-oil foreign trade reached AED 2.97 trillion in 2024 (Ministry of Economy) and the top-5 trade partners account for a disproportionate share of flows. FDI at 8.3% of GDP is strong (FY 2024, World Bank), but without industrial-sector FDI breakdown — Ministry of Economy structured export pending — it is not possible to confirm how much reaches manufacturing. Both gaps should be closed before the next sector strategy review.",
  evidence_type: "illustrative" as EvidenceType,
  data_period: "2024",
  deferred_note:
    "Industrial FDI decomposition and product-level trade concentration analysis require Ministry of Economy and UN Comtrade structured exports. Both are pending.",
};

// ─────────────────────────────────────────────
// SECTOR ROWS
// ─────────────────────────────────────────────

export const sectorRows: SectorRow[] = [
  {
    id: "advanced_manufacturing",
    name: "Advanced Manufacturing",
    status: "strong",
    momentum_label: "Rising",
    notes:
      "Manufacturing value added at 9.4% of GDP (FY 2024) and growing. Core Operation 300bn target sector. Export complexity adjacency into precision equipment and industrial technology identified — pending full Comtrade scoring.",
    evidence_type: "modeled",
  },
  {
    id: "clean_energy",
    name: "Clean Energy & Sustainability",
    status: "strong",
    momentum_label: "Strong",
    notes:
      "Underpinned by the national net-zero commitment and a major confirmed project pipeline. High strategic priority for the Ministry's industrial policy agenda through 2031.",
    evidence_type: "official",
  },
  {
    id: "food_agritech",
    name: "Food Security & AgriTech",
    status: "opportunity",
    momentum_label: "Emerging",
    notes:
      "Import dependence and the national food security strategy create a compelling domestic case. Existing cold-chain logistics infrastructure provides a platform for manufacturing entry.",
    evidence_type: "modeled",
  },
  {
    id: "pharma_medtech",
    name: "Pharma & MedTech",
    status: "opportunity",
    momentum_label: "Emerging",
    notes:
      "Low domestic manufacturing base relative to healthcare spend and regional market scale. Free zone platforms and logistics networks provide a launchpad for attracting anchor investors.",
    evidence_type: "modeled",
  },
  {
    id: "defense_aerospace",
    name: "Defense & Aerospace",
    status: "strategic",
    momentum_label: "Stable",
    notes:
      "Strategic national priority for industrial sovereignty. ICV and ITTI instruments are directly applicable. Classification is directional — detailed quantitative evidence is not publicly available.",
    evidence_type: "illustrative",
  },
  {
    id: "petrochemicals_downstream",
    name: "Petrochemicals & Downstream",
    status: "strong",
    momentum_label: "Mature",
    notes:
      "Established industrial base with high employment and significant export value. Medium-term resilience risk from energy transition in key partner markets requires active monitoring.",
    evidence_type: "official",
  },
  {
    id: "digital_ict",
    name: "Digital & ICT",
    status: "opportunity",
    momentum_label: "Rising",
    notes:
      "World-class digital government infrastructure, but hardware manufacturing is limited. Software, cloud services, and AI-enabled applications are the near-term opportunity — supported by existing talent attraction policy.",
    evidence_type: "modeled",
  },
];

// ─────────────────────────────────────────────
// EMIRATE ROWS
// ─────────────────────────────────────────────

export const emirateRows: EmirateRow[] = [
  {
    id: "abu_dhabi",
    name: "Abu Dhabi",
    industrial_role: "Anchor & Innovation Hub",
    strengths: [
      "Sovereign wealth and long-horizon capital allocation",
      "Energy and downstream industrial base",
      "Advanced manufacturing platforms — KIZAD, KEZAD",
      "AI and deep-tech investment ecosystem — Hub71",
    ],
    portfolio_note:
      "National anchor for capital-intensive, strategically significant industrial projects. Defines the ambition ceiling for the federation.",
    evidence_type: "official",
  },
  {
    id: "dubai",
    name: "Dubai",
    industrial_role: "Trade, Logistics & Technology Gateway",
    strengths: [
      "Global trade hub and re-export platform",
      "Free zone ecosystem — JAFZA, DAFZA, DIFC, Dubai CommerCity",
      "Digital, fintech, and professional services concentration",
      "Regional HQ and talent attraction",
    ],
    portfolio_note:
      "Primary market-facing interface for national industrial ambitions. Enables global reach and investor access at scale.",
    evidence_type: "official",
  },
  {
    id: "sharjah",
    name: "Sharjah",
    industrial_role: "Manufacturing & Knowledge Base",
    strengths: [
      "Established SME and light manufacturing cluster",
      "University and research ecosystem — American University of Sharjah",
      "Cost-competitive industrial land adjacent to Dubai",
    ],
    portfolio_note:
      "Important domestic manufacturing contributor. Scale-up potential for national supply chains and SME industrial development.",
    evidence_type: "official",
  },
  {
    id: "ras_al_khaimah",
    name: "Ras Al Khaimah",
    industrial_role: "Industrial Diversification Platform",
    strengths: [
      "Advanced ceramics and building materials — RAK Ceramics",
      "RAKEZ free zone with competitive cost structure",
      "Port access and growing logistics infrastructure",
    ],
    portfolio_note:
      "Differentiated industrial specialisation in materials. Strong candidate for a centre-of-excellence designation in advanced construction materials.",
    evidence_type: "official",
  },
  {
    id: "fujairah",
    name: "Fujairah",
    industrial_role: "East Coast Strategic Logistics Node",
    strengths: [
      "Deep-water port on the Indian Ocean trade corridor",
      "Oil storage, bunkering, and energy infrastructure hub",
      "Strategic bypass routing avoiding Strait of Hormuz",
    ],
    portfolio_note:
      "Critical national energy security and logistics asset. Manufacturing base is limited today but logistics infrastructure supports broader supply chain resilience.",
    evidence_type: "official",
  },
  {
    id: "ajman_umm_al_quwain",
    name: "Ajman & Umm Al Quwain",
    industrial_role: "Northern Corridor Capacity Zones",
    strengths: [
      "Lower-cost industrial land within the northern corridor",
      "Proximity to Sharjah and Dubai supply chains",
      "Developing free zone infrastructure",
    ],
    portfolio_note:
      "Portfolio role is still forming. Most effective as satellite capacity within a broader Northern Emirates industrial corridor strategy rather than as standalone anchors.",
    evidence_type: "modeled",
  },
];

// ─────────────────────────────────────────────
// ROADMAP PHASES
// ─────────────────────────────────────────────

export const roadmapPhases = [
  {
    horizon: "0–3 months",
    label: "Foundation",
    focus_areas: [
      {
        area: "Governance",
        action:
          "Establish AI-Native the Ministry steering committee with data, strategy, and digital leads. Agree on evidence standards and KPI ownership rules.",
      },
      {
        area: "Data",
        action:
          "Finalise KPI dictionary v1, assign data owners, and close the FCSC and UN Comtrade source connections needed for the core indicator set.",
      },
      {
        area: "Workflow",
        action:
          "Pilot the evidence-backed decision brief workflow end-to-end with one priority sector.",
      },
      {
        area: "Capability",
        action:
          "Run leadership orientation on the AI-Native operating model, evidence standards, and what ministerial decision support should look like.",
      },
    ],
  },
  {
    horizon: "3–12 months",
    label: "Build",
    focus_areas: [
      {
        area: "Governance",
        action:
          "Embed KPI ownership and evidence refresh accountability into the performance management cycle. Establish a regular strategic review cadence.",
      },
      {
        area: "Data",
        action:
          "Connect Industrial Registry and Ministry of Economy FDI data to the analytical layer. Automate the core indicator refresh pipeline.",
      },
      {
        area: "Workflow",
        action:
          "Scale the decision brief workflow across all six primary product surfaces. Introduce AI-assisted summarisation from structured evidence inputs.",
      },
      {
        area: "Capability",
        action:
          "Train strategy and sector teams on evidence-guided analysis, peer benchmarking interpretation, and brief production standards.",
      },
    ],
  },
  {
    horizon: "12–24 months",
    label: "Scale",
    focus_areas: [
      {
        area: "Governance",
        action:
          "Establish formal cross-emirate data-sharing agreements and a federated policy KPI framework. Define the the Ministry data stewardship model.",
      },
      {
        area: "Data",
        action:
          "Operate a full analytical data platform with near-real-time source refresh, automated anomaly detection, and evidence-freshness SLA monitoring.",
      },
      {
        area: "Workflow",
        action:
          "AI-assisted brief generation is embedded in the ministerial review cycle as a standard tool, not an experiment.",
      },
      {
        area: "Capability",
        action:
          "the Ministry is recognised regionally as a benchmark for AI-Native government ministry operations and evidence-led industrial policy.",
      },
    ],
  },
];
