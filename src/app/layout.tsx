import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { PreFooterBanner } from '../components/PreFooterBanner';
import { CookieBannerWrapper } from '../components/CookieBannerWrapper';
export const metadata: Metadata = {
  title: 'Immenzo',
  description: 'Immenzo Application'
};
export default function RootLayout({
  children


}: {children: React.ReactNode;}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white font-sans text-slate-900 selection:bg-[#063aa4] selection:text-white">
        <Navigation />
        {children}
        <PreFooterBanner />
        <Footer />
        <CookieBannerWrapper />
      </body>
    </html>);

}