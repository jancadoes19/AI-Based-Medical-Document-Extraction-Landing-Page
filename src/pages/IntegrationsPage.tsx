import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Scan, Database, Code2, Server } from 'lucide-react';
import { CalendarModal } from '../components/CalendarModal';
const receives = [
'Scanners',
'Email',
'Mobile capture',
'Document portals',
'Manual upload'];

const delivers = [
'Hospital EMR/HIS',
'Laboratory LIS',
'Pharmacy systems',
'SIS',
'Admissions platforms',
'Academic record systems',
'Legacy databases'];

const formats = [
'JSON',
'CSV',
'REST API',
'Database connectors',
'HL7 v2.x',
'FHIR R4'];

const deployOptions = ['On-premise', 'Private cloud', 'Hybrid', 'Air-gapped'];
function Tag({ label, accent = false }: {label: string;accent?: boolean;}) {
  return (
    <span
      className={`px-3 py-1.5 rounded-full border text-sm font-medium ${accent ? 'bg-[#063aa4]/10 border-[#063aa4]/25 text-[#063aa4]' : 'bg-white/[0.04] border-white/[0.08] text-slate-300'}`}>

      {label}
    </span>);

}
export function IntegrationsPage() {
  const [showCalendar, setShowCalendar] = useState(false);
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#063aa4] selection:text-white">
      {/* Hero */}
      <div className="page-hero">
        <div className="page-hero-inner">
          <motion.h1
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
            className="page-hero-title">

            Sits between your documents and your systems.{' '}
            <span className="text-slate-400 font-normal">
              Touches nothing else.
            </span>
          </motion.h1>
        </div>
      </div>

      <section className="page-section">
        <div className="page-section-inner">
          {/* Flow diagram */}
          <motion.div
            initial={{
              opacity: 0,
              y: 24
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}
            className="grid md:grid-cols-3 gap-0 mb-16 rounded-2xl border border-white/[0.08] overflow-hidden">

            <div className="p-8 bg-[#111111] border-r border-white/[0.08]">
              <div className="flex items-center gap-2 mb-5">
                <Scan className="w-4 h-4 text-slate-500" />
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                  Receives from
                </span>
              </div>
              <div className="flex flex-col gap-2">
                {receives.map((item) =>
                <span
                  key={item}
                  className="text-sm text-slate-300 font-medium py-1.5 border-b border-white/[0.05] last:border-0">

                    {item}
                  </span>
                )}
              </div>
            </div>

            <div className="p-8 bg-[#063aa4] flex flex-col items-center justify-center text-center">
              <img
                src="/Image_20-02-26_at_14.22.png"
                alt="Immenzo"
                className="h-8 w-auto brightness-0 invert mb-4" />

              <p className="text-white/80 text-sm leading-relaxed">
                Reads documents.
                <br />
                Returns structured data.
              </p>
            </div>

            <div className="p-8 bg-[#111111] border-l border-white/[0.08]">
              <div className="flex items-center gap-2 mb-5">
                <Database className="w-4 h-4 text-slate-500" />
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                  Delivers to
                </span>
              </div>
              <div className="flex flex-col gap-2">
                {delivers.map((item) =>
                <span
                  key={item}
                  className="text-sm text-slate-300 font-medium py-1.5 border-b border-white/[0.05] last:border-0">

                    {item}
                  </span>
                )}
              </div>
            </div>
          </motion.div>

          {/* Output + Deploy */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <motion.div
              initial={{
                opacity: 0,
                y: 24
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.6
              }}
              className="bg-[#111111] rounded-2xl border border-white/[0.07] p-8">

              <div className="flex items-center gap-3 mb-5">
                <Code2 className="w-4 h-4 text-slate-500" />
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                  Output as
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {formats.map((f) =>
                <Tag key={f} label={f} accent />
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                y: 24
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
                delay: 0.1
              }}
              className="bg-[#111111] rounded-2xl border border-white/[0.07] p-8">

              <div className="flex items-center gap-3 mb-5">
                <Server className="w-4 h-4 text-slate-500" />
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                  Deploy on
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {deployOptions.map((d) =>
                <Tag key={d} label={d} />
                )}
              </div>
            </motion.div>
          </div>

          {/* Closing */}
          <motion.div
            initial={{
              opacity: 0,
              y: 24
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}
            className="bg-[#111111] border border-white/[0.07] rounded-2xl p-8 mb-8">

            <p className="text-slate-300 text-base leading-relaxed">
              Your systems stay exactly as they are. The data arriving into them
              is just already clean.
            </p>
          </motion.div>

          {/* Custom connector */}
          <motion.div
            initial={{
              opacity: 0,
              y: 24
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}
            className="bg-[#031741] border border-white/[0.06] rounded-2xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

            <div>
              <p className="text-slate-300 text-base">
                Your system isn't listed? It probably still works.
              </p>
            </div>
            <button
              onClick={() => setShowCalendar(true)}
              className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-white text-slate-900 text-sm font-semibold rounded-full hover:bg-slate-100 transition-colors">

              Talk to us
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </section>

      <CalendarModal
        isOpen={showCalendar}
        onClose={() => setShowCalendar(false)} />

    </div>);

}