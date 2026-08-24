# 10. Testing, deployment and operations

## 1. Automated test layers

### Unit

Classification rules, status transitions, locale fallback, filename sanitization, colour precedence, role checks, ZIP manifest hash, Drive change parsing and centre header mapping.

### API integration

D1 queries/migrations, permission filtering, Access JWT middleware with fixture keys, Drive API adapters, download headers, webhook validation, sync idempotency and cache invalidation.

### Component

Brand cards, filters, colour copy, file tables, Data Centres table, dialogs, error/empty states and language switching.

### End-to-end

- user login identity fixture and dashboard;
- search and open approved brand;
- preview/download approved file;
- prevent pending asset access;
- build/download ZIP;
- Data Centres search without URL leakage;
- admin approval and brand activation;
- Drive update retains approval;
- source deletion hides asset;
- RO/EN persistence;
- mobile navigation and keyboard flow.

### Accessibility

axe automated scans on every primary route plus manual keyboard, screen-reader smoke test, zoom/reflow, contrast and reduced motion.

## 2. Required CI checks

```text
pnpm install --frozen-lockfile
pnpm lint
pnpm typecheck
pnpm test
pnpm test:integration
pnpm build
pnpm test:e2e
```

Production deployment is blocked by failed checks or unapplied D1 migrations.

## 3. Cloudflare resources

Create separate staging and production:

- Worker/static application;
- Access self-hosted app and OTP provider;
- D1 database;
- KV namespace;
- private R2 bucket;
- Cron triggers;
- optional Queue/Workflow for ZIP and preview jobs;
- domain route;
- secrets.

## 4. Deployment order

1. Create Cloudflare environments/resources.
2. Configure `brand.affidea.ro` DNS/proxy.
3. Configure Cloudflare Access OTP and domain policy.
4. Create Google Cloud project/service account and share Drive source.
5. Add secrets with Wrangler/dashboard.
6. Apply D1 migrations.
7. Deploy staging.
8. Run initial Drive crawl against test/copy folder.
9. Curate brand registry and admins.
10. Run staging acceptance suite.
11. Deploy production.
12. Apply migrations and seed admins/settings.
13. Run initial production sync.
14. Configure/verify Drive watch channel and renewal.
15. Activate approved brands.
16. Smoke-test downloads and Data Centres privacy.

## 5. Rollback

- Retain previous Worker deployment.
- Database migrations should be forward-safe; prepare explicit corrective migrations instead of destructive rollback.
- Before destructive schema changes, export/backup D1 according to current Cloudflare capabilities.
- R2 objects are revision-keyed; do not overwrite canonical cached objects in place.
- If Drive sync is faulty, disable webhook/Cron, keep last good D1 metadata, and show stale warning.

## 6. Operations runbook

Daily automated checks:

- webhook channel not expired;
- last successful sync under 15 minutes old;
- Drive authentication valid;
- no prolonged running jobs;
- R2 ZIP/preview failures below threshold.

Weekly admin checks:

- pending approvals;
- source-missing assets;
- brand packs needing rebuild;
- duplicate/canonical warnings;
- Data Centres source freshness.

## 7. Production readiness checklist

- Access denies anonymous and non-allowed domains.
- All API routes validate identity.
- Admin list populated from secrets/seed, not hardcoded.
- R2 is private.
- Drive credential has read-only minimum access.
- No source credentials in frontend/build output.
- CSP and security headers verified.
- Centre values absent from telemetry.
- Backup, rollback and sync pause tested.
- Legal/privacy owner approves retention and audit policy.
- Font web-embedding rights confirmed or fallback enabled.

