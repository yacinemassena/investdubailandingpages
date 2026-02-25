import { ArrowRight, Phone } from 'lucide-react';
import { homepageContent } from '../config';

const { opportunity } = homepageContent;

export const Opportunity = () => {
  return (
    <section id="opportunity" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text */}
          <div>
            <span className="section-label">{opportunity.label}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6 leading-tight">
              {opportunity.title}
            </h2>
            <p className="text-brand-muted leading-relaxed mb-6">
              {opportunity.body.split('**').map((part, i) => 
                i % 2 === 0 ? part : <strong key={i} className="font-bold text-brand-dark">{part}</strong>
              )}
            </p>
            <p className="text-lg font-bold text-brand-dark leading-relaxed mb-8">
              {opportunity.pullQuote}
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a href="#" className="bg-brand-accent text-white px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 hover:opacity-90 transition-opacity">
                {opportunity.cta}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#" className="border border-brand-border bg-white text-brand-dark px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 hover:bg-brand-bg transition-colors">
                <Phone className="w-4 h-4" />
                Book a Call
              </a>
            </div>
          </div>

          {/* Right Column - Bar Comparison Chart */}
          <div className="bg-brand-surface rounded-3xl p-8 border border-brand-border shadow-sm">
            {/* Gap Indicator - Above Chart */}
            <div className="mb-2 text-center">
              <div className="inline-block bg-white border-2 border-dashed border-brand-accent/30 rounded-2xl px-8 py-6 shadow-lg">
                <div className="text-5xl md:text-6xl font-black text-brand-accent mb-2">
                  {opportunity.chart.gapValue}
                </div>
                <div className="text-xs font-bold text-brand-dark uppercase tracking-wide">
                  {opportunity.chart.gapSubtext}
                </div>
              </div>
              <div className="mt-4">
                <span className="inline-block bg-brand-accent text-white text-xs font-black px-6 py-2.5 rounded-full shadow-lg shadow-brand-accent/20 uppercase tracking-wide">
                  {opportunity.chart.gapLabel}
                </span>
              </div>
            </div>

            {/* Bar Chart Container */}
            <div className="mb-8 mt-2">
              <div className="relative h-[280px] flex items-end justify-center gap-8">
                {/* Left Bar - Non-renovated */}
                <div className="flex flex-col items-center">
                  <span className="text-xs font-bold text-brand-muted uppercase tracking-wide mb-3">Purchase</span>
                  <div 
                    className="w-32 bg-gray-200 rounded-t-xl border border-gray-300"
                    style={{ height: '120px' }}
                  />
                </div>

                {/* Right Bar - Renovated */}
                <div className="flex flex-col items-center">
                  <span className="text-xs font-bold text-brand-muted uppercase tracking-wide mb-3">Sale</span>
                  <div 
                    className="w-32 bg-brand-accent rounded-t-xl border border-brand-accent"
                    style={{ height: '220px' }}
                  />
                </div>
              </div>
              
              {/* Aligned Labels Container */}
              <div className="flex justify-center gap-8 mt-4">
                <div className="w-32 text-center">
                  <p className="text-xs font-medium text-brand-muted leading-tight">
                    {opportunity.chart.leftBarLabel}
                  </p>
                </div>
                <div className="w-32 text-center">
                  <p className="text-xs font-medium text-brand-muted leading-tight">
                    {opportunity.chart.rightBarLabel}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Text */}
            <p className="text-center text-sm font-bold text-brand-dark">
              {opportunity.chart.bottomText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
