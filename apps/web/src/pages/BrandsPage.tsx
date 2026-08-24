import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MOCK_BRANDS } from '../fixtures/mockData';
import { useI18n } from '../i18n/i18nContext';
import { Badge } from '@affidea/ui';
import { BRAND_FAMILIES, getBrandFamily, type BrandFamily } from '../fixtures/brandTaxonomy';

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
  const { t, locale } = useI18n();
  const navigate = useNavigate();
  const [filterFamily, setFilterFamily] = useState<'all' | BrandFamily>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBrands = MOCK_BRANDS.filter(brand => {
    const family = getBrandFamily(brand.slug);
    const matchesFamily = filterFamily === 'all' || family === filterFamily;
    const term = searchQuery.toLowerCase();
    const familyMeta = BRAND_FAMILIES.find(item => item.id === family);
    const searchable = [brand.name_ro, brand.name_en, brand.category, brand.description_ro, brand.description_en, familyMeta?.label_ro, familyMeta?.label_en]
      .filter(Boolean)
      .join(' ')
      .toLowerCase();
    return matchesFamily && searchable.includes(term);
  });

  const visibleFamilies = BRAND_FAMILIES
    .map(family => ({ family, brands: filteredBrands.filter(brand => getBrandFamily(brand.slug) === family.id) }))
    .filter(group => group.brands.length > 0);

  const familyLabel = (family: (typeof BRAND_FAMILIES)[number]) => locale === 'ro' ? family.label_ro : family.label_en;
  const familyDescription = (family: (typeof BRAND_FAMILIES)[number]) => locale === 'ro' ? family.description_ro : family.description_en;

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
        <div className="aff-filter-tabs" aria-label="Filtrare după familie operațională">
          <button className={filterFamily === 'all' ? 'active' : ''} onClick={() => setFilterFamily('all')}>
            {locale === 'ro' ? 'Toate familiile' : 'All families'}
          </button>
          {BRAND_FAMILIES.map(family => (
            <button key={family.id} className={filterFamily === family.id ? 'active' : ''} onClick={() => setFilterFamily(family.id)}>
              {familyLabel(family)}
            </button>
          ))}
        </div>
      </div>

      {filteredBrands.length === 0 ? (
        <div className="aff-empty-state"><h2>Niciun brand găsit</h2><p>Schimbă filtrul sau termenul de căutare.</p></div>
      ) : (
        <div className="aff-brand-groups">
          {visibleFamilies.map(({ family, brands }) => (
            <section className={`aff-brand-group aff-brand-group-${family.id}`} key={family.id}>
              <header className="aff-brand-group-header">
                <span className="aff-brand-group-index">{String(BRAND_FAMILIES.findIndex(item => item.id === family.id) + 1).padStart(2, '0')}</span>
                <span><strong>{familyLabel(family)}</strong><small>{familyDescription(family)}</small></span>
                <em>{brands.length} {locale === 'ro' ? 'identități' : 'identities'}</em>
              </header>
              <div className="aff-brands-grid">
                {brands.map(brand => (
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
            </section>
          ))}
        </div>
      )}
    </div>
  );
};
