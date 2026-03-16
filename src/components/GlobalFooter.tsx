import Logo from '../assets/logo.svg';

export const GlobalFooter = () => {
  return (
    <footer className="py-16 bg-[#0A0A0A] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Homepage */}
          <div>
            <h4 className="text-white font-semibold mb-4">Homepage</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="/theopportunity" className="text-gray-400 hover:text-white transition-colors">The Opportunity</a></li>
              <li><a href="/how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="/price-database" className="text-gray-400 hover:text-white transition-colors">Price Database</a></li>
            </ul>
          </div>

          {/* Landing Pages */}
          <div>
            <h4 className="text-white font-semibold mb-4">Landing Pages</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/page/1" className="text-gray-400 hover:text-white transition-colors">Page 1</a></li>
              <li><a href="/page/2" className="text-gray-400 hover:text-white transition-colors">Page 2</a></li>
              <li><a href="/page/3" className="text-gray-400 hover:text-white transition-colors">Page 3</a></li>
              <li><a href="/page/4" className="text-gray-400 hover:text-white transition-colors">Page 4</a></li>
              <li><a href="/page/5" className="text-gray-400 hover:text-white transition-colors">Page 5</a></li>
              <li><a href="/v2/page/1" className="text-gray-400 hover:text-white transition-colors">V2 Pages →</a></li>
            </ul>
          </div>

          {/* Investopedia */}
          <div>
            <h4 className="text-white font-semibold mb-4">Investopedia</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/investopedia" className="text-gray-400 hover:text-white transition-colors">All Articles</a></li>
              <li><a href="/investopedia?cat=getting-started" className="text-gray-400 hover:text-white transition-colors">Getting Started</a></li>
              <li><a href="/investopedia?cat=dubai-market" className="text-gray-400 hover:text-white transition-colors">Dubai Market</a></li>
              <li><a href="/investopedia?cat=legal-tax" className="text-gray-400 hover:text-white transition-colors">Legal & Tax</a></li>
              <li><a href="/investopedia?cat=strategy" className="text-gray-400 hover:text-white transition-colors">Strategy</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://www.investdubai.com/legal/terms-of-use" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Terms of Use</a></li>
              <li><a href="https://www.investdubai.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="https://www.investdubai.com/legal/cookie-policy" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="https://www.investdubai.com/legal/legal-information" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Legal Information</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img src={Logo} alt="InvestDubai" className="h-5 brightness-0 invert" />
            <span className="text-sm text-gray-500">
              © 2026 InvestDubai. All rights reserved.
            </span>
          </div>
        </div>

        {/* Risk Disclosure */}
        <div className="pt-8 mt-8 border-t border-white/10">
          <p className="text-[11px] text-gray-500 leading-relaxed mb-4">
            <span className="font-semibold text-gray-400">RISK WARNING:</span> Investments in real estate, including through crowdfunding platforms, involve risks, including the risk of partial or total loss of the invested capital and the risk of illiquidity. Past performance is not indicative of future results, and no return is guaranteed.
          </p>
          <p className="text-[11px] text-gray-500 leading-relaxed mb-4">
            The information presented on this website is provided for strictly informational purposes only and does not constitute investment advice, a personal recommendation, or an offer or solicitation to invest. Before making any investment decision, you should conduct your own due diligence and, where appropriate, seek advice from an independent professional advisor.
          </p>
          <p className="text-[11px] text-gray-500 leading-relaxed mb-4">
            For investments made through a crowdfunding platform, please refer to the relevant risk disclosure documentation available here: <a href="https://www.investdubai.com/legal/legal-information" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white underline">key risk disclosure</a>.
          </p>
          <p className="text-[11px] text-gray-500 leading-relaxed">
            This website is for informational purposes only. Any projects presented (including past projects) are shown for illustrative purposes only. To create an account and access available investment opportunities, you must visit the platform operated by our partner SmartCrowd.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default GlobalFooter;
