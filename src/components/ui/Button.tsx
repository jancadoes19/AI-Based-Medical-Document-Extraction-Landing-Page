import React from 'react';
import { ArrowRight } from 'lucide-react';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'glass' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: boolean;
  children: React.ReactNode;
}
export function Button({
  variant = 'primary',
  size = 'md',
  icon = false,
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
  'inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95';
  const variants = {
    primary:
    'bg-[#063aa4] text-white hover:bg-[#052e83] hover:shadow-lg hover:shadow-[#063aa4]/30 focus:ring-[#063aa4] border border-transparent',
    secondary:
    'bg-white text-slate-900 hover:bg-slate-100 hover:shadow-md border border-white focus:ring-white',
    glass:
    'bg-white/10 backdrop-blur-md text-slate-900 border border-white/20 hover:bg-white/20 hover:shadow-lg hover:scale-[1.02] focus:ring-white/50',
    outline:
    'bg-transparent text-slate-600 border border-slate-300 hover:border-[#063aa4] hover:text-[#063aa4] focus:ring-slate-300'
  };
  const sizes = {
    sm: 'text-sm px-4 py-2',
    md: 'text-base px-6 py-3',
    lg: 'text-lg px-8 py-4'
  };
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}>

      {children}
      {icon &&
      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      }
    </button>);

}