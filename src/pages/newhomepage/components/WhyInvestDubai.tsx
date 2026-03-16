import { useState } from 'react';
import { Wrench, Shield, Banknote, Lock, Eye, Scale } from 'lucide-react';
import { homepageContent } from '../config';

const { whyInvestDubai } = homepageContent;
const trustIcons = [Wrench, Shield, Banknote, Lock, Eye, Scale];

// Images for each trust point
const trustImages = [
  '/images/0A6A5754.jpg',
  '/images/0A6A6039.jpg',
  '/images/0A6A5754.jpg',
  '/images/0A6A6039.jpg',
  '/images/0A6A5754.jpg',
  '/images/0A6A6039.jpg',
];

export const WhyInvestDubai = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6 leading-tight">
            {whyInvestDubai.title}
          </h2>
          <p className="text-lg text-brand-muted leading-relaxed">
            {whyInvestDubai.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Scrollable Trust Points */}
          <div className="space-y-2">
            {whyInvestDubai.trustPoints.map((point, i) => {
              const Icon = trustIcons[i];
              const isActive = activeIndex === i;
              return (
                <div 
                  key={i} 
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                    isActive 
                      ? 'bg-white shadow-lg border-l-4 border-brand-accent' 
                      : 'hover:bg-white/50'
                  }`}
                  onMouseEnter={() => setActiveIndex(i)}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                      isActive ? 'bg-brand-accent/10' : 'bg-brand-surface'
                    }`}>
                      <Icon className={`w-6 h-6 ${isActive ? 'text-brand-accent' : 'text-brand-muted'}`} />
                    </div>
                    <div>
                      <h3 className={`text-lg font-bold mb-2 leading-tight ${isActive ? 'text-brand-dark' : 'text-brand-dark'}`}>
                        {point.title}
                      </h3>
                      <p className="text-brand-muted leading-relaxed text-sm">
                        {point.description.split('**').map((part, idx) => 
                          idx % 2 === 0 ? part : <strong key={idx} className="font-semibold text-brand-dark">{part}</strong>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column - Sticky Image */}
          <div className="hidden lg:block sticky top-32">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={trustImages[activeIndex]} 
                alt="Dubai luxury villa" 
                className="w-full h-[500px] object-cover transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-5">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl font-bold text-brand-accent">{whyInvestDubai.highlightCard.stat}</div>
                    <div className="text-sm text-brand-muted leading-tight">{whyInvestDubai.highlightCard.statLabel}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
