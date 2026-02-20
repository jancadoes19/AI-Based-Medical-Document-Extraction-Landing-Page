import React from 'react';
import { Stethoscope, FileSearch, Database, ShieldCheck } from 'lucide-react';
const features = [
{
  title: 'Healthcare-Native AI',
  description:
  'Built by medical informaticists who understand clinical workflows.',
  icon: Stethoscope
},
{
  title: 'Any Document Format',
  description:
  'Scans, photos, handwriting, faxes—structured data from any source.',
  icon: FileSearch
},
{
  title: 'Automatic FHIR Output',
  description:
  'Direct conversion to FHIR R4 for EMR, HIS, and regulatory compliance.',
  icon: Database
},
{
  title: 'Enterprise Security',
  description:
  'SOC 2 compliant. End-to-end encryption. Your data never leaves your control.',
  icon: ShieldCheck
}];

export function EnterpriseFeatures() {
  return (
    <section id="enterprise" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Enterprise Grade Assurance
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Built for scale, security, and compliance in the most demanding
            healthcare environments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) =>
          <div
            key={index}
            className="group p-6 rounded-2xl bg-white border border-slate-100 hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-900/5 transition-all duration-300">

              <div className="w-12 h-12 rounded-xl bg-slate-50 group-hover:bg-indigo-600 transition-colors duration-300 flex items-center justify-center mb-6">
                <feature.icon className="h-6 w-6 text-slate-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>);

}