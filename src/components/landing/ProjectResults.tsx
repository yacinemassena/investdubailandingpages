interface ProjectResultsProps {
  headline: string;
  subheadline: string;
  latestProjectsLabel: string;
  showMoreText: string;
  projects: Array<{
    id: string;
    investment: string;
    selling: string;
    roi: string;
    image: string;
  }>;
}

export const ProjectResults = ({ headline, subheadline, latestProjectsLabel, showMoreText, projects }: ProjectResultsProps) => {
  return (
    <section className="py-24 bg-[#0D0D0D] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#1DB976]">
            {headline}
          </h2>
          <p className="text-base md:text-lg text-gray-400 leading-relaxed">
            {subheadline}
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-2">
            {latestProjectsLabel}
          </h3>
          <p className="text-sm text-gray-400 text-center">
            Realized performance on our most recent villa flips
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {projects.slice(0, 8).map((project, i) => (
            <div 
              key={i} 
              className="bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col group transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)]"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.id} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full border border-black/5">
                  <div className="w-1.5 h-1.5 bg-[#1DB976] rounded-full shadow-[0_0_8px_rgba(29,219,118,0.6)]" />
                  <span className="text-xs font-bold text-black uppercase tracking-wider">Sold</span>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-black mb-3">{project.id}</h3>
                
                <div className="space-y-2 mb-6">
                  <div className="flex flex-col text-sm">
                    <span className="text-gray-500 font-medium">Total Investment:</span>
                    <span className="font-bold text-gray-900">{project.investment}</span>
                  </div>
                  <div className="flex flex-col text-sm">
                    <span className="text-gray-500 font-medium">Selling Price:</span>
                    <span className="font-bold text-gray-900">{project.selling}</span>
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

        <div className="text-center">
          <button className="bg-white text-black px-10 py-3.5 rounded-full font-bold text-sm hover:bg-gray-100 transition-colors uppercase tracking-widest">
            {showMoreText}
          </button>
        </div>
      </div>
    </section>
  );
};
