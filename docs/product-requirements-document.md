# MoIAT AI-Native Strategy Prototype PRD

## 1. Document Control

- Product: MoIAT AI-Native Strategy Prototype
- Purpose: Define the requirements for a trustable decision-support prototype that demonstrates how EPAM can help MoIAT become an AI-Native ministry
- Primary audience: EPAM product, design, engineering, data, and strategy teams
- Secondary audience: Internal reviewers preparing for MoIAT-facing demos and delivery planning
- Status: Draft v1

## 2. Product Vision

Build a leadership-grade prototype that shows how MoIAT can use approved evidence, structured analytics, and bounded AI assistance to support ministerial decisions across strategy, sector prioritization, emirate coordination, and operating model transformation.

The prototype is not a broad AI ministry platform. It is a focused, credible, evidence-led decision-support system designed for demo use and early stakeholder validation.

## 3. Problem Statement

MoIAT’s ambition is not just to digitize reporting, but to embed AI into policy and operational decision-making across national priorities, all seven emirates, and multiple workstreams. Existing dashboard-style approaches are not sufficient because they often:

- present metrics without enough source transparency
- blur official data with inferred or synthetic insights
- optimize for analytics exploration rather than ministerial decision-making
- lack a clear workflow from signal to action

The prototype must show a better model: official-first evidence, traceable KPIs, disciplined insight generation, and decision workflows that leadership can trust.

## 4. Goals

- Demonstrate a trustable, leadership-first prototype aligned to the RFI ambition
- Prove an evidence-native operating model for MoIAT, not just a UI concept
- Show how AI can assist decisions without inventing facts
- Create a credible narrative that starts from UAE strengths and identifies targeted opportunities and risks
- Provide a buildable foundation for an 8-week prototype and follow-on delivery

## 5. Non-Goals

- Building a production-grade enterprise platform
- Delivering real-time integrations across all ministry systems
- Creating open-ended AI chat over uncontrolled web data
- Replacing human review for policy interpretation, KPI approval, or narrative sign-off
- Covering every ministry workflow in the first prototype

## 6. Design Principles

- Trustable: Every number must have a source, date, formula, and confidence label
- Ministerial: The experience should support decisions, not generic BI exploration
- Bounded: Fewer screens and stronger workflows are better than wide but shallow coverage
- Evidence-led: AI should summarize curated evidence, never fabricate unsupported claims
- Favorable but credible: The narrative should begin with UAE strengths, then move to precision, gaps, and action

## 7. Target Users

### 7.1 Senior Leadership

Examples:

- Undersecretary
- Assistant undersecretary
- Ministerial strategy leadership

Needs:

- Fast understanding of national strength, movement, and risk
- Clear priority signals
- Short decision-ready briefs
- Confidence that evidence is official and traceable

### 7.2 Strategy / AI / Transformation Teams

Examples:

- Director of AI
- Strategy office leads
- Transformation and PMO teams

Needs:

- Deeper access to sector and emirate evidence
- Ability to inspect source logic and KPI calculations
- Structured filters and benchmark comparisons
- A workflow to prepare leadership-ready decision briefs

## 8. Core User Experience

### 8.1 Leadership Flow

1. Land on the Leadership Dashboard
2. See a clear “UAE starts from strength” summary
3. Review top momentum, opportunity, and risk signals
4. Open one signal to inspect supporting evidence and peers
5. Review recommended intervention and trade-offs
6. Generate or export a short meeting brief

### 8.2 Working-Level Flow

1. Open Sector Prioritization or Emirate Portfolio
2. Adjust filters, peers, and date ranges
3. Review KPI logic, evidence, and anomaly signals
4. Assemble a structured decision brief
5. Save the brief for leadership review

### 8.3 UX Rule

Every key metric, chart, and insight must support an evidence drawer showing:

- source name
- extraction or refresh date
- formula or calculation logic
- caveats
- evidence type: official, modeled, or illustrative

## 9. Information Architecture

The prototype should have six primary sections and one secondary trust layer.

### 9.1 Leadership Dashboard

Purpose:

- act as the weekly ministerial briefing surface
- show where the UAE is strong
- show what changed recently
- highlight issues requiring leadership attention

Key content:

- six hero KPIs
- three insight cards: momentum, opportunity, risk
- one anomaly or watchlist card
- one recommended decision brief
- Operation 300bn progress tracker

### 9.2 UAE Position & Peer Benchmarking

Purpose:

- compare the UAE against selected peers on targeted competitiveness dimensions

Comparison areas:

- industrial structure
- export mix and complexity
- FDI attractiveness
- digital government readiness
- innovation and industrial technology adoption
- regulatory enablement

### 9.3 Sector Prioritization

Purpose:

- identify sectors that are strong, underdeveloped but attractive, or strategically important with elevated risk

Core questions:

- Which sectors are already strong?
- Which sectors are attractive but underdeveloped?
- Which sectors matter strategically but face risks or constraints?
- Which sectors should MoIAT prioritize nationally?

### 9.4 Emirate Portfolio

Purpose:

- show how each emirate contributes to a national industrial portfolio rather than simply ranking emirates

Core content:

- industrial base snapshot
- comparative strengths
- center-of-excellence hypotheses
- dependencies and risks
- cross-emirate portfolio logic

### 9.5 Decision Brief Builder

Purpose:

- turn evidence into a structured ministerial issue brief

Outputs:

- issue summary
- options and trade-offs
- supporting evidence
- key risks
- suggested next actions

### 9.6 Roadmap & Operating Model

Purpose:

- explain what an AI-Native MoIAT operating model looks like over time

Time horizons:

- 0-3 months
- 3-12 months
- 12-24 months

Focus areas:

- governance
- data
- workflow redesign
- capability building
- KPI ownership

### 9.7 Evidence Catalog

Purpose:

- serve as the trust layer behind all metrics and insights

Access pattern:

- reached from drawers, deep links, or supporting tabs rather than main navigation

Contents:

- source metadata
- formulas
- timestamps
- caveats
- downloadable evidence packs

## 10. Functional Requirements

### 10.1 Data Provenance

- The system must attach source metadata to each KPI and insight.
- The system must distinguish between official, modeled, and illustrative data.
- The system must store refresh timestamps and source versions.
- The system must expose formulas and definitions in the UI.

### 10.2 KPI Framework

- The prototype must support a canonical KPI dictionary.
- The system must compute KPI values from curated transformed datasets rather than manual UI entry.
- Each KPI must have an owner, formula, source mapping, refresh cadence, and confidence badge.

### 10.3 Insight Generation

- The system must generate a bounded set of insight types: momentum, opportunity, risk, and action.
- Insight generation must be rule-based first.
- AI may convert structured findings into human-readable summaries, but must not create unsupported facts.
- All insight cards must retain links to the evidence used to generate them.

### 10.4 Benchmarking

- Users must be able to compare the UAE with a selected peer set.
- Peer benchmarking must be limited to supported indicators with known source comparability.
- The system must surface peer selection assumptions where comparability is partial.

### 10.5 Brief Generation

- Users must be able to generate a decision brief from dashboard, sector, benchmark, and emirate views.
- Briefs must include evidence references and explicit caveats.
- Briefs must separate facts from recommendations.

### 10.6 Export

- The system should support downloadable evidence packs per page or brief.
- Exports should include KPI values, sources, dates, and supporting charts/tables where applicable.

## 11. Demo Data Strategy

The prototype should use a disciplined semi-manual pipeline for reliability.

### 11.1 Pipeline Pattern

1. Download approved public datasets manually
2. Store them in versioned raw folders
3. Transform them into cleaned analytical tables
4. Compute KPI outputs into a canonical master table
5. Run deterministic pattern-detection rules
6. Store insight cards as structured JSON
7. Use AI only to summarize curated evidence into brief-ready text

### 11.2 Architecture

- Frontend: Next.js + TypeScript + Tailwind CSS
- Data layer: DuckDB plus Parquet or versioned JSON
- ETL: Python scripts
- Insights layer: rules first, AI second
- AI layer: prompt over curated evidence JSON rather than unconstrained web retrieval

### 11.3 Why This Approach

- It is stable for demo use
- It reduces the risk of source drift and API failure
- It supports traceability and reproducibility
- It keeps the evidence chain inspectable

## 12. KPI Requirements

### 12.1 Tier 1: Official Demo KPIs

These should appear directly in the prototype using public official or globally recognized sources.

Executive / national outcome KPIs:

- real GDP growth
- non-oil GDP
- non-oil GDP share
- manufacturing value added
- manufacturing share of GDP
- non-oil foreign trade
- non-oil manufactured exports
- industrial or priority-sector FDI
- unemployment or industrial employment proxy
- inflation or cost-environment context

Structural / competitiveness KPIs:

- export concentration by sector
- export complexity or adjacency opportunity score
- top partner dependence
- growth rate of priority export categories
- patent and trademark activity trend
- manufacturing employment or establishments trend
- share of medium- and high-tech exports

### 12.2 Tier 2: Future Ministry KPIs

These may appear only if clearly labeled as requiring ministry data.

- ICV coverage or capture rate
- ITTI adoption or coverage
- industrial registry completeness
- license cycle time
- regulatory turnaround time
- conformity or accreditation processing time
- policy brief turnaround time
- evidence freshness SLA
- action closure rate

Required label:

`Illustrative workflow data — to be replaced by live ministry data in production`

## 13. Home Page Requirements

### 13.1 Hero KPI Set

The Leadership Dashboard should prioritize:

1. non-oil GDP share
2. manufacturing value added or manufacturing share of GDP
3. non-oil manufactured exports
4. industrial FDI
5. top sector momentum
6. top emirate opportunity or risk signal

### 13.2 Supporting Content

- three insight cards
- one anomaly or watchlist card
- one recommended decision brief
- Operation 300bn progress tracker

### 13.3 Content To Demote

- Global Innovation Index as a hero KPI
- raw industrial licenses YTD without strong context
- internal or synthetic compliance metrics without clear labeling and provenance

## 14. Insight Model

The prototype should support four disciplined insight types only.

### 14.1 Momentum

Examples:

- manufacturing-linked non-oil exports growing faster than overall trade
- industrial FDI concentrating into fewer activities
- an emirate cluster outperforming baseline

### 14.2 Opportunity

Examples:

- adjacency into higher-complexity manufacturing
- rising partner-country demand in categories close to current UAE strengths
- strong emirate platform with weak visible investment momentum

### 14.3 Risk

Examples:

- over-concentration in sectors or partner markets
- industrial growth outpacing innovation-output indicators
- dependency on imported technology inputs or specialized talent

### 14.4 Action

Examples:

- commission sector brief
- open investor targeting track
- initiate emirate working session
- review enabling regulation or conformity bottleneck

## 15. Narrative Requirements

The prototype must tell a flattering but credible story.

### 15.1 Chapter 1: UAE Starts From Strength

Use official UAE indicators to establish:

- strong non-oil base
- major trade platform role
- solid macro momentum
- strong digital and data foundations
- existing industrial policy instruments such as ICV, ITTI, and the Industrial Registry

### 15.2 Chapter 2: The Next Challenge Is Precision

Show that the next challenge is not ambition, but prioritization across:

- sectors
- emirates
- interventions
- bottlenecks
- measurable KPIs

### 15.3 Chapter 3: MoIAT Can Become Evidence-Native

Position the ministry as capable of becoming:

- faster at turning signals into action
- better integrated across emirates
- stronger on KPI ownership and evidence traceability
- more explicit in linking strategy, regulation, and execution

### 15.4 Chapter 4: Risks Are Visible and Actionable

The prototype should openly acknowledge:

- sector concentration
- fragmented data across actors
- overreliance on lagging indicators
- gaps between ambition and operating cadence

## 16. Success Criteria

The prototype succeeds if internal and client reviewers conclude that it:

- feels credible and grounded in official evidence
- demonstrates a distinct ministerial decision workflow
- avoids overclaiming AI capability
- shows a clear route from data to action
- positions EPAM as capable across strategy, data, UX, and operating model

## 17. Delivery Priorities

### Sprint 1

- Leadership Dashboard
- UAE Position & Peer Benchmarking
- Evidence drawer
- 6-8 real public KPIs
- 10-15 curated insight cards

### Sprint 2

- Sector Prioritization
- Emirate Portfolio
- downloadable evidence pack per page

### Sprint 3

- Decision Brief Builder
- Roadmap & Operating Model
- illustrative internal workflow metrics

## 18. Team Responsibilities

### Claude Code

- frontend scaffolding
- UX flows
- component generation
- copy polishing
- chart configuration
- brief-builder prompts

### Codex

- ETL scripts
- KPI calculations
- data tests
- anomaly-detection rules
- export generation
- schema validation

### Human Review

- source selection
- formula validation
- policy interpretation
- narrative framing
- final insight approval

## 19. Risks and Assumptions

### Risks

- public source definitions may not align perfectly across national and global datasets
- some MoIAT-relevant operational KPIs will not be publicly available
- overly broad scope could reduce credibility and polish
- generative summaries may drift if not tightly constrained by evidence JSON

### Assumptions

- the first prototype will prioritize stable snapshots over live APIs
- official UAE sources will anchor the top-level narrative
- illustrative operational metrics, if used, will be clearly labeled
- a controlled evidence model is more important than feature breadth

## 20. Appendix: Initial Proof Points for Narrative Framing

The opening narrative should reference official UAE macro strengths, including:

- AED 1.776 trillion real GDP in 2024
- AED 1.342 trillion non-oil GDP in 2024
- 75.5% non-oil share of real GDP
- AED 2.8 trillion non-oil foreign trade
- 4.0% real GDP growth
- 1.9% unemployment

These figures should be validated against the specific source snapshots used in the prototype build and stored with source dates in the evidence layer.
