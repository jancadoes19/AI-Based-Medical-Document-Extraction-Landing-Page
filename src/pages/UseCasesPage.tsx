import React from 'react';
import { motion } from 'framer-motion';
const healthcareCases = [
{
  title: 'BPJS Claims',
  body: 'Claim bundles arrive as dense stacks of documents someone still has to type before anything moves. Immenzo reads each one and returns exactly the fields your billing team needs. Less typing. Fewer rejections.'
},
{
  title: 'Surat Rujukan',
  body: 'The letter is already filled out. Immenzo captures patient ID, diagnosis, referring doctor, and origin faskes from the scan. Your workflow takes it from there.'
},
{
  title: 'Lab Results',
  body: "PDFs from lab machines shouldn't need a second person to retype them. Immenzo extracts every value: test name, result, unit, and reference range, structured for your EMR or RME."
},
{
  title: 'Prescriptions',
  body: 'Immenzo reads the scan. Your pharmacy system receives data, not an image.'
}];

const educationCases = [
{
  title: 'Student Admissions',
  body: 'Intake season buries admissions teams in documents. Immenzo processes each application and returns one clean record per applicant. Your team reviews candidates, not paperwork.'
},
{
  title: 'Transcripts & Ijazah',
  body: 'Dozens of institutions. Dozens of formats. Immenzo returns consistent, structured output regardless of layout, whether a UI or a vocational school in Sulawesi.'
},
{
  title: 'Scholarship & Financial Aid',
  body: 'KK, income certificates, bank statements. Immenzo extracts what your committee needs so reviewers focus on decisions, not extraction.'
},
{
  title: 'BAN-PT Accreditation',
  body: 'Faculty CVs, research logs, and student outcome records scattered across departments. Immenzo pulls structured data from each so your team compiles and submits, not hunts and transcribes.'
},
{
  title: 'Heregistrasi',
  body: "Same documents every semester. Staff shouldn't be retyping them. Extract on intake. Verify instead of retype."
}];

function CaseCard({
  title,
  body,
  index




}: {title: string;body: string;index: number;}) {
  return (
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
        once: true,
        margin: '-40px'
      }}
      transition={{
        delay: index * 0.08,
        duration: 0.6,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      className="bg-[#111111] rounded-2xl border border-white/[0.07] p-8 hover:border-[#063aa4]/40 transition-all duration-300">

      <h3 className="text-base font-bold text-white mb-3">{title}</h3>
      <p className="text-slate-400 leading-relaxed text-sm">{body}</p>
    </motion.div>);

}
export function UseCasesPage() {
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

            Documents in.{' '}
            <span className="text-slate-400 font-normal">Clean data out.</span>
          </motion.h1>
          <motion.p
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.1
            }}
            className="page-hero-subtitle">

            Scans, photos, PDFs, handwritten forms: whatever arrives, Immenzo
            reads it and returns structured, system-ready data. We are not your
            RME, your billing system, or your compliance layer.{' '}
            <span className="text-slate-300 font-semibold">
              We are the step before all of that.
            </span>
          </motion.p>
          <motion.p
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.2
            }}
            className="text-sm text-slate-500 mt-3 max-w-2xl">

            We are not your RME, your billing system, or your compliance layer.{' '}
            <span className="text-slate-300">
              We are the step before all of that.
            </span>
          </motion.p>
        </div>
      </div>

      <section className="page-section">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Healthcare */}
          <div className="mb-20">
            <h2 className="text-lg font-bold text-white border-l-4 border-[#063aa4] pl-4 mb-8">
              Healthcare
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {healthcareCases.map((c, i) =>
              <CaseCard key={i} title={c.title} body={c.body} index={i} />
              )}
            </div>
          </div>

          {/* Education */}
          <div className="mb-20">
            <h2 className="text-lg font-bold text-white border-l-4 border-[#063aa4] pl-4 mb-8">
              Education
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {educationCases.map((c, i) =>
              <CaseCard key={i} title={c.title} body={c.body} index={i} />
              )}
            </div>
          </div>

          {/* Closing */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20
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
            className="text-center py-16 border-t border-white/[0.06]">

            <p className="text-2xl font-bold text-white">
              Documents in. Clean data out.{' '}
              <span className="text-[#063aa4]">#transformnow</span>
            </p>
          </motion.div>
        </div>
      </section>
    </div>);

}