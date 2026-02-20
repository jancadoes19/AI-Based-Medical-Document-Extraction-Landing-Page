import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Lock,
  Globe,
  Server,
  CreditCard,
  FileCheck } from
'lucide-react';
const badges = [
{
  icon: ShieldCheck,
  label: 'ISO 27001',
  sub: 'Information Security'
},
{
  icon: Server,
  label: 'ISO 27018',
  sub: 'Cloud Privacy'
},
{
  icon: FileCheck,
  label: 'SOC 2 Type II',
  sub: 'Audited Controls'
},
{
  icon: Globe,
  label: 'GDPR',
  sub: 'Data Protection'
},
{
  icon: Lock,
  label: 'SSL Encryption',
  sub: 'Secure in Transit'
},
{
  icon: CreditCard,
  label: 'PCI-DSS',
  sub: 'Payment Security'
}];

interface TrustBadgesProps {
  variant?: 'light' | 'dark';
}
export function TrustBadges({ variant = 'light' }: TrustBadgesProps) {
  const isDark = variant === 'dark';
  return (
    <section className={`py-20 ${isDark ? 'bg-[#0a0a0a]' : 'bg-white'}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
          className="text-center mb-12">

          <h2
            className={`text-2xl md:text-3xl font-bold mb-3 tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>

            Your data is in good hands
          </h2>
          <p
            className={`text-sm leading-relaxed max-w-2xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>

            The platforms powering Immenzo are certified to the highest global
            standards — so your documents are protected by independently
            verified, enterprise-grade infrastructure, not just a promise.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {badges.map((badge, i) =>
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              y: 16
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: i * 0.07,
              duration: 0.5
            }}
            className={`flex flex-col items-center justify-center gap-2.5 rounded-2xl p-5 aspect-square ${isDark ? 'bg-white/[0.04] border border-white/[0.07]' : 'bg-slate-50 border border-slate-100'}`}>

              <badge.icon
              className={`w-6 h-6 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}
              strokeWidth={1.5} />

              <div className="text-center">
                <div
                className={`text-xs font-bold leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>

                  {badge.label}
                </div>
                <div
                className={`text-[10px] mt-0.5 leading-tight ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>

                  {badge.sub}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}