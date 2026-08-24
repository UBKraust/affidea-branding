# Implementation checklist

Gemini must complete and validate each phase before continuing.

## Current desktop brand-hub delivery — 2026-08-24

- [x] Desktop-only product direction confirmed; no mobile layout is required.
- [x] Branded AppShell, dashboard, brand directory/detail, asset library and guideline library implemented.
- [x] Canonical logos are rendered as image assets, never reconstructed as text.
- [x] Logo and brandbook Drive sources supplied by Affidea have been audited.
- [x] Affidea Kids page includes both the Kids brandbook and the Affi brandbook.
- [x] Affi palette is transcribed from the source brandbook and exposed with copyable values.
- [x] Barriecito is embedded for Affi headings/highlights; Harmonia Sans remains the body family.
- [x] Dedicated brandbooks are available for FeminaCare, OncoLink and MedDirect.
- [x] PDF covers are generated from the actual first pages and all local images resolve.
- [x] Typecheck, unit tests, production build and desktop browser QA pass.
- [x] Dashboard counts are derived from the live fixtures: 18 identities and 82 centre records.
- [x] Data Centres is imported from the approved `Centralizator_Centre_si_MC.xlsx` source, including incomplete rows.

## Phase 0 - Repository and decisions

- [ ] Read all specs and confirm no contradictions.
- [ ] Initialize pnpm monorepo and TypeScript configuration.
- [ ] Create web, Worker, contracts, UI and design-token packages.
- [ ] Add lint, format, typecheck, unit and E2E configuration.
- [ ] Create `docs/OPEN_QUESTIONS.md` only for credentials/IDs/content that cannot be inferred.

Exit: empty applications build and tests run.

## Phase 1 - Design system and static UX

- [ ] Implement tokens and Harmonia fallback behavior.
- [x] Build AppShell and desktop navigation (mobile intentionally out of scope).
- [ ] Build dashboard, brand directory/detail, assets, guidelines, Data Centres and Admin mock screens.
- [ ] Add RO/EN translations.
- [ ] Implement all loading/empty/error states.
- [x] Run component and desktop visual review (mobile intentionally out of scope).

Exit: all routes work against fixtures, meet visual docs and have no serious axe issues.

## Phase 2 - Cloudflare Worker and identity

- [ ] Add Worker/Hono API.
- [ ] Implement Cloudflare Access JWT validation.
- [ ] Implement `/api/me`, role loading and route guards.
- [ ] Add security headers, validation and problem errors.
- [ ] Add auth/authorization integration tests.

Exit: forged headers and user-to-admin escalation tests fail closed.

## Phase 3 - D1 model and read APIs

- [ ] Convert `schema.sql` into migrations.
- [ ] Seed settings, candidate registry and admin bootstrap mechanism.
- [ ] Implement brand/assets/guideline/centre/search APIs.
- [ ] Connect frontend queries and permission filters.
- [ ] Add audit service.

Exit: ordinary user sees only active/approved content.

## Phase 4 - Google Drive integration

- [ ] Implement service-account auth and Drive adapter.
- [ ] Initial paginated recursive crawl.
- [ ] Classification and stable-ID upsert.
- [ ] Changes cursor processing.
- [ ] Webhook validation and deduplication.
- [ ] Cron recovery and watch-channel renewal.
- [ ] Centre workbook parser/reconciliation.
- [ ] Admin sync dashboard.

Exit: fixture and staging Drive changes converge idempotently within target lag.

## Phase 5 - Preview and download

- [ ] Safe preview hierarchy.
- [ ] Authenticated blob streaming and Google export behavior.
- [ ] PDF range/inline behavior.
- [ ] R2 private cache.
- [ ] Curated ZIP manifest and asynchronous build.
- [ ] Download audit events and rate limits.

Exit: no pending/source-missing asset can be downloaded by User role.

## Phase 6 - Governance/admin

- [ ] Approval queue and batch actions.
- [ ] Brand activation and bilingual editor.
- [ ] Canonical selection, exceptions and pack rules.
- [ ] Role management with last-admin protection.
- [ ] Audit view and source warnings.

Exit: status transitions match the governance spec and are audited.

## Phase 7 - Hardening and deployment

- [ ] Full E2E/a11y/security test matrix.
- [ ] Performance and large-file tests.
- [ ] Staging Cloudflare resources and Access configuration.
- [ ] Staging acceptance and remediation.
- [ ] Production runbook, rollback and monitoring.
- [ ] Final documentation and configuration checklist.

Exit: production readiness checklist signed off by Affidea and OUTOFSPACE.
