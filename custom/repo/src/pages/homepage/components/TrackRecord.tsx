import { ArrowRight } from 'lucide-react';
import { homepageConfig } from '../config';

const lang = 'en';
const trackRecord = homepageConfig.trackRecord[lang];

export const TrackRecord = () => {
  return (
    <section id="track-record" className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#111] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-brand-accent/20 text-brand-accent text-sm font-semibold rounded-full mb-6">
            {trackRecord.label}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight tracking-wide">
            {trackRecord.title}
          </h2>
          <p className="text-base md:text-lg text-gray-400 leading-relaxed tracking-wide">
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
              <div className={`text-3xl md:text-5xl font-bold mb-2 ${i === 2 ? 'text-white' : 'text-white'}`}>
                {stat.value}
              </div>
              <div className={`text-sm ${i === 2 ? 'text-white/80' : 'text-gray-400'}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-bold text-white mb-6 text-center tracking-wide">Sample Completed Projects</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {trackRecord.projects.map((project, i) => (
            <div 
              key={i} 
              className="bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col group transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)]"
            >
              {/* Image Container */}
              {project.image && (
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full border border-black/5">
                    <div className="w-1.5 h-1.5 bg-[#1DB976] rounded-full shadow-[0_0_8px_rgba(29,219,118,0.6)]" />
                    <span className="text-xs font-bold text-black uppercase tracking-wider">Sold</span>
                  </div>
                </div>
              )}

              {/* Content Container */}
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-black mb-3">{project.name}</h3>
                
                <div className="space-y-2 mb-6">
                  <div className="flex flex-col text-sm">
                    <span className="text-gray-500 font-medium">Total Investment:</span>
                    <span className="font-bold text-gray-900">{project.investment}</span>
                  </div>
                  <div className="flex flex-col text-sm">
                    <span className="text-gray-500 font-medium">Selling Price:</span>
                    <span className="font-bold text-gray-900">{project.salePrice}</span>
                  </div>
                </div>

                {/* ROI Bar */}
                <div className="mt-auto">
                  <div className="bg-[#1DB976] rounded-xl p-3.5 flex justify-between items-center shadow-[0_4px_12px_rgba(29,219,118,0.2)]">
                    <span className="text-white text-xs font-black uppercase tracking-widest">ROI:</span>
                    <span className="text-white text-2xl font-black">{project.roi}</span>
                  </div>
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
            href="https://investdubai.my.smartcrowd.ae/" target="_blank" rel="noopener noreferrer"
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
