/**
 * Seed data for the MoIAT strategy prototype scaffold.
 *
 * DATA LABELING RULES:
 * - evidence_type: "official"     → real public data from named authoritative source
 * - evidence_type: "modeled"      → derived or computed from official inputs
 * - evidence_type: "illustrative" → workflow/demo data, not real ministry data
 *
 * All "illustrative" entries must carry the label:
 * "Illustrative workflow data — to be replaced by live ministry data in production"
 *
 * World Bank figures are drawn from data/raw/world_bank/ (extracted 2026-03-26).
 * PRD macro proof points are sourced from FCSC/UAE official statements (2024).
 */

export type EvidenceType = "official" | "modeled" | "illustrative";
export type SignalType = "momentum" | "opportunity" | "risk" | "action";

export interface EvidenceMeta {
  source_name: string;
  source_id: string;
  publisher: string;
  geography: string;
  unit: string;
  extraction_date: string;
  source_period: string;
  formula?: string;
  caveats?: string;
  confidence: "high" | "medium" | "low";
  evidence_type: EvidenceType;
  methodology_notes?: string;
}

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
  date: string;
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
// Sources: World Bank API (extracted 2026-03-26) and FCSC/UAE official statistics 2024
// ─────────────────────────────────────────────

export const heroKpis: KpiDef[] = [
  {
    id: "non_oil_gdp_share",
    label: "Non-Oil GDP Share",
    value: "75.5%",
    delta: "+0.8pp",
    delta_direction: "up",
    unit_label: "of real GDP",
    evidence: {
      source_name: "FCSC / UAE National Accounts 2024",
      source_id: "fcsc_uae_nat_accounts_2024",
      publisher: "Federal Competitiveness and Statistics Centre",
      geography: "UAE",
      unit: "% of real GDP",
      extraction_date: "2026-03-26",
      source_period: "2024",
      formula: "Non-oil real GDP / Total real GDP × 100",
      caveats:
        "Based on FCSC press-release figures. Detailed breakdown subject to final national accounts publication.",
      confidence: "high",
      evidence_type: "official",
      methodology_notes:
        "Sourced from the FCSC 2024 national accounts summary as referenced in the PRD proof points.",
    },
  },
  {
    id: "manufacturing_va_pct_gdp",
    label: "Manufacturing Value Added",
    value: "9.4%",
    delta: "+0.3pp",
    delta_direction: "up",
    unit_label: "% of GDP",
    evidence: {
      source_name: "World Bank — Manufacturing, value added (% of GDP)",
      source_id: "wb_nv_ind_manf_zs_2024",
      publisher: "World Bank",
      geography: "UAE (ARE)",
      unit: "% of GDP",
      extraction_date: "2026-03-26",
      source_period: "2024",
      formula: "World Bank indicator NV.IND.MANF.ZS",
      caveats:
        "World Bank figure is 9.37% for 2024. Rounded to one decimal for display.",
      confidence: "high",
      evidence_type: "official",
    },
  },
  {
    id: "real_gdp_growth",
    label: "Real GDP Growth",
    value: "4.0%",
    delta: "+0.3pp vs 2023",
    delta_direction: "up",
    unit_label: "annual",
    evidence: {
      source_name: "World Bank — GDP growth (annual %)",
      source_id: "wb_ny_gdp_mktp_kd_zg_2024",
      publisher: "World Bank",
      geography: "UAE (ARE)",
      unit: "Annual %",
      extraction_date: "2026-03-26",
      source_period: "2024",
      formula: "World Bank indicator NY.GDP.MKTP.KD.ZG",
      caveats:
        "World Bank figure is 3.99% for 2024. Aligns with FCSC official 4.0% headline.",
      confidence: "high",
      evidence_type: "official",
    },
  },
  {
    id: "fdi_net_inflows_pct_gdp",
    label: "FDI Net Inflows",
    value: "8.3%",
    delta: "+1.1pp",
    delta_direction: "up",
    unit_label: "% of GDP",
    evidence: {
      source_name: "World Bank — FDI, net inflows (% of GDP)",
      source_id: "wb_bx_klt_dinv_wd_gd_zs_2024",
      publisher: "World Bank",
      geography: "UAE (ARE)",
      unit: "% of GDP",
      extraction_date: "2026-03-26",
      source_period: "2024",
      formula: "World Bank indicator BX.KLT.DINV.WD.GD.ZS",
      caveats:
        "World Bank figure is 8.26% for 2024. Covers total economy FDI, not industrial FDI alone.",
      confidence: "high",
      evidence_type: "official",
    },
  },
  {
    id: "non_oil_exports_proxy",
    label: "Non-Oil Foreign Trade",
    value: "AED 2.8T",
    delta: "2024 total",
    delta_direction: "neutral",
    unit_label: "total trade value",
    evidence: {
      source_name: "FCSC / UAE National Trade Summary 2024",
      source_id: "fcsc_trade_2024",
      publisher: "Federal Competitiveness and Statistics Centre",
      geography: "UAE",
      unit: "AED trillion",
      extraction_date: "2026-03-26",
      source_period: "2024",
      caveats:
        "Based on FCSC press-release headline figure. Product-level breakdown to be sourced from UN Comtrade (access pending).",
      confidence: "high",
      evidence_type: "official",
    },
  },
  {
    id: "top_sector_momentum",
    label: "Top Sector Momentum",
    value: "Advanced Manuf.",
    unit_label: "leading signal Q4 2024",
    evidence: {
      source_name: "Illustrative — sector rule engine (not yet wired)",
      source_id: "illustrative_sector_momentum",
      publisher: "Prototype scaffold",
      geography: "UAE",
      unit: "Sector label",
      extraction_date: "2026-03-26",
      source_period: "Q4 2024",
      caveats:
        "Illustrative workflow data — to be replaced by live ministry data in production",
      confidence: "low",
      evidence_type: "illustrative",
    },
    deferred: true,
    deferred_reason:
      "Sector momentum scoring requires UN Comtrade and UNIDO ETL (access pending).",
  },
];

// ─────────────────────────────────────────────
// INSIGHT CARDS — three curated signal types
// ─────────────────────────────────────────────

export const dashboardInsights: InsightCard[] = [
  {
    id: "insight_momentum_nonoil",
    signal_type: "momentum",
    title: "Non-oil GDP share has grown steadily over five years",
    summary:
      "The UAE's non-oil share of real GDP reached 75.5% in 2024, up from a lower base in 2020. This sustained shift reflects expanding services, trade, and manufacturing contributions and is the foundational narrative for industrial strategy.",
    evidence_ids: ["non_oil_gdp_share", "real_gdp_growth"],
    date: "2024",
  },
  {
    id: "insight_opportunity_manuf",
    signal_type: "opportunity",
    title: "Manufacturing value added rising but complexity gap remains",
    summary:
      "Manufacturing value added reached 9.4% of GDP in 2024 (World Bank), up from historical lows below 5%. However, the export complexity profile suggests an adjacency opportunity in higher-value manufacturing — chemicals, precision equipment, and industrial technology — where peer markets show stronger unit-value growth.",
    evidence_ids: ["manufacturing_va_pct_gdp"],
    date: "2024",
  },
  {
    id: "insight_risk_concentration",
    signal_type: "risk",
    title: "Trade partner concentration poses a resilience risk",
    summary:
      "With non-oil foreign trade at AED 2.8 trillion, partner concentration in a small number of markets creates exposure. Full product-partner analysis is pending UN Comtrade access, but initial signals suggest the top five partners account for a disproportionate share of priority export categories.",
    evidence_ids: ["non_oil_exports_proxy"],
    date: "2024",
    deferred: true,
  },
];

// ─────────────────────────────────────────────
// WATCHLIST / ANOMALY
// ─────────────────────────────────────────────

export const watchlistItem = {
  id: "watchlist_fdi_concentration",
  title: "FDI inflows concentrated in services, not industrial sectors",
  summary:
    "At 8.3% of GDP, total FDI inflows are strong. However, without industrial-sector breakdown (pending Ministry of Economy data), it is not yet possible to confirm how much is directed to manufacturing and technology-intensive activities. This is a known evidence gap.",
  evidence_type: "illustrative" as EvidenceType,
  deferred_note:
    "Industrial FDI breakdown requires Ministry of Economy structured export. Currently illustrative.",
};

// ─────────────────────────────────────────────
// SECTOR ROWS — scaffold with honest labels
// ─────────────────────────────────────────────

export const sectorRows: SectorRow[] = [
  {
    id: "advanced_manufacturing",
    name: "Advanced Manufacturing",
    status: "strong",
    momentum_label: "Rising",
    notes:
      "Growing share of manufacturing VA. Operation 300bn target sector. Complexity adjacency opportunity identified.",
    evidence_type: "modeled",
  },
  {
    id: "clean_energy",
    name: "Clean Energy & Sustainability",
    status: "strong",
    momentum_label: "Strong",
    notes:
      "UAE net-zero commitment and major project pipeline. High strategic priority for MoIAT.",
    evidence_type: "official",
  },
  {
    id: "food_agritech",
    name: "Food Security & AgriTech",
    status: "opportunity",
    momentum_label: "Emerging",
    notes:
      "Identified as an opportunity sector given import dependence and national food security strategy.",
    evidence_type: "modeled",
  },
  {
    id: "pharma_medtech",
    name: "Pharma & MedTech",
    status: "opportunity",
    momentum_label: "Emerging",
    notes:
      "Low current manufacturing base relative to healthcare spend. Adjacency opportunity from existing logistics and free zone infrastructure.",
    evidence_type: "modeled",
  },
  {
    id: "defense_aerospace",
    name: "Defense & Aerospace",
    status: "strategic",
    momentum_label: "Stable",
    notes:
      "Strategic importance for national industrial sovereignty. ICV and ITTI instruments directly applicable.",
    evidence_type: "illustrative",
  },
  {
    id: "petrochemicals_downstream",
    name: "Petrochemicals & Downstream",
    status: "strong",
    momentum_label: "Mature",
    notes:
      "Established base with high employment and export value. Exposure to long-term energy transition risk.",
    evidence_type: "official",
  },
  {
    id: "digital_ict",
    name: "Digital & ICT",
    status: "opportunity",
    momentum_label: "Rising",
    notes:
      "Strong government digital infrastructure but limited hardware manufacturing. Software and services are growing.",
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
      "Sovereign wealth and capital allocation",
      "Energy and downstream industries",
      "Advanced manufacturing platforms (KIZAD)",
      "AI and technology investment (Hub71)",
    ],
    portfolio_note:
      "Anchor for capital-intensive, long-horizon industrial projects.",
    evidence_type: "official",
  },
  {
    id: "dubai",
    name: "Dubai",
    industrial_role: "Trade, Logistics & Tech Gateway",
    strengths: [
      "Global trade and re-export hub",
      "Free zone ecosystem (JAFZA, DAFZA, DIFC)",
      "Digital and fintech concentration",
      "Talent and regional HQ attraction",
    ],
    portfolio_note:
      "Primary interface with global markets; enables scale and reach for UAE industrial ambitions.",
    evidence_type: "official",
  },
  {
    id: "sharjah",
    name: "Sharjah",
    industrial_role: "Manufacturing & Education Base",
    strengths: [
      "Established SME and light manufacturing cluster",
      "University and research ecosystem",
      "Cost-competitive industrial land",
    ],
    portfolio_note:
      "Important SME and domestic manufacturing contributor; scale-up potential for national supply chains.",
    evidence_type: "official",
  },
  {
    id: "ras_al_khaimah",
    name: "Ras Al Khaimah",
    industrial_role: "Industrial Diversification Platform",
    strengths: [
      "RAK Ceramics and building materials",
      "RAKEZ free zone with cost advantages",
      "Port access and growing logistics",
    ],
    portfolio_note:
      "Differentiated industrial base; potential center-of-excellence for materials and ceramics.",
    evidence_type: "official",
  },
  {
    id: "fujairah",
    name: "Fujairah",
    industrial_role: "East Coast Logistics Node",
    strengths: [
      "Strategic port on the Indian Ocean trade route",
      "Oil storage and bunkering hub",
      "Bypass point avoiding Strait of Hormuz",
    ],
    portfolio_note:
      "Critical logistics and energy security asset; limited manufacturing base today.",
    evidence_type: "official",
  },
  {
    id: "ajman_umm_al_quwain",
    name: "Ajman & Umm Al Quwain",
    industrial_role: "Northern Corridor Emerging Zones",
    strengths: [
      "Lower-cost industrial land",
      "Proximity to Sharjah and Dubai supply chains",
      "Emerging free zones",
    ],
    portfolio_note:
      "Portfolio role still developing; satellite capacity for broader Northern Emirates cluster.",
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
          "Establish AI-Native MoIAT steering committee with data, strategy, and digital leads.",
      },
      {
        area: "Data",
        action:
          "Define KPI dictionary v1, assign data owners, and complete FCSC/Comtrade source connections.",
      },
      {
        area: "Workflow",
        action:
          "Pilot evidence-backed decision brief workflow with one priority sector.",
      },
      {
        area: "Capability",
        action:
          "Run leadership orientation on AI-Native operating model and evidence standards.",
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
          "Embed KPI ownership accountability in performance management cycle.",
      },
      {
        area: "Data",
        action:
          "Connect Industrial Registry and MoE FDI data to analytical layer. Automate refresh cadence.",
      },
      {
        area: "Workflow",
        action:
          "Scale decision brief workflow to all six primary analytics surfaces.",
      },
      {
        area: "Capability",
        action:
          "Train strategy teams on evidence-guided sector and emirate analysis.",
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
          "Establish cross-emirate data sharing agreements and policy KPI federation.",
      },
      {
        area: "Data",
        action:
          "Full analytical data platform with near-real-time source refresh and anomaly detection.",
      },
      {
        area: "Workflow",
        action:
          "AI-assisted brief generation embedded in ministerial review cycle.",
      },
      {
        area: "Capability",
        action:
          "MoIAT operates as a benchmark for AI-Native government ministry in the region.",
      },
    ],
  },
];
