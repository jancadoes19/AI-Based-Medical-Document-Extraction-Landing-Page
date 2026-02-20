import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation } from
'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { PreFooterBanner } from './components/PreFooterBanner';
import { CookieBanner } from './components/CookieBanner';
import { HomePage } from './pages/HomePage';
import { UseCasesPage } from './pages/UseCasesPage';
import { IntegrationsPage } from './pages/IntegrationsPage';
import { PricingPage } from './pages/PricingPage';
import { SecurityPage } from './pages/SecurityPage';
import { BlogPage } from './pages/BlogPage';
import { BlogArticlePage } from './pages/BlogArticlePage';
import { LegalPage } from './pages/LegalPage';
import { CareersPage } from './pages/CareersPage';
import { ManifestoPage } from './pages/ManifestoPage';
import { ImmenzAIPage } from './pages/ImmenzAIPage';
import { AIEthicsPage } from './pages/AIEthicsPage';
import { AboutPage } from './pages/AboutPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { RegisterPage } from './pages/RegisterPage';
import { PortalLoginPage } from './pages/PortalLoginPage';
import { PortalGuard } from './components/PortalGuard';
// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
export function App() {
  const [showCookieBanner, setShowCookieBanner] = useState(() => {
    try {
      return !localStorage.getItem('immenzo_cookie_consent');
    } catch {
      return true;
    }
  });
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-[#063aa4] selection:text-white">
        <ScrollToTop />
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Gated — requires portal login */}
          <Route
            path="/immenzo-ai"
            element={
            <PortalGuard>
                <ImmenzAIPage />
              </PortalGuard>
            } />

          <Route
            path="/use-cases"
            element={
            <PortalGuard>
                <UseCasesPage />
              </PortalGuard>
            } />

          <Route
            path="/integrations"
            element={
            <PortalGuard>
                <IntegrationsPage />
              </PortalGuard>
            } />

          {/* Public */}
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/security" element={<SecurityPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogArticlePage />} />
          <Route path="/legal" element={<LegalPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/manifesto" element={<ManifestoPage />} />
          <Route path="/ai-ethics" element={<AIEthicsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portal" element={<PortalLoginPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
        <PreFooterBanner />
        <Footer />
        <CookieBanner
          isOpen={showCookieBanner}
          onClose={() => setShowCookieBanner(false)}
          onAcceptAll={() => {
            localStorage.setItem('immenzo_cookie_consent', 'all');
            setShowCookieBanner(false);
          }}
          onEssentialOnly={() => {
            localStorage.setItem('immenzo_cookie_consent', 'essential');
            setShowCookieBanner(false);
          }} />

      </div>
    </Router>);

}