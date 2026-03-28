import { ArrowRight, ChevronDown } from 'lucide-react';
import { ArrowRight, Phone } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Grid3x3, MapPin, LineChart, ArrowRight, Phone } from 'lucide-react';
import { UserPlus, Search, Wallet, Eye, Banknote, ArrowRight } from 'lucide-react';
import { useState, useRef } from 'react';
import { Wrench, Shield, Banknote, Lock, Eye, Scale, MapPin, Users, HardHat, Package } from 'lucide-react';
import { useState } from 'react';
import { ChevronDown, Phone } from 'lucide-react';

import { trackRecordData } from '../src/content/trackRecordData';
import { numbersDictionary } from '../src/content/numbersDictionary';


// ==========================================
// FILE: src/pages/theopportunity/Page.tsx
// ==========================================


export default function Page() {
  return (
    <div className="min-h-screen bg-brand-bg">
      <Navbar />
      <main>
        <Hero />
        <Opportunity />
        <section className="py-16 md:py-24 bg-[#0D0D0D] text-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
            <div className="text-center max-w-4xl mx-auto mb-10 md:mb-16">
              <span className="inline-block px-4 py-1.5 bg-brand-accent/10 text-brand-accent text-xs font-bold uppercase tracking-widest rounded-full mb-6 border border-brand-accent/20">Track Record</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-white tracking-tight leading-tight">
                40+ villas acquired, renovated & sold
              </h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed px-2 sm:px-0 font-light">
                Every project follows the same model: find undervalued villas in prime communities, renovate to modern standards, and sell at full market value. Below is a sample of completed exits.
              </p>
            </div>
          </div>
          <TrackRecordCarousel rows={2} showTitle={false} showExpandButton={true} />
        </section>
        <WhyGapExists />
        <TakeAction />
        <HowItWorks />
        <WhyInvestDubai />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

// ==========================================
// FILE: src/pages/theopportunity/components/Navbar.tsx
// ==========================================


interface NavbarProps {
  dark?: boolean;
}

const Navbar = ({ dark = false }: NavbarProps) => <GlobalNavbar dark={dark} />;

// ==========================================
// FILE: src/pages/theopportunity/components/Hero.tsx
// ==========================================


const { hero } = homepageContent;

const Hero = () => {
  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden min-h-[100svh] md:min-h-[85vh] flex items-center">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          preload="auto"
          poster="https://pub-46bf43f4e0fb4daab5a13e7a41223da4.r2.dev/images/0A6A5754.jpg"
          className="w-full h-full object-cover"
        >
          <source src="https://pub-46bf43f4e0fb4daab5a13e7a41223da4.r2.dev/videos/homepage-banniere.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/85 to-brand-dark/70" />
      </div>
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-white/10 backdrop-blur-sm text-white/80 text-xs md:text-sm font-semibold rounded-full mb-4 md:mb-6 border border-white/20">{hero.eyebrow}</span>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 md:mb-8 tracking-tight leading-[1.15] md:leading-[1.1]">
            {hero.headline}
            {hero.headlineSecondLine ? <><br className="hidden md:block" />{hero.headlineSecondLine}</> : null}
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-white/70 leading-relaxed mb-8 md:mb-10 max-w-3xl mx-auto px-2 sm:px-0 font-light">
            {hero.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-6 md:mb-8">
            <a href="https://investdubai.my.smartcrowd.ae/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-brand-accent text-white px-6 md:px-8 py-3.5 md:py-4 rounded-full font-medium flex items-center justify-center gap-2 text-sm md:text-base hover:opacity-90 transition-opacity">
              {hero.primaryCta}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#opportunity" className="w-full sm:w-auto border border-white/20 bg-white/10 backdrop-blur-sm text-white px-6 md:px-8 py-3.5 md:py-4 rounded-full font-medium flex items-center justify-center gap-2 text-sm md:text-base hover:bg-white/20 transition-colors">
              {hero.secondaryCta}
              <ChevronDown className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Proof Bar */}
        <div className="mt-8 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 max-w-4xl mx-auto">
          {hero.stats.map((stat, i) => (
            <div key={i} className="text-center p-4 md:p-6 bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl border border-white/20">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-0.5 md:mb-1">{stat.value}</div>
              <div className="text-xs md:text-sm text-white/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// FILE: src/pages/theopportunity/components/Opportunity.tsx
// ==========================================


const { opportunity } = homepageContent;

const Opportunity = () => {
  return (
    <section id="opportunity" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text */}
          <div>
            <span className="section-label">{opportunity.label}</span>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6 tracking-tight leading-tight">
              {opportunity.title}
            </h2>
            <p className="text-lg md:text-xl text-brand-muted leading-relaxed mb-6 font-light">
              {opportunity.body.split('**').map((part, i) => 
                i % 2 === 0 ? part : <strong key={i} className="font-bold text-brand-dark">{part}</strong>
              )}
            </p>
            <p className="text-xl md:text-2xl font-bold text-brand-dark leading-relaxed mb-8">
              {opportunity.pullQuote}
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4">
              <a href="https://investdubai.my.smartcrowd.ae/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-brand-accent text-white px-6 md:px-8 py-3.5 md:py-4 rounded-full font-medium inline-flex items-center justify-center gap-2 text-sm md:text-base hover:opacity-90 transition-opacity">
                {opportunity.cta}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="https://investdubai.my.smartcrowd.ae/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto border border-brand-border bg-white text-brand-dark px-6 md:px-8 py-3.5 md:py-4 rounded-full font-medium inline-flex items-center justify-center gap-2 text-sm md:text-base hover:bg-brand-bg transition-colors">
                <Phone className="w-4 h-4" />
                Book a Call
              </a>
            </div>
          </div>

          {/* Right Column - Bar Comparison Chart */}
          <div className="bg-brand-surface rounded-2xl md:rounded-3xl p-5 md:p-8 border border-brand-border shadow-sm">
            {/* Gap Indicator - Above Chart */}
            <div className="mb-2 text-center">
              <div className="inline-block bg-white border-2 border-dashed border-brand-accent/30 rounded-xl md:rounded-2xl px-5 md:px-8 py-4 md:py-6 shadow-lg">
                <div className="text-4xl md:text-6xl font-black text-brand-accent mb-1 md:mb-2">
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
            <div className="mb-6 md:mb-8 mt-2">
              <div className="relative h-[200px] md:h-[280px] flex items-end justify-center gap-4 md:gap-8">
                {/* Left Bar - Non-renovated */}
                <div className="flex flex-col items-center">
                  <span className="text-[10px] md:text-xs font-bold text-brand-muted uppercase tracking-wide mb-2 md:mb-3">Purchase</span>
                  <div 
                    className="w-20 md:w-32 bg-gray-200 rounded-t-lg md:rounded-t-xl border border-gray-300"
                    style={{ height: '85px' }}
                  />
                </div>

                {/* Right Bar - Renovated */}
                <div className="flex flex-col items-center">
                  <span className="text-[10px] md:text-xs font-bold text-brand-muted uppercase tracking-wide mb-2 md:mb-3">Sale</span>
                  <div 
                    className="w-20 md:w-32 bg-brand-accent rounded-t-lg md:rounded-t-xl border border-brand-accent"
                    style={{ height: '155px' }}
                  />
                </div>
              </div>
              
              {/* Aligned Labels Container */}
              <div className="flex justify-center gap-4 md:gap-8 mt-3 md:mt-4">
                <div className="w-20 md:w-32 text-center">
                  <p className="text-xs font-medium text-brand-muted leading-tight">
                    {opportunity.chart.leftBarLabel}
                  </p>
                </div>
                <div className="w-20 md:w-32 text-center">
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

// ==========================================
// FILE: src/components/TrackRecordCarousel.tsx
// ==========================================


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

const TrackRecordCarousel = ({ rows = 2, showTitle = true, showExpandButton = false }: TrackRecordCarouselProps) => {
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

// ==========================================
// FILE: src/pages/theopportunity/components/WhyGapExists.tsx
// ==========================================


const { whyGapExists } = homepageContent;
const icons = [Grid3x3, MapPin, LineChart];

const WhyGapExists = () => {
  return (
    <section className="py-16 md:py-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-label">{whyGapExists.label}</span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6 tracking-tight leading-tight">
            {whyGapExists.title}
          </h2>
          <p className="text-lg md:text-xl text-brand-muted leading-relaxed font-light">
            {whyGapExists.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-12">
          {whyGapExists.cards.map((card, i) => {
            const Icon = icons[i];
            return (
              <div 
                key={i} 
                className="bg-brand-surface rounded-2xl md:rounded-3xl p-6 md:p-10 border border-brand-border hover:border-brand-accent/20 transition-all duration-300 hover:shadow-lg text-center h-full flex flex-col"
              >
                <div className="flex justify-center mb-5 md:mb-8">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-brand-accent-light rounded-xl md:rounded-2xl flex items-center justify-center">
                    <Icon className="w-6 h-6 md:w-8 md:h-8 text-brand-accent" />
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-brand-dark mb-3 md:mb-5 leading-tight md:min-h-[56px] flex items-center justify-center">{card.title}</h3>
                <p className="text-brand-muted leading-relaxed mb-5 md:mb-8 text-sm md:text-base md:min-h-[120px]">{card.description}</p>
                <div className="flex justify-center mt-auto">
                  <div className="inline-block bg-brand-accent/10 text-brand-accent text-sm font-bold px-5 py-2.5 rounded-full border border-brand-accent/20">
                    {card.tag}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
          <a href="https://investdubai.my.smartcrowd.ae/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-brand-accent text-white px-6 md:px-8 py-3.5 md:py-4 rounded-full font-medium inline-flex items-center justify-center gap-2 text-sm md:text-base hover:opacity-90 transition-opacity">
            Create an Account
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href="https://investdubai.my.smartcrowd.ae/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto border border-brand-border bg-brand-surface text-brand-dark px-6 md:px-8 py-3.5 md:py-4 rounded-full font-medium inline-flex items-center justify-center gap-2 text-sm md:text-base hover:bg-brand-bg transition-colors">
            <Phone className="w-4 h-4" />
            Book a Call
          </a>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// FILE: src/pages/theopportunity/components/TakeAction.tsx
// ==========================================


const { takeAction } = homepageContent;

const TakeAction = () => {
  return (
    <section className="py-16 md:py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-label">
            {takeAction.label}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
            {takeAction.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
            {takeAction.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-10 md:mb-12">
          {takeAction.metrics.map((metric, i) => (
            <div 
              key={i} 
              className="bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/10 text-center"
            >
              <div className="text-2xl md:text-4xl font-bold text-white mb-1 md:mb-3">{metric.value}</div>
              <div className="text-xs md:text-base font-semibold text-white mb-1 md:mb-3">{metric.label}</div>
              <div className="text-[10px] md:text-sm text-gray-300 leading-tight">{metric.description}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
          <a href="https://investdubai.my.smartcrowd.ae/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-brand-accent text-white px-6 md:px-8 py-3.5 md:py-4 rounded-full font-medium flex items-center justify-center gap-2 text-sm md:text-base hover:opacity-90 transition-opacity">
            {takeAction.primaryCta}
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href="https://investdubai.my.smartcrowd.ae/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto border border-white/20 text-white px-6 md:px-8 py-3.5 md:py-4 rounded-full font-medium flex items-center justify-center gap-2 text-sm md:text-base hover:bg-white/5 transition-colors">
            <Phone className="w-4 h-4" />
            {takeAction.secondaryCta}
          </a>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// FILE: src/pages/theopportunity/components/HowItWorks.tsx
// ==========================================


const { howItWorks } = homepageContent;
const icons = [UserPlus, Search, Wallet, Eye, Banknote];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-label">{howItWorks.label}</span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6 tracking-tight leading-tight">
            {howItWorks.title}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-6 mb-10 md:mb-16">
          {howItWorks.steps.map((step, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="relative">
                <div className="bg-brand-bg rounded-xl md:rounded-2xl p-4 md:p-6 border border-brand-border h-full transition-transform duration-300 hover:scale-105">
                  <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-brand-accent-light rounded-lg md:rounded-xl flex items-center justify-center">
                      <Icon className="w-4 h-4 md:w-5 md:h-5 text-brand-accent" />
                    </div>
                    <span className="text-[10px] md:text-xs font-bold text-brand-muted">STEP {step.number}</span>
                  </div>
                  <h3 className="text-sm md:text-lg font-bold text-brand-dark mb-1 md:mb-2">{step.title}</h3>
                  <p className="text-xs md:text-base text-brand-muted leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
          <a href="https://investdubai.my.smartcrowd.ae/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-brand-accent text-white px-6 md:px-8 py-3.5 md:py-4 rounded-full font-medium inline-flex items-center justify-center gap-2 text-sm md:text-base hover:opacity-90 transition-opacity">
            {howItWorks.cta}
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href="/how-it-works" className="w-full sm:w-auto border border-brand-border bg-brand-surface text-brand-dark px-6 md:px-8 py-3.5 md:py-4 rounded-full font-medium inline-flex items-center justify-center gap-2 text-sm md:text-base hover:bg-brand-bg transition-colors">
            See Full Process
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// FILE: src/pages/theopportunity/components/WhyInvestDubai.tsx
// ==========================================


const { whyInvestDubai } = homepageContent;
const trustIcons = [Wrench, Shield, Banknote, Lock, Eye, Scale];

const WhyInvestDubai = () => {
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
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-label">{whyInvestDubai.label}</span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6 tracking-tight leading-tight">
            {whyInvestDubai.title}
          </h2>
          <p className="text-lg md:text-xl text-brand-muted leading-relaxed font-light">
            {whyInvestDubai.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Independently Scrollable Trust Points */}
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="h-[350px] md:h-[500px] overflow-y-auto scrollbar-hide pr-2 md:pr-4"
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
                  className={`flex gap-3 md:gap-5 py-5 md:py-8 border-b border-brand-border last:border-b-0 transition-all duration-300 cursor-pointer ${
                    isActive ? 'opacity-100' : 'opacity-40 hover:opacity-70'
                  }`}
                  onClick={() => setActiveIndex(i)}
                >
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                    isActive ? 'bg-brand-accent' : 'bg-brand-surface border border-brand-border'
                  }`}>
                    <Icon className={`w-5 h-5 md:w-6 md:h-6 transition-colors duration-300 ${
                      isActive ? 'text-white' : 'text-brand-muted'
                    }`} />
                  </div>
                  <div>
                    <h3 className={`text-base md:text-xl font-bold mb-2 md:mb-3 leading-tight transition-colors duration-300 ${
                      isActive ? 'text-brand-dark' : 'text-brand-muted'
                    }`}>{point.title}</h3>
                    <p className={`leading-relaxed text-sm md:text-[15px] transition-colors duration-300 ${
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
          <div>
            <div className="bg-brand-dark rounded-2xl md:rounded-3xl p-6 md:p-10 text-white">
              <div className="text-4xl md:text-6xl font-bold mb-3 md:mb-5">{whyInvestDubai.highlightCard.stat}</div>
              <div className="text-lg md:text-2xl font-medium mb-5 md:mb-8 leading-snug">{whyInvestDubai.highlightCard.statLabel}</div>
              
              <div className="space-y-3 md:space-y-4 mb-5 md:mb-8">
                {whyInvestDubai.highlightCard.features.map((feature, i) => {
                  const featureIcons = [MapPin, HardHat, Users, Package];
                  const FeatureIcon = featureIcons[i];
                  return (
                    <div key={i} className="flex items-center gap-2 md:gap-3">
                      <FeatureIcon className="w-4 h-4 md:w-5 md:h-5 text-brand-accent flex-shrink-0" />
                      <span className="text-gray-200 text-sm md:text-[15px]">{feature}</span>
                    </div>
                  );
                })}
              </div>

              <div className="pt-4 md:pt-6 border-t border-white/10 text-center">
                <h4 className="text-base md:text-lg font-semibold text-white mb-2 md:mb-3 text-center">{whyInvestDubai.alignedIncentives.title}</h4>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-md mx-auto text-center">
                  {whyInvestDubai.alignedIncentives.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// FILE: src/pages/theopportunity/components/FAQ.tsx
// ==========================================


const { faq } = homepageContent;

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left Column - Heading & CTA */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <span className="section-label">{faq.label}</span>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6 tracking-tight leading-tight">
              {faq.title}
            </h2>
            <p className="text-lg md:text-xl text-brand-muted leading-relaxed mb-8 font-light">
              {faq.subtitle}
            </p>
            <a href="https://investdubai.my.smartcrowd.ae/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto border border-brand-border bg-brand-surface text-brand-dark px-6 py-3 rounded-full font-medium inline-flex items-center justify-center gap-2 text-sm md:text-base hover:bg-brand-bg transition-colors">
              <Phone className="w-4 h-4" />
              {faq.cta}
            </a>
          </div>

          {/* Right Column - Accordion */}
          <div className="space-y-3 md:space-y-4">
            {faq.questions.map((item, i) => (
              <div 
                key={i} 
                className="bg-brand-bg rounded-xl md:rounded-2xl border border-brand-border overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full px-4 md:px-6 py-4 md:py-5 flex items-center justify-between text-left"
                >
                  <span className="font-medium text-brand-dark pr-4 text-sm md:text-base">{item.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-brand-muted flex-shrink-0 transition-transform duration-300 ${
                      openIndex === i ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === i ? 'max-h-[1200px]' : 'max-h-0'
                  }`}
                >
                  <div className="px-4 md:px-6 pb-4 md:pb-5 pt-1 space-y-4">
                    {item.shortAnswer ? (
                      <p className="text-brand-dark font-medium leading-relaxed mb-3 whitespace-pre-line text-sm md:text-base">
                        {item.shortAnswer}
                      </p>
                    ) : null}
                    <p className="text-brand-muted leading-relaxed whitespace-pre-line text-sm md:text-base">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// FILE: src/pages/theopportunity/components/FinalCTA.tsx
// ==========================================


const { finalCta } = homepageContent;

const FinalCTA = () => {
  return (
    <section className="py-16 md:py-24 bg-brand-dark">
      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-12 text-center">
        <span className="section-label">
          {finalCta.label}
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
          {finalCta.title}
        </h2>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto font-light">
          {finalCta.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
          <a href="https://investdubai.my.smartcrowd.ae/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-brand-accent text-white px-6 md:px-8 py-3.5 md:py-4 rounded-full font-medium flex items-center justify-center gap-2 text-sm md:text-base hover:opacity-90 transition-opacity">
            {finalCta.primaryCta}
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href="https://investdubai.my.smartcrowd.ae/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto border border-white/20 text-white px-6 md:px-8 py-3.5 md:py-4 rounded-full font-medium flex items-center justify-center gap-2 text-sm md:text-base hover:bg-white/5 transition-colors">
            <Phone className="w-4 h-4" />
            {finalCta.secondaryCta}
          </a>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// FILE: src/pages/theopportunity/components/Footer.tsx
// ==========================================


interface FooterProps {
  dark?: boolean;
}

const Footer = (_props: FooterProps) => <GlobalFooter />;

// ==========================================
// FILE: src/pages/theopportunity/config.ts
// ==========================================


const homepageContent = {
  nav: {
    links: [
      { label: 'A Smarter Alternative', href: '/a-smarter-alternative' },
      { label: 'How It Works', href: '/how-it-works' },
      { label: 'FAQ', href: '/faq' },
    ],
    loginText: 'Log In',
    ctaText: 'Create Your Account',
  },

  hero: {
    eyebrow: 'Regulated access to Dubai luxury villa flips',
    headline: 'Capture the value gap in Dubai’s luxury villa market',
    headlineSecondLine: '',
    subheadline:
      'We acquire undervalued villas in prime Dubai communities, renovate them to premium standards, and sell at full market value. The difference between outdated and move-in-ready is where the value gap becomes investor return.',
    primaryCta: 'Create an Account',
    secondaryCta: 'See the Opportunity',
    stats: [
      { value: d.villasAcquired.value, label: d.villasAcquired.label },
      { value: d.historicalInvestorPayout.value, label: d.historicalInvestorPayout.label },
      { value: d.typicalHoldPeriod.value, label: d.typicalHoldPeriod.label },
      { value: d.leverageUsed.value, label: d.leverageUsed.label },
    ],
  },

  opportunity: {
    label: 'The Opportunity',
    title: 'In Dubai’s prime villa communities, renovation can unlock 35–60% of hidden value',
    body: 'In the same community, villas with the same layout can trade at very different prices depending on condition. We acquire outdated properties, renovate them to premium standards, and sell them at the renovated market price. That spread is the value gap.',
    pullQuote: 'We create value through redevelopment, not by betting on market growth.',
    chart: {
      leftLabel: 'Acquisition',
      rightLabel: 'Exit',
      leftBarLabel: 'Below renovated market value',
      rightBarLabel: 'Sold at full market value',
      gapLabel: 'The value gap creates the upside',
      gapValue: '+50%',
      gapSubtext: 'typical price gap',
      bottomText: 'Same villa type. Same community. Same footprint.',
      disclaimer: 'Illustrative. Based on comparable transactions in Palm Jumeirah, Jumeirah Islands, and Al Barari.',
    },
    cta: 'Create an Account',
  },

  projectResults: {
    headline: 'A track record built on realized exits',
    subheadline: `Our performance is based on completed villa flips, not paper projections. Across completed exits, projects have delivered an average project ROI of ${d.averageProjectROI.value}. Explore recent realized exits and the returns generated across finished projects.`,
    latestProjectsLabel: 'Latest completed projects',
    latestProjectsSubcopy: 'Realized performance from recent luxury villa flips',
    showMoreText: 'Show More',
    disclaimer: 'The annualized net returns are net of all fees and costs.',
    projects: [
      { id: 'Flip 32', investment: 'AED 24,670,000', selling: 'AED 34,680,000', roi: '41%', image: 'https://pub-46bf43f4e0fb4daab5a13e7a41223da4.r2.dev/images/flip-32.jpg' },
      { id: 'Flip 31', investment: 'AED 23,580,000', selling: 'AED 33,800,000', roi: '43%', image: 'https://pub-46bf43f4e0fb4daab5a13e7a41223da4.r2.dev/images/flip-31.jpg' },
      { id: 'Flip 30', investment: 'AED 24,670,000', selling: 'AED 33,800,000', roi: '37%', image: 'https://pub-46bf43f4e0fb4daab5a13e7a41223da4.r2.dev/images/flip-30.jpg' },
      { id: 'Flip 29', investment: 'AED 24,343,000', selling: 'AED 34,000,000', roi: '40%', image: 'https://pub-46bf43f4e0fb4daab5a13e7a41223da4.r2.dev/images/flip-29.jpg' },
      { id: 'Flip 28', investment: 'AED 24,670,000', selling: 'AED 35,000,000', roi: '42%', image: 'https://pub-46bf43f4e0fb4daab5a13e7a41223da4.r2.dev/images/flip-28.jpg' },
      { id: 'Flip 27', investment: 'AED 24,670,000', selling: 'AED 35,000,000', roi: '42%', image: 'https://pub-46bf43f4e0fb4daab5a13e7a41223da4.r2.dev/images/flip-27.jpg' },
      { id: 'Flip 26', investment: 'AED 23,580,000', selling: 'AED 33,000,000', roi: '40%', image: 'https://pub-46bf43f4e0fb4daab5a13e7a41223da4.r2.dev/images/flip-26.jpg' },
      { id: 'Flip 25', investment: 'AED 18,215,000', selling: 'AED 25,000,000', roi: '37%', image: 'https://pub-46bf43f4e0fb4daab5a13e7a41223da4.r2.dev/images/flip-25.jpg' },
    ],
  },

  whyGapExists: {
    label: 'Why The Gap Exists',
    title: 'Why this opportunity exists in Dubai',
    subtitle: 'Dubai’s prime villa market has structural characteristics that make this strategy measurable and repeatable.',
    cards: [
      {
        title: 'Standardized villa typologies',
        description: 'In many prime communities, developers built identical villa layouts at scale. That makes pricing easier to benchmark and comparisons between outdated and renovated homes much cleaner.',
        tag: 'Comparable layouts make pricing clearer',
      },
      {
        title: 'Prime addresses with aging inventory',
        description: 'Communities like Palm Jumeirah, Jumeirah Islands, and Al Barari contain older villa stock in highly desirable locations. Buyers want the address, but increasingly prefer upgraded, move-in-ready homes.',
        tag: 'Demand is strongest for renovated inventory',
      },
      {
        title: 'Measurable renovation uplift',
        description: 'Because layouts and locations are easier to compare, renovation value can be assessed before acquisition using comparable sales from the same community.',
        tag: 'Value creation is measurable before acquisition',
      },
    ],
  },

  takeAction: {
    label: 'Investment Structure',
    title: 'Built to align incentives',
    subtitle: 'Each project follows an investor-first structure built to align incentives with real performance.',
    metrics: [
      {
        value: d.priorityReturn.value,
        label: 'Priority return for investors',
        description: 'Investors receive the first 15% before profit sharing applies.',
      },
      {
        value: d.targetInvestorReturn.value,
        label: d.targetInvestorReturn.label,
        description: 'Target returns are based on acquisition discipline, renovation budgets, and local comparable sales.',
      },
      {
        value: d.historicalInvestorPayout.value,
        label: d.historicalInvestorPayout.label,
        description: 'Average historical payout received by investors across completed projects.',
      },
      {
        value: d.minimumInvestment.value,
        label: d.minimumInvestment.label,
        description: `Access the strategy from ${d.minimumInvestment.value} through a regulated, asset-backed structure.`,
      },
    ],
    primaryCta: 'Create an Account',
    secondaryCta: 'Book a Call',
    disclaimer: 'InvestDubai operates through a regulated, asset-backed structure in the UAE.',
  },

  howItWorks: {
    label: 'How It Works',
    title: 'How investors access the value gap',
    steps: [
      { number: '01', title: 'Create your account', description: 'Register and complete identity verification in minutes.' },
      { number: '02', title: 'Review curated villa opportunities', description: 'Access selected projects backed by real properties in prime Dubai communities.' },
      { number: '03', title: `Invest from ${d.minimumInvestment.value}`, description: 'Participate in a specific asset-backed project through a regulated, asset-backed structure.' },
      { number: '04', title: 'Follow the transformation', description: 'Track renovation progress and milestone updates throughout the project.' },
      { number: '05', title: 'Receive proceeds on exit', description: 'Once the villa is sold, receive your capital and share of profits.' },
    ],
    cta: 'Create an Account',
  },

  whyInvestDubai: {
    label: 'Why InvestDubai',
    title: 'Active value creation, not passive exposure',
    subtitle: 'InvestDubai is not a generic real estate platform. We create value through acquisition discipline, renovation execution, and aligned incentives.',
    trustPoints: [
      { title: 'In-house execution', description: 'We source, design, renovate, and manage projects internally instead of outsourcing the core value-creation process.' },
      { title: 'Asset-backed ownership', description: 'Each investment is tied to a specific property, giving investors exposure to a real underlying asset.' },
      { title: 'Zero leverage', description: 'Projects are executed without leverage, reducing forced-sale risk and improving resilience in weaker markets.' },
      { title: 'Controlled renovation budgets', description: 'Renovation economics are planned upfront to keep execution disciplined and outcomes measurable.' },
      { title: 'Transparent project tracking', description: 'Investors can follow project progress through clear updates across the acquisition, renovation, and exit process.' },
      { title: 'Regulated structure', description: 'Investments are accessed through a regulated structure built to provide clarity and investor protection.' },
    ],
    highlightCard: {
      stat: d.villasAcquired.value,
      statLabel: 'Luxury villas acquired by the in-house team',
      features: [
        'Only super-prime Dubai locations',
        'In-house architects & project managers',
        'Daily on-site supervision',
        'Full materials control',
      ],
      founders: 'Founded by Greenbull Group',
      company: 'Part of Greenbull Group',
    },
    alignedIncentives: {
      title: 'We only profit when you profit',
      description: 'Our model is built on profit sharing, which means our upside depends on investors performing well first. The better the exit, the more aligned the structure becomes.',
    },
  },

  faq: {
    label: 'Frequently Asked',
    title: 'Common questions, clearly answered',
    subtitle: 'Everything investors usually want to understand before getting started.',
    cta: 'Book a Call',
    questions: [
      {
        question: 'Is Invest Dubai legal and regulated?',
        shortAnswer: 'Yes. Investments are accessed through a regulated partner structure, and each property is held through a dedicated SPV tied to the underlying asset.',
        answer: "Yes, we operate with full legal compliance and transparency. Invest Dubai functions through a regulated crowdfunding partner that is fully licensed under UAE law. This ensures that our operations meet strict regulatory standards for investor protection.\n\nFurthermore, every single property project is held within its own dedicated Special Purpose Vehicle (SPV), which is a separate legal entity that holds the official title deed.\n\nWhen you invest, you become a documented shareholder in that specific SPV, providing you with true equity ownership in the real estate asset rather than just a contractual promise.",
      },
      {
        question: 'What happens if Greenbull disappears?',
        shortAnswer: 'The asset remains protected through the project structure itself, not through the operating company alone.',
        answer: "Your investment is structurally insulated from our corporate health. Because each project sits in its own dedicated SPV (Special Purpose Vehicle), that independent legal entity holds the title deed to the villa.\n\nEven in the highly unlikely event that Greenbull Group or any of our operational partners became unavailable, the SPV and your equity ownership stake within it continue to exist legally and independently.\n\nThe property itself remains fully protected, and the shareholders would simply appoint a new management entity to complete the project and distribute the funds.",
      },
      {
        question: 'What if the Dubai market crashes?',
        shortAnswer: 'This strategy is designed to create value through transformation, not rely only on market appreciation.',
        answer: "Unlike traditional real estate investing, our model is not a speculative bet on market appreciation. We manufacture our own upside.\n\n• We acquire unrenovated properties at a steep discount (often 30-40% below market value).\n• We add immediate, tangible value through comprehensive high-end renovations.\n• We then sell at the new market price.\n\nThis intrinsic value-add creates a significant margin of safety. Even if the broader market experienced a 20-30% downturn, this buffer is designed to protect your initial capital. Additionally, because we use absolutely zero debt to fund our projects, there is no risk of forced liquidation by banks during a market dip.",
      },
      {
        question: 'How long is my money locked?',
        shortAnswer: `Typically, a project runs for around ${d.typicalHoldPeriod.value}.`,
        answer: "Real estate is inherently an illiquid asset class, and you should anticipate a typical project cycle of 6 to 18 months.\n\nThis timeline covers the entire process:\n• The initial legal acquisition of the property.\n• The intensive architectural renovation phase.\n• Marketing, staging, and the final sale and transfer to a new buyer.\n\nOnce the villa is sold and the funds clear escrow, your initial capital plus your share of the profits are credited directly to your digital wallet. From there, you have the full freedom to withdraw the funds to your bank account or reinvest them into the next available project.",
      },
      {
        question: 'Are the returns realistic?',
        shortAnswer: 'Returns are based on acquisition discipline, renovation planning, and comparable sales data, not on arbitrary projections.',
        answer: `Our returns are rooted in data, not speculation. The historical average payout across our completed projects has been ${d.historicalInvestorPayout.value}.\n\nFor every project, investors receive a ${d.priorityReturn.value} priority return, meaning you get paid your first 15% of profit before we take any performance fee. We typically target an overall return of ${d.targetInvestorReturn.value} per project.\n\nThese projections are calculated using hard data: strict acquisition prices, fixed renovation budgets, and recent comparable sales of identical renovated villas in the same community. However, please note that all investments carry risk, and past performance does not guarantee future results.`,
      },
      {
        question: 'How does Invest Dubai make money?',
        shortAnswer: 'Our model is based on profit sharing, which keeps our incentives aligned with investors.',
        answer: "We fundamentally believe in aligning our incentives with yours. We do not charge hidden management fees that drag down your capital while the property sits in renovation.\n\nInstead, we operate on a performance basis. We only profit when the villa successfully sells at a gain, and only after you have received your 15% priority return.\n\nOur share of the upside is calculated purely on the performance above that threshold. Simply put: if we don't deliver exceptional results for you, we don't earn a profit.",
      },
      {
        question: "What's the minimum investment?",
        shortAnswer: `You can start from ${d.minimumInvestment.value}.`,
        answer: `We have structured Invest Dubai to heavily democratize access to ultra-luxury real estate that was previously reserved for institutional investors.\n\nYou can begin investing with approximately ${d.minimumInvestment.value} (${d.minimumInvestment.secondary}).\n\nAll investments on our platform are denominated in UAE Dirhams (AED), which is strictly pegged to the US Dollar (USD). This eliminates currency risk for USD investors, though European investors may experience minor, normal exchange rate fluctuations between the EUR and the USD/AED peg over the lifecycle of the project.`,
      },
      {
        question: 'What about taxes for French residents?',
        shortAnswer: 'Tax treatment depends on your country of tax residence and personal or corporate situation.',
        answer: "Under the France–UAE bilateral tax treaty, investment income (including dividends) from InvestDubai is taxable in your country of fiscal residence. Here's what applies to French investors:\n\n**Individual Investors:**\nReturns are classified as capital income and subject to the flat tax (PFU) of 30% by default. You may opt into the progressive income tax scale instead, so consult your tax advisor.\n\n**Corporate Investors (SCI, SARL, SAS):**\nReturns fall under standard corporate tax rules. They are added to your company's overall taxable income and subject to standard IS rates (15% reduced / 25% standard).\n\n**Non-French Residents:**\nIf you're not a French tax resident, French tax law does not apply. You'll need to declare under the rules of your country of residence and any applicable treaty with the UAE.\n\nWe always recommend consulting a qualified tax advisor for your personal situation.",
      },
    ],
  },

  finalCta: {
    label: 'Get Started',
    title: 'Get access to Dubai’s luxury villa value gap',
    subtitle: 'Open your account in minutes, explore current projects, and invest through a regulated, asset-backed structure.',
    primaryCta: 'Create an Account',
    secondaryCta: 'Book a Call',
    disclaimer: '',
  },

  footer: {
    copyright: '© 2026 Invest Dubai. All rights reserved.',
    links: [
      { label: 'Terms', href: '#' },
      { label: 'Privacy', href: '#' },
      { label: 'Legal', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
};
