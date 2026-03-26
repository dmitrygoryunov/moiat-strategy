# MoIAT AI-Native Strategy Prototype Data Sources

## 1. Purpose

This document defines the recommended data sources for the prototype, how they should be used, what they are best suited for, and the trust or licensing constraints that should shape implementation.

The prototype should favor official UAE data first, global benchmark data second, and clearly labeled illustrative internal metrics only when needed for workflow realism.

## 2. Source Selection Principles

- Official-first: Prefer UAE government sources wherever they provide usable statistics
- Demo-safe: Prefer downloadable, stable, and reproducible datasets over brittle live views
- Traceable: Every metric must map to a known source, extraction date, and transformation rule
- Comparable: Use global sources only where peer comparison is methodologically reasonable
- Bounded: Do not pull data that cannot be explained clearly in the prototype

## 3. Data Layer Model

### Layer 1: Real, Official, Public

Use directly in the prototype for headline metrics, charts, and benchmark inputs.

### Layer 2: MoIAT-Native Public and Policy Context

Use for domain framing, KPI structure, industrial policy context, and future-state data design.

### Layer 3: Illustrative Internal Workflow Data

Use only if needed to demonstrate ministry workflow metrics.

Required label:

`Illustrative workflow data — to be replaced by live ministry data in production`

## 4. Core Recommended Sources

### 4.1 Federal Competitiveness and Statistics Centre / UAE.Stat

Primary uses:

- GDP and quarterly GDP
- non-oil GDP and macro baselines
- labor force and unemployment
- trade time series
- national summary indicators

Why it matters:

- best primary source for the UAE-first story
- supports ministerial credibility
- anchors top-of-dashboard proof points

Prototype usage:

- Leadership Dashboard hero KPIs
- macro trend charts
- national summary panels
- evidence drawer references

Notes:

- prefer stored snapshots or exports used in the build
- retain exact series names, units, and download dates in metadata

Candidate metrics:

- real GDP growth
- non-oil GDP
- non-oil GDP share
- unemployment
- trade totals

Reference:

- FCSC / UAE.Stat

### 4.2 Ministry of Economy Open Data, FDI Dashboard, and Trade Tools

Primary uses:

- FDI stock and trend context
- trade by country and category
- economic reports and contextual evidence

Why it matters:

- fills part of the investment and trade story
- supports sector and partner-country analysis

Prototype usage:

- industrial FDI KPI
- partner trade concentration views
- contextual evidence in sector briefs

Notes:

- preserve attribution and export date
- confirm whether figures are national, non-oil, sector-specific, or total before combining with other sources

Candidate metrics:

- industrial or priority-sector FDI
- trade partner dependence
- category-level trade flows

Reference:

- Ministry of Economy open-data and dashboard tools

### 4.3 MoIAT Open Data and Industrial Registry Context

Primary uses:

- ministry-native domain framing
- industrial policy and registry context
- structure for future ministry KPI design

Why it matters:

- makes the prototype feel grounded in MoIAT’s operating reality
- supports storyline around evidence-native ministry workflows

Prototype usage:

- Roadmap & Operating Model content
- Decision Brief Builder context
- future-state KPI dictionary design
- evidence notes on registry-enabled metrics

Notes:

- some material may be structural or descriptive rather than analytical
- use to define what should exist in production, not to overclaim public metric availability

Candidate metrics or design inputs:

- industrial establishment reporting fields
- registry completeness concept
- ICV / ITTI context
- conformity and standards workflow context

Reference:

- MoIAT open data and industrial registry-related public materials

### 4.4 World Bank Data

Primary uses:

- macro comparators
- international peer benchmarks
- supporting context for competitiveness narrative

Why it matters:

- recognized and broadly understood
- useful for UAE versus peer-country comparisons

Prototype usage:

- UAE Position & Peer Benchmarking
- contextual macro comparison charts
- optional comparator normalization

Notes:

- use only indicators with clear peer comparability
- record indicator codes and extraction dates

Candidate metrics:

- inflation context
- FDI-related comparator indicators
- manufacturing share context
- labor and productivity comparators where appropriate

Reference:

- World Bank Data Catalog / API datasets

### 4.5 UN Comtrade

Primary uses:

- detailed trade structure
- product- and partner-level analysis
- export concentration and market dependence

Why it matters:

- strongest source for product-level international trade patterns
- enables sector prioritization and partner risk analysis

Prototype usage:

- export concentration by sector
- top partner dependence
- product growth analysis
- supporting evidence for opportunity and risk cards

Notes:

- check reporter, partner, HS version, trade flow, and period consistency
- cache transformed outputs rather than relying on live API calls during demos

Candidate metrics:

- export concentration index
- top partner share
- priority category growth
- manufactured export composition

Reference:

- UN Comtrade developer and downloadable trade datasets

### 4.6 WIPO IP Statistics Data Center

Primary uses:

- patents
- trademarks
- innovation signaling

Why it matters:

- adds evidence for innovation-output trends
- helps avoid relying only on macro or trade data

Prototype usage:

- innovation trend cards
- benchmark panels
- supporting evidence for opportunity or risk narratives

Notes:

- cite WIPO clearly
- confirm reuse conditions before broad republication
- use as a signal, not a sole proxy for innovation strength

Candidate metrics:

- patent activity trend
- trademark filing trend
- comparator innovation-output snapshots

Reference:

- WIPO IP Statistics Data Center

### 4.7 UNIDO Industrial Statistics / Competitiveness Sources

Primary uses:

- manufacturing structure
- industrial competitiveness
- value added
- employment
- establishments by industrial classification

Why it matters:

- useful for internationally comparable manufacturing analysis
- supports structural benchmarking beyond macro aggregates

Prototype usage:

- Sector Prioritization baseline views
- competitiveness benchmarking
- manufacturing structure charts

Notes:

- check access, methodology, and available public fields early
- do not assume all desired measures are freely downloadable in the same format

Candidate metrics:

- manufacturing value added context
- sector composition
- industrial employment trend
- medium/high-tech manufacturing shares

Reference:

- UNIDO Statistics Portal and competitiveness materials

### 4.8 Harvard Atlas of Economic Complexity

Primary uses:

- export complexity
- adjacency opportunities
- diversification narratives

Why it matters:

- particularly strong for “from strength to next adjacency” storytelling
- supports opportunity identification without oversimplifying sector choice

Prototype usage:

- opportunity scoring in Sector Prioritization
- export adjacency visuals
- narrative support for high-value manufacturing expansion

Notes:

- treat complexity metrics as directional, not definitive
- explain methodology in plain language in the evidence drawer

Candidate metrics:

- export complexity context
- adjacency opportunity score
- diversification opportunity maps

Reference:

- Harvard Atlas of Economic Complexity bulk data

## 5. Source-to-Screen Mapping

### Leadership Dashboard

- FCSC / UAE.Stat
- Ministry of Economy
- UN Comtrade
- optional World Bank context

Typical outputs:

- non-oil GDP share
- manufacturing value added
- non-oil manufactured exports
- industrial FDI
- top momentum and risk cards

### UAE Position & Peer Benchmarking

- World Bank
- UNIDO
- WIPO
- Harvard Atlas
- selected UAE official sources for anchor metrics

Typical outputs:

- comparator rankings
- industrial structure comparison
- innovation and export complexity context

### Sector Prioritization

- UN Comtrade
- Harvard Atlas
- UNIDO
- Ministry of Economy
- selected MoIAT context sources

Typical outputs:

- sector attractiveness views
- concentration and opportunity metrics
- sector momentum and risk signals

### Emirate Portfolio

- UAE official statistics where available
- Ministry of Economy contextual sources
- MoIAT public context
- illustrative emirate-level logic where direct public data is limited

Typical outputs:

- emirate strengths
- portfolio role hypotheses
- cross-emirate dependencies and risk notes

### Decision Brief Builder

- all approved curated sources above
- no uncontrolled open web retrieval

Typical outputs:

- source-backed issue briefs
- evidence-linked options and trade-offs

### Roadmap & Operating Model

- MoIAT public materials
- internal delivery assumptions
- clearly labeled illustrative operating metrics where needed

Typical outputs:

- maturity roadmap
- governance and workflow design
- future KPI architecture

## 6. Canonical Dataset Groups

The ETL layer should organize data into a small number of canonical groups:

- `macro_national`
- `trade_summary`
- `trade_product_partner`
- `fdi_summary`
- `manufacturing_structure`
- `innovation_signals`
- `complexity_opportunities`
- `moiat_context`
- `illustrative_workflow_metrics`

## 7. Recommended Metadata Fields

Each dataset, transformed table, and KPI should capture:

- source_id
- source_name
- source_url
- publisher
- geography
- unit
- frequency
- extraction_date
- source_period_start
- source_period_end
- methodology_notes
- license_or_reuse_notes
- confidence_level
- evidence_type
- transformation_script
- version_tag

## 8. Data Governance Rules for the Prototype

- Do not mix official and illustrative values in the same visual without explicit labeling.
- Do not infer ministry operational performance from public data.
- Do not use AI-generated text unless it can be traced back to structured evidence inputs.
- Do not rely on live source calls during demos unless cached fallback data exists.
- Prefer fewer high-confidence metrics over broader but weaker coverage.

## 9. Immediate Build Recommendations

Start with the smallest set of high-trust sources:

1. FCSC / UAE.Stat
2. Ministry of Economy
3. UN Comtrade
4. World Bank
5. Harvard Atlas

Add WIPO, UNIDO, and MoIAT-specific structural materials in the second pass once the KPI dictionary and evidence model are stable.

## 10. Open Validation Tasks

- confirm exact export/download methods for each selected source
- confirm reuse and attribution requirements for screenshots, downloaded files, and republished chart values
- validate which emirate-level public statistics are robust enough for direct display
- align KPI formulas before implementation begins
- define a controlled peer-country list for benchmark pages

## 11. Reference Links

- FCSC / UAE Official Statistics and Competitiveness Data: https://fcsc.gov.ae/en-us/Pages/Press-Release/19-02-2020.aspx
- UAE.Stat: https://uaestat.fcsc.gov.ae/en
- Ministry of Economy Open Data Policy: https://www.moec.gov.ae/en/open-data-policy
- MoIAT Open Data: https://moiat.gov.ae/en/open-data
- World Bank Data Licensing: https://datacatalog.worldbank.org/all-licenses
- UN Comtrade Developer Portal: https://comtradedeveloper.un.org/apis
- WIPO IP Statistics Data Center: https://www.wipo.int/web/ip-statistics/about
- UNIDO Statistics Portal: https://stat.unido.org/data/database-descriptions
