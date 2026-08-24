import React, { useState } from 'react';
import { useI18n } from '../i18n/i18nContext';
import { BRANDBOOKS } from '../fixtures/brandResources';

export const GuidelinesPage: React.FC = () => {
  const { t } = useI18n();
  const [selectedId, setSelectedId] = useState(BRANDBOOKS[0].id);
  const selected = BRANDBOOKS.find(book => book.id === selectedId) ?? BRANDBOOKS[0];

  return (
    <div className="aff-guidelines-page">
      <header className="aff-page-header aff-page-header-editorial">
        <div>
          <span className="aff-eyebrow">Brandbook library / Google Drive</span>
          <h1>{t('guidelines.title')}</h1>
          <p>Manualele aprobate pentru Affidea, sub-branduri și brandurile asociate — într-o singură bibliotecă verificată.</p>
        </div>
        <div className="aff-page-count"><strong>{BRANDBOOKS.length}</strong><span>brandbook-uri</span></div>
      </header>

      <section className="aff-brandbook-library" aria-label="Biblioteca de brandbook-uri">
        {BRANDBOOKS.map(book => (
          <button key={book.id} className={`aff-library-book ${selected.id === book.id ? 'active' : ''}`} onClick={() => setSelectedId(book.id)}>
            <img src={book.cover} alt={`Coperta ${book.title}`} />
            <span><em>{book.status}</em><strong>{book.title}</strong><small>{book.brand} • {book.version}</small></span>
          </button>
        ))}
      </section>

      <section className="aff-guideline-feature">
        <a href={selected.file} target="_blank" rel="noreferrer" className="aff-guideline-feature-cover">
          <img src={selected.cover} alt={`Coperta ${selected.title}`} />
        </a>
        <div className="aff-guideline-feature-copy">
          <span className="aff-badge aff-badge--canonical">{selected.status}</span>
          <h2>{selected.title}</h2>
          <p>{selected.note}</p>
          <dl>
            <div><dt>Brand</dt><dd>{selected.brand}</dd></div>
            <div><dt>Versiune</dt><dd>{selected.version}</dd></div>
            <div><dt>Format</dt><dd>PDF • {selected.size}</dd></div>
            <div><dt>Sursă</dt><dd>Google Drive verificat</dd></div>
          </dl>
          <div className="aff-inline-actions"><a className="aff-btn aff-btn-primary" href={selected.file} target="_blank" rel="noreferrer">Deschide sursa în Drive</a></div>
        </div>
      </section>

      <section className="aff-pdf-stage">
        <div className="aff-pdf-toolbar">
          <div><span className="aff-eyebrow">Document preview</span><strong>{selected.title}</strong></div>
          <a href={selected.file} target="_blank" rel="noreferrer">Deschide în filă nouă</a>
        </div>
        <div className="aff-pdf-object aff-drive-placeholder" aria-label={`${selected.title} în Google Drive`}>
          <p>Documentul canonic este păstrat în Google Drive pentru controlul versiunilor și al accesului.</p>
          <a className="aff-btn aff-btn-primary" href={selected.file} target="_blank" rel="noreferrer">Deschide biblioteca Drive</a>
        </div>
      </section>
    </div>
  );
};
