import React from 'react';
export function FinalCTA() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-12 leading-heading tracking-heading">
          Stop Manual Data Entry
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-12 py-4 text-lg font-bold text-black bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-colors shadow-sm">
            Talk to Experts
          </button>
          <button className="w-full sm:w-auto px-12 py-4 text-lg font-bold text-white bg-[#063aa4] rounded-full hover:bg-[#052e83] transition-colors shadow-lg shadow-[#063aa4]/20">
            Book Demo
          </button>
        </div>
      </div>
    </section>);

}