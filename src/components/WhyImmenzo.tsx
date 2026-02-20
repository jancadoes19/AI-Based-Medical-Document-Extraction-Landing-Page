import React from 'react';
import { Check } from 'lucide-react';
const points = [
'Built only for healthcare',
'On-prem & private cloud support',
'Human-in-the-loop by design',
'Interoperability-first (FHIR, SATUSEHAT, BPJS)',
'Transparent, document-based pricing'];

export function WhyImmenzo() {
  return (
    <section id="why-immenzo" className="py-32 bg-[#010c21] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-heading leading-heading">
              Why Immenzo?
            </h2>
            <p className="text-slate-400 text-xl mb-10 leading-relaxed font-light">
              We don't do generic document processing. We build specialized AI
              infrastructure for the complexities of Indonesian healthcare and
              education data.
            </p>
          </div>

          <div className="space-y-8">
            {points.map((point, index) =>
            <div key={index} className="flex items-center group">
                <div className="w-10 h-10 rounded-full bg-[#063aa4]/20 flex items-center justify-center mr-6 group-hover:bg-[#063aa4] transition-colors duration-300">
                  <Check className="h-5 w-5 text-[#3377c7] group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-xl font-medium text-slate-200">
                  {point}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}