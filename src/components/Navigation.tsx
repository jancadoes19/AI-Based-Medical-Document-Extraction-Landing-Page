import React, { useEffect, useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { RegisterModal, SignInModal } from './AuthModals';
import { CalendarModal } from './CalendarModal';
export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);
  const openRegister = () => {
    setShowRegister(true);
    setShowSignIn(false);
  };
  const openSignIn = () => {
    setShowSignIn(true);
    setShowRegister(false);
  };
  const handleMouseEnter = (name: string) => setOpenDropdown(name);
  const handleMouseLeave = () => setOpenDropdown(null);
  return (
    <>
      {/* ── Floating Desktop Nav ── */}
      <div className="hidden md:flex fixed top-5 left-0 right-0 z-50 justify-center px-4 pointer-events-none">
        <nav
          className={`pointer-events-auto flex items-center justify-between gap-6 px-6 py-2.5 rounded-full border transition-all duration-300 ${isScrolled ? 'bg-[#0d0d0d]/95 border-white/[0.12] shadow-2xl shadow-black/50 backdrop-blur-xl' : 'bg-white/90 border-slate-200/80 shadow-md shadow-black/[0.06] backdrop-blur-md'}`}
          style={{
            minWidth: 700,
            maxWidth: 920
          }}>

          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img
              src="/Image_20-02-26_at_14.22.png"
              alt="Immenzo"
              className={`h-11 w-auto transition-all duration-300 ${isScrolled ? 'brightness-0 invert' : ''}`} />

          </Link>

          {/* Links */}
          <div className="flex items-center gap-0.5">
            {/* Company */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('Company')}
              onMouseLeave={handleMouseLeave}>

              <button
                className={`px-3.5 py-2 text-sm font-medium rounded-full transition-colors flex items-center gap-1 ${isScrolled ? 'text-slate-300 hover:text-white hover:bg-white/[0.08]' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}`}>

                Company <ChevronDown className="w-3 h-3" />
              </button>
              {openDropdown === 'Company' &&
              <div
                className={`absolute top-full left-0 mt-2 w-44 rounded-xl shadow-2xl border p-1.5 overflow-hidden ${isScrolled ? 'bg-[#141414] border-white/[0.08]' : 'bg-white border-slate-100 shadow-xl'}`}>

                  {[
                {
                  to: '/manifesto',
                  label: 'Manifesto'
                },
                {
                  to: '/ai-ethics',
                  label: 'AI Ethics'
                },
                {
                  to: '/blog',
                  label: 'Blog'
                },
                {
                  to: '/careers',
                  label: 'Careers'
                }].
                map((item) =>
                <Link
                  key={item.to}
                  to={item.to}
                  className={`block px-3.5 py-2.5 rounded-lg text-sm transition-colors ${isScrolled ? 'text-slate-400 hover:bg-white/[0.06] hover:text-white' : 'text-slate-600 hover:bg-slate-50 hover:text-[#063aa4]'}`}>

                      {item.label}
                    </Link>
                )}
                </div>
              }
            </div>

            {/* Resources */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('Resources')}
              onMouseLeave={handleMouseLeave}>

              <button
                className={`px-3.5 py-2 text-sm font-medium rounded-full transition-colors flex items-center gap-1 ${isScrolled ? 'text-slate-300 hover:text-white hover:bg-white/[0.08]' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}`}>

                Resources <ChevronDown className="w-3 h-3" />
              </button>
              {openDropdown === 'Resources' &&
              <div
                className={`absolute top-full left-0 mt-2 w-44 rounded-xl shadow-2xl border p-1.5 overflow-hidden ${isScrolled ? 'bg-[#141414] border-white/[0.08]' : 'bg-white border-slate-100 shadow-xl'}`}>

                  {[
                {
                  to: '/use-cases',
                  label: 'Use Cases'
                },
                {
                  to: '/integrations',
                  label: 'Integrations'
                },
                {
                  to: '/pricing',
                  label: 'Pricing'
                },
                {
                  to: '/security',
                  label: 'Security'
                }].
                map((item) =>
                <Link
                  key={item.to}
                  to={item.to}
                  className={`block px-3.5 py-2.5 rounded-lg text-sm transition-colors ${isScrolled ? 'text-slate-400 hover:bg-white/[0.06] hover:text-white' : 'text-slate-600 hover:bg-slate-50 hover:text-[#063aa4]'}`}>

                      {item.label}
                    </Link>
                )}
                </div>
              }
            </div>

            <a
              href="mailto:support@immenzo.com"
              className={`px-3.5 py-2 text-sm font-medium rounded-full transition-colors ${isScrolled ? 'text-slate-300 hover:text-white hover:bg-white/[0.08]' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}`}>

              Contact
            </a>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={() => setShowCalendar(true)}
              className={`px-4 py-1.5 text-sm font-medium border transition-colors rounded-full ${isScrolled ? 'text-white border-white/30 hover:border-white/60 hover:bg-white/[0.06]' : 'text-slate-700 border-slate-300 hover:border-slate-400 hover:text-slate-900'}`}>

              Talk to Experts
            </button>
            <button
              onClick={openSignIn}
              className={`px-4 py-1.5 text-sm font-medium border transition-colors rounded-full ${isScrolled ? 'text-white border-white/30 hover:border-white/60 hover:bg-white/[0.06]' : 'text-slate-700 border-slate-300 hover:border-slate-400 hover:text-slate-900'}`}>

              Login
            </button>
            <Link
              to="/pricing"
              className="px-4 py-1.5 text-sm font-semibold text-white bg-[#063aa4] hover:bg-[#052e83] transition-colors rounded-full shadow-sm">

              Get started
            </Link>
          </div>
        </nav>
      </div>

      {/* ── Mobile Nav ── */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img
            src="/Image_20-02-26_at_14.22.png"
            alt="Immenzo"
            className="h-11 w-auto" />

        </Link>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-slate-600 hover:text-slate-900 focus:outline-none">

          {isMobileMenuOpen ?
          <X className="h-5 w-5" /> :

          <Menu className="h-5 w-5" />
          }
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen &&
      <div className="md:hidden fixed inset-0 z-40 bg-white pt-20 px-6 pb-6 overflow-y-auto">
          <div className="flex flex-col space-y-3">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-4 mb-1">
              Company
            </div>
            {[
          {
            to: '/manifesto',
            label: 'Manifesto'
          },
          {
            to: '/ai-ethics',
            label: 'AI Ethics'
          },
          {
            to: '/blog',
            label: 'Blog'
          },
          {
            to: '/careers',
            label: 'Careers'
          }].
          map((item) =>
          <Link
            key={item.to}
            to={item.to}
            className="text-base font-medium text-slate-700 pl-2 py-1">

                {item.label}
              </Link>
          )}
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-4 mb-1">
              Resources
            </div>
            {[
          {
            to: '/use-cases',
            label: 'Use Cases'
          },
          {
            to: '/integrations',
            label: 'Integrations'
          },
          {
            to: '/pricing',
            label: 'Pricing'
          },
          {
            to: '/security',
            label: 'Security'
          }].
          map((item) =>
          <Link
            key={item.to}
            to={item.to}
            className="text-base font-medium text-slate-700 pl-2 py-1">

                {item.label}
              </Link>
          )}
            <a
            href="mailto:support@immenzo.com"
            className="text-base font-medium text-slate-700 mt-2 border-t border-slate-100 pt-4 pl-2">

              Contact Support
            </a>
            <div className="pt-4 flex flex-col gap-3">
              <button
              onClick={() => {
                setShowCalendar(true);
                setIsMobileMenuOpen(false);
              }}
              className="w-full py-3 text-center font-semibold text-slate-700 border border-slate-300 rounded-full">

                Talk to Experts
              </button>
              <button
              onClick={() => {
                openSignIn();
                setIsMobileMenuOpen(false);
              }}
              className="w-full py-3 text-center font-semibold text-slate-700 border border-slate-300 rounded-full">

                Login
              </button>
              <Link
              to="/pricing"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-3 text-center font-semibold text-white bg-[#063aa4] rounded-full">

                Get started
              </Link>
            </div>
          </div>
        </div>
      }

      {/* Modals */}
      <RegisterModal
        isOpen={showRegister}
        onClose={() => setShowRegister(false)}
        onSwitch={openSignIn} />

      <SignInModal
        isOpen={showSignIn}
        onClose={() => setShowSignIn(false)}
        onSwitch={openRegister} />

      <CalendarModal
        isOpen={showCalendar}
        onClose={() => setShowCalendar(false)} />

    </>);

}