import { Navbar, Hero, Opportunity, ProjectResults, WhyGapExists, TakeAction, HowItWorks, WhyInvestDubai, FAQ, FinalCTA, Footer } from '../../components/landing';
import { pageContent } from './newconfig';

export default function Page() {
  return (
    <div className="min-h-screen bg-brand-bg">
      <Navbar links={pageContent.nav.links} loginText={pageContent.nav.loginText} ctaText={pageContent.nav.ctaText} />
      <main>
        <Hero {...pageContent.hero} />
        <Opportunity {...pageContent.opportunity} />
        <ProjectResults {...pageContent.projectResults} />
        <WhyGapExists {...pageContent.whyGapExists} />
        <TakeAction {...pageContent.takeAction} />
        <HowItWorks {...pageContent.howItWorks} />
        <WhyInvestDubai {...pageContent.whyInvestDubai} />
        <FAQ {...pageContent.faq} />
        <FinalCTA {...pageContent.finalCta} />
      </main>
      <Footer {...pageContent.footer} />
    </div>
  );
}
