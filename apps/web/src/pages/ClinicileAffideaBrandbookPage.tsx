import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CLINICILE_APPLICATIONS,
  CLINICILE_COLOURS,
  CLINICILE_DONTS,
  CLINICILE_DOS,
  CLINICILE_PRINCIPLES,
  CLINICILE_SOURCES,
  CLINICILE_TOC,
} from '../fixtures/clinicileAffideaBrandbook';

const logo = '/brand-assets/logos/clinicile-affidea.svg';
const parentLogo = '/brand-assets/logos/affidea-parent.svg';

export const ClinicileAffideaBrandbookPage: React.FC = () => {
  const navigate = useNavigate();
  const [copied, setCopied] = useState<string | null>(null);

  const copy = async (value: string) => {
    await navigator.clipboard.writeText(value);
    setCopied(value);
    window.setTimeout(() => setCopied(null), 1300);
  };

  return (
    <article className="aff-clinics-book">
      <button className="aff-breadcrumb" onClick={() => navigate('/brands')}>Brand directory / <strong>Clinicile Affidea</strong></button>

      <header className="aff-clinics-hero" id="clinics-top">
        <div className="aff-clinics-hero-copy">
          <span className="aff-clinics-eyebrow">Clinical service · Brandbook digital · v1.6 / 2026</span>
          <h1>Îngrijire clară.<br />Un brand unitar.</h1>
          <p>Ghidul complet pentru identitatea Clinicile Affidea — de la arhitectură și lockup la culoare, tipografie, aplicații și guvernanță.</p>
          <div className="aff-brand-hero-actions">
            <a className="aff-btn aff-btn-light" href={logo} download>Descarcă logo SVG</a>
            <a className="aff-btn aff-btn-ghost-light" href={CLINICILE_SOURCES.folder} target="_blank" rel="noreferrer">Deschide sursa Drive</a>
          </div>
        </div>
        <div className="aff-clinics-hero-identity">
          <small>Identitate clinică / România</small>
          <div><img src={logo} alt="Logo Clinicile Affidea" /></div>
          <p><b>Canonical</b><span>Reguli din Affidea Brand Guidelines v1.6, capitolul Clinical service.</span></p>
        </div>
      </header>

      <nav className="aff-clinics-toc" aria-label="Cuprins Clinicile Affidea">
        {CLINICILE_TOC.map(([id, label], index) => <a href={`#${id}`} key={id}><span>{String(index + 1).padStart(2, '0')}</span>{label}</a>)}
      </nav>

      <section className="aff-clinics-section aff-clinics-intro" id="clinics-overview">
        <div className="aff-clinics-section-title"><span>01 / Esență</span><h2>Serviciile clinice de bază ale Affidea.</h2></div>
        <div className="aff-clinics-intro-grid">
          <p>Clinicile Affidea reprezintă serviciile clinice de bază ale rețelei. Identitatea urmează îndeaproape parent brandul și folosește o abordare de numire și expresie vizuală consecventă, pentru ca pacienții să navigheze ușor între servicii.</p>
          <dl><div><dt>Tip</dt><dd>Clinical service</dd></div><div><dt>Descriptor</dt><dd>Clinicile</dd></div><div><dt>Piață</dt><dd>România</dd></div><div><dt>Status</dt><dd>Activ / Canonical</dd></div></dl>
        </div>
        <div className="aff-clinics-principles">{CLINICILE_PRINCIPLES.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="aff-clinics-section aff-clinics-architecture" id="clinics-architecture">
        <div className="aff-clinics-section-title"><span>02 / Arhitectură</span><h2>Affidea este ancora. Clinicile este serviciul.</h2><p>Descriptorul tradus este permis numai în lockup-ul furnizat pentru piață.</p></div>
        <div className="aff-clinics-architecture-flow"><article><span>Parent brand</span><img src={parentLogo} alt="Logo Affidea" /><p>Viziunea, reputația și sistemul vizual comun.</p></article><i>+</i><article className="active"><span>Service descriptor</span><strong>Clinicile</strong><p>Ajută pacientul să identifice rapid serviciul clinic.</p></article><i>=</i><article><span>Approved lockup</span><img src={logo} alt="Lockup Clinicile Affidea" /><p>Unitatea vizuală folosită pe materialele dedicate.</p></article></div>
        <div className="aff-clinics-context-grid"><div><span>Activitate de grup / centru multidisciplinar</span><h3>Affidea conduce.</h3><p>Parent brandul este marca principală. Clinicile poate apărea ca branding secundar acolo unde este relevant.</p></div><div><span>Activitate dedicată / centru single-discipline</span><h3>Clinicile conduce.</h3><p>Lockup-ul Clinicile devine marca principală; parent brandul apare cel puțin o dată și însoțește manifesto-ul și tagline-ul.</p></div></div>
      </section>

      <section className="aff-clinics-section" id="clinics-logo">
        <div className="aff-clinics-section-title"><span>03 / Logo system</span><h2>O unitate. Fără reconstrucții.</h2><p>Folosește artwork-ul aprobat ca un singur element și păstrează Affidea Blue în toate aplicațiile clinice.</p></div>
        <div className="aff-clinics-logo-stage"><div className="aff-clinics-logo-primary"><span>Primary lockup / light surface</span><img src={logo} alt="Logo principal Clinicile Affidea" /></div><div className="aff-clinics-logo-protected"><span>Dark context / protected surface</span><div><img src={logo} alt="Logo Clinicile Affidea pe suprafață protejată" /></div><small>Nu inversa automat culorile. Folosește numai varianta aprobată pentru context.</small></div></div>
        <div className="aff-rule-columns"><div className="aff-rule-list positive"><span>Folosește</span>{CLINICILE_DOS.map(item => <p key={item}>{item}</p>)}</div><div className="aff-rule-list negative"><span>Evită</span>{CLINICILE_DONTS.map(item => <p key={item}>{item}</p>)}</div></div>
      </section>

      <section className="aff-clinics-section aff-clinics-construction" id="clinics-lockup">
        <div className="aff-clinics-section-title"><span>04 / Construcție și scalare</span><h2>Raporturi fixe. Spațiu suficient.</h2></div>
        <div className="aff-clinics-construction-grid"><div className="aff-clinics-clearspace"><span>Clear space</span><div><i>X</i><img src={logo} alt="Demonstrație zonă de protecție" /></div><p>Pentru parent logo, clear space-ul minim este egal cu 1× înălțimea wordmark-ului. Pentru lockup folosește artwork-ul și zona de protecție definită în acesta.</p></div><div className="aff-clinics-ratio"><span>Lockup ratio</span><div><b>X</b><em>¼X</em><strong>Clinicile</strong></div><p>Descriptorul se aliniază la dreapta lettermark-ului. Pentru cuvinte mai lungi, dimensiunea descriptorului scade — nu se lărgește logo-ul.</p></div></div>
        <div className="aff-clinics-minimums"><div><small>Parent / digital</small><strong>30 px</strong><p>Înălțime minimă.</p></div><div><small>Parent / print</small><strong>10 mm</strong><p>Înălțime minimă.</p></div><div><small>Clinical lockup</small><strong>15 mm</strong><p>Lățime minimă pentru versiunea compactă.</p></div><div><small>Location descriptor</small><strong>Approval</strong><p>Nu se folosește extern fără aprobare explicită.</p></div></div>
      </section>

      <section className="aff-clinics-section" id="clinics-colour">
        <div className="aff-clinics-section-title"><span>05 / Sistem cromatic</span><h2>Affidea Blue rămâne dominant.</h2><p>Sub-brandurile clinice folosesc exclusiv paleta parent brandului. Culorile suport susțin ierarhia, tipografia și call-to-action-urile; nu intră în lockup.</p></div>
        <div className="aff-clinics-colours">{CLINICILE_COLOURS.map((colour, index) => <button key={colour.hex} onClick={() => copy(colour.hex)} className={colour.dark ? 'is-dark' : ''}><span style={{ background: colour.hex }}><i>{String(index + 1).padStart(2, '0')}</i></span><div><small>{colour.role}</small><h3>{colour.name}</h3><b>{colour.hex}</b><p>RGB {colour.rgb}<br />CMYK {colour.cmyk}<br />{colour.pantone}</p><em>{copied === colour.hex ? 'Copiat' : 'Copiază HEX'}</em></div></button>)}</div>
        <div className="aff-clinics-colour-rules"><p><b>Fundal principal</b> Affidea Blue sau White.</p><p><b>Fundal secundar</b> Light Blue ori Light Grey, în secțiuni și casete.</p><p><b>Body copy digital</b> Dark Grey pentru lizibilitate.</p><p><b>CTA</b> Friendly Green, folosit selectiv.</p></div>
      </section>

      <section className="aff-clinics-section" id="clinics-type">
        <div className="aff-clinics-section-title"><span>06 / Tipografie</span><h2>Harmonia Sans W1G.</h2><p>Familia tipografică comună întărește continuitatea cu parent brandul. Descriptorul Clinicile folosește SemiBold în artwork-ul aprobat.</p></div>
        <div className="aff-clinics-type-stage"><div><small>Display / Light</small><strong>Precizie<br />cu grijă.</strong><span>Aa Bb Cc 0123</span></div><div><small>Functional / Regular + SemiBold</small><h3>Clar pentru fiecare pacient.</h3><p>ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />abcdefghijklmnopqrstuvwxyz<br />0123456789 — !?%&amp;@</p><ul><li>Light — titluri editoriale</li><li>Regular — text și interfețe</li><li>SemiBold — descriptor și accent</li><li>Bold / Black — utilizare controlată</li></ul></div></div>
      </section>

      <section className="aff-clinics-section" id="clinics-layout">
        <div className="aff-clinics-section-title"><span>07 / Layout și ierarhie</span><h2>Ordine clinică, expresie umană.</h2><p>Regulile de layout traduc paleta și tipografia într-un sistem digital coerent, fără a modifica identitatea.</p></div>
        <div className="aff-clinics-layout-demo"><div className="aff-clinics-poster"><img src={logo} alt="Logo Clinicile Affidea" /><span>Investigații precise.<br /><b>Grijă pentru oameni.</b></span><button>Descoperă serviciile</button></div><div className="aff-clinics-layout-rules"><p><span>01</span><b>Brand first</b>Logo-ul apare într-o zonă calmă, cu contrast și spațiu.</p><p><span>02</span><b>Un mesaj principal</b>Titlurile scurte preced explicația medicală.</p><p><span>03</span><b>Blue as anchor</b>Culoarea primară structurează, nu umple arbitrar.</p><p><span>04</span><b>Green as action</b>Friendly Green marchează acțiunea, nu identitatea.</p></div></div>
        <div className="aff-validation-note"><strong>Transpunere digitală</strong><p>Exemplul de layout este o interpretare web a regulilor canonice de culoare, contrast, tipografie și ierarhie. Nu reprezintă un template oficial de campanie.</p></div>
      </section>

      <section className="aff-clinics-section" id="clinics-voice">
        <div className="aff-clinics-section-title"><span>08 / Limbaj</span><h2>Clar, calm și competent.</h2><p>Vocea digitală trebuie să reducă incertitudinea și să ajute pacientul să acționeze.</p></div>
        <div className="aff-clinics-voice"><article><span>Clar</span><p>Spune ce serviciu este disponibil, unde și care este pasul următor.</p></article><article><span>Uman</span><p>Folosește un limbaj accesibil, fără promisiuni absolute sau jargon inutil.</p></article><article><span>Competent</span><p>Fii exact în informația medicală și consecvent în denumirile serviciilor.</p></article><article><span>Acționabil</span><p>CTA-urile sunt specifice: „Programează-te”, „Găsește o clinică”, „Vezi investigațiile”.</p></article></div>
        <blockquote><small>Principiu editorial</small><p>Mai puțină complexitate.<br />Mai multă încredere.</p></blockquote>
      </section>

      <section className="aff-clinics-section" id="clinics-applications">
        <div className="aff-clinics-section-title"><span>09 / Aplicații</span><h2>Cine conduce depinde de context.</h2><p>Regula de utilizare separă activitatea de grup de experiențele dedicate Clinicile Affidea.</p></div>
        <div className="aff-clinics-applications">{CLINICILE_APPLICATIONS.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><div className={`aff-clinics-app-preview preview-${index + 1}`}><i /><i /><i /></div><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="aff-clinics-section aff-clinics-governance" id="clinics-governance">
        <div className="aff-clinics-section-title"><span>10 / Guvernanță și resurse</span><h2>O singură sursă de adevăr.</h2><p>Guideline-ul v1.6 este autoritatea principală; arhitectura de sub-brand completează regula, iar Drive păstrează artwork-ul canonic.</p></div>
        <div className="aff-clinics-source-grid"><a href={CLINICILE_SOURCES.core} target="_blank" rel="noreferrer"><span>01 · Canonical</span><h3>Affidea Brand Guidelines</h3><p>v1.6 / 2026 · Parent brand + capitolul Clinical service</p><b>Deschide PDF →</b></a><a href={CLINICILE_SOURCES.architecture} target="_blank" rel="noreferrer"><span>02 · Architecture</span><h3>Affidea Sub-brand Rules</h3><p>Relația dintre Affidea, serviciile clinice și celelalte tipuri de sub-brand.</p><b>Deschide PDF →</b></a><a href={CLINICILE_SOURCES.folder} target="_blank" rel="noreferrer"><span>03 · Artwork</span><h3>Folder Clinicile Affidea</h3><p>Fișierele originale și exporturile disponibile pentru piața locală.</p><b>Deschide Drive →</b></a></div>
        <div className="aff-clinics-governance-note"><div><span>Regulă de decizie</span><h3>Global guideline → excepție aprobată → asset canonic.</h3></div><p>Nu publica un logo nou, un descriptor local, o culoare suplimentară sau o variantă inversată până când statutul nu este confirmat de Global Brand Team. Fișierele albe pe fundal albastru găsite local rămân „de validat” dacă nu apar ca artwork aprobat în guideline-ul v1.6.</p></div>
      </section>

      <footer className="aff-clinics-footer"><div><img src={logo} alt="Clinicile Affidea" /><span>Digital brandbook · v1.6 / 2026</span></div><a href="#clinics-top">Înapoi sus ↑</a></footer>
    </article>
  );
};
