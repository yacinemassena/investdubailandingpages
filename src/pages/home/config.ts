import { numbersDictionary as d } from '../../content/numbersDictionary';

export const homepageContent = {
  nav: {
    links: [
      { label: 'A Smarter Alternative', href: '/a-smarter-alternative' },
      { label: 'How It Works', href: '/how-it-works' },
      { label: 'FAQ', href: '/faq' },
    ],
    loginText: 'Log In',
    ctaText: 'Create Your Account',
  },

  hero: {
    eyebrow: 'Dubai luxury villa flips. Regulated access.',
    headline: 'We buy villas below market, renovate them, and sell at full price.',
    headlineSecondLine: '',
    subheadline:
      `That spread between outdated and move-in-ready is how we generate returns. ${d.villasAcquired.value} villas acquired, renovated and sold across Dubai's most sought-after communities. You invest from ${d.minimumInvestment.value}.`,
    primaryCta: 'Create an Account',
    secondaryCta: 'See the Opportunity',
    stats: [
      { value: d.villasAcquired.value, label: d.villasAcquired.label },
      { value: d.historicalInvestorPayout.value, label: 'Avg historical payout' },
      { value: d.typicalHoldPeriod.value, label: d.typicalHoldPeriod.label },
      { value: d.leverageUsed.value, label: d.leverageUsed.label },
    ],
  },

  opportunity: {
    label: 'The Opportunity',
    title: 'In prime Dubai communities, the same villa can trade at two very different prices.',
    body: 'An outdated villa and a fully renovated one, same layout, same address, same footprint. The only difference is condition.\n\nWe buy the outdated one, renovate it to premium standards, and sell it at the renovated market price. The spread between the two is where the return comes from.',
    pullQuote: 'We make money through renovation, and so do our investors.',
    chart: {
      leftLabel: 'Purchase',
      rightLabel: 'Sale',
      leftBarLabel: 'Below renovated market value',
      rightBarLabel: 'Sold at full market value',
      gapLabel: 'The spread creates the upside',
      gapValue: '+50%',
      gapSubtext: 'typical price gap',
      bottomText: 'Same villa type. Same community. Same footprint.',
      disclaimer: 'Illustrative. Based on comparable transactions in Palm Jumeirah, Jumeirah Islands, and Al Barari.',
    },
    cta: 'Create an Account',
  },

  projectResults: {
    headline: 'A track record built on realized exits',
    subheadline: `Our performance is based on completed villa flips, not paper projections. Across completed exits, projects have delivered an average project ROI of ${d.averageProjectROI.value}. Explore recent realized exits and the returns generated across finished projects.`,
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
    label: 'Why This Works',
    title: 'Three structural reasons this strategy works in Dubai',
    subtitle: "Dubai's villa market has specific characteristics that make this model repeatable.",
    cards: [
      {
        title: 'Standardized layouts',
        description: 'In many prime communities, developers built identical villas at scale. Same floor plan, same plot.\n\nThat makes pricing straightforward: compare an outdated unit to a renovated one, and the spread is visible.',
        tag: 'Comparable layouts, clear pricing',
      },
      {
        title: 'Prime addresses, aging stock',
        description: "Palm Jumeirah, Jumeirah Islands, Al Barari: some of Dubai's best addresses still have 15-year-old villas that haven't been touched.\n\nBuyers want the address. They increasingly want it move-in-ready.",
        tag: 'Strong demand',
      },
      {
        title: 'Measurable uplift',
        description: 'Because layouts and locations are standardized, we can assess the renovation value before acquisition using comparable sales in the same community.\n\nWe know the numbers before we buy.',
        tag: 'Value measured before acquisition',
      },
    ],
  },

  takeAction: {
    label: 'Investment Structure',
    title: 'Investor-first economics',
    subtitle: 'Every project follows the same financial structure, built to pay investors first.',
    metrics: [
      {
        value: d.priorityReturn.value,
        label: 'Priority return for investors',
        description: 'Investors receive the first 15% before we participate in any upside.',
      },
      {
        value: d.targetInvestorReturn.value,
        label: 'Target return per project',
        description: 'Based on acquisition discipline, renovation budgets, and comparable sales data.',
      },
      {
        value: d.historicalInvestorPayout.value,
        label: 'Avg historical payout',
        description: 'Across all completed projects to date.',
      },
      {
        value: d.minimumInvestment.value,
        label: d.minimumInvestment.label,
        description: `Access the strategy from ${d.minimumInvestment.value} (${d.minimumInvestment.secondary}) through a regulated structure.`,
      },
    ],
    primaryCta: 'Create an Account',
    secondaryCta: 'Book a Call',
    disclaimer: '',
  },

  howItWorks: {
    label: 'How It Works',
    title: 'Five steps from account to exit',
    steps: [
      { number: '01', title: 'Create your account', description: 'Register and complete verification in minutes.' },
      { number: '02', title: 'Review villa opportunities', description: 'Access curated projects in prime Dubai communities, each backed by a real property.' },
      { number: '03', title: `Invest from ${d.minimumInvestment.value}`, description: 'Choose a project, invest, and become a shareholder in the entity that holds the villa.' },
      { number: '04', title: 'Follow the renovation', description: 'Track progress through WhatsApp updates, dashboard milestones, and weekly photos.' },
      { number: '05', title: 'Receive your proceeds', description: 'When the villa sells, you get your capital back plus your share of the profits.' },
    ],
    cta: 'Create an Account',
  },

  whyInvestDubai: {
    label: 'Why InvestDubai',
    title: "We renovate villas. That's all we do.",
    subtitle: 'InvestDubai gives investors access to a focused strategy: acquire, renovate, sell. Every part of the process runs in-house.',
    trustPoints: [
      { title: 'In-house execution', description: 'We source, design, renovate, and manage every project ourselves.\nNo outsourcing on the core work.' },
      { title: 'Real asset, real ownership', description: 'Each investment is tied to a specific villa.\nYou own shares in the entity that holds the property.' },
      { title: 'Zero leverage', description: 'Projects run without debt.\nNo forced sales, no margin calls, more resilience if the market moves.' },
      { title: 'Fixed renovation budgets', description: 'Budgets are locked before the project starts.\nNo surprise capital calls.' },
      { title: 'Full transparency', description: 'WhatsApp groups, dashboard, weekly updates.\nYou see the work as it happens.' },
      { title: 'Regulated structure', description: 'Investments go through a regulated platform with identity verification and investor protections in place.' },
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
      title: 'We only profit when you profit.',
      description: 'Our economics are built on profit sharing. Investors get their 15% priority return first. Only after that do we participate in the upside. The better the exit, the better it is for everyone.',
    },
  },

  faq: {
    label: 'Frequently Asked',
    title: 'Questions investors ask before getting started',
    subtitle: 'Clear answers. No jargon.',
    cta: 'Book a Call',
    questions: [
      {
        question: 'Is InvestDubai legal and regulated?',
        answer: 'Yes. All investments are processed through a DFSA-regulated partner platform based in Dubai International Financial Centre (DIFC).\n\nEach villa is held in its own Special Purpose Vehicle (SPV), a dedicated legal entity registered in the UAE. When you invest, you receive shares in that SPV, which owns the title deed to the property.\n\nThis structure means your ownership is legally documented, asset-backed, and separate from any other project or company entity.',
      },
      {
        question: 'What happens if the operator disappears?',
        answer: "Your investment is protected by the SPV structure. Each villa sits in its own independent legal entity, it doesn't belong to InvestDubai directly.\n\nIf the operator were to cease operations, the property and your shares would remain intact. The regulated platform and legal structure allow for a replacement manager to be appointed to complete the renovation and sale.\n\nThis is one of the key reasons we use SPVs: they ring-fence each asset and protect investors from operational risk.",
      },
      {
        question: 'What if the Dubai market crashes?',
        answer: "Real estate always carries market risk, and we don't pretend otherwise. But our model includes several layers of protection:\n\n• We acquire villas below their renovated market value, creating a buffer against price drops.\n• We use zero leverage, no bank loans, no margin calls, no forced sales if the market dips.\n• Our hold periods are short (12-18 months), limiting long-term exposure.\n\nIn a significant downturn, exit prices could compress and timelines could extend. But we're not dependent on market appreciation, we create value through renovation.",
      },
      {
        question: 'How long is my money locked?',
        answer: `The typical investment cycle runs ${d.typicalHoldPeriod.value}, covering the full journey: acquisition, renovation, marketing, and sale.\n\nOnce the villa is sold and legal transfer completes, final accounting is prepared. Your capital plus profits are then credited to your wallet, usually within 2-4 weeks of closing.\n\nThere is no secondary market for early exits, so you should only invest capital you're comfortable leaving in place for the full project duration.`,
      },
      {
        question: 'Are the returns realistic?',
        answer: `Yes, and here's why they're possible. Our returns come from a measurable spread: the difference between what we pay for an outdated villa and what a renovated one sells for in the same community.\n\nThe average historical investor payout across completed projects is ${d.historicalInvestorPayout.value}. That's based on real exits, not projections.\n\nReturns depend on three things: buying at the right price, executing the renovation on budget, and selling into favorable market conditions. Strong track record, but never guaranteed.`,
      },
      {
        question: 'How does InvestDubai make money?',
        answer: "Our business model is built on profit sharing, we only make money when you make money.\n\nHere's how it works:\n• Investors receive a 15% priority return before we participate in any profits.\n• After that threshold, remaining profits split 60% to investors and 40% to InvestDubai.\n\nThis structure aligns our incentives completely. We're motivated to buy well, renovate efficiently, and sell at the best possible price, because our earnings depend on it.",
      },
      {
        question: "What's the minimum investment?",
        answer: `The minimum investment is ${d.minimumInvestment.value} (approximately ${d.minimumInvestment.secondary}).\n\nThis entry point is designed to make the strategy accessible while still allowing you to participate meaningfully in luxury villa projects that typically require millions to access directly.\n\nYou can start with one project to understand how the model works, then build your exposure over time across multiple villas if you choose.`,
      },
      {
        question: 'Can I invest remotely from another country?',
        answer: 'Absolutely. The entire process, from account creation to investment to exit, is fully digital. Most of our investors have never set foot in Dubai.\n\nYou can track your investment through our dashboard, receive updates via WhatsApp, and watch weekly renovation progress on Instagram. When the villa sells, proceeds are credited directly to your wallet.\n\nIf you ever want to visit a project site, you\'re welcome to arrange a tour with the team, but it\'s entirely optional.',
      },
      {
        question: 'What about taxes for French residents?',
        answer: 'Dubai has no income tax on investment returns. However, French tax residents are required to report worldwide income to French authorities.\n\nWe provide clear documentation for each investment, capital deployed, profits received, and transaction dates, so you have everything needed for your annual declaration.\n\nWe recommend consulting your tax advisor for specific guidance on reporting obligations and any applicable treaties between France and the UAE.',
      },
    ],
  },

  finalCta: {
    label: 'Get Started',
    title: 'Open your account and see current projects',
    subtitle: `Create your account in minutes, explore live villa opportunities, and invest through a regulated structure from ${d.minimumInvestment.value}.`,
    primaryCta: 'Create an Account',
    secondaryCta: 'Book a Call',
    disclaimer: '',
  },

  footer: {
    copyright: '\u00A9 2026 InvestDubai. All rights reserved.',
    links: [
      { label: 'Terms', href: '#' },
      { label: 'Privacy', href: '#' },
      { label: 'Legal', href: '#' },
      // { label: 'Contact', href: '#' },
    ],
  },
};
