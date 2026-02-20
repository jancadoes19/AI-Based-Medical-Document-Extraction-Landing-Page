import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Lock } from 'lucide-react';
// ─────────────────────────────────────────────────────────────────────────────
// DODO PAYMENTS INTEGRATION — for Claude Code in VS Code
//
// 1. Install: npm install @dodopayments/checkout (or use their hosted checkout URL)
// 2. Set env vars: VITE_DODO_PUBLIC_KEY, VITE_DODO_BASIC_PRODUCT_ID,
//    VITE_DODO_PROFESSIONAL_PRODUCT_ID, VITE_DODO_ENTERPRISE_PRODUCT_ID
// 3. On successful payment, DodoPayments will redirect to:
//    /register?plan=<plan>&payment_ref=<dodo_payment_id>
// 4. Verify payment server-side using the dodo_payment_id before granting access.
// 5. Replace the handleCheckout function below with the actual DodoPayments
//    checkout session creation (see their docs at docs.dodopayments.com).
// ─────────────────────────────────────────────────────────────────────────────
const planConfigs = {
  basic: {
    name: 'Basic',
    price: 'Rp 1.5M / mo',
    docs: '1,000 documents',
    perDoc: 'Rp 1,500 per doc',
    features: [
    'AI extraction',
    'JSON/CSV export',
    'Standard support',
    '99.5% uptime'],

    productIdKey: 'VITE_DODO_BASIC_PRODUCT_ID',
    productIdFallback: 'dodo_basic_placeholder'
  },
  professional: {
    name: 'Professional',
    price: 'Rp 5M / mo',
    docs: '10,000 documents',
    perDoc: 'Rp 500 per doc',
    features: [
    'Everything in Basic',
    'FHIR/HL7',
    'Priority support',
    'Analytics',
    'API access'],

    productIdKey: 'VITE_DODO_PROFESSIONAL_PRODUCT_ID',
    productIdFallback: 'dodo_pro_placeholder'
  },
  enterprise: {
    name: 'Enterprise',
    price: 'Custom',
    docs: 'Unlimited documents',
    perDoc: 'Best per-doc rate',
    features: [
    'Everything in Professional',
    'On-premise',
    'Dedicated infrastructure',
    'Custom SLAs'],

    productIdKey: 'VITE_DODO_ENTERPRISE_PRODUCT_ID',
    productIdFallback: 'dodo_enterprise_placeholder'
  }
};
function getProductId(key: string, fallback: string): string {
  try {
    // import.meta.env may not exist in all environments
    const env =
    typeof import.meta !== 'undefined' && import.meta.env ?
    import.meta.env :
    {};
    return (env as Record<string, string>)[key] ?? fallback;
  } catch {
    return fallback;
  }
}
export function CheckoutPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const planKey = (searchParams.get('plan') ??
  'basic') as keyof typeof planConfigs;
  const config = planConfigs[planKey] ?? planConfigs.basic;
  // Resolve productId at runtime, safely
  const productId = getProductId(config.productIdKey, config.productIdFallback);
  const plan = {
    ...config,
    productId
  };
  const [loading, setLoading] = useState(false);
  // ── REPLACE THIS FUNCTION with actual DodoPayments checkout session ──────
  // See: https://docs.dodopayments.com/integration/checkout
  // The success_url should be: window.location.origin + '/register?plan=' + planKey + '&payment_ref={CHECKOUT_SESSION_ID}'
  const handleCheckout = async () => {
    setLoading(true);
    try {
      // TODO (Claude Code): Create a DodoPayments checkout session here.
      // Example:
      //   const session = await fetch('/api/create-checkout', {
      //     method: 'POST',
      //     body: JSON.stringify({ productId: plan.productId, plan: planKey }),
      //   }).then(r => r.json())
      //   window.location.href = session.checkoutUrl
      //
      // For now, simulate success and redirect to register:
      setTimeout(() => {
        navigate(`/register?plan=${planKey}&payment_ref=demo_ref`);
      }, 1200);
    } catch (err) {
      console.error('Checkout error:', err);
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#063aa4] selection:text-white">
      <div className="max-w-lg mx-auto px-4 sm:px-6 pt-36 pb-24">
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
          <div className="mb-10 pb-8 border-b border-white/[0.06]">
            <p className="text-slate-500 text-sm mb-2 uppercase tracking-widest font-medium">
              Checkout
            </p>
            <h1 className="text-3xl font-bold text-white tracking-tight">
              {plan.name} Plan
            </h1>
          </div>

          {/* Plan summary */}
          <div className="bg-[#111111] border border-white/[0.07] rounded-2xl p-6 mb-6">
            <div className="flex items-baseline justify-between mb-4">
              <span className="text-2xl font-bold text-white">
                {plan.price}
              </span>
              <span className="text-slate-500 text-sm">{plan.perDoc}</span>
            </div>
            <p className="text-slate-400 text-sm mb-5">{plan.docs}</p>
            <ul className="space-y-2">
              {plan.features.map((f, i) =>
              <li
                key={i}
                className="flex items-center gap-2 text-sm text-slate-300">

                  <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                  {f}
                </li>
              )}
            </ul>
          </div>

          {/* Security note */}
          <div className="flex items-center gap-2 text-slate-500 text-xs mb-8">
            <Lock className="w-3 h-3" />
            <span>
              Secure checkout powered by DodoPayments. Your payment info is
              never stored.
            </span>
          </div>

          {/* CTA */}
          <button
            onClick={handleCheckout}
            disabled={loading}
            className="w-full py-4 rounded-xl bg-[#063aa4] text-white font-bold hover:bg-[#052e83] transition-colors shadow-lg shadow-[#063aa4]/20 flex items-center justify-center gap-2 disabled:opacity-60">

            {loading ?
            <span className="animate-pulse">Processing…</span> :

            <>
                Proceed to payment
                <ArrowRight className="w-4 h-4" />
              </>
            }
          </button>

          <button
            onClick={() => navigate('/pricing')}
            className="w-full mt-4 py-3 text-slate-500 hover:text-white text-sm transition-colors">

            ← Back to pricing
          </button>
        </motion.div>
      </div>
    </div>);

}