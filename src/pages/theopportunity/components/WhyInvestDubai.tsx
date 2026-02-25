import { Wrench, Shield, Banknote, Lock, Eye, Scale, MapPin, Users, HardHat, Package } from 'lucide-react';
import { homepageContent } from '../config';

const { whyInvestDubai } = homepageContent;
const trustIcons = [Wrench, Shield, Banknote, Lock, Eye, Scale];

export const WhyInvestDubai = () => {
  return (
    <section className="py-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-label">{whyInvestDubai.label}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6 leading-tight">
            {whyInvestDubai.title}
          </h2>
          <p className="text-lg md:text-xl text-brand-muted leading-relaxed">
            {whyInvestDubai.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Trust Points */}
          <div className="space-y-8">
            {whyInvestDubai.trustPoints.map((point, i) => {
              const Icon = trustIcons[i];
              return (
                <div key={i} className="flex gap-5">
                  <div className="w-14 h-14 bg-brand-accent-light rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-7 h-7 text-brand-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-dark mb-3 leading-tight">{point.title}</h3>
                    <p className="text-brand-muted leading-relaxed text-[15px]">
                      {point.description.split('**').map((part, idx) => 
                        idx % 2 === 0 ? part : <strong key={idx} className="font-bold text-brand-dark">{part}</strong>
                      )}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column - Highlight Cards */}
          <div className="space-y-6">
            {/* Main Highlight Card */}
            <div className="bg-brand-dark rounded-3xl p-10 text-white">
              <div className="text-6xl font-bold mb-5">{whyInvestDubai.highlightCard.stat}</div>
              <div className="text-2xl font-medium mb-8 leading-snug">{whyInvestDubai.highlightCard.statLabel}</div>
              
              <div className="space-y-4 mb-8">
                {whyInvestDubai.highlightCard.features.map((feature, i) => {
                  const featureIcons = [MapPin, HardHat, Users, Package];
                  const FeatureIcon = featureIcons[i];
                  return (
                    <div key={i} className="flex items-center gap-3">
                      <FeatureIcon className="w-5 h-5 text-brand-accent" />
                      <span className="text-gray-200 text-[15px]">{feature}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Secondary Card - Aligned Incentives */}
            <div className="bg-brand-surface rounded-3xl p-10 border border-brand-border">
              <h3 className="text-2xl font-bold text-brand-dark mb-5 leading-tight">{whyInvestDubai.alignedIncentives.title}</h3>
              <p className="text-brand-muted leading-relaxed text-[15px]">
                {whyInvestDubai.alignedIncentives.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
