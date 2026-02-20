import React from 'react';
import { motion } from 'framer-motion';
import { XCircle } from 'lucide-react';
const problems = [
'Manual data entry errors',
'Backlog of unprocessed documents',
'High operational costs',
'Compliance risks with unstructured data'];

export function ProblemSection() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-heading leading-heading">
              The Hidden Cost of <br /> Manual Processing
            </h2>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-light">
              Healthcare organizations lose millions annually due to inefficient
              document workflows. It's not just about speed—it's about accuracy
              and patient safety.
            </p>
            <div className="space-y-4">
              {problems.map((problem, index) =>
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: -20
                }}
                whileInView={{
                  opacity: 1,
                  x: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  delay: index * 0.1
                }}
                className="flex items-center text-lg text-slate-700">

                  <XCircle className="h-6 w-6 text-red-500 mr-4 flex-shrink-0" />
                  {problem}
                </motion.div>
              )}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-red-50 to-orange-50 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-white p-10 rounded-3xl shadow-xl border border-slate-100">
              <div className="space-y-6">
                <div className="h-4 bg-slate-100 rounded w-3/4"></div>
                <div className="h-4 bg-slate-100 rounded w-full"></div>
                <div className="h-4 bg-slate-100 rounded w-5/6"></div>
                <div className="h-4 bg-red-100 rounded w-1/2"></div>
                <div className="h-4 bg-slate-100 rounded w-full"></div>
              </div>
              <div className="mt-8 flex items-center justify-center">
                <span className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
                  Error Detected
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}