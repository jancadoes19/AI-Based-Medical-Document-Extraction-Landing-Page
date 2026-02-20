import React from 'react';
import { motion } from 'framer-motion';
interface PageHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  className?: string;
}
export function PageHeader({
  title,
  subtitle,
  badge,
  className = ''
}: PageHeaderProps) {
  return (
    <div
      className={`bg-slate-50 pt-40 pb-20 border-b border-slate-200 ${className}`}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
            ease: [0.21, 0.47, 0.32, 0.98]
          }}>

          {badge &&
          <span className="inline-block py-1.5 px-4 rounded-full bg-[#063aa4]/5 text-[#063aa4] text-xs font-bold tracking-wider uppercase mb-8 border border-[#063aa4]/10">
              {badge}
            </span>
          }
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 tracking-heading leading-heading">
            {title}
          </h1>
          {subtitle &&
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              {subtitle}
            </p>
          }
        </motion.div>
      </div>
    </div>);

}