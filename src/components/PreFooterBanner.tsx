import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CalendarModal } from './CalendarModal';
export function PreFooterBanner() {
  const [showCalendar, setShowCalendar] = useState(false);
  return (
    <>
      <div className="bg-[#0a0a0a] py-12 sm:py-16 px-4 sm:px-6 text-center border-t border-white/[0.04]">
        <motion.p
          initial={{
            opacity: 0,
            y: 8
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.5
          }}
          className="text-white font-bold text-2xl sm:text-3xl md:text-5xl tracking-tight leading-tight mb-8 sm:mb-10">

          Documents in. Clean data out.{' '}
          <span className="text-[#063aa4]">#transformnow</span>
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
            y: 8
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.5,
            delay: 0.15
          }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">

          <button
            onClick={() => setShowCalendar(true)}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 bg-white text-black font-bold rounded-full hover:bg-slate-100 transition-colors text-sm">

            Talk to Experts
          </button>
          <button
            onClick={() => setShowCalendar(true)}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 bg-[#063aa4] text-white font-bold rounded-full hover:bg-[#052e83] transition-colors text-sm">

            Book a Demo
          </button>
        </motion.div>
      </div>
      <CalendarModal
        isOpen={showCalendar}
        onClose={() => setShowCalendar(false)} />

    </>);

}