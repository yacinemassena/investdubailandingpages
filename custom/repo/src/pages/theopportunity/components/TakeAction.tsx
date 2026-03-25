import { ArrowRight, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { homepageContent } from '../config';
import { fadeUp, staggerContainer } from './animations';

const { takeAction } = homepageContent;

export const TakeAction = () => {
  return (
    <section className="py-16 md:py-24 bg-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-accent via-transparent to-transparent" />
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center max-w-3xl mx-auto mb-16">
          <motion.span variants={fadeUp} className="inline-block px-4 py-1.5 bg-white/10 text-white text-xs font-bold uppercase tracking-widest rounded-full mb-6 border border-white/20">
            {takeAction.label}
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
            {takeAction.title}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
            {takeAction.subtitle}
          </motion.p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {takeAction.metrics.map((metric, i) => (
            <motion.div variants={fadeUp} key={i} className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 text-center hover:bg-white/10 transition-colors duration-300">
              <div className="text-4xl md:text-5xl font-black text-brand-accent mb-3">{metric.value}</div>
              <div className="text-sm md:text-base font-bold text-white mb-2">{metric.label}</div>
              <div className="text-xs md:text-sm text-gray-400 leading-relaxed">{metric.description}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
          <motion.a variants={fadeUp} href="https://investdubai.my.smartcrowd.ae/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-brand-accent text-white px-6 md:px-8 py-3.5 md:py-4 rounded-full font-medium flex items-center justify-center gap-2 text-sm md:text-base hover:opacity-90 transition-opacity">
            {takeAction.primaryCta}
            <ArrowRight className="w-4 h-4" />
          </motion.a>
          <motion.a variants={fadeUp} href="https://investdubai.my.smartcrowd.ae/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto border border-white/20 text-white px-6 md:px-8 py-3.5 md:py-4 rounded-full font-medium flex items-center justify-center gap-2 text-sm md:text-base hover:bg-white/5 transition-colors">
            <Phone className="w-4 h-4" />
            {takeAction.secondaryCta}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
