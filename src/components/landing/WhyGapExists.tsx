import { TrendingUp, Building, BarChart3, ArrowRight, Phone } from 'lucide-react';

interface WhyGapExistsProps {
  label: string;
  title: string;
  subtitle: string;
  cards: Array<{
    title: string;
    description: string;
    tag: string;
  }>;
}

const icons = [TrendingUp, Building, BarChart3];

export const WhyGapExists = ({ label, title, subtitle, cards }: WhyGapExistsProps) => {
  return (
    <section className="py-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-label">{label}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6 leading-tight">
            {title}
          </h2>
          <p className="text-base md:text-lg text-brand-muted leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {cards.map((card, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div 
                key={i} 
                className="bg-brand-surface rounded-3xl p-10 border border-brand-border hover:border-brand-accent/20 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex justify-center mb-8">
                  <div className="w-16 h-16 bg-brand-accent-light rounded-2xl flex items-center justify-center">
                    <Icon className="w-8 h-8 text-brand-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-6 leading-tight">{card.title}</h3>
                <p className="text-brand-muted leading-relaxed mb-8 text-base">{card.description}</p>
                <div className="inline-block bg-brand-accent text-black text-sm font-bold px-5 py-2.5 rounded-full">
                  {card.tag}
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#" className="bg-brand-accent text-white px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 hover:opacity-90 transition-opacity">
            Create Your Free Account
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#" className="border border-brand-border bg-brand-surface text-brand-dark px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 hover:bg-brand-bg transition-colors">
            <Phone className="w-4 h-4" />
            Book a Call
          </a>
        </div>
      </div>
    </section>
  );
};
