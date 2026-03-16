import { ArrowRight, Phone } from 'lucide-react';
import { homepageContent } from '../config';

const { takeAction } = homepageContent;

export const TakeAction = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-label">
            {takeAction.label}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6 leading-tight">
            {takeAction.title}
          </h2>
          <p className="text-base md:text-lg text-brand-muted leading-relaxed">
            {takeAction.subtitle}
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-stretch justify-center mb-12">
          {takeAction.metrics.map((metric, i) => (
            <div 
              key={i} 
              className={`flex-1 text-center py-8 px-6 ${i > 0 ? 'md:border-l border-brand-border' : ''}`}
            >
              <div className="text-4xl md:text-5xl font-bold text-brand-dark mb-3">{metric.value}</div>
              <div className="text-sm text-brand-muted">{metric.label}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="https://investdubai.my.smartcrowd.ae/" target="_blank" rel="noopener noreferrer" className="bg-brand-accent text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:opacity-90 transition-opacity">
            {takeAction.primaryCta}
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href="https://investdubai.my.smartcrowd.ae/" target="_blank" rel="noopener noreferrer" className="border border-brand-border text-brand-dark px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-brand-surface transition-colors">
            <Phone className="w-4 h-4" />
            {takeAction.secondaryCta}
          </a>
        </div>
      </div>
    </section>
  );
};
