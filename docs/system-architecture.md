# System Architecture

## 1. Overview

The MoIAT strategy prototype is a leadership-first decision-support system built around curated evidence, traceable KPIs, and bounded AI summarization.

The architecture should optimize for trust, reproducibility, and fast prototype delivery rather than production-scale automation.

## 2. Core Architecture

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- component primitives with a controlled design system approach

### Data Layer

- versioned raw source snapshots in `data/raw`
- transformed analytical outputs in `data/processed`
- optional DuckDB for local analytical querying
- JSON and Parquet as portable demo artifacts

### Processing Layer

- Python scripts in `scripts/`
- deterministic transforms first
- KPI calculations from approved source tables
- rule-based insight generation before AI summarization

### AI Layer

- OpenAI API used server-side only
- prompts operate on curated evidence JSON, not arbitrary live web retrieval
- generated text must remain traceable to structured evidence inputs

## 3. Product Surfaces

The first application surface is `apps/web`, which should deliver:

- Leadership Dashboard
- UAE Position & Peer Benchmarking
- Sector Prioritization
- Emirate Portfolio
- Decision Brief Builder
- Roadmap & Operating Model
- shared Evidence Drawer patterns

## 4. Architectural Principles

1. Official-first data beats broader but weaker data.
2. Stability beats live integrations for demos.
3. Rule-based insight generation comes before generative prose.
4. Evidence metadata must travel with every KPI and insight.
5. AI must summarize approved evidence, not invent facts.

## 5. Environment and Secrets

- local development secrets live in `.env.local`
- `OPENAI_API_KEY` must never be exposed to the browser
- any future API routes or server actions using OpenAI must run server-side only

## 6. Near-Term Build Sequence

1. establish web app shell and navigation
2. implement evidence-aware page layouts
3. introduce curated demo data loading
4. add KPI cards and structured insight cards
5. add server-side brief generation from evidence JSON

