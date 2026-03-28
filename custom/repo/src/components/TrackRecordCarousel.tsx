import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { trackRecordProjects, getStatusColor, type TrackRecordProject } from '../content/trackRecordData';

interface TrackRecordCarouselProps {
  rows?: 1 | 2;
  showTitle?: boolean;
  showExpandButton?: boolean;
}

const ProjectCard = ({ project, compact = false }: { project: TrackRecordProject; compact?: boolean }) => {
  const statusColors = getStatusColor(project.status);
  
  return (
    <div 
      className={`bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col group/card transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] flex-shrink-0 snap-center ${
        compact ? 'w-[200px] h-[300px]' : 'w-[240px] h-[340px]'
      }`}
    >
      <div className={`relative overflow-hidden ${compact ? 'h-28' : 'h-36'}`}>
        <img 
          src={project.image} 
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
          loading="lazy"
        />
        <div className="absolute top-2 left-2 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-full border border-black/5">
          <div className={`w-1.5 h-1.5 ${statusColors.dot} rounded-full`} />
          <span className="text-[10px] font-bold text-black uppercase tracking-wider">{project.status}</span>
        </div>
      </div>

      <div className={`flex-1 flex flex-col ${compact ? 'p-3' : 'p-4'}`}>
        <h3 className={`font-bold text-black ${compact ? 'text-sm mb-2' : 'text-base mb-3'}`}>{project.name}</h3>
        
        {project.status === 'In-Progress' ? (
          <div className="flex-1 flex flex-col justify-center">
            <div className="text-center py-4">
              <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Renovation in Progress</span>
            </div>
          </div>
        ) : (
          <div className={`space-y-1 ${compact ? 'mb-3' : 'mb-4'}`}>
            <div className="flex flex-col text-xs">
              <span className="text-gray-500 font-medium">Investment:</span>
              <span className="font-bold text-gray-900">{project.totalInvestment}</span>
            </div>
            <div className="flex flex-col text-xs">
              <span className="text-gray-500 font-medium">Sale Price:</span>
              <span className="font-bold text-gray-900">{project.sellingPrice}</span>
            </div>
          </div>
        )}

        <div className="mt-auto">
          {project.status === 'In-Progress' ? (
            <div className="bg-blue-500 rounded-lg p-2 text-center">
              <span className="text-white text-xs font-bold uppercase tracking-wider">Coming Soon</span>
            </div>
          ) : (
            <div className={`${statusColors.bg} rounded-lg p-2 flex justify-between items-center`}>
              <span className={`${statusColors.text} text-[10px] font-black uppercase tracking-widest`}>ROI:</span>
              <span className={`${statusColors.text} text-lg font-black`}>{project.roi}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectCardGrid = ({ project }: { project: TrackRecordProject }) => {
  const statusColors = getStatusColor(project.status);
  
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col group/card transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] h-[320px] w-full">
      <div className="relative overflow-hidden h-32 flex-shrink-0">
        <img 
          src={project.image} 
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
          loading="lazy"
        />
        <div className="absolute top-2 left-2 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-full border border-black/5">
          <div className={`w-1.5 h-1.5 ${statusColors.dot} rounded-full`} />
          <span className="text-[10px] font-bold text-black uppercase tracking-wider">{project.status}</span>
        </div>
      </div>

      <div className="flex-1 flex flex-col p-4">
        <h3 className="font-bold text-black text-base mb-3">{project.name}</h3>
        
        {project.status === 'In-Progress' ? (
          <div className="flex-1 flex flex-col justify-center">
            <div className="text-center py-4">
              <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Renovation in Progress</span>
            </div>
          </div>
        ) : (
          <div className="space-y-1 mb-4">
            <div className="flex flex-col text-xs">
              <span className="text-gray-500 font-medium">Investment:</span>
              <span className="font-bold text-gray-900">{project.totalInvestment}</span>
            </div>
            <div className="flex flex-col text-xs">
              <span className="text-gray-500 font-medium">Sale Price:</span>
              <span className="font-bold text-gray-900">{project.sellingPrice}</span>
            </div>
          </div>
        )}

        <div className="mt-auto">
          {project.status === 'In-Progress' ? (
            <div className="bg-blue-500 rounded-lg p-2 text-center">
              <span className="text-white text-xs font-bold uppercase tracking-wider">Coming Soon</span>
            </div>
          ) : (
            <div className={`${statusColors.bg} rounded-lg p-2 flex justify-between items-center`}>
              <span className={`${statusColors.text} text-[10px] font-black uppercase tracking-widest`}>ROI:</span>
              <span className={`${statusColors.text} text-lg font-black`}>{project.roi}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const TrackRecordCarousel = ({ rows = 2, showTitle = true, showExpandButton = false }: TrackRecordCarouselProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  
  const compact = rows === 1;
  const cardWidth = compact ? 200 : 240;
  const gap = 16;
  const scrollAmount = (cardWidth + gap) * 2;

  // Reverse to show most recent flips first
  const reversedProjects = [...trackRecordProjects].reverse();
  const projectsRow1 = reversedProjects.slice(0, 20);
  const projectsRow2 = reversedProjects.slice(20, 40);

  // Smooth auto-scroll using requestAnimationFrame
  useEffect(() => {
    if (isHovered || isExpanded) return;
    
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationId: number;
    const scrollSpeed = 0.5; // pixels per frame

    const animate = () => {
      if (container.scrollLeft >= container.scrollWidth - container.clientWidth - 1) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += scrollSpeed;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isHovered, isExpanded]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const { scrollLeft, scrollWidth, clientWidth } = container;
      
      if (direction === 'right') {
        if (scrollLeft >= scrollWidth - clientWidth - 10) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      } else {
        if (scrollLeft <= 10) {
          container.scrollTo({ left: scrollWidth - clientWidth, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
      }
    }
  };

  if (isExpanded) {
    return (
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {showTitle && (
          <h3 className="text-xl font-bold text-white mb-6 text-center tracking-wide">
            All Completed Projects
          </h3>
        )}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-items-center">
          {reversedProjects.map((project) => (
            <ProjectCardGrid key={project.id} project={project} />
          ))}
        </div>
        {showExpandButton && (
          <div className="text-center mt-8">
            <button
              onClick={() => setIsExpanded(false)}
              className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors text-sm font-medium"
            >
              <span>Show Less</span>
              <ChevronLeft className="w-4 h-4 rotate-90" />
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div 
      className="relative w-screen -ml-[50vw] left-1/2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {showTitle && (
        <h3 className="text-xl font-bold text-white mb-6 text-center tracking-wide">
          All Completed Projects
        </h3>
      )}
      
      <div className="relative overflow-hidden">
        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center transition-all hover:scale-110"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6 text-white/40 hover:text-white/80 transition-colors" strokeWidth={1.5} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center transition-all hover:scale-110"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6 text-white/40 hover:text-white/80 transition-colors" strokeWidth={1.5} />
        </button>

        {/* Gradient Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-[#0D0D0D] to-transparent z-[5] pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-[#0D0D0D] to-transparent z-[5] pointer-events-none" />

        <div
          ref={scrollContainerRef}
          className={`overflow-x-scroll scrollbar-hide md:px-24 snap-x snap-mandatory md:scroll-px-24 w-full ${
            compact 
              ? 'px-[calc(50vw-100px)] scroll-px-[calc(50vw-100px)]' 
              : 'px-[calc(50vw-120px)] scroll-px-[calc(50vw-120px)]'
          }`}
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
            overflowX: 'scroll'
          }}
        >
          {rows === 2 ? (
            <div className="flex gap-4 py-2 w-max">
              {projectsRow1.map((project, index) => (
                <div key={project.id} className="flex flex-col gap-4 snap-center shrink-0">
                  <ProjectCard project={project} compact={compact} />
                  {projectsRow2[index] && (
                    <ProjectCard project={projectsRow2[index]} compact={compact} />
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="flex gap-4 py-2 w-max">
              {reversedProjects.map((project) => (
                <div key={project.id} className="snap-center shrink-0">
                  <ProjectCard project={project} compact={compact} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {showExpandButton && (
        <div className="text-center mt-8">
          <button
            onClick={() => setIsExpanded(true)}
            className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors text-sm font-medium"
          >
            <span>See Full Track Record</span>
            <ChevronRight className="w-4 h-4 -rotate-90" />
          </button>
        </div>
      )}

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default TrackRecordCarousel;
