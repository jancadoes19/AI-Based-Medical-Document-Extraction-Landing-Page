import React from 'react';
import { motion } from 'framer-motion';
interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  delay?: number;
}
export function GlassCard({
  children,
  className = '',
  hoverEffect = false,
  delay = 0
}: GlassCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{
        once: true,
        margin: '-50px'
      }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98] // Custom easing for "high class" feel
      }}
      whileHover={
      hoverEffect ?
      {
        y: -8,
        boxShadow:
        '0 20px 40px -5px rgba(6, 58, 164, 0.15), 0 8px 10px -6px rgba(6, 58, 164, 0.1)'
      } :
      undefined
      }
      className={`
        relative overflow-hidden rounded-2xl border border-white/60 bg-white/70 backdrop-blur-xl shadow-sm
        ${className}
      `}>

      <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-white/0 pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </motion.div>);

}