import { ArrowRight, TrendingUp, Clock, Users } from 'lucide-react';
import { homepageConfig } from '../config';

const lang = 'en';
const solution = homepageConfig.solution[lang];

const whyHigherIcons = [TrendingUp, Clock, Users];

export const Solution = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-brand-accent/10 text-brand-accent text-sm font-semibold rounded-full mb-6">
            {solution.label}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-6 tracking-tight">
            {solution.title}
          </h2>
          <p className="text-lg text-brand-muted max-w-3xl mx-auto leading-relaxed">
            {solution.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {solution.steps.map((step, i) => (
            <div 
              key={i} 
              className="relative bg-brand-surface rounded-2xl p-8 hover:shadow-lg transition-all group"
            >
              <div className="absolute -top-4 left-8 w-10 h-10 bg-brand-accent text-white rounded-xl flex items-center justify-center font-bold text-sm shadow-lg">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3 mt-4">{step.title}</h3>
              <p className="text-brand-muted leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-brand-dark to-brand-dark/90 rounded-3xl p-8 md:p-12 mb-12 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center">Why the Returns Are Higher</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {solution.whyHigher.map((item, i) => {
              const Icon = whyHigherIcons[i] || TrendingUp;
              return (
                <div key={i} className="text-center">
                  <div className="w-14 h-14 bg-brand-accent rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3">{item.title}</h4>
                  <p className="text-white/70 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center">
          <a 
            href="#" 
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
