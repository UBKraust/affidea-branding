export type BrandFamily = 'corporate' | 'clinics' | 'hospitals' | 'specialised' | 'associated' | 'archive';

export type BrandFamilyMeta = {
  id: BrandFamily;
  label_ro: string;
  label_en: string;
  description_ro: string;
  description_en: string;
};

export const BRAND_FAMILIES: BrandFamilyMeta[] = [
  {
    id: 'corporate',
    label_ro: 'Brand corporate',
    label_en: 'Corporate brand',
    description_ro: 'Identitatea-mamă și resursele globale Affidea.',
    description_en: 'The Affidea parent identity and global resources.',
  },
  {
    id: 'clinics',
    label_ro: 'Clinicile Affidea',
    label_en: 'Affidea Clinics',
    description_ro: 'Clinici, centre de diagnostic și identități locale integrate în rețeaua de clinici.',
    description_en: 'Clinics, diagnostic centres, and local identities integrated into the clinics network.',
  },
  {
    id: 'hospitals',
    label_ro: 'Affidea Hospitals',
    label_en: 'Affidea Hospitals',
    description_ro: 'Identitatea spitalicească master și toate lockup-urile locale aprobate.',
    description_en: 'The master hospital identity and all approved local lockups.',
  },
  {
    id: 'specialised',
    label_ro: 'Servicii specializate',
    label_en: 'Specialised services',
    description_ro: 'Pediatrie și lockup-uri specializate care au propriile reguli vizuale.',
    description_en: 'Paediatrics and specialised lockups with dedicated visual rules.',
  },
  {
    id: 'associated',
    label_ro: 'Branduri asociate și parteneriate',
    label_en: 'Associated brands and partnerships',
    description_ro: 'Parteneriate și servicii care păstrează o identitate distinctă față de rețelele Clinics și Hospitals.',
    description_en: 'Partnerships and services retaining an identity distinct from the Clinics and Hospitals networks.',
  },
  {
    id: 'archive',
    label_ro: 'Arhivă',
    label_en: 'Archive',
    description_ro: 'Identități istorice păstrate doar pentru referință și continuitate.',
    description_en: 'Historical identities retained for reference and continuity only.',
  },
];

export const BRAND_FAMILY_BY_SLUG: Record<string, BrandFamily> = {
  affidea: 'corporate',

  'clinicile-affidea': 'clinics',
  'biomed-scan': 'clinics',
  'affidea-medeuropa': 'clinics',
  'affidea-phoenix': 'clinics',
  'affidea-medif-otopeni': 'clinics',
  'clinicile-affidea-gmh': 'clinics',
  'affidea-hiperdia-corunca': 'clinics',
  'affidea-primorion': 'clinics',
  'affidea-explora-suceava': 'clinics',
  'affidea-clinica-sia': 'clinics',
  'fortius-clinicile-affidea': 'clinics',

  'affidea-hospitals': 'hospitals',
  'affidea-hospitals-sfantul-sava': 'hospitals',
  'affidea-hospitals-gmh': 'hospitals',
  'affidea-hospitals-sunmed': 'hospitals',
  'affidea-hospitals-metropolitan': 'hospitals',
  'affidea-hospitals-heka': 'hospitals',
  'affidea-hospitals-fundeni': 'hospitals',
  'affidea-hospitals-feminacare': 'hospitals',

  'affidea-kids': 'specialised',
  'affidea-kids-pediatrie': 'specialised',
  'feminacare-affidea-kids': 'specialised',

  fortius: 'associated',
  oncolink: 'associated',
  meddirect: 'associated',

  'affidea-hospitals-armonia': 'archive',
};

const driveFolder = (id: string) => `https://drive.google.com/drive/folders/${id}`;

export const BRAND_DRIVE_FOLDER_BY_SLUG: Record<string, string> = {
  affidea: driveFolder('1c34Y5uo7vwM1xo_S7vaSpB7rLdHIN8Sh'),
  'clinicile-affidea': driveFolder('1eW1pWhc7mX18SiIqL3Xna7wQbHnKW82N'),
  'biomed-scan': driveFolder('1T7_AC21TEK567A4cH4JrHSoccNvPyPzq'),
  'affidea-hospitals': driveFolder('1gi0Z7cH_wfhqyT9LJM75cTF9fCfW5zSS'),
  'affidea-hospitals-sfantul-sava': driveFolder('1C68FDoVoFWPmKvC-LrffXkqzCpkw2adt'),
  'affidea-hospitals-gmh': driveFolder('1xuQREyN-yE-St2UdDg66DpNrct1NeEWt'),
  'clinicile-affidea-gmh': driveFolder('1GSqrYhD1rG2a34vHyfFloCMfgOekGSye'),
  'affidea-hospitals-sunmed': driveFolder('11yU5D8V1WASPWo7wbgF1r5mv69hGAcvc'),
  'affidea-hiperdia-corunca': driveFolder('1naOrsOlbMAsDYR8B7WrzE9HuKwdb-8y9'),
  'affidea-primorion': driveFolder('1RQ_PPsYR9HUFq-7xcrhB4mf6YqepUi72'),
  'affidea-explora-suceava': driveFolder('197DXramobc-7tfb66QuUdlZxzlAe78DX'),
  'affidea-kids': driveFolder('11EYW8BraoM4A8UwzO_YPF65LYkAdqIm2'),
  'affidea-kids-pediatrie': driveFolder('11EYW8BraoM4A8UwzO_YPF65LYkAdqIm2'),
  'affidea-medeuropa': driveFolder('1cfQVQuZj6vb4axSwSLdl9am-CBKnmJvz'),
  'affidea-hospitals-heka': driveFolder('16zZ8Yf20wgXYs05V0Zed0NxS4VE4s4yO'),
  'affidea-hospitals-fundeni': driveFolder('1xJfC44ixJQ7qFbxgHOZ76rxF0l7r4DWT'),
  'affidea-hospitals-feminacare': driveFolder('1qNFTmnQEFbSxbLn390ciQ9z4p-wiDTBS'),
  'affidea-clinica-sia': driveFolder('1SmqC-nXZVZpQa93rdmgxREWLF8r-7lBC'),
  'affidea-phoenix': driveFolder('1zuHyve52odFf67bFtTsvjE43592EiAIE'),
  'affidea-hospitals-metropolitan': driveFolder('1W9Q8KvLqyuMqs6N-Gur-L5Ad2vvCV8wA'),
  'affidea-medif-otopeni': driveFolder('17CB9QUzenvabN_AIu-rrG_4jU7iI4ZPf'),
  'fortius-clinicile-affidea': driveFolder('18CIe1wFKcNGzBzAwZRONvY52qIdP4uPW'),
  fortius: driveFolder('1SaEMIcMaYl-a42vq7CanaK_PK4K_oDVL'),
  'feminacare-affidea-kids': driveFolder('1sRNlTfl720k7hAlAqsaLS84MgQJZPuwz'),
  oncolink: driveFolder('16bUCaS2aGYH5BLG71Rs1rgVHxBdjh2EN'),
  meddirect: driveFolder('1GYTTALcUsVwbrGR-LpVvZDvV5M9LDRo2'),
  'affidea-hospitals-armonia': driveFolder('1w7fVO7ckouMV-bLSR81wT-0fqVk2gq52'),
};

export const getBrandFamily = (slug: string): BrandFamily => BRAND_FAMILY_BY_SLUG[slug] ?? 'associated';

