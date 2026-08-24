export type BrandbookResource = {
  id: string;
  title: string;
  brand: string;
  version: string;
  file: string;
  filename: string;
  cover: string;
  size: string;
  status: 'Canonic' | 'Aprobat';
  note: string;
};

export const BRAND_DRIVE_URL = 'https://drive.google.com/drive/folders/16hA1bCXCEQxRtWbNWC6apAZDPH7fW8sE';

export const CORE_BRANDBOOK: BrandbookResource = {
  id: 'affidea-core',
  title: 'Affidea Brand Architecture & Branding Guidelines',
  brand: 'Affidea',
  version: 'v1.6 / 2026',
  file: BRAND_DRIVE_URL,
  filename: 'Affidea_Brand_Guidelines_v1.6_2026_CANONICAL.pdf',
  cover: '/brand-assets/affidea-brandbook-cover.png',
  size: '6.2 MB',
  status: 'Canonic',
  note: 'Sursa principală pentru identitatea corporate Affidea.',
};

export const BRANDBOOKS: BrandbookResource[] = [
  CORE_BRANDBOOK,
  {
    id: 'subbrand-rules',
    title: 'Affidea Sub-brand Rules',
    brand: 'Arhitectura de sub-brand',
    version: '2026',
    file: BRAND_DRIVE_URL,
    filename: 'affidea-subbrand-rules-2026.pdf',
    cover: '/brand-assets/brandbook-covers/affidea-subbrand-rules-2026.png',
    size: '6.1 MB',
    status: 'Canonic',
    note: 'Reguli de lockup, ierarhie și relație cu brandul mamă.',
  },
  {
    id: 'affidea-kids',
    title: 'Affidea Kids Brand Guidelines',
    brand: 'Affidea Kids',
    version: '2026',
    file: BRAND_DRIVE_URL,
    filename: 'affidea-kids-brand-guidelines-2026.pdf',
    cover: '/brand-assets/brandbook-covers/affidea-kids-brand-guidelines-2026.png',
    size: '15 MB',
    status: 'Aprobat',
    note: 'Identitatea pediatrică, aplicațiile și universul vizual Kids.',
  },
  {
    id: 'affi',
    title: 'Affi — Affidea Brandbook',
    brand: 'Affi / Affidea Kids',
    version: '15.05.2025',
    file: BRAND_DRIVE_URL,
    filename: 'affi-affidea-brandbook-2025.pdf',
    cover: '/brand-assets/brandbook-covers/affi-affidea-brandbook-2025.png',
    size: '3.7 MB',
    status: 'Aprobat',
    note: 'Sursa obligatorie pentru personajul Affi, paletă și Barriecito.',
  },
  {
    id: 'feminacare',
    title: 'FeminaCare Brand Guidelines',
    brand: 'FeminaCare',
    version: 'v1',
    file: BRAND_DRIVE_URL,
    filename: 'feminacare-brand-guidelines.pdf',
    cover: '/brand-assets/brandbook-covers/feminacare-brand-guidelines.png',
    size: '3.9 MB',
    status: 'Aprobat',
    note: 'Sistemul vizual dedicat serviciilor FeminaCare.',
  },
  {
    id: 'oncolink-extended',
    title: 'OncoLink Brandbook — Extended',
    brand: 'OncoLink',
    version: 'Extended',
    file: BRAND_DRIVE_URL,
    filename: 'oncolink-brandbook-extended.pdf',
    cover: '/brand-assets/brandbook-covers/oncolink-brandbook-extended.png',
    size: '9.3 MB',
    status: 'Aprobat',
    note: 'Aplicații extinse și reguli suplimentare ale brandului.',
  },
  {
    id: 'meddirect',
    title: 'MedDirect Brandbook',
    brand: 'MedDirect',
    version: 'Current',
    file: BRAND_DRIVE_URL,
    filename: 'meddirect-brandbook.pdf',
    cover: '/brand-assets/brandbook-covers/meddirect-brandbook.png',
    size: '9 MB',
    status: 'Aprobat',
    note: 'Manualul curent pentru identitatea asociată MedDirect.',
  },
];

const SUBBRAND_DEFAULT = ['subbrand-rules', 'affidea-core'];

export const BRANDBOOK_IDS_BY_BRAND: Record<string, string[]> = {
  affidea: ['affidea-core', 'subbrand-rules'],
  'affidea-kids': ['affidea-kids', 'affi', 'subbrand-rules'],
  oncolink: ['oncolink-extended'],
  meddirect: ['meddirect'],
  'clinicile-affidea': SUBBRAND_DEFAULT,
  'biomed-scan': SUBBRAND_DEFAULT,
  'affidea-hospitals': SUBBRAND_DEFAULT,
  'affidea-medeuropa': SUBBRAND_DEFAULT,
  'affidea-phoenix': SUBBRAND_DEFAULT,
  'affidea-medif-otopeni': SUBBRAND_DEFAULT,
  fortius: SUBBRAND_DEFAULT,
  'affidea-hospitals-sfantul-sava': SUBBRAND_DEFAULT,
  'affidea-hospitals-gmh': SUBBRAND_DEFAULT,
  'clinicile-affidea-gmh': SUBBRAND_DEFAULT,
  'affidea-hospitals-sunmed': SUBBRAND_DEFAULT,
  'affidea-hiperdia-corunca': SUBBRAND_DEFAULT,
  'affidea-primorion': SUBBRAND_DEFAULT,
  'affidea-hospitals-metropolitan': SUBBRAND_DEFAULT,
};

export const getBrandbooks = (slug: string) => {
  const ids = BRANDBOOK_IDS_BY_BRAND[slug] ?? ['affidea-core'];
  return ids.map(id => BRANDBOOKS.find(book => book.id === id)).filter((book): book is BrandbookResource => Boolean(book));
};
