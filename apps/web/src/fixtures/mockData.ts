export interface MockBrand {
  id: string;
  slug: string;
  name_ro: string;
  name_en: string;
  description_ro: string;
  description_en: string;
  architecture_type: 'parent' | 'clinical' | 'specialised' | 'acquisition_transitional' | 'partnership' | 'associated';
  category: string;
  is_active: boolean;
  affi_enabled: boolean;
  asset_count: number;
  last_updated: string;
  canonical_logo_url?: string;
  colors: Array<{ name: string; hex: string; rgb: string; cmyk: string; pantone?: string }>;
}

export interface MockAsset {
  id: string;
  brand_slug: string;
  filename: string;
  mime_type: string;
  extension: string;
  category: 'logo' | 'guideline' | 'font' | 'template' | 'other';
  variant?: string;
  byte_size: number;
  dimensions?: string;
  approval_status: 'approved' | 'pending' | 'rejected' | 'archived';
  is_canonical: boolean;
  source_path: string;
  updated_at: string;
  preview_url?: string;
}

export interface MockGuideline {
  id: string;
  brand_slug: string;
  title_ro: string;
  title_en: string;
  version: string;
  status: 'canonical' | 'approved' | 'working' | 'archive';
  page_count: number;
  filename: string;
  byte_size: number;
  updated_at: string;
}

export interface MockCentre {
  id: string;
  number: string;
  name: string;
  region: string;
  city: string;
  address: string;
  contact_person: string;
  phone: string;
  legal_entity: string;
}

export interface MockAuditLog {
  id: string;
  actor_email: string;
  action: string;
  target_type: string;
  target_name: string;
  created_at: string;
}

export const MOCK_BRANDS: MockBrand[] = [
  {
    id: 'b1',
    slug: 'affidea',
    name_ro: 'Affidea',
    name_en: 'Affidea',
    description_ro: 'Brandul mamă global. Lider european în servicii de imagistică medicală și ambulatoriu.',
    description_en: 'Global parent brand. European leader in diagnostic imaging and outpatient services.',
    architecture_type: 'parent',
    category: 'Corporate',
    is_active: true,
    affi_enabled: false,
    asset_count: 18,
    last_updated: '2026-08-20',
    canonical_logo_url: '/brand-assets/logos/affidea-parent.svg',
    colors: [
      { name: 'Affidea Blue', hex: '#418FDE', rgb: 'rgb(65, 143, 222)', cmyk: 'C71 M35 Y0 K0', pantone: 'Pantone 279 C' },
      { name: 'Dark Blue', hex: '#2D69B3', rgb: 'rgb(45, 105, 179)', cmyk: 'C82 M55 Y0 K0' },
      { name: 'Light Blue', hex: '#98BFE6', rgb: 'rgb(152, 191, 230)', cmyk: 'C39 M16 Y0 K0' },
      { name: 'Dark Grey', hex: '#353A40', rgb: 'rgb(53, 58, 64)', cmyk: 'C17 M9 Y0 K75' },
    ],
  },
  {
    id: 'b2',
    slug: 'clinicile-affidea',
    name_ro: 'Clinicile Affidea',
    name_en: 'Affidea Clinics',
    description_ro: 'Rețeaua națională de clinici multidisciplinare și centre de imagistică.',
    description_en: 'National network of multidisciplinary clinics and diagnostic imaging centres.',
    architecture_type: 'clinical',
    category: 'Clinici',
    is_active: true,
    affi_enabled: false,
    asset_count: 12,
    last_updated: '2026-08-18',
    canonical_logo_url: '/brand-assets/logos/clinicile-affidea.svg',
    colors: [
      { name: 'Affidea Blue', hex: '#418FDE', rgb: 'rgb(65, 143, 222)', cmyk: 'C71 M35 Y0 K0', pantone: 'Pantone 279 C' },
      { name: 'Dark Blue', hex: '#2D69B3', rgb: 'rgb(45, 105, 179)', cmyk: 'C82 M55 Y0 K0' },
    ],
  },
  {
    id: 'b3',
    slug: 'affidea-kids',
    name_ro: 'Affidea Kids',
    name_en: 'Affidea Kids',
    description_ro: 'Divizia pediatrică de excelență. Centru flagship Dorobanți cu imagistică non-traumatică.',
    description_en: 'Pediatric centre of excellence. Flagship Dorobanți centre with non-traumatic imaging.',
    architecture_type: 'specialised',
    category: 'Pediatrie',
    is_active: true,
    affi_enabled: true,
    asset_count: 15,
    last_updated: '2026-08-22',
    canonical_logo_url: '/brand-assets/logos/affidea-kids.svg',
    colors: [
      { name: 'Dark Blue', hex: '#2D69B3', rgb: 'rgb(45, 105, 179)', cmyk: 'C85 M60 Y0 K0', pantone: 'Pantone 653 C' },
      { name: 'Affidea Blue', hex: '#4181D0', rgb: 'rgb(70, 140, 202)', cmyk: 'C71 M36 Y0 K0', pantone: 'Conform Brandbook Affi' },
      { name: 'Night Blue', hex: '#002A56', rgb: 'rgb(0, 42, 86)', cmyk: 'C34 M17 Y0 K66', pantone: 'Pantone 648 C' },
      { name: 'Light Blue', hex: '#98BFE6', rgb: 'rgb(152, 191, 230)', cmyk: 'C31 M15 Y0 K0', pantone: 'Pantone 278 C' },
      { name: 'Grey', hex: '#F2F2F2', rgb: 'rgb(242, 242, 242)', cmyk: 'C4 M2 Y2 K0', pantone: 'Pantone 656 C' },
    ],
  },
  {
    id: 'b4',
    slug: 'biomed-scan',
    name_ro: 'Biomed Scan',
    name_en: 'Biomed Scan',
    description_ro: 'Brand în tranziție de integrare în rețeaua Affidea.',
    description_en: 'Transitional brand undergoing integration into Affidea network.',
    architecture_type: 'acquisition_transitional',
    category: 'Tranziție',
    is_active: true,
    affi_enabled: false,
    asset_count: 8,
    last_updated: '2026-08-10',
    canonical_logo_url: '/brand-assets/logos/biomed-scan.svg',
    colors: [
      { name: 'Biomed Blue', hex: '#1E3A8A', rgb: 'rgb(30, 58, 138)', cmyk: 'C100 M75 Y0 K20' },
    ],
  },
  {
    id: 'b5',
    slug: 'affidea-hospitals',
    name_ro: 'Affidea Hospitals',
    name_en: 'Affidea Hospitals',
    description_ro: 'Divizia spitalicească și chirurgicală de înaltă performanță.',
    description_en: 'High performance hospital and surgical division.',
    architecture_type: 'clinical',
    category: 'Spitale',
    is_active: true,
    affi_enabled: false,
    asset_count: 9,
    last_updated: '2026-08-14',
    canonical_logo_url: '/brand-assets/logos/affidea-hospitals.svg',
    colors: [
      { name: 'Hospital Navy', hex: '#0F172A', rgb: 'rgb(15, 23, 42)', cmyk: 'C100 M85 Y35 K60' },
    ],
  },
  {
    id: 'b6',
    slug: 'affidea-medeuropa',
    name_ro: 'Affidea MedEuropa',
    name_en: 'Affidea MedEuropa',
    description_ro: 'Centru integrat de oncologie și radioterapie.',
    description_en: 'Integrated oncology and radiotherapy centre.',
    architecture_type: 'acquisition_transitional',
    category: 'Oncologie',
    is_active: true,
    affi_enabled: false,
    asset_count: 10,
    last_updated: '2026-08-19',
    canonical_logo_url: '/brand-assets/logos/affidea-medeuropa.svg',
    colors: [
      { name: 'MedEuropa Teal', hex: '#0D9488', rgb: 'rgb(13, 148, 136)', cmyk: 'C85 M0 Y40 K10' },
    ],
  },
  {
    id: 'b7',
    slug: 'affidea-phoenix',
    name_ro: 'Affidea Phoenix',
    name_en: 'Affidea Phoenix',
    description_ro: 'Rețea regională Oltenia integrată în rețeaua națională.',
    description_en: 'Oltenia regional diagnostic network integrated into national network.',
    architecture_type: 'acquisition_transitional',
    category: 'Regional',
    is_active: true,
    affi_enabled: false,
    asset_count: 6,
    last_updated: '2026-08-05',
    canonical_logo_url: '/brand-assets/logos/affidea-phoenix.svg',
    colors: [
      { name: 'Phoenix Red', hex: '#B91C1C', rgb: 'rgb(185, 28, 28)', cmyk: 'C15 M100 Y90 K10' },
    ],
  },
  {
    id: 'b8',
    slug: 'affidea-medif-otopeni',
    name_ro: 'Affidea MedIF Otopeni',
    name_en: 'Affidea MedIF Otopeni',
    description_ro: 'Centru specializat în servicii medicale de zonă de tranzit și comunitate.',
    description_en: 'Specialized community and transit medical services centre.',
    architecture_type: 'acquisition_transitional',
    category: 'Comunitate',
    is_active: false,
    affi_enabled: false,
    asset_count: 4,
    last_updated: '2026-07-28',
    canonical_logo_url: '/brand-assets/logos/affidea-medif.svg',
    colors: [
      { name: 'MedIF Slate', hex: '#475569', rgb: 'rgb(71, 85, 105)', cmyk: 'C60 M40 Y30 K20' },
    ],
  },
  {
    id: 'b9',
    slug: 'fortius',
    name_ro: 'Fortius',
    name_en: 'Fortius',
    description_ro: 'Partener de excelență în medicină sportivă Part of Affidea Group.',
    description_en: 'Sports medicine partner of excellence Part of Affidea Group.',
    architecture_type: 'partnership',
    category: 'Medicină Sportivă',
    is_active: true,
    affi_enabled: false,
    asset_count: 7,
    last_updated: '2026-08-12',
    canonical_logo_url: '/brand-assets/logos/fortius-part-of-affidea.svg',
    colors: [
      { name: 'Fortius Blue', hex: '#1D4ED8', rgb: 'rgb(29, 78, 216)', cmyk: 'C90 M60 Y0 K0' },
    ],
  },
  {
    id: 'b10',
    slug: 'oncolink',
    name_ro: 'OncoLink',
    name_en: 'OncoLink',
    description_ro: 'Platformă de telemedicină și a doua opinie oncologică asociată.',
    description_en: 'Associated telemedicine and second-opinion oncology platform.',
    architecture_type: 'associated',
    category: 'Digital Health',
    is_active: true,
    affi_enabled: false,
    asset_count: 5,
    last_updated: '2026-08-02',
    canonical_logo_url: '/brand-assets/logos/oncolink.svg',
    colors: [
      { name: 'Onco Violet', hex: '#6D28D9', rgb: 'rgb(109, 40, 217)', cmyk: 'C75 M90 Y0 K0' },
    ],
  },
  {
    id: 'b11',
    slug: 'meddirect',
    name_ro: 'MedDirect',
    name_en: 'MedDirect',
    description_ro: 'Serviciu asociat de abonamente medicale corporate.',
    description_en: 'Associated corporate medical subscription service.',
    architecture_type: 'associated',
    category: 'Corporate Health',
    is_active: true,
    affi_enabled: false,
    asset_count: 4,
    last_updated: '2026-07-30',
    canonical_logo_url: '/brand-assets/logos/meddirect.png',
    colors: [
      { name: 'MedDirect Emerald', hex: '#047857', rgb: 'rgb(4, 120, 87)', cmyk: 'C85 M10 Y75 K15' },
    ],
  },
  {
    id: 'b12', slug: 'affidea-hospitals-sfantul-sava', name_ro: 'Affidea Hospitals — Sfântul Sava', name_en: 'Affidea Hospitals — Sfantul Sava',
    description_ro: 'Lockup local aprobat pentru spitalul Sfântul Sava.', description_en: 'Approved local lockup for Sfantul Sava Hospital.', architecture_type: 'clinical', category: 'Spitale', is_active: true, affi_enabled: false, asset_count: 2, last_updated: '2026-08-24', canonical_logo_url: '/brand-assets/logos/sfantul-sava.png',
    colors: [{ name: 'Affidea Blue', hex: '#418FDE', rgb: 'rgb(65, 143, 222)', cmyk: 'C71 M35 Y0 K0', pantone: 'Pantone 279 C' }],
  },
  {
    id: 'b13', slug: 'affidea-hospitals-gmh', name_ro: 'Affidea Hospitals — GMH', name_en: 'Affidea Hospitals — GMH',
    description_ro: 'Lockup spitalicesc GMH din biblioteca oficială.', description_en: 'GMH hospital lockup from the official library.', architecture_type: 'clinical', category: 'Spitale', is_active: true, affi_enabled: false, asset_count: 2, last_updated: '2026-08-24', canonical_logo_url: '/brand-assets/logos/gmh-hospital.png',
    colors: [{ name: 'Affidea Blue', hex: '#418FDE', rgb: 'rgb(65, 143, 222)', cmyk: 'C71 M35 Y0 K0', pantone: 'Pantone 279 C' }],
  },
  {
    id: 'b14', slug: 'clinicile-affidea-gmh', name_ro: 'Clinicile Affidea — GMH', name_en: 'Affidea Clinics — GMH',
    description_ro: 'Identitatea locală GMH pentru rețeaua Clinicile Affidea.', description_en: 'GMH local identity for the Affidea Clinics network.', architecture_type: 'clinical', category: 'Clinici', is_active: true, affi_enabled: false, asset_count: 1, last_updated: '2026-08-24', canonical_logo_url: '/brand-assets/logos/clinicile-gmh.png',
    colors: [{ name: 'Affidea Blue', hex: '#418FDE', rgb: 'rgb(65, 143, 222)', cmyk: 'C71 M35 Y0 K0', pantone: 'Pantone 279 C' }],
  },
  {
    id: 'b15', slug: 'affidea-hospitals-sunmed', name_ro: 'Affidea Hospitals — Sunmed', name_en: 'Affidea Hospitals — Sunmed',
    description_ro: 'Lockup local Sunmed din sistemul Affidea Hospitals.', description_en: 'Sunmed local lockup in the Affidea Hospitals system.', architecture_type: 'clinical', category: 'Spitale', is_active: true, affi_enabled: false, asset_count: 2, last_updated: '2026-08-24', canonical_logo_url: '/brand-assets/logos/sunmed.png',
    colors: [{ name: 'Affidea Blue', hex: '#418FDE', rgb: 'rgb(65, 143, 222)', cmyk: 'C71 M35 Y0 K0', pantone: 'Pantone 279 C' }],
  },
  {
    id: 'b16', slug: 'affidea-hiperdia-corunca', name_ro: 'Affidea Hiperdia — Corunca', name_en: 'Affidea Hiperdia — Corunca',
    description_ro: 'Lockup local pentru centrul Hiperdia Corunca.', description_en: 'Local lockup for the Hiperdia Corunca centre.', architecture_type: 'acquisition_transitional', category: 'Regional', is_active: true, affi_enabled: false, asset_count: 3, last_updated: '2026-08-24', canonical_logo_url: '/brand-assets/logos/hiperdia-corunca.png',
    colors: [{ name: 'Affidea Blue', hex: '#418FDE', rgb: 'rgb(65, 143, 222)', cmyk: 'C71 M35 Y0 K0', pantone: 'Pantone 279 C' }],
  },
  {
    id: 'b17', slug: 'affidea-primorion', name_ro: 'Affidea Primorion', name_en: 'Affidea Primorion',
    description_ro: 'Identitate locală integrată în arhitectura Affidea.', description_en: 'Local identity integrated into the Affidea architecture.', architecture_type: 'acquisition_transitional', category: 'Tranziție', is_active: true, affi_enabled: false, asset_count: 2, last_updated: '2026-08-24', canonical_logo_url: '/brand-assets/logos/primorion.png',
    colors: [{ name: 'Affidea Blue', hex: '#418FDE', rgb: 'rgb(65, 143, 222)', cmyk: 'C71 M35 Y0 K0', pantone: 'Pantone 279 C' }],
  },
  {
    id: 'b18', slug: 'affidea-hospitals-metropolitan', name_ro: 'Affidea Hospitals — Metropolitan', name_en: 'Affidea Hospitals — Metropolitan',
    description_ro: 'Lockup local Metropolitan din sistemul Affidea Hospitals.', description_en: 'Metropolitan local lockup in the Affidea Hospitals system.', architecture_type: 'clinical', category: 'Spitale', is_active: true, affi_enabled: false, asset_count: 1, last_updated: '2026-08-24', canonical_logo_url: '/brand-assets/logos/metropolitan.png',
    colors: [{ name: 'Affidea Blue', hex: '#418FDE', rgb: 'rgb(65, 143, 222)', cmyk: 'C71 M35 Y0 K0', pantone: 'Pantone 279 C' }],
  },
  {
    id: 'b19', slug: 'affidea-explora-suceava', name_ro: 'Affidea Explora — Suceava', name_en: 'Affidea Explora — Suceava',
    description_ro: 'Lockup local aprobat pentru centrul Explora din Suceava.', description_en: 'Approved local lockup for the Explora centre in Suceava.', architecture_type: 'acquisition_transitional', category: 'Regional', is_active: true, affi_enabled: false, asset_count: 5, last_updated: '2026-08-24', canonical_logo_url: '/brand-assets/logos/explora-suceava.svg',
    colors: [{ name: 'Affidea Blue', hex: '#418FDE', rgb: 'rgb(65, 143, 222)', cmyk: 'C71 M35 Y0 K0', pantone: 'Pantone 279 C' }],
  },
  {
    id: 'b20', slug: 'affidea-kids-pediatrie', name_ro: 'Affidea Kids — Pediatrie', name_en: 'Affidea Kids — Paediatrics',
    description_ro: 'Lockup-ul pediatric complet, distinct de marca Affidea Kids fără descriptor.', description_en: 'Full paediatric lockup, distinct from the Affidea Kids mark without descriptor.', architecture_type: 'specialised', category: 'Pediatrie', is_active: true, affi_enabled: true, asset_count: 5, last_updated: '2026-08-24', canonical_logo_url: '/brand-assets/logos/affidea-kids-pediatrie.svg',
    colors: [{ name: 'Affidea Blue', hex: '#418FDE', rgb: 'rgb(65, 143, 222)', cmyk: 'C71 M35 Y0 K0', pantone: 'Pantone 279 C' }],
  },
  {
    id: 'b21', slug: 'affidea-hospitals-heka', name_ro: 'Affidea Hospitals — Heka', name_en: 'Affidea Hospitals — Heka',
    description_ro: 'Lockup spitalicesc Heka din biblioteca oficială.', description_en: 'Heka hospital lockup from the official library.', architecture_type: 'clinical', category: 'Spitale', is_active: true, affi_enabled: false, asset_count: 6, last_updated: '2026-08-24', canonical_logo_url: '/brand-assets/logos/heka.svg',
    colors: [{ name: 'Affidea Blue', hex: '#418FDE', rgb: 'rgb(65, 143, 222)', cmyk: 'C71 M35 Y0 K0', pantone: 'Pantone 279 C' }],
  },
  {
    id: 'b22', slug: 'affidea-hospitals-fundeni', name_ro: 'Affidea Hospitals — Fundeni', name_en: 'Affidea Hospitals — Fundeni',
    description_ro: 'Lockup spitalicesc Fundeni din biblioteca oficială.', description_en: 'Fundeni hospital lockup from the official library.', architecture_type: 'clinical', category: 'Spitale', is_active: true, affi_enabled: false, asset_count: 6, last_updated: '2026-08-24', canonical_logo_url: '/brand-assets/logos/fundeni.svg',
    colors: [{ name: 'Affidea Blue', hex: '#418FDE', rgb: 'rgb(65, 143, 222)', cmyk: 'C71 M35 Y0 K0', pantone: 'Pantone 279 C' }],
  },
  {
    id: 'b23', slug: 'affidea-hospitals-feminacare', name_ro: 'Affidea Hospitals — FeminaCare', name_en: 'Affidea Hospitals — FeminaCare',
    description_ro: 'Identitatea FeminaCare în sistemul Affidea Hospitals.', description_en: 'FeminaCare identity in the Affidea Hospitals system.', architecture_type: 'clinical', category: 'Spitale', is_active: true, affi_enabled: false, asset_count: 8, last_updated: '2026-08-24', canonical_logo_url: '/brand-assets/logos/feminacare.svg',
    colors: [{ name: 'Affidea Blue', hex: '#418FDE', rgb: 'rgb(65, 143, 222)', cmyk: 'C71 M35 Y0 K0', pantone: 'Pantone 279 C' }],
  },
  {
    id: 'b24', slug: 'affidea-clinica-sia', name_ro: 'Affidea — Clinica Sia', name_en: 'Affidea — Sia Clinic',
    description_ro: 'Lockup local aprobat pentru Clinica Sia.', description_en: 'Approved local lockup for Sia Clinic.', architecture_type: 'acquisition_transitional', category: 'Clinici', is_active: true, affi_enabled: false, asset_count: 6, last_updated: '2026-08-24', canonical_logo_url: '/brand-assets/logos/clinica-sia.svg',
    colors: [{ name: 'Affidea Blue', hex: '#418FDE', rgb: 'rgb(65, 143, 222)', cmyk: 'C71 M35 Y0 K0', pantone: 'Pantone 279 C' }],
  },
  {
    id: 'b25', slug: 'fortius-clinicile-affidea', name_ro: 'Fortius Clinic + Clinicile Affidea', name_en: 'Fortius Clinic + Affidea Clinics',
    description_ro: 'Lockup comun pentru Fortius Clinic și rețeaua Clinicile Affidea.', description_en: 'Joint lockup for Fortius Clinic and the Affidea Clinics network.', architecture_type: 'partnership', category: 'Medicină Sportivă', is_active: true, affi_enabled: false, asset_count: 4, last_updated: '2026-08-24', canonical_logo_url: '/brand-assets/logos/fortius-clinicile-affidea.svg',
    colors: [{ name: 'Fortius Blue', hex: '#1D4ED8', rgb: 'rgb(29, 78, 216)', cmyk: 'C90 M60 Y0 K0' }],
  },
  {
    id: 'b26', slug: 'feminacare-affidea-kids', name_ro: 'FeminaCare + Affidea Kids', name_en: 'FeminaCare + Affidea Kids',
    description_ro: 'Lockup combinat aprobat pentru serviciile FeminaCare și Affidea Kids.', description_en: 'Approved combined lockup for FeminaCare and Affidea Kids services.', architecture_type: 'specialised', category: 'Pediatrie', is_active: true, affi_enabled: true, asset_count: 3, last_updated: '2026-08-24', canonical_logo_url: '/brand-assets/logos/feminacare-affidea-kids.jpg',
    colors: [{ name: 'Affidea Blue', hex: '#418FDE', rgb: 'rgb(65, 143, 222)', cmyk: 'C71 M35 Y0 K0', pantone: 'Pantone 279 C' }],
  },
  {
    id: 'b27', slug: 'affidea-hospitals-armonia', name_ro: 'Affidea Hospitals — Armonia', name_en: 'Affidea Hospitals — Armonia',
    description_ro: 'Identitate păstrată pentru referință istorică; folderul sursă este arhivat.', description_en: 'Identity retained for historical reference; the source folder is archived.', architecture_type: 'clinical', category: 'Arhivă', is_active: false, affi_enabled: false, asset_count: 10, last_updated: '2026-08-24', canonical_logo_url: '/brand-assets/logos/armonia.svg',
    colors: [{ name: 'Affidea Blue', hex: '#418FDE', rgb: 'rgb(65, 143, 222)', cmyk: 'C71 M35 Y0 K0', pantone: 'Pantone 279 C' }],
  },
];

export const MOCK_ASSETS: MockAsset[] = [
  {
    id: 'a1',
    brand_slug: 'affidea',
    filename: 'Affidea_Primary_Logo_FullColor.svg',
    mime_type: 'image/svg+xml',
    extension: 'svg',
    category: 'logo',
    variant: 'Full Color - White Background',
    byte_size: 48200,
    dimensions: '1200x400 px',
    approval_status: 'approved',
    is_canonical: true,
    source_path: '00_Affidea_Parent/Logos/SVG/Affidea_Primary_Logo_FullColor.svg',
    updated_at: '2026-08-20',
  },
  {
    id: 'a2',
    brand_slug: 'affidea',
    filename: 'Affidea_Primary_Logo_White.png',
    mime_type: 'image/png',
    extension: 'png',
    category: 'logo',
    variant: 'White - Dark Background',
    byte_size: 124000,
    dimensions: '2400x800 px',
    approval_status: 'approved',
    is_canonical: false,
    source_path: '00_Affidea_Parent/Logos/PNG/Affidea_Primary_Logo_White.png',
    updated_at: '2026-08-20',
  },
  {
    id: 'a3',
    brand_slug: 'affidea-kids',
    filename: 'Affidea_Kids_Logo_Main.svg',
    mime_type: 'image/svg+xml',
    extension: 'svg',
    category: 'logo',
    variant: 'Full Color - Kids Lockup',
    byte_size: 64500,
    dimensions: '1600x600 px',
    approval_status: 'approved',
    is_canonical: true,
    source_path: '12_Affidea_Kids_Pediatrie/Logos/Affidea_Kids_Logo_Main.svg',
    updated_at: '2026-08-22',
  },
  {
    id: 'a4',
    brand_slug: 'affidea-kids',
    filename: 'Affi_Mascot_Vector_Set.eps',
    mime_type: 'application/postscript',
    extension: 'eps',
    category: 'other',
    variant: 'Affi Mascot High-Res',
    byte_size: 4500000,
    approval_status: 'approved',
    is_canonical: false,
    source_path: '12_Affidea_Kids_Pediatrie/Illustrations/Affi_Mascot_Vector_Set.eps',
    updated_at: '2026-08-22',
  },
  {
    id: 'a5',
    brand_slug: 'affidea',
    filename: 'Harmonia_Sans_W1G_Regular.ttf',
    mime_type: 'font/ttf',
    extension: 'ttf',
    category: 'font',
    variant: 'Primary Typography',
    byte_size: 340000,
    approval_status: 'approved',
    is_canonical: true,
    source_path: '00_Affidea_Parent/Fonts/Harmonia_Sans_W1G_Regular.ttf',
    updated_at: '2026-08-01',
  },
  {
    id: 'a6',
    brand_slug: 'clinicile-affidea',
    filename: 'Clinicile_Affidea_Logo_Horizontal.eps',
    mime_type: 'application/postscript',
    extension: 'eps',
    category: 'logo',
    variant: 'Print Vector EPS',
    byte_size: 1850000,
    approval_status: 'approved',
    is_canonical: true,
    source_path: '01_Clinicile_Affidea/Logos/Clinicile_Affidea_Logo_Horizontal.eps',
    updated_at: '2026-08-18',
  },
  {
    id: 'a7',
    brand_slug: 'affidea',
    filename: 'Affidea_Social_Media_Templates_2026.zip',
    mime_type: 'application/zip',
    extension: 'zip',
    category: 'template',
    variant: 'Figma & Photoshop',
    byte_size: 28400000,
    approval_status: 'approved',
    is_canonical: false,
    source_path: '00_Affidea_Parent/Templates/Affidea_Social_Media_Templates_2026.zip',
    updated_at: '2026-08-15',
  },
  {
    id: 'a8',
    brand_slug: 'biomed-scan',
    filename: 'Biomed_Scan_Transition_CoBranding_Preview.pdf',
    mime_type: 'application/pdf',
    extension: 'pdf',
    category: 'guideline',
    variant: 'Co-Branding Draft',
    byte_size: 2100000,
    approval_status: 'pending',
    is_canonical: false,
    source_path: '02_Biomed_Scan/Guidelines/Biomed_Scan_Transition_CoBranding_Preview.pdf',
    updated_at: '2026-08-24',
  },
];

export const MOCK_GUIDELINES: MockGuideline[] = [
  {
    id: 'g1',
    brand_slug: 'affidea',
    title_ro: 'Manualul de Identitate Vizuală Affidea v1.6 (2026)',
    title_en: 'Affidea Visual Identity Manual v1.6 (2026)',
    version: '1.6',
    status: 'canonical',
    page_count: 64,
    filename: 'Affidea_Brand_Guidelines_v1.6_2026.pdf',
    byte_size: 12400000,
    updated_at: '2026-08-01',
  },
  {
    id: 'g2',
    brand_slug: 'affidea-kids',
    title_ro: 'Ghid de Utilizare Mascotă și Brand Affidea Kids',
    title_en: 'Affidea Kids & Mascot Affi Usage Manual',
    version: '1.0',
    status: 'approved',
    page_count: 28,
    filename: 'Affidea_Kids_Brand_Book_2026.pdf',
    byte_size: 8900000,
    updated_at: '2026-08-22',
  },
  {
    id: 'g3',
    brand_slug: 'clinicile-affidea',
    title_ro: 'Standarde de Semnalistică și Design Ambiental Clinici',
    title_en: 'Clinic Signage & Environmental Design Standards',
    version: '2.1',
    status: 'approved',
    page_count: 42,
    filename: 'Clinicile_Affidea_Signage_Manual.pdf',
    byte_size: 15600000,
    updated_at: '2026-08-15',
  },
  {
    id: 'g4',
    brand_slug: 'biomed-scan',
    title_ro: 'Reguli de Co-Branding și Tranziție Biomed Scan',
    title_en: 'Biomed Scan Co-Branding & Transition Rules',
    version: '0.9',
    status: 'working',
    page_count: 14,
    filename: 'Biomed_Scan_CoBranding_Rules_Draft.pdf',
    byte_size: 3200000,
    updated_at: '2026-08-24',
  },
];

export const MOCK_AUDIT_LOGS: MockAuditLog[] = [
  {
    id: 'log-1',
    actor_email: 'octavian.maier@outofspace.ro',
    action: 'brand.activate',
    target_type: 'Brand',
    target_name: 'Affidea Kids',
    created_at: '2026-08-22 14:32',
  },
  {
    id: 'log-2',
    actor_email: 'admin@affidea.ro',
    action: 'asset.approve',
    target_type: 'Asset',
    target_name: 'Affidea_Primary_Logo_FullColor.svg',
    created_at: '2026-08-20 11:15',
  },
  {
    id: 'log-3',
    actor_email: 'sync-system@cloudflare.worker',
    action: 'sync.completed',
    target_type: 'Google Drive',
    target_name: 'Full Recursive Crawl (142 files)',
    created_at: '2026-08-24 13:30',
  },
];
