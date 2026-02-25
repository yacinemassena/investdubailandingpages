import { ArrowRight, Phone } from 'lucide-react';
import { homepageContent } from '../config';

const { finalCta } = homepageContent;

export const FinalCTA = () => {
  return (
    <section className="py-24 bg-brand-dark">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-brand-accent mb-4 block">
          {finalCta.label}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
          {finalCta.title}
        </h2>
        <p className="text-base md:text-lg text-brand-muted leading-relaxed mb-8 max-w-2xl mx-auto">
          {finalCta.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#" className="bg-brand-accent text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:opacity-90 transition-opacity">
            {finalCta.primaryCta}
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#" className="border border-white/20 text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-white/5 transition-colors">
            <Phone className="w-4 h-4" />
            {finalCta.secondaryCta}
          </a>
        </div>
      </div>
    </section>
  );
};
