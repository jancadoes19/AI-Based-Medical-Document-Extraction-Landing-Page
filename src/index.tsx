import './index.css';
import React, { useEffect, useState } from 'react';
// Polyfill process for browser preview environment
// @ts-ignore
if (typeof window !== 'undefined' && typeof window.process === 'undefined') {
  // @ts-ignore
  window.process = {
    env: {
      NODE_ENV: 'production'
    }
  };
}
import ReactDOM from 'react-dom/client';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { PreFooterBanner } from './components/PreFooterBanner';
import { CookieBannerWrapper } from './components/CookieBannerWrapper';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { AIEthicsPage } from './pages/AIEthicsPage';
import { BlogPage } from './pages/BlogPage';
import { BlogArticlePage } from './pages/BlogArticlePage';
import { CareersPage } from './pages/CareersPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { ImmenzAIPage } from './pages/ImmenzAIPage';
import { IntegrationsPage } from './pages/IntegrationsPage';
import { LegalPage } from './pages/LegalPage';
import { ManifestoPage } from './pages/ManifestoPage';
import { PortalLoginPage } from './pages/PortalLoginPage';
import { PricingPage } from './pages/PricingPage';
import { RegisterPage } from './pages/RegisterPage';
import { SecurityPage } from './pages/SecurityPage';
import { UseCasesPage } from './pages/UseCasesPage';
import './app/globals.css';
function getPage(pathname: string): React.ReactNode {
  if (pathname === '/' || pathname === '') return <HomePage />;
  if (pathname === '/about') return <AboutPage />;
  if (pathname === '/ai-ethics') return <AIEthicsPage />;
  if (pathname === '/blog') return <BlogPage />;
  if (pathname.startsWith('/blog/')) return <BlogArticlePage />;
  if (pathname === '/careers') return <CareersPage />;
  if (pathname === '/checkout') return <CheckoutPage />;
  if (pathname === '/immenzo-ai') return <ImmenzAIPage />;
  if (pathname === '/integrations') return <IntegrationsPage />;
  if (pathname === '/legal') return <LegalPage />;
  if (pathname === '/manifesto') return <ManifestoPage />;
  if (pathname === '/portal') return <PortalLoginPage />;
  if (pathname === '/pricing') return <PricingPage />;
  if (pathname === '/register') return <RegisterPage />;
  if (pathname === '/security') return <SecurityPage />;
  if (pathname === '/use-cases') return <UseCasesPage />;
  return <HomePage />;
}
function App() {
  const [pathname, setPathname] = useState(
    typeof window !== 'undefined' ? window.location.pathname : '/'
  );
  useEffect(() => {
    const handlePopState = () => setPathname(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    // Intercept link clicks for client-side navigation
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (
      target &&
      target.href &&
      target.origin === window.location.origin &&
      !target.target &&
      !e.metaKey &&
      !e.ctrlKey)
      {
        e.preventDefault();
        const newPath = target.pathname + target.search;
        window.history.pushState(null, '', newPath);
        setPathname(target.pathname);
        window.scrollTo(0, 0);
      }
    };
    document.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      document.removeEventListener('click', handleClick);
    };
  }, []);
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-[#063aa4] selection:text-white">
      <Navigation />
      {getPage(pathname)}
      <PreFooterBanner />
      <Footer />
      <CookieBannerWrapper />
    </div>);

}
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);