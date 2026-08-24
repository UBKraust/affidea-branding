# 05. Authentication, authorization, security and privacy

## 1. Authentication architecture

Cloudflare Access self-hosted application protects `brand.affidea.ro/*`. Configure Cloudflare One-time PIN as the identity provider. Do not build or send OTP codes in application code.

Access policy includes the following email domains:

- `affidea.ro`
- `affidea.com`
- `gmail.com`

The accepted business decision is that every valid Gmail address may authenticate if the person knows the hostname. State this clearly in the Cloudflare policy change record.

Recommended session duration: 7 days. OTP codes expire according to Cloudflare Access (currently documented as 10 minutes).

## 2. Identity validation

Cloudflare forwards an application JWT in `Cf-Access-Jwt-Assertion`. The Worker must validate:

- signature against the account JWK set;
- expected issuer/team domain;
- expected application audience (`aud`);
- expiry and not-before;
- normalized email claim;
- token presence for every protected route.

Cache JWKs briefly in KV and handle key rotation. Do not trust `Cf-Access-Authenticated-User-Email` without a valid Access JWT. Browser requests may carry `CF_Authorization`, but the Worker should prefer the assertion header.

## 3. Authorization

Roles:

- `user`: approved active content, centres and downloads.
- `admin`: all user access plus approval, configuration, sync and audit capabilities.

Admin assignments are exact normalized email records in D1. Domain membership does not grant admin. The first production admins are inserted through a controlled migration/seed using values provided by Affidea; no email is hardcoded in source control.

Every API route declares a minimum role. Database queries for User role include approval/active predicates even if the frontend already filtered the request.

## 4. Data classification

- Public: none through this application.
- Internal brand data: brand rules, logos, fonts, assets and brand books.
- Confidential operational data: Data Centres workbooks, contact names, phone numbers, legal entities and addresses.
- Secrets: Google credentials, Access audience/team data where sensitive, Cloudflare tokens, webhook tokens.

Confidential fields must not be sent to analytics, error reporting payloads, URLs, browser storage or static build artifacts.

## 5. Download security

- All preview/download/ZIP routes require validated Access identity.
- Verify asset status and brand activity before file access for User role.
- Use Drive file IDs from D1, never a URL supplied by the browser.
- Verify `capabilities.canDownload` during synchronization and before fallback download.
- Set `Content-Disposition: attachment` with RFC-compatible sanitized filename.
- Set `X-Content-Type-Options: nosniff`.
- Restrict inline rendering to allowlisted safe MIME types.
- Never redirect to a bearer/signed URL that could be shared outside the session unless the URL is short-lived and still Access-protected.
- Log who downloaded which asset and when; do not log content.

## 6. Application security controls

- Strict CSP; no unsafe inline script in production.
- HSTS, Referrer-Policy, Permissions-Policy and frame restrictions.
- CSRF protection for state-changing endpoints using same-site cookies/origin validation and CSRF token where appropriate.
- Zod validation for query, path and JSON inputs.
- Prepared SQL statements only.
- Output escaping and safe SVG handling. Never inject untrusted SVG markup directly into DOM; serve as an image or sanitize with a reviewed policy.
- Rate-limit downloads, ZIP builds, search and manual sync triggers.
- Maximum request body sizes.
- Audit every approval, rejection, activation, archive, role change, manual sync and settings change.
- Generic client errors; detailed error remains in server logs with correlation ID.

## 7. Webhook security

Google Drive webhook endpoint validates stored channel ID, resource ID and a high-entropy channel token. It acknowledges quickly, deduplicates notifications and queues/persists a sync request. Notifications are triggers only and do not contain authoritative changed-file details.

## 8. Retention

- Audit events: recommended 24 months, subject to Affidea policy.
- Sync job technical logs: 90 days.
- Rejected asset metadata: 12 months or until admin purge.
- Cached previews/ZIPs: invalidate on revision change; garbage-collect orphaned objects after 30 days.
- No OTP values are stored by the application.

## 9. Security acceptance tests

- Anonymous requests are blocked before application response.
- Forged identity headers fail.
- Valid Access JWT for a user cannot call admin endpoints.
- User cannot fetch pending/rejected/source-missing assets by guessed ID.
- User cannot alter Drive IDs in download requests.
- R2 bucket has no public listing or public object URL.
- Staging identity cannot access production resources.
- Audit records are created for every admin mutation.

## 10. Official references

- Cloudflare One-time PIN: https://developers.cloudflare.com/cloudflare-one/integrations/identity-providers/one-time-pin/
- Cloudflare Access policies: https://developers.cloudflare.com/cloudflare-one/access-controls/policies/
- Access JWT validation: https://developers.cloudflare.com/cloudflare-one/access-controls/applications/http-apps/authorization-cookie/validating-json/
- Access application token: https://developers.cloudflare.com/cloudflare-one/access-controls/applications/http-apps/authorization-cookie/application-token/
- Access session management: https://developers.cloudflare.com/cloudflare-one/access-controls/access-settings/session-management/

