import { ArrowRight, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { homepageContent } from '../config';
import { fadeUp, staggerContainer } from './animations';

const { opportunity } = homepageContent;

export const Opportunity = () => {
  return (
    <section id="opportunity" className="py-12 md:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            <motion.span variants={fadeUp} className="section-label">{opportunity.label}</motion.span>
            <motion.h2 variants={fadeUp} className="text-h2 text-brand-dark mb-6">
              {opportunity.title}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg text-brand-muted mb-6 whitespace-pre-line">
              {opportunity.body.split('**').map((part, i) => 
                i % 2 === 0 ? part : <strong key={i} className="font-bold text-brand-dark">{part}</strong>
              )}
            </motion.p>
            <motion.p variants={fadeUp} className="text-h3 text-brand-dark mb-8">
              {opportunity.pullQuote}
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-3 md:gap-4">
              <motion.a variants={fadeUp} href="https://investdubai.my.smartcrowd.ae/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-brand-accent text-white px-6 md:px-8 py-3.5 md:py-4 rounded-full font-medium inline-flex items-center justify-center gap-2 text-body hover:opacity-90 transition-opacity">
                {opportunity.cta}
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a variants={fadeUp} href="https://calendly.com/acheffi/invest-dubai" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto border border-brand-border bg-brand-surface text-brand-dark px-6 md:px-8 py-3.5 md:py-4 rounded-full font-medium inline-flex items-center justify-center gap-2 text-body hover:bg-brand-bg transition-colors">
                <Phone className="w-4 h-4" />
                Book a Call
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Bar Comparison Chart */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-brand-bg rounded-2xl md:rounded-3xl p-6 md:p-10 border border-brand-border shadow-sm relative"
          >
            {/* Gap Indicator - Above Chart */}
            <div className="mb-6 text-center relative z-10">
              <div className="inline-block bg-white border-2 border-dashed border-brand-accent/30 rounded-xl md:rounded-2xl px-6 md:px-10 py-5 md:py-8 shadow-lg transform -translate-y-12">
                <div className="text-stat text-brand-accent mb-1 md:mb-2">
                  {opportunity.chart.gapValue}
                </div>
                <div className="text-label text-brand-dark">
                  {opportunity.chart.gapSubtext}
                </div>
              </div>
              <div className="-mt-8">
                <span className="inline-block bg-brand-accent text-white text-label px-6 py-2.5 rounded-full shadow-lg shadow-brand-accent/20">
                  {opportunity.chart.gapLabel}
                </span>
              </div>
            </div>

            {/* Bar Chart Container */}
            <div className="mb-8 mt-4">
              <div className="relative h-[200px] md:h-[280px] flex items-end justify-center gap-6 md:gap-12">
                {/* Left Bar - Non-renovated */}
                <div className="flex flex-col items-center w-24 md:w-32">
                  <span className="text-label text-brand-muted mb-3">ACHAT</span>
                  <motion.div 
                    initial={{ height: 0 }} whileInView={{ height: '85px' }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }}
                    className="w-full bg-gray-200 rounded-t-xl border border-gray-300"
                  />
                </div>

                {/* Right Bar - Renovated */}
                <div className="flex flex-col items-center w-24 md:w-32">
                  <span className="text-label text-brand-accent mb-3">VENTE</span>
                  <motion.div 
                    initial={{ height: 0 }} whileInView={{ height: '180px' }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.4 }}
                    className="w-full bg-brand-accent rounded-t-xl border border-brand-accent shadow-[0_0_30px_rgba(5,150,105,0.3)]"
                  />
                </div>
              </div>
              
              {/* Aligned Labels Container */}
              <div className="flex justify-center gap-6 md:gap-12 mt-4">
                <div className="w-24 md:w-32 text-center">
                  <p className="text-body text-brand-muted leading-tight">
                    {opportunity.chart.leftBarLabel}
                  </p>
                </div>
                <div className="w-24 md:w-32 text-center">
                  <p className="text-body text-brand-muted leading-tight">
                    {opportunity.chart.rightBarLabel}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Text */}
            <p className="text-center text-body text-brand-dark">
              {opportunity.chart.bottomText}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
