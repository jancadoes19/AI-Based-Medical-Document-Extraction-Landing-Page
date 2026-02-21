import React, { useState, Suspense } from 'react';
import { useSearchParams, useRouter } from '../lib/compat';
import { motion } from 'framer-motion';
// ─────────────────────────────────────────────────────────────────────────────
// REGISTER PAGE — Post-payment account creation
//
// Flow: PricingPage → CheckoutPage (DodoPayments) → RegisterPage → Dashboard
//
// For Claude Code in VS Code:
// 1. Verify the payment_ref against DodoPayments API before allowing registration.
//    GET https://api.dodopayments.com/payments/{payment_ref}
//    Use DODO_SECRET_KEY (server-side only) to confirm payment status === 'succeeded'.
// 2. On form submit, create the user account in your backend/auth system.
//    Attach the plan (from query param) and document credits to the user record:
//      basic → 1000 credits, professional → 10000 credits, enterprise → unlimited
// 3. After account creation, issue a session token and redirect to /dashboard.
//    The dashboard (in VS Code) should read the user's plan + credits on load.
// ─────────────────────────────────────────────────────────────────────────────
const planCredits: Record<string, number | string> = {
  basic: 1000,
  professional: 10000,
  enterprise: 'Unlimited'
};
function RegisterContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const plan = searchParams.get('plan') ?? 'basic';
  const paymentRef = searchParams.get('payment_ref') ?? '';
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    institution: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      // TODO (Claude Code): Replace this block with your actual registration API call.
      // Example:
      //   const res = await fetch('/api/register', {
      //     method: 'POST',
      //     headers: { 'Content-Type': 'application/json' },
      //     body: JSON.stringify({ ...form, plan, paymentRef }),
      //   })
      //   if (!res.ok) throw new Error(await res.text())
      //   const { token } = await res.json()
      //   localStorage.setItem('immenzo_token', token)
      //   router.push('/dashboard')
      //
      // For now, simulate success:
      await new Promise((r) => setTimeout(r, 1000));
      router.push('/dashboard');
    } catch (err: any) {
      setError(err.message ?? 'Something went wrong. Please try again.');
      setLoading(false);
    }
  };
  return (
    <div className="max-w-md mx-auto px-4 sm:px-6 pt-36 pb-24">
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
          duration: 0.6
        }}>

        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-1.5 mb-6">
            <div className="w-2 h-2 rounded-full bg-green-400" />
            <span className="text-green-400 text-xs font-medium">
              Payment confirmed
            </span>
          </div>
          <h1 className="text-3xl font-bold text-white tracking-tight mb-2">
            Create your account
          </h1>
          <p className="text-slate-400 text-sm">
            You're on the{' '}
            <span className="text-white font-semibold capitalize">{plan}</span>{' '}
            plan — {planCredits[plan]} document credits ready to use.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs text-slate-500 mb-1.5 font-medium uppercase tracking-wider">
              Full name
            </label>
            <input
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Janice Alvina"
              className="w-full bg-white/[0.05] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#063aa4]/50 text-sm transition-all" />

          </div>

          <div>
            <label className="block text-xs text-slate-500 mb-1.5 font-medium uppercase tracking-wider">
              Work email
            </label>
            <input
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="you@hospital.com"
              className="w-full bg-white/[0.05] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#063aa4]/50 text-sm transition-all" />

          </div>

          <div>
            <label className="block text-xs text-slate-500 mb-1.5 font-medium uppercase tracking-wider">
              Institution
            </label>
            <input
              name="institution"
              type="text"
              value={form.institution}
              onChange={handleChange}
              placeholder="RS Cipto Mangunkusumo"
              className="w-full bg-white/[0.05] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#063aa4]/50 text-sm transition-all" />

          </div>

          <div>
            <label className="block text-xs text-slate-500 mb-1.5 font-medium uppercase tracking-wider">
              Password
            </label>
            <input
              name="password"
              type="password"
              required
              minLength={8}
              value={form.password}
              onChange={handleChange}
              placeholder="Min. 8 characters"
              className="w-full bg-white/[0.05] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#063aa4]/50 text-sm transition-all" />

          </div>

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-xl bg-[#063aa4] text-white font-bold hover:bg-[#052e83] transition-colors shadow-lg shadow-[#063aa4]/20 mt-2 disabled:opacity-60 text-sm">

            {loading ?
            <span className="animate-pulse">Creating account…</span> :

            'Create account & go to dashboard'
            }
          </button>
        </form>

        <p className="text-slate-600 text-xs text-center mt-6">
          By creating an account you agree to our{' '}
          <a
            href="/legal"
            className="text-slate-400 hover:text-white underline">

            Terms of Service
          </a>{' '}
          and{' '}
          <a
            href="/legal"
            className="text-slate-400 hover:text-white underline">

            Privacy Policy
          </a>
          .
        </p>
      </motion.div>
    </div>);

}
export function RegisterPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#063aa4] selection:text-white">
      <Suspense fallback={<div className="pt-36 text-center">Loading...</div>}>
        <RegisterContent />
      </Suspense>
    </div>);

}