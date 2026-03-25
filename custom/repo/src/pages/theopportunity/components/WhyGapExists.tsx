import { Grid3x3, MapPin, LineChart, ArrowRight, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { homepageContent } from '../config';
import { fadeUp, staggerContainer } from './animations';

const { whyGapExists } = homepageContent;
const icons = [Grid3x3, MapPin, LineChart];

export const WhyGapExists = () => {
  return (
    <section className="py-16 md:py-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center max-w-3xl mx-auto mb-16">
          <motion.span variants={fadeUp} className="section-label">{whyGapExists.label}</motion.span>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-brand-dark mb-6 tracking-tight leading-tight">
            {whyGapExists.title}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg md:text-xl text-brand-muted leading-relaxed font-light">
            {whyGapExists.subtitle}
          </motion.p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-12">
          {whyGapExists.cards.map((card, i) => {
            const Icon = icons[i];
            return (
              <motion.div variants={fadeUp} key={i} className="bg-white rounded-3xl p-8 md:p-10 border border-brand-border hover:border-brand-accent/30 transition-all duration-300 hover:shadow-xl text-center h-full flex flex-col group">
                <div className="flex justify-center mb-6 md:mb-8">
                  <div className="w-16 h-16 bg-brand-bg group-hover:bg-brand-accent-light rounded-2xl flex items-center justify-center transition-colors duration-300">
                    <Icon className="w-8 h-8 text-brand-accent" />
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-brand-dark mb-4 leading-tight">{card.title}</h3>
                <p className="text-brand-muted leading-relaxed mb-8 text-sm md:text-base flex-1">{card.description}</p>
                <div className="inline-block bg-brand-bg group-hover:bg-brand-accent/10 text-brand-dark group-hover:text-brand-accent text-xs font-bold px-4 py-2 rounded-full border border-brand-border group-hover:border-brand-accent/20 transition-colors duration-300">
                  {card.tag}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
          <motion.a variants={fadeUp} href="https://investdubai.my.smartcrowd.ae/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-brand-accent text-white px-6 md:px-8 py-3.5 md:py-4 rounded-full font-medium inline-flex items-center justify-center gap-2 text-sm md:text-base hover:opacity-90 transition-opacity">
            Create an Account
            <ArrowRight className="w-4 h-4" />
          </motion.a>
          <motion.a variants={fadeUp} href="https://investdubai.my.smartcrowd.ae/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto border border-brand-border bg-brand-surface text-brand-dark px-6 md:px-8 py-3.5 md:py-4 rounded-full font-medium inline-flex items-center justify-center gap-2 text-sm md:text-base hover:bg-brand-bg transition-colors">
            <Phone className="w-4 h-4" />
            Book a Call
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
