import React, { useState } from 'react';
import { Button } from './ui/Button';
import { Lock } from 'lucide-react';
export function ROICalculator() {
  const [email, setEmail] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle submission logic here
    console.log('Submitted:', email);
  };
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[2rem] shadow-2xl shadow-[#063aa4]/10 overflow-hidden border border-slate-100">
          <div className="p-6 sm:p-10 md:p-20 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 tracking-heading leading-heading">
              Calculate Your Savings
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 mb-8 sm:mb-10 max-w-2xl mx-auto font-light">
              See how much time and money you'll recover with automated document
              processing. Enter your email to get a personalized ROI report.
            </p>

            <form
              onSubmit={handleSubmit}
              className="max-w-lg mx-auto space-y-4 sm:space-y-5">

              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Enter your work email"
                  className="w-full px-6 sm:px-8 py-4 sm:py-5 rounded-full border border-slate-200 focus:ring-2 focus:ring-[#063aa4] focus:border-transparent outline-none transition-all text-slate-900 placeholder:text-slate-400 text-base sm:text-lg"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} />

              </div>
              <Button
                variant="primary"
                size="lg"
                className="w-full shadow-lg shadow-[#063aa4]/20 py-4 sm:py-5 text-base sm:text-lg">

                Get Your ROI Report
              </Button>
            </form>

            <div className="mt-6 sm:mt-8 flex items-center justify-center text-xs sm:text-sm text-slate-500">
              <Lock className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-2 text-green-500" />
              <span>Enterprise-grade security. No spam, ever.</span>
            </div>
          </div>

          {/* Decorative bottom strip */}
          <div className="h-3 bg-gradient-to-r from-[#063aa4] via-[#3377c7] to-[#6699d5]"></div>
        </div>
      </div>
    </section>);

}