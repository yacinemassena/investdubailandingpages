import { GlobalNavbar } from '../../components/GlobalNavbar';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { TrackRecord } from './components/TrackRecord';
import { Guarantees } from './components/Guarantees';
import { WhyUs } from './components/WhyUs';
import { WhoIsItFor } from './components/WhoIsItFor';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-dark">
      <GlobalNavbar darkUntilScroll />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <TrackRecord />
        <Guarantees />
        <WhyUs />
        <WhoIsItFor />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
