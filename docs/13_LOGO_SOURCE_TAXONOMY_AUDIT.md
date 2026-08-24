# Logo source and taxonomy audit

Audit completed on 2026-08-24 across the Affidea Brand Hub repository and the canonical Google Drive brand library.

## Audited sources

- GitHub repository: `UBKraust/affidea-branding`
- Drive brand root: `16hA1bCXCEQxRtWbNWC6apAZDPH7fW8sE`
- Drive logo library: `163aOb9k-O236cVFmTJm7SH3ljHCs73Ky`
- Repository preview library: `apps/web/public/brand-assets/logos`

Drive file and folder IDs are the stable source identity. Folder names and filenames are descriptive labels and may change.

## Operational grouping used by the product

The site now separates the master brand, clinics, hospitals, specialised services, associated brands, and archive material. This operational taxonomy is independent from the legal or strategic `architecture_type` field already present on each brand record.

### Corporate brand

- Affidea

### Clinics

- Clinicile Affidea
- Biomed Scan
- Affidea MedEuropa
- Affidea Phoenix
- Affidea MedIF Otopeni
- Clinicile Affidea — GMH
- Affidea Hiperdia — Corunca
- Affidea Primorion
- Affidea Explora — Suceava
- Affidea Clinica SIA
- Clinicile Affidea × fortiusclinic

### Hospitals

- Affidea Hospitals — master
- Affidea Hospitals — Sfântul Sava
- Affidea Hospitals — GMH
- Affidea Hospitals — Sunmed
- Affidea Hospitals — Metropolitan
- Affidea Hospitals — Heka
- Affidea Hospitals — Fundeni
- Affidea Hospitals — FeminaCare

### Specialised services

- Affidea Kids
- Affidea Kids — Pediatrie
- FeminaCare × Affidea Kids

### Associated brands and partnerships

- Fortius — part of Affidea Group
- OncoLink
- MedDirect

### Archive

- Affidea Hospitals — Armonia

The source-of-truth mapping is implemented in `apps/web/src/fixtures/brandTaxonomy.ts`. Every one of the 27 brand records has an operational family and an exact link to its canonical Drive folder.

## Repository findings

- The site has 30 local preview resources: 20 SVG, 9 PNG, and 1 JPG. The accompanying `README.md` is not an asset.
- The previous Brands page rendered all identities in a single grid and filtered them only by brand architecture. Clinics and hospitals were therefore visually mixed.
- Some previews use PNG or JPG although an SVG exists in Drive. This is safe for the current UI, but it is inconsistent for a reusable asset hub.
- The repository intentionally materialises only web previews and approved brandbooks. It should not become a mirror of all source, working, and archive files from Drive.

## Drive findings

- The logo library is numbered by acquisition or delivery sequence, not grouped first by operational family.
- `05_Affidea_Hospitals_GMH` contains two Clinicile/parent PDF files alongside the hospital lockup.
- The OncoLink folder mixes approved identity assets, brandbooks, working Illustrator files, proposals, and social exports.
- `26_Affidea_Hospitals_Lockups_Supplemental` duplicates Heka, Fundeni, and FeminaCare assets already present in their dedicated folders.
- MedEuropa contains a temporary Illustrator export (`~ai-...tmp`).
- The FeminaCare × Affidea Kids folder contains two approximately 45.5 MB duplicate PDFs; one has an `.ai` filename but a PDF MIME type.
- Metropolitan filenames include the typo `Metropoliltan`.
- Clinicile Affidea, Biomed Scan, and MedDirect do not expose a complete standard pack directly in their canonical folder.
- Several identities have nested ZIPs and working-source folders beside approved exports, which makes the canonical file ambiguous.

## Recommended canonical pack

Each active identity should expose one approved set with predictable names:

1. `logo-blue.svg`
2. `logo-white.svg`
3. `logo-blue.png` with transparency
4. `logo-white.png` with transparency
5. `logo-print.pdf` or `logo-print.eps`
6. `manifest.json` containing brand slug, status, version, approval date, source Drive IDs, and checksums

AI working files, source packages, campaign exports, and ZIP deliveries should remain available in Drive but outside the canonical download set.

## Migration plan

### Phase 1 — implemented in the application

- Add explicit operational families.
- Group Clinics under Clinics and Hospitals under Hospitals.
- Link every brand detail page to its exact canonical Drive folder.
- Test that all brand records have both a family and a Drive source.

### Phase 2 — non-destructive Drive cleanup

- Create family-level index folders or shortcuts for `Clinics`, `Hospitals`, `Specialised`, and `Associated`.
- Move only after link, ownership, sharing, and automation impact has been checked.
- Remove temporary files and relocate working/source material into clearly marked subfolders.
- Mark duplicate supplemental files as shortcuts or archive references instead of maintaining separate copies.

### Phase 3 — canonicalisation

- Nominate one approved owner for each identity.
- Produce the standard format pack for every active brand.
- Record version and approval metadata in a machine-readable manifest.
- Switch application previews to the canonical SVG where available.

No Drive files were moved or deleted during this audit. This preserves existing links, permissions, and automations while the taxonomy is introduced safely in the product.
