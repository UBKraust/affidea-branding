import React, { createContext, useContext, useState, useEffect } from 'react';
import roDict from '../../../../locales/ro.json';
import enDict from '../../../../locales/en.json';

export type Locale = 'ro' | 'en';

const dictionaries: Record<Locale, Record<string, string>> = {
  ro: {
    ...roDict,
    "dashboard.welcome": "Bine ai venit în Affidea Brand Hub",
    "dashboard.subtitle": "Sursa ta unică de adevăr pentru identitate de brand, ghiduri vizuale, asset-uri aprobate și centre medicale.",
    "dashboard.stats.brands": "Branduri Active",
    "dashboard.stats.assets": "Asset-uri Aprobate",
    "dashboard.stats.centres": "Centre Medicale",
    "dashboard.stats.sync": "Ultima Sincronizare",
    "dashboard.quick.brands": "Arhitectură de Brand",
    "dashboard.quick.brandsDesc": "Explorează brandul-mamă, clinicile și brandurile asociate sau în tranziție.",
    "dashboard.quick.assets": "Biblioteca de Asset-uri",
    "dashboard.quick.assetsDesc": "Descarcă logo-uri vectoriale, palete de culori și pachete de identitate.",
    "dashboard.quick.guidelines": "Ghiduri de Identitate",
    "dashboard.quick.guidelinesDesc": "Consultă manualul oficial de brand Affidea 2026 și regulile de aplicare.",
    "dashboard.quick.centres": "Baza de Date Centre",
    "dashboard.quick.centresDesc": "Accesează datele operaționale ale celor 82 de centre din sursa oficială.",
    "brands.title": "Directorul de Branduri",
    "brands.subtitle": "Toate brandurile și sub-brandurile din grupul Affidea România.",
    "brands.filter.all": "Toate Arhitecturile",
    "brands.filter.parent": "Brand Mamă",
    "brands.filter.clinical": "Clinici",
    "brands.filter.specialised": "Specializat (Pediatrie)",
    "brands.filter.acquisition_transitional": "Tranziție / Achiziții",
    "brands.filter.partnership": "Parteneriate",
    "brands.filter.associated": "Asociat",
    "assets.title": "Biblioteca de Asset-uri Digitale",
    "assets.subtitle": "Logo-uri, fonturi, imagini și șabloane aprobate pentru comunicare.",
    "guidelines.title": "Ghiduri și Manuale de Brand",
    "guidelines.subtitle": "Standardul vizual oficial Affidea v1.6 (2026).",
    "centres.title": "Centre Medicale Affidea",
    "centres.subtitle": "Rețeaua națională de imagistică și pediatrie.",
    "admin.title": "Panou de Administrare și Guvernanță",
    "admin.subtitle": "Gestionare aprobări, sincronizare cu Google Drive și audit.",
  },
  en: {
    ...enDict,
    "dashboard.welcome": "Welcome to Affidea Brand Hub",
    "dashboard.subtitle": "Your single source of truth for brand identity, visual guidelines, approved assets, and medical centres.",
    "dashboard.stats.brands": "Active Brands",
    "dashboard.stats.assets": "Approved Assets",
    "dashboard.stats.centres": "Medical Centres",
    "dashboard.stats.sync": "Last Sync",
    "dashboard.quick.brands": "Brand Architecture",
    "dashboard.quick.brandsDesc": "Explore parent brand, clinics, and associated or transitional brands.",
    "dashboard.quick.assets": "Asset Library",
    "dashboard.quick.assetsDesc": "Download vector logos, color palettes, and identity packs.",
    "dashboard.quick.guidelines": "Brand Guidelines",
    "dashboard.quick.guidelinesDesc": "Review the official Affidea 2026 brand manual and usage rules.",
    "dashboard.quick.centres": "Centres Database",
    "dashboard.quick.centresDesc": "Access operational data for all 82 centres in the official source.",
    "brands.title": "Brand Directory",
    "brands.subtitle": "All brands and sub-brands within the Affidea Romania group.",
    "brands.filter.all": "All Architectures",
    "brands.filter.parent": "Parent Brand",
    "brands.filter.clinical": "Clinics",
    "brands.filter.specialised": "Specialised (Pediatrics)",
    "brands.filter.acquisition_transitional": "Transitional / Acquisitions",
    "brands.filter.partnership": "Partnerships",
    "brands.filter.associated": "Associated",
    "assets.title": "Digital Asset Library",
    "assets.subtitle": "Approved logos, fonts, graphics, and communication templates.",
    "guidelines.title": "Brand Manuals & Guidelines",
    "guidelines.subtitle": "Official Affidea visual standard v1.6 (2026).",
    "centres.title": "Affidea Medical Centres",
    "centres.subtitle": "National imaging and pediatric network.",
    "admin.title": "Governance & Admin Panel",
    "admin.subtitle": "Manage approvals, Google Drive sync, and audit trails.",
  },
};

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocale] = useState<Locale>(() => {
    const saved = localStorage.getItem('affidea_locale');
    return (saved === 'en' || saved === 'ro') ? saved : 'ro';
  });

  useEffect(() => {
    localStorage.setItem('affidea_locale', locale);
  }, [locale]);

  const t = (key: string): string => {
    const dict = dictionaries[locale];
    return dict[key] || dictionaries['ro'][key] || key;
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = (): I18nContextType => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};
