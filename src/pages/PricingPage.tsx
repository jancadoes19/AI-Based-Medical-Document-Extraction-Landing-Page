import React, { useState } from 'react';
import {
  Check,
  ArrowRight,
  Zap,
  TrendingUp,
  Globe,
  CalendarDays,
  ChevronDown } from
'lucide-react';
import { motion } from 'framer-motion';
import { CalendarModal } from '../components/CalendarModal';
import { TrustBadges } from '../components/TrustBadges';
import { CertificationBanner } from '../components/CertificationBanner';
import { useNavigate } from 'react-router-dom';
export function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>(
    'monthly'
  );
  const [showCalendar, setShowCalendar] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const navigate = useNavigate();
  const faqs = [
  {
    q: 'Is our data secure, and who can access it?',
    a: 'Your data belongs to you. All files are encrypted in transit (SSL/HTTPS) and at rest. No Immenzo employee can view, access, or share your content. Once processing is complete and files are downloaded, they are permanently deleted. We never mine, sell, or train on your data.'
  },
  {
    q: 'Does Immenzo comply with GDPR or our data protection policy?',
    a: "Yes. Our infrastructure is built to meet GDPR standards and most corporate data protection policies. Processing happens on secured, encrypted servers with minimum-necessary data retention. For specific compliance requirements, reach out and we'll provide documentation."
  },
  {
    q: 'Can we deploy Immenzo across our entire organization?',
    a: 'Absolutely. Business and Enterprise plans include centralized billing, user management, and volume capacity that scales with your team. Contact us for a guided setup.'
  },
  {
    q: 'What happens if we exceed our plan limits?',
    a: "The system flags it before anything is processed, so there are no surprise invoices. If you're hitting limits regularly, we'll help you find the right tier."
  },
  {
    q: 'Is there a contract, or are we locked in?',
    a: 'No long-term contracts required. Subscribe monthly and cancel anytime. Annual plans with volume pricing are available on request.'
  },
  {
    q: "What's your uptime, and what happens if something goes wrong?",
    a: 'Our servers are monitored continuously. If something affects your workflow, email us and we respond within 2 business days, usually faster.'
  },
  {
    q: 'Can Immenzo integrate with tools we already use?',
    a: 'Yes. Immenzo integrates with Google Drive and Dropbox so your team can pull files in and push results out without restructuring existing workflows.'
  },
  {
    q: 'What are the technical requirements?',
    a: 'Nothing to install. Immenzo runs entirely in the browser: Chrome, Firefox, Safari, and Edge. A modern browser and internet connection is all you need.'
  },
  {
    q: "We're a large team with high volumes. Can Immenzo handle that?",
    a: "Yes. Enterprise plans include priority processing and dedicated capacity. If you have specific volume benchmarks, let's talk and we'll tell you plainly whether we're the right fit."
  },
  {
    q: 'How do we get support at a critical moment?',
    a: 'Email our support team and real people handle every request, no chatbots. Response within 24 to 48 hours. Enterprise customers get prioritized response.'
  }];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#063aa4] selection:text-white">
      {/* Hero */}
      <section className="pt-36 pb-16 border-b border-white/[0.06] px-4">
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
          }}
          className="max-w-5xl mx-auto">

          <h1 className="page-hero-title mb-4">
            Pay for documents.{' '}
            <span className="text-slate-400 font-normal">Not for seats.</span>
          </h1>
          <p className="page-hero-subtitle mb-10">
            Start free: 100 documents, no card required.
          </p>

          {/* Billing Toggle */}
          <div className="flex mb-0">
            <div className="inline-flex bg-white/[0.03] border border-white/10 rounded-full p-1">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${billingCycle === 'monthly' ? 'bg-white/10 text-white' : 'text-slate-400 hover:text-white'}`}>

                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${billingCycle === 'annual' ? 'bg-white/10 text-white' : 'text-slate-400 hover:text-white'}`}>

                Annual <span className="text-green-400 text-xs">15% off</span>
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        <div className="grid md:grid-cols-3 gap-5">
          {/* Basic */}
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
              once: true
            }}
            transition={{
              duration: 0.5,
              delay: 0.1
            }}
            className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8 flex flex-col">

            <h3 className="text-xl font-bold text-white mb-1">Basic</h3>
            <p className="text-slate-500 text-sm mb-6">
              For clinics and small institutions.
            </p>
            <div className="mb-2">
              <span className="text-3xl font-bold text-white">Rp 1.5M</span>
              <span className="text-slate-500 text-sm line-through ml-2">
                Rp 2M
              </span>
            </div>
            <div className="text-slate-500 text-xs mb-1">
              1,000 documents · Rp 1,500 per doc
            </div>
            <div className="text-slate-600 text-xs mb-8">
              billed {billingCycle}
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {[
              'AI extraction',
              'JSON/CSV export',
              'Standard support',
              '99.5% uptime'].
              map((f, i) =>
              <li
                key={i}
                className="flex items-center text-sm text-slate-400">

                  <Check className="h-4 w-4 text-slate-600 mr-3 flex-shrink-0" />
                  {f}
                </li>
              )}
            </ul>
            <button
              onClick={() => navigate('/checkout?plan=basic')}
              className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors text-sm">

              Buy now
            </button>
          </motion.div>

          {/* Professional */}
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
              once: true
            }}
            transition={{
              duration: 0.5,
              delay: 0.2
            }}
            className="bg-[#141414] border border-[#063aa4]/30 rounded-2xl p-8 flex flex-col relative shadow-2xl shadow-black/50">

            <div className="absolute top-4 right-4 px-2 py-1 rounded border border-green-500/30 bg-green-500/10 text-green-400 text-[10px] font-bold uppercase tracking-wider">
              Most Popular
            </div>
            <h3 className="text-xl font-bold text-white mb-1">Professional</h3>
            <p className="text-slate-500 text-sm mb-6">
              For hospitals and labs at volume.
            </p>
            <div className="mb-2">
              <span className="text-3xl font-bold text-white">Rp 5M</span>
              <span className="text-slate-500 text-sm line-through ml-2">
                Rp 6M
              </span>
            </div>
            <div className="text-slate-500 text-xs mb-1">
              10,000 documents · Rp 500 per doc
            </div>
            <div className="text-slate-600 text-xs mb-8">
              billed {billingCycle}
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {[
              'Everything in Basic',
              'FHIR/HL7',
              'Priority support',
              'Analytics',
              'API access'].
              map((f, i) =>
              <li
                key={i}
                className="flex items-center text-sm text-slate-300">

                  <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                  {f}
                </li>
              )}
            </ul>
            <button
              onClick={() => navigate('/checkout?plan=professional')}
              className="w-full py-3 rounded-xl bg-[#063aa4] text-white font-bold hover:bg-[#052e83] transition-colors shadow-lg shadow-[#063aa4]/20 text-sm">

              Buy now
            </button>
          </motion.div>

          {/* Enterprise */}
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
              once: true
            }}
            transition={{
              duration: 0.5,
              delay: 0.3
            }}
            className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8 flex flex-col">

            <h3 className="text-xl font-bold text-white mb-1">Enterprise</h3>
            <p className="text-slate-500 text-sm mb-6">
              For large networks with dedicated needs.
            </p>
            <div className="mb-2">
              <span className="text-3xl font-bold text-white">Custom</span>
            </div>
            <div className="text-slate-500 text-xs mb-1">
              Unlimited documents · Best per-doc rate
            </div>
            <div className="text-slate-600 text-xs mb-8">
              contact for pricing
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {[
              'Everything in Professional',
              'On-premise',
              'Dedicated infrastructure',
              'Custom SLAs'].
              map((f, i) =>
              <li
                key={i}
                className="flex items-center text-sm text-slate-400">

                  <Check className="h-4 w-4 text-slate-600 mr-3 flex-shrink-0" />
                  {f}
                </li>
              )}
            </ul>
            <button
              onClick={() => navigate('/checkout?plan=enterprise')}
              className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors text-sm">

              Buy now
            </button>
          </motion.div>
        </div>

        {/* Custom volume */}
        <motion.div
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
          className="mt-5 bg-[#111111] border border-white/[0.08] rounded-2xl p-7 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-slate-400 text-sm">Need a volume between tiers?</p>
          <button className="px-5 py-2.5 rounded-full border border-white/20 text-white text-sm font-medium hover:bg-white/5 transition-colors whitespace-nowrap">
            → Get a custom plan
          </button>
        </motion.div>

        {/* Trust Badges — below pricing cards */}
        <div className="mt-16 border-t border-white/[0.06] pt-16">
          <TrustBadges variant="dark" />
          <div className="mt-10">
            <CertificationBanner variant="dark" />
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20 border-t border-white/[0.06] pt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 tracking-tight">
            Frequently asked questions
          </h2>
          <div className="space-y-0">
            {faqs.map((faq, i) =>
            <div key={i} className="border-b border-white/[0.06]">
                <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left group">

                  <span className="text-white font-medium text-sm pr-8">
                    {faq.q}
                  </span>
                  <ChevronDown
                  className={`w-4 h-4 text-slate-500 flex-shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`} />

                </button>
                {openFaq === i &&
              <motion.div
                initial={{
                  opacity: 0,
                  height: 0
                }}
                animate={{
                  opacity: 1,
                  height: 'auto'
                }}
                exit={{
                  opacity: 0,
                  height: 0
                }}
                transition={{
                  duration: 0.2
                }}
                className="pb-5">

                    <p className="text-slate-400 text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
              }
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Questions */}
      <section className="py-20 text-center border-t border-white/[0.06]">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Questions?
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <a
            href="mailto:support@immenzo.com"
            className="px-7 py-3 bg-white text-black font-bold rounded-full hover:bg-slate-100 transition-colors text-sm border border-slate-200">

            Support
          </a>
          <button
            onClick={() => setShowCalendar(true)}
            className="px-7 py-3 bg-[#063aa4] text-white font-bold rounded-full hover:bg-[#052e83] transition-colors text-sm">

            Enterprise call
          </button>
        </div>
      </section>

      <CalendarModal
        isOpen={showCalendar}
        onClose={() => setShowCalendar(false)} />

    </div>);

}