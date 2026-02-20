import React from 'react';
import { motion } from 'framer-motion';
const paragraphs = [
{
  text: "Every great civilization was built on information. For centuries, we've been handling it wrong.",
  style: 'text-white font-medium text-xl'
},
{
  text: 'Right now, somewhere, a person is typing what a machine could read. Re-entering what was already written. Waiting days for what should take seconds. Across every industry that keeps the world moving, we are hemorrhaging human time on work that was never meant for humans.',
  style: ''
},
{
  text: 'This is not a small inefficiency. It is everywhere.',
  style: 'text-white font-medium'
},
{
  text: 'The highest cost in any organization is not technology. It is friction: the invisible drag of manual processes and document chaos compounding silently, slowing decisions, exhausting the people who matter most.',
  style: ''
},
{
  text: 'We built Immenzo because human attention is too valuable to spend on data entry.',
  style: 'text-white font-semibold text-xl'
},
{
  text: 'Engineers should engineer. Doctors should heal. Teachers should teach. The people who move civilization forward should not be slowed by paperwork.',
  style: ''
},
{
  text: 'We are obsessed with one thing: making information flow. From document to decision, instantly, accurately, at any scale. Infrastructure should be invisible. Humming in the background while the people it serves do work only they can do.',
  style: ''
},
{
  text: "We move fast because the world doesn't wait. We stay sharp because good enough compounds into failure. We build together because no problem worth solving is ever solved alone.",
  style: ''
},
{
  text: 'Less friction. More progress. For everyone.',
  style: 'text-white font-bold text-2xl mt-12'
}];

export function ManifestoPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-300 pt-32 pb-0 selection:bg-[#063aa4] selection:text-white">
      <div className="max-w-2xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-xs text-slate-500 tracking-wider mb-4 uppercase font-medium">
            Feb 2026 · Immenzo
          </div>
          <h1 className="page-hero-title mb-6">The Immenzo Manifesto</h1>
          <div className="flex items-center justify-center gap-2">
            <img
              src="/Image_20-02-26_at_14.22.png"
              alt="Immenzo"
              className="h-4 w-auto brightness-0 invert opacity-50" />

            <span className="text-xs text-slate-400 font-medium">Immenzo</span>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-full mt-12 relative">
        <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
          <img
            src="/image.png"
            alt="Space Art"
            className="w-full h-full object-cover"
            style={{
              filter: 'contrast(1.1) brightness(0.9)'
            }} />

          <div
            className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`
            }} />

        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-6 mt-16 pb-32">
        <div className="space-y-8 text-lg font-light leading-relaxed">
          {paragraphs.map((p, i) =>
          <motion.p
            key={i}
            initial={{
              opacity: 0,
              y: 10
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6,
              delay: i * 0.05
            }}
            className={p.style || 'text-slate-400'}>

              {p.text}
            </motion.p>
          )}

          <motion.div
            initial={{
              opacity: 0,
              y: 10
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6,
              delay: 0.5
            }}
            className="mt-16 pt-8 border-t border-white/10">

            <div className="text-white font-semibold">Janice Alvina</div>
            <div className="text-slate-500 text-sm mt-1">
              Founder & CEO, Immenzo
            </div>
          </motion.div>
        </div>
      </div>
    </div>);

}