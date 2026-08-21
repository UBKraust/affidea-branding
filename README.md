# Affidea Brand Portal

Portal static pentru regulile de identitate și asset-urile Affidea România.

## Ce include MVP-ul

- reguli operaționale extrase din `Affidea Brand Guidelines v1.6` (aprilie 2026);
- sistem de culori cu copiere rapidă a codurilor HEX;
- tipografie și ierarhii;
- arhitectură pentru clinical, specialised, acquisition și partnership;
- bibliotecă filtrabilă de logo-uri, cu surse și variante web;
- documentația 2026 indexată ca sursă canonică;
- workflow GitHub Pages fără dependențe de runtime.

## Rulare locală

```bash
python3 -m http.server 4173
```

Apoi deschide `http://localhost:4173`.

## Sursa regulilor

Documentul canonic este `Affidea Brand Guidelines v1.6` (aprilie 2026). Dacă portalul și PDF-ul aprobat diferă, PDF-ul are prioritate. Inventarul complet al materialelor primite este în `docs/source-inventory.md`.

## Convenții asset-uri

- `public/assets/logos/source/` — fișiere pentru producție și arhivă;
- `public/assets/logos/web/` — variante optimizate pentru interfețe și preview;
- `docs/` — inventarul documentelor active și al materialelor de lucru;
- fișierele legacy nu se marchează automat drept aprobate.

## Următoarele extensii recomandate

- autentificare și roluri (viewer/editor/approver);
- upload cu versiuni și status de aprobare;
- registru complet pentru Affidea Hospitals, FeminaCare, Affidea Kids și Heka;
- generator de lockup-uri controlat de reguli;
- audit automat pentru contrast, clearspace și dimensiune minimă.
