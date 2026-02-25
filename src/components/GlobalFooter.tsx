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
              <li><a href="/newhomepage" className="text-gray-400 hover:text-white transition-colors">New Homepage</a></li>
              <li><a href="/newhomepage#opportunity" className="text-gray-400 hover:text-white transition-colors">The Opportunity</a></li>
              <li><a href="/newhomepage/how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="/newhomepage/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="/newhomepage/price-database" className="text-gray-400 hover:text-white transition-colors">Price Database</a></li>
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
              <li><a href="/newhomepage/investopedia" className="text-gray-400 hover:text-white transition-colors">All Articles</a></li>
              <li><a href="/newhomepage/investopedia?cat=getting-started" className="text-gray-400 hover:text-white transition-colors">Getting Started</a></li>
              <li><a href="/newhomepage/investopedia?cat=dubai-market" className="text-gray-400 hover:text-white transition-colors">Dubai Market</a></li>
              <li><a href="/newhomepage/investopedia?cat=legal-tax" className="text-gray-400 hover:text-white transition-colors">Legal & Tax</a></li>
              <li><a href="/newhomepage/investopedia?cat=strategy" className="text-gray-400 hover:text-white transition-colors">Strategy</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Risk Disclosure</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">SPV Structure</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
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
          <p className="text-xs text-gray-600 max-w-xl text-center md:text-right">
            Capital at risk. Returns not guaranteed. Past performance is not indicative of future results. InvestDubai operates through a regulated crowdfunding partner in the UAE.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default GlobalFooter;
