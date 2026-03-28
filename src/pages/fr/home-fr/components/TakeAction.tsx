import { ArrowRight, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { homepageContent } from '../config';
import { fadeUp, staggerContainer } from './animations';

const { takeAction } = homepageContent;

export const TakeAction = () => {
  return (
    <section className="py-12 md:py-20 bg-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-accent via-transparent to-transparent" />
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center max-w-3xl mx-auto mb-16">
          <motion.span variants={fadeUp} className="inline-block px-4 py-1.5 bg-white/10 text-white text-label rounded-full mb-6 border border-white/20">
            {takeAction.label}
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-h2 text-white mb-6">
            {takeAction.title}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-body-lg text-gray-300">
            {takeAction.subtitle}
          </motion.p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {takeAction.metrics.map((metric, i) => (
            <motion.div variants={fadeUp} key={i} className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 text-center hover:bg-white/10 transition-colors duration-300">
              <div className="text-stat text-brand-accent mb-3">{metric.value}</div>
              <div className="text-body text-white mb-2">{metric.label}</div>
              <div className="text-body-sm text-gray-400">{metric.description}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
          <motion.a variants={fadeUp} href="https://investdubai.my.smartcrowd.ae/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-brand-accent text-white px-6 md:px-8 py-3.5 md:py-4 rounded-full font-medium flex items-center justify-center gap-2 text-body hover:opacity-90 transition-opacity">
            {takeAction.ctaText}
            <ArrowRight className="w-4 h-4" />
          </motion.a>
          <motion.a variants={fadeUp} href="https://calendly.com/acheffi/invest-dubai" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto border border-white/20 text-white px-6 md:px-8 py-3.5 md:py-4 rounded-full font-medium flex items-center justify-center gap-2 text-body hover:bg-white/5 transition-colors">
            <Phone className="w-4 h-4" />
            {takeAction.secondaryCtaText}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
