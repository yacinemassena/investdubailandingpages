import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
import { homepageContent } from '../config';
import { fadeUp, staggerContainer } from './animations';

const { hero } = homepageContent;

export const Hero = () => {
  return (
    <section className="relative pt-36 md:pt-32 pb-16 md:pb-24 overflow-hidden min-h-[100svh] md:min-h-[85vh] flex flex-col justify-center">
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
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 relative z-10 w-full mt-auto mb-auto">
        <motion.div 
          initial="hidden" animate="visible" variants={staggerContainer}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.span variants={fadeUp} className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-white/10 backdrop-blur-sm text-white/90 text-body rounded-full mb-6 md:mb-8 border border-white/20">
            {hero.eyebrow}
          </motion.span>
          
          <motion.h1 variants={fadeUp} className="text-display-1 text-white mb-6 md:mb-8">
            {hero.headline}
            {hero.headlineSecondLine ? <><br className="hidden md:block" />{hero.headlineSecondLine}</> : null}
          </motion.h1>

          <motion.p variants={fadeUp} className="hidden md:block text-body-lg text-white/80 mb-8 md:mb-10 max-w-3xl mx-auto px-2 sm:px-0 whitespace-pre-line">
            {hero.subheadline}
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-10 md:mb-12">
            <a href="https://investdubai.my.smartcrowd.ae/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-brand-accent text-white px-6 md:px-8 py-3.5 md:py-4 rounded-full font-medium flex items-center justify-center gap-2 text-body hover:opacity-90 transition-opacity">
              Commencer
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#opportunity" className="w-full sm:w-auto border border-white/20 bg-white/10 backdrop-blur-sm text-white px-6 md:px-8 py-3.5 md:py-4 rounded-full font-medium flex items-center justify-center gap-2 text-body hover:bg-white/20 transition-colors">
              {hero.secondaryCta}
              <ChevronDown className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>

        {/* Proof Bar */}
        <motion.div 
          initial="hidden" animate="visible" variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 max-w-4xl mx-auto"
        >
          {hero.stats.map((stat, i) => (
            <motion.div variants={fadeUp} key={i} className="text-center p-4 md:p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 flex flex-col justify-center">
              <div className="text-stat text-white mb-1 md:mb-2">{stat.value}</div>
              <div className="text-body-sm text-white/70">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
