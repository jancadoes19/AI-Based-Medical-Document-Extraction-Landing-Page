import React from 'react';
import { motion } from 'framer-motion';
import { Database, Server, Globe, FileCode } from 'lucide-react';
export function BlogPreview() {
  return (
    <section className="py-24 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-heading leading-heading">
            Works with your existing systems.
          </h2>
          <p className="text-xl text-slate-400 font-light">
            No rip-and-replace.
          </p>
        </div>

        {/* Integration Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
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
              className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-slate-300 font-medium text-lg">

                {item}
              </motion.div>

          )}
        </div>

        {/* Deployment Options */}
        <div className="grid md:grid-cols-3 gap-8">
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
            className="bg-[#141414] border border-white/10 rounded-2xl p-8 text-center">

              <div className="w-12 h-12 rounded-full bg-[#063aa4]/20 flex items-center justify-center mx-auto mb-6">
                <option.icon className="w-6 h-6 text-[#063aa4]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {option.title}
              </h3>
              <p className="text-slate-400">{option.desc}</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}