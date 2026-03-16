import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import ChatBubble from './components/ChatBubble';

import Page1 from './pages/page-01-v2/Page';
import Page2 from './pages/page-02-v2/Page';
import Page3 from './pages/page-03-v2/Page';
import Page4 from './pages/page-04-v2/Page';
import Page5 from './pages/page-05-v2/Page';
import Page6 from './pages/page-06-v2/Page';
import Page7 from './pages/page-07-v2/Page';
import Page8 from './pages/page-08-v2/Page';
import Page9 from './pages/page-09-v2/Page';
import Page10 from './pages/page-10-v2/Page';

import Homepage from './pages/homepage/Page';
import TheOpportunity from './pages/theopportunity/Page';
import OpportunityPriceDatabase from './pages/theopportunity/components/PriceDatabase';
import OpportunityFAQPage from './pages/theopportunity/components/FAQPage';
import OpportunityInvestopediaPage from './pages/theopportunity/components/InvestopediaPage';
import OpportunityArticlePage from './pages/theopportunity/components/ArticlePage';
import OpportunityHowItWorksPage from './pages/theopportunity/components/HowItWorksPage';

const App = () => {
  return (
    <BrowserRouter>
      <ChatBubble />
      <Routes>
        <Route path="/" element={<TheOpportunity />} />
        <Route path="/page/1" element={<Page1 />} />
        <Route path="/page/2" element={<Page2 />} />
        <Route path="/page/3" element={<Page3 />} />
        <Route path="/page/4" element={<Page4 />} />
        <Route path="/page/5" element={<Page5 />} />
        <Route path="/page/6" element={<Page6 />} />
        <Route path="/page/7" element={<Page7 />} />
        <Route path="/page/8" element={<Page8 />} />
        <Route path="/page/9" element={<Page9 />} />
        <Route path="/page/10" element={<Page10 />} />
        {/* Standalone pages */}
        <Route path="/theopportunity" element={<Homepage />} />
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
