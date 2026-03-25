import { useState, useRef } from 'react';
import { Wrench, Shield, Banknote, Lock, Eye, Scale, MapPin, Users, HardHat, Package } from 'lucide-react';
import { motion } from 'motion/react';
import { homepageContent } from '../config';
import { fadeUp, staggerContainer } from './animations';

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
    <section className="py-16 md:py-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center max-w-3xl mx-auto mb-16">
          <motion.span variants={fadeUp} className="section-label">{whyInvestDubai.label}</motion.span>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-brand-dark mb-6 tracking-tight leading-tight">
            {whyInvestDubai.title}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg md:text-xl text-brand-muted leading-relaxed font-light">
            {whyInvestDubai.subtitle}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Independently Scrollable Trust Points */}
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="h-[350px] md:h-[500px] overflow-y-auto pr-2 md:pr-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Top spacer to allow first item to center */}
            <div className="h-[12px]" />
            {whyInvestDubai.trustPoints.map((point, i) => {
              const Icon = trustIcons[i];
              const isActive = activeIndex === i;
              return (
                <div 
                  key={i}
                  ref={(el) => { itemRefs.current[i] = el; }}
                  className={`flex gap-4 md:gap-6 py-6 md:py-8 border-b border-brand-border last:border-b-0 transition-all duration-300 cursor-pointer ${
                    isActive ? 'opacity-100 scale-100' : 'opacity-40 hover:opacity-70 scale-95'
                  }`}
                  onClick={() => {
                    setActiveIndex(i);
                    itemRefs.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                    isActive ? 'bg-brand-accent' : 'bg-brand-surface border border-brand-border'
                  }`}>
                    <Icon className={`w-6 h-6 transition-colors duration-300 ${
                      isActive ? 'text-white' : 'text-brand-muted'
                    }`} />
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold mb-2 transition-colors duration-300 ${
                      isActive ? 'text-brand-dark' : 'text-brand-muted'
                    }`}>{point.title}</h3>
                    <p className={`text-sm leading-relaxed transition-colors duration-300 ${
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
            <div className="h-[180px]" />
          </div>

          {/* Right Column - Fixed Highlight Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden lg:block bg-brand-dark rounded-3xl p-8 md:p-12 text-white shadow-2xl sticky top-24"
          >
            <div className="text-5xl md:text-7xl font-black text-brand-accent mb-4">{whyInvestDubai.highlightCard.stat}</div>
            <div className="text-xl md:text-3xl font-bold mb-8 leading-snug">{whyInvestDubai.highlightCard.statLabel}</div>
            
            <div className="space-y-4 mb-10">
              {whyInvestDubai.highlightCard.features.map((feature, i) => {
                const featureIcons = [MapPin, HardHat, Users, Package];
                const FeatureIcon = featureIcons[i];
                return (
                  <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
                    <FeatureIcon className="w-6 h-6 text-brand-accent flex-shrink-0" />
                    <span className="text-gray-200 font-medium">{feature}</span>
                  </div>
                );
              })}
            </div>

            <div className="pt-8 border-t border-white/10">
              <h4 className="text-xl font-bold text-white mb-3">{whyInvestDubai.alignedIncentives.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {whyInvestDubai.alignedIncentives.description}
              </p>
            </div>
          </motion.div>
          
          {/* Mobile Right Column - Card */}
          <div className="lg:hidden bg-brand-dark rounded-2xl p-6 text-white shadow-xl">
            <div className="text-4xl font-black text-brand-accent mb-3">{whyInvestDubai.highlightCard.stat}</div>
            <div className="text-lg font-bold mb-5 leading-snug">{whyInvestDubai.highlightCard.statLabel}</div>
            
            <div className="space-y-3 mb-6">
              {whyInvestDubai.highlightCard.features.map((feature, i) => {
                const featureIcons = [MapPin, HardHat, Users, Package];
                const FeatureIcon = featureIcons[i];
                return (
                  <div key={i} className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                    <FeatureIcon className="w-5 h-5 text-brand-accent flex-shrink-0" />
                    <span className="text-gray-200 text-sm">{feature}</span>
                  </div>
                );
              })}
            </div>

            <div className="pt-5 border-t border-white/10">
              <h4 className="text-base font-bold text-white mb-2">{whyInvestDubai.alignedIncentives.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {whyInvestDubai.alignedIncentives.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
