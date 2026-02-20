import React from 'react';
import { GlassCard } from './ui/GlassCard';
import { ScanLine, Check } from 'lucide-react';
export function HandwritingSection() {
  return (
    <section className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-heading leading-heading">
              100% Handwriting Accuracy
            </h2>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-light">
              From faded prescriptions to decades-old patient notes—our AI reads
              what others can't. We've trained our models on millions of
              handwritten medical samples to ensure near-perfect accuracy even
              with poor legibility.
            </p>

            <ul className="space-y-5">
              {[
              'Recognizes cursive and shorthand',
              'Handles faded or damaged documents',
              'Context-aware correction for medical terms',
              'Distinguishes signatures from text'].
              map((item, i) =>
              <li
                key={i}
                className="flex items-center text-slate-700 text-lg">

                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-[#063aa4]/10 flex items-center justify-center mr-4">
                    <Check className="h-4 w-4 text-[#063aa4]" />
                  </div>
                  {item}
                </li>
              )}
            </ul>
          </div>

          {/* Visual */}
          <div className="order-1 lg:order-2 relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-[#063aa4] rounded-2xl opacity-10 blur-2xl"></div>
            <GlassCard className="p-1" hoverEffect>
              <div className="bg-slate-50 rounded-xl overflow-hidden relative">
                {/* Simulated Handwritten Note */}
                <div
                  className="p-10 font-handwriting text-2xl text-slate-800 leading-loose"
                  style={{
                    fontFamily: '"Caveat", cursive'
                  }}>

                  <p>Patient: Sarah Connor</p>
                  <p>DOB: 12/05/1984</p>
                  <p className="mt-4">Diagnosis: Acute Bronchitis</p>
                  <p>Rx: Amoxicillin 500mg</p>
                  <p>Take 1 tablet every 8 hours</p>
                  <p className="mt-8 text-xl opacity-70">Dr. Silberman</p>
                </div>

                {/* Scanning Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#063aa4]/10 to-transparent animate-scan pointer-events-none border-b-2 border-[#063aa4]/30"></div>

                {/* Floating Tags */}
                <div className="absolute top-1/4 right-8 bg-white/90 backdrop-blur shadow-lg px-4 py-1.5 rounded-md text-xs font-bold text-[#063aa4] border border-[#063aa4]/20 animate-pulse">
                  Amoxicillin 500mg
                </div>
                <div className="absolute bottom-1/3 left-8 bg-white/90 backdrop-blur shadow-lg px-4 py-1.5 rounded-md text-xs font-bold text-[#063aa4] border border-[#063aa4]/20 animate-pulse animation-delay-1000">
                  Acute Bronchitis
                </div>
              </div>
            </GlassCard>

            <div className="absolute -bottom-8 -right-8 bg-white p-5 rounded-xl shadow-xl border border-slate-100 flex items-center gap-4 animate-bounce-slow">
              <div className="bg-green-100 p-3 rounded-lg">
                <ScanLine className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">
                  Accuracy Score
                </div>
                <div className="text-2xl font-bold text-slate-900">99.8%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}