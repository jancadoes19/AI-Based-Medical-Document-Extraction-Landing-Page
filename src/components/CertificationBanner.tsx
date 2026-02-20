import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
const certs = [
'ISO 27001',
'ISO 27017',
'ISO 27018',
'ISO 27701',
'SOC 2 Type II',
'PCI-DSS'];

interface CertificationBannerProps {
  variant?: 'dark' | 'light';
}
export function CertificationBanner({
  variant = 'dark'
}: CertificationBannerProps) {
  const isDark = variant === 'dark';
  return (
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
        once: true,
        margin: '-40px'
      }}
      transition={{
        duration: 0.6
      }}
      className={`rounded-2xl border p-8 md:p-10 ${isDark ? 'bg-[#0d1a3a] border-[#063aa4]/25' : 'bg-slate-50 border-slate-200'}`}>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Icon + certs */}
        <div className="flex-shrink-0">
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 ${isDark ? 'bg-[#063aa4]/20' : 'bg-[#063aa4]/10'}`}>

            <ShieldCheck
              className={`w-5 h-5 ${isDark ? 'text-[#3377c7]' : 'text-[#063aa4]'}`} />

          </div>
          <div className="flex flex-wrap gap-2 max-w-xs">
            {certs.map((cert) =>
            <span
              key={cert}
              className={`px-2.5 py-1 rounded-full text-[11px] font-semibold border ${isDark ? 'bg-[#063aa4]/10 border-[#063aa4]/20 text-[#3377c7]' : 'bg-[#063aa4]/5 border-[#063aa4]/15 text-[#063aa4]'}`}>

                {cert}
              </span>
            )}
            <span
              className={`px-2.5 py-1 rounded-full text-[11px] font-semibold border ${isDark ? 'bg-white/[0.04] border-white/10 text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-500'}`}>

              AI Layer: SOC 2 Type II
            </span>
          </div>
        </div>

        {/* Text */}
        <div>
          <h3
            className={`text-base font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>

            Built on certified infrastructure
          </h3>
          <p
            className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>

            Immenzo is powered by infrastructure that carries internationally
            recognized certifications, so your images are never processed on
            unverified servers. Our cloud infrastructure holds ISO 27001, ISO
            27017, ISO 27018, ISO 27701, SOC 2 Type II, and PCI-DSS
            certifications. Our AI layer is SOC 2 Type II certified. Combined,
            this means your files are handled within a framework that satisfies
            most corporate data protection and compliance requirements — without
            you needing to do anything extra.
          </p>
        </div>
      </div>
    </motion.div>);

}