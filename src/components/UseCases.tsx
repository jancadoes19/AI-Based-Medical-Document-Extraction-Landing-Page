import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Stethoscope, GraduationCap, School } from 'lucide-react';
const useCases = [
{
  title: 'Hospitals',
  icon: Building2,
  description:
  'BPJS claim bundles, referral letters, lab results, prescriptions — Immenzo extracts the structured fields. Your billing system handles the rest.'
},
{
  title: 'Universities',
  icon: GraduationCap,
  description:
  'Student applications, transcripts, scholarship documents, accreditation records — extracted and structured so your SIS stops waiting on manual entry.'
},
{
  title: 'Clinics',
  icon: Stethoscope,
  description:
  'Referral letters, lab PDFs, handwritten prescriptions — structured output handed to whatever system you use next. Zero retyping.'
},
{
  title: 'Schools',
  icon: School,
  description:
  'New student registration documents — KTP, KK, ijazah — extracted every intake season so staff review decisions, not paper stacks.'
}];

export function UseCases() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#063aa4] font-bold tracking-widest uppercase text-xs mb-4 block">
            Use Cases
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-heading leading-heading">
            Healthcare & Education Run on Documents. <br />
            <span className="text-[#063aa4]">We Automate Them.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) =>
          <motion.div
            key={index}
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
              delay: index * 0.1,
              duration: 0.5
            }}
            className="bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-lg hover:border-[#063aa4]/30 transition-all duration-300">

              <div className="w-12 h-12 rounded-full bg-[#063aa4]/10 flex items-center justify-center mb-6">
                <useCase.icon className="w-6 h-6 text-[#063aa4]" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {useCase.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {useCase.description}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}