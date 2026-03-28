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
  
  const dimensions = compact ? 'w-[160px] h-[285px] md:w-[200px] md:h-[300px]' : 'w-[160px] h-[300px] md:w-[240px] md:h-[340px]';

  const cardContent = (
    <>
      <div className={`relative overflow-hidden ${compact ? 'h-20 md:h-28' : 'h-24 md:h-36'} flex-shrink-0`}>
        <img 
          src={project.image} 
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
          loading="lazy"
        />
        <div className="absolute top-2 left-2 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-full border border-black/5">
          <div className={`w-1.5 h-1.5 ${statusColors.dot} rounded-full`} />
          <span className="text-[12px] text-black">
            {project.status === 'Sold' ? 'Revendu' : project.status === 'Hold' ? 'En Portefeuille' : 'En Cours'}
          </span>
        </div>
        {project.isGroup && (
          <div className="hidden md:flex absolute top-2 right-2 items-center gap-1 bg-blue-600 px-2 py-1 rounded-full shadow-sm">
            <span className="text-[10px] md:text-[12px] text-white font-bold">{project.groupCount} Opérations</span>
          </div>
        )}
      </div>

      <div className={`flex-1 flex flex-col p-3`}>
        <h3 className={`font-bold text-black text-[15px] md:text-[16px] mb-2`}>
          {project.isGroup ? '10 Opérations' : project.name.replace('Flip', 'Villa')}
        </h3>
        
        {project.isGroup ? (
          <div className="flex-1 flex flex-col justify-center">
            <div className="text-center py-1">
              <span className="text-[14px] text-blue-600 font-bold block mb-1 leading-tight">En cours de Rénovation</span>
              <span className="text-[13px] md:text-[14px] text-gray-600 font-medium">Villas 37 à 46</span>
            </div>
          </div>
        ) : project.status === 'In-Progress' ? (
          <div className="flex-1 flex flex-col justify-center">
            <div className="text-center py-2">
              <span className="text-[13px] md:text-[14px] text-blue-600 leading-tight">Rénovation en cours</span>
            </div>
          </div>
        ) : (
          <div className="space-y-1 mb-1 md:mb-3">
            <div className="flex flex-col text-[13px] md:text-[14px] leading-tight md:leading-snug">
              <span className="text-gray-500 font-medium">Coût total :</span>
              <span className="font-bold text-gray-900">{project.totalInvestment}</span>
            </div>
            <div className="flex flex-col text-[13px] md:text-[14px] leading-tight md:leading-snug">
              <span className="text-gray-500 font-medium">Prix revente :</span>
              <span className="font-bold text-gray-900">{project.sellingPrice}</span>
            </div>
          </div>
        )}

        <div className="mt-auto">
          {project.status === 'In-Progress' ? (
            <div className="bg-blue-500 rounded-lg p-1.5 md:p-2 text-center">
              <span className="text-white text-[12px] md:text-[13px] font-medium uppercase tracking-wider">À Venir</span>
            </div>
          ) : (
            <div className={`${statusColors.bg} rounded-lg p-1.5 md:p-2 flex justify-between items-center`}>
              <span className={`${statusColors.text} text-[12px] md:text-[13px] font-medium uppercase tracking-wider`}>ROI:</span>
              <span className={`${statusColors.text} text-[15px] md:text-[16px] font-bold`}>{project.roi}</span>
            </div>
          )}
        </div>
      </div>
    </>
  );

  if (project.isGroup) {
    return (
      <div className={`relative flex-shrink-0 snap-center ${dimensions}`}>
        {/* Stack cards behind */}
        <div className="absolute top-3 left-3 w-full h-full bg-white rounded-2xl border border-black/10 shadow-sm opacity-50 z-0 transition-transform duration-300 group-hover/card:translate-x-1 group-hover/card:translate-y-1" />
        <div className="absolute top-1.5 left-1.5 w-full h-full bg-white rounded-2xl border border-black/10 shadow-sm opacity-80 z-0 transition-transform duration-300 group-hover/card:translate-x-0.5 group-hover/card:translate-y-0.5" />
        
        {/* Main Card */}
        <div className={`absolute inset-0 bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col group/card transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[12px_24px_40px_-15px_rgba(0,0,0,0.3)] z-10 border border-black/5`}>
          {cardContent}
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col group/card transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] flex-shrink-0 snap-center ${dimensions}`}
    >
      {cardContent}
    </div>
  );
};

const ProjectCardGrid = ({ project }: { project: TrackRecordProject }) => {
  const statusColors = getStatusColor(project.status);
  
  const cardContent = (
    <>
      <div className="relative overflow-hidden h-32 flex-shrink-0">
        <img 
          src={project.image} 
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
          loading="lazy"
        />
        <div className="absolute top-2 left-2 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-full border border-black/5">
          <div className={`w-1.5 h-1.5 ${statusColors.dot} rounded-full`} />
          <span className="text-[12px] text-black">
            {project.status === 'Sold' ? 'Revendu' : project.status === 'Hold' ? 'En Portefeuille' : 'En Cours'}
          </span>
        </div>
        {project.isGroup && (
          <div className="hidden md:flex absolute top-2 right-2 items-center gap-1 bg-blue-600 px-2 py-1 rounded-full shadow-sm">
            <span className="text-[10px] md:text-[12px] text-white font-bold">{project.groupCount} Opérations</span>
          </div>
        )}
      </div>

      <div className="flex-1 flex flex-col p-3">
        <h3 className="font-bold text-black text-[15px] md:text-[16px] mb-2">
          {project.isGroup ? '10 Opérations' : project.name.replace('Flip', 'Villa')}
        </h3>
        
        {project.isGroup ? (
          <div className="flex-1 flex flex-col justify-center">
            <div className="text-center py-1">
              <span className="text-[14px] text-blue-600 font-bold block mb-1 leading-tight">En cours de Rénovation</span>
              <span className="text-[13px] md:text-[14px] text-gray-600 font-medium">Villas 37 à 46</span>
            </div>
          </div>
        ) : project.status === 'In-Progress' ? (
          <div className="flex-1 flex flex-col justify-center">
            <div className="text-center py-2">
              <span className="text-[13px] md:text-[14px] text-blue-600 leading-tight">Rénovation en cours</span>
            </div>
          </div>
        ) : (
          <div className="space-y-1 mb-1 md:mb-3">
            <div className="flex flex-col text-[13px] md:text-[14px] leading-tight md:leading-snug">
              <span className="text-gray-500 font-medium">Coût total :</span>
              <span className="font-bold text-gray-900">{project.totalInvestment}</span>
            </div>
            <div className="flex flex-col text-[13px] md:text-[14px] leading-tight md:leading-snug">
              <span className="text-gray-500 font-medium">Prix revente :</span>
              <span className="font-bold text-gray-900">{project.sellingPrice}</span>
            </div>
          </div>
        )}

        <div className="mt-auto">
          {project.status === 'In-Progress' ? (
            <div className="bg-blue-500 rounded-lg p-1.5 md:p-2 text-center">
              <span className="text-white text-[12px] md:text-[13px] font-medium uppercase tracking-wider">À Venir</span>
            </div>
          ) : (
            <div className={`${statusColors.bg} rounded-lg p-1.5 md:p-2 flex justify-between items-center`}>
              <span className={`${statusColors.text} text-[12px] md:text-[13px] font-medium uppercase tracking-wider`}>ROI:</span>
              <span className={`${statusColors.text} text-[15px] md:text-[16px] font-bold`}>{project.roi}</span>
            </div>
          )}
        </div>
      </div>
    </>
  );

  if (project.isGroup) {
    return (
      <div className="relative w-full h-full min-h-[300px] md:min-h-[340px]">
        {/* Stack cards behind */}
        <div className="absolute top-3 left-3 w-full h-full bg-white rounded-2xl border border-black/10 shadow-sm opacity-50 z-0 transition-transform duration-300 group-hover/card:translate-x-1 group-hover/card:translate-y-1" />
        <div className="absolute top-1.5 left-1.5 w-full h-full bg-white rounded-2xl border border-black/10 shadow-sm opacity-80 z-0 transition-transform duration-300 group-hover/card:translate-x-0.5 group-hover/card:translate-y-0.5" />
        
        {/* Main Card */}
        <div className="absolute inset-0 bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col group/card transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[12px_24px_40px_-15px_rgba(0,0,0,0.3)] z-10 border border-black/5">
          {cardContent}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col group/card transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] h-full w-full min-h-[300px] md:min-h-[340px]">
      {cardContent}
    </div>
  );
};

export const TrackRecordCarousel = ({ rows = 2, showTitle = true, showExpandButton = false }: TrackRecordCarouselProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
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

  const handleCollapse = () => {
    setIsExpanded(false);
    setTimeout(() => {
      containerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 50);
  };

  if (isExpanded) {
    return (
      <div ref={containerRef} className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 relative pb-10">
        {showTitle && (
          <h3 className="text-h3 text-white mb-6 text-center">
            All Completed Projects
          </h3>
        )}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-items-center auto-rows-fr">
          {reversedProjects.map((project) => (
            <ProjectCardGrid key={project.id} project={project} />
          ))}
        </div>
        
        {/* Sticky Mobile Show Less Button */}
        {showExpandButton && (
          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 md:hidden">
            <button
              onClick={handleCollapse}
              className="bg-black/90 backdrop-blur-md text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-[0_8px_30px_rgb(0,0,0,0.5)] border border-white/10 transition-transform active:scale-95"
            >
              <span className="font-medium text-[14px]">Show Less</span>
              <ChevronLeft className="w-4 h-4 rotate-90" />
            </button>
          </div>
        )}

        {/* Standard Desktop Show Less Button */}
        {showExpandButton && (
          <div className="text-center mt-8 hidden md:block">
            <button
              onClick={handleCollapse}
              className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors text-body font-medium"
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
      ref={containerRef}
      className="relative w-screen -ml-[50vw] left-1/2 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {showTitle && (
        <h3 className="text-h3 text-white mb-6 text-center">
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
          className={`overflow-x-scroll scrollbar-hide snap-x snap-mandatory w-full ${
            compact 
              ? 'px-4 scroll-px-4 md:px-24 md:scroll-px-24' 
              : 'px-4 scroll-px-4 md:px-24 md:scroll-px-24'
          }`}
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
            overflowX: 'scroll',
            overflowY: 'hidden'
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
            className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors text-body font-medium"
          >
            <span>Voir toutes nos opérations</span>
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
