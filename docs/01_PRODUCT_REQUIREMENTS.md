# 01. Product requirements document

## 1. Product definition

Affidea Brand Hub is the internal, bilingual source of truth for approved Affidea brand systems, brand books, logos, fonts, colours, digital assets and centre data. It converts the existing Google Drive hierarchy into a visual, searchable and governed brand portal without replacing Drive as the file authority.

Production hostname: `brand.affidea.ro`.

## 2. Product goals

- Reduce time spent searching for correct brand files.
- Prevent outdated or unapproved assets from being used.
- Make brand rules understandable without opening every PDF.
- Preserve direct access to original Drive files.
- Keep the portal synchronized automatically.
- Give Affidea and OUTOFSPACE a shared approval and governance surface.
- Protect contact and operational data from anonymous access.
- Provide identical capability in Romanian and English.

## 3. Non-goals for v1

- Editing source design files in the browser.
- Replacing Google Drive as digital asset storage.
- Public brand guideline access.
- Full digital asset management features such as rights licensing, creative review or annotations.
- Automatic determination of whether a business brand is legally active.
- Automatic correction of contradictory source files.
- Generative AI asset creation inside the portal.

## 4. Personas and roles

### Authenticated user

Affidea staff, agencies, partners or other authorized users with an allowed email domain. Can browse, search, preview and download approved active content. Can view Data Centres, including internal fields.

### Admin

Named Affidea and OUTOFSPACE users stored in D1. Has every User capability and can approve/reject assets, activate/archive brands, select canonical variants, manage exceptions, trigger sync, regenerate previews/ZIPs and review audit events.

### System integration

Google Drive service identity and Cloudflare scheduled/webhook workers. They may read the configured Drive scope and update portal metadata, but cannot approve content or assign human roles.

## 5. Access policy

- Cloudflare Access protects all application and API routes.
- Login method: Cloudflare One-time PIN.
- Included email domains: `affidea.ro`, `affidea.com`, `gmail.com`.
- No anonymous preview, API, asset or download URL.
- The team accepts that any person with a valid Gmail account who knows the hostname can authenticate.
- Admin role is not domain-based. It is assigned only to explicit normalized email addresses in D1.
- Recommended session duration: 7 days; OTP expires according to Cloudflare Access behavior.

## 6. Core functional requirements

### FR-01 Dashboard

Show active brand count, approved asset count, centre count, recent updates, last successful sync, pending approval count for admins, quick links and global search.

### FR-02 Brand directory

Grid/list switch, search and filters by brand architecture type, category, status and available asset type. Ordinary users see only active brands. Cards use a canonical logo preview, short bilingual descriptor and last-updated date.

### FR-03 Brand page

Every active brand page supports:

- identity overview;
- architecture classification;
- canonical logo and variants;
- usage rules;
- colours with copyable values;
- typography specimens and font downloads when available;
- brand book preview/download;
- Web/App assets;
- related lockups and co-branding;
- downloadable files by format;
- curated complete ZIP pack;
- source update timestamp;
- approved exceptions and warnings.

Sections with no content must be hidden or represented by a useful empty state, never by broken placeholders.

### FR-04 Asset library

Search across filename, brand, tags, MIME type and extension. Filter by format, asset category, brand, status and updated date. Support preview, metadata, direct download and navigation to the parent brand.

### FR-05 Guidelines

Show canonical Affidea 2026 guidance first. Archive documents are admin-only by default. Brand books can be opened in an authenticated PDF viewer and downloaded.

### FR-06 Data Centres

Authenticated table with all imported workbook fields. Support global search, filters, column chooser, sorting, pagination and XLSX source download. Phone numbers use `tel:` links on compatible devices. Personal data must never be included in public metadata, search-engine indexing, client logs or analytics payloads.

### FR-07 Downloads

- Individual files download from authenticated same-origin URLs.
- Blob files stream from Drive through the Worker or from the private R2 cache.
- ZIP packs include only approved assets selected for that brand pack.
- ZIP generation is asynchronous when not already cached.
- Display progress/status and notify the user when the ZIP is ready.
- Preserve original file content and filename.
- Log downloads without logging file bytes or credentials.

### FR-08 Search

Global search returns brands, approved assets, guidelines and centres. Search is accent-insensitive and case-insensitive. Results are permission-aware. Default keyboard shortcut: `/` or `Cmd/Ctrl+K`.

### FR-09 Language

RO and EN switcher in the header. Preference persists locally and may default from browser language. Routes remain stable when language changes. User-generated filenames and Drive-provided proper names are never machine-translated.

### FR-10 Administration

Admins can approve/reject pending assets, activate/deactivate brands, choose canonical assets, edit bilingual descriptors/tags, record exceptions, rebuild ZIPs and review sync errors and audit logs.

### FR-11 Automatic synchronization

Changes in the configured Drive root must propagate automatically. Existing approved assets retain approval when their Drive revision changes. New Drive items start pending. Deleted/moved items are reconciled safely as described in the sync specification.

## 7. Status model

Brands: `draft`, `active`, `archived`.

Assets: `pending`, `approved`, `rejected`, `archived`, `source_missing`.

Guidelines: `canonical`, `approved`, `working`, `archive`.

Sync jobs: `queued`, `running`, `partial`, `succeeded`, `failed`.

## 8. Success metrics

- 95% of common approved files reachable in three interactions or fewer.
- Search result first interaction under 500 ms after cached metadata loads.
- Drive change visible in the portal within 10 minutes under normal conditions.
- Zero anonymous access to application, API or file routes.
- Zero unapproved asset leakage to User role.
- At least 90% of brand pages have a canonical preview and complete basic metadata after content curation.

## 9. Launch acceptance

Launch is blocked until authentication, authorization, Drive sync recovery, approval filtering, download authorization, audit logging, bilingual UI, Data Centres privacy, responsive layouts and backup/rollback have passed the test matrix.

