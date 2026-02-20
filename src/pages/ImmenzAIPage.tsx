import React from 'react';
import { motion } from 'framer-motion';
const features = [
{
  label: 'Extract',
  description: 'Structured data from any format, any layout',
  color: 'bg-[#063aa4]'
},
{
  label: 'Classify',
  description:
  'Documents sorted by type, department, or workflow automatically',
  color: 'bg-[#031741]'
},
{
  label: 'Validate',
  description: 'Errors caught before they reach your systems',
  color: 'bg-[#042362]'
},
{
  label: 'Scale',
  description: '100 or 100,000 documents. Same API. Same speed.',
  color: 'bg-[#052e83]'
}];

export function ImmenzAIPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-36 pb-24 selection:bg-[#063aa4] selection:text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.6
          }}
          className="pb-16 border-b border-white/[0.06] mb-16">

          <h1 className="page-hero-title mb-5">
            Documents in.{' '}
            <span className="text-slate-400 font-normal">Clean data out.</span>
          </h1>
          <p className="page-hero-subtitle mb-8">
            Every extraction, classification, and validation tool your team
            needs — without the overhead.
          </p>
          <div className="flex gap-3">
            <button className="px-5 py-2.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-slate-100 transition-colors">
              Get started
            </button>
            <button className="px-5 py-2.5 text-white text-sm font-medium rounded-full border border-white/20 hover:bg-white/5 transition-colors">
              Book a demo
            </button>
          </div>
        </motion.div>

        {/* Feature list */}
        <div className="max-w-lg space-y-3">
          {features.map((feature, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 15
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: index * 0.08,
              duration: 0.5
            }}
            className="rounded-xl bg-[#111111] border border-white/[0.06] p-4 flex items-center gap-4">

              <div
              className={`w-16 h-12 rounded-lg ${feature.color} flex items-center justify-center flex-shrink-0`}>

                <span className="text-white text-xs font-bold tracking-wide">
                  {feature.label}
                </span>
              </div>
              <div>
                <div className="text-white text-sm font-semibold">
                  {feature.label}
                </div>
                <div className="text-slate-500 text-xs mt-0.5">
                  {feature.description}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>);

}