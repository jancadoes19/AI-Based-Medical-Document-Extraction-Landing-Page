import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
const principles = [
{
  title: 'Human-Centered and Socially Beneficial',
  body: 'Every feature we build at Immenzo exists to serve you, not the other way around. Our AI tools are designed to simplify real workflows, reduce friction, and create genuine value for the people using them, without creating unintended harm along the way.'
},
{
  title: 'Fair and Accountable',
  body: 'We hold our AI systems to the same standard we hold ourselves. That means eliminating bias in how documents are processed, being accountable for the outputs our tools produce, and continuously improving so our platform works equally well for every user, regardless of file type, industry, or scale.'
},
{
  title: 'Explainable and Transparent',
  body: "You should never feel like you're handing your files to a black box. Immenzo is transparent about how your documents are processed, how long data is retained (spoiler: it isn't), and what happens at every step. No hidden processes. No surprises."
},
{
  title: 'Secure and Safe',
  body: "Security is not an afterthought at Immenzo. It's built into the foundation. Our infrastructure is powered by Biznet Gio (certified ISO 27001, ISO 27017, ISO 27018, ISO 27701, SOC 2 Type II, and PCI-DSS) and Groq (certified SOC 2 Type II), meaning your documents are processed within one of the most rigorously certified cloud environments available."
}];

const faqs = [
{
  q: 'Does Immenzo use my documents to train its AI models?',
  a: "No. Your uploaded files are never used to train, fine-tune, or improve any AI model, whether ours or anyone else's. Your files are processed and then permanently deleted from our servers. They are not stored, analyzed for model improvement, or shared under any circumstance."
},
{
  q: 'Who can see my documents?',
  a: "Nobody. No Immenzo employee can access, view, or copy your files. All documents are encrypted in transit (SSL/HTTPS) and at rest. Once processing is complete and you've downloaded your output, your files are gone from our system entirely."
},
{
  q: 'What AI technology powers Immenzo, and is it ethical?',
  a: "Immenzo uses Groq's inference API for AI-powered processing, a provider that holds SOC 2 Type II certification and maintains a published Trust Center. Our cloud infrastructure runs on Biznet Gio, which holds seven internationally recognized certifications covering data security, cloud privacy, and quality management. We selected our technology partners specifically because their compliance posture matches ours."
},
{
  q: 'Does Immenzo comply with GDPR?',
  a: "Yes. Our data handling practices align with GDPR requirements. Biznet Gio's ISO 27701 certification (the international standard for Privacy Information Management) and ISO 27018 certification (protection of personal data in cloud environments) directly support our GDPR compliance posture. We collect only what's necessary to process your documents and retain nothing beyond that."
},
{
  q: 'Is the AI making decisions about my documents without my knowledge?',
  a: "No. Immenzo's AI performs defined, technical tasks: extraction, classification, and structuring, based on your instructions. It does not make subjective decisions about your content, flag or analyze subject matter beyond what you asked for, or produce outputs beyond your request."
},
{
  q: 'Can I use Immenzo for sensitive business documents?',
  a: "Yes. Our infrastructure is built to enterprise standards. All uploads are encrypted, processed in certified cloud environments, and permanently deleted post-processing. Most corporate data protection policies are satisfied by our infrastructure's certification stack. If your organization has specific compliance requirements, contact us and we'll provide the documentation you need."
}];

export function AIEthicsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#063aa4] selection:text-white">
      {/* Hero */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-16 border-b border-white/[0.06]">
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

          <div className="section-label mb-5">AI Ethics</div>
          <h1 className="page-hero-title mb-5">Our Commitment to Ethical AI</h1>
          <p className="page-hero-subtitle max-w-2xl">
            AI-powered document processing should be fast, powerful, and above
            all, trustworthy. We believe every organization deserves AI tools
            built responsibly: tools that respect your data, protect your
            privacy, and are designed with people, not just performance, in
            mind.
          </p>
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Core Principles */}
        <section className="mb-24">
          <div className="section-label mb-10">
            Our Ethical AI Core Principles
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {principles.map((p, i) =>
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
              className="bg-[#111111] border border-white/[0.07] rounded-2xl p-8">

                <h3 className="text-base font-bold text-white mb-3">
                  {p.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {p.body}
                </p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Human-Centered AI section */}
        <motion.section
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
          }}
          className="mb-24 pb-24 border-b border-white/[0.06]">

          <div className="section-label mb-6">
            Human-Centered AI for Document Processing
          </div>
          <div className="max-w-2xl">
            <p className="text-slate-300 text-base leading-relaxed mb-5">
              AI should make your work easier without removing your control over
              it. At Immenzo, our goal is to automate the repetitive, technical
              burden of document processing: extraction, classification, and
              structuring, so you can focus on what the data is actually for.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              We don't use AI to make decisions on your behalf. We use it to
              give you better results, faster, while keeping you in full control
              of your files and your workflow.
            </p>
            <p className="text-slate-500 text-sm leading-relaxed">
              Every document you upload is yours. Every output belongs to you.
              Our AI exists to serve that process — nothing more.
            </p>
          </div>
        </motion.section>

        {/* FAQ */}
        <section className="mb-24">
          <div className="section-label mb-10">Privacy and AI Ethics — FAQ</div>
          <div className="space-y-0">
            {faqs.map((faq, i) =>
            <div key={i} className="border-b border-white/[0.06]">
                <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left">

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
                transition={{
                  duration: 0.2
                }}
                className="pb-5 overflow-hidden">

                    <p className="text-slate-400 text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
              }
              </div>
            )}
          </div>
        </section>

        {/* Closing */}
        <motion.section
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
          }}
          className="bg-[#063aa4]/10 border border-[#063aa4]/20 rounded-2xl p-10">

          <h2 className="text-xl font-bold text-white mb-4">
            Building Trust in AI-Powered Document Tools
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed mb-4 max-w-2xl">
            Transparency isn't a page on our website. It's how we operate.
            Immenzo is committed to building AI tools that earn your trust
            through consistent, verifiable practice: certified infrastructure,
            zero data retention, no hidden model training, and complete user
            control over every file.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-2xl">
            As AI regulations evolve globally, including the EU AI Act and
            related frameworks, we are committed to monitoring and adapting our
            practices to remain fully compliant. Your documents deserve
            infrastructure that proves it.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/security"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black font-bold rounded-full text-sm hover:bg-slate-100 transition-colors">

              View Security Certifications <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="mailto:support@immenzo.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#063aa4] text-white font-bold rounded-full text-sm hover:bg-[#052e83] transition-colors">

              Contact Us <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.section>
      </div>
    </div>);

}