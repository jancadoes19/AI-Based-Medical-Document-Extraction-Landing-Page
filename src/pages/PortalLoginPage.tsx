import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, EyeOff, ArrowRight } from 'lucide-react';
import { usePortalAuth } from '../hooks/usePortalAuth';
const LOGO = "/Image_20-02-26_at_14.22.png";

export function PortalLoginPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { login } = usePortalAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [authError, setAuthError] = useState('');
  const [loading, setLoading] = useState(false);
  const redirectTo = searchParams.get('redirect') ?? '/immenzo-ai';
  const validateEmail = (val: string) => {
    if (!val) return 'Email is required.';
    if (!val.includes('@')) return 'Enter a valid email address.';
    return '';
  };
  const validatePassword = (val: string) => {
    if (!val) return 'Password is required.';
    return '';
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const eErr = validateEmail(email);
    const pErr = validatePassword(password);
    setEmailError(eErr);
    setPasswordError(pErr);
    if (eErr || pErr) return;
    setLoading(true);
    setAuthError('');
    await new Promise((r) => setTimeout(r, 700));
    const success = login(email, password);
    if (success) {
      navigate(redirectTo);
    } else {
      setAuthError('Invalid credentials. Please check your email and password.');
      setLoading(false);
    }
  };
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: '#050a1a'
      }}>

      {/* Top bar */}
      <div className="flex-shrink-0 px-8 py-5 flex items-center border-b border-white/[0.06]">
        <img
          src={LOGO}
          alt="Immenzo"
          className="h-7 w-auto brightness-0 invert" />

      </div>

      {/* Main — full remaining height, centered */}
      <div className="flex-1 flex items-center justify-center px-4 py-16 relative overflow-hidden">
        {/* Background glow layers */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              background:
              'radial-gradient(ellipse 70% 50% at 50% 40%, rgba(6,58,164,0.4) 0%, transparent 70%)'
            }} />

          <div
            className="absolute inset-0"
            style={{
              background:
              'radial-gradient(ellipse 40% 35% at 25% 65%, rgba(6,58,164,0.18) 0%, transparent 60%)'
            }} />

          <div
            className="absolute inset-0"
            style={{
              background:
              'radial-gradient(ellipse 30% 30% at 75% 35%, rgba(51,119,199,0.12) 0%, transparent 60%)'
            }} />

          {/* Noise texture */}
          <div
            className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
              backgroundSize: '180px 180px'
            }} />

        </div>

        {/* Login card */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.5
          }}
          className="relative z-10 w-full max-w-sm bg-white rounded-2xl shadow-2xl shadow-black/40 p-8">

          <h1 className="text-xl font-bold text-slate-900 mb-1">
            Immenzo Client Portal
          </h1>
          <p className="text-slate-500 text-sm mb-7">
            Sign in to access exclusive product content.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-slate-700 text-xs font-bold mb-1.5 uppercase tracking-wider">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError('');
                  setAuthError('');
                }}
                placeholder="nama@company.com"
                autoComplete="email"
                className={`w-full border rounded-xl py-3 px-4 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#063aa4]/20 focus:border-[#063aa4] transition-all ${emailError ? 'border-red-400' : 'border-slate-200'}`} />

              {emailError &&
              <p className="text-red-500 text-xs mt-1">{emailError}</p>
              }
            </div>

            <div>
              <label className="block text-slate-700 text-xs font-bold mb-1.5 uppercase tracking-wider">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setPasswordError('');
                    setAuthError('');
                  }}
                  placeholder="Your password"
                  autoComplete="current-password"
                  className={`w-full border rounded-xl py-3 px-4 pr-10 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#063aa4]/20 focus:border-[#063aa4] transition-all ${passwordError ? 'border-red-400' : 'border-slate-200'}`} />

                <button
                  type="button"
                  onClick={() => setShowPassword((p) => !p)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">

                  {showPassword ?
                  <EyeOff className="w-4 h-4" /> :

                  <Eye className="w-4 h-4" />
                  }
                </button>
              </div>
              {passwordError &&
              <p className="text-red-500 text-xs mt-1">{passwordError}</p>
              }
            </div>

            {authError &&
            <p className="text-red-500 text-xs bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                {authError}
              </p>
            }

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-[#063aa4] text-white font-bold rounded-xl hover:bg-[#052e83] transition-colors shadow-lg shadow-[#063aa4]/20 flex items-center justify-center gap-2 disabled:opacity-60 text-sm mt-2">

              {loading ?
              <span className="animate-pulse">Signing in…</span> :

              <>
                  {' '}
                  Sign In <ArrowRight className="w-4 h-4" />
                </>
              }
            </button>
          </form>

          <p className="text-slate-400 text-xs text-center mt-6">
            Don't have access?{' '}
            <a
              href="mailto:support@immenzo.com"
              className="text-[#063aa4] font-medium hover:underline">

              Contact us
            </a>
          </p>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="flex-shrink-0 pb-6" />
    </div>);

}