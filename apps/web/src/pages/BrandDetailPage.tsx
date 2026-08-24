import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MOCK_BRANDS } from '../fixtures/mockData';
import { Badge } from '@affidea/ui';
import { BRAND_LOGOS } from './BrandsPage';
import { getBrandbooks } from '../fixtures/brandResources';

const sections = ['Overview', 'Logo', 'Culori', 'Tipografie', 'Guidelines', 'Downloads'];

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
  const hasWhiteLogo = brand.slug === 'affidea-kids';
  const brandbooks = getBrandbooks(brand.slug);
  const primaryBrandbook = brandbooks[0];

  const copyValue = async (value: string) => {
    await navigator.clipboard.writeText(value);
    setCopiedValue(value);
    window.setTimeout(() => setCopiedValue(null), 1400);
  };

  return (
    <div className="aff-brandbook-page">
      <button className="aff-breadcrumb" onClick={() => navigate('/brands')}>Brand directory / <strong>{brand.name_ro}</strong></button>

      <header className="aff-brandbook-hero">
        <div className="aff-brandbook-identity">
          <span className="aff-eyebrow light">{brand.category} • {brand.architecture_type.replaceAll('_', ' ')}</span>
          <div className={`aff-brandbook-logo-white ${hasWhiteLogo ? 'on-blue' : 'on-white'}`}>
            {hasWhiteLogo ? <img src="/brand-assets/logos/affidea-kids-white.svg" alt={`Logo alb ${brand.name_ro}`} /> : <img src={logoSrc} alt={`Logo ${brand.name_ro}`} />}
          </div>
          <p>{brand.description_ro}</p>
          <div className="aff-brandbook-meta">
            <span>Actualizat {brand.last_updated}</span>
            <span>{brand.asset_count} asset-uri</span>
            <span>Sursă: Google Drive</span>
          </div>
        </div>
        <div className="aff-brandbook-actions">
          <Badge status="canonical">Identitate aprobată</Badge>
          <a className="aff-btn aff-btn-light" href={logoSrc} download>Descarcă logo {logoExtension}</a>
          <a className="aff-btn aff-btn-ghost-light" href={primaryBrandbook.file} target="_blank" rel="noreferrer">Manual de brand</a>
        </div>
      </header>

      <nav className="aff-brandbook-nav" aria-label="Secțiuni brandbook">
        {sections.map((section, index) => <a key={section} href={`#section-${index + 1}`}>{section}</a>)}
      </nav>

      <section className="aff-brandbook-section aff-overview" id="section-1">
        <div className="aff-section-number">01</div>
        <div>
          <span className="aff-eyebrow">Overview</span>
          <h2>Un sistem vizual coerent, construit pentru utilizare corectă.</h2>
        </div>
        <div className="aff-overview-copy">
          <p>Folosește întotdeauna fișierele aprobate din această bibliotecă. Nu reconstrui logoul din text, nu modifica proporțiile și nu aplica efecte sau culori neaprobate.</p>
          <dl>
            <div><dt>Arhitectură</dt><dd>{brand.architecture_type.replaceAll('_', ' ')}</dd></div>
            <div><dt>Status</dt><dd>{brand.is_active ? 'Activ și aprobat' : 'În verificare'}</dd></div>
            <div><dt>Pachet</dt><dd>{brand.asset_count} fișiere disponibile</dd></div>
          </dl>
        </div>
      </section>

      <section className="aff-brandbook-section" id="section-2">
        <div className="aff-section-number">02</div>
        <div className="aff-section-intro"><span className="aff-eyebrow">Logo</span><h2>Marca principală</h2><p>Păstrează spațiul de protecție și folosește varianta potrivită contrastului de fundal.</p></div>
        <div className="aff-logo-presentation">
          <div className="aff-logo-stage light"><img src={logoSrc} alt={`Logo principal ${brand.name_ro}`} /></div>
          {hasWhiteLogo && <div className="aff-logo-stage blue"><img src="/brand-assets/logos/affidea-kids-white.svg" alt={`Logo alb ${brand.name_ro}`} /></div>}
          <div className="aff-logo-note"><strong>Clear space</strong><span>Nu apropia text, margini sau imagini de zona de protecție a logoului.</span></div>
        </div>
      </section>

      <section className="aff-brandbook-section" id="section-3">
        <div className="aff-section-number">03</div>
        <div className="aff-section-intro"><span className="aff-eyebrow">Colour system</span><h2>Paleta oficială</h2><p>Valorile canonice sunt afișate înaintea excepțiilor aprobate pentru sub-brand.</p></div>
        <div className="aff-colour-grid">
          {brand.colors.map(colour => (
            <button className="aff-colour-card" key={colour.hex} onClick={() => copyValue(colour.hex)}>
              <span className="aff-colour-sample" style={{ backgroundColor: colour.hex }} />
              <span className="aff-colour-data">
                <strong>{colour.name}</strong>
                <b>{colour.hex}</b>
                <small>{colour.rgb}</small>
                <small>{colour.cmyk}</small>
                {colour.pantone && <small>{colour.pantone}</small>}
                <em>{copiedValue === colour.hex ? 'Copiat' : 'Click pentru copiere'}</em>
              </span>
            </button>
          ))}
        </div>
      </section>

      <section className="aff-brandbook-section" id="section-4">
        <div className="aff-section-number">04</div>
        <div className="aff-section-intro"><span className="aff-eyebrow">Typography</span><h2>{brand.affi_enabled ? 'Barriecito + Harmonia Sans' : 'Harmonia Sans W1G'}</h2><p>{brand.affi_enabled ? 'Barriecito este rezervat titlurilor și accentelor Affi. Harmonia Sans susține textul curent și informația funcțională.' : 'Typeface-ul principal al sistemului Affidea. Interfața folosește fallback-ul aprobat până la confirmarea drepturilor de web embedding.'}</p></div>
        <div className="aff-type-stack">
          {brand.affi_enabled && <div className="aff-type-specimen aff-type-specimen-affi"><span>Headings &amp; Highlights</span><strong>Salut, eu sunt Affi!</strong><p>Barriecito Regular aduce vocea prietenoasă și expresivă a personajului.</p><small>ABCDEFGHIJKLMN OPQRSTUVWXYZ • 123456789</small></div>}
          <div className="aff-type-specimen"><span>{brand.affi_enabled ? 'Body Text' : 'Semibold / 56'}</span><strong>Precision with care.</strong><p>Diagnostic precis. Comunicare clară. O experiență construită cu grijă pentru oameni.</p><small>Harmonia Sans • Aa Bb Cc Dd Ee Ff Gg Hh 0123456789</small></div>
        </div>
      </section>

      <section className="aff-brandbook-section" id="section-5">
        <div className="aff-section-number">05</div>
        <div className="aff-section-intro"><span className="aff-eyebrow">Guidelines</span><h2>{brandbooks.length > 1 ? `${brandbooks.length} manuale relevante` : 'Manualul de brand'}</h2><p>Documentele din Drive care guvernează direct această identitate.</p></div>
        <div className="aff-guideline-grid">
          {brandbooks.map(book => <a className="aff-guideline-card" key={book.id} href={book.file} target="_blank" rel="noreferrer"><img src={book.cover} alt={`Coperta ${book.title}`} /><span><em>{book.status}</em><strong>{book.title}</strong><small>{book.version} • PDF • {book.size}</small><p>{book.note}</p></span></a>)}
        </div>
      </section>

      <section className="aff-brandbook-section" id="section-6">
        <div className="aff-section-number">06</div>
        <div className="aff-section-intro"><span className="aff-eyebrow">Downloads</span><h2>Fișiere aprobate</h2><p>Descarcă fișierele originale, fără modificarea numelor sau formatelor sursă.</p></div>
        <div className="aff-download-list">
          <a href={logoSrc} download><span className="aff-file-format">{logoExtension}</span><span><strong>{logoSrc.split('/').pop()}</strong><small>Logo aprobat • Web și digital</small></span><b>Descarcă</b></a>
          {hasWhiteLogo && <a href="/brand-assets/logos/affidea-kids-white.svg" download><span className="aff-file-format">SVG</span><span><strong>affidea-kids-white.svg</strong><small>Logo alb • Fundal închis</small></span><b>Descarcă</b></a>}
          {brandbooks.map(book => <a key={book.id} href={book.file} target="_blank" rel="noreferrer"><span className="aff-file-format">PDF</span><span><strong>{book.title}</strong><small>{book.version} • {book.size} • {book.status.toLowerCase()}</small></span><b>Drive</b></a>)}
          {brand.affi_enabled && <a href="/brand-assets/fonts/Barriecito-Regular.ttf" download><span className="aff-file-format">TTF</span><span><strong>Barriecito-Regular.ttf</strong><small>Font secundar Affi • Open Font License</small></span><b>Descarcă</b></a>}
        </div>
      </section>
    </div>
  );
};
