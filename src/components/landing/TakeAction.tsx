import { ArrowRight, Phone } from 'lucide-react';

interface TakeActionProps {
  label: string;
  title: string;
  subtitle: string;
  metrics: Array<{
    value: string;
    label: string;
    description: string;
  }>;
  primaryCta: string;
  secondaryCta: string;
}

export const TakeAction = ({ label, title, subtitle, metrics, primaryCta, secondaryCta }: TakeActionProps) => {
  return (
    <section className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-brand-accent mb-4 block">
            {label}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            {title}
          </h2>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, i) => (
            <div 
              key={i} 
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-3">{metric.value}</div>
              <div className="text-base font-semibold text-white mb-3">{metric.label}</div>
              <div className="text-sm text-gray-300">{metric.description}</div>
            </div>
          ))}
        </div>

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
