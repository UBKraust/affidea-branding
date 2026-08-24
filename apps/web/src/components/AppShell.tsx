import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useI18n } from '../i18n/i18nContext';
import { CommandPalette } from './CommandPalette';

interface AppShellProps {
  children: React.ReactNode;
}

export const AppShell: React.FC<AppShellProps> = ({ children }) => {
  const { locale, setLocale, t } = useI18n();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navItems = [
    { path: '/', labelKey: 'nav.dashboard', index: '01' },
    { path: '/brands', labelKey: 'nav.brands', index: '02' },
    { path: '/assets', labelKey: 'nav.assets', index: '03' },
    { path: '/guidelines', labelKey: 'nav.guidelines', index: '04' },
    { path: '/data-centres', labelKey: 'nav.centres', index: '05' },
    { path: '/admin', labelKey: 'nav.admin', index: '06' },
  ];

  return (
    <div className="aff-app-container">
      <aside className="aff-sidebar">
        <NavLink to="/" className="aff-sidebar-brand" aria-label="Affidea Brand Hub">
          <img src="/brand-assets/logos/affidea-parent.svg" alt="Affidea" />
          <span>Brand Hub</span>
        </NavLink>

        <nav className="aff-nav" aria-label="Navigație principală">
          {navItems.map(item => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) => `aff-nav-item ${isActive ? 'active' : ''}`}
            >
              <span className="aff-nav-index">{item.index}</span>
              <span>{t(item.labelKey)}</span>
            </NavLink>
          ))}
        </nav>

        <div className="aff-sidebar-footer">
          <div className="aff-sync-label">Google Drive</div>
          <strong>Sincronizat acum 5 min</strong>
          <span>505 fișiere monitorizate</span>
        </div>
      </aside>

      <div className="aff-main-wrapper">
        <header className="aff-topbar">
          <button className="aff-search-trigger" onClick={() => setIsSearchOpen(true)}>
            <span>Caută în biblioteca de brand</span>
            <kbd>⌘ K</kbd>
          </button>

          <div className="aff-topbar-actions">
            <div className="aff-lang-switcher" aria-label="Limbă">
              <button className={locale === 'ro' ? 'active' : ''} onClick={() => setLocale('ro')}>RO</button>
              <button className={locale === 'en' ? 'active' : ''} onClick={() => setLocale('en')}>EN</button>
            </div>
            <div className="aff-user-badge">
              <span className="aff-user-name">Octavian Maier</span>
              <span className="aff-user-domain">Administrator</span>
            </div>
            <button className="aff-user-menu" aria-label="Deschide meniul utilizator">OM</button>
          </div>
        </header>

        <main className="aff-content">{children}</main>
      </div>

      <CommandPalette isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </div>
  );
};
