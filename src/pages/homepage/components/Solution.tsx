import { ArrowRight, TrendingUp, Clock, Users, Wallet, Search, Hammer, BadgeDollarSign } from 'lucide-react';
import { homepageConfig } from '../config';

const lang = 'en';
const solution = homepageConfig.solution[lang];

const whyHigherIcons = [TrendingUp, Clock, Users];
const stepIcons = [Wallet, Search, Hammer, BadgeDollarSign];

export const Solution = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-brand-accent/10 text-brand-accent text-sm font-semibold rounded-full mb-6">
            {solution.label}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-6 tracking-wide">
            {solution.title}
          </h2>
          <p className="text-lg text-brand-muted max-w-2xl mx-auto leading-relaxed tracking-wide">
            Buy undervalued properties, transform them, sell at a premium.<br />
            It's active wealth creation with a defined exit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 mb-20">
          {solution.steps.map((step, i) => {
            const Icon = stepIcons[i] || Wallet;
            return (
              <div 
                key={i} 
                className="relative bg-white border-l border-brand-border first:border-l-0 p-8 hover:shadow-xl transition-all group cursor-default"
              >
                <div className="w-10 h-10 bg-brand-surface rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-accent/10 transition-colors">
                  <Icon className="w-5 h-5 text-brand-dark" />
                </div>
                <h3 className="text-lg font-bold text-brand-dark mb-3">{step.title}</h3>
                <p className="text-sm text-brand-muted leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-brand-dark tracking-wide">Why the Returns Are Higher</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {solution.whyHigher.map((item, i) => {
              const Icon = whyHigherIcons[i] || TrendingUp;
              return (
                <div key={i} className="bg-[#1a1a1a] rounded-2xl p-8 flex flex-col min-h-[220px]">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-auto">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="mt-8">
                    <h4 className="text-xl font-bold text-white leading-tight mb-3">{item.title}</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center">
          <a 
            href="https://investdubai.my.smartcrowd.ae/" target="_blank" rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 bg-brand-accent text-white px-8 py-4 rounded-full font-semibold hover:bg-brand-accent/90 transition-colors shadow-xl"
          >
            {solution.cta}
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
