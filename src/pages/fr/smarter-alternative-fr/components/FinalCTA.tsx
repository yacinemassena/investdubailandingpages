import { ArrowRight, Phone, Sparkles } from 'lucide-react';
import { homepageConfig } from '../config';

const lang = 'en';
const finalCta = homepageConfig.finalCta[lang];

export const FinalCTA = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://pub-46bf43f4e0fb4daab5a13e7a41223da4.r2.dev/images/0A6A5754.jpg" 
          alt="Dubai luxury villa" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black/80" />
      
      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-12 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-8">
          <Sparkles className="w-4 h-4 text-white" />
          <span className="text-white text-body">Start from $1,000 (~AED 4,000)</span>
        </div>
        
        <h2 className="text-h2 text-white mb-6">
          {finalCta.title}
        </h2>
        <p className="text-body-lg text-white/70 max-w-3xl mx-auto mb-10">
          {finalCta.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a 
            href="https://investdubai.my.smartcrowd.ae/" target="_blank" rel="noopener noreferrer" 
            className="bg-white text-brand-accent px-6 md:px-8 py-3.5 md:py-4 rounded-full font-medium flex items-center gap-2 text-body hover:bg-gray-100 transition-colors shadow-xl"
          >
            {finalCta.primaryCta}
            <ArrowRight className="w-5 h-5" />
          </a>
          <a 
            href="https://calendly.com/acheffi/invest-dubai" target="_blank" rel="noopener noreferrer" 
            className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-6 md:px-8 py-3.5 md:py-4 rounded-full font-medium flex items-center gap-2 text-body hover:bg-white/20 transition-colors"
          >
            <Phone className="w-4 h-4" />
            {finalCta.secondaryCta}
          </a>
        </div>

        <p className="text-body text-white/60">
          {finalCta.reassurance || finalCta.disclaimer || ""}
        </p>
      </div>
    </section>
  );
};
