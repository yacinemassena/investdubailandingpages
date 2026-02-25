import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import './index.css';
import ChatBubble from './components/ChatBubble';

import Page1 from './pages/page-01/Page';
import Page2 from './pages/page-02/Page';
import Page3 from './pages/page-03/Page';
import Page4 from './pages/page-04/Page';
import Page5 from './pages/page-05/Page';
import Page6 from './pages/page-06/Page';
import Page7 from './pages/page-07/Page';
import Page8 from './pages/page-08/Page';
import Page9 from './pages/page-09/Page';
import Page10 from './pages/page-10/Page';

import Page1V2 from './pages/page-01-v2/Page';
import Page2V2 from './pages/page-02-v2/Page';
import Page3V2 from './pages/page-03-v2/Page';
import Page4V2 from './pages/page-04-v2/Page';
import Page5V2 from './pages/page-05-v2/Page';
import Page6V2 from './pages/page-06-v2/Page';
import Page7V2 from './pages/page-07-v2/Page';
import Page8V2 from './pages/page-08-v2/Page';
import Page9V2 from './pages/page-09-v2/Page';
import Page10V2 from './pages/page-10-v2/Page';
import NewHomepage from './pages/newhomepage/Page';
import PriceDatabase from './pages/newhomepage/components/PriceDatabase';
import FAQPage from './pages/newhomepage/components/FAQPage';
import InvestopediaPage from './pages/newhomepage/components/InvestopediaPage';
import ArticlePage from './pages/newhomepage/components/ArticlePage';
import HowItWorksPage from './pages/newhomepage/components/HowItWorksPage';

import Homepage from './pages/homepage/Page';
import TheOpportunity from './pages/theopportunity/Page';
import OpportunityPriceDatabase from './pages/theopportunity/components/PriceDatabase';
import OpportunityFAQPage from './pages/theopportunity/components/FAQPage';
import OpportunityInvestopediaPage from './pages/theopportunity/components/InvestopediaPage';
import OpportunityArticlePage from './pages/theopportunity/components/ArticlePage';
import OpportunityHowItWorksPage from './pages/theopportunity/components/HowItWorksPage';

const DesignToggle = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isV2 = location.pathname.startsWith('/v2');
  
  const toggleDesign = () => {
    const currentPath = location.pathname;
    if (isV2) {
      const newPath = currentPath.replace('/v2/page/', '/page/');
      navigate(newPath);
    } else {
      const newPath = currentPath.replace('/page/', '/v2/page/');
      navigate(newPath);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex items-center gap-3 bg-white rounded-full shadow-2xl border border-zinc-200 px-4 py-3">
      <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">Design</span>
      <button
        onClick={toggleDesign}
        className={`relative w-14 h-7 rounded-full transition-all duration-300 ${
          isV2 ? 'bg-black' : 'bg-zinc-200'
        }`}
      >
        <div
          className={`absolute top-1 w-5 h-5 rounded-full bg-white shadow-md transition-all duration-300 ${
            isV2 ? 'left-8' : 'left-1'
          }`}
        />
      </button>
      <span className={`text-xs font-bold uppercase tracking-widest ${isV2 ? 'text-black' : 'text-zinc-400'}`}>
        {isV2 ? 'V2' : 'V1'}
      </span>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <ChatBubble />
      <Routes>
        <Route path="/" element={<Homepage />} />
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
        
        <Route path="/v2/page/1" element={<Page1V2 />} />
        <Route path="/v2/page/2" element={<Page2V2 />} />
        <Route path="/v2/page/3" element={<Page3V2 />} />
        <Route path="/v2/page/4" element={<Page4V2 />} />
        <Route path="/v2/page/5" element={<Page5V2 />} />
        <Route path="/v2/page/6" element={<Page6V2 />} />
        <Route path="/v2/page/7" element={<Page7V2 />} />
        <Route path="/v2/page/8" element={<Page8V2 />} />
        <Route path="/v2/page/9" element={<Page9V2 />} />
        <Route path="/v2/page/10" element={<Page10V2 />} />
        <Route path="/newhomepage" element={<NewHomepage />} />
        <Route path="/newhomepage/investopedia" element={<InvestopediaPage />} />
        <Route path="/newhomepage/investopedia/:slug" element={<ArticlePage />} />
        <Route path="/newhomepage/price-database" element={<PriceDatabase />} />
        <Route path="/newhomepage/faq" element={<FAQPage />} />
        <Route path="/newhomepage/how-it-works" element={<HowItWorksPage />} />
        
        {/* The Opportunity Page */}
        <Route path="/theopportunity" element={<TheOpportunity />} />
        <Route path="/theopportunity/investopedia" element={<OpportunityInvestopediaPage />} />
        <Route path="/theopportunity/investopedia/:slug" element={<OpportunityArticlePage />} />
        <Route path="/theopportunity/price-database" element={<OpportunityPriceDatabase />} />
        <Route path="/theopportunity/faq" element={<OpportunityFAQPage />} />
        <Route path="/theopportunity/how-it-works" element={<OpportunityHowItWorksPage />} />
      </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);
