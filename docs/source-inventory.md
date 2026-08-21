# Inventarul surselor

## Documente de guvernanță

| Fișier primit | Dată / versiune | Rol în portal | Status |
| --- | --- | --- | --- |
| `affidea brand guidelines_V1.6.pdf` | aprilie 2026, v1.6 | sursă canonică pentru arhitectură, logo, culoare și tipografie | indexat |
| `Affidea sub-brand rules_19 March(1).pdf` | 19 martie 2026 | material de lucru pentru regulile de sub-brand | indexat, necanonic |
| `Affidea Brand Guidelines v1.1.1.pdf` | iunie 2015 | referință istorică | arhivă; regulile nu sunt amestecate cu v1.6 |

PDF-urile originale nu sunt publicate în primul PR al portalului. Ele trebuie adăugate ulterior într-un storage aprobat sau prin Git LFS, cu control de acces și versiuni.

## Asset-uri furnizate

| Familie | Fișier sursă | Variantă în portal | Observație |
| --- | --- | --- | --- |
| Affidea parent | `Affidea HQ General.jpeg` | JPEG web | sursă raster furnizată |
| Clinicile Affidea | `affidea.eps` | SVG web | conversie vectorială, geometrie păstrată |
| Clinicile Affidea | `logoAffidea_[Clinicile]_up-01.png` | PNG transparent web | fundalul alb a fost eliminat |
| Clinicile Affidea | `logoAffidea_[Clinicile]_up-03.png` | PNG web pe Affidea Blue | variantă pentru fundal colorat |
| Biomed Scan | `BiomedSCan.pdf` | SVG web + PDF sursă | lockup furnizat, tratat ca integrated/acquisition |

## Observații de calitate

- `BiomedSCan.png` și `BiomedSCanasfas.png` sunt duplicate binar și nu se publică de două ori.
- Imaginea care conține doar fragmentul de gradient nu este un logo complet și nu intră în biblioteca aprobată.
- Fișierele raster cu fundal alb sunt păstrate ca surse furnizate; varianta transparentă este derivată pentru web.
- Conversiile web nu înlocuiesc artwork-ul master pentru print sau semnalistică.
