import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useI18n } from '../i18n/i18nContext';
import { MOCK_BRANDS } from '../fixtures/mockData';
import { CENTRES } from '../fixtures/centres';
import { BRAND_DRIVE_URL } from '../fixtures/brandResources';

const logoBySlug: Record<string, string> = {
  affidea: '/brand-assets/logos/affidea-parent.svg',
  'clinicile-affidea': '/brand-assets/logos/clinicile-affidea.svg',
  'affidea-kids': '/brand-assets/logos/affidea-kids.svg',
  'affidea-hospitals': '/brand-assets/logos/affidea-hospitals.svg',
};

const featuredBrandSlugs = ['affidea', 'clinicile-affidea', 'affidea-kids', 'affidea-hospitals'];

export const DashboardPage: React.FC = () => {
  const { t } = useI18n();
  const navigate = useNavigate();

  const activeBrands = MOCK_BRANDS.filter(brand => brand.is_active).length;
  const reviewBrands = MOCK_BRANDS.length - activeBrands;
  const stats = [
    { value: String(MOCK_BRANDS.length), label: t('dashboard.stats.brands'), detail: `${activeBrands} active • ${reviewBrands} in review` },
    { value: '142', label: t('dashboard.stats.assets'), detail: 'SVG, PNG, PDF, EPS and AI' },
    { value: String(CENTRES.length), label: t('dashboard.stats.centres'), detail: 'Sursă: Centralizator Centre și MC' },
    { value: 'v1.6', label: 'Standard canonic', detail: 'Affidea Brand Guidelines 2026' },
  ];

  return (
    <div className="aff-dashboard">
      <section className="aff-hero-banner">
        <div className="aff-hero-overlay">
          <span className="aff-eyebrow light">Affidea Brand Hub • Romania</span>
          <h1>{t('dashboard.welcome')}</h1>
          <p>{t('dashboard.subtitle')}</p>
          <div className="aff-hero-actions">
            <button className="aff-btn aff-btn-light" onClick={() => navigate('/brands')}>Explorează brandurile</button>
            <a className="aff-btn aff-btn-ghost-light" href={BRAND_DRIVE_URL} target="_blank" rel="noreferrer">Deschide manualul 2026</a>
          </div>
        </div>
      </section>

      <section className="aff-stats-band" aria-label="Rezumat bibliotecă">
        {stats.map(stat => (
          <div className="aff-stat" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
            <small>{stat.detail}</small>
          </div>
        ))}
      </section>

      <section className="aff-dashboard-grid">
        <div className="aff-dashboard-main">
          <div className="aff-section-heading">
            <div>
              <span className="aff-eyebrow">Brand architecture</span>
              <h2>Identități aprobate</h2>
            </div>
            <button className="aff-text-link" onClick={() => navigate('/brands')}>Vezi directorul complet</button>
          </div>

          <div className="aff-featured-brands">
            {featuredBrandSlugs.map(slug => MOCK_BRANDS.find(brand => brand.slug === slug)).filter((brand): brand is (typeof MOCK_BRANDS)[number] => Boolean(brand)).map(brand => (
              <button className="aff-featured-brand" key={brand.id} onClick={() => navigate(`/brands/${brand.slug}`)}>
                <span className="aff-brand-logo-frame">
                  <img src={logoBySlug[brand.slug]} alt={`Logo ${brand.name_ro}`} />
                </span>
                <span className="aff-featured-brand-copy">
                  <strong>{brand.name_ro}</strong>
                  <small>{brand.category} • {brand.asset_count} asset-uri</small>
                </span>
                <span className="aff-card-action">Deschide brandbook</span>
              </button>
            ))}
          </div>
        </div>

        <aside className="aff-dashboard-side">
          <span className="aff-eyebrow">Access rapid</span>
          <h2>Instrumentele bibliotecii</h2>
          <button onClick={() => navigate('/assets')}><strong>Asset library</strong><span>Logo-uri și fișiere aprobate</span></button>
          <button onClick={() => navigate('/guidelines')}><strong>Guidelines</strong><span>Manuale și reguli canonice</span></button>
          <button onClick={() => navigate('/data-centres')}><strong>Data centres</strong><span>Date operaționale interne</span></button>
          <div className="aff-sync-card">
            <span>Ultima sincronizare reușită</span>
            <strong>Astăzi, 13:45</strong>
            <small>Google Drive • 505 fișiere verificate</small>
          </div>
        </aside>
      </section>
    </div>
  );
};
