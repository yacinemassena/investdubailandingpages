import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Opportunity } from './components/Opportunity';
import { ProjectResults } from './components/ProjectResults';
import { WhyGapExists } from './components/WhyGapExists';
import { TakeAction } from './components/TakeAction';
import { HowItWorks } from './components/HowItWorks';
import { WhyInvestDubai } from './components/WhyInvestDubai';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export default function Page() {
  return (
    <div className="min-h-screen bg-brand-bg">
      <Navbar />
      <main>
        <Hero />
        <Opportunity />
        <ProjectResults />
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
