# 02. Information architecture and UI/UX specification

## 1. Navigation model

Desktop uses a persistent left navigation rail and a compact top bar. Tablet collapses the rail to icons. Mobile uses a top bar plus an off-canvas navigation drawer; do not use a five-item bottom tab bar because Admin and search depth exceed that model.

Primary navigation:

- Dashboard
- Brands
- Assets
- Guidelines
- Data Centres
- Admin (admins only)

Top-bar controls:

- global search;
- RO/EN switcher;
- sync freshness indicator;
- user menu and sign out.

## 2. Route map

```text
/
/brands
/brands/:brandSlug
/assets
/assets/:assetId
/guidelines
/guidelines/:guidelineId
/data-centres
/admin
/admin/approvals
/admin/brands
/admin/sync
/admin/audit
/admin/settings
```

Authentication is handled before these routes by Cloudflare Access. The application does not render a custom email/code screen.

## 3. Dashboard

Above the fold:

- greeting using verified Access identity;
- product title and concise purpose;
- universal search input;
- four statistic cards: Active brands, Approved assets, Data centres, Last sync;
- quick-entry cards for Brands, Guidelines, Assets and Data Centres.

Second section:

- recently updated brands/assets;
- canonical guideline callout;
- pending approvals only for admins;
- subtle Affi illustration in a supporting position, maximum 25% of the desktop viewport width and hidden or reduced on small mobile screens.

## 4. Brand directory

Desktop filter bar remains sticky beneath the app header. Mobile filters open in a bottom sheet/dialog. Cards must not use random brand colours as backgrounds. Use neutral cards, approved logo previews and Affidea-blue interaction accents.

Card information:

- logo preview;
- brand name;
- architecture badge;
- asset counts by major type;
- last update;
- warning icon for an approved exception or incomplete pack.

## 5. Brand detail page

Header contains breadcrumb, logo preview, brand name, bilingual descriptor, architecture/status badges, last updated and Download ZIP.

Desktop uses a local sticky section navigation. Mobile uses a scrollable tab strip or a section dropdown.

Section order:

1. Overview
2. Logo
3. Colours
4. Typography
5. Guidelines
6. Digital assets
7. Downloads
8. Related brands/lockups

### Logo presentation

Display approved logo variants on four selectable backgrounds: white, Affidea Blue, light neutral and dark blue. Provide preview only from web-safe formats. Each file row shows format, colour variant, dimensions when applicable, size, updated date and download action.

### Colour presentation

Colour swatches show name, HEX, RGB, CMYK and Pantone when supplied. Clicking a supported value copies it and announces success to screen readers. Canonical Affidea colours appear first. Approved brand exceptions are clearly labelled; source conflicts are never silently merged.

### Typography presentation

Show typeface name, licensed/available status, weights and two controlled specimens. If the font file is absent, use a system fallback in the portal and show `Font file not available / Fișier font indisponibil`; do not fetch an unapproved CDN font.

## 6. Asset library

Use responsive card view as default and an optional dense table view. Asset preview must preserve aspect ratio and transparency. Checkerboard backgrounds are allowed only in the preview panel, not as a global card style.

Asset detail appears as a desktop side panel and mobile full-screen dialog. It includes metadata, source path, brand relation, preview, status, version timestamps and download.

## 7. Guidelines viewer

PDF viewer uses same-origin authenticated streaming with range requests. Provide page navigation, zoom, open in new tab and download. Never embed a public Drive URL. On mobile, offer a simpler open/download flow if inline rendering is unstable.

## 8. Data Centres UX

- Show a confidentiality banner.
- Default columns: centre, region/city, address, contact person, phone, legal entity.
- Optional columns remain in a column chooser.
- Search names, city, address and legal entity.
- Sticky header, horizontal scrolling only inside the table region.
- Masking is not required after authentication, but data must not enter telemetry.
- Export/download refers to the approved source workbook, not a client-generated copy, unless an admin explicitly requests an export feature.

## 9. Admin UX

Approval inbox is optimized for batch review. Each row has preview, path, detected brand, proposed category, file format, created/modified dates and Approve/Reject. Batch approval requires confirmation and an audit reason for rejection.

Brand management supports:

- activate/archive;
- bilingual description;
- architecture classification;
- canonical logo/guideline/font selection;
- colour exceptions;
- ZIP inclusion rules;
- Affi usage toggle;
- manual resync.

## 10. System states

Every list and detail screen must implement:

- initial skeleton;
- empty state;
- no search results;
- permission failure;
- stale cache warning;
- source missing;
- partial synchronization warning;
- offline/network retry;
- unexpected error with correlation ID.

Use Affi only for friendly empty/onboarding states and only where suitable. Operational errors use restrained system visuals.

## 11. Interaction rules

- Buttons use verbs: Download, Copy HEX, Preview, Approve, Archive.
- Destructive or visibility-changing actions require confirmation.
- Toasts are concise and never the only feedback.
- Preserve filters and scroll position when returning from detail pages.
- URLs encode shareable filters where they contain no personal data.
- Do not encode Data Centres search strings or contact values into URLs.

## 12. Responsive breakpoints

- Small: 320-639 px.
- Medium: 640-1023 px.
- Large: 1024-1439 px.
- Extra large: 1440 px and above.

Content max width: 1600 px. Page gutters: 16 px small, 24 px medium, 32 px large. Touch targets minimum 44x44 px.

