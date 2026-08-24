import React, { useState } from 'react';
import { CENTRES } from '../fixtures/centres';
import { useI18n } from '../i18n/i18nContext';

export const DataCentresPage: React.FC = () => {
  const { t } = useI18n();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all');

  const filteredCentres = CENTRES.filter(c => {
    const matchesRegion = selectedRegion === 'all' || c.region === selectedRegion;
    const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          c.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          c.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          c.contact_person.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          c.legal_entity.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  const regions = ['all', ...Array.from(new Set(CENTRES.map(centre => centre.region))).sort((a, b) => a.localeCompare(b, 'ro'))];

  return (
    <div className="aff-centres-page">
      <div className="aff-page-header aff-page-header-editorial">
        <div>
          <span className="aff-eyebrow">Internal operations</span>
          <h1>{t('centres.title')}</h1>
          <p>{t('centres.subtitle')}</p>
        </div>
        <div className="aff-header-actions"><div className="aff-page-count"><strong>{CENTRES.length}</strong><span>centre în sursa oficială</span></div><a className="aff-btn aff-btn-primary" href="https://docs.google.com/spreadsheets/d/1Kz3b712Prx2XRaEXdgbH_3Wt_8C-ofNt/edit?gid=509335129#gid=509335129" target="_blank" rel="noreferrer">Deschide sursa XLSX</a></div>
      </div>

      {/* Confidentiality Warning Banner */}
      <div className="aff-confidential-banner">
        <strong>Confidențial</strong>
        <span>{t('centres.confidential')}</span>
      </div>

      {/* Filter Bar */}
      <div className="aff-filter-bar">
        <div className="aff-search-box">
          <input
            type="text"
            placeholder="Căutare după nume filiată, oraș, adresă sau persoană de contact..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="aff-filter-tabs">
          <span className="aff-filter-label">Județ:</span>
          {regions.map(reg => (
            <button
              key={reg}
              className={`aff-filter-chip ${selectedRegion === reg ? 'active' : ''}`}
              onClick={() => setSelectedRegion(reg)}
            >
              {reg === 'all' ? 'Toate județele' : reg}
            </button>
          ))}
        </div>
      </div>

      {/* Data Table */}
      <div className="aff-table-card">
        <table className="aff-data-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Denumire Centru Medical</th>
              <th>Oraș / Județ</th>
              <th>Adresă Fizică</th>
              <th>Persoană de Contact</th>
              <th>Telefon Contact</th>
              <th>Entitate Juridică</th>
            </tr>
          </thead>
          <tbody>
            {filteredCentres.map(c => (
              <tr key={c.id}>
                <td><strong>{c.number}</strong></td>
                <td>
                  <div className="aff-centre-name">{c.name}</div>
                </td>
                <td>
                  <span className="aff-region-badge">{c.city}</span>
                  <div className="aff-sub-region">{c.region}</div>
                </td>
                <td>{c.address}</td>
                <td>{c.contact_person}</td>
                <td>
                  {c.phone ? <a href={`tel:${c.phone.replace(/[^+\d]/g, '')}`} className="aff-phone-link">{c.phone}</a> : <span className="aff-empty-value">—</span>}
                </td>
                <td><small>{c.legal_entity}</small></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
