import { UserPlus, Search, Wallet, Eye, Banknote, ArrowRight, Phone } from 'lucide-react';

interface HowItWorksProps {
  label: string;
  title: string;
  steps: Array<{
    number: string;
    title: string;
    description: string;
  }>;
  cta: string;
}

const icons = [UserPlus, Search, Wallet, Eye, Banknote];

export const HowItWorks = ({ label, title, steps, cta }: HowItWorksProps) => {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-label">{label}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6 leading-tight">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-16">
          {steps.slice(0, 5).map((step, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="relative">
                <div className="bg-brand-bg rounded-2xl p-6 border border-brand-border h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-brand-accent-light rounded-xl flex items-center justify-center">
                      <Icon className="w-5 h-5 text-brand-accent" />
                    </div>
                    <span className="text-xs font-bold text-brand-muted">STEP {step.number}</span>
                  </div>
                  <h3 className="text-lg font-bold text-brand-dark mb-2">{step.title}</h3>
                  <p className="text-sm text-brand-muted leading-relaxed">{step.description}</p>
                </div>
                {i < steps.slice(0, 5).length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <div className="w-6 h-6 bg-brand-bg rounded-full border border-brand-border flex items-center justify-center">
                      <ArrowRight className="w-3 h-3 text-brand-muted" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#" className="bg-brand-accent text-white px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 hover:opacity-90 transition-opacity">
            {cta}
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
