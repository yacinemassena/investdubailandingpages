import { useState } from 'react';
import { TrendingUp, Briefcase, Building2, Wallet, Globe, Smartphone } from 'lucide-react';
import { homepageConfig } from '../config';

const lang = 'en';
const whyUs = homepageConfig.whyUs[lang];

const icons = [TrendingUp, Briefcase, Building2, Wallet];
const extraIcons = [Smartphone, Globe];

export const WhyUs = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const lastIndex = whyUs.pillars.length - 1;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-brand-accent/10 text-brand-accent text-sm font-semibold rounded-full mb-6">
            {whyUs.label}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-6 tracking-wide">
            {whyUs.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {whyUs.pillars.map((pillar, i) => {
            const Icon = icons[i] || TrendingUp;
            const isLast = i === lastIndex;
            const showShadow = hoveredIndex === i || (hoveredIndex === null && isLast);
            return (
              <div 
                key={i}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`bg-brand-surface rounded-2xl p-8 transition-all group ${
                  showShadow ? 'shadow-xl -translate-y-1' : 'hover:shadow-lg hover:-translate-y-1'
                }`}
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-accent text-white flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-brand-dark mb-3">{pillar.title}</h3>
                <p className="text-brand-muted leading-relaxed">{pillar.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-brand-surface rounded-2xl p-6 flex flex-col md:flex-row items-center justify-center gap-8">
          {whyUs.extras.map((extra, i) => {
            const Icon = extraIcons[i] || Globe;
            return (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-brand-accent" />
                </div>
                <span className="text-brand-dark font-medium">{extra}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
