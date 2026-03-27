# Download Manifest

Date: 2026-03-26

This manifest records which prototype data sources were downloaded successfully into `data/raw`, which are currently source-page snapshots only, and which are blocked or require manual export.

## Downloaded and ready for parsing

### World Bank API

- `data/raw/world_bank/are_gdp_growth_annual.json`
- `data/raw/world_bank/are_manufacturing_value_added_pct_gdp.json`
- `data/raw/world_bank/are_inflation_cpi_annual.json`
- `data/raw/world_bank/are_fdi_net_inflows_pct_gdp.json`
- `data/raw/world_bank/are_unemployment_total_pct.json`
- `data/raw/world_bank/are_exports_goods_services_pct_gdp.json`

Status:

- machine-readable JSON
- suitable for immediate ETL

Notes:

- the World Bank API worked directly for indicator pulls
- a broader indicator set can be added the same way

### Ministry of Economy

- `data/raw/ministry_of_economy/open_data_policy.html`

Status:

- source-page snapshot
- useful for provenance and reuse-policy reference

### Ministry dashboard scraping

- `data/raw/moet/fdi_dashboard_page.html`
- `data/raw/moet/fdi_dashboard_iframe.html`
- `data/raw/moet/international_trade_map_page.html`
- `data/raw/moet/international_trade_map_iframe.html`
- `data/raw/moet/trademap_functions.js`
- `data/raw/moet/trade_years_2020_2024.json`
- `data/raw/moet/trade_top_countries_2024.json`

Status:

- usable for prototype screenshot realism
- trade-map endpoint discovery succeeded

Notes:

- the trade map iframe exposes callable JSON endpoints through `Server.aspx/...`
- latest year returned by discovered trade endpoints is `2024`
- these scraped methods are acceptable for prototype support only

### MoIAT

- `data/raw/moiat/open_data.html`

Status:

- source-page snapshot
- useful for provenance, open-data posture, and ministry-native narrative support

### WIPO

- `data/raw/wipo/uae_country_profile.html`

Status:

- source-page snapshot
- may require a second pass to extract tabular IP metrics cleanly

### UNIDO

- `data/raw/unido/database_descriptions.html`

Status:

- source-page snapshot
- useful for methodology and source selection

### Harvard Atlas

- `data/raw/harvard_atlas/homepage.html`

Status:

- source-page snapshot
- bulk data endpoint still needs a second-pass retrieval path

### FCSC / UAE

- `data/raw/fcsc/official_statistics_press_release.html`
- `data/raw/fcsc/uaestat_home.html`

Status:

- source-page snapshots
- useful for provenance and narrative references

Notes:

- these are not yet structured statistical exports
- FCSC dataset export links need a follow-up retrieval pass

## Downloaded but blocked for direct data use

### UN Comtrade API

- `data/raw/un_comtrade/api_test_response.json`

Status:

- downloaded response
- not usable data

Reason:

- API returned `401 Access denied due to missing subscription key`

Implication:

- for the prototype we either:
  - use a registered subscription key,
  - use manual export,
  - or defer direct Comtrade ETL until access is arranged

## Not yet downloaded as structured datasets

- FCSC/UAE.Stat statistical tables
- Ministry of Economy FDI/trade exports
- WIPO downloadable tables
- UNIDO downloadable tables
- Harvard Atlas bulk files

## Recommended next download pass

1. add more World Bank indicator JSON series for the benchmark page
2. manually export or API-enable FCSC/UAE.Stat tables for macro/trade baselines
3. arrange UN Comtrade API access or export files manually
4. identify the exact Harvard Atlas bulk download URL for UAE trade and complexity data
5. extract WIPO and UNIDO tables if those indicators are needed in sprint 1

## Curated processed output

- `data/processed/current-demo-snapshot.json`

Purpose:

- a March 2026 demo snapshot that combines:
  - latest official 2025 pulse data
  - latest complete 2024 annual data
  - 2024 trade totals and top partners from Ministry endpoints
