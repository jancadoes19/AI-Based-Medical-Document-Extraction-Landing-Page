import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { UseCases } from '../components/UseCases';
import { BenefitsSection } from '../components/BenefitsSection';
import { HowItWorks } from '../components/HowItWorks';
import { BlogPreview } from '../components/BlogPreview';
import { TrustBadges } from '../components/TrustBadges';
import { CertificationBanner } from '../components/CertificationBanner';
export function HomePage() {
  return (
    <main className="bg-white">
      <HeroSection />
      <UseCases />
      <HowItWorks />
      <TrustBadges variant="light" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <CertificationBanner variant="light" />
      </div>
      <BenefitsSection />
      <BlogPreview />
    </main>);

}