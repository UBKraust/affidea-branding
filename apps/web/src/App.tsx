import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { I18nProvider } from './i18n/i18nContext';
import { AppShell } from './components/AppShell';
import { DashboardPage } from './pages/DashboardPage';
import { BrandsPage } from './pages/BrandsPage';
import { BrandDetailPage } from './pages/BrandDetailPage';
import { AssetsPage } from './pages/AssetsPage';
import { GuidelinesPage } from './pages/GuidelinesPage';
import { DataCentresPage } from './pages/DataCentresPage';
import { AdminPage } from './pages/AdminPage';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);
  return null;
};

export const App: React.FC = () => {
  return (
    <I18nProvider>
      <BrowserRouter>
        <ScrollToTop />
        <AppShell>
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/brands" element={<BrandsPage />} />
            <Route path="/brands/:slug" element={<BrandDetailPage />} />
            <Route path="/assets" element={<AssetsPage />} />
            <Route path="/guidelines" element={<GuidelinesPage />} />
            <Route path="/data-centres" element={<DataCentresPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AppShell>
      </BrowserRouter>
    </I18nProvider>
  );
};

export default App;
