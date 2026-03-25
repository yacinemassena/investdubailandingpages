import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Opportunity } from './components/Opportunity';
import { TrackRecordCarousel } from '../../components/TrackRecordCarousel';
import { WhyGapExists } from './components/WhyGapExists';
import { TakeAction } from './components/TakeAction';
import { HowItWorks } from './components/HowItWorks';
import { WhyInvestDubai } from './components/WhyInvestDubai';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { motion } from 'motion/react';
import { fadeUp, staggerContainer } from './components/animations';

export default function Page() {
  return (
    <div className="min-h-screen bg-brand-bg font-sans selection:bg-brand-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Opportunity />
        <section className="py-16 md:py-24 bg-[#0D0D0D] text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center max-w-4xl mx-auto mb-10 md:mb-16">
              <motion.span variants={fadeUp} className="inline-block px-4 py-1.5 bg-brand-accent/10 text-brand-accent text-xs font-bold uppercase tracking-widest rounded-full mb-6 border border-brand-accent/20">Track Record</motion.span>
              <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-white tracking-tight leading-tight">
                40+ villas acquired, renovated & sold
              </motion.h2>
              <motion.p variants={fadeUp} className="text-lg md:text-xl text-gray-400 leading-relaxed px-2 sm:px-0 font-light">
                Every project follows the same model: find undervalued villas in prime communities, renovate to modern standards, and sell at full market value. Below is a sample of completed exits.
              </motion.p>
            </motion.div>
          </div>
          <TrackRecordCarousel rows={2} showTitle={false} showExpandButton={true} />
        </section>
        <WhyGapExists />
        <TakeAction />
        <HowItWorks />
        <WhyInvestDubai />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
