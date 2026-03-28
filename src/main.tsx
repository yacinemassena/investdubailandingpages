import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import ChatBubble from './components/ChatBubble';

import LP1 from './pages/landing-pages/lp-01/Page';
import LP2 from './pages/landing-pages/lp-02/Page';
import LP3 from './pages/landing-pages/lp-03/Page';
import LP4 from './pages/landing-pages/lp-04/Page';
import LP5 from './pages/landing-pages/lp-05/Page';
import LP6 from './pages/landing-pages/lp-06/Page';
import LP7 from './pages/landing-pages/lp-07/Page';
import LP8 from './pages/landing-pages/lp-08/Page';
import LP9 from './pages/landing-pages/lp-09/Page';
import LP10 from './pages/landing-pages/lp-10/Page';

import Homepage from './pages/home/Page';
import SmarterAlternative from './pages/smarter-alternative/Page';
import PriceDatabase from './pages/price-database/Page';
import FAQPage from './pages/faq/Page';
import HowItWorksPage from './pages/how-it-works/Page';
import InvestopediaPage from './pages/investopedia/Page';
import ArticlePage from './pages/investopedia/ArticlePage';
import ContactPage from './pages/contact/Page';
import LegalInformationPage from './pages/legal/legal-information/Page';
import PrivacyPolicyPage from './pages/legal/privacy-policy/Page';
import TermsOfUsePage from './pages/legal/terms-of-use/Page';

// French pages
import HomepageFr from './pages/fr/home-fr/Page';
import SmarterAlternativeFr from './pages/fr/smarter-alternative-fr/Page';
import PriceDatabaseFr from './pages/fr/price-database-fr/Page';
import FAQPageFr from './pages/fr/faq-fr/Page';
import HowItWorksPageFr from './pages/fr/how-it-works-fr/Page';
import ContactPageFr from './pages/fr/contact-fr/Page';
import LegalInformationPageFr from './pages/fr/legal-fr/legal-information/Page';
import PrivacyPolicyPageFr from './pages/fr/legal-fr/privacy-policy/Page';
import TermsOfUsePageFr from './pages/fr/legal-fr/terms-of-use/Page';

const App = () => {
  return (
    <BrowserRouter>
      <ChatBubble />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/lp/1" element={<LP1 />} />
        <Route path="/lp/2" element={<LP2 />} />
        <Route path="/lp/3" element={<LP3 />} />
        <Route path="/lp/4" element={<LP4 />} />
        <Route path="/lp/5" element={<LP5 />} />
        <Route path="/lp/6" element={<LP6 />} />
        <Route path="/lp/7" element={<LP7 />} />
        <Route path="/lp/8" element={<LP8 />} />
        <Route path="/lp/9" element={<LP9 />} />
        <Route path="/lp/10" element={<LP10 />} />
        {/* Standalone pages */}
        <Route path="/smarteralternative" element={<SmarterAlternative />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/investopedia" element={<InvestopediaPage />} />
        <Route path="/investopedia/:slug" element={<ArticlePage />} />
        <Route path="/price-database" element={<PriceDatabase />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/legal/legal-information" element={<LegalInformationPage />} />
        <Route path="/legal/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/legal/terms-of-use" element={<TermsOfUsePage />} />
        {/* French routes */}
        <Route path="/fr" element={<HomepageFr />} />
        <Route path="/fr/smarteralternative" element={<SmarterAlternativeFr />} />
        <Route path="/fr/faq" element={<FAQPageFr />} />
        <Route path="/fr/price-database" element={<PriceDatabaseFr />} />
        <Route path="/fr/how-it-works" element={<HowItWorksPageFr />} />
        <Route path="/fr/contact" element={<ContactPageFr />} />
        <Route path="/fr/legal/legal-information" element={<LegalInformationPageFr />} />
        <Route path="/fr/legal/privacy-policy" element={<PrivacyPolicyPageFr />} />
        <Route path="/fr/legal/terms-of-use" element={<TermsOfUsePageFr />} />
      </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);
