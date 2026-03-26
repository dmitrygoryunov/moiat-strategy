# UI Design Direction

This document defines the UI approach Claude should follow when building the prototype.

## 1. Product Posture

The interface should feel:

- leadership-grade
- calm and evidence-led
- polished but bounded
- favorable to UAE and MoIAT without overclaiming

It should not feel like:

- a generic BI dashboard
- a fake AI copilot shell
- a broad ministry operating system

## 2. Implementation Approach

Use the same practical UI-building approach as the reference `document-knowledge-graph` project:

- build a real product shell early
- make every screen reflect real repository capability
- use honest empty states where data or backend flows are not implemented yet
- avoid visual overproduction disconnected from product truth

## 3. Core Navigation

Primary navigation should include:

1. Leadership Dashboard
2. UAE Position
3. Sector Prioritization
4. Emirate Portfolio
5. Decision Brief Builder
6. Roadmap & Operating Model

Evidence Catalog should be reachable from drawers, links, and page-level actions rather than primary navigation.

## 4. UI Hierarchy

### Leadership Dashboard

- top summary band: "UAE starts from strength"
- six hero KPIs
- insight row: momentum, opportunity, risk
- watchlist/anomaly area
- recommended brief area

### Analytical Pages

- narrative summary first
- filters and comparison controls second
- charts and evidence-backed tables next
- methodology / evidence access always available

### Decision Brief Builder

- issue framing
- supporting evidence
- options and trade-offs
- risks
- recommended next actions

## 5. Evidence Drawer Pattern

Every major card or chart should support a drawer or side panel showing:

- source
- extraction date
- formula
- caveats
- confidence
- evidence type: official, modeled, illustrative

This is a mandatory trust pattern, not an optional enhancement.

## 6. Visual Direction

- use a refined, editorial style rather than startup-dashboard chrome
- emphasize typography, whitespace, and hierarchy
- use restrained motion only where it clarifies focus or state change
- preserve strong readability on large screens and laptops used in demos
- avoid decorative AI tropes

## 7. Build Priorities

1. shared shell and navigation
2. KPI card + evidence drawer pattern
3. insight card system
4. dashboard and benchmarking pages
5. sector and emirate analytical views
6. brief builder flow

