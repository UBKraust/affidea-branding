import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MOCK_BRANDS } from '../fixtures/mockData';
import { BRAND_LOGOS } from './BrandsPage';
import { getBrandbooks } from '../fixtures/brandResources';
import { BRAND_DRIVE_FOLDER_BY_SLUG, BRAND_FAMILIES, getBrandFamily } from '../fixtures/brandTaxonomy';
import { getBrandLandingContent } from '../fixtures/brandLandingContent';

const sections = [
  ['overview', 'Overview'], ['architecture', 'Arhitectură'], ['logo', 'Logo'], ['colours', 'Culori'],
  ['typography', 'Tipografie'], ['voice', 'Voce'], ['applications', 'Aplicații'], ['resources', 'Resurse'],
] as const;

export const BrandDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const brand = MOCK_BRANDS.find(item => item.slug === slug);
  const [copiedValue, setCopiedValue] = useState<string | null>(null);

  if (!brand) {
    return <div className="aff-empty-state"><h1>Brand indisponibil</h1><button className="aff-btn aff-btn-primary" onClick={() => navigate('/brands')}>Înapoi la director</button></div>;
  }

  const logoSrc = BRAND_LOGOS[brand.slug];
  const logoExtension = logoSrc.split('.').pop()?.toUpperCase() ?? 'FIȘIER';
  const whiteLogoSrc = brand.slug === 'affidea-kids' ? '/brand-assets/logos/affidea-kids-white.svg' : null;
  const brandbooks = getBrandbooks(brand.slug);
  const primaryBrandbook = brandbooks[0];
  const familyId = getBrandFamily(brand.slug);
  const brandFamily = BRAND_FAMILIES.find(item => item.id === familyId);
  const sourceFolder = BRAND_DRIVE_FOLDER_BY_SLUG[brand.slug];
  const content = getBrandLandingContent(brand);
  const currentIndex = MOCK_BRANDS.findIndex(item => item.slug === brand.slug);
  const nextBrand = MOCK_BRANDS[(currentIndex + 1) % MOCK_BRANDS.length];
  const accent = brand.colors[0]?.hex ?? '#418FDE';
  const printMinimum = familyId === 'clinics' || familyId === 'hospitals' ? '15 mm lockup' : '10 mm înălțime';

  const copyValue = async (value: string) => {
    await navigator.clipboard.writeText(value);
    setCopiedValue(value);
    window.setTimeout(() => setCopiedValue(null), 1400);
  };

  return (
    <article className={`aff-brand-landing aff-brand-landing-${familyId}`} style={{ '--brand-accent': accent } as React.CSSProperties}>
      <button className="aff-breadcrumb" onClick={() => navigate('/brands')}>Brand directory / <strong>{brand.name_ro}</strong></button>

      <header className="aff-brand-landing-hero">
        <div className="aff-brand-hero-copy">
          <div className="aff-brand-hero-kicker"><span>{brandFamily?.label_ro}</span><span>{brand.category}</span><span>{brand.is_active ? 'Activ' : 'Referință'}</span></div>
          <h1>{content.headline}</h1>
          <p>{content.introduction}</p>
          <div className="aff-brand-hero-actions"><a className="aff-btn aff-btn-light" href={logoSrc} download>Descarcă logo {logoExtension}</a><a className="aff-btn aff-btn-ghost-light" href={sourceFolder} target="_blank" rel="noreferrer">Deschide sursa Drive</a></div>
        </div>
        <div className="aff-brand-hero-mark">
          <span className="aff-brand-edition">Brand page / {brand.last_updated.slice(0, 4)}</span>
          <div className="aff-brand-hero-logo"><img src={logoSrc} alt={`Logo ${brand.name_ro}`} /></div>
          <div className="aff-brand-source-status"><span className={`aff-source-dot aff-source-${content.sourceMode}`} /><span><strong>{content.sourceMode === 'dedicated' ? 'Brandbook dedicat' : content.sourceMode === 'archive' ? 'Identitate arhivată' : 'Reguli moștenite'}</strong><small>{content.sourceLabel}</small></span></div>
        </div>
      </header>

      <nav className="aff-brandbook-nav aff-brand-landing-nav" aria-label="Cuprins brand page">
        {sections.map(([id, label], index) => <a key={id} href={`#${id}`}><span>{String(index + 1).padStart(2, '0')}</span>{label}</a>)}
      </nav>

      <section className="aff-landing-section aff-landing-overview" id="overview">
        <div className="aff-landing-section-heading"><span>01 / Brand essence</span><h2>Un rol clar în ecosistem.</h2></div>
        <div className="aff-landing-lead"><p>{content.role}</p><div className="aff-landing-facts"><span><small>Arhitectură</small><strong>{brand.architecture_type.replaceAll('_', ' ')}</strong></span><span><small>Familie</small><strong>{brandFamily?.label_ro}</strong></span><span><small>Guvernanță</small><strong>{content.sourceMode === 'dedicated' ? 'Manual dedicat' : content.sourceMode === 'archive' ? 'Arhivă' : 'Manual Affidea'}</strong></span><span><small>Asseturi</small><strong>{brand.asset_count} aprobate</strong></span></div></div>
        <div className="aff-principles-grid">{content.principles.map((principle, index) => <div className="aff-principle-card" key={principle.title}><span>0{index + 1}</span><strong>{principle.title}</strong><p>{principle.description}</p></div>)}</div>
      </section>

      <section className="aff-landing-section" id="architecture">
        <div className="aff-landing-section-heading"><span>02 / Brand architecture</span><h2>De la Affidea la {brand.name_ro}.</h2><p>Pagina separă poziția strategică a identității de ordinea folderelor și a livrărilor.</p></div>
        <div className="aff-architecture-path" aria-label={`Poziția ${brand.name_ro} în arhitectură`}><div><span>01</span><small>Parent brand</small><strong>Affidea</strong></div><i aria-hidden="true" /><div><span>02</span><small>Operational family</small><strong>{brandFamily?.label_ro}</strong></div><i aria-hidden="true" /><div className="current"><span>03</span><small>Brand identity</small><strong>{brand.name_ro}</strong></div></div>
        <div className="aff-source-note"><strong>Sursa regulii</strong><p>{content.sourceLabel}. Fișierele aprobate rămân în folderul canonic Drive; pagina este stratul de prezentare și guvernanță.</p></div>
      </section>

      <section className="aff-landing-section" id="logo">
        <div className="aff-landing-section-heading"><span>03 / Logo system</span><h2>Marca, spațiul și contrastul.</h2><p>{content.logoRule}</p></div>
        <div className="aff-logo-gallery">
          <div className="aff-logo-canvas aff-logo-canvas-light"><span>Primary / light background</span><div className="aff-clearspace-frame"><i>X</i><img src={logoSrc} alt={`Logo principal ${brand.name_ro}`} /></div></div>
          <div className="aff-logo-canvas aff-logo-canvas-dark"><span>{whiteLogoSrc ? 'Reversed / dark background' : 'Protected surface / dark context'}</span>{whiteLogoSrc ? <img src={whiteLogoSrc} alt={`Logo alb ${brand.name_ro}`} /> : <div className="aff-protected-logo"><img src={logoSrc} alt={`Logo protejat ${brand.name_ro}`} /></div>}</div>
        </div>
        <div className="aff-logo-specs"><div><small>Clear space</small><strong>1× wordmark height</strong><p>Păstrează zona liberă pe toate laturile.</p></div><div><small>Digital minimum</small><strong>30 px</strong><p>Nu coborî sub limita de lizibilitate.</p></div><div><small>Print minimum</small><strong>{printMinimum}</strong><p>Verifică reproducerea înainte de producție.</p></div></div>
        <div className="aff-rule-columns"><div className="aff-rule-list positive"><span>Do</span>{content.dos.map(item => <p key={item}>{item}</p>)}</div><div className="aff-rule-list negative"><span>Don’t</span>{content.donts.map(item => <p key={item}>{item}</p>)}</div></div>
      </section>

      <section className="aff-landing-section" id="colours">
        <div className="aff-landing-section-heading"><span>04 / Colour system</span><h2>Culoarea ca semnătură.</h2><p>{content.colourRule}</p></div>
        <div className="aff-landing-colour-grid">{brand.colors.map((colour, index) => <button className="aff-landing-colour" key={`${colour.name}-${colour.hex}`} onClick={() => copyValue(colour.hex)}><span className="aff-landing-colour-swatch" style={{ backgroundColor: colour.hex }}><em>{String(index + 1).padStart(2, '0')}</em></span><span className="aff-landing-colour-copy"><strong>{colour.name}</strong><b>{colour.hex}</b><small>{colour.rgb}</small><small>{colour.cmyk}</small>{colour.pantone && <small>{colour.pantone}</small>}<i>{copiedValue === colour.hex ? 'Copiat' : 'Copiază HEX'}</i></span></button>)}</div>
        {content.sourceMode === 'inherited' && <div className="aff-validation-note"><strong>Notă de guvernanță</strong><p>Paleta afișată este cea înregistrată pentru această identitate. Valorile locale care nu apar într-un manual dedicat trebuie validate înainte de producție.</p></div>}
      </section>

      <section className="aff-landing-section" id="typography">
        <div className="aff-landing-section-heading"><span>05 / Typography</span><h2>{brand.affi_enabled ? 'Barriecito + Harmonia Sans' : 'Harmonia Sans W1G'}</h2><p>{content.typographyRule}</p></div>
        <div className="aff-editorial-type-stage"><div className={brand.affi_enabled ? 'aff-type-display affi' : 'aff-type-display'}><span>{brand.affi_enabled ? 'Display / Barriecito' : 'Display / Harmonia Light'}</span><strong>{brand.affi_enabled ? 'Salut, eu sunt Affi!' : content.headline}</strong></div><div className="aff-type-body"><span>Functional / Harmonia Sans</span><h3>Diagnostic precis. Comunicare clară.</h3><p>ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />abcdefghijklmnopqrstuvwxyz<br />0123456789 — !?%&amp;@</p><small>Light · Regular · Semibold · Bold · Black</small></div></div>
      </section>

      <section className="aff-landing-section" id="voice">
        <div className="aff-landing-section-heading"><span>06 / Verbal identity</span><h2>Vocea trebuie să inspire încredere.</h2><p>Principii editoriale pentru copy, UI, social media și comunicarea cu pacientul.</p></div>
        <div className="aff-voice-grid">{content.voice.map((item, index) => <div key={item.title}><span>{String(index + 1).padStart(2, '0')}</span><strong>{item.title}</strong><p>{item.description}</p></div>)}</div>
        <blockquote className="aff-brand-quote"><span>Working line</span><p>{content.headline}</p><small>Folosește expresia ca reper de ton; aprobarea unei formulări de campanie se face separat.</small></blockquote>
      </section>

      <section className="aff-landing-section" id="applications">
        <div className="aff-landing-section-heading"><span>07 / Applications</span><h2>Un sistem, mai multe contexte.</h2><p>Prioritățile diferă în funcție de familia operațională, dar regulile de bază rămân aceleași.</p></div>
        <div className="aff-application-grid">{content.applications.map(item => <div key={item.index}><span>{item.index}</span><div className="aff-application-preview"><i /><i /><i /></div><strong>{item.title}</strong><p>{item.description}</p></div>)}</div>
      </section>

      <section className="aff-landing-section" id="resources">
        <div className="aff-landing-section-heading"><span>08 / Guidelines & downloads</span><h2>Surse canonice, fără ambiguitate.</h2><p>Manualele, logo-ul de preview și folderul cu fișierele originale sunt reunite aici.</p></div>
        <div className="aff-resource-layout"><div className="aff-guideline-grid">{brandbooks.map(book => <a className="aff-guideline-card" key={book.id} href={book.file} target="_blank" rel="noreferrer"><img src={book.cover} alt={`Coperta ${book.title}`} /><span><em>{book.status}</em><strong>{book.title}</strong><small>{book.version} · PDF · {book.size}</small><p>{book.note}</p></span></a>)}</div><div className="aff-download-list"><a href={logoSrc} download><span className="aff-file-format">{logoExtension}</span><span><strong>{logoSrc.split('/').pop()}</strong><small>Preview aprobat · Web și digital</small></span><b>Descarcă</b></a>{whiteLogoSrc && <a href={whiteLogoSrc} download><span className="aff-file-format">SVG</span><span><strong>{whiteLogoSrc.split('/').pop()}</strong><small>Varianta albă · Fundal închis</small></span><b>Descarcă</b></a>}<a href={sourceFolder} target="_blank" rel="noreferrer"><span className="aff-file-format">DRV</span><span><strong>Folder canonic {brand.name_ro}</strong><small>SVG · PNG · PDF/EPS · surse aprobate</small></span><b>Drive</b></a><a href={primaryBrandbook.file} target="_blank" rel="noreferrer"><span className="aff-file-format">PDF</span><span><strong>{primaryBrandbook.title}</strong><small>{content.sourceLabel}</small></span><b>Deschide</b></a>{brand.affi_enabled && <a href="/brand-assets/fonts/Barriecito-Regular.ttf" download><span className="aff-file-format">TTF</span><span><strong>Barriecito-Regular.ttf</strong><small>Font secundar Affi · Open Font License</small></span><b>Descarcă</b></a>}</div></div>
      </section>

      <footer className="aff-next-brand"><span>Următoarea identitate</span><button onClick={() => navigate(`/brands/${nextBrand.slug}`)}><strong>{nextBrand.name_ro}</strong><i>→</i></button></footer>
    </article>
  );
};
