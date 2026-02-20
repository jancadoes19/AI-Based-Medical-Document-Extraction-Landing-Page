import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Instagram, Mail } from 'lucide-react';
const roles = [
{
  title: 'L1 Support Engineer',
  department: 'Engineering',
  location: 'Jakarta',
  description:
  'First to respond when something breaks. You triage, communicate clearly, and know your way around logs. No panic under pressure.'
},
{
  title: 'Backend Maintenance Engineer',
  department: 'Engineering',
  location: 'Jakarta',
  description:
  "You keep things running. Pipelines, deployments, reliability. You care as much about what doesn't break as what gets built."
},
{
  title: 'Customer Sales Lead',
  department: 'Sales',
  location: 'Jakarta',
  description:
  'You find the right rooms, run honest demos, and close. You know how to sell something technical to someone non-technical.'
},
{
  title: 'Account Manager',
  department: 'Sales',
  location: 'Jakarta',
  description:
  "You make customers glad they signed. Onboarding, check-ins, growth. You're the person they actually look forward to hearing from."
}];

const cultureImages = [
{
  src: "/Image_23-12-25_at_16.33.png",
  alt: 'Immenzo team at work',
  position: 'object-center'
},
{
  src: "/openart-800e718abde2429c9331294e82172043_00001__raw.jpg",
  alt: 'Immenzo in action',
  position: 'object-top'
},
{
  src: "/image.png",
  alt: 'Immenzo team',
  position: 'object-top'
}];

export function CareersPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#063aa4] selection:text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        {/* Hero */}
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
          className="mb-20 pb-16 border-b border-white/[0.06]">

          <h1 className="page-hero-title mb-5">Join us.</h1>
          <p className="page-hero-subtitle">
            We're small, fast, and building something that matters. We take
            ownership, move without friction, and show up for each other.
          </p>
        </motion.div>

        {/* Open Roles */}
        <section className="mb-24">
          <div className="section-label">Open Roles</div>
          <div className="space-y-0">
            {roles.map((role, index) =>
            <motion.div
              key={index}
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
                margin: '-50px'
              }}
              transition={{
                delay: index * 0.1,
                duration: 0.5
              }}
              className="py-8 border-b border-white/[0.06]">

                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-3">
                  <div>
                    <div className="flex flex-wrap items-baseline gap-2 mb-2">
                      <h3 className="text-base font-bold text-white">
                        {role.title}
                      </h3>
                      <span className="text-slate-500 text-sm">·</span>
                      <span className="text-slate-500 text-sm">
                        {role.department}
                      </span>
                      <span className="text-slate-500 text-sm">·</span>
                      <span className="text-slate-500 text-sm">
                        {role.location}
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">
                      {role.description}
                    </p>
                  </div>
                  <a
                  href={`mailto:careers@immenzo.com?subject=Position: ${role.title}`}
                  className="flex-shrink-0 inline-flex items-center px-5 py-2 rounded-full border border-white/20 text-white text-sm font-medium hover:bg-white/5 hover:border-white/40 transition-colors">

                    Apply now
                  </a>
                </div>
              </motion.div>
            )}
          </div>
        </section>

        {/* Company Culture */}
        <motion.section
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
            duration: 0.6
          }}
          className="mb-16">

          <div className="section-label">Company Culture</div>
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mb-10">
            We move fast and keep things simple. We hold ourselves to a high
            standard, always pushing to be the best at what we do — and we do it
            together.
          </p>

          {/* Culture image panels */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {cultureImages.map((img, i) =>
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
                once: true
              }}
              transition={{
                delay: i * 0.1,
                duration: 0.6
              }}
              className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#111111]">

                <img
                src={img.src}
                alt={img.alt}
                className={`w-full h-full object-cover ${img.position}`} />

              </motion.div>
            )}
          </div>
        </motion.section>

        {/* Social Links */}
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
          className="border-t border-white/[0.06] pt-12">

          <div className="text-slate-500 text-sm mb-4 font-medium">
            Connect on:
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-slate-400 hover:text-white transition-colors">

              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-slate-400 hover:text-white transition-colors">

              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="mailto:careers@immenzo.com"
              aria-label="Email"
              className="text-slate-400 hover:text-white transition-colors">

              <Mail className="w-5 h-5" />
            </a>
          </div>
        </motion.section>
      </div>
    </div>);

}