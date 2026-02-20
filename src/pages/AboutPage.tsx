import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
const scenarios = [
{
  icon:
  <svg
    viewBox="0 0 80 80"
    className="w-16 h-16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5">

        <rect x="10" y="30" width="40" height="35" rx="2" />
        <path d="M10 45h40M25 45v20M35 45v20" />
        <path d="M50 38h18M50 48h18M50 58h12" />
        <circle cx="62" cy="20" r="8" />
        <path d="M58 20l3 3 5-5" />
      </svg>,

  label: 'A Loan Officer Waiting on Paperwork'
},
{
  icon:
  <svg
    viewBox="0 0 80 80"
    className="w-16 h-16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5">

        <path d="M40 15c-8 0-15 7-15 15 0 6 3 11 8 14v6h14v-6c5-3 8-8 8-14 0-8-7-15-15-15z" />
        <path d="M33 50h14M35 56h10" />
        <circle cx="55" cy="18" r="6" />
        <path d="M52 18l2 2 4-4" />
      </svg>,

  label: 'A Patient Delayed by a Missing Form'
},
{
  icon:
  <svg
    viewBox="0 0 80 80"
    className="w-16 h-16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5">

        <rect x="8" y="35" width="50" height="28" rx="2" />
        <path d="M8 48h50" />
        <rect x="18" y="20" width="30" height="15" rx="1" />
        <path d="M23 27h20M23 32h14" />
        <circle cx="62" cy="20" r="8" />
        <path d="M59 20h6M62 17v6" />
      </svg>,

  label: 'A Logistics Team Held Up at the Port'
},
{
  icon:
  <svg
    viewBox="0 0 80 80"
    className="w-16 h-16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5">

        <circle cx="40" cy="35" r="18" />
        <path d="M28 35h24M40 23v24" strokeDasharray="3 2" />
        <path d="M32 28l16 14M48 28L32 42" />
        <path d="M25 58h30M30 63h20" />
        <path d="M40 53v5" />
      </svg>,

  label: 'A Student Whose Application Sits in a Pile'
}];

const stats = [
{
  value: '87%',
  label: 'Accuracy on complex, real-world documents not just test conditions'
},
{
  value: '6 seconds',
  label: 'From upload to structured, usable data at any document volume'
},
{
  value: '650M+',
  label: 'Documents processed across global deployments and scaling'
}];

const team = [
{
  initials: 'JA',
  name: 'Janice A.',
  title: 'Founder & CEO',
  bio: 'Janice built Immenzo after watching her grandmother queue for 10 hours at a public hospital. That moment made the problem personal. Certified in IBM Data Science and AI in Healthcare from Stanford Online, she leads product strategy and client partnerships with one obsession: documentation that works the way your industry actually does.',
  specialties: [
  'Compliance-first product strategy',
  'Enterprise partnerships',
  'Regulated industry workflows']

},
{
  initials: 'RW',
  name: 'Reza W.',
  title: 'Co-Founder & CTO',
  bio: "Reza designed the engine that processes millions of documents daily without breaking a sweat. His background in backend engineering, distributed systems, and secure integrations means your data stays private, your integrations work, and your IT team sleeps at night. Privacy isn't an afterthought at Immenzo — it's the foundation everything else is built on.",
  specialties: [
  'Scalable infrastructure',
  'Regulatory-grade security',
  'High-volume document processing']

},
{
  initials: 'JW',
  name: 'Dr. J.F. William',
  title: 'Head of Domain Solutions',
  bio: "Dr. William is the reason Immenzo makes sense to the people actually using it, not just the people buying it. He ensures every template, every mapping, and every output format reflects how real workflows operate on the ground. If it doesn't hold up in the field, it doesn't ship.",
  specialties: [
  'Domain-specific documentation',
  'Structured data extraction',
  'Workflow-accurate output formats']

}];

const pillars = [
{
  title: "Accuracy that's earned, not assumed.",
  body: 'Our outputs are validated against real operational workflows, not just technical specifications.'
},
{
  title: 'Compliance by design.',
  body: "Regulatory standards aren't features we add on. They're the foundation we build from."
},
{
  title: 'Your stack, not ours.',
  body: 'We automate document processing without replacing the systems your team already depends on.'
}];

const values = [
{
  title: 'People First',
  body: "Our customers aren't accounts — they're partners solving real problems for real people. We stay curious, listen before we build, and never lose sight of the end user on the other side of every document. We build for today's needs and tomorrow's scale, because the people depending on these systems deserve both.",
  icon:
  <svg
    viewBox="0 0 120 120"
    className="w-24 h-24 opacity-60"
    fill="none"
    stroke="currentColor"
    strokeWidth="1">

        <circle cx="60" cy="45" r="20" />
        <path d="M25 95c0-19 16-35 35-35s35 16 35 35" />
        <circle cx="60" cy="45" r="30" strokeDasharray="4 3" opacity="0.4" />
        <text
      x="52"
      y="50"
      fontSize="18"
      fontWeight="bold"
      fill="currentColor"
      stroke="none">

          1
        </text>
        <path d="M80 30 A30 30 0 0 1 90 55" strokeWidth="2" />
        <path d="M88 52l2 5 5-2" strokeWidth="1.5" />
      </svg>

},
{
  title: 'Innovation That Actually Ships',
  body: 'We were founded on the belief that transformational change requires challenging the status quo, not incrementally improving it. We embrace AI not as a trend but as our core advantage, and we champion big ideas while holding ourselves accountable to delivering them. We know this work changes how organizations operate. We take that seriously.',
  icon:
  <svg
    viewBox="0 0 120 120"
    className="w-24 h-24 opacity-60"
    fill="none"
    stroke="currentColor"
    strokeWidth="1">

        <ellipse cx="60" cy="70" rx="35" ry="20" />
        <circle cx="60" cy="48" r="16" />
        <path d="M60 32v-10M60 80v10M44 40l-8-6M76 40l8-6" />
        <path d="M52 48h16M60 40v16" strokeWidth="1.5" />
        <circle cx="60" cy="48" r="5" fill="currentColor" opacity="0.3" />
      </svg>

},
{
  title: 'Autonomy With Accountability',
  body: 'We trust our people to make decisions, set boundaries, and prioritize what matters, professionally and personally. In return, we hold ourselves to a high standard of follow-through. Autonomy without accountability is just freedom. We want both. We give people the space to do their best work and trust that excellence follows.',
  icon:
  <svg
    viewBox="0 0 120 120"
    className="w-24 h-24 opacity-60"
    fill="none"
    stroke="currentColor"
    strokeWidth="1">

        <rect x="30" y="30" width="60" height="60" rx="4" />
        <rect
      x="20"
      y="20"
      width="60"
      height="60"
      rx="4"
      strokeDasharray="3 2"
      opacity="0.5" />

        <path d="M45 60h30M60 45v30" />
        <circle cx="60" cy="60" r="8" />
        <path d="M75 45l8-8M37 83l-8 8" strokeDasharray="2 2" />
      </svg>

},
{
  title: 'Lead With Integrity',
  body: "Every person here is a steward of something bigger than their role. We do the right thing when no one's watching, own our mistakes before they're pointed out, and follow through on what we commit to. Trust is built in small moments, consistently, over time. We take that seriously at every level of the company.",
  icon:
  <svg
    viewBox="0 0 120 120"
    className="w-24 h-24 opacity-60"
    fill="none"
    stroke="currentColor"
    strokeWidth="1">

        <circle cx="60" cy="60" r="35" />
        <circle cx="60" cy="60" r="25" strokeDasharray="3 2" opacity="0.5" />
        <circle cx="60" cy="60" r="12" />
        <path d="M60 25v10M60 85v10M25 60h10M85 60h10" />
        <circle cx="60" cy="60" r="4" fill="currentColor" opacity="0.5" />
      </svg>

},
{
  title: 'Win Together',
  body: "We set goals that require each other to achieve. Whether we're aligning on a decision, debugging a problem, or shipping a feature, we default to collaboration over heroics. The best outcome for our customers, our company, and our people comes from working as one team. We mean that literally, not aspirationally.",
  icon:
  <svg
    viewBox="0 0 120 120"
    className="w-24 h-24 opacity-60"
    fill="none"
    stroke="currentColor"
    strokeWidth="1">

        <circle cx="60" cy="60" r="30" />
        <circle cx="60" cy="20" r="8" />
        <circle cx="95" cy="75" r="8" />
        <circle cx="25" cy="75" r="8" />
        <path d="M60 28v22M88 72l-20-12M32 72l20-12" />
        <path
      d="M60 50l-20 12M60 50l20 12"
      strokeDasharray="2 2"
      opacity="0.6" />

        <path d="M50 62l10 6 10-6" />
      </svg>

}];

export function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#063aa4] selection:text-white">
      {/* Hero */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-20 border-b border-white/[0.06]">
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

          <div className="section-label mb-5">About Us</div>
          <h1 className="page-hero-title mb-8">
            Behind Every Document Is a{' '}
            <span className="text-slate-400 font-normal">
              Decision That Matters
            </span>
          </h1>
        </motion.div>

        {/* 4 scenario cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-white/[0.08] rounded-2xl overflow-hidden mb-16">
          {scenarios.map((s, i) =>
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              y: 16
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: i * 0.1,
              duration: 0.5
            }}
            className={`p-8 flex flex-col items-center text-center gap-5 text-slate-400 ${i < 3 ? 'border-r border-white/[0.08]' : ''}`}>

              <div className="text-slate-500">{s.icon}</div>
              <p className="text-xs text-slate-400 leading-relaxed font-medium">
                {s.label}
              </p>
            </motion.div>
          )}
        </div>

        {/* Problem / solution */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-slate-500">
            <svg
              viewBox="0 0 200 160"
              className="w-full max-w-xs opacity-50"
              fill="none"
              stroke="currentColor"
              strokeWidth="1">

              <rect x="20" y="20" width="70" height="90" rx="3" />
              <rect x="35" y="10" width="70" height="90" rx="3" />
              <rect x="50" y="0" width="70" height="90" rx="3" />
              <path d="M60 25h40M60 35h40M60 45h30M60 55h35M60 65h25" />
              <path
                d="M130 100l30 30M145 100l15 15"
                strokeWidth="2"
                opacity="0.4" />

            </svg>
          </div>
          <div className="space-y-5">
            <p className="text-slate-300 text-base leading-relaxed">
              Organizations run on documents. But for too long, they've relied
              on outdated technology and manual processes to handle them,
              driving up costs, slowing down decisions, and frustrating the
              people who depend on them.
            </p>
            <p className="text-white text-base leading-relaxed font-medium">
              Immenzo flips the script. Our AI platform reads, understands, and
              processes documents at scale, automatically, so your team gets
              back to what actually matters: serving people.
            </p>
          </div>
        </div>
      </div>

      {/* Innovation / Stats */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-white/[0.06]">
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
          transition={{
            duration: 0.6
          }}>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Innovation Is in Our DNA
          </h2>
          <p className="text-slate-400 text-base mb-14 max-w-xl">
            Delivering results is our mission, whether it's transforming a
            single department or scaling across an entire enterprise.
          </p>
          <div className="grid grid-cols-3 gap-0 border-t border-white/[0.08]">
            {stats.map((s, i) =>
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: 16
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: i * 0.1,
                duration: 0.5
              }}
              className={`pt-8 pb-4 ${i < 2 ? 'border-r border-white/[0.08] pr-8 mr-8' : ''}`}>

                <div className="text-5xl md:text-6xl font-bold text-[#063aa4] mb-2 tracking-tight">
                  {s.value}
                </div>
                <div className="text-slate-400 text-sm">{s.label}</div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Meet the Team */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-white/[0.06]">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 tracking-tight">
          Meet the Team
        </h2>
        <div className="grid md:grid-cols-3 gap-5">
          {team.map((member, i) =>
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              y: 20
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
              delay: i * 0.1,
              duration: 0.5
            }}
            className="bg-[#111111] border border-white/[0.07] rounded-2xl overflow-hidden">

              {/* Avatar area */}
              <div className="bg-[#063aa4]/20 border-b border-white/[0.06] p-8 flex items-end gap-4">
                <div className="w-16 h-16 rounded-xl bg-[#063aa4] flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  {member.initials}
                </div>
                <div>
                  <div className="text-white font-bold text-base">
                    {member.name}
                  </div>
                  <div className="text-[#063aa4] text-xs font-medium mt-0.5">
                    {member.title}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {member.bio}
                </p>
                <div className="border-t border-white/[0.06] pt-4">
                  <div className="text-slate-600 text-[10px] uppercase tracking-widest mb-2 font-bold">
                    Specialist in
                  </div>
                  <div className="flex flex-col gap-1.5">
                    {member.specialties.map((s, j) =>
                  <div
                    key={j}
                    className="flex items-center gap-2 text-slate-400 text-xs">

                        <div className="w-1 h-1 rounded-full bg-[#063aa4] flex-shrink-0" />
                        {s}
                      </div>
                  )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* What We're Built On */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-white/[0.06]">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 tracking-tight">
          What We're Built On
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {pillars.map((p, i) =>
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              y: 16
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: i * 0.1,
              duration: 0.5
            }}
            className="bg-[#111111] border border-white/[0.07] rounded-2xl p-7">

              <div className="w-8 h-0.5 bg-[#063aa4] mb-5" />
              <h3 className="text-[#063aa4] font-bold text-lg leading-tight">
                {p.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">{p.body}</p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Our Values */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 tracking-tight">
          Our Values
        </h2>
        <div className="space-y-0">
          {values.map((v, i) =>
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              y: 16
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
              delay: 0.05,
              duration: 0.6
            }}
            className="grid md:grid-cols-[200px_160px_1fr] gap-8 items-center py-10 border-b border-white/[0.06] last:border-0">

              <h3 className="text-[#063aa4] font-bold text-lg leading-tight">
                {v.title}
              </h3>
              <div className="hidden md:flex items-center justify-center border border-white/[0.07] rounded-xl aspect-square bg-[#111111] text-slate-500 p-4">
                {v.icon}
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">{v.body}</p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Closing tagline */}
      <div className="border-t border-white/[0.06] py-16 text-center">
        <p className="text-slate-500 text-sm italic">
          Immenzo — turning document chaos into decisions that move.
        </p>
        <div className="flex items-center justify-center gap-4 mt-8">
          <Link
            to="/pricing"
            className="px-6 py-2.5 bg-white text-black font-bold rounded-full text-sm hover:bg-slate-100 transition-colors border border-slate-200">

            Get started
          </Link>
          <Link
            to="/manifesto"
            className="px-6 py-2.5 bg-[#063aa4] text-white font-bold rounded-full text-sm hover:bg-[#052e83] transition-colors">

            Read our Manifesto
          </Link>
        </div>
      </div>
    </div>);

}