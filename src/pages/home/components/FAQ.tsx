import { useState } from 'react';
import { ChevronDown, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { homepageContent } from '../config';
import { fadeUp, staggerContainer } from './animations';

const { faq } = homepageContent;

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Heading & CTA */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="lg:sticky lg:top-32 lg:self-start">
            <motion.span variants={fadeUp} className="section-label">{faq.label}</motion.span>
            <motion.h2 variants={fadeUp} className="text-h2 text-brand-dark mb-6">
              {faq.title}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-brand-muted mb-8">
              {faq.subtitle}
            </motion.p>
            <motion.a variants={fadeUp} href="https://calendly.com/acheffi/invest-dubai" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto border border-brand-border bg-brand-surface text-brand-dark px-6 md:px-8 py-3.5 md:py-4 rounded-full font-medium inline-flex items-center justify-center gap-2 hover:bg-brand-bg transition-all">
              <Phone className="w-5 h-5" /> {faq.cta}
            </motion.a>
          </motion.div>

          {/* Right Column - Accordion */}
          <div className="space-y-4">
            {faq.questions.map((item, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={i} 
                className="bg-brand-bg rounded-2xl border border-brand-border overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-black/5 transition-colors"
                >
                  <span className="text-h4 text-brand-dark pr-4">{item.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-brand-muted flex-shrink-0 transition-transform duration-300 ${
                      openIndex === i ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 space-y-4">
                        <p className="text-body text-brand-muted whitespace-pre-line">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
