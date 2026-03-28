import { useState } from 'react';
import { ChevronDown, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { homepageContent } from '../config';
import { fadeUp, staggerContainer } from './animations';

const { faq } = homepageContent;

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Heading & CTA */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="lg:sticky lg:top-32 lg:self-start">
            <motion.span variants={fadeUp} className="section-label">{faq.label}</motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-brand-dark mb-6 tracking-tight leading-tight">
              {faq.title}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-brand-muted leading-relaxed mb-8 font-light">
              {faq.subtitle}
            </motion.p>
            <motion.a variants={fadeUp} href="https://investdubai.my.smartcrowd.ae/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto border-2 border-brand-border bg-white text-brand-dark px-8 py-4 rounded-full font-bold inline-flex items-center justify-center gap-2 hover:bg-brand-bg hover:border-brand-dark transition-all">
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
                  <span className="font-bold text-brand-dark pr-4 text-base md:text-lg">{item.question}</span>
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
                        {item.shortAnswer ? (
                          <p className="text-brand-dark font-bold leading-relaxed mb-3 whitespace-pre-line text-sm md:text-base">
                            {item.shortAnswer}
                          </p>
                        ) : null}
                        <p className="text-brand-muted leading-relaxed whitespace-pre-line text-sm md:text-base">
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
