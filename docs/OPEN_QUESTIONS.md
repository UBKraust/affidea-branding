# Open Questions & User Configuration Checklist

This document tracks genuine blockers and required user-owned configuration values for **Affidea Brand Hub**.

## Credentials & Configuration Required

| Item | Service | Purpose | Environment Variable / Setting | Status |
| :--- | :--- | :--- | :--- | :--- |
| **Cloudflare Access AUD** | Cloudflare Access | JWT Audience tag for validating Access assertions | `CF_ACCESS_AUD` | Missing |
| **Cloudflare Access Team Domain** | Cloudflare Access | Public domain for fetching JWKS public keys | `CF_ACCESS_TEAM_DOMAIN` (e.g. `https://affidea.cloudflareaccess.com`) | Missing |
| **D1 Database ID** | Cloudflare D1 | Primary database for metadata, brands, assets, and audit | `d1_databases[0].database_id` in `wrangler.jsonc` | Missing |
| **KV Namespace ID** | Cloudflare KV | Cache, distributed locks, rate limits, and webhook deduplication | `kv_namespaces[0].id` in `wrangler.jsonc` | Missing |
| **R2 Bucket Name** | Cloudflare R2 | Storage for rendered previews and compiled ZIP packages | `r2_buckets[0].bucket_name` in `wrangler.jsonc` | Configured default (`affidea-brand-hub-private`) |
| **Google Service Account Email** | Google Cloud | Identity for crawling configured Google Drive Shared Drive | `GOOGLE_SERVICE_ACCOUNT_EMAIL` | Missing |
| **Google Service Account Private Key** | Google Cloud | RSA Private Key for authenticating Drive API calls | `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY` | Missing |
| **Google Drive Root Folder ID** | Google Drive | Target root folder ID for Affidea brand hierarchy | `GOOGLE_DRIVE_ROOT_FOLDER_ID` | Default present in example (`16hA1bCXCEQxRtWbNWC6apAZDPH7fW8sE`) |
| **Admin Seed Email List** | D1 Bootstrap | Email addresses to seed with initial `admin` role | D1 seed migration / command | Needs final list from Affidea/OOS |

---

## Resolved Architectural Decisions (Locked in Specs)

- **Auth Provider**: Cloudflare Access One-time PIN (`@affidea.ro`, `@affidea.com`, `@gmail.com`). No custom email OTP code or email provider implementation.
- **Drive Authority**: Google Drive remains the authority for original files. Portal syncs metadata into D1 and caches previews in R2.
- **Visibility Control**: Ordinary users see only `active = true` brands and `status = approved` assets. Admins see all items.
- **Languages**: Bilingual Romanian (`ro`) and English (`en`) supported natively with translation keys.
