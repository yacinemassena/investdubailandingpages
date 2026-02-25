import { ArrowRight, Phone } from 'lucide-react';

interface FinalCTAProps {
  label: string;
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
}

export const FinalCTA = ({ label, title, subtitle, primaryCta, secondaryCta }: FinalCTAProps) => {
  return (
    <section className="py-24 bg-brand-dark">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-brand-accent mb-4 block">
          {label}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
          {title}
        </h2>
        <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-10 max-w-2xl mx-auto">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#" className="bg-brand-accent text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:opacity-90 transition-opacity">
            {primaryCta}
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#" className="border border-white/20 text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-white/5 transition-colors">
            <Phone className="w-4 h-4" />
            {secondaryCta}
          </a>
        </div>
      </div>
    </section>
  );
};
