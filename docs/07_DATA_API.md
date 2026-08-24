# 07. Data model and API contract

## 1. General rules

- IDs exposed by the application are opaque UUIDs, not sequential database IDs.
- Drive IDs are stored separately and never accepted from ordinary users for direct access.
- Timestamps are UTC ISO 8601 in APIs.
- List endpoints use cursor pagination.
- All responses are permission-filtered after validated identity.
- Errors use `{ type, title, status, detail, correlationId }` and never reveal secrets.

## 2. Primary entities

### User and role

Verified email, Access user UUID, application role, locale preference, first/last seen. Authentication remains in Cloudflare Access.

### Brand

Slug, bilingual names/descriptions, architecture type, category, lifecycle status, active flag, canonical asset links, Affi usage and update metadata.

### Asset

Stable portal ID, Drive identity/path/metadata, brand, category, format/variant, approval status, visibility, preview state, pack inclusion, canonical flag, revision and source timestamps.

### Guideline

Asset relation, brand relation, authority status and version label.

### Data centre

Normalized searchable fields plus source row payload. Fields contain confidential operational data.

### Sync job/channel

Job lifecycle, cursor, counts, errors; webhook channel identifiers and expiration.

### Audit event

Actor, action, target, before/after summary, IP/country when allowed, correlation ID and timestamp.

## 3. Public-to-authenticated API routes

All routes below are authenticated; `public` means available to the User role.

```text
GET  /api/me
GET  /api/dashboard
GET  /api/search?q=&types=&cursor=
GET  /api/brands?query=&architecture=&category=&cursor=
GET  /api/brands/:slug
GET  /api/brands/:slug/assets?category=&format=&cursor=
GET  /api/brands/:slug/zip
POST /api/brands/:slug/zip/build
GET  /api/assets?query=&brand=&category=&format=&cursor=
GET  /api/assets/:id
GET  /api/assets/:id/preview
GET  /api/assets/:id/download
GET  /api/guidelines
GET  /api/guidelines/:id
GET  /api/guidelines/:id/view
GET  /api/data-centres?query=&region=&legalEntity=&cursor=
GET  /api/data-centres/facets
GET  /api/system/freshness
```

ZIP build requests are idempotent per manifest hash. Return `202` while building, `200` with ready metadata when cached.

## 4. Admin API routes

```text
GET    /api/admin/approvals
POST   /api/admin/assets/:id/approve
POST   /api/admin/assets/:id/reject
PATCH  /api/admin/assets/:id
PATCH  /api/admin/brands/:id
POST   /api/admin/brands/:id/activate
POST   /api/admin/brands/:id/archive
POST   /api/admin/brands/:id/rebuild-zip
POST   /api/admin/sync
GET    /api/admin/sync/jobs
GET    /api/admin/sync/jobs/:id
GET    /api/admin/audit
GET    /api/admin/settings
PATCH  /api/admin/settings
GET    /api/admin/users
PATCH  /api/admin/users/:id/role
```

Every mutation accepts an idempotency key and optional reason. Role changes require a reason and cannot remove the final admin without a second explicit recovery mechanism.

## 5. System-only routes

```text
POST /api/system/drive/webhook
POST /api/system/jobs/sync
POST /api/system/jobs/renew-watch
POST /api/system/jobs/build-zip
GET  /api/health
```

Webhook and internal job authorization do not use human OTP identity. Use verified Google channel token for webhook and Cloudflare service binding/service token or direct scheduled handler for internal jobs.

## 6. Search contract

Global search indexes only permission-eligible metadata. Centre fields are searched in a dedicated D1 query and are never cached in a shared client-visible index. Accent folding applies to Romanian text while the original display value is preserved.

Result shape:

```json
{
  "items": [
    {
      "type": "brand",
      "id": "opaque-id",
      "title": "Affidea Kids",
      "subtitle": "Pediatrie",
      "url": "/brands/affidea-kids",
      "thumbnailUrl": "/api/assets/opaque-id/preview"
    }
  ],
  "nextCursor": null
}
```

## 7. Cache rules

- Brand lists/detail: private/shared server cache, invalidated on governed changes.
- Asset metadata: short server cache; never mark download responses public.
- Centre results: `Cache-Control: private, no-store`.
- Admin and audit: `no-store`.
- Preview/ZIP: private R2 origin, Worker response may use private browser cache with revision ETag.
- Identity response: `private, no-store`.

The proposed SQL is in `schema.sql`. Gemini may split it into numbered D1 migrations without changing semantics.

