export const GlobalFooter = () => {
  return (
    <footer className="py-12 md:py-16 bg-[#0A0A0A] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
        {/* Centered Navigation Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-xs md:text-sm text-gray-500 mb-6 md:mb-8">
          <a href="/investopedia" className="hover:text-white transition-colors">Investopedia</a>
          <a href="/price-database" className="hover:text-white transition-colors">Price Database</a>
          <a href="https://www.investdubai.com/legal/terms-of-use" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Terms</a>
          <a href="https://www.investdubai.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Privacy</a>
          <a href="https://www.investdubai.com/legal/legal-information" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Risk Disclaimer</a>
          <a href="/contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        {/* Centered Copyright */}
        <div className="text-center">
          <span className="text-sm text-gray-500">
            © 2026 InvestDubai
          </span>
        </div>

        {/* Risk Disclosure */}
        <div className="pt-6 md:pt-8 mt-6 md:mt-8 border-t border-white/10">
          <p className="text-[10px] md:text-[11px] text-gray-500 leading-relaxed mb-3 md:mb-4">
            <span className="font-semibold text-gray-400">RISK WARNING:</span> Investments in real estate, including through crowdfunding platforms, involve risks, including the risk of partial or total loss of the invested capital and the risk of illiquidity. Past performance is not indicative of future results, and no return is guaranteed.
          </p>
          <p className="text-[10px] md:text-[11px] text-gray-500 leading-relaxed mb-3 md:mb-4">
            The information presented on this website is provided for strictly informational purposes only and does not constitute investment advice, a personal recommendation, or an offer or solicitation to invest. Before making any investment decision, you should conduct your own due diligence and, where appropriate, seek advice from an independent professional advisor.
          </p>
          <p className="text-[10px] md:text-[11px] text-gray-500 leading-relaxed mb-3 md:mb-4">
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
