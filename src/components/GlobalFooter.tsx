export const GlobalFooter = () => {
  return (
    <footer className="py-12 md:py-16 bg-[#0A0A0A] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
        {/* Centered Navigation Links */}
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-2 sm:gap-4 md:gap-6 text-body-sm text-gray-500 mb-6 md:mb-8">
          <div className="flex items-center gap-4 sm:gap-4 md:gap-6">
            <a href="/investopedia" className="hover:text-white transition-colors">Investopedia</a>
            <a href="/price-database" className="hover:text-white transition-colors">Price Database</a>
          </div>
          <div className="flex items-center gap-4 sm:gap-4 md:gap-6">
            <a href="/legal/terms-of-use" className="hover:text-white transition-colors">Terms</a>
            <a href="/legal/privacy-policy" className="hover:text-white transition-colors">Privacy</a>
            <a href="/legal/legal-information" className="hover:text-white transition-colors">Risk Disclaimer</a>
          </div>
          {/* <a href="/contact" className="hover:text-white transition-colors">Contact</a> */}
        </div>

        {/* Centered Copyright */}
        <div className="text-center">
          <span className="text-body text-gray-500">
            © 2026 InvestDubai
          </span>
        </div>

        {/* Risk Disclosure */}
        <div className="pt-6 md:pt-8 mt-6 md:mt-8 border-t border-white/10">
          <p className="text-[10px] text-gray-500 leading-relaxed mb-3 md:mb-4">
            <span className="text-gray-400">RISK WARNING:</span> Investments in real estate, including through crowdfunding platforms, involve risks, including the risk of partial or total loss of the invested capital and the risk of illiquidity. Past performance is not indicative of future results, and no return is guaranteed.
          </p>
          <p className="text-[10px] text-gray-500 leading-relaxed mb-3 md:mb-4">
            The information presented on this website is provided for strictly informational purposes only and does not constitute investment advice, a personal recommendation, or an offer or solicitation to invest. Before making any investment decision, you should conduct your own due diligence and, where appropriate, seek advice from an independent professional advisor.
          </p>
          <p className="text-[10px] text-gray-500 leading-relaxed mb-3 md:mb-4">
            For investments made through a crowdfunding platform, please refer to the relevant risk disclosure documentation available here: <a href="/legal/legal-information" className="text-gray-400 hover:text-white underline">key risk disclosure</a>.
          </p>
          <p className="text-[10px] text-gray-500 leading-relaxed">
            This website is for informational purposes only. Any projects presented (including past projects) are shown for illustrative purposes only. To create an account and access available investment opportunities, you must visit the platform operated by our partner SmartCrowd.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default GlobalFooter;
