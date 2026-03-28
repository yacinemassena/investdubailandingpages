import { Check } from 'lucide-react';
import { homepageConfig } from '../config';

const lang = 'en';
const hero = homepageConfig.hero[lang];

export const Hero = () => {
  return (
    <section className="relative flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          preload="auto"
          poster="https://pub-46bf43f4e0fb4daab5a13e7a41223da4.r2.dev/images/0A6A5754.jpg"
          className="w-full h-full object-cover"
        >
          <source src="https://pub-46bf43f4e0fb4daab5a13e7a41223da4.r2.dev/videos/banniere-the-opportunity.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/85 to-brand-dark/70" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 relative z-10 pt-32 pb-20">
        <div className="max-w-4xl">
          <h1 className="text-display-1 text-white mb-8">
            {hero.headline}
          </h1>

          <p className="text-body-lg text-white/70 mb-4">
            {hero.subheadline}
          </p>

          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse" />
            <p className="text-body text-white">
              {hero.proofLine}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
            <a 
              href="https://investdubai.my.smartcrowd.ae/" target="_blank" rel="noopener noreferrer" 
              className="bg-brand-accent text-white px-6 md:px-8 py-3.5 md:py-4 rounded-full font-medium text-body hover:opacity-90 transition-opacity shadow-xl"
            >
              {hero.primaryCta}
            </a>
            <a 
              href="#track-record" 
              className="text-white/70 hover:text-white text-body transition-colors flex items-center gap-2 px-4 py-4"
            >
              {hero.secondaryCta}
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {hero.trustBadges.map((badge, i) => (
              <div key={i} className="flex items-center gap-2 text-body text-white/60">
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
