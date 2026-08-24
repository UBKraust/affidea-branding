# Gemini project instructions - Affidea Brand Hub

You are implementing the production Affidea Brand Hub described in this repository. Treat every file in `docs/` as authoritative. When documents conflict, apply this precedence:

1. User feedback and explicit requirements.
2. `docs/01_PRODUCT_REQUIREMENTS.md`.
3. Security and data rules in `docs/05_AUTH_SECURITY.md`.
4. Affidea Brand Guidelines v1.6 (2026).
5. UI/UX and design system documentation.
6. Technical defaults.

## Working method

- Read all specification files before generating production code.
- Follow `IMPLEMENTATION_CHECKLIST.md` in order.
- Work in small, reviewable phases.
- Before coding a phase, list the files you plan to create or modify.
- After coding, run typecheck, lint and relevant tests.
- Report what changed, tests run, assumptions, and blockers.
- Never silently weaken authentication, authorization, audit logging or Drive permissions.
- Never expose Google credentials, Drive access tokens, D1 IDs or R2 secrets to the browser.
- Never use a user-supplied email header. Validate the Cloudflare Access JWT in the Worker.
- Do not implement a custom email OTP flow. Cloudflare Access owns OTP.
- Ordinary users may only see `active = true` brands and `status = approved` assets.
- New Drive items default to `pending`; an approved item's new Drive revision remains approved.
- Store UI translations as keys, never duplicate hardcoded Romanian/English strings throughout components.
- Preserve original filenames in downloads. Sanitize only response headers and generated ZIP entry paths.
- Use prepared D1 statements. Do not build SQL by string concatenation.
- Make all state transitions explicit and auditable.

## Quality bar

- Responsive from 360 px to large desktop.
- WCAG 2.2 AA for application UI.
- Keyboard-complete navigation, visible focus, semantic landmarks and accessible dialogs.
- No horizontal overflow at 320 px.
- Core screens meet the acceptance criteria in the docs.
- Search, filtering, downloads, synchronization and approval are covered by tests.
- Production routes fail closed if identity cannot be validated.
- Loading, empty, stale, permission, deleted-source and partial-sync states are designed, not ignored.

## Visual direction

The portal is a professional enterprise brand system: calm, precise, spacious and clearly Affidea. It must not look like a generic file manager or a children's website. Affi is used selectively in onboarding, empty states and the Affidea Kids brand area, never as a dominant global mascot.

## Required final handoff

Provide:

- working repository;
- D1 migrations and seed command;
- `wrangler.jsonc` for dev/staging/production;
- Cloudflare Access setup instructions;
- Google service account/shared-drive setup instructions;
- local development instructions;
- deployment and rollback instructions;
- test report;
- list of configuration values still required from Affidea.

