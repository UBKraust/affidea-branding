export const CLINICILE_TOC = [
  ['clinics-overview', 'Esență'],
  ['clinics-architecture', 'Arhitectură'],
  ['clinics-logo', 'Logo'],
  ['clinics-lockup', 'Construcție'],
  ['clinics-colour', 'Culori'],
  ['clinics-type', 'Tipografie'],
  ['clinics-layout', 'Layout'],
  ['clinics-voice', 'Voce'],
  ['clinics-applications', 'Aplicații'],
  ['clinics-governance', 'Guvernanță'],
] as const;

export const CLINICILE_COLOURS = [
  { name: 'Affidea Blue', role: 'Culoare primară', hex: '#418FDE', rgb: '65 / 143 / 222', cmyk: '71 / 36 / 0 / 0', pantone: 'Pantone 279 C', dark: false },
  { name: 'Friendly Green', role: 'CTA și highlight', hex: '#04B64F', rgb: '4 / 182 / 79', cmyk: '70 / 0 / 40 / 29', pantone: 'Pantone 7481 C', dark: false },
  { name: 'Dark Blue', role: 'Culoare suport', hex: '#2D69B3', rgb: '45 / 105 / 179', cmyk: '53 / 29 / 0 / 30', pantone: 'Pantone 653 C', dark: false },
  { name: 'Light Blue', role: 'Fundal secundar', hex: '#98BFE6', rgb: '152 / 191 / 230', cmyk: '31 / 15 / 0 / 0', pantone: 'Pantone 278 C', dark: false },
  { name: 'Dark Grey', role: 'Text digital', hex: '#353A40', rgb: '53 / 58 / 64', cmyk: '30 / 20 / 15 / 82', pantone: 'Pantone 432 C', dark: true },
  { name: 'Cool Grey', role: 'Element neutru', hex: '#B1B1B1', rgb: '177 / 177 / 177', cmyk: '0 / 0 / 0 / 31', pantone: 'Pantone Cool Grey 5', dark: false },
  { name: 'Light Grey', role: 'Suprafață neutră', hex: '#F1EFED', rgb: '241 / 239 / 237', cmyk: '0 / 1 / 2 / 5', pantone: 'Warm Grey 40%', dark: false },
  { name: 'White', role: 'Spațiu și contrast', hex: '#FFFFFF', rgb: '255 / 255 / 255', cmyk: '0 / 0 / 0 / 0', pantone: '—', dark: false },
] as const;

export const CLINICILE_PRINCIPLES = [
  ['Consistență', 'Urmează îndeaproape parent brandul în toate piețele.'],
  ['Claritate', 'Descriptorul clinic ajută pacientul să identifice serviciul.'],
  ['Afiliere', 'Affidea rămâne ancora vizuală și reputațională.'],
  ['Navigare', 'Lockup-ul Clinicile este marca principală pe activități dedicate.'],
  ['Scalare', 'Aceeași gramatică deservește Clinics, Hospitals, Diagnostics și Laboratories.'],
] as const;

export const CLINICILE_DOS = [
  'Folosește exclusiv artwork-ul de lockup furnizat pentru piața locală.',
  'Păstrează simbolul „a”, wordmark-ul și descriptorul ca o singură unitate.',
  'Folosește Affidea Blue drept culoare dominantă.',
  'Setează descriptorul în Harmonia Sans SemiBold atunci când se creează artwork aprobat.',
  'Include logo-ul parent Affidea cel puțin o dată pe materialele dedicate sub-brandului.',
] as const;

export const CLINICILE_DONTS = [
  'Nu redesena, nu întinde și nu schimba raportul dintre elemente.',
  'Nu schimba fontul wordmark-ului sau al descriptorului.',
  'Nu introduce culori suplimentare în lockup.',
  'Nu folosi culorile suport în interiorul logo-ului.',
  'Nu adăuga locații pe semnalistica externă fără aprobarea Global Brand Team.',
] as const;

export const CLINICILE_APPLICATIONS = [
  ['Semnalistică', 'Într-un centru dedicat, lockup-ul Clinicile este marca principală. Într-o locație multidisciplinară, parent brandul poate prelua rolul principal.'],
  ['Website', 'Clinicile este identificarea principală pe experiențele dedicate; Affidea parent apare la sign-off și lângă manifesto/tagline.'],
  ['Social media', 'Folosește lockup-ul Clinicile pentru profilul dedicat și menține prezența parent brandului în sistemul de comunicare.'],
  ['Broșuri', 'Lockup-ul Clinicile poate conduce coperta; logo-ul Affidea parent trebuie să apară cel puțin o dată, de exemplu pe coperta IV.'],
  ['Merchandise', 'Păstrează zona de protecție, contrastul și limita minimă; nu simplifica manual lockup-ul.'],
  ['Semnalistică internă', 'În centre multidisciplinare poate funcționa ca branding secundar; locațiile în lockup necesită aprobare.'],
] as const;

export const CLINICILE_SOURCES = {
  core: 'https://drive.google.com/file/d/11Ltz9O7HhrlqMw29zdQMojibzylW5TU_/view',
  architecture: 'https://drive.google.com/file/d/1NhsCscD-T8ncYShIjcTjtuDh6hB2pj-w/view',
  folder: 'https://drive.google.com/drive/folders/1eW1pWhc7mX18SiIqL3Xna7wQbHnKW82N',
} as const;
