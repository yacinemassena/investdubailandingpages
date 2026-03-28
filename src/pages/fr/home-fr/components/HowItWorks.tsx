import { useState } from 'react';
import { UserPlus, Search, Wallet, Eye, Banknote, ArrowRight, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { homepageContent } from '../config';
import { fadeUp, staggerContainer } from './animations';

const { howItWorks } = homepageContent;
const icons = [UserPlus, Search, Wallet, Eye, Banknote];

export const HowItWorks = () => {
  const [expandedStep, setExpandedStep] = useState<number | null>(0);

  return (
    <section id="how-it-works" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <motion.span variants={fadeUp} className="section-label">{howItWorks.label}</motion.span>
          <motion.h2 variants={fadeUp} className="text-h2 text-brand-dark mb-6">{howItWorks.title}</motion.h2>
        </motion.div>

        {/* Desktop View */}
        <div className="hidden lg:grid grid-cols-5 gap-6 mb-16">
          {howItWorks.steps.map((step, i) => {
            const Icon = icons[i];
            return (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                key={i} className="relative"
              >
                <div className="bg-brand-bg rounded-2xl p-6 border border-brand-border h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 bg-brand-accent-light rounded-xl flex items-center justify-center">
                      <Icon className="w-5 h-5 text-brand-accent" />
                    </div>
                    <span className="text-label text-brand-muted">ÉTAPE {step.number}</span>
                  </div>
                  <h3 className="text-h4 text-brand-dark mb-2">{step.title}</h3>
                  <p className="text-body-sm text-brand-muted">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile View (Accordion) */}
        <div className="lg:hidden space-y-3 mb-10">
          {howItWorks.steps.map((step, i) => {
            const Icon = icons[i];
            const isExpanded = expandedStep === i;
            return (
              <div 
                key={i} 
                className={`bg-brand-bg rounded-2xl border transition-colors duration-300 overflow-hidden ${isExpanded ? 'border-brand-accent/30 shadow-md' : 'border-brand-border'}`}
              >
                <button 
                  onClick={() => setExpandedStep(isExpanded ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${isExpanded ? 'bg-brand-accent text-white' : 'bg-brand-accent-light text-brand-accent'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-label text-brand-muted block mb-0.5">ÉTAPE {step.number}</span>
                      <h3 className="text-h4 text-brand-dark">{step.title}</h3>
                    </div>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-brand-muted transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 pb-5 pt-1 pl-[72px]">
                        <p className="text-body-sm text-brand-muted">{step.description}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
          <motion.a variants={fadeUp} href="https://investdubai.my.smartcrowd.ae/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-brand-accent text-white px-6 md:px-8 py-3.5 md:py-4 rounded-full font-medium inline-flex items-center justify-center gap-2 text-body hover:opacity-90 transition-opacity">
            {howItWorks.cta}
            <ArrowRight className="w-4 h-4" />
          </motion.a>
          <motion.a variants={fadeUp} href="/how-it-works" className="w-full sm:w-auto border border-brand-border bg-brand-surface text-brand-dark px-6 md:px-8 py-3.5 md:py-4 rounded-full font-medium inline-flex items-center justify-center gap-2 text-body hover:bg-brand-bg transition-colors">
            Voir le processus complet
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
