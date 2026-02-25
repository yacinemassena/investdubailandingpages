import { ArrowRight, Check } from 'lucide-react';
import { homepageConfig } from '../config';

const lang = 'en';
const hero = homepageConfig.hero[lang];

export const Hero = () => {
  return (
    <section className="relative flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/0A6A5754.jpg" 
          alt="Dubai luxury villa" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/85 to-brand-dark/70" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 pt-32 pb-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
            {hero.headline}
          </h1>

          <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-4">
            {hero.subheadline}
          </p>

          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse" />
            <p className="text-sm font-medium text-white">
              {hero.proofLine}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
            <a 
              href="#" 
              className="bg-brand-accent text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 text-sm hover:bg-brand-accent/90 transition-colors shadow-xl"
            >
              {hero.primaryCta}
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#track-record" 
              className="text-white/70 hover:text-white font-medium text-base transition-colors flex items-center gap-2 px-4 py-4"
            >
              {hero.secondaryCta}
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {hero.trustBadges.map((badge, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-white/60">
                <Check className="w-4 h-4 text-brand-accent" />
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
