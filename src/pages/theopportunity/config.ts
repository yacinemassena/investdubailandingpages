import { numbersDictionary as d } from '../../content/numbersDictionary';

export const homepageContent = {
  nav: {
    links: [
      { label: 'The Opportunity', href: '/theopportunity' },
      { label: 'How It Works', href: '/how-it-works' },
      { label: 'Price Database', href: '/price-database' },
      { label: 'FAQ', href: '/faq' },
    ],
    loginText: 'Log In',
    ctaText: 'Create Your Account',
  },

  hero: {
    eyebrow: 'Regulated access to Dubai luxury villa flips',
    headline: 'Capture the value gap in Dubai’s luxury villa market',
    headlineSecondLine: '',
    subheadline:
      'We acquire undervalued villas in prime communities, renovate them to premium standards, and sell at full market value. The difference between outdated and move-in-ready is where returns are created.',
    primaryCta: 'Create an Account',
    secondaryCta: 'See the Opportunity',
    stats: [
      { value: d.villasAcquired.value, label: d.villasAcquired.label },
      { value: d.historicalInvestorPayout.value, label: d.historicalInvestorPayout.label },
      { value: d.typicalHoldPeriod.value, label: d.typicalHoldPeriod.label },
      { value: d.leverageUsed.value, label: d.leverageUsed.label },
    ],
  },

  opportunity: {
    label: 'The Opportunity',
    title: 'In Dubai’s prime villa communities, renovation can unlock 35–60% of hidden value',
    body: 'In the same community, villas with the same layout can trade at materially different prices depending on condition. We acquire outdated properties, renovate them to premium standards, and sell at the renovated market price.',
    pullQuote: 'We create value through redevelopment, not by betting on market growth.',
    chart: {
      leftLabel: 'Acquisition',
      rightLabel: 'Exit',
      leftBarLabel: 'Below renovated market value',
      rightBarLabel: 'Sold at full market value',
      gapLabel: 'The value gap creates the upside',
      gapValue: '+50%',
      gapSubtext: 'typical price gap',
      bottomText: 'Same villa type. Same community. Same footprint.',
      disclaimer: 'Illustrative. Based on comparable transactions in Palm Jumeirah, Jumeirah Islands, and Al Barari.',
    },
    cta: 'Create an Account',
  },

  projectResults: {
    headline: 'A track record built on realized exits',
    subheadline: `Our performance is based on completed villa flips, not paper projections. Completed exits have delivered an average project ROI of ${d.averageProjectROI.value}. Explore recent exits and realized returns across finished projects.`,
    latestProjectsLabel: 'Latest completed projects',
    latestProjectsSubcopy: 'Realized performance from recent luxury villa flips',
    showMoreText: 'Show More',
    disclaimer: 'The annualized net returns are net of all fees and costs.',
    projects: [
      { id: 'Flip 32', investment: 'AED 24,670,000', selling: 'AED 34,680,000', roi: '41%', image: 'https://pub-46bf43f4e0fb4daab5a13e7a41223da4.r2.dev/images/flip-32.jpg' },
      { id: 'Flip 31', investment: 'AED 23,580,000', selling: 'AED 33,800,000', roi: '43%', image: 'https://pub-46bf43f4e0fb4daab5a13e7a41223da4.r2.dev/images/flip-31.jpg' },
      { id: 'Flip 30', investment: 'AED 24,670,000', selling: 'AED 33,800,000', roi: '37%', image: 'https://pub-46bf43f4e0fb4daab5a13e7a41223da4.r2.dev/images/flip-30.jpg' },
      { id: 'Flip 29', investment: 'AED 24,343,000', selling: 'AED 34,000,000', roi: '40%', image: 'https://pub-46bf43f4e0fb4daab5a13e7a41223da4.r2.dev/images/flip-29.jpg' },
      { id: 'Flip 28', investment: 'AED 24,670,000', selling: 'AED 35,000,000', roi: '42%', image: 'https://pub-46bf43f4e0fb4daab5a13e7a41223da4.r2.dev/images/flip-28.jpg' },
      { id: 'Flip 27', investment: 'AED 24,670,000', selling: 'AED 35,000,000', roi: '42%', image: 'https://pub-46bf43f4e0fb4daab5a13e7a41223da4.r2.dev/images/flip-27.jpg' },
      { id: 'Flip 26', investment: 'AED 23,580,000', selling: 'AED 33,000,000', roi: '40%', image: 'https://pub-46bf43f4e0fb4daab5a13e7a41223da4.r2.dev/images/flip-26.jpg' },
      { id: 'Flip 25', investment: 'AED 18,215,000', selling: 'AED 25,000,000', roi: '37%', image: 'https://pub-46bf43f4e0fb4daab5a13e7a41223da4.r2.dev/images/flip-25.jpg' },
    ],
  },

  whyGapExists: {
    label: 'Why The Gap Exists',
    title: 'Why this opportunity exists in Dubai',
    subtitle: 'Dubai’s prime villa market has structural characteristics that make this strategy measurable and repeatable.',
    cards: [
      {
        title: 'Standardized villa typologies',
        description: 'In many prime communities, developers built identical villa layouts at scale. That makes pricing easier to benchmark and allows cleaner comparisons between outdated and renovated homes.',
        tag: 'Comparable layouts make pricing more predictable',
      },
      {
        title: 'Prime addresses with aging inventory',
        description: 'Communities like Palm Jumeirah, Jumeirah Islands, and Al Barari contain older villa stock in highly desirable locations. Buyers want the address, but increasingly prefer fully upgraded, move-in-ready homes.',
        tag: 'Demand is strongest for premium renovated inventory',
      },
      {
        title: 'Measurable renovation uplift',
        description: 'Because layouts and locations are easier to compare, renovation value can be assessed before acquisition using real comparable sales within the same community.',
        tag: 'Value creation is measurable before acquisition',
      },
    ],
  },

  takeAction: {
    label: 'Investment Structure',
    title: 'Built to align incentives',
    subtitle: 'Each project follows an investor-first structure designed to align returns with real performance.',
    metrics: [
      {
        value: d.priorityReturn.value,
        label: 'Priority return for investors',
        description: 'Investors receive the first 15% of profit before profit sharing applies.',
      },
      {
        value: d.targetInvestorReturn.value,
        label: d.targetInvestorReturn.label,
        description: 'Targeted returns are based on acquisition discipline, renovation budgets, and local comparable sales.',
      },
      {
        value: d.historicalInvestorPayout.value,
        label: d.historicalInvestorPayout.label,
        description: 'Historical average received by investors across completed projects.',
      },
      {
        value: d.minimumInvestment.value,
        label: d.minimumInvestment.label,
        description: `Access the strategy from ${d.minimumInvestment.value} through a regulated structure.`,
      },
    ],
    primaryCta: 'Create an Account',
    secondaryCta: 'Book a Call',
    disclaimer: 'InvestDubai operates through a regulated, asset-backed structure in the UAE.',
  },

  howItWorks: {
    label: 'How It Works',
    title: 'A simple way to invest in Dubai villa flips',
    steps: [
      { number: '01', title: 'Create your account', description: 'Register and complete identity verification in minutes.' },
      { number: '02', title: 'Review curated villa opportunities', description: 'Access selected projects backed by real properties in prime Dubai communities.' },
      { number: '03', title: `Invest from ${d.minimumInvestment.value}`, description: 'Participate in a specific asset-backed project through a regulated structure.' },
      { number: '04', title: 'Follow the transformation', description: 'Track renovation progress and milestone updates throughout the project.' },
      { number: '05', title: 'Receive proceeds on exit', description: 'Once the villa is sold, receive your capital and share of profits.' },
    ],
    cta: 'Create an Account',
  },

  whyInvestDubai: {
    label: 'Why InvestDubai',
    title: 'Active value creation, not passive exposure',
    subtitle: 'InvestDubai is not a generic real estate crowdfunding platform. We create value through acquisition discipline, renovation execution, and aligned incentives.',
    trustPoints: [
      { title: 'In-house execution', description: 'We source, design, renovate, and manage projects internally instead of outsourcing the core value-creation process.' },
      { title: 'Asset-backed ownership', description: 'Each investment is tied to a specific property structure, giving investors exposure to a real underlying asset.' },
      { title: 'Zero leverage', description: 'Projects are executed without financial leverage, reducing forced-sale risk and improving resilience in weaker markets.' },
      { title: 'Controlled renovation budgets', description: 'Renovation economics are planned upfront to keep execution disciplined and outcomes measurable.' },
      { title: 'Transparent project tracking', description: 'Investors can follow project progress through clear updates across the acquisition, renovation, and exit process.' },
      { title: 'Regulated structure', description: 'Investments are accessed through a regulated structure designed to provide clarity, compliance, and investor protection.' },
    ],
    highlightCard: {
      stat: d.villasAcquired.value,
      statLabel: 'Luxury villas acquired by the in-house team',
      features: [
        'Only super-prime Dubai locations',
        'In-house architects & project managers',
        'Daily on-site supervision',
        'Full materials control',
      ],
      founders: 'Founded by Greenbull Group',
      company: 'Part of Greenbull Group',
    },
    alignedIncentives: {
      title: 'We only profit when you profit',
      description: 'Our model is built on profit sharing, which means our upside depends on the project performing well for investors first. The better the exit, the more aligned everyone remains.',
    },
  },

  faq: {
    label: 'Frequently Asked',
    title: 'Common questions, clearly answered',
    subtitle: 'Everything investors usually want to understand before getting started.',
    cta: 'Book a Call',
    questions: [
      {
        question: 'Is Invest Dubai legal and regulated?',
        shortAnswer: 'Yes. Investments are accessed through a regulated partner structure, and each property is held through a dedicated SPV tied to the underlying asset.',
        answer: "Yes, we operate with full legal compliance and transparency. Invest Dubai functions through a regulated crowdfunding partner that is fully licensed under UAE law. This ensures that our operations meet strict regulatory standards for investor protection.\n\nFurthermore, every single property project is held within its own dedicated Special Purpose Vehicle (SPV), which is a separate legal entity that holds the official title deed.\n\nWhen you invest, you become a documented shareholder in that specific SPV, providing you with true equity ownership in the real estate asset rather than just a contractual promise.",
      },
      {
        question: 'What happens if Greenbull disappears?',
        shortAnswer: 'The asset remains protected through the project structure itself, not through the operating company alone.',
        answer: "Your investment is structurally insulated from our corporate health. Because each project sits in its own dedicated SPV (Special Purpose Vehicle), that independent legal entity holds the title deed to the villa.\n\nEven in the highly unlikely event that Greenbull Group or any of our operational partners became unavailable, the SPV and your equity ownership stake within it continue to exist legally and independently.\n\nThe property itself remains fully protected, and the shareholders would simply appoint a new management entity to complete the project and distribute the funds.",
      },
      {
        question: 'What if the Dubai market crashes?',
        shortAnswer: 'This strategy is designed to create value through transformation, not rely only on market appreciation.',
        answer: "Unlike traditional real estate investing, our model is not a speculative bet on market appreciation. We manufacture our own upside.\n\n• We acquire unrenovated properties at a steep discount (often 30-40% below market value).\n• We add immediate, tangible value through comprehensive high-end renovations.\n• We then sell at the new market price.\n\nThis intrinsic value-add creates a significant margin of safety. Even if the broader market experienced a 20-30% downturn, this buffer is designed to protect your initial capital. Additionally, because we use absolutely zero debt to fund our projects, there is no risk of forced liquidation by banks during a market dip.",
      },
      {
        question: 'How long is my money locked?',
        shortAnswer: `Typically, a project runs for around ${d.typicalHoldPeriod.value}.`,
        answer: "Real estate is inherently an illiquid asset class, and you should anticipate a typical project cycle of 6 to 18 months.\n\nThis timeline covers the entire process:\n• The initial legal acquisition of the property.\n• The intensive architectural renovation phase.\n• Marketing, staging, and the final sale and transfer to a new buyer.\n\nOnce the villa is sold and the funds clear escrow, your initial capital plus your share of the profits are credited directly to your digital wallet. From there, you have the full freedom to withdraw the funds to your bank account or reinvest them into the next available project.",
      },
      {
        question: 'Are the returns realistic?',
        shortAnswer: 'Returns are based on acquisition discipline, renovation planning, and comparable sales data, not on arbitrary projections.',
        answer: `Our returns are rooted in data, not speculation. The historical average payout across our completed projects has been ${d.historicalInvestorPayout.value}.\n\nFor every project, investors receive a ${d.priorityReturn.value} priority return, meaning you get paid your first 15% of profit before we take any performance fee. We typically target an overall return of ${d.targetInvestorReturn.value} per project.\n\nThese projections are calculated using hard data: strict acquisition prices, fixed renovation budgets, and recent comparable sales of identical renovated villas in the same community. However, please note that all investments carry risk, and past performance does not guarantee future results.`,
      },
      {
        question: 'How does Invest Dubai make money?',
        shortAnswer: 'Our model is based on profit sharing, which keeps our incentives aligned with investors.',
        answer: "We fundamentally believe in aligning our incentives with yours. We do not charge hidden management fees that drag down your capital while the property sits in renovation.\n\nInstead, we operate on a performance basis. We only profit when the villa successfully sells at a gain, and only after you have received your 15% priority return.\n\nOur share of the upside is calculated purely on the performance above that threshold. Simply put: if we don't deliver exceptional results for you, we don't earn a profit.",
      },
      {
        question: "What's the minimum investment?",
        shortAnswer: `You can start from ${d.minimumInvestment.value}.`,
        answer: `We have structured Invest Dubai to heavily democratize access to ultra-luxury real estate that was previously reserved for institutional investors.\n\nYou can begin investing with approximately ${d.minimumInvestment.value} (${d.minimumInvestment.secondary}).\n\nAll investments on our platform are denominated in UAE Dirhams (AED), which is strictly pegged to the US Dollar (USD). This eliminates currency risk for USD investors, though European investors may experience minor, normal exchange rate fluctuations between the EUR and the USD/AED peg over the lifecycle of the project.`,
      },
      {
        question: 'What about taxes for French residents?',
        shortAnswer: 'Tax treatment depends on your country of tax residence and personal or corporate situation.',
        answer: "Under the France–UAE bilateral tax treaty, investment income (including dividends) from InvestDubai is taxable in your country of fiscal residence. Here's what applies to French investors:\n\n**Individual Investors:**\nReturns are classified as capital income and subject to the flat tax (PFU) of 30% by default. You may opt into the progressive income tax scale instead, so consult your tax advisor.\n\n**Corporate Investors (SCI, SARL, SAS):**\nReturns fall under standard corporate tax rules. They are added to your company's overall taxable income and subject to standard IS rates (15% reduced / 25% standard).\n\n**Non-French Residents:**\nIf you're not a French tax resident, French tax law does not apply. You'll need to declare under the rules of your country of residence and any applicable treaty with the UAE.\n\nWe always recommend consulting a qualified tax advisor for your personal situation.",
      },
    ],
  },

  finalCta: {
    label: 'Get Started',
    title: 'Get access to Dubai’s luxury villa value gap',
    subtitle: 'Open your account in minutes, explore current projects, and invest through a regulated, asset-backed structure.',
    primaryCta: 'Create an Account',
    secondaryCta: 'Book a Call',
    disclaimer: '',
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
