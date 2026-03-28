import { ArrowRight } from 'lucide-react';
import { homepageConfig } from '../config';
import { TrackRecordCarousel } from '../../../components/TrackRecordCarousel';

const lang = 'en';
const trackRecord = homepageConfig.trackRecord[lang];

export const TrackRecord = () => {
  return (
    <section id="track-record" className="py-12 md:py-20 bg-gradient-to-b from-[#0a0a0a] to-[#111] text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-brand-accent/20 text-brand-accent text-body rounded-full mb-6">
            {trackRecord.label}
          </span>
          <h2 className="text-h2 mb-6">
            {trackRecord.title}
          </h2>
          <p className="text-body-lg text-gray-400">
            {trackRecord.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 mb-16">
          {trackRecord.stats.map((stat, i) => (
            <div 
              key={i} 
              className={`rounded-2xl p-6 md:p-8 text-center flex flex-col items-center justify-center ${
                i === 2 
                  ? 'bg-brand-accent col-span-2 md:col-span-1' 
                  : 'bg-white/5 border border-white/10'
              }`}
            >
              <div className={`text-stat mb-2 ${i === 2 ? 'text-white' : 'text-white'}`}>
                {stat.value}
              </div>
              <div className={`text-body ${i === 2 ? 'text-white/80' : 'text-gray-400'}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <TrackRecordCarousel rows={1} showTitle={true} showExpandButton={false} />

        <p className="text-center text-body text-gray-500 mt-10 mb-10 max-w-2xl mx-auto italic">
          {trackRecord.disclaimer}
        </p>

        <div className="text-center">
          <a 
            href="https://investdubai.my.smartcrowd.ae/" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-brand-dark px-6 md:px-8 py-3.5 md:py-4 rounded-full font-medium hover:bg-gray-100 transition-colors shadow-xl"
          >
            {trackRecord.cta}
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
