import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MOCK_BRANDS } from '../fixtures/mockData';
import { useI18n } from '../i18n/i18nContext';
import { Badge } from '@affidea/ui';

export const BRAND_LOGOS: Record<string, string> = {
  affidea: '/brand-assets/logos/affidea-parent.svg',
  'clinicile-affidea': '/brand-assets/logos/clinicile-affidea.svg',
  'affidea-kids': '/brand-assets/logos/affidea-kids.svg',
  'biomed-scan': '/brand-assets/logos/biomed-scan.svg',
  'affidea-hospitals': '/brand-assets/logos/affidea-hospitals.svg',
  'affidea-medeuropa': '/brand-assets/logos/affidea-medeuropa.svg',
  'affidea-phoenix': '/brand-assets/logos/affidea-phoenix.svg',
  'affidea-medif-otopeni': '/brand-assets/logos/affidea-medif.svg',
  fortius: '/brand-assets/logos/fortius-part-of-affidea.svg',
  oncolink: '/brand-assets/logos/oncolink.svg',
  meddirect: '/brand-assets/logos/meddirect.png',
  'affidea-hospitals-sfantul-sava': '/brand-assets/logos/sfantul-sava.png',
  'affidea-hospitals-gmh': '/brand-assets/logos/gmh-hospital.png',
  'clinicile-affidea-gmh': '/brand-assets/logos/clinicile-gmh.png',
  'affidea-hospitals-sunmed': '/brand-assets/logos/sunmed.png',
  'affidea-hiperdia-corunca': '/brand-assets/logos/hiperdia-corunca.png',
  'affidea-primorion': '/brand-assets/logos/primorion.png',
  'affidea-hospitals-metropolitan': '/brand-assets/logos/metropolitan.png',
  'affidea-explora-suceava': '/brand-assets/logos/explora-suceava.svg',
  'affidea-kids-pediatrie': '/brand-assets/logos/affidea-kids-pediatrie.svg',
  'affidea-hospitals-heka': '/brand-assets/logos/heka.svg',
  'affidea-hospitals-fundeni': '/brand-assets/logos/fundeni.svg',
  'affidea-hospitals-feminacare': '/brand-assets/logos/feminacare.svg',
  'affidea-clinica-sia': '/brand-assets/logos/clinica-sia.svg',
  'fortius-clinicile-affidea': '/brand-assets/logos/fortius-clinicile-affidea.svg',
  'feminacare-affidea-kids': '/brand-assets/logos/feminacare-affidea-kids.jpg',
  'affidea-hospitals-armonia': '/brand-assets/logos/armonia.svg',
};

export const BrandsPage: React.FC = () => {
  const { t } = useI18n();
  const navigate = useNavigate();
  const [filterArch, setFilterArch] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBrands = MOCK_BRANDS.filter(brand => {
    const matchesArch = filterArch === 'all' || brand.architecture_type === filterArch;
    const term = searchQuery.toLowerCase();
    const matchesSearch = brand.name_ro.toLowerCase().includes(term) || brand.description_ro.toLowerCase().includes(term);
    return matchesArch && matchesSearch;
  });

  const filters = [
    ['all', t('brands.filter.all')],
    ['parent', t('brands.filter.parent')],
    ['clinical', t('brands.filter.clinical')],
    ['specialised', t('brands.filter.specialised')],
    ['acquisition_transitional', t('brands.filter.acquisition_transitional')],
    ['partnership', t('brands.filter.partnership')],
    ['associated', t('brands.filter.associated')],
  ];

  return (
    <div className="aff-brands-page">
      <header className="aff-page-header aff-page-header-editorial">
        <div>
          <span className="aff-eyebrow">Brand architecture</span>
          <h1>{t('brands.title')}</h1>
          <p>{t('brands.subtitle')}</p>
        </div>
        <div className="aff-page-count"><strong>{filteredBrands.length}</strong><span>identități</span></div>
      </header>

      <div className="aff-directory-tools">
        <label className="aff-search-box">
          <span>Caută un brand</span>
          <input value={searchQuery} onChange={event => setSearchQuery(event.target.value)} placeholder="Nume, categorie sau descriere" />
        </label>
        <div className="aff-filter-tabs" aria-label="Filtrare după arhitectură">
          {filters.map(([id, label]) => (
            <button key={id} className={filterArch === id ? 'active' : ''} onClick={() => setFilterArch(id)}>{label}</button>
          ))}
        </div>
      </div>

      {filteredBrands.length === 0 ? (
        <div className="aff-empty-state"><h2>Niciun brand găsit</h2><p>Schimbă filtrul sau termenul de căutare.</p></div>
      ) : (
        <div className="aff-brands-grid">
          {filteredBrands.map(brand => (
            <button className="aff-brand-card" key={brand.id} onClick={() => navigate(`/brands/${brand.slug}`)}>
              <span className="aff-brand-card-topline">
                <span className="aff-architecture">{brand.category}</span>
                <Badge status={brand.is_active ? 'approved' : 'pending'}>{brand.is_active ? 'Activ' : 'În verificare'}</Badge>
              </span>
              <span className="aff-brand-card-logo">
                <img src={BRAND_LOGOS[brand.slug]} alt={`Logo ${brand.name_ro}`} />
              </span>
              <span className="aff-brand-card-copy">
                <strong>{brand.name_ro}</strong>
                <span>{brand.description_ro}</span>
              </span>
              <span className="aff-brand-card-footer">
                <span>{brand.asset_count} asset-uri aprobate</span>
                <span>Actualizat {brand.last_updated}</span>
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
