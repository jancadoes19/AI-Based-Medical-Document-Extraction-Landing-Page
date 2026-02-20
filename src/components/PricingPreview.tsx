import React from 'react';
import { ArrowRight } from 'lucide-react';
export function PricingPreview() {
  return (
    <section
      id="pricing"
      className="py-24 bg-slate-50 border-b border-slate-200">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10 tracking-heading leading-heading">
          Simple, transparent healthcare pricing
        </h2>
        <a
          href="/pricing"
          className="inline-flex items-center text-[#063aa4] font-bold text-lg hover:text-[#052e83] transition-colors group">

          View Pricing
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </section>);

}