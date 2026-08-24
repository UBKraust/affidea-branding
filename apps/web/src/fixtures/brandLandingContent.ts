import type { MockBrand } from './mockData';
import { getBrandFamily, type BrandFamily } from './brandTaxonomy';

export type BrandLandingContent = {
  sourceMode: 'dedicated' | 'inherited' | 'archive';
  sourceLabel: string;
  headline: string;
  introduction: string;
  role: string;
  logoRule: string;
  colourRule: string;
  typographyRule: string;
  voice: Array<{ title: string; description: string }>;
  principles: Array<{ title: string; description: string }>;
  dos: string[];
  donts: string[];
  applications: Array<{ index: string; title: string; description: string }>;
};

const dedicatedBrandbooks = new Set(['affidea', 'affidea-kids', 'affidea-kids-pediatrie', 'affidea-hospitals-feminacare', 'feminacare-affidea-kids', 'oncolink', 'meddirect']);

const familyRole: Record<BrandFamily, string> = {
  corporate: 'Brandul-mamă și ancora întregului ecosistem Affidea.',
  clinics: 'Identitate clinică orientată spre acces, diagnostic și navigare clară pentru pacient.',
  hospitals: 'Identitate spitalicească din sistemul clinic Affidea, adaptată unui punct local de îngrijire.',
  specialised: 'Serviciu specializat cu personalitate proprie, păstrând Affidea drept ancoră vizuală.',
  associated: 'Identitate asociată sau parteneriat care păstrează echilibrul dintre cele două mărci.',
  archive: 'Identitate istorică păstrată pentru referință, nu pentru producții noi.',
};

const familyLogoRule: Record<BrandFamily, string> = {
  corporate: 'Folosește marca Affidea ca identificator principal. Varianta secundară este permisă numai când spațiul sau formatul nu susțin marca primară.',
  clinics: 'Pe materialele dedicate serviciului, lockup-ul clinic este marca principală. Marca-mamă Affidea trebuie să apară cel puțin o dată și rămâne ancora sistemului.',
  hospitals: 'Păstrează întreg lockup-ul Affidea Hospitals și descriptorul local. Nu separa, nu rearanja și nu reconstrui componentele.',
  specialised: 'Numele specializat poate avea expresie proprie, dar wordmark-ul Affidea trebuie păstrat lizibil, proporțional și inseparabil de lockup.',
  associated: 'Păstrează raportul și distanța aprobate între partener și Affidea. Niciuna dintre mărci nu trebuie să pară anexată accidental.',
  archive: 'Nu utiliza în materiale noi. Pentru reproducerea unei lucrări istorice, folosește numai fișierul arhivat și păstrează contextul original.',
};

const familyColourRule: Record<BrandFamily, string> = {
  corporate: 'Affidea Blue este culoarea principală și ancora vizuală. Friendly Green se folosește pentru acțiuni și mesaje-cheie, iar albastrurile și griurile susțin ierarhia.',
  clinics: 'Affidea Blue trebuie să rămână prezent. Culorile locale pot diferenția serviciul doar în limitele aprobate de arhitectura de sub-brand.',
  hospitals: 'Folosește Affidea Blue ca semnătură comună a rețelei. Nu introduce o paletă locală nouă fără aprobare și documentare.',
  specialised: 'Paleta dedicată poate extinde sistemul, dar trebuie să păstreze o legătură vizibilă cu Affidea Blue și contrast accesibil.',
  associated: 'Culorile trebuie să distingă clar partenerii, păstrând echilibru vizual și lizibilitate egală.',
  archive: 'Păstrează valorile istorice numai pentru reproducere. Nu le transforma în standard curent.',
};

const principles = [
  { title: 'Consistency first', description: 'Elementele de bază și Affidea Blue construiesc recunoaștere în toate piețele.' },
  { title: 'Claritate pentru pacienți', description: 'Brandingul trebuie să facă serviciile ușor de înțeles și de navigat.' },
  { title: 'Flexibilitate controlată', description: 'Diferențierea este permisă numai în interiorul unui sistem comun.' },
  { title: 'Affidea ca ancoră', description: 'Legătura cu brandul-mamă rămâne vizibilă în fiecare aplicație.' },
  { title: 'Construit pentru scalare', description: 'Sistemul trebuie să accepte servicii și locații noi fără pierderea coerenței.' },
];

const applicationsByFamily: Record<BrandFamily, BrandLandingContent['applications']> = {
  corporate: [
    { index: '01', title: 'Corporate & editorial', description: 'Comunicări de grup, prezentări, rapoarte și materiale instituționale.' },
    { index: '02', title: 'Digital products', description: 'Site-uri, interfețe, portaluri și semnături de produs.' },
    { index: '03', title: 'Network presence', description: 'Semnalistică, profile sociale și puncte de contact ale rețelei.' },
  ],
  clinics: [
    { index: '01', title: 'Patient communication', description: 'Campanii, servicii, medici și informații funcționale.' },
    { index: '02', title: 'Clinic experience', description: 'Semnalistică, recepție, orientare și materiale la punctul de îngrijire.' },
    { index: '03', title: 'Local digital', description: 'Pagini de locație, social media și formate promoționale aprobate.' },
  ],
  hospitals: [
    { index: '01', title: 'Hospital identity', description: 'Fațadă, recepție, uniforme și semnalistică medicală.' },
    { index: '02', title: 'Clinical information', description: 'Specialități, echipe, trasee de pacient și informații operaționale.' },
    { index: '03', title: 'Local campaigns', description: 'Campanii și evenimente în care lockup-ul complet rămâne intact.' },
  ],
  specialised: [
    { index: '01', title: 'Dedicated experience', description: 'Mesaje și aplicații adaptate publicului serviciului specializat.' },
    { index: '02', title: 'Character & expression', description: 'Elemente distinctive folosite exclusiv conform manualului dedicat.' },
    { index: '03', title: 'Affidea endorsement', description: 'Semnătura Affidea păstrează încrederea și apartenența la rețea.' },
  ],
  associated: [
    { index: '01', title: 'Co-branding', description: 'Lockup-uri și apariții în care partenerii au ierarhie clară.' },
    { index: '02', title: 'Service communication', description: 'Materiale comerciale și informative guvernate de brandul serviciului.' },
    { index: '03', title: 'Affidea connection', description: 'Endorsement vizibil, fără a absorbi identitatea partenerului.' },
  ],
  archive: [
    { index: '01', title: 'Historical reference', description: 'Consultare și reproducere documentară, fără producții curente.' },
    { index: '02', title: 'Migration evidence', description: 'Referință pentru tranziții, aprobări și continuitatea asseturilor.' },
    { index: '03', title: 'Restricted reuse', description: 'Orice reutilizare necesită verificare și aprobare explicită.' },
  ],
};

const overrides: Partial<Record<string, Partial<BrandLandingContent>>> = {
  affidea: {
    headline: 'Precision with care.',
    introduction: 'Affidea este fundația tuturor comunicărilor: un sistem recognoscibil, precis și suficient de flexibil pentru o rețea europeană complexă.',
    typographyRule: 'Harmonia Sans W1G este familia principală. Ierarhia folosește Light pentru expresie editorială și Semibold/Bold pentru informație funcțională.',
  },
  'affidea-kids': {
    headline: 'Grijă medicală pe limba copiilor.',
    introduction: 'Affidea Kids combină încrederea clinică Affidea cu un univers pediatric prietenos. Affi și Barriecito sunt elemente dedicate, nu extensii decorative ale brandului corporate.',
    typographyRule: 'Barriecito este rezervat titlurilor și accentelor Affi. Harmonia Sans susține textul, datele medicale și interfața.',
  },
  'affidea-kids-pediatrie': {
    headline: 'Pediatrie clară, umană și recognoscibilă.',
    typographyRule: 'Barriecito poate susține expresia pediatrică, iar Harmonia Sans rămâne obligatoriu pentru informația medicală și funcțională.',
  },
  oncolink: {
    headline: 'Expertiză oncologică, conectată.',
    introduction: 'OncoLink este o identitate asociată cu manual dedicat. Pagina separă regulile proprii ale serviciului de regulile Affidea care se aplică doar în contexte de endorsement sau parteneriat.',
  },
  meddirect: {
    headline: 'Acces medical direct pentru organizații.',
    introduction: 'MedDirect are un brandbook propriu și trebuie tratat ca identitate asociată, nu ca un lockup clinic Affidea improvizat.',
  },
};

export const getBrandLandingContent = (brand: MockBrand): BrandLandingContent => {
  const family = getBrandFamily(brand.slug);
  const sourceMode = family === 'archive' ? 'archive' : dedicatedBrandbooks.has(brand.slug) ? 'dedicated' : 'inherited';
  const base: BrandLandingContent = {
    sourceMode,
    sourceLabel: sourceMode === 'dedicated'
      ? 'Manual dedicat + reguli Affidea aplicabile'
      : sourceMode === 'archive'
        ? 'Sursă arhivată - numai pentru referință'
        : 'Reguli moștenite din Affidea v1.6 și Sub-brand Rules 2026',
    headline: `${brand.name_ro}, în sistemul Affidea.`,
    introduction: `${brand.description_ro} Pagina reunește regulile verificate, fișierele aprobate și sursele canonice într-un singur punct de lucru.`,
    role: familyRole[family],
    logoRule: familyLogoRule[family],
    colourRule: familyColourRule[family],
    typographyRule: brand.affi_enabled
      ? 'Barriecito poate fi folosit numai în expresia Affi/Kids aprobată. Harmonia Sans rămâne familia funcțională.'
      : 'Harmonia Sans W1G este familia Affidea. Folosește greutăți clare și o ierarhie simplă, fără fonturi decorative neaprobate.',
    voice: [
      { title: 'Clar', description: 'Informația medicală este directă, structurată și ușor de scanat.' },
      { title: 'Uman', description: 'Vorbim cu respect și empatie, fără ton rece sau alarmist.' },
      { title: 'Precis', description: 'Promisiunile, termenii și datele sunt specifice și verificabile.' },
      { title: 'Încrezător', description: 'Autoritatea vine din competență, nu din superlative sau presiune.' },
    ],
    principles,
    dos: [
      'Folosește numai lockup-ul aprobat și păstrează proporțiile originale.',
      'Menține spațiul de protecție egal cu înălțimea X a wordmark-ului.',
      'Verifică contrastul și lizibilitatea înainte de export.',
      'Păstrează linkul către sursa canonică Drive în livrabil.',
    ],
    donts: [
      'Nu recrea logoul din text și nu modifica ordinea componentelor.',
      'Nu aplica umbre, contururi, gradient sau culori neverificate.',
      'Nu folosi asseturi de lucru, temporare sau din arhivă în producții noi.',
      'Nu presupune că un fișier mai nou este automat și cel aprobat.',
    ],
    applications: applicationsByFamily[family],
  };

  return { ...base, ...overrides[brand.slug] };
};
