import { homepageContent } from '../config';

const { projectResults } = homepageContent;

export const ProjectResults = () => {
  return (
    <section className="py-12 md:py-20 bg-[#0D0D0D] text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-h2 text-[#1DB976] mb-6">
            {projectResults.headline}
          </h2>
          <p className="text-body-lg text-gray-400">
            {projectResults.subheadline}
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-h3 text-white text-center mb-2">
            {projectResults.latestProjectsLabel}
          </h3>
          <p className="text-body text-gray-400 text-center">
            {projectResults.latestProjectsSubcopy}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {projectResults.projects.map((project, i) => (
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
                  <span className="text-label text-black">Revendu</span>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-h4 text-black mb-3">{project.id}</h3>
                
                <div className="space-y-2 mb-6">
                  <div className="flex flex-col text-body">
                    <span className="text-gray-500">Coût total :</span>
                    <span className="font-bold text-gray-900">{project.investment}</span>
                  </div>
                  <div className="flex flex-col text-body">
                    <span className="text-gray-500">Prix de revente :</span>
                    <span className="font-bold text-gray-900">{project.selling}</span>
                  </div>
                </div>

                {/* ROI Bar */}
                <div className="mt-auto">
                  <div className="bg-[#1DB976] rounded-xl p-3.5 flex justify-between items-center shadow-[0_4px_12px_rgba(29,219,118,0.2)]">
                    <span className="text-white text-label">ROI:</span>
                    <span className="text-stat text-white">{project.roi}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
