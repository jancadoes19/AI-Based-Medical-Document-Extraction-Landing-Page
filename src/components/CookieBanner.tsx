import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, X, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
interface CookieBannerProps {
  isOpen: boolean;
  onClose: () => void;
  onAcceptAll: () => void;
  onEssentialOnly: () => void;
}
const categories = [
{
  icon: '🔒',
  label: 'Essential'
},
{
  icon: '📊',
  label: 'Analytics'
},
{
  icon: '📣',
  label: 'Marketing'
},
{
  icon: '📄',
  label: 'Docs'
}];

export function CookieBanner({
  isOpen,
  onClose,
  onAcceptAll,
  onEssentialOnly
}: CookieBannerProps) {
  const [showCustomize, setShowCustomize] = useState(false);
  const [prefs, setPrefs] = useState({
    analytics: true,
    marketing: false,
    docs: true
  });
  const handleAcceptAll = () => {
    onAcceptAll();
    onClose();
  };
  const handleEssentialOnly = () => {
    onEssentialOnly();
    onClose();
  };
  const handleSaveCustom = () => {
    onAcceptAll();
    onClose();
  };
  return (
    <AnimatePresence>
      {isOpen &&
      <>
          {/* Backdrop */}
          <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          exit={{
            opacity: 0
          }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90]"
          onClick={onClose} />


          {/* Panel */}
          <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
            y: 16
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            scale: 0.95,
            y: 16
          }}
          transition={{
            duration: 0.25,
            ease: [0.21, 0.47, 0.32, 0.98]
          }}
          className="fixed z-[100] bottom-6 left-1/2 -translate-x-1/2 w-full max-w-sm mx-auto px-4">

            <div className="bg-[#0f1623] border border-white/[0.1] rounded-2xl shadow-2xl shadow-black/60 overflow-hidden">
              {/* Header */}
              <div className="bg-[#063aa4] px-5 py-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">
                    Your Privacy Matters
                  </div>
                  <div className="text-blue-200 text-xs">
                    Cookie &amp; Data Consent
                  </div>
                </div>
                <button
                onClick={onClose}
                className="ml-auto text-white/60 hover:text-white transition-colors">

                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="px-5 py-5">
                {!showCustomize ?
              <>
                    <p className="text-slate-300 text-sm leading-relaxed mb-4">
                      We use cookies to enhance your experience and comply with
                      Indonesian Data Protection Law (UU PDP). Your explicit
                      consent is required.
                    </p>

                    {/* Category badges */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {categories.map((cat) =>
                  <div
                    key={cat.label}
                    className="flex items-center gap-2 bg-white/[0.05] border border-white/[0.08] rounded-lg px-3 py-2">

                          <span className="text-sm">{cat.icon}</span>
                          <span className="text-slate-300 text-xs font-medium">
                            {cat.label}
                          </span>
                        </div>
                  )}
                    </div>

                    {/* Policy links */}
                    <div className="flex gap-4 mb-5">
                      <Link
                    to="/legal"
                    onClick={onClose}
                    className="text-[#063aa4] text-xs hover:underline flex items-center gap-1">

                        🔗 Cookie Policy
                      </Link>
                      <Link
                    to="/legal"
                    onClick={onClose}
                    className="text-[#063aa4] text-xs hover:underline flex items-center gap-1">

                        🔗 Privacy Policy
                      </Link>
                    </div>

                    {/* Buttons */}
                    <button
                  onClick={handleAcceptAll}
                  className="w-full py-2.5 bg-[#063aa4] text-white font-bold rounded-xl text-sm hover:bg-[#052e83] transition-colors mb-2">

                      Accept All
                    </button>
                    <button
                  onClick={handleEssentialOnly}
                  className="w-full py-2.5 bg-white/[0.06] border border-white/[0.1] text-white font-medium rounded-xl text-sm hover:bg-white/[0.1] transition-colors mb-3">

                      Essential Only
                    </button>
                    <button
                  onClick={() => setShowCustomize(true)}
                  className="w-full flex items-center justify-center gap-1.5 text-slate-400 text-xs hover:text-white transition-colors">

                      <Settings className="w-3 h-3" /> Customize Settings
                    </button>
                  </> :

              <>
                    <p className="text-slate-400 text-xs mb-4">
                      Choose which cookies you allow. Essential cookies are
                      always active.
                    </p>
                    <div className="space-y-3 mb-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-white text-sm font-medium">
                            Essential
                          </div>
                          <div className="text-slate-500 text-xs">
                            Required for core functionality
                          </div>
                        </div>
                        <div className="w-8 h-4 bg-[#063aa4] rounded-full flex items-center justify-end pr-0.5 opacity-60 cursor-not-allowed">
                          <div className="w-3 h-3 bg-white rounded-full" />
                        </div>
                      </div>
                      {[
                  {
                    key: 'analytics' as const,
                    label: 'Analytics',
                    desc: 'Usage trends and performance data'
                  },
                  {
                    key: 'marketing' as const,
                    label: 'Marketing',
                    desc: 'Personalized content and ads'
                  },
                  {
                    key: 'docs' as const,
                    label: 'Docs',
                    desc: 'Documentation preferences'
                  }].
                  map((item) =>
                  <div
                    key={item.key}
                    className="flex items-center justify-between">

                          <div>
                            <div className="text-white text-sm font-medium">
                              {item.label}
                            </div>
                            <div className="text-slate-500 text-xs">
                              {item.desc}
                            </div>
                          </div>
                          <button
                      onClick={() =>
                      setPrefs((p) => ({
                        ...p,
                        [item.key]: !p[item.key]
                      }))
                      }
                      className={`w-8 h-4 rounded-full flex items-center transition-colors ${prefs[item.key] ? 'bg-[#063aa4] justify-end pr-0.5' : 'bg-white/10 justify-start pl-0.5'}`}>

                            <div className="w-3 h-3 bg-white rounded-full" />
                          </button>
                        </div>
                  )}
                    </div>
                    <button
                  onClick={handleSaveCustom}
                  className="w-full py-2.5 bg-[#063aa4] text-white font-bold rounded-xl text-sm hover:bg-[#052e83] transition-colors mb-2">

                      Save Preferences
                    </button>
                    <button
                  onClick={() => setShowCustomize(false)}
                  className="w-full text-slate-500 text-xs hover:text-white transition-colors">

                      Back
                    </button>
                  </>
              }

                {/* UU PDP badge */}
                <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-center gap-1.5">
                  <Shield className="w-3 h-3 text-slate-500" />
                  <span className="text-slate-500 text-[10px]">
                    UU PDP Compliant
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      }
    </AnimatePresence>);

}