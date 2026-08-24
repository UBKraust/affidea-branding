# 03. Visual and component design system

## 1. Brand authority

Affidea Brand Guidelines v1.6 (2026) is the visual authority. Sub-brand values may be presented as approved exceptions, but they do not replace the global portal UI palette.

## 2. Core colour tokens

```css
:root {
  --affidea-blue: #418FDE;
  --affidea-blue-dark: #2D69B3;
  --affidea-blue-light: #98BFE6;
  --affidea-night: #294074;
  --affidea-green: #04B64F;
  --affidea-yellow: #FFC846;
  --affidea-orange: #ED8922;
  --affidea-teal: #78C6B2;
  --grey-900: #353A40;
  --grey-500: #B1B1B1;
  --grey-100: #F1EFED;
  --white: #FFFFFF;
  --danger: #B42318;
  --warning: #B54708;
  --success: #067647;
}
```

Affidea Blue is dominant. Friendly Green is a functional highlight/CTA colour and must not become the dominant page colour. Yellow/orange/teal are sparse highlights. Red is reserved for errors and destructive actions, not brand decoration.

## 3. Typography

Primary: Harmonia Sans W1G from the approved Drive font files. Bundle font files only after confirming internal web embedding rights. If rights are not confirmed, use the stack below and keep downloads restricted.

Fallback:

```css
font-family: "Harmonia Sans W1G", "Avenir Next", Avenir, "Segoe UI", Arial, sans-serif;
```

Portal UI scale:

- Display: 48/56, SemiBold; 36/44 on mobile.
- H1: 36/44, SemiBold; 30/38 mobile.
- H2: 28/36, SemiBold.
- H3: 22/30, SemiBold.
- Body large: 18/28, Regular.
- Body: 16/24, Regular.
- Small: 14/20, Regular.
- Label: 13/18, SemiBold.

Barriecito may appear only in approved Affi/Affidea Kids content. It is not a portal UI font. The Drive inventory currently lacks the Barriecito font file.

## 4. Layout and shape

- 8 px spacing system, with 4 px substeps.
- Card radius: 16 px.
- Controls: 10-12 px radius.
- Pills/badges: full radius.
- Border: `#D9E3EC` or tokenized equivalent.
- Shadows are subtle and used for elevation, not decoration.
- Main surfaces are white or very light cool neutral.
- Use generous whitespace and restrained illustration.

## 5. Logo rules in the portal

- Full-colour logo on white/very light backgrounds.
- White logo on Affidea Blue, dark blue or a verified dark image.
- Do not distort, recolour, outline, shadow or apply transparency.
- Parent logo minimum: 30 px digital; 10 mm print reference.
- Preserve required clear space; never crop logos into card edges.
- Do not construct `Affidea Group` as a logo lockup.
- Never recreate a logo from text when an approved file is missing.

## 6. Components

Required reusable components:

- `AppShell`, `Sidebar`, `TopBar`, `MobileNav`;
- `GlobalSearch`, `CommandPalette`;
- `BrandCard`, `AssetCard`, `GuidelineCard`, `MetricCard`;
- `StatusBadge`, `ArchitectureBadge`, `FormatBadge`;
- `FilterBar`, `FilterDialog`, `SortMenu`;
- `LogoPreview`, `TransparencyGrid`, `ColourSwatch`, `FontSpecimen`;
- `AssetTable`, `DataCentreTable`;
- `PdfViewer`, `ImageViewer`, `GenericFilePreview`;
- `DownloadButton`, `ZipBuildButton`, `CopyValueButton`;
- `SyncIndicator`, `ConfidentialityBanner`, `ExceptionNotice`;
- `EmptyState`, `ErrorState`, `Skeleton`, `Toast`, `ConfirmDialog`;
- `LanguageSwitcher`, `UserMenu`;
- Admin: `ApprovalQueue`, `BrandEditor`, `SyncJobPanel`, `AuditTable`.

## 7. Status colours

Status is always conveyed by text/icon plus colour:

- Approved/active: green tint.
- Pending/working: amber tint.
- Rejected/error: red tint.
- Archive/source missing: neutral grey.
- Canonical: Affidea Blue tint.

Never rely on red/green distinction alone.

## 8. Affi usage

Affi is supportive, not global navigation. Approved uses:

- dashboard welcome accent;
- onboarding/empty states;
- Affidea Kids page;
- medical/technology illustration gallery inside the Affi section.

Do not place Affi on every page. Do not crop the character awkwardly. `affi_poses_3.png` contains a visible clipped dark fragment at the lower-right edge and must be cleaned or excluded from production until corrected.

## 9. Motion

- 120-200 ms for control feedback.
- 200-300 ms for panels/dialogs.
- Respect `prefers-reduced-motion`.
- No parallax, looping mascot animation or large decorative motion.
- Loading indicators must not shift layout.

