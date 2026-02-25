import { ArrowRight } from 'lucide-react';
import { homepageConfig } from '../config';

const lang = 'en';
const trackRecord = homepageConfig.trackRecord[lang];

export const TrackRecord = () => {
  return (
    <section id="track-record" className="py-20 bg-gradient-to-b from-[#0a0a0a] to-[#111] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-brand-accent/20 text-brand-accent text-sm font-semibold rounded-full mb-6">
            {trackRecord.label}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            {trackRecord.title}
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            {trackRecord.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 mb-16">
          {trackRecord.stats.map((stat, i) => (
            <div 
              key={i} 
              className={`rounded-2xl p-6 md:p-8 text-center ${
                i === 2 
                  ? 'bg-brand-accent col-span-2 md:col-span-1' 
                  : 'bg-white/5 border border-white/10'
              }`}
            >
              <div className={`text-3xl md:text-5xl font-bold mb-2 ${i === 2 ? 'text-white' : 'text-white'}`}>
                {stat.value}
              </div>
              <div className={`text-sm ${i === 2 ? 'text-white/80' : 'text-gray-400'}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-bold text-white mb-6 text-center">Sample Completed Projects</h3>
        <div className="grid md:grid-cols-5 gap-4 mb-12">
          {trackRecord.projects.map((project, i) => (
            <div 
              key={i} 
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-brand-accent/50 transition-all group"
            >
              <div className="text-lg font-bold text-white mb-4 group-hover:text-brand-accent transition-colors">
                {project.name}
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Investment</span>
                  <span className="text-gray-300 font-medium">{project.investment}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Sale</span>
                  <span className="text-gray-300 font-medium">{project.salePrice}</span>
                </div>
                <div className="flex justify-between pt-3 border-t border-white/10">
                  <span className="text-gray-500">ROI</span>
                  <span className="text-brand-accent font-bold text-lg">{project.roi}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 mb-10 max-w-2xl mx-auto italic">
          {trackRecord.disclaimer}
        </p>

        <div className="text-center">
          <a 
            href="#"
            className="inline-flex items-center gap-2 bg-white text-brand-dark px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-xl"
          >
            {trackRecord.cta}
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
