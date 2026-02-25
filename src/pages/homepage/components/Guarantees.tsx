import { Lock, Shield, DollarSign, ArrowRight, Check } from 'lucide-react';
import { homepageConfig } from '../config';

const lang = 'en';
const guarantees = homepageConfig.guarantees[lang];

const iconMap: Record<string, React.ElementType> = {
  lock: Lock,
  shield: Shield,
  dollar: DollarSign,
};

const bgColors = ['bg-blue-50', 'bg-emerald-50', 'bg-amber-50'];
const iconBgColors = ['bg-blue-500', 'bg-emerald-500', 'bg-amber-500'];

export const Guarantees = () => {
  return (
    <section className="py-20 bg-brand-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-brand-accent/10 text-brand-accent text-sm font-semibold rounded-full mb-6">
            {guarantees.label}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-6 tracking-tight">
            {guarantees.title}
          </h2>
          <p className="text-lg text-brand-muted max-w-3xl mx-auto leading-relaxed">
            {guarantees.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {guarantees.pillars.map((pillar, i) => {
            const Icon = iconMap[pillar.icon] || Shield;
            return (
              <div 
                key={i} 
                className={`${bgColors[i]} rounded-3xl p-8 md:p-10 border border-white/50 hover:shadow-xl transition-shadow`}
              >
                <div className={`w-14 h-14 ${iconBgColors[i]} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">{pillar.title}</h3>
                <p className="text-lg font-semibold text-brand-dark mb-4">{pillar.headline}</p>
                <p className="text-brand-muted leading-relaxed mb-4">{pillar.description}</p>
                <p className="text-brand-muted leading-relaxed text-sm mb-6">{pillar.subtext}</p>
                <div className="flex flex-wrap gap-2">
                  {pillar.badges.map((badge, j) => (
                    <span 
                      key={j}
                      className="inline-flex items-center gap-1 px-3 py-1.5 bg-white/80 text-brand-dark text-xs font-medium rounded-full"
                    >
                      <Check className="w-3 h-3 text-brand-accent" />
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-3xl border border-brand-border p-8 md:p-10 shadow-sm mb-12">
          <h3 className="text-lg font-bold text-brand-dark mb-6 text-center">Summary of Protections</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {guarantees.summary.map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-10 h-10 bg-brand-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-5 h-5 text-brand-accent" />
                </div>
                <div className="text-lg font-bold text-brand-dark mb-1">{item.protection}</div>
                <div className="text-brand-muted text-sm">{item.meaning}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 bg-brand-accent text-white px-8 py-4 rounded-full font-semibold hover:bg-brand-accent/90 transition-colors shadow-xl"
          >
            {guarantees.cta}
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
