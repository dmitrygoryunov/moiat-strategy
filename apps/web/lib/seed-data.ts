/**
 * Seed data for the MoIAT strategy prototype scaffold.
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
  /** The period most headline indicators reflect */
  data_vintage: "FY 2024",
  /** Human-readable note for the dashboard data bar */
  data_vintage_note:
    "Most headline indicators reflect 2024 annual data — the latest complete official year available as of March 2026.",
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
// Sources:
//   - World Bank Open Data API (extracted 2026-03-26) — data/raw/world_bank/
//   - FCSC / UAE National Accounts 2024 (PRD proof points, to be confirmed against
//     structured UAE.Stat export when available)
//
// All values reflect FY 2024 annual data.
// Current context date is March 2026.
// ─────────────────────────────────────────────

export const heroKpis: KpiDef[] = [
  {
    id: "non_oil_gdp_share",
    label: "Non-Oil GDP Share",
    value: "75.5%",
    delta: "+0.8pp vs 2023",
    delta_direction: "up",
    unit_label: "of real GDP",
    evidence: {
      source_name: "FCSC / UAE National Accounts 2024",
      source_id: "fcsc_uae_nat_accounts_2024",
      publisher: "Federal Competitiveness and Statistics Centre",
      geography: "UAE",
      unit: "% of real GDP",
      extraction_date: "2026-03-26",
      display_period: "FY 2024",
      period_label: "FY 2024 · Official annual",
      formula: "Non-oil real GDP / Total real GDP × 100",
      caveats:
        "Based on FCSC 2024 national accounts press release. Detailed sub-national breakdown subject to final publication. Structured UAE.Stat export not yet in repository — figure to be confirmed once available.",
      caveat_short: "FCSC press release · FY 2024 · Pending structured export",
      confidence: "high",
      evidence_type: "official",
      methodology_notes:
        "Figure referenced in PRD proof points (AED 1.342T non-oil / AED 1.776T total = 75.5%). Extraction date 2026-03-26.",
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
      geography: "UAE (ARE)",
      unit: "% of GDP",
      extraction_date: "2026-03-26",
      display_period: "FY 2024",
      period_label: "FY 2024 · World Bank API",
      formula: "World Bank indicator NV.IND.MANF.ZS — Manufacturing, value added (% of GDP)",
      caveats:
        "Raw value is 9.37% for 2024. Rounded to 9.4% for display. World Bank data for ARE is sourced from national accounts and may differ slightly from FCSC direct publication.",
      caveat_short: "World Bank 9.37% → rounded 9.4% · FY 2024",
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
    unit_label: "annual %",
    evidence: {
      source_name: "World Bank — NY.GDP.MKTP.KD.ZG",
      source_id: "wb_ny_gdp_mktp_kd_zg_2024",
      publisher: "World Bank Open Data",
      geography: "UAE (ARE)",
      unit: "Annual %",
      extraction_date: "2026-03-26",
      display_period: "FY 2024",
      period_label: "FY 2024 · World Bank API",
      formula: "World Bank indicator NY.GDP.MKTP.KD.ZG — GDP growth (annual %)",
      caveats:
        "Raw World Bank value is 3.99% for 2024 — consistent with FCSC official headline of 4.0%. Values are from repository file data/raw/world_bank/are_gdp_growth_annual.json.",
      caveat_short: "World Bank 3.99% · aligns with FCSC 4.0% headline · FY 2024",
      confidence: "high",
      evidence_type: "official",
    },
  },
  {
    id: "fdi_net_inflows_pct_gdp",
    label: "FDI Net Inflows",
    value: "8.3%",
    delta: "+1.1pp vs 2023",
    delta_direction: "up",
    unit_label: "% of GDP",
    evidence: {
      source_name: "World Bank — BX.KLT.DINV.WD.GD.ZS",
      source_id: "wb_bx_klt_dinv_wd_gd_zs_2024",
      publisher: "World Bank Open Data",
      geography: "UAE (ARE)",
      unit: "% of GDP",
      extraction_date: "2026-03-26",
      display_period: "FY 2024",
      period_label: "FY 2024 · World Bank API",
      formula: "World Bank indicator BX.KLT.DINV.WD.GD.ZS — FDI, net inflows (% of GDP)",
      caveats:
        "Raw value is 8.26% for 2024. This covers total-economy FDI. Industrial or manufacturing-sector FDI breakdown is not available in the current data cache — Ministry of Economy structured export is pending.",
      caveat_short: "Total-economy FDI · industrial breakdown pending · FY 2024",
      confidence: "high",
      evidence_type: "official",
    },
  },
  {
    id: "non_oil_exports_proxy",
    label: "Non-Oil Foreign Trade",
    value: "AED 2.8T",
    delta: "FY 2024 total",
    delta_direction: "neutral",
    unit_label: "total trade value",
    evidence: {
      source_name: "FCSC / UAE National Trade Summary",
      source_id: "fcsc_trade_2024",
      publisher: "Federal Competitiveness and Statistics Centre",
      geography: "UAE",
      unit: "AED trillion",
      extraction_date: "2026-03-26",
      display_period: "FY 2024",
      period_label: "FY 2024 · FCSC headline",
      caveats:
        "Based on FCSC 2024 press-release headline figure. Product-level and partner-level trade breakdown requires UN Comtrade access (API returned 401 — subscription pending; see data/raw/source_manifests/download-manifest.md).",
      caveat_short: "FCSC headline · product detail pending Comtrade access · FY 2024",
      confidence: "high",
      evidence_type: "official",
    },
  },
  {
    id: "top_sector_momentum",
    label: "Top Sector Momentum",
    value: "Advanced Manuf.",
    unit_label: "leading signal",
    evidence: {
      source_name: "Illustrative — sector scoring not yet wired",
      source_id: "illustrative_sector_momentum",
      publisher: "Prototype scaffold",
      geography: "UAE",
      unit: "Sector label",
      extraction_date: "2026-03-26",
      display_period: "Illustrative",
      period_label: "Illustrative · not real data",
      caveats:
        "Illustrative workflow data — to be replaced by live ministry data in production. Sector momentum scoring requires UN Comtrade product-level ETL and UNIDO manufacturing structure data, both currently unavailable.",
      caveat_short: "Illustrative placeholder — not real ministry data",
      confidence: "low",
      evidence_type: "illustrative",
    },
    deferred: true,
    deferred_reason:
      "Sector momentum scoring requires UN Comtrade and UNIDO ETL (access pending). Value shown is a scaffold placeholder.",
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
    title: "Non-oil GDP share has grown steadily over five years",
    summary:
      "As of the latest official annual snapshot (FY 2024), the UAE's non-oil share of real GDP stands at 75.5%, up from a lower base in 2019–2020. This sustained structural shift — driven by services, trade, and manufacturing — is the foundational evidence for MoIAT's industrial strategy narrative.",
    evidence_ids: ["non_oil_gdp_share", "real_gdp_growth"],
    data_period: "FY 2024",
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
    title: "Trade partner concentration is an unquantified resilience risk",
    summary:
      "At AED 2.8 trillion, non-oil foreign trade is substantial (FY 2024). However, without product-level and partner-level data — pending UN Comtrade subscription — the concentration risk cannot be precisely measured. The signal is directional: initial evidence suggests high partner dependency in key export categories.",
    evidence_ids: ["non_oil_exports_proxy"],
    data_period: "FY 2024",
    deferred: true,
  },
];

// ─────────────────────────────────────────────
// WATCHLIST / ANOMALY
// ─────────────────────────────────────────────

export const watchlistItem = {
  id: "watchlist_fdi_concentration",
  title: "Total FDI strength may mask industrial sector weakness",
  summary:
    "FDI at 8.3% of GDP is a strong headline (FY 2024, World Bank). However, without industrial-sector breakdown — requiring Ministry of Economy structured export, not yet in the data cache — it is not possible to confirm how much reaches manufacturing and technology-intensive activities. This is a known evidence gap that the next data packet should close.",
  evidence_type: "illustrative" as EvidenceType,
  data_period: "FY 2024",
  deferred_note:
    "Industrial FDI breakdown requires Ministry of Economy structured data export. Currently a headline figure only.",
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
      "Underpinned by UAE net-zero commitment and a major confirmed project pipeline. High strategic priority for MoIAT's industrial policy agenda through 2031.",
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
      "Primary market-facing interface for UAE industrial ambitions. Enables global reach and investor access at scale.",
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
          "Establish AI-Native MoIAT steering committee with data, strategy, and digital leads. Agree on evidence standards and KPI ownership rules.",
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
          "Establish formal cross-emirate data-sharing agreements and a federated policy KPI framework. Define the MoIAT data stewardship model.",
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
          "MoIAT is recognised regionally as a benchmark for AI-Native government ministry operations and evidence-led industrial policy.",
      },
    ],
  },
];
