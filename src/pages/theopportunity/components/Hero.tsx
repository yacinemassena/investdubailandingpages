import { ArrowRight, ChevronDown } from 'lucide-react';
import { homepageContent } from '../config';

const { hero } = homepageContent;

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <span className="section-label">{hero.eyebrow}</span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark mb-6 tracking-tight leading-tight">
            {hero.headline}<br />
            {hero.headlineSecondLine}
          </h1>

          <p className="text-base md:text-lg text-brand-muted leading-relaxed mb-8 max-w-2xl mx-auto">
            {hero.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a href="#" className="bg-brand-accent text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 text-base hover:opacity-90 transition-opacity">
              {hero.primaryCta}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#opportunity" className="border border-brand-border bg-brand-surface text-brand-dark px-8 py-4 rounded-full font-medium flex items-center gap-2 text-base hover:bg-brand-bg transition-colors">
              {hero.secondaryCta}
              <ChevronDown className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Proof Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {hero.stats.map((stat, i) => (
            <div key={i} className="text-center p-6 bg-brand-surface rounded-2xl border border-brand-border">
              <div className="text-2xl md:text-3xl font-bold text-brand-dark mb-1">{stat.value}</div>
              <div className="text-sm text-brand-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
