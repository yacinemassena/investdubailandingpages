import { ArrowRight, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { homepageContent } from '../config';
import { fadeUp, staggerContainer } from './animations';

const { finalCta } = homepageContent;

export const FinalCTA = () => {
  return (
    <section className="py-12 md:py-20 bg-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent" />
      
      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-12 text-center relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          <motion.span variants={fadeUp} className="inline-block px-4 py-1.5 bg-brand-accent/20 text-brand-accent text-label rounded-full mb-6 border border-brand-accent/30">
            {finalCta.label}
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-h2 text-white mb-6">
            {finalCta.title}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-body-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            {finalCta.subtitle}
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://investdubai.my.smartcrowd.ae/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-brand-accent text-white px-6 md:px-8 py-3.5 md:py-4 rounded-full font-medium flex items-center justify-center gap-2 text-body hover:opacity-90 transition-opacity shadow-lg shadow-brand-accent/20">
              {finalCta.primaryCta} <ArrowRight className="w-5 h-5" />
            </a>
            <motion.a variants={fadeUp} href="https://calendly.com/acheffi/invest-dubai" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto border border-white/20 text-white px-6 md:px-8 py-3.5 md:py-4 rounded-full font-medium flex items-center justify-center gap-2 text-body hover:bg-white/5 transition-colors">
              <Phone className="w-4 h-4" />
              {finalCta.secondaryCta}
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
