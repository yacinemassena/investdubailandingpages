export const homepageContent = {
  nav: {
    links: [
      { label: 'The Opportunity', href: '#opportunity' },
      { label: 'How It Works', href: '/newhomepage/how-it-works' },
      { label: 'Investopedia', href: '/newhomepage/investopedia' },
      { label: 'Price Database', href: '/newhomepage/price-database' },
      { label: 'FAQ', href: '/newhomepage/faq' },
    ],
    loginText: 'Log In',
    ctaText: 'Create Your Account',
  },

  hero: {
    eyebrow: 'Regulated Real Estate Crowdfunding',
    headline: 'The most logical investment',
    headlineSecondLine: 'in real estate',
    subheadline: "Buy undervalued luxury villas in Dubai, renovate them, sell at market price. The gap between non-renovated and renovated is your return — and it's been there for years.",
    primaryCta: 'Create an Account',
    secondaryCta: 'See the opportunity',
    stats: [
      { value: '50+', label: 'Luxury villas flipped' },
      { value: '29%', label: 'Average historical payout' },
      { value: '6–18 mo', label: 'Typical project cycle' },
      { value: '0%', label: 'Debt used' },
    ],
  },

  opportunity: {
    label: 'The Opportunity',
    title: 'Non-renovated villas sell for 50% less than renovated ones',
    body: "In Dubai, villas in the same community with the same layout have consistent pricing. **Non-renovated properties trade at 35-60% less** than renovated ones. We buy non-renovated villas, renovate them, and sell at the renovated market price. **The price difference is your profit**.",
    pullQuote: 'We create value through redevelopment — not by betting on market growth. ',
    chart: {
      leftBarLabel: 'Non-renovated purchase price',
      rightBarLabel: 'Renovated sale price',
      gapLabel: 'The Gap = Your Return',
      gapValue: '+50%',
      gapSubtext: 'price differential',
      bottomText: 'Same villa type. Same community. Same size.',
      disclaimer: 'Illustrative. Based on comparable transactions in Palm Jumeirah, Jumeirah Islands, and Al Barari. Past performance is not indicative of future results.',
    },
    cta: 'Create an Account',
  },

  projectResults: {
    headline: '$130M+ In Profits Distributed',
    subheadline: '40 villas acquired, with over $130M in profits distributed already achieved and an average return of 74.17% on completed projects.',
    latestProjectsLabel: 'Latest Completed Projects',
    showMoreText: 'Show More',
    disclaimer: 'The annualized net returns are net of all fees and costs. Past performance is not indicative of future results. Investments involve risk and may result in partial or total loss of capital.',
    projects: [
      { id: 'Flip 32', investment: 'AED 24,670,000', selling: 'AED 34,680,000', roi: '41%', image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80' },
      { id: 'Flip 31', investment: 'AED 23,580,000', selling: 'AED 33,800,000', roi: '43%', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80' },
      { id: 'Flip 30', investment: 'AED 24,670,000', selling: 'AED 33,800,000', roi: '37%', image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80' },
      { id: 'Flip 29', investment: 'AED 24,343,000', selling: 'AED 34,000,000', roi: '40%', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80' },
      { id: 'Flip 28', investment: 'AED 24,670,000', selling: 'AED 35,000,000', roi: '42%', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80' },
      { id: 'Flip 27', investment: 'AED 24,670,000', selling: 'AED 35,000,000', roi: '42%', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80' },
      { id: 'Flip 26', investment: 'AED 23,580,000', selling: 'AED 33,000,000', roi: '40%', image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80' },
      { id: 'Flip 25', investment: 'AED 18,215,000', selling: 'AED 25,000,000', roi: '37%', image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80' },
    ],
  },

  whyGapExists: {
    label: 'Why The Gap Exists',
    title: 'Why luxury villas in Dubai work differently',
    subtitle: 'Dubai has unique characteristics that make this model possible:',
    cards: [
      {
        title: 'Standardized villa typologies',
        description: 'Dubai developers use identical floor plans within each community. A Garden Home in Jumeirah Islands is the same as every other Garden Home. This makes pricing transparent and predictable.',
        tag: 'Same layout = clean comparisons',
      },
      {
        title: 'Prime locations with aging stock',
        description: 'Palm Jumeirah, Jumeirah Islands, and Al Barari villas are 10-20 years old. Wealthy buyers want these addresses but prefer move-in-ready homes over renovation projects.',
        tag: 'High demand, limited renovated supply',
      },
      {
        title: 'Measurable renovation value',
        description: 'Because villa types are standardized, we can calculate exactly how much value a full renovation adds by comparing identical properties in the same community.',
        tag: 'Data-driven, not speculative',
      },
    ],
  },

  takeAction: {
    label: 'Investment Conditions',
    title: 'Investment structure',
    subtitle: 'Every project follows the same structure:',
    metrics: [
      { value: '15%', label: 'Priority return for investors', description: 'Paid first, before any profit split' },
      { value: '~20%', label: 'Target return per project', description: 'Based on acquisition analysis' },
      { value: '29%', label: 'Average historical payout', description: 'Across completed projects' },
      { value: '€1,000', label: 'Minimum investment', description: 'Accessible to retail investors' },
    ],
    primaryCta: 'Create an Account',
    secondaryCta: 'Book a Call',
    disclaimer: 'Capital at risk. Returns are not guaranteed and depend on property performance. Past results do not guarantee future performance. Invest Dubai operates through a regulated crowdfunding partner in the UAE.',
  },

  howItWorks: {
    label: 'Your Journey',
    title: 'How it works',
    steps: [
      { number: '01', title: 'Create Account', description: 'Sign up online and complete identity verification (KYC). Takes under 5 minutes.' },
      { number: '02', title: 'Choose a Project', description: 'Browse available villa projects. Review location, target return, timeline, and full details.' },
      { number: '03', title: 'Invest', description: 'Fund your wallet and invest from €1,000. A dedicated SPV is created — you become a co-owner.' },
      { number: '04', title: 'Watch It Happen', description: "Track the renovation with weekly updates. You can see exactly what's happening." },
      { number: '05', title: 'Get Paid', description: 'When the villa sells, your capital + profits are credited. Withdraw or reinvest in the next project.' },
    ],
    cta: 'Create an Account',
  },

  whyInvestDubai: {
    label: 'Why Invest Dubai',
    title: 'What makes Invest Dubai different',
    subtitle: 'We operate differently than other crowdfunding platforms.',
    trustPoints: [
      { title: 'We do the work ourselves', description: '**In-house architects, daily on-site supervision, controlled materials.** Greenbull has completed **50+ luxury villas** across Palm Jumeirah, Jumeirah Islands, and Al Barari.' },
      { title: 'You own the asset', description: "Each project sits in a **dedicated SPV**. You hold shares, the SPV holds the title deed. If anything happens to us, **the property is still yours**." },
      { title: 'Zero debt, zero leverage', description: '**100% cash acquisitions.** No bank loans, no interest exposure, no risk of forced liquidation. **Naturally Sharia-compliant.**' },
      { title: 'Fixed-cost renovation guarantee', description: '**Renovation budgets are locked upfront.** If we overspend on materials or labor, we absorb the cost — never the investors. Your capital is protected from construction overruns.' },
      { title: 'Full transparency', description: "Weekly Instagram story updates, YouTube documentation, visible properties. You see exactly what's happening at every stage — **nothing hidden behind closed doors**." },
      { title: 'Regulated structure', description: 'Invest Dubai operates through a **regulated crowdfunding partner under UAE law**, ensuring investor protections and compliance at every level.' },
    ],
    highlightCard: {
      stat: '50+',
      statLabel: 'Luxury villas flipped by our in-house team',
      features: [
        'Palm Jumeirah, Jumeirah Islands, Al Barari',
        'In-house architects & project managers',
        'Daily on-site supervision',
        'Full materials control',
      ],
      founders: 'Founded by Greenbull Group',
      company: 'Part of Greenbull Group',
    },
    alignedIncentives: {
      title: 'We only profit when you profit',
      description: "The team profits only when the villa sells at a gain — same as you. There's no management fee on your capital. We succeed when you succeed.",
    },
  },

  faq: {
    label: 'Frequently Asked',
    title: 'Common questions',
    subtitle: 'Have other questions? Book a call with our team.',
    cta: 'Book a Call',
    questions: [
      {
        question: 'Is Invest Dubai legal and regulated?',
        answer: "Yes, we operate with full legal compliance and transparency. Invest Dubai functions through a regulated crowdfunding partner that is fully licensed under UAE law. This ensures that our operations meet strict regulatory standards for investor protection.\n\nFurthermore, every single property project is held within its own dedicated Special Purpose Vehicle (SPV)—a separate legal entity that holds the official title deed.\n\nWhen you invest, you become a documented shareholder in that specific SPV, providing you with true equity ownership in the real estate asset rather than just a contractual promise.",
      },
      {
        question: 'What happens if Greenbull disappears?',
        answer: "Your investment is structurally insulated from our corporate health. Because each project sits in its own dedicated SPV (Special Purpose Vehicle), that independent legal entity holds the title deed to the villa.\n\nEven in the highly unlikely event that Greenbull Group or any of our operational partners became unavailable, the SPV—and your equity ownership stake within it—continues to exist legally and independently.\n\nThe property itself remains fully protected, and the shareholders would simply appoint a new management entity to complete the project and distribute the funds.",
      },
      {
        question: 'What if the Dubai market crashes?',
        answer: "Unlike traditional real estate investing, our model is not a speculative bet on market appreciation. We manufacture our own upside.\n\n• We acquire unrenovated properties at a steep discount (often 30-40% below market value).\n• We add immediate, tangible value through comprehensive high-end renovations.\n• We then sell at the new market price.\n\nThis intrinsic value-add creates a significant margin of safety. Even if the broader market experienced a 20-30% downturn, this buffer is designed to protect your initial capital. Additionally, because we use absolutely zero debt to fund our projects, there is no risk of forced liquidation by banks during a market dip.",
      },
      {
        question: 'How long is my money locked?',
        answer: "Real estate is inherently an illiquid asset class, and you should anticipate a typical project cycle of 6 to 18 months.\n\nThis timeline covers the entire process:\n• The initial legal acquisition of the property.\n• The intensive architectural renovation phase.\n• Marketing, staging, and the final sale and transfer to a new buyer.\n\nOnce the villa is sold and the funds clear escrow, your initial capital plus your share of the profits are credited directly to your digital wallet. From there, you have the full freedom to withdraw the funds to your bank account or reinvest them into the next available project.",
      },
      {
        question: 'Are the returns realistic?',
        answer: "Our returns are rooted in data, not speculation. The historical average payout across our completed projects has been 29%.\n\nFor every project, investors receive a 15% priority return—meaning you get paid your first 15% of profit before we take any performance fee. We typically target an overall return of ~20% per project.\n\nThese projections are calculated using hard data: strict acquisition prices, fixed renovation budgets, and recent comparable sales of identical renovated villas in the same community. However, please note that all investments carry risk, and past performance does not guarantee future results.",
      },
      {
        question: 'How does Invest Dubai make money?',
        answer: "We fundamentally believe in aligning our incentives with yours. We do not charge hidden management fees that drag down your capital while the property sits in renovation.\n\nInstead, we operate on a performance basis. We only profit when the villa successfully sells at a gain, and only after you have received your 15% priority return.\n\nOur share of the upside is calculated purely on the performance above that threshold. Simply put: if we don't deliver exceptional results for you, we don't earn a profit.",
      },
      {
        question: "What's the minimum investment?",
        answer: "We have structured Invest Dubai to heavily democratize access to ultra-luxury real estate that was previously reserved for institutional investors.\n\nYou can begin investing with approximately €1,000 (around 4,000 AED).\n\nAll investments on our platform are denominated in UAE Dirhams (AED), which is strictly pegged to the US Dollar (USD). This eliminates currency risk for USD investors, though European investors may experience minor, normal exchange rate fluctuations between the EUR and the USD/AED peg over the lifecycle of the project.",
      },
      {
        question: "What about taxes for French residents?",
        answer: "Under the France–UAE bilateral tax treaty, investment income (including dividends) from InvestDubai is taxable in your country of fiscal residence. Here's what applies to French investors:\n\n**Individual Investors:**\nReturns are classified as capital income and subject to the flat tax (PFU) of 30% by default. You may opt into the progressive income tax scale instead — consult your tax advisor.\n\n**Corporate Investors (SCI, SARL, SAS):**\nReturns fall under standard corporate tax rules. They're added to your company's overall taxable income and subject to standard IS rates (15% reduced / 25% standard).\n\n**Non-French Residents:**\nIf you're not a French tax resident, French tax law does not apply. You'll need to declare under the rules of your country of residence and any applicable treaty with the UAE.\n\nWe always recommend consulting a qualified tax advisor for your personal situation.",
      },
    ],
  },

  finalCta: {
    label: 'Ready?',
    title: 'Start investing',
    subtitle: "Create your account in 5 minutes. Browse projects and invest when you're ready.",
    primaryCta: 'Create an Account',
    secondaryCta: 'Book a Call',
    disclaimer: 'Capital at risk. Returns not guaranteed. Past performance is not indicative of future results.',
  },

  footer: {
    copyright: '© 2026 Invest Dubai. All rights reserved.',
    links: [
      { label: 'Terms', href: '#' },
      { label: 'Privacy', href: '#' },
      { label: 'Legal', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
};
