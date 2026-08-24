# Master prompt for Gemini in VS Code

Copy the entire `affidea-brand-hub-spec` folder into the root of a new repository, then use this prompt:

---

You are the lead full-stack engineer and product designer for Affidea Brand Hub. Before writing code, read:

- `GEMINI.md`
- `README.md`
- every file under `docs/`
- `IMPLEMENTATION_CHECKLIST.md`
- `schema.sql`
- `brand-registry.seed.json`
- both locale files

The production target is the internal bilingual application `brand.affidea.ro`, hosted on Cloudflare, protected with Cloudflare Access One-time PIN for `@affidea.ro`, `@affidea.com` and `@gmail.com` users. Google Drive is the source of original files. Use the architecture and security model exactly as documented.

Start with Phase 0 only. Do not implement later phases yet.

For Phase 0:

1. Summarize the product and the non-negotiable decisions in no more than 20 bullets.
2. Identify only genuine blockers that require credentials or user-owned information. Do not reopen decisions already locked in the docs.
3. Propose the exact repository tree and dependency list.
4. Initialize the pnpm monorepo, TypeScript, React/Vite web app, Cloudflare Worker/Hono app, shared contract package, UI package and design-token package.
5. Configure linting, formatting, Vitest and Playwright skeletons.
6. Add safe local development configuration based on `.env.example`; do not add real credentials.
7. Make the empty apps build and add a minimal health test.
8. Run install, lint, typecheck, test and build.
9. Report created/changed files, command results, assumptions and remaining configuration.

Do not create a custom OTP page or email provider. Do not connect to production Drive or Cloudflare resources in Phase 0. Do not hardcode admin emails. Wait for review after Phase 0.

---

## Expected Gemini response style

- Lead with the phase outcome.
- Show meaningful file changes, not every generated lockfile line.
- Report exact test commands and whether they passed.
- Clearly label user-owned configuration that is still missing.
- Stop after the requested phase.

