# Affidea Brand Hub

React and Cloudflare monorepo for the internal Affidea brand asset portal planned for `https://brand.affidea.ro`.

The repository contains the working Brand Hub interface, shared design tokens and contracts, a Worker API skeleton, bilingual content, Affidea logo previews, governance documentation, and deployment examples. Google Drive remains the canonical source for approved guidelines and original production assets.

## Run locally

Requirements: Node.js 18+ and pnpm 8+.

```bash
pnpm install --frozen-lockfile
pnpm typecheck
pnpm test
pnpm build
pnpm --filter @affidea/web dev
```

The web app runs on `http://localhost:5173`. The Worker can be started separately with `pnpm --filter @affidea/worker dev`.

## Repository structure

- `apps/web` — React, TypeScript, Vite, routes and curated web assets.
- `apps/worker` — Hono/Cloudflare Worker API skeleton.
- `packages/design-tokens` — canonical Affidea colours and typography stacks.
- `packages/contracts` — shared API and data validation schemas.
- `packages/ui` — shared React components.
- `docs` — product, architecture, security, Drive sync and governance specifications.
- `audit` — source audit and approved UI reference screenshots.
- `apps/web/public/brand-assets/logos` — single web-facing logo library.

Canonical Drive library: https://drive.google.com/drive/folders/16hA1bCXCEQxRtWbNWC6apAZDPH7fW8sE

## Locked decisions

- Internal portal protected by Cloudflare Access.
- Passwordless sign-in using Cloudflare Access One-time PIN.
- Allowed email domains: `affidea.ro`, `affidea.com`, and `gmail.com`.
- Romanian and English interface.
- Google Drive is the canonical source for files.
- Automatic Drive synchronization for new, modified, renamed, moved, and deleted files.
- Existing approved assets remain published after Drive updates.
- New assets start as `pending` and require Affidea or OUTOFSPACE approval.
- Only active and approved brands appear to ordinary users.
- Direct authenticated file downloads and curated ZIP brand packs.
- Full Data Centres information remains available to authenticated users.
- Affidea Brand Guidelines v1.6 (2026) override conflicting local values unless an explicit approved exception exists.
- Admin ownership is shared by Affidea and OUTOFSPACE.
- Hosting and runtime use Cloudflare.

## Recommended stack

- Frontend: React, TypeScript, Vite, React Router.
- Styling: Tailwind CSS plus CSS custom properties generated from design tokens.
- API: Cloudflare Worker using Hono and TypeScript.
- Authentication edge: Cloudflare Access OTP.
- Database: Cloudflare D1.
- Cache and distributed locks: Workers KV.
- Preview and ZIP cache: Cloudflare R2.
- Scheduled sync: Cron Trigger every 5 minutes.
- Near-real-time sync: Google Drive `changes.watch` webhook, with Cron as recovery path.
- Source files: Google Drive API v3.
- Testing: Vitest, React Testing Library, Playwright, axe-core.
- Package manager: pnpm.

Do not replace Cloudflare Access with a custom OTP implementation. The application must validate the Access JWT at the Worker and must never trust a client-provided email or role.

## Documentation map

1. `docs/01_PRODUCT_REQUIREMENTS.md` - scope, personas, functional requirements and acceptance rules.
2. `docs/02_IA_UI_UX.md` - sitemap, responsive flows, screens and interaction behavior.
3. `docs/03_DESIGN_SYSTEM.md` - Affidea tokens, typography, components and visual rules.
4. `docs/04_TECHNICAL_ARCHITECTURE.md` - Cloudflare architecture and repository layout.
5. `docs/05_AUTH_SECURITY.md` - Access OTP, authorization, privacy and audit requirements.
6. `docs/06_DRIVE_SYNC_ASSETS.md` - Drive ingestion, classification, preview and ZIP logic.
7. `docs/07_DATA_API.md` - data model, API contract and migrations.
8. `docs/08_ADMIN_GOVERNANCE.md` - approval, ownership, status and admin workflows.
9. `docs/09_I18N_ACCESSIBILITY.md` - Romanian/English, WCAG and content behavior.
10. `docs/10_TESTING_DEPLOYMENT.md` - test matrix, Cloudflare deployment and operations.
11. `docs/11_SOURCE_AUDIT.md` - source inventory, conflicts and known content issues.
12. `IMPLEMENTATION_CHECKLIST.md` - ordered delivery plan.

Supporting implementation files:

- `GEMINI.md` - persistent instructions for Gemini.
- `schema.sql` - proposed D1 schema.
- `.env.example` - required environment variables and secrets.
- `wrangler.example.jsonc` - Cloudflare bindings and routes.
- `brand-registry.seed.json` - initial brand candidates; approval must be completed in Admin.
- `locales/ro.json`, `locales/en.json` - initial UI copy.
- `prompts/MASTER_PROMPT.md` - first prompt to use in VS Code.
- `prompts/ITERATION_PROMPTS.md` - follow-up prompts and review gates.

## Asset governance

Do not commit raw Drive exports, duplicate working files, or large guideline PDFs. Published logo previews belong in `apps/web/public/brand-assets/logos`; original AI, EPS, print PDF and archive files stay in Drive. New or replaced assets must be approved before they are marked canonical in the application data.
