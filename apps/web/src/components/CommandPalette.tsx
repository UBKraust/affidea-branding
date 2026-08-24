import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MOCK_BRANDS, MOCK_ASSETS } from '../fixtures/mockData';
import { CENTRES } from '../fixtures/centres';
import { useI18n } from '../i18n/i18nContext';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const { t } = useI18n();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || (e.key === '/' && document.activeElement?.tagName !== 'INPUT')) {
        e.preventDefault();
        if (isOpen) onClose();
        else setQuery('');
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredBrands = query
    ? MOCK_BRANDS.filter(b => b.name_ro.toLowerCase().includes(query.toLowerCase()) || b.name_en.toLowerCase().includes(query.toLowerCase()))
    : MOCK_BRANDS.slice(0, 4);

  const filteredAssets = query
    ? MOCK_ASSETS.filter(a => a.filename.toLowerCase().includes(query.toLowerCase()))
    : MOCK_ASSETS.slice(0, 3);

  const filteredCentres = query
    ? CENTRES.filter(c => c.name.toLowerCase().includes(query.toLowerCase()) || c.city.toLowerCase().includes(query.toLowerCase()))
    : CENTRES.slice(0, 3);

  const handleSelect = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <div className="aff-modal-backdrop" onClick={onClose}>
      <div className="aff-command-palette" onClick={e => e.stopPropagation()}>
        <div className="aff-command-header">
          <input
            type="text"
            className="aff-command-input"
            placeholder="Caută branduri, logo-uri, ghiduri sau centre... (ESC pentru închidere)"
            value={query}
            onChange={e => setQuery(e.target.value)}
            autoFocus
          />
          <kbd className="aff-command-kbd">ESC</kbd>
        </div>

        <div className="aff-command-body">
          {filteredBrands.length > 0 && (
            <div className="aff-command-group">
              <div className="aff-command-group-title">Branduri</div>
              {filteredBrands.map(brand => (
                <div key={brand.id} className="aff-command-item" onClick={() => handleSelect(`/brands/${brand.slug}`)}>
                  <span className="aff-command-item-badge">{brand.architecture_type}</span>
                  <span className="aff-command-item-title">{brand.name_ro}</span>
                  <span className="aff-command-item-desc">{brand.description_ro}</span>
                </div>
              ))}
            </div>
          )}

          {filteredAssets.length > 0 && (
            <div className="aff-command-group">
              <div className="aff-command-group-title">Asset-uri Digitale</div>
              {filteredAssets.map(asset => (
                <div key={asset.id} className="aff-command-item" onClick={() => handleSelect(`/assets`)}>
                  <span className="aff-command-item-badge format">{asset.extension.toUpperCase()}</span>
                  <span className="aff-command-item-title">{asset.filename}</span>
                  <span className="aff-command-item-desc">{asset.source_path}</span>
                </div>
              ))}
            </div>
          )}

          {filteredCentres.length > 0 && (
            <div className="aff-command-group">
              <div className="aff-command-group-title">Centre Medicale</div>
              {filteredCentres.map(centre => (
                <div key={centre.id} className="aff-command-item" onClick={() => handleSelect(`/data-centres`)}>
                  <span className="aff-command-item-badge centre">{centre.city}</span>
                  <span className="aff-command-item-title">{centre.name}</span>
                  <span className="aff-command-item-desc">{centre.address}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
