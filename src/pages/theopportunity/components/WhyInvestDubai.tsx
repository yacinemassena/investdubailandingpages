import { useState, useRef } from 'react';
import { Wrench, Shield, Banknote, Lock, Eye, Scale, MapPin, Users, HardHat, Package } from 'lucide-react';
import { homepageContent } from '../config';

const { whyInvestDubai } = homepageContent;
const trustIcons = [Wrench, Shield, Banknote, Lock, Eye, Scale];

export const WhyInvestDubai = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const containerRect = container.getBoundingClientRect();
    const containerCenterY = containerRect.top + containerRect.height / 2;
    
    let closestIndex = 0;
    let closestDistance = Infinity;
    
    itemRefs.current.forEach((ref, index) => {
      if (ref) {
        const rect = ref.getBoundingClientRect();
        const itemCenterY = rect.top + rect.height / 2;
        const distance = Math.abs(itemCenterY - containerCenterY);
        
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      }
    });
    
    setActiveIndex(closestIndex);
  };

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Independently Scrollable Trust Points */}
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="h-[500px] overflow-y-auto scrollbar-hide pr-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Top spacer to allow first item to center */}
            <div className="h-[200px]" />
            {whyInvestDubai.trustPoints.map((point, i) => {
              const Icon = trustIcons[i];
              const isActive = activeIndex === i;
              return (
                <div 
                  key={i}
                  ref={(el) => { itemRefs.current[i] = el; }}
                  className={`flex gap-5 py-8 border-b border-brand-border last:border-b-0 transition-all duration-300 cursor-pointer ${
                    isActive ? 'opacity-100' : 'opacity-40 hover:opacity-70'
                  }`}
                  onClick={() => setActiveIndex(i)}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                    isActive ? 'bg-brand-accent' : 'bg-brand-surface border border-brand-border'
                  }`}>
                    <Icon className={`w-6 h-6 transition-colors duration-300 ${
                      isActive ? 'text-white' : 'text-brand-muted'
                    }`} />
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold mb-3 leading-tight transition-colors duration-300 ${
                      isActive ? 'text-brand-dark' : 'text-brand-muted'
                    }`}>{point.title}</h3>
                    <p className={`leading-relaxed text-[15px] transition-colors duration-300 ${
                      isActive ? 'text-brand-muted' : 'text-brand-muted/60'
                    }`}>
                      {point.description.split('**').map((part, idx) => 
                        idx % 2 === 0 ? part : <strong key={idx} className={`font-bold ${isActive ? 'text-brand-dark' : 'text-brand-muted'}`}>{part}</strong>
                      )}
                    </p>
                  </div>
                </div>
              );
            })}
            {/* Bottom spacer to allow last item to center */}
            <div className="h-[250px]" />
          </div>

          {/* Right Column - Fixed Highlight Card */}
          <div>
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

              <div className="pt-6 border-t border-white/10">
                <h4 className="text-lg font-semibold text-white mb-3">{whyInvestDubai.alignedIncentives.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {whyInvestDubai.alignedIncentives.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
