import { ArrowRight, TrendingUp, Clock, Users, Wallet, Search, Hammer, BadgeDollarSign, Phone } from 'lucide-react';
import { homepageConfig } from '../config';

const lang = 'en';
const solution = homepageConfig.solution[lang];

const whyHigherIcons = [TrendingUp, Clock, Users];
const stepIcons = [Wallet, Search, Hammer, BadgeDollarSign];

export const Solution = () => {
  return (
    <section id="how-it-works" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-brand-accent/10 text-brand-accent text-body rounded-full mb-6">
            {solution.label}
          </span>
          <h2 className="text-h2 text-brand-dark mb-6">
            {solution.title}
          </h2>
          <p className="text-body-lg text-brand-muted max-w-3xl mx-auto">
            {solution.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 mb-20">
          {solution.steps.map((step, i) => {
            const Icon = stepIcons[i] || Wallet;
            return (
              <div key={i} className="relative bg-white border-l border-brand-border first:border-l-0 p-8 hover:shadow-xl transition-all group cursor-default">
                <div className="w-10 h-10 bg-brand-surface rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-accent/10 transition-colors">
                  <Icon className="w-5 h-5 text-brand-dark" />
                </div>
                <h3 className="text-h4 text-brand-dark mb-3">{step.title}</h3>
                <p className="text-body-sm text-brand-muted">{step.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mb-12">
          <h3 className="text-h3 mb-8 text-center text-brand-dark">
            {solution.whyHigherTitle || 'Why the return profile is different'}
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {solution.whyHigher.map((item, i) => {
              const Icon = whyHigherIcons[i] || TrendingUp;
              return (
                <div key={i} className="bg-[#1a1a1a] rounded-2xl p-8 flex flex-col min-h-[220px]">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-auto">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="mt-8">
                    <h4 className="text-h4 text-white mb-3">{item.title}</h4>
                    <p className="text-body-sm text-gray-400">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="https://investdubai.my.smartcrowd.ae/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-accent text-white px-6 md:px-8 py-3.5 md:py-4 rounded-full font-medium hover:opacity-90 transition-opacity shadow-xl">
            Create an Account
            <ArrowRight className="w-5 h-5" />
          </a>
          <a href="https://calendly.com/acheffi/invest-dubai" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-brand-border bg-white text-brand-dark px-6 md:px-8 py-3.5 md:py-4 rounded-full font-medium hover:bg-brand-bg transition-colors">
            <Phone className="w-4 h-4" />
            Book a Call
          </a>
        </div>
      </div>
    </section>
  );
};
