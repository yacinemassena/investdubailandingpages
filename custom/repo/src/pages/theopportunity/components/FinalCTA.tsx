import { ArrowRight, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { homepageContent } from '../config';
import { fadeUp, staggerContainer } from './animations';

const { finalCta } = homepageContent;

export const FinalCTA = () => {
  return (
    <section className="py-20 md:py-32 bg-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent" />
      
      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-12 text-center relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          <motion.span variants={fadeUp} className="inline-block px-4 py-1.5 bg-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-widest rounded-full mb-6 border border-brand-accent/30">
            {finalCta.label}
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
            {finalCta.title}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto font-light">
            {finalCta.subtitle}
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://investdubai.my.smartcrowd.ae/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-brand-accent text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 text-base hover:opacity-90 transition-opacity shadow-lg shadow-brand-accent/20">
              {finalCta.primaryCta} <ArrowRight className="w-5 h-5" />
            </a>
            <a href="https://investdubai.my.smartcrowd.ae/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto border-2 border-white/20 text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 text-base hover:bg-white/10 transition-colors">
              <Phone className="w-5 h-5" /> {finalCta.secondaryCta}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
