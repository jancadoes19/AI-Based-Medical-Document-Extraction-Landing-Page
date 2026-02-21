import React from 'react';
import { motion } from 'framer-motion';
import { Database, Server, Globe } from 'lucide-react';
export function BlogPreview() {
  return (
    <section className="py-14 sm:py-20 md:py-24 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-heading leading-heading">
            Works with your existing systems.
          </h2>
          <p className="text-lg sm:text-xl text-slate-400 font-light">
            No rip-and-replace.
          </p>
        </div>

        {/* Integration Badges */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 sm:mb-16 md:mb-20">
          {['EMR/HIS', 'SIS/LMS', 'BPJS', 'SatuSehat', 'Custom APIs'].map(
            (item, index) =>
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
                delay: index * 0.1
              }}
              className="px-4 py-2 sm:px-6 sm:py-3 rounded-full border border-white/10 bg-white/5 text-slate-300 font-medium text-sm sm:text-base md:text-lg">

                {item}
              </motion.div>

          )}
        </div>

        {/* Deployment Options */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {[
          {
            title: 'On-Premise',
            desc: 'Your servers, your control',
            icon: Server
          },
          {
            title: 'Private Cloud',
            desc: 'Isolated environment',
            icon: Database
          },
          {
            title: 'Hybrid',
            desc: 'Flexible architecture',
            icon: Globe
          }].
          map((option, index) =>
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
              delay: 0.3 + index * 0.1
            }}
            className="bg-[#141414] border border-white/10 rounded-2xl p-6 sm:p-8 text-center">

              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#063aa4]/20 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <option.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#063aa4]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                {option.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-400">
                {option.desc}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}