import { ArrowRight, Phone, Sparkles } from 'lucide-react';
import { homepageConfig } from '../config';

const lang = 'en';
const finalCta = homepageConfig.finalCta[lang];

export const FinalCTA = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="/images/0A6A5754.jpg" 
          alt="Dubai luxury villa" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black/80" />
      
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-8">
          <Sparkles className="w-4 h-4 text-white" />
          <span className="text-white text-sm font-medium">Start from AED 4,000</span>
        </div>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white">
          {finalCta.title}
        </h2>
        <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto">
          {finalCta.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a 
            href="#" 
            className="bg-white text-brand-accent px-8 py-4 rounded-full font-semibold flex items-center gap-2 text-base hover:bg-gray-100 transition-colors shadow-xl"
          >
            {finalCta.primaryCta}
            <ArrowRight className="w-5 h-5" />
          </a>
          <a 
            href="#" 
            className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 text-base hover:bg-white/20 transition-colors"
          >
            <Phone className="w-4 h-4" />
            {finalCta.secondaryCta}
          </a>
        </div>

        <p className="text-sm text-white/60">
          {finalCta.reassurance}
        </p>
      </div>
    </section>
  );
};
