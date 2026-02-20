import React from 'react';
import { Building2, FileText, ShieldCheck } from 'lucide-react';
export function CredibilityBar() {
  return (
    <section className="border-y border-slate-100 bg-slate-50/50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="flex flex-col items-center justify-center gap-4">
            <Building2 className="h-8 w-8 text-slate-300" />
            <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">
              Used by hospitals, labs, and insurers
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 md:border-x border-slate-200">
            <FileText className="h-8 w-8 text-slate-300" />
            <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">
              Processes thousands of documents daily
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <ShieldCheck className="h-8 w-8 text-slate-300" />
            <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">
              Designed for regulated healthcare
            </span>
          </div>
        </div>
      </div>
    </section>);

}