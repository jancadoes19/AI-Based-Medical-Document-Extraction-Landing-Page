import React from 'react';
import { Button } from './ui/Button';
import { motion } from 'framer-motion';
import { FileText, ScanLine, Code } from 'lucide-react';
export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#0a0a0a] overflow-hidden flex flex-col justify-center pt-32 pb-24">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* LEFT COLUMN: Inputs */}
          <div className="lg:col-span-3 flex flex-col gap-12 relative">
            {/* Card 1 */}
            <motion.div
              initial={{
                opacity: 0,
                x: -50
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              transition={{
                duration: 0.8,
                ease: 'easeOut'
              }}
              className="relative group">

              <div className="absolute -top-8 left-0 text-xs font-mono text-slate-500 mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-slate-600 rounded-full"></span>
                Discharge Summary
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 w-64 hover:border-[#063aa4]/50 transition-colors duration-500">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-slate-400" />
                    <span className="text-xs font-medium text-slate-300">
                      PDF Document
                    </span>
                  </div>
                  <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-slate-400">
                    1.2 MB
                  </span>
                </div>
                <div className="space-y-2 opacity-40">
                  <div className="h-2 bg-slate-400 rounded w-3/4"></div>
                  <div className="h-2 bg-slate-400 rounded w-1/2"></div>
                  <div className="h-2 bg-slate-400 rounded w-full"></div>
                  <div className="h-2 bg-slate-400 rounded w-5/6"></div>
                </div>
              </div>
              {/* Connection Point */}
              <div className="absolute top-1/2 -right-2 w-2 h-2 bg-[#063aa4] rounded-full shadow-[0_0_10px_#063aa4]"></div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{
                opacity: 0,
                x: -50
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: 'easeOut'
              }}
              className="relative group ml-8">

              <div className="absolute -top-8 left-0 text-xs font-mono text-slate-500 mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-slate-600 rounded-full"></span>
                Lab Report
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 w-64 hover:border-[#063aa4]/50 transition-colors duration-500">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">
                    <ScanLine className="w-4 h-4 text-slate-400" />
                    <span className="text-xs font-medium text-slate-300">
                      Scanned Image
                    </span>
                  </div>
                  <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-slate-400">
                    High Res
                  </span>
                </div>
                <div className="w-full h-20 bg-gradient-to-br from-slate-800 to-transparent rounded border border-white/5 flex items-center justify-center">
                  <span className="text-[10px] text-slate-600 font-mono">
                    AI PROCESSING...
                  </span>
                </div>
              </div>
              {/* Connection Point */}
              <div className="absolute top-1/2 -right-2 w-2 h-2 bg-[#063aa4] rounded-full shadow-[0_0_10px_#063aa4]"></div>
            </motion.div>

            {/* SVG Connecting Lines (Left to Center) */}
            <svg
              className="absolute top-0 left-full w-full h-full pointer-events-none overflow-visible hidden lg:block"
              style={{
                zIndex: -1
              }}>

              <path
                d="M 0 60 C 100 60, 100 250, 200 250"
                fill="none"
                stroke="#063aa4"
                strokeWidth="1"
                strokeOpacity="0.3"
                strokeDasharray="4 4" />

              <path
                d="M 32 280 C 100 280, 100 250, 200 250"
                fill="none"
                stroke="#063aa4"
                strokeWidth="1"
                strokeOpacity="0.3"
                strokeDasharray="4 4" />

            </svg>
          </div>

          {/* CENTER COLUMN: Main Content */}
          <div className="lg:col-span-6 text-center relative z-20">
            <motion.div
              initial={{
                opacity: 0,
                y: 30
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.8,
                delay: 0.3
              }}>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-heading leading-heading text-white mb-8">
                Turn Documents <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#063aa4] to-[#60a5fa]">
                  Into Data
                </span>
              </h1>

              <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                Immenzo automates document processing for healthcare and
                education institutions in Indonesia. From patient forms to
                student records—structured, verified, integrated.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="w-full sm:w-auto px-8 py-4 text-base font-bold text-black bg-white rounded-full hover:bg-slate-100 transition-colors shadow-sm">
                  Talk to Experts
                </button>
                <button className="w-full sm:w-auto px-8 py-4 text-base font-bold text-white bg-[#063aa4] rounded-full hover:bg-[#052e83] transition-colors shadow-lg shadow-[#063aa4]/30">
                  Book Demo
                </button>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Output */}
          <div className="lg:col-span-3 relative flex justify-end">
            {/* SVG Connecting Lines (Center to Right) */}
            <svg
              className="absolute top-0 right-full w-full h-full pointer-events-none overflow-visible hidden lg:block"
              style={{
                zIndex: -1
              }}>

              <path
                d="M 0 250 C 100 250, 100 150, 200 150"
                fill="none"
                stroke="#063aa4"
                strokeWidth="1"
                strokeOpacity="0.3"
                strokeDasharray="4 4" />

            </svg>

            <motion.div
              initial={{
                opacity: 0,
                x: 50
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: 'easeOut'
              }}
              className="relative group mt-12">

              <div className="absolute -top-8 right-0 text-xs font-mono text-slate-500 mb-2 flex items-center justify-end gap-2">
                FHIR R4 Output
                <span className="w-2 h-2 bg-[#063aa4] rounded-full shadow-[0_0_10px_#063aa4]"></span>
              </div>

              {/* Connection Point */}
              <div className="absolute top-1/2 -left-2 w-2 h-2 bg-[#063aa4] rounded-full shadow-[0_0_10px_#063aa4]"></div>

              <div className="bg-[#0f172a] border border-[#063aa4]/30 rounded-xl p-6 w-80 shadow-2xl shadow-[#063aa4]/10">
                <div className="flex justify-between items-center mb-4 border-b border-white/5 pb-3">
                  <div className="flex items-center gap-2">
                    <Code className="w-4 h-4 text-[#063aa4]" />
                    <span className="text-xs font-mono text-slate-400">
                      output.json
                    </span>
                  </div>
                  <span className="text-[10px] bg-[#063aa4]/20 text-[#063aa4] px-2 py-0.5 rounded border border-[#063aa4]/20">
                    JSON
                  </span>
                </div>
                <pre className="font-mono text-[10px] leading-relaxed overflow-hidden">
                  <code className="block">
                    <span className="text-slate-500">{`{`}</span>
                    {'\n  '}
                    <span className="text-purple-400">"resourceType"</span>
                    <span className="text-slate-400">: </span>
                    <span className="text-green-400">"Patient"</span>
                    <span className="text-slate-500">,</span>
                    {'\n  '}
                    <span className="text-purple-400">"id"</span>
                    <span className="text-slate-400">: </span>
                    <span className="text-green-400">"example"</span>
                    <span className="text-slate-500">,</span>
                    {'\n  '}
                    <span className="text-purple-400">"active"</span>
                    <span className="text-slate-400">: </span>
                    <span className="text-orange-400">true</span>
                    <span className="text-slate-500">,</span>
                    {'\n  '}
                    <span className="text-purple-400">"name"</span>
                    <span className="text-slate-400">: [</span>
                    {'\n    '}
                    <span className="text-slate-500">{`{`}</span>
                    {'\n      '}
                    <span className="text-purple-400">"use"</span>
                    <span className="text-slate-400">: </span>
                    <span className="text-green-400">"official"</span>
                    <span className="text-slate-500">,</span>
                    {'\n      '}
                    <span className="text-purple-400">"family"</span>
                    <span className="text-slate-400">: </span>
                    <span className="text-green-400">"Connor"</span>
                    {'\n    '}
                    <span className="text-slate-500">{`}`}</span>
                    {'\n  '}
                    <span className="text-slate-400">]</span>
                    {'\n'}
                    <span className="text-slate-500">{`}`}</span>
                  </code>
                </pre>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>);

}