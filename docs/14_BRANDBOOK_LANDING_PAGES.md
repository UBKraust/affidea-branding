# Brandbook landing pages

Every identity in the Brand Hub is presented as an editorial landing page at `/brands/:slug`. The page is a usable web interpretation of the approved source material, not a replacement for the canonical files in Drive.

## Coverage

- 27 identities receive a complete landing page.
- Dedicated manuals are connected to Affidea, Affidea Kids / Affi, FeminaCare, OncoLink, and MedDirect where applicable.
- Identities without a dedicated manual explicitly inherit Affidea Brand Guidelines v1.6 and Affidea Sub-brand Rules 2026.
- Historical identities are marked as archive and must not be used for new production.

## Shared page anatomy

1. Brand essence and role in the ecosystem.
2. Architecture path from Affidea to operational family and identity.
3. Logo system, contexts, clear space, minimum size, and misuse rules.
4. Colour palette with copyable values and a validation notice for undocumented local colours.
5. Typography specimen and Affi/Kids-specific Barriecito exception.
6. Verbal identity and editorial tone.
7. Priority application areas for the operational family.
8. Canonical guidelines, logo download, and source Drive folder.

## Source maturity

| Mode | Meaning | Product behaviour |
|---|---|---|
| Dedicated | A brand-specific manual exists | The page leads with that manual and includes applicable Affidea rules. |
| Inherited | No verified dedicated manual exists | The page states that it inherits Affidea v1.6 and Sub-brand Rules. Local colours require approval. |
| Archive | Historical or deprecated identity | The page is a reference surface and warns against new production use. |

## Content implementation

- `apps/web/src/fixtures/brandLandingContent.ts` owns editorial and family-level rules.
- `apps/web/src/fixtures/brandResources.ts` maps each identity to exact canonical Drive files.
- `apps/web/src/pages/BrandDetailPage.tsx` renders the shared landing-page system.
- `apps/web/src/fixtures/brandLandingContent.test.ts` verifies that all published identities have complete content and at least one guideline source.

Drive remains the source of truth for original files. The web layer supplies navigation, preview, explanation, and governance status.
