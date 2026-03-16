import { ArrowRight, ChevronDown } from 'lucide-react';
import { homepageContent } from '../config';

const { hero } = homepageContent;

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden min-h-[85vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://pub-46bf43f4e0fb4daab5a13e7a41223da4.r2.dev/images/0A6A6039.jpg" 
          alt="Dubai luxury villa" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/85 to-brand-dark/70" />
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-white/80 text-sm font-semibold rounded-full mb-6 border border-white/20">{hero.eyebrow}</span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            {hero.headline}<br />
            {hero.headlineSecondLine}
          </h1>

          <p className="text-base md:text-lg text-white/70 leading-relaxed mb-8 max-w-2xl mx-auto">
            {hero.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a href="https://investdubai.my.smartcrowd.ae/" target="_blank" rel="noopener noreferrer" className="bg-brand-accent text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 text-base hover:opacity-90 transition-opacity">
              {hero.primaryCta}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#opportunity" className="border border-white/20 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 text-base hover:bg-white/20 transition-colors">
              {hero.secondaryCta}
              <ChevronDown className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Proof Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {hero.stats.map((stat, i) => (
            <div key={i} className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-white/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
