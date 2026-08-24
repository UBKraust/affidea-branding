# Follow-up prompts for Gemini

Use these prompts one at a time after reviewing the previous phase.

## Phase 1 - UI/UX and design system

Read the current repository and the specifications again. Implement Phase 1 from `IMPLEMENTATION_CHECKLIST.md` only. Use fixture data and the Affidea tokens from `docs/03_DESIGN_SYSTEM.md`. Build every primary route, responsive behavior, bilingual UI and system state. Use Affi selectively exactly as specified. Do not add backend/Drive shortcuts. Run component, accessibility, typecheck, lint and build checks. Provide desktop and mobile screenshots or a reproducible preview, report deviations, then stop.

## Phase 2 - identity and Worker security

Implement Phase 2 only. Add Cloudflare Worker API and robust Cloudflare Access JWT validation using the official JWK endpoint, issuer and audience configuration. Never trust a raw email header. Implement role loading with safe local fixtures only when `APP_ENV=local` and explicit bypass is enabled. Add security headers and integration tests for missing, forged, expired, wrong-audience and valid user/admin cases. Stop after tests and review.

## Phase 3 - D1 and read APIs

Implement Phase 3 only. Convert `schema.sql` into ordered D1 migrations. Add repository/service layers, permission-filtered queries, shared Zod contracts and read APIs. Connect the frontend to APIs while retaining fixtures for Storybook/tests only. Add audit service and search behavior. Ensure ordinary users cannot query pending/inactive content. Run D1 local migration and integration tests, then stop.

## Phase 4 - Drive synchronization

Implement Phase 4 only. Use Google Drive API v3 behind an adapter. Build initial paginated crawl, Changes API incremental sync, verified webhook trigger, Cron recovery, channel renewal and Data Centres parser. Follow every state transition in `docs/06_DRIVE_SYNC_ASSETS.md`. Use recorded fixtures/mocks for tests; do not require production credentials to run CI. Prove idempotency and that approved revisions stay approved. Stop after review.

## Phase 5 - previews and downloads

Implement Phase 5 only. Add safe preview selection, authenticated same-origin download streaming, PDF range behavior, private R2 cache and deterministic ZIP manifests/build jobs. Never buffer huge files, expose Drive credentials or make R2 public. Test pending/source-missing denial and download audit. Stop after review.

## Phase 6 - Admin and governance

Implement Phase 6 only. Build approval queue, brand activation, bilingual metadata editor, canonical selection, exceptions, ZIP inclusion, user role management and audit view. Enforce last-admin protection and all governance transitions server-side. Add E2E tests and stop.

## Phase 7 - hardening and production handoff

Implement Phase 7 only. Run the complete test matrix, resolve accessibility/security/performance issues and prepare staging/production Wrangler configurations without real secrets. Write exact Cloudflare Access, D1/KV/R2, Google service account, Drive watch, deployment, rollback and monitoring instructions. Produce a final list of user-provided values required for launch. Do not claim production deployment unless it was actually performed and verified.

## Design review prompt

Audit the current UI against `docs/02_IA_UI_UX.md` and `docs/03_DESIGN_SYSTEM.md`. Inspect every route at 360, 768, 1280 and 1600 px. Report and fix hierarchy, responsiveness, clipping, contrast, focus, empty/error/loading states and Affi overuse. Do not alter product or security behavior. Provide before/after screenshots and test results.

## Security review prompt

Perform a defensive security review against `docs/05_AUTH_SECURITY.md`. Trace identity from Cloudflare Access JWT through every API and database query. Attempt anonymous access, forged headers, role escalation, asset-ID guessing, pending-asset downloads, webhook spoofing, SQL injection, SVG injection, ZIP path traversal, cache leaks and confidential Data Centres leakage. Fix findings, add regression tests and report residual risks.

