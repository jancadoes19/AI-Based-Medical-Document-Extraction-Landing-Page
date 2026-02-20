import React from 'react';
import {
  Shield,
  Lock,
  Server,
  FileCheck,
  Users,
  Key,
  RefreshCw,
  Eye } from
'lucide-react';
import { motion } from 'framer-motion';
import { CertificationBanner } from '../components/CertificationBanner';
function Section({
  title,
  children,
  index = 0




}: {title: string;children: React.ReactNode;index?: number;}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 24
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{
        once: true,
        margin: '-40px'
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.05
      }}
      className="mb-16">

      <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-[#063aa4] pl-4">
        {title}
      </h2>
      {children}
    </motion.div>);

}
export function SecurityPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#063aa4] selection:text-white">
      {/* Hero */}
      <div className="page-hero">
        <div className="page-hero-inner">
          <motion.h1
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
            className="page-hero-title">

            Data protection built for{' '}
            <span className="text-slate-400 font-normal">
              healthcare and education in Indonesia.
            </span>
          </motion.h1>
        </div>
      </div>

      <section className="page-section">
        <div className="page-section-inner">
          {/* Commitment */}
          <motion.div
            initial={{
              opacity: 0,
              y: 24
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
            className="bg-[#063aa4]/10 border border-[#063aa4]/20 rounded-2xl p-10 mb-16 text-center">

            <Shield className="h-12 w-12 text-[#063aa4] mx-auto mb-5" />
            <h2 className="text-xl font-bold text-white mb-4">
              Our Commitment
            </h2>
            <p className="text-slate-300 text-base leading-relaxed max-w-2xl mx-auto mb-3">
              We do not use your documents to train AI models. If you leave, you
              take your data with you.
            </p>
            <p className="text-slate-500 text-sm">
              That's not a feature. It's the baseline.
            </p>
          </motion.div>

          {/* Your Data Stays Yours */}
          <Section title="Your Data Stays Yours" index={1}>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {[
              "We don't cross-train across tenants.",
              'Full export on request.',
              'Deletions processed in accordance with your contract terms.',
              'Documented data-exit path. No lock-in by design.'].
              map((item, i) =>
              <div
                key={i}
                className="bg-[#111111] border border-white/[0.07] rounded-xl p-4 text-slate-300 text-sm leading-relaxed">

                  {item}
                </div>
              )}
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
              {
                icon: Server,
                title: 'Data Residency',
                desc: 'Designed for Indonesian data residency. We store and process your data within Indonesia under standard deployment. Any exceptions require explicit agreement.'
              },
              {
                icon: Lock,
                title: 'Encryption',
                desc: 'AES-256 at rest. TLS 1.3 in transit.'
              },
              {
                icon: Users,
                title: 'Access Control',
                desc: 'Role-based permissions. Audit logs on every action.'
              }].
              map((item, i) =>
              <div
                key={i}
                className="bg-[#111111] border border-white/[0.07] rounded-xl p-5">

                  <item.icon className="w-5 h-5 text-[#063aa4] mb-3" />
                  <div className="text-white text-sm font-bold mb-1">
                    {item.title}
                  </div>
                  <div className="text-slate-500 text-xs leading-relaxed">
                    {item.desc}
                  </div>
                </div>
              )}
            </div>
          </Section>

          {/* AI Without the Leak Risk */}
          <Section title="AI Without the Leak Risk" index={2}>
            <div className="space-y-3">
              {[
              {
                icon: Key,
                text: 'Use our vetted inference providers or bring your own keys.'
              },
              {
                icon: Eye,
                text: 'Zero-retention configurations are available with select enterprise-grade LLM providers, subject to their terms.'
              },
              {
                icon: RefreshCw,
                text: "Workflows run even if AI features are off. Your operations aren't dependent on a single runtime."
              }].
              map((item, i) =>
              <div
                key={i}
                className="flex items-start gap-4 bg-[#111111] border border-white/[0.07] rounded-xl p-5">

                  <item.icon className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              )}
            </div>
          </Section>

          {/* No Surprises in Production */}
          <Section title="No Surprises in Production" index={3}>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
              'We schedule updates outside standard active hours where possible.',
              'Integrations start read-only. Writes are only enabled with scoped approvals managed by your IT team.',
              'Full audit trails at every step.',
              'Changes are communicated before they land.'].
              map((item, i) =>
              <div
                key={i}
                className="bg-[#111111] border border-white/[0.07] rounded-xl p-4 text-slate-300 text-sm leading-relaxed">

                  {item}
                </div>
              )}
            </div>
          </Section>

          {/* Enterprise Foundations */}
          <Section title="Enterprise Foundations" index={4}>
            <div className="space-y-3 mb-8">
              {[
              'SOC 2 Type II aligned practices.',
              'Annual third-party penetration testing with tracked remediation.',
              'Infrastructure controls designed for the security requirements of regulated Indonesian industries.'].
              map((item, i) =>
              <div
                key={i}
                className="flex items-start gap-3 py-3 border-b border-white/[0.05] last:border-0">

                  <FileCheck className="w-4 h-4 text-[#063aa4] mt-0.5 flex-shrink-0" />
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {item}
                  </p>
                </div>
              )}
            </div>
            <CertificationBanner variant="dark" />
          </Section>

          {/* Deploy Your Way */}
          <Section title="Deploy Your Way" index={5}>
            <div className="bg-[#031741] border border-white/[0.06] rounded-2xl p-8 mb-6">
              <ul className="space-y-4 mb-8">
                {[
                {
                  color: 'bg-green-400',
                  label: 'On-premise',
                  desc: 'your servers, your control'
                },
                {
                  color: 'bg-blue-400',
                  label: 'Private cloud',
                  desc: 'isolated environment, zero cross-tenant exposure'
                },
                {
                  color: 'bg-[#4d7fd4]',
                  label: 'Hybrid',
                  desc: 'fits around your existing stack'
                }].
                map((item, i) =>
                <li key={i} className="flex items-center text-sm">
                    <div
                    className={`w-2 h-2 rounded-full ${item.color} mr-4`} />

                    <span className="text-white font-medium mr-2">
                      {item.label}
                    </span>
                    <span className="text-slate-400">— {item.desc}</span>
                  </li>
                )}
              </ul>
              <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-slate-400">
                <span>
                  <span className="text-white font-medium">BYOK</span>: bring
                  your existing API credentials. Your keys stay yours.
                </span>
                <span className="text-slate-600 hidden sm:block">·</span>
                <span className="text-slate-500">
                  Docker & Kubernetes ready.
                </span>
              </div>
            </div>
          </Section>

          {/* Try Without Risk */}
          <Section title="Try Without Risk" index={6}>
            <div className="bg-[#111111] border border-white/[0.07] rounded-2xl p-8">
              <p className="text-slate-300 text-base leading-relaxed mb-4">
                Start with a scoped pilot. Refund terms apply if defined
                acceptance criteria are not met — criteria are agreed in writing
                before the pilot begins. We'd rather prove value in a sprint
                than ask you to commit blind.
              </p>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
                <span className="text-slate-500 text-xs mr-2 self-center">
                  Integrates with
                </span>
                {['EMR/HIS', 'SIS/LMS', 'BPJS', 'SatuSehat', 'Custom APIs'].map(
                  (item) =>
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full border border-white/10 text-slate-400 text-xs bg-white/[0.03]">

                      {item}
                    </span>

                )}
              </div>
            </div>
          </Section>
        </div>
      </section>
    </div>);

}