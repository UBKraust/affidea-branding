# Affidea Brand Hub — Design QA

## Evidence

- Source visual truth path: `apps/web/public/brand-assets/affidea-brandbook-cover.png`
- Source document: `apps/web/public/brand-assets/Affidea_Brand_Guidelines_v1.6_2026_CANONICAL.pdf`
- Implementation screenshot path: `audit/screenshots/12-dashboard-final.png`
- Supporting implementation evidence:
  - `audit/screenshots/07-brands-redesign.png`
  - `audit/screenshots/10-assets-real-library-final.png`
  - `audit/screenshots/11-guidelines-canonical.png`
  - `audit/screenshots/13-brandbook-affidea-final.png`
- Browser viewport: 1503 × 908 CSS px, desktop, light theme
- Source pixels: 1600 × 900
- Dashboard screenshot pixels: 1488 × 1370, full-page capture
- Brandbook screenshot pixels: 1488 × 2747, full-page capture
- Density normalization: browser reported DPR 2; the browser screenshot API returned CSS-normalized output. Comparison used the full source cover and the implementation dashboard together, with the hero and logo regions treated as the normalized art-direction comparison areas.
- State: Romanian locale, dashboard default state; Affidea corporate brandbook default state.
- Scope: intentionally desktop-only. The product has a 1024 px minimum width and no mobile variant, per the user request.

The canonical cover is an art-direction source, not a page-layout mock. Therefore exact full-page geometry is not a valid target. The comparison focuses on the brand blue field, right-edge light-blue ribbons, Affidea logo treatment, restrained white space, type hierarchy, and the transfer of these elements into a usable desktop brand portal.

## Full-view comparison evidence

The final dashboard preserves the source's dominant Affidea blue, white wordmark treatment inside the canonical cover image, right-edge ribbon motif, flat color construction, and generous negative space. The implementation adds the required application shell, directory content, controls, and data hierarchy without introducing gradients, decorative illustration, fake icons, or competing accent colors. The full page remains visually balanced at the tested desktop viewport, with no horizontal overflow and no broken images.

## Focused region comparison evidence

- Hero: canonical cover is used directly as the visual foundation, maintaining the original image quality, crop, blue balance, and ribbon proportions.
- Corporate logo: the displayed parent lockup is derived from the official Drive vector and cropped to the parent mark; no text recreation or inline SVG approximation is used.
- Brand directory and asset library: all visible brand marks are source assets from Drive. The final browser pass found zero broken images.
- Brandbook: logo, canonical palette, typography specimen, official PDF cover, and functioning downloads are visible at readable scale in `audit/screenshots/13-brandbook-affidea-final.png`.

## Required fidelity surfaces

- Fonts and typography: Harmonia Sans W1G is declared first, with approved system fallbacks while web-embedding rights remain unconfirmed. Display, section, UI, and metadata scales are clearly separated; no visible clipping or unintended wrapping was found.
- Spacing and layout rhythm: fixed 244 px desktop navigation, aligned content grid, consistent 16/24/40 px rhythm, restrained radii, and subtle borders establish an editorial brandbook feel. No persistent controls are obscured.
- Colors and visual tokens: primary `#418FDE`, dark `#2D69B3`, light `#98BFE6`, night `#294074`, green `#04B64F`, and yellow `#FFC846` are mapped to the canonical system. No gradients are used in the UI.
- Image quality and asset fidelity: 11 SVG brand identities, one official PNG identity, the canonical PDF, and its rendered cover are used directly. No logo, decorative mark, or non-standard icon is faked with HTML, emoji, inline SVG, or CSS drawing.
- Copy and content: navigation and core guidance are localized in Romanian; official English document naming is preserved where it is the source title. Mock download names and non-functional alert downloads were removed.

## Comparison history

### Iteration 1

- Earlier finding: **P1 — corporate logo mapped to the Clinicile Affidea lockup.**
- Fix made: corrected the official vector viewport so the Affidea parent mark is shown without the Clinicile descriptor.
- Post-fix evidence: `audit/screenshots/12-dashboard-final.png` and `audit/screenshots/13-brandbook-affidea-final.png` show the standalone Affidea parent mark in the shell, directory card, hero, and logo specimen.

### Iteration 2

- Earlier finding: **P1 — asset cards and downloads mixed real visuals with mock file records and alert-only actions.**
- Fix made: rebuilt the library around the 12 downloaded identities and canonical PDF only; detail drawers now expose real local file paths and functioning download links.
- Post-fix evidence: `audit/screenshots/10-assets-real-library-final.png`; tested the SVG drawer and confirmed `/brand-assets/logos/affidea-parent.svg`; tested the PDF filter and confirmed one matching result.

### Iteration 3

- Earlier finding: **P1 — route changes retained long-page scroll position; first scroll restoration implementation returned a non-void effect value in the controlled browser and crashed the next route.**
- Fix made: added explicit route scroll restoration with a block-bodied React effect.
- Post-fix evidence: clean-browser flow Dashboard → Brands → Affidea brandbook completed at `scrollY: 0`, with zero broken images and no application console errors. `audit/screenshots/13-brandbook-affidea-final.png` begins at the correct top state.

## Findings

No actionable P0, P1, or P2 findings remain.

Browser-extension warnings about its own event listeners were observed. They originate from a `chrome-extension://` URL and are not application errors.

## Primary interactions tested

- Dashboard CTA → Brands directory.
- Brands directory → Affidea brandbook.
- Route scroll restoration.
- Asset library navigation.
- Asset preview drawer open/close.
- Real asset download target.
- PDF format filter.
- Canonical PDF cover, inline object, open link, and download link.

## Implementation checklist

- [x] Canonical Affidea tokens applied.
- [x] Desktop-only shell and information architecture implemented.
- [x] Real Drive logos mapped to every visible identity.
- [x] Corporate parent logo corrected.
- [x] Living brandbook sections implemented.
- [x] Real asset library and downloads implemented.
- [x] Canonical PDF embedded and downloadable.
- [x] TypeScript typecheck passed.
- [x] Production build passed.
- [x] Web tests passed (2/2).
- [x] Design-token tests passed (2/2).
- [x] Browser visual and interaction QA passed.

## Follow-up polish

- P3: replace the typography fallback with licensed Harmonia Sans W1G webfont files once embedding rights and files are supplied.

final result: passed
