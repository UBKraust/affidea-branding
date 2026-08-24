import React, { useState } from 'react';
import { useI18n } from '../i18n/i18nContext';
import { Badge } from '@affidea/ui';
import { BRANDBOOKS } from '../fixtures/brandResources';

type LibraryAsset = {
  id: string;
  filename: string;
  brand: string;
  category: 'logo' | 'guideline';
  extension: 'svg' | 'png' | 'jpg' | 'pdf';
  source: string;
  preview: string;
  detail: string;
};

const BRANDBOOK_ASSETS: LibraryAsset[] = BRANDBOOKS.map(book => ({
  id: `brandbook-${book.id}`,
  filename: book.filename,
  brand: book.brand,
  category: 'guideline',
  extension: 'pdf',
  source: book.file,
  preview: book.cover,
  detail: `${book.title}. ${book.note}`,
}));

const LOCAL_ASSETS: LibraryAsset[] = [
  { id: 'affidea', filename: 'affidea-parent.svg', brand: 'Affidea', category: 'logo', extension: 'svg', source: '/brand-assets/logos/affidea-parent.svg', preview: '/brand-assets/logos/affidea-parent.svg', detail: 'Logo corporate vectorial, extras din lockup-ul oficial.' },
  { id: 'clinicile', filename: 'clinicile-affidea.svg', brand: 'Clinicile Affidea', category: 'logo', extension: 'svg', source: '/brand-assets/logos/clinicile-affidea.svg', preview: '/brand-assets/logos/clinicile-affidea.svg', detail: 'Lockup principal pentru rețeaua de clinici.' },
  { id: 'kids', filename: 'affidea-kids.svg', brand: 'Affidea Kids', category: 'logo', extension: 'svg', source: '/brand-assets/logos/affidea-kids.svg', preview: '/brand-assets/logos/affidea-kids.svg', detail: 'Logo pediatrie, variantă full colour.' },
  { id: 'kids-white', filename: 'affidea-kids-white.svg', brand: 'Affidea Kids', category: 'logo', extension: 'svg', source: '/brand-assets/logos/affidea-kids-white.svg', preview: '/brand-assets/logos/affidea-kids.svg', detail: 'Variantă albă pentru fundal închis.' },
  { id: 'biomed', filename: 'biomed-scan.svg', brand: 'Biomed Scan', category: 'logo', extension: 'svg', source: '/brand-assets/logos/biomed-scan.svg', preview: '/brand-assets/logos/biomed-scan.svg', detail: 'Lockup de tranziție aprobat.' },
  { id: 'hospitals', filename: 'affidea-hospitals.svg', brand: 'Affidea Hospitals', category: 'logo', extension: 'svg', source: '/brand-assets/logos/affidea-hospitals.svg', preview: '/brand-assets/logos/affidea-hospitals.svg', detail: 'Logo divizie spitale.' },
  { id: 'medeuropa', filename: 'affidea-medeuropa.svg', brand: 'Affidea MedEuropa', category: 'logo', extension: 'svg', source: '/brand-assets/logos/affidea-medeuropa.svg', preview: '/brand-assets/logos/affidea-medeuropa.svg', detail: 'Lockup oncologie și radioterapie.' },
  { id: 'phoenix', filename: 'affidea-phoenix.svg', brand: 'Affidea Phoenix', category: 'logo', extension: 'svg', source: '/brand-assets/logos/affidea-phoenix.svg', preview: '/brand-assets/logos/affidea-phoenix.svg', detail: 'Lockup regional integrat.' },
  { id: 'medif', filename: 'affidea-medif.svg', brand: 'Affidea MedIF Otopeni', category: 'logo', extension: 'svg', source: '/brand-assets/logos/affidea-medif.svg', preview: '/brand-assets/logos/affidea-medif.svg', detail: 'Lockup în curs de verificare.' },
  { id: 'fortius', filename: 'fortius-part-of-affidea.svg', brand: 'Fortius', category: 'logo', extension: 'svg', source: '/brand-assets/logos/fortius-part-of-affidea.svg', preview: '/brand-assets/logos/fortius-part-of-affidea.svg', detail: 'Lockup oficial Fortius — Part of Affidea Group.' },
  { id: 'oncolink', filename: 'oncolink.svg', brand: 'OncoLink', category: 'logo', extension: 'svg', source: '/brand-assets/logos/oncolink.svg', preview: '/brand-assets/logos/oncolink.svg', detail: 'Identitate digital health.' },
  { id: 'meddirect', filename: 'meddirect.png', brand: 'MedDirect', category: 'logo', extension: 'png', source: '/brand-assets/logos/meddirect.png', preview: '/brand-assets/logos/meddirect.png', detail: 'Logo raster oficial, fundal transparent.' },
  { id: 'sfantul-sava', filename: 'affidea-hospitals-sfantul-sava.png', brand: 'Affidea Hospitals — Sfântul Sava', category: 'logo', extension: 'png', source: '/brand-assets/logos/sfantul-sava.png', preview: '/brand-assets/logos/sfantul-sava.png', detail: 'Rendare web din PDF-ul blue oficial din Drive.' },
  { id: 'gmh-hospital', filename: 'affidea-hospitals-gmh.png', brand: 'Affidea Hospitals — GMH', category: 'logo', extension: 'png', source: '/brand-assets/logos/gmh-hospital.png', preview: '/brand-assets/logos/gmh-hospital.png', detail: 'Rendare web din lockup-ul GMH oficial.' },
  { id: 'clinicile-gmh', filename: 'clinicile-affidea-gmh.png', brand: 'Clinicile Affidea — GMH', category: 'logo', extension: 'png', source: '/brand-assets/logos/clinicile-gmh.png', preview: '/brand-assets/logos/clinicile-gmh.png', detail: 'Rendare web din PDF-ul oficial Clinicile Affidea — GMH.' },
  { id: 'sunmed', filename: 'affidea-hospitals-sunmed.png', brand: 'Affidea Hospitals — Sunmed', category: 'logo', extension: 'png', source: '/brand-assets/logos/sunmed.png', preview: '/brand-assets/logos/sunmed.png', detail: 'Rendare web din lockup-ul Sunmed oficial.' },
  { id: 'hiperdia-corunca', filename: 'affidea-hiperdia-corunca.png', brand: 'Affidea Hiperdia — Corunca', category: 'logo', extension: 'png', source: '/brand-assets/logos/hiperdia-corunca.png', preview: '/brand-assets/logos/hiperdia-corunca.png', detail: 'Rendare web din lockup-ul local oficial.' },
  { id: 'primorion', filename: 'affidea-primorion.png', brand: 'Affidea Primorion', category: 'logo', extension: 'png', source: '/brand-assets/logos/primorion.png', preview: '/brand-assets/logos/primorion.png', detail: 'Rendare web din lockup-ul Primorion oficial.' },
  { id: 'metropolitan', filename: 'affidea-hospitals-metropolitan.png', brand: 'Affidea Hospitals — Metropolitan', category: 'logo', extension: 'png', source: '/brand-assets/logos/metropolitan.png', preview: '/brand-assets/logos/metropolitan.png', detail: 'Rendare web din lockup-ul Metropolitan oficial.' },
  { id: 'explora-suceava', filename: 'explora-suceava.svg', brand: 'Affidea Explora — Suceava', category: 'logo', extension: 'svg', source: '/brand-assets/logos/explora-suceava.svg', preview: '/brand-assets/logos/explora-suceava.svg', detail: 'Fișier vectorial blue verificat în folderul oficial.' },
  { id: 'kids-pediatrie', filename: 'affidea-kids-pediatrie.svg', brand: 'Affidea Kids — Pediatrie', category: 'logo', extension: 'svg', source: '/brand-assets/logos/affidea-kids-pediatrie.svg', preview: '/brand-assets/logos/affidea-kids-pediatrie.svg', detail: 'Lockup pediatric cu descriptorul Pediatrie.' },
  { id: 'heka', filename: 'affidea-hospitals-heka.svg', brand: 'Affidea Hospitals — Heka', category: 'logo', extension: 'svg', source: '/brand-assets/logos/heka.svg', preview: '/brand-assets/logos/heka.svg', detail: 'Variantă Affidea Blue RGB din biblioteca oficială.' },
  { id: 'fundeni', filename: 'affidea-hospitals-fundeni.svg', brand: 'Affidea Hospitals — Fundeni', category: 'logo', extension: 'svg', source: '/brand-assets/logos/fundeni.svg', preview: '/brand-assets/logos/fundeni.svg', detail: 'Variantă Affidea Blue RGB din biblioteca oficială.' },
  { id: 'feminacare', filename: 'affidea-hospitals-feminacare.svg', brand: 'Affidea Hospitals — FeminaCare', category: 'logo', extension: 'svg', source: '/brand-assets/logos/feminacare.svg', preview: '/brand-assets/logos/feminacare.svg', detail: 'Variantă blue verificată în folderul oficial.' },
  { id: 'clinica-sia', filename: 'affidea-clinica-sia.svg', brand: 'Affidea — Clinica Sia', category: 'logo', extension: 'svg', source: '/brand-assets/logos/clinica-sia.svg', preview: '/brand-assets/logos/clinica-sia.svg', detail: 'Variantă blue verificată în folderul oficial.' },
  { id: 'fortius-clinicile', filename: 'fortius-clinicile-affidea.svg', brand: 'Fortius Clinic + Clinicile Affidea', category: 'logo', extension: 'svg', source: '/brand-assets/logos/fortius-clinicile-affidea.svg', preview: '/brand-assets/logos/fortius-clinicile-affidea.svg', detail: 'Lockup comun vectorial din colecția oficială.' },
  { id: 'feminacare-kids', filename: 'feminacare-affidea-kids.jpg', brand: 'FeminaCare + Affidea Kids', category: 'logo', extension: 'jpg', source: '/brand-assets/logos/feminacare-affidea-kids.jpg', preview: '/brand-assets/logos/feminacare-affidea-kids.jpg', detail: 'Preview oficial al lockup-ului combinat.' },
  { id: 'armonia', filename: 'affidea-hospitals-armonia.svg', brand: 'Affidea Hospitals — Armonia', category: 'logo', extension: 'svg', source: '/brand-assets/logos/armonia.svg', preview: '/brand-assets/logos/armonia.svg', detail: 'Fișier păstrat pentru referință; identitatea este arhivată.' },
  ...BRANDBOOK_ASSETS,
];

export const AssetsPage: React.FC = () => {
  const { t } = useI18n();
  const [selectedFormat, setSelectedFormat] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAsset, setSelectedAsset] = useState<LibraryAsset | null>(null);

  const filteredAssets = LOCAL_ASSETS.filter(asset => {
    const matchesFormat = selectedFormat === 'all' || asset.extension === selectedFormat;
    const matchesCategory = selectedCategory === 'all' || asset.category === selectedCategory;
    const term = searchQuery.toLowerCase();
    return matchesFormat && matchesCategory && `${asset.filename} ${asset.brand}`.toLowerCase().includes(term);
  });

  return (
    <div className="aff-assets-page">
      <header className="aff-page-header aff-page-header-editorial">
        <div><span className="aff-eyebrow">Digital asset management</span><h1>{t('assets.title')}</h1><p>{t('assets.subtitle')}</p></div>
        <div className="aff-page-count"><strong>{filteredAssets.length}</strong><span>fișiere locale</span></div>
      </header>

      <div className="aff-filter-bar">
        <div className="aff-search-box"><input type="text" placeholder="Caută după nume sau brand..." value={searchQuery} onChange={event => setSearchQuery(event.target.value)} /></div>
        <div className="aff-filter-tabs"><span className="aff-filter-label">Format:</span>{['all', 'svg', 'png', 'jpg', 'pdf'].map(format => <button key={format} className={`aff-filter-chip ${selectedFormat === format ? 'active' : ''}`} onClick={() => setSelectedFormat(format)}>{format.toUpperCase()}</button>)}</div>
        <div className="aff-filter-tabs"><span className="aff-filter-label">Categorie:</span>{['all', 'logo', 'guideline'].map(category => <button key={category} className={`aff-filter-chip ${selectedCategory === category ? 'active' : ''}`} onClick={() => setSelectedCategory(category)}>{category === 'all' ? 'Toate' : category}</button>)}</div>
      </div>

      <div className="aff-assets-grid">
        {filteredAssets.map(asset => (
          <button key={asset.id} className="aff-asset-card" onClick={() => setSelectedAsset(asset)}>
            <span className="aff-asset-card-preview"><span className={`aff-format-tag ${asset.extension}`}>{asset.extension.toUpperCase()}</span><img src={asset.preview} alt={`Preview ${asset.brand}`} /></span>
            <span className="aff-asset-card-body"><span className="aff-asset-filename" title={asset.filename}>{asset.filename}</span><span className="aff-asset-meta"><span>{asset.brand}</span><Badge status="approved">aprobat</Badge></span></span>
          </button>
        ))}
      </div>

      {selectedAsset && (
        <div className="aff-drawer-backdrop" onClick={() => setSelectedAsset(null)}>
          <aside className="aff-drawer" onClick={event => event.stopPropagation()} aria-label={`Detalii ${selectedAsset.filename}`}>
            <div className="aff-drawer-header"><h3>Fișier aprobat</h3><button className="aff-close-btn" onClick={() => setSelectedAsset(null)}>Închide</button></div>
            <div className="aff-drawer-body">
              <div className="aff-drawer-preview"><img src={selectedAsset.preview} alt={`Preview ${selectedAsset.brand}`} /><h4>{selectedAsset.filename}</h4></div>
              <div className="aff-drawer-meta-list">
                <div className="aff-meta-item"><span className="aff-meta-label">Brand:</span><span className="aff-meta-val">{selectedAsset.brand}</span></div>
                <div className="aff-meta-item"><span className="aff-meta-label">Format:</span><span className="aff-meta-val">{selectedAsset.extension.toUpperCase()}</span></div>
                <div className="aff-meta-item"><span className="aff-meta-label">Notă:</span><span className="aff-meta-val">{selectedAsset.detail}</span></div>
                <div className="aff-meta-item"><span className="aff-meta-label">Sursă:</span><span className="aff-meta-val">Google Drive / bibliotecă locală verificată</span></div>
              </div>
              <div className="aff-drawer-actions"><a className="aff-btn aff-btn-primary full-width" href={selectedAsset.source} target={selectedAsset.category === 'guideline' ? '_blank' : undefined} rel={selectedAsset.category === 'guideline' ? 'noreferrer' : undefined} download={selectedAsset.category === 'logo' ? selectedAsset.filename : undefined}>{selectedAsset.category === 'guideline' ? 'Deschide sursa în Drive' : 'Descarcă fișierul original'}</a></div>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
};
