import React from 'react';
import { motion } from 'framer-motion';
const outcomes = [
{
  icon:
  <svg
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full">

        <circle
      cx="40"
      cy="40"
      r="38"
      stroke="white"
      strokeWidth="1.5"
      strokeDasharray="4 2"
      opacity="0.3" />

        <circle cx="40" cy="40" r="28" fill="white" fillOpacity="0.06" />
        <path
      d="M20 55 Q30 25 50 30 Q65 34 60 50"
      stroke="white"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round" />

        <circle cx="60" cy="50" r="4" fill="white" fillOpacity="0.8" />
        <circle cx="20" cy="55" r="3" fill="white" fillOpacity="0.4" />
        <path
      d="M55 20 L65 20 L65 30"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.6" />

        <circle cx="32" cy="62" r="2" fill="white" fillOpacity="0.3" />
        <circle cx="48" cy="18" r="2" fill="white" fillOpacity="0.3" />
      </svg>,

  caption: 'Faster path to decision, action, and revenue'
},
{
  icon:
  <svg
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full">

        <circle
      cx="40"
      cy="40"
      r="38"
      stroke="white"
      strokeWidth="1.5"
      opacity="0.2" />

        <circle cx="40" cy="40" r="28" fill="white" fillOpacity="0.06" />
        <circle
      cx="40"
      cy="36"
      r="10"
      fill="white"
      fillOpacity="0.15"
      stroke="white"
      strokeWidth="1.5" />

        <path
      d="M24 58 Q40 48 56 58"
      stroke="white"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round" />

        <circle cx="40" cy="34" r="5" fill="white" fillOpacity="0.7" />
        {/* 10/10 badge */}
        <rect
      x="50"
      y="18"
      width="22"
      height="14"
      rx="7"
      fill="white"
      fillOpacity="0.15"
      stroke="white"
      strokeWidth="1"
      opacity="0.8" />

        <text
      x="61"
      y="28"
      textAnchor="middle"
      fill="white"
      fontSize="7"
      fontWeight="bold"
      opacity="0.9">

          10/10
        </text>
        {/* sparkles */}
        <circle cx="28" cy="22" r="1.5" fill="white" opacity="0.5" />
        <circle cx="55" cy="55" r="1.5" fill="white" opacity="0.4" />
        <circle cx="22" cy="45" r="1" fill="white" opacity="0.3" />
      </svg>,

  caption: 'Positive customer and stakeholder experiences'
},
{
  icon:
  <svg
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full">

        <circle
      cx="40"
      cy="40"
      r="38"
      stroke="white"
      strokeWidth="1.5"
      opacity="0.2" />

        <circle cx="40" cy="40" r="28" fill="white" fillOpacity="0.06" />
        {/* Clock face */}
        <circle
      cx="40"
      cy="40"
      r="14"
      stroke="white"
      strokeWidth="1.5"
      fillOpacity="0" />

        <path
      d="M40 30 L40 40 L47 44"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round" />

        {/* Gear teeth */}
        <path d="M40 18 L42 22 L38 22 Z" fill="white" opacity="0.5" />
        <path d="M40 62 L42 58 L38 58 Z" fill="white" opacity="0.5" />
        <path d="M18 40 L22 42 L22 38 Z" fill="white" opacity="0.5" />
        <path d="M62 40 L58 42 L58 38 Z" fill="white" opacity="0.5" />
        {/* Lightning bolt */}
        <path
      d="M52 22 L48 32 L52 32 L48 42"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.8" />

      </svg>,

  caption: 'Demonstrable ROI and improved business outcomes'
}];

export function BenefitsSection() {
  return (
    <section id="outcomes" className="bg-[#0a0a0a] text-white">
      {/* Heading row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <motion.h2
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
          className="text-3xl md:text-4xl font-bold text-white leading-tight max-w-3xl">

          Transform manual, siloed processes into automation at scale.
        </motion.h2>
      </div>

      {/* 3-column cards — full width, bordered */}
      <div className="border-t border-white/[0.08] grid grid-cols-1 md:grid-cols-3">
        {outcomes.map((item, i) =>
        <motion.div
          key={i}
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
            delay: i * 0.12,
            duration: 0.6
          }}
          className={`px-10 py-14 flex flex-col items-start gap-8 ${i < 2 ? 'border-b md:border-b-0 md:border-r border-white/[0.08]' : ''}`}>

            {/* Circular icon */}
            <div className="w-20 h-20 flex-shrink-0">{item.icon}</div>
            <p className="text-slate-400 text-sm leading-relaxed">
              {item.caption}
            </p>
          </motion.div>
        )}
      </div>
    </section>);

}