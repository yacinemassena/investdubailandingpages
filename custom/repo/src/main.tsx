import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import ChatBubble from './components/ChatBubble';

import LP1 from './pages/page-01-v2/Page';
import LP2 from './pages/page-02-v2/Page';
import LP3 from './pages/page-03-v2/Page';
import LP4 from './pages/page-04-v2/Page';
import LP5 from './pages/page-05-v2/Page';
import LP6 from './pages/page-06-v2/Page';
import LP7 from './pages/page-07-v2/Page';
import LP8 from './pages/page-08-v2/Page';
import LP9 from './pages/page-09-v2/Page';
import LP10 from './pages/page-10-v2/Page';

import Homepage from './pages/theopportunity/Page';
import SmarterAlternative from './pages/homepage/Page';
import OpportunityPriceDatabase from './pages/theopportunity/components/PriceDatabase';
import OpportunityFAQPage from './pages/theopportunity/components/FAQPage';
import OpportunityHowItWorksPage from './pages/theopportunity/components/HowItWorksPage';
import OpportunityInvestopediaPage from './pages/theopportunity/components/InvestopediaPage';
import OpportunityArticlePage from './pages/theopportunity/components/ArticlePage';

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
        <Route path="/faq" element={<OpportunityFAQPage />} />
        <Route path="/investopedia" element={<OpportunityInvestopediaPage />} />
        <Route path="/investopedia/:slug" element={<OpportunityArticlePage />} />
        <Route path="/price-database" element={<OpportunityPriceDatabase />} />
        <Route path="/how-it-works" element={<OpportunityHowItWorksPage />} />
      </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);
