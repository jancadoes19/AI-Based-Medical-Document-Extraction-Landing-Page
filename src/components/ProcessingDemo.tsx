import React from 'react';
import { GlassCard } from './ui/GlassCard';
import { ArrowRight, Database, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
export function ProcessingDemo() {
  return (
    <section id="demo" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-heading leading-heading">
            5-Second Document Processing
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
            Watch messy medical records transform into clean, structured FHIR
            data—automatically.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          {/* Input Document */}
          <motion.div
            className="w-full max-w-md"
            initial={{
              opacity: 0,
              x: -50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8,
              ease: [0.21, 0.47, 0.32, 0.98]
            }}>

            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 relative transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
              <div className="absolute -top-4 -left-4 bg-[#063aa4] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md tracking-wider">
                INPUT: PDF / IMAGE
              </div>
              <div className="space-y-5 opacity-80">
                <div className="h-4 bg-slate-100 rounded w-3/4"></div>
                <div className="h-4 bg-slate-100 rounded w-1/2"></div>
                <div className="border-t border-slate-100 my-6"></div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <div className="h-3 bg-slate-200 rounded w-1/3"></div>
                    <div className="h-3 bg-slate-200 rounded w-1/4"></div>
                  </div>
                  <div className="flex justify-between">
                    <div className="h-3 bg-slate-200 rounded w-1/2"></div>
                    <div className="h-3 bg-slate-200 rounded w-1/5"></div>
                  </div>
                  <div className="flex justify-between">
                    <div className="h-3 bg-slate-200 rounded w-2/5"></div>
                    <div className="h-3 bg-slate-200 rounded w-1/4"></div>
                  </div>
                </div>
                <div className="p-4 bg-yellow-50 border border-yellow-100 rounded-lg text-sm text-yellow-800 font-handwriting">
                  "Patient reports mild chest pain. Prescribed Amlodipine 5mg
                  daily."
                </div>
              </div>
            </div>
            <div className="text-center mt-6 text-sm font-semibold text-slate-400 uppercase tracking-widest">
              Unstructured Medical Record
            </div>
          </motion.div>

          {/* Processing Indicator */}
          <div className="flex flex-col items-center justify-center text-[#063aa4] z-10">
            <motion.div
              animate={{
                scale: [1, 1.1, 1]
              }}
              transition={{
                repeat: Infinity,
                duration: 2
              }}
              className="bg-white p-4 rounded-full shadow-lg border border-[#063aa4]/20">

              <ArrowRight className="h-8 w-8" />
            </motion.div>
            <span className="text-xs font-bold mt-4 tracking-widest uppercase text-[#063aa4]">
              AI Processing
            </span>
          </div>

          {/* Output Data */}
          <motion.div
            className="w-full max-w-md"
            initial={{
              opacity: 0,
              x: 50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.21, 0.47, 0.32, 0.98]
            }}>

            <GlassCard className="bg-[#010c21]/95 border-[#063aa4]/30 text-indigo-100 transform rotate-[2deg] hover:rotate-0 transition-transform duration-500">
              <div className="absolute -top-4 -right-4 bg-green-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md flex items-center tracking-wider">
                <CheckCircle2 className="w-3 h-3 mr-1.5" /> FHIR READY
              </div>
              <div className="p-8 font-mono text-xs leading-relaxed">
                <div className="flex items-center mb-6 border-b border-[#063aa4]/30 pb-3">
                  <Database className="w-4 h-4 mr-2 text-[#063aa4]" />
                  <span className="text-[#6699d5]">extracted_data.json</span>
                </div>
                <div className="space-y-1.5">
                  <p>
                    <span className="text-purple-400">"resourceType"</span>:{' '}
                    <span className="text-green-400">"MedicationRequest"</span>,
                  </p>
                  <p>
                    <span className="text-purple-400">"status"</span>:{' '}
                    <span className="text-green-400">"active"</span>,
                  </p>
                  <p>
                    <span className="text-purple-400">"medication"</span>:{' '}
                    <span className="text-white">{'{'}</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-purple-400">"code"</span>:{' '}
                    <span className="text-green-400">"Amlodipine"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-purple-400">"dosage"</span>:{' '}
                    <span className="text-green-400">"5mg"</span>
                  </p>
                  <p>
                    <span className="text-white">{'}'}</span>,
                  </p>
                  <p>
                    <span className="text-purple-400">"reason"</span>:{' '}
                    <span className="text-green-400">"Chest pain"</span>,
                  </p>
                  <p>
                    <span className="text-purple-400">"confidence"</span>:{' '}
                    <span className="text-blue-400">0.998</span>
                  </p>
                </div>
              </div>
            </GlassCard>
            <div className="text-center mt-6 text-sm font-semibold text-slate-400 uppercase tracking-widest">
              Structured FHIR Data
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}