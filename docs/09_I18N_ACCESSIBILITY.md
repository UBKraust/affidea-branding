# 09. Bilingual content, accessibility and content style

## 1. Internationalization

Supported locales: `ro` and `en`. Romanian is the initial default for Romanian browser preferences; English is the fallback. Store preference in a first-party cookie or local storage that contains no personal data.

All UI copy uses translation keys. Dynamic admin-authored fields have separate `name_ro`, `name_en`, `description_ro`, `description_en`. When a translation is missing, show the available language with a visible fallback marker to admins only.

Do not translate:

- original filenames;
- Drive paths;
- company/legal entity names;
- centre addresses;
- people's names;
- brand names unless an approved localized name exists;
- HEX/RGB/CMYK/Pantone values.

## 2. Content voice

Clear, calm, precise and helpful. Avoid marketing exaggeration inside operational UI. Use sentence case. Romanian uses correct diacritics. English uses concise international terminology.

Examples:

- `Descarcă SVG` / `Download SVG`
- `Ultima sincronizare reușită` / `Last successful sync`
- `Necesită verificare` / `Needs review`
- `Date interne și confidențiale` / `Internal and confidential data`

## 3. Accessibility target

WCAG 2.2 AA for the application interface.

Requirements:

- Semantic HTML landmarks and heading order.
- Skip-to-content link.
- Fully keyboard-operable menus, filters, dialogs, tables and PDF controls.
- Visible focus with at least 3:1 contrast.
- Minimum 44x44 px touch targets.
- Text contrast at least 4.5:1, large text 3:1.
- Non-text controls and focus indicators 3:1.
- Status never conveyed by colour alone.
- Accessible names for icon buttons.
- Dialog focus trap, return focus and Escape support.
- Announce copy/download/ZIP state changes with polite live regions.
- Reduced-motion mode.
- Table captions, labelled sorting and column chooser.
- Meaningful alt text for informative Affi images; empty alt for decorative use.
- Zoom to 200% without loss of function; responsive reflow at 320 CSS px.

## 4. PDF and image accessibility

The portal cannot repair untagged source PDFs automatically. Provide filename, document title, download alternative and accessible metadata. Do not claim the PDF itself is accessible unless verified.

Logo previews use alt text with brand, variant and format. Colour swatches expose their numeric values as text.

## 5. Privacy-aware UX

- Centre search strings remain in component state, not route query strings.
- Do not persist centre table state containing names/phones beyond the session.
- Clipboard actions occur only after direct user intent.
- Confidentiality banner remains visible on Data Centres page.

