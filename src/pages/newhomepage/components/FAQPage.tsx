import { useState } from 'react';
import { ChevronDown, Search, Shield, Clock, TrendingUp, AlertTriangle, Settings, Rocket } from 'lucide-react';
import { GlobalNavbar } from '../../../components/GlobalNavbar';
import { GlobalFooter } from '../../../components/GlobalFooter';

const categories = [
  { id: 'security', label: 'Security & Ownership', icon: Shield },
  { id: 'returns', label: 'Returns & Fees', icon: TrendingUp },
  { id: 'timeline', label: 'Timeline & Liquidity', icon: Clock },
  { id: 'risk', label: 'Market & Risk', icon: AlertTriangle },
  { id: 'process', label: 'Process & Support', icon: Settings },
  { id: 'getting-started', label: 'Getting Started', icon: Rocket },
];

const faqItems = [
  // Security & Ownership
  { 
    category: 'security', 
    question: 'How do I know my money is safe?', 
    answer: "Your investment is protected through multiple structural safeguards:\n\n• First, we use an SPV (Special Purpose Vehicle) model, meaning your money buys equity in a dedicated legal entity that directly owns the property, not our corporate accounts.\n• Second, we operate under DIFC (Dubai International Financial Centre) regulation, which enforces strict governance based on English common law.\n• Third, your asset is completely segregated from company-level operations.\n• Finally, we use fixed-cost renovation contracts, ensuring that any unexpected renovation overruns are absorbed by us, never by your capital." 
  },
  { 
    category: 'security', 
    question: 'What exactly am I investing in?', 
    answer: "You are purchasing equity shares in a Special Purpose Vehicle (SPV) that acquires, completely renovates, and eventually sells a specific luxury villa in a prime Dubai community (such as Palm Jumeirah or Jumeirah Islands).\n\nYou are not buying into a vague fund or a blind pool of properties. Your investment is tied directly to a single, identifiable real estate asset, and you act as a legal co-owner of that specific entity until the property is successfully sold." 
  },
  { 
    category: 'security', 
    question: 'What is an SPV and why does it matter?', 
    answer: "A Special Purpose Vehicle (SPV) is an independent corporate entity set up for one specific objective: owning a single luxury villa.\n\nThis structure is critical for your security because it 'ring-fences' your investment. If the parent company were to face financial difficulties, the SPV remains entirely unaffected. The SPV still owns the villa, and you still own your shares in the SPV, ensuring your investment is completely isolated from external corporate risks." 
  },
  { 
    category: 'security', 
    question: 'Do I get a title deed?', 
    answer: "The official title deed, issued by the Dubai Land Department, is held in the name of the SPV. As an investor, you become a registered shareholder in that SPV.\n\nThis means you have legal, documented equity ownership of the entity that holds the property title, providing you with the exact same economic rights and legal protections as if your name were directly on the deed, but optimized for a digital structure." 
  },
  { 
    category: 'security', 
    question: 'What happens if Greenbull disappears?', 
    answer: "Your investment is completely insulated from Greenbull's corporate health through the SPV structure.\n\nBecause the SPV is a separate legal entity that directly owns the villa, a corporate failure at the management level would not erase your ownership. The shareholders of the SPV (you and the other investors) would retain full equity rights and could legally appoint a new management company to complete the sale of the asset and distribute the funds." 
  },
  { 
    category: 'security', 
    question: 'Is InvestDubai regulated?', 
    answer: "Yes, our operations fall under the regulatory framework of the DIFC (Dubai International Financial Centre).\n\nThe DIFC operates as an independent jurisdiction within Dubai, utilizing English common law. This provides international investors with a highly familiar, transparent, and robust legal environment, ensuring high standards of compliance, auditing, and legal recourse." 
  },
  { 
    category: 'security', 
    question: 'How do I verify this is legitimate?', 
    answer: "Transparency is our core principle. Your investment corresponds to a specific, physical villa that you can visit in person.\n\nWe have a verified track record of over 50 completed projects, $327M deployed, and a community of over 2,500 active investors. Furthermore, our parent company, Greenbull Group, is an established enterprise valued at €230M with over a decade of operational history, fully auditable and publicly verifiable." 
  },
  { 
    category: 'security', 
    question: 'What legal protections do I have?', 
    answer: "Your legal protections are multi-layered:\n\n• Equity ownership in an SPV recorded in official corporate registries.\n• The DIFC regulatory framework ensuring high compliance standards.\n• Jurisdiction under English common law, providing clear and predictable legal recourse.\n• Complete asset segregation, ensuring property cannot be leveraged or liquidated to cover management company debts." 
  },
  
  // Returns & Fees
  { 
    category: 'returns', 
    question: 'What returns can I expect?', 
    answer: "Our historical average return is approximately 20% net profit per project, typically achieved over a 12 to 18-month cycle.\n\nAcross our portfolio, individual projects have yielded returns ranging from 15% to 52%, heavily dependent on the specific acquisition price and market conditions at the time of sale. It is important to note that while we target these margins through deep value-add renovations, real estate carries inherent risk and past performance does not guarantee future results." 
  },
  { 
    category: 'returns', 
    question: 'How is profit calculated and distributed?', 
    answer: "The profit pool is calculated as: Final Sale Price minus (Original Purchase Price + Total Renovation Costs + Transaction Fees).\n\nWhen profits are distributed, our investors always get paid first. You receive a 15% priority return on your capital. Only after you have received this priority return do we split the remaining upside (typically 60% to investors, 40% to the platform).\n\nFunds are automatically credited to your investor wallet 2 to 4 weeks after the final sale closes." 
  },
  { 
    category: 'returns', 
    question: 'What fees does InvestDubai charge?', 
    answer: "We believe in complete alignment of incentives.\n\nThere are standard acquisition and structural fees clearly outlined before you invest, which cover legal setup and transaction costs. However, our primary revenue comes from performance fees: we take a share of the profits only after you have received your 15% priority return.\n\nThere are no hidden management fees dragging down your capital while the property is being renovated." 
  },
  { 
    category: 'returns', 
    question: 'What is the priority return?', 
    answer: "A priority return (or preferred return) is a structural mechanism designed to protect investors. It means that the first 15% of the profit generated by the property sale is allocated entirely to the investors.\n\nThe platform does not take a performance fee until this 15% threshold is met. This ensures that our team is highly motivated to maximize the sale price, as we only see significant profit when you achieve excellent returns." 
  },
  { 
    category: 'returns', 
    question: 'Are returns guaranteed?', 
    answer: "No. Any legitimate real estate investment carries risk, and returns are never legally guaranteed.\n\nHowever, we aggressively mitigate this risk through our business model: we buy properties significantly below market value (often 30-40% below renovated equivalents), add immediate tangible value through high-end renovations, and use zero debt (no leverage). This creates a strong margin of safety that protects your initial capital even if market conditions soften." 
  },
  { 
    category: 'returns', 
    question: 'How do I receive my profits?', 
    answer: "Once a renovated villa is sold and the legal transfer of the title deed is completed, the proceeds are released from escrow.\n\nWe then calculate the final accounting and distribute your initial capital plus your share of the profits directly to your secure InvestDubai digital wallet. This process typically takes 2 to 4 weeks post-sale.\n\nFrom your wallet, you can either withdraw the funds directly to your personal bank account or easily reinvest them into a new project." 
  },
  
  // Timeline & Liquidity
  { 
    category: 'timeline', 
    question: 'How long is my money locked?', 
    answer: "You should anticipate a standard project duration of 6 to 18 months.\n\nThis timeline encompasses the entire lifecycle: the initial legal acquisition, the comprehensive architectural renovation, staging, marketing, and the final sale to a new buyer. Because real estate is an illiquid asset class, you should only invest capital that you are comfortable committing for this entire duration. Currently, there is no secondary market for early exits." 
  },
  { 
    category: 'timeline', 
    question: 'Can I exit early if I need my money?', 
    answer: "At this time, there is no early exit mechanism or secondary market for your shares.\n\nOnce your capital is deployed into a project, it is fully committed to the SPV until the property is successfully renovated and sold. This structure is necessary to ensure the project remains fully funded and the renovation can be completed without interruption. We strongly advise only investing funds you will not need access to in the short term." 
  },
  { 
    category: 'timeline', 
    question: 'What affects project duration?', 
    answer: "The timeline is influenced by several real-world factors: the complexity of the specific renovation, supply chain logistics for high-end materials, the speed of government permit approvals, and prevailing market conditions when we list the property.\n\nOur primary goal is always to maximize your financial return, not to rush a sale to meet an arbitrary deadline. If waiting an extra month means securing a significantly higher sale price, we will hold out for the right buyer." 
  },
  { 
    category: 'timeline', 
    question: 'When do I get paid after a sale?', 
    answer: "After the buyer signs the final paperwork and the Dubai Land Department processes the title deed transfer, the funds are released.\n\nWe then perform a rigorous final audit of all project costs to accurately calculate the net profit. This administrative and settlement process typically takes between 2 to 4 weeks, after which your funds will appear as available in your digital wallet." 
  },
  { 
    category: 'timeline', 
    question: 'What happens if a project takes longer than expected?', 
    answer: "Delays can happen in real estate development due to unforeseen structural issues, permit delays, or shifting buyer demand.\n\nIf a project extends beyond our initial estimates, your capital remains securely backed by the physical property. We maintain complete transparency, providing you with detailed, regular updates on the delay's cause and our strategic adjustments. Again, our priority is securing the best possible sale price, even if it requires a longer holding period." 
  },
  
  // Market & Risk
  { 
    category: 'risk', 
    question: 'What happens if the market crashes?', 
    answer: "Our 'value-add' business model is specifically designed to provide a thick buffer against market downturns.\n\nBecause we acquire unrenovated properties at a steep discount (often 30-40% below their renovated market value) and add intrinsic value through construction, we create immediate equity.\n\nEven if the broader Dubai real estate market were to experience a 20-30% correction, this margin of safety typically protects the initial capital. Furthermore, by using absolutely zero debt, we eliminate the risk of forced liquidation by banks." 
  },
  { 
    category: 'risk', 
    question: 'What are the main risks?', 
    answer: "While we heavily mitigate risks, investors should be aware of:\n\n• General market declines that could lower the final sale price and compress profit margins.\n• Unforeseen renovation delays that extend the timeline of the investment.\n• Longer-than-anticipated holding periods while waiting for the right buyer.\n• Currency exchange fluctuations for investors not operating in AED or USD.\n• General macroeconomic factors affecting global real estate liquidity." 
  },
  { 
    category: 'risk', 
    question: 'How do you mitigate risk?', 
    answer: "We employ five core risk-mitigation strategies:\n\n• First, we strictly invest in prime, established communities (like Palm Jumeirah) with perpetual high demand.\n• Second, we focus on standardized villa layouts, allowing for highly accurate, data-driven pricing predictions.\n• Third, we secure deep value-add margins by buying severely unrenovated stock.\n• Fourth, we execute all acquisitions entirely in cash, taking on zero leverage.\n• Fifth, our short 6-18 month project cycles significantly limit exposure to long-term macroeconomic shifts." 
  },
  { 
    category: 'risk', 
    question: 'Is Dubai real estate stable?', 
    answer: "Dubai's prime real estate sector, particularly ultra-luxury villas, has matured significantly and demonstrated strong resilience.\n\nThe market benefits from severely limited new supply in established communities like Palm Jumeirah, sustained high demand from global High-Net-Worth Individuals migrating to the UAE, a highly favorable tax environment, and Dubai's growing reputation as a global safe haven. While all real estate markets have cycles, Dubai's structural fundamentals remain exceptionally strong." 
  },
  { 
    category: 'risk', 
    question: 'What if a renovation goes over budget?', 
    answer: "Budget overruns are a common risk in real estate, which is why we utilize a fixed-cost structural model.\n\nBecause Greenbull executes the renovations through its deeply integrated in-house teams and supply chains, the renovation cost to the SPV is fixed upfront. If the actual cost of materials or labor exceeds this fixed budget, the operational company absorbs the loss, not the investors. Your capital is shielded from construction cost volatility." 
  },
  { 
    category: 'risk', 
    question: 'Is there currency risk?', 
    answer: "All our property transactions and investments are denominated in the UAE Dirham (AED).\n\nThe AED is strictly pegged to the US Dollar (USD), meaning USD investors face zero currency risk. However, if you are investing with Euros (EUR) or another currency, you will be subject to normal exchange rate fluctuations between your home currency and the USD/AED peg over the 6-18 month lifecycle of the project. This can positively or negatively impact your localized return." 
  },
  
  // Process & Support
  { 
    category: 'process', 
    question: 'How do I get started?', 
    answer: "The process is entirely digital and streamlined:\n\n• First, create a free account on our platform in under two minutes.\n• Next, complete the mandatory KYC (Know Your Customer) identity verification, which typically takes 24 to 48 hours to approve.\n• Once verified, you can fund your digital wallet via bank transfer.\n• You are then free to browse available villa projects, review the detailed financial projections, and allocate your capital with a single click." 
  },
  { 
    category: 'process', 
    question: 'What is KYC and why is it required?', 
    answer: "KYC (Know Your Customer) is a strict regulatory requirement enforced by global financial authorities to prevent money laundering, fraud, and the financing of illicit activities.\n\nIt requires us to verify the legal identity of every investor on our platform by collecting a government-issued ID and proof of address. This process protects the integrity of the platform and ensures we remain fully compliant with international financial laws." 
  },
  { 
    category: 'process', 
    question: 'How do I fund my account?', 
    answer: "You can seamlessly fund your investor wallet via standard bank wire transfer or select card payment options.\n\nThe funds are held in a secure, segregated client account until you choose to allocate them into a specific property SPV. When you are ready to withdraw—either uninvested funds or profits from a successful sale—you can instantly request a transfer directly back to your linked personal bank account." 
  },
  { 
    category: 'process', 
    question: 'How will I stay updated on my investment?', 
    answer: "We reject the 'black box' approach to investing. You will receive an unprecedented level of transparency.\n\nWe provide weekly video updates via Instagram stories and YouTube documenting the raw, on-the-ground progress of your villa's renovation. Additionally, your investor dashboard provides real-time tracking of milestones, financial accounting, and official documentation. We want you to see exactly how your money is being put to work." 
  },
  { 
    category: 'process', 
    question: 'Can I visit the properties?', 
    answer: "Absolutely. Because you are investing in real, tangible assets, we welcome our investors to see the projects firsthand.\n\nIf you are visiting Dubai or reside locally, you can contact our investor relations team to arrange a guided site visit of the villa during its renovation phase. While most of our international investors rely entirely on our high-quality digital updates, the doors are always open." 
  },
  { 
    category: 'process', 
    question: 'Who should I contact with questions?', 
    answer: "Our dedicated Investor Success team is highly accessible.\n\nYou can reach out directly via email, use the live chat feature on our platform, or book a one-on-one video call through your dashboard at any time. Whether you need help understanding a specific project's financials or assistance navigating the platform, we are committed to providing personalized, human support at every stage of your investment journey." 
  },
  
  // Getting Started
  { 
    category: 'getting-started', 
    question: 'What is the minimum investment?', 
    answer: "We have structured our platform to heavily democratize access to ultra-luxury real estate.\n\nThe minimum investment is approximately 5,000 AED (roughly €1,250 or $1,360). This intentionally low threshold allows new investors to start small, thoroughly understand our model, experience the transparency of a full renovation cycle, and scale their portfolio upward as they build trust in our execution." 
  },
  { 
    category: 'getting-started', 
    question: 'Can I invest as a company?', 
    answer: "Yes, corporate entities (such as LLCs, holding companies, or family offices) are fully welcome to invest.\n\nThe process requires submitting KYB (Know Your Business) documentation, which includes certificates of incorporation and identifying the ultimate beneficial owners (UBOs). For corporate investors deploying significant capital, we also offer personalized consultations to discuss larger allocations and portfolio strategies." 
  },
  { 
    category: 'getting-started', 
    question: 'Should I start small or go big?', 
    answer: "For first-time users of our platform, we highly recommend starting with a smaller allocation.\n\nThis allows you to witness the entire operational lifecycle—from the initial investment, through the weekly construction updates, to the final sale and profit distribution—without over-committing. Once you have directly experienced a successful exit and understand the mechanics of the platform, you can confidently scale your investments based on your financial goals." 
  },
  { 
    category: 'getting-started', 
    question: 'How many projects can I invest in at once?', 
    answer: "There are absolutely no limits on the number of concurrent projects you can invest in.\n\nIn fact, many of our experienced investors actively diversify their capital across multiple villas at different stages of development. This strategy spreads out risk, mitigates the impact of any single project's potential delay, and creates a more consistent 'pipeline' of returning capital and profit distributions throughout the year." 
  }
];

export const FAQPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = faqItems.filter(item => {
    const matchesSearch = searchQuery === '' || 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === null || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-brand-bg">
      <GlobalNavbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <span className="section-label">Complete FAQ</span>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6 leading-tight">
            Every Question You Have Before Investing
          </h1>
          <p className="text-base md:text-lg text-brand-muted max-w-2xl mx-auto mb-12 leading-relaxed">
            Comprehensive answers covering security, returns, timeline, risks, and getting started. No vague answers, no marketing fluff — just honest information.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto mb-8">
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-brand-border rounded-full px-6 py-4 pl-14 text-brand-dark placeholder-brand-muted focus:outline-none focus:border-brand-accent/50 focus:ring-2 focus:ring-brand-accent/10 transition-all shadow-sm"
            />
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-muted" />
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === null
                  ? 'bg-brand-accent text-white shadow-md shadow-brand-accent/25'
                  : 'bg-white border border-brand-border text-brand-muted hover:border-brand-accent/30 hover:text-brand-dark'
              }`}
            >
              All Questions
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                  activeCategory === cat.id
                    ? 'bg-brand-accent text-white shadow-md shadow-brand-accent/25'
                    : 'bg-white border border-brand-border text-brand-muted hover:border-brand-accent/30 hover:text-brand-dark'
                }`}
              >
                <cat.icon className="w-4 h-4" />
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="mb-6 text-sm text-brand-muted">
            Showing {filteredFaqs.length} of {faqItems.length} questions
          </div>
          
          <div className="space-y-4">
            {filteredFaqs.map((faq, i) => (
              <div 
                key={i} 
                className="bg-white rounded-2xl border border-brand-border overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-3 pr-4">
                    <span className="font-medium text-brand-dark">{faq.question}</span>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 text-brand-muted flex-shrink-0 transition-transform duration-300 ${
                      openIndex === i ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === i ? 'max-h-[1000px]' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-5 text-brand-muted leading-relaxed border-t border-brand-border pt-4 whitespace-pre-line">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-16">
              <p className="text-brand-muted">No questions found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white border-t border-brand-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
            Still Have Questions?
          </h2>
          <p className="text-brand-muted mb-8 max-w-xl mx-auto">
            Book a call with our team for personalized answers, or create your account to explore available projects.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#" className="bg-brand-accent text-white px-8 py-4 rounded-full font-medium shadow-md shadow-brand-accent/25 hover:shadow-lg hover:-translate-y-0.5 transition-all">
              Create Your Free Account
            </a>
            <a href="#" className="border border-brand-border bg-white text-brand-dark px-8 py-4 rounded-full font-medium shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
              Book a Call
            </a>
          </div>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
};

export default FAQPage;
