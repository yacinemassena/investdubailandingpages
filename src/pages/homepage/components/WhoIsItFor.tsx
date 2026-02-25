import { Check, X, ArrowRight, Phone } from 'lucide-react';
import { homepageConfig } from '../config';

const lang = 'en';
const whoIsItFor = homepageConfig.whoIsItFor[lang];

export const WhoIsItFor = () => {
  return (
    <section className="py-20 bg-brand-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-brand-accent/10 text-brand-accent text-sm font-semibold rounded-full mb-6">
            {whoIsItFor.label}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-6 tracking-tight">
            {whoIsItFor.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          <div className="bg-emerald-50 rounded-3xl p-8 md:p-10 border border-emerald-100">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
                <Check className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark">This is for you if...</h3>
            </div>
            <ul className="space-y-4">
              {whoIsItFor.yesIf.map((item, i) => (
                <li key={i} className="flex items-start gap-3 bg-white/60 rounded-xl p-4">
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-brand-dark">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-100 rounded-3xl p-8 md:p-10 border border-gray-200">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center">
                <X className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark">This is not for you if...</h3>
            </div>
            <ul className="space-y-4">
              {whoIsItFor.noIf.map((item, i) => (
                <li key={i} className="flex items-start gap-3 bg-white/60 rounded-xl p-4">
                  <X className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <span className="text-brand-muted">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-brand-dark font-medium mb-8 max-w-2xl mx-auto">
            {whoIsItFor.transition}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#" 
              className="bg-brand-accent text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 text-sm hover:bg-brand-accent/90 transition-colors shadow-xl"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="#" 
              className="border-2 border-brand-dark text-brand-dark px-6 py-3 rounded-full font-semibold flex items-center gap-2 text-sm hover:bg-brand-dark hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              Book a Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
