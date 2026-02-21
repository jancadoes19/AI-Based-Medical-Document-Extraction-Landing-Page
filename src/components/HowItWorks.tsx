import React from 'react';
import { motion } from 'framer-motion';
import {
  Upload,
  BrainCircuit,
  UserCheck,
  Database,
  FileText,
  Scan,
  CheckCircle,
  Send } from
'lucide-react';
const steps = [
{
  step: '01',
  title: 'Ingest',
  description: 'Upload documents. PDF, scans, photos, or connect via API.',
  icon: Upload,
  visual: [
  {
    icon: FileText,
    label: 'PDF Upload',
    shortcut: 'P'
  },
  {
    icon: Scan,
    label: 'Scan Document',
    shortcut: 'S'
  },
  {
    icon: Upload,
    label: 'Batch Import',
    shortcut: 'B'
  }]

},
{
  step: '02',
  title: 'Process',
  description: 'AI extracts and structures data. Automatically.',
  icon: BrainCircuit,
  visual: null
},
{
  step: '03',
  title: 'Validate',
  description: 'Human review for critical data. Flag, verify, approve.',
  icon: UserCheck,
  visual: null
},
{
  step: '04',
  title: 'Deliver',
  description:
  'Export to your systems. EMR, HIS, SIS, BPJS, SatuSehat, or custom API.',
  icon: Database,
  visual: null
}];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-14 sm:py-20 md:py-24 bg-[#0a0a0a] text-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-heading leading-heading">
            How It Works
          </h2>
        </div>

        {/* Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true,
              margin: '-50px'
            }}
            transition={{
              delay: index * 0.12,
              duration: 0.7,
              ease: [0.21, 0.47, 0.32, 0.98]
            }}
            className="group flex flex-col">

              {/* Card — fixed height so all 4 are uniform */}
              <div className="bg-[#141414] border border-white/[0.08] rounded-2xl p-5 sm:p-6 min-h-[280px] sm:h-[340px] flex flex-col relative overflow-hidden">
                {/* Step Number + Title */}
                <div className="flex items-baseline gap-2 mb-4 sm:mb-5">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-light text-white/20 tracking-tight">
                    {step.step}
                  </span>
                  <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                    {step.title}
                  </span>
                </div>

                {/* Visual Area — fills remaining space */}
                <div className="flex-1 flex items-start justify-center relative overflow-hidden">
                  {index === 0 /* Ingest - Menu-like UI */ &&
                <div className="w-full bg-[#1a1a1a] rounded-xl border border-white/[0.06] p-3 sm:p-4 space-y-1">
                      <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-2 font-medium">
                        Add Document
                      </div>
                      {[
                  {
                    icon: FileText,
                    label: 'PDF / Image',
                    key: 'P'
                  },
                  {
                    icon: Scan,
                    label: 'Scan',
                    key: 'S'
                  },
                  {
                    icon: Upload,
                    label: 'Batch Upload',
                    key: 'B'
                  }].
                  map((item, i) =>
                  <div
                    key={i}
                    className="flex items-center justify-between py-2 sm:py-2.5 px-2 sm:px-3 rounded-lg hover:bg-white/[0.04] transition-colors">

                          <div className="flex items-center gap-2 sm:gap-3">
                            <item.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400" />
                            <span className="text-xs sm:text-sm text-slate-300">
                              {item.label}
                            </span>
                          </div>
                          <span className="text-[10px] text-slate-600 font-mono">
                            {item.key}
                          </span>
                        </div>
                  )}
                      <div className="border-t border-white/[0.06] mt-2 pt-2">
                        <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-2 font-medium">
                          Source
                        </div>
                        <div className="flex items-center justify-between py-2 sm:py-2.5 px-2 sm:px-3 rounded-lg">
                          <div className="flex items-center gap-2 sm:gap-3">
                            <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400" />
                            <span className="text-xs sm:text-sm text-slate-300">
                              API Endpoint
                            </span>
                          </div>
                          <span className="text-[10px] text-slate-600 font-mono">
                            A
                          </span>
                        </div>
                      </div>
                    </div>
                }

                  {index === 1 /* Process - AI Processing Visual */ &&
                <div className="w-full space-y-3">
                      <div className="bg-[#1a1a1a] rounded-xl border border-white/[0.06] p-3 sm:p-4">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-[10px] text-slate-500 uppercase tracking-wider">
                            Processing
                          </span>
                          <span className="text-[10px] text-green-400 bg-green-400/10 px-2 py-0.5 rounded">
                            Active
                          </span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <div className="w-full bg-white/[0.06] rounded-full h-1.5">
                              <div className="bg-[#063aa4] h-1.5 rounded-full w-[98%]"></div>
                            </div>
                            <span className="text-[10px] text-slate-400 whitespace-nowrap">
                              98%
                            </span>
                          </div>
                        </div>
                        <div className="mt-3 space-y-1.5">
                          {[
                      'AI Smart Processing',
                      'Data Structuring',
                      'Format Mapping'].
                      map((item, i) =>
                      <div
                        key={i}
                        className="flex items-center gap-2 text-xs text-slate-400">

                              <CheckCircle className="w-3 h-3 text-green-400" />
                              {item}
                            </div>
                      )}
                        </div>
                      </div>
                    </div>
                }

                  {index === 2 /* Validate - Review UI */ &&
                <div className="w-full space-y-3">
                      <div className="bg-[#1a1a1a] rounded-xl border border-white/[0.06] p-3 sm:p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-6 h-6 rounded-full bg-[#063aa4]/20 flex items-center justify-center">
                            <UserCheck className="w-3 h-3 text-[#063aa4]" />
                          </div>
                          <span className="text-xs text-slate-300 font-medium">
                            Human Review
                          </span>
                        </div>
                        <div className="space-y-2">
                          {[
                      {
                        field: 'Patient Name',
                        value: 'Sarah Connor',
                        status: 'verified'
                      },
                      {
                        field: 'Diagnosis',
                        value: 'Acute Bronchitis',
                        status: 'verified'
                      },
                      {
                        field: 'Medication',
                        value: 'Amoxicillin 500mg',
                        status: 'flagged'
                      }].
                      map((item, i) =>
                      <div
                        key={i}
                        className="flex items-center justify-between py-1.5 px-2 rounded bg-white/[0.02]">

                              <div>
                                <div className="text-[10px] text-slate-500">
                                  {item.field}
                                </div>
                                <div className="text-xs text-slate-300">
                                  {item.value}
                                </div>
                              </div>
                              <div
                          className={`w-2 h-2 rounded-full ${item.status === 'verified' ? 'bg-green-400' : 'bg-amber-400'}`}>
                        </div>
                            </div>
                      )}
                        </div>
                      </div>
                    </div>
                }

                  {index === 3 /* Deliver - Output formats */ &&
                <div className="w-full space-y-3">
                      <div className="bg-[#1a1a1a] rounded-xl border border-white/[0.06] p-3 sm:p-4">
                        <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-3">
                          Output Formats
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          {['FHIR R4', 'SatuSehat', 'BPJS', 'CSV/JSON'].map(
                        (format, i) =>
                        <div
                          key={i}
                          className="bg-white/[0.04] border border-white/[0.06] rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 text-center">

                                <span className="text-[10px] sm:text-xs text-slate-300 font-medium">
                                  {format}
                                </span>
                              </div>

                      )}
                        </div>
                        <div className="mt-3 flex items-center gap-2 text-[10px] text-green-400">
                          <Send className="w-3 h-3" />
                          <span>Auto-delivered to connected systems</span>
                        </div>
                      </div>
                    </div>
                }
                </div>
              </div>

              {/* Description Below Card — uniform spacing */}
              <div className="pt-4 sm:pt-5 px-1 h-auto sm:h-20">
                <h3 className="text-base font-bold text-white mb-1.5">
                  {step.description.split('.')[0]}.
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {step.description.split('.').slice(1).join('.').trim() || ''}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}