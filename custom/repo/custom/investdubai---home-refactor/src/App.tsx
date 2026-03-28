import { ArrowRight, ChevronDown, Phone, ChevronLeft, ChevronRight, Grid3x3, MapPin, LineChart, UserPlus, Search, Wallet, Eye, Banknote, Wrench, Shield, Lock, Scale, Users, HardHat, Package } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { trackRecordProjects, getStatusColor, TrackRecordProject } from './content/trackRecordData';
import { d } from './content/numbersDictionary';

const homepageContent = {
  hero: {
    eyebrow: 'Regulated access to Dubai luxury villa flips',
    headline: 'Capture the value gap in Dubai’s luxury villa market',
    subheadline: 'We acquire undervalued villas in prime Dubai communities, renovate them to premium standards, and sell at full market value. The difference between outdated and move-in-ready is where the value gap becomes investor return.',
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
    body: 'In the same community, villas with the same layout can trade at very different prices depending on condition. We acquire outdated properties, renovate them to premium standards, and sell them at the renovated market price. That spread is the value gap.',
    pullQuote: 'We create value through redevelopment, not by betting on market growth.',
    chart: {
      leftBarLabel: 'Below renovated market value',
      rightBarLabel: 'Sold at full market value',
      gapLabel: 'The value gap creates the upside',
      gapValue: '+50%',
      gapSubtext: 'typical price gap',
      bottomText: 'Same villa type. Same community. Same footprint.',
    },
    cta: 'Create an Account',
  },
  whyGapExists: {
    label: 'Why The Gap Exists',
    title: 'Why this opportunity exists in Dubai',
    subtitle: 'Dubai’s prime villa market has structural characteristics that make this strategy measurable and repeatable.',
    cards: [
      {
        title: 'Standardized villa typologies',
        description: 'In many prime communities, developers built identical villa layouts at scale. That makes pricing easier to benchmark and comparisons between outdated and renovated homes much cleaner.',
        tag: 'Comparable layouts make pricing clearer',
      },
      {
        title: 'Prime addresses with aging inventory',
        description: 'Communities like Palm Jumeirah, Jumeirah Islands, and Al Barari contain older villa stock in highly desirable locations. Buyers want the address, but increasingly prefer upgraded, move-in-ready homes.',
        tag: 'Demand is strongest for renovated inventory',
      },
      {
        title: 'Measurable renovation uplift',
        description: 'Because layouts and locations are easier to compare, renovation value can be assessed before acquisition using comparable sales from the same community.',
        tag: 'Value creation is measurable before acquisition',
      },
    ],
  },
  takeAction: {
    label: 'Investment Structure',
    title: 'Built to align incentives',
    subtitle: 'Each project follows an investor-first structure built to align incentives with real performance.',
    metrics: [
      { value: d.priorityReturn.value, label: 'Priority return for investors', description: 'Investors receive the first 15% before profit sharing applies.' },
      { value: d.targetInvestorReturn.value, label: d.targetInvestorReturn.label, description: 'Target returns are based on acquisition discipline, renovation budgets, and local comparable sales.' },
      { value: d.historicalInvestorPayout.value, label: d.historicalInvestorPayout.label, description: 'Average historical payout received by investors across completed projects.' },
      { value: d.minimumInvestment.value, label: d.minimumInvestment.label, description: `Access the strategy from ${d.minimumInvestment.value} through a regulated, asset-backed structure.` },
    ],
    primaryCta: 'Create an Account',
    secondaryCta: 'Book a Call',
  },
  howItWorks: {
    label: 'How It Works',
    title: 'How investors access the value gap',
    steps: [
      { number: '01', title: 'Create your account', description: 'Register and complete identity verification in minutes.' },
      { number: '02', title: 'Review curated villa opportunities', description: 'Access selected projects backed by real properties in prime Dubai communities.' },
      { number: '03', title: `Invest from ${d.minimumInvestment.value}`, description: 'Participate in a specific asset-backed project through a regulated, asset-backed structure.' },
      { number: '04', title: 'Follow the transformation', description: 'Track renovation progress and milestone updates throughout the project.' },
      { number: '05', title: 'Receive proceeds on exit', description: 'Once the villa is sold, receive your capital and share of profits.' },
    ],
    cta: 'Create an Account',
  },
  whyInvestDubai: {
    label: 'Why InvestDubai',
    title: 'Active value creation, not passive exposure',
    subtitle: 'InvestDubai is not a generic real estate platform. We create value through acquisition discipline, renovation execution, and aligned incentives.',
    trustPoints: [
      { title: 'In-house execution', description: 'We source, design, renovate, and manage projects internally instead of outsourcing the core value-creation process.' },
      { title: 'Asset-backed ownership', description: 'Each investment is tied to a specific property, giving investors exposure to a real underlying asset.' },
      { title: 'Zero leverage', description: 'Projects are executed without leverage, reducing forced-sale risk and improving resilience in weaker markets.' },
      { title: 'Controlled renovation budgets', description: 'Renovation economics are planned upfront to keep execution disciplined and outcomes measurable.' },
      { title: 'Transparent project tracking', description: 'Investors can follow project progress through clear updates across the acquisition, renovation, and exit process.' },
      { title: 'Regulated structure', description: 'Investments are accessed through a regulated structure built to provide clarity and investor protection.' },
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
    },
    alignedIncentives: {
      title: 'We only profit when you profit',
      description: 'Our model is built on profit sharing, which means our upside depends on investors performing well first. The better the exit, the more aligned the structure becomes.',
    },
  },
  faq: {
    label: 'Frequently Asked',
    title: 'Common questions, clearly answered',
    subtitle: 'Everything investors usually want to understand before getting started.',
    cta: 'Book a Call',
    questions: [
      { question: 'Is Invest Dubai legal and regulated?', answer: 'Yes, we operate with full legal compliance and transparency. Invest Dubai functions through a regulated crowdfunding partner that is fully licensed under UAE law.' },
      { question: 'What happens if Greenbull disappears?', answer: 'Your investment is structurally insulated from our corporate health. Because each project sits in its own dedicated SPV, that independent legal entity holds the title deed.' },
      { question: 'What if the Dubai market crashes?', answer: 'Unlike traditional real estate investing, our model is not a speculative bet on market appreciation. We manufacture our own upside through renovation.' },
      { question: 'How long is my money locked?', answer: `Typically, a project runs for around ${d.typicalHoldPeriod.value}. This covers acquisition, renovation, and final sale.` },
    ],
  },
  finalCta: {
    label: 'Get Started',
    title: 'Get access to Dubai’s luxury villa value gap',
    subtitle: 'Open your account in minutes, explore current projects, and invest through a regulated, asset-backed structure.',
    primaryCta: 'Create an Account',
    secondaryCta: 'Book a Call',
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

function GlobalNavbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-brand-border/50">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 h-16 md:h-20 flex items-center justify-between">
        <div className="font-bold text-xl tracking-tight text-brand-dark">InvestDubai</div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#opportunity" className="text-sm font-medium text-brand-muted hover:text-brand-dark transition-colors">Opportunity</a>
          <a href="#how-it-works" className="text-sm font-medium text-brand-muted hover:text-brand-dark transition-colors">How it Works</a>
          <a href="#faq" className="text-sm font-medium text-brand-muted hover:text-brand-dark transition-colors">FAQ</a>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="hidden sm:block text-sm font-medium text-brand-dark hover:text-brand-accent transition-colors">Log In</a>
          <a href="#" className="bg-brand-dark text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-brand-accent transition-colors">Get Started</a>
        </div>
      </div>
    </nav>
  );
}

function GlobalFooter() {
  return (
    <footer className="bg-white border-t border-brand-border py-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-bold text-xl tracking-tight text-brand-dark">InvestDubai</div>
        <div className="flex gap-6 text-sm text-brand-muted">
          <a href="#" className="hover:text-brand-dark transition-colors">Terms</a>
          <a href="#" className="hover:text-brand-dark transition-colors">Privacy</a>
          <a href="#" className="hover:text-brand-dark transition-colors">Legal</a>
        </div>
        <div className="text-sm text-brand-muted">© 2026 Invest Dubai. All rights reserved.</div>
      </div>
    </footer>
  );
}

const Hero = () => {
  const { hero } = homepageContent;
  return (
    <section className="relative pt-28 md:pt-32 pb-16 md:pb-24 overflow-hidden min-h-[100svh] md:min-h-[85vh] flex flex-col justify-center">
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="https://pub-46bf43f4e0fb4daab5a13e7a41223da4.r2.dev/videos/homepage-banniere.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/85 to-brand-dark/70" />
      </div>
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 relative z-10 w-full mt-auto mb-auto">
        <motion.div 
          initial="hidden" animate="visible" variants={staggerContainer}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.span variants={fadeUp} className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-white/10 backdrop-blur-sm text-white/90 text-xs md:text-sm font-semibold rounded-full mb-6 md:mb-8 border border-white/20">
            {hero.eyebrow}
          </motion.span>
          
          <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 md:mb-8 tracking-tight leading-[1.15] md:leading-[1.1]">
            {hero.headline}
          </motion.h1>

          <motion.p variants={fadeUp} className="hidden md:block text-lg sm:text-xl md:text-2xl text-white/80 leading-relaxed mb-8 md:mb-10 max-w-3xl mx-auto px-2 sm:px-0 font-light">
            {hero.subheadline}
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-10 md:mb-12">
            <a href="#" className="w-full sm:w-auto bg-brand-accent text-white px-6 md:px-8 py-3.5 md:py-4 rounded-full font-medium flex items-center justify-center gap-2 text-sm md:text-base hover:opacity-90 transition-opacity">
              {hero.primaryCta} <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#opportunity" className="w-full sm:w-auto border border-white/20 bg-white/10 backdrop-blur-sm text-white px-6 md:px-8 py-3.5 md:py-4 rounded-full font-medium flex items-center justify-center gap-2 text-sm md:text-base hover:bg-white/20 transition-colors">
              {hero.secondaryCta} <ChevronDown className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          initial="hidden" animate="visible" variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 max-w-4xl mx-auto"
        >
          {hero.stats.map((stat, i) => (
            <motion.div variants={fadeUp} key={i} className="text-center p-4 md:p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 flex flex-col justify-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 md:mb-2">{stat.value}</div>
              <div className="text-xs md:text-sm text-white/70 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Opportunity = () => {
  const { opportunity } = homepageContent;
  return (
    <section id="opportunity" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            <motion.span variants={fadeUp} className="section-label">{opportunity.label}</motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-brand-dark mb-6 tracking-tight leading-tight">
              {opportunity.title}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-base md:text-xl text-brand-muted leading-relaxed mb-6 font-light">
              {opportunity.body}
            </motion.p>
            <motion.p variants={fadeUp} className="text-lg md:text-2xl font-bold text-brand-dark leading-relaxed mb-8">
              "{opportunity.pullQuote}"
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-3 md:gap-4">
              <a href="#" className="w-full sm:w-auto bg-brand-accent text-white px-6 md:px-8 py-3.5 md:py-4 rounded-full font-medium inline-flex items-center justify-center gap-2 text-sm md:text-base hover:opacity-90 transition-opacity">
                {opportunity.cta} <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-brand-bg rounded-2xl md:rounded-3xl p-6 md:p-10 border border-brand-border shadow-sm relative"
          >
            <div className="mb-6 text-center relative z-10">
              <div className="inline-block bg-white border-2 border-dashed border-brand-accent/30 rounded-xl md:rounded-2xl px-6 md:px-10 py-5 md:py-8 shadow-lg transform -translate-y-12">
                <div className="text-5xl md:text-7xl font-black text-brand-accent mb-1 md:mb-2">{opportunity.chart.gapValue}</div>
                <div className="text-xs font-bold text-brand-dark uppercase tracking-wide">{opportunity.chart.gapSubtext}</div>
              </div>
              <div className="-mt-8">
                <span className="inline-block bg-brand-accent text-white text-xs font-black px-6 py-2.5 rounded-full shadow-lg shadow-brand-accent/20 uppercase tracking-wide">
                  {opportunity.chart.gapLabel}
                </span>
              </div>
            </div>

            <div className="mb-8 mt-4">
              <div className="relative h-[200px] md:h-[280px] flex items-end justify-center gap-6 md:gap-12">
                <div className="flex flex-col items-center w-24 md:w-32">
                  <span className="text-[10px] md:text-xs font-bold text-brand-muted uppercase tracking-wide mb-3">Purchase</span>
                  <motion.div 
                    initial={{ height: 0 }} whileInView={{ height: '85px' }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }}
                    className="w-full bg-gray-200 rounded-t-xl border border-gray-300"
                  />
                </div>
                <div className="flex flex-col items-center w-24 md:w-32">
                  <span className="text-[10px] md:text-xs font-bold text-brand-muted uppercase tracking-wide mb-3">Sale</span>
                  <motion.div 
                    initial={{ height: 0 }} whileInView={{ height: '180px' }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.4 }}
                    className="w-full bg-brand-accent rounded-t-xl border border-brand-accent shadow-[0_0_30px_rgba(5,150,105,0.3)]"
                  />
                </div>
              </div>
              <div className="flex justify-center gap-6 md:gap-12 mt-4">
                <div className="w-24 md:w-32 text-center">
                  <p className="text-xs font-medium text-brand-muted leading-tight">{opportunity.chart.leftBarLabel}</p>
                </div>
                <div className="w-24 md:w-32 text-center">
                  <p className="text-xs font-medium text-brand-muted leading-tight">{opportunity.chart.rightBarLabel}</p>
                </div>
              </div>
            </div>
            <p className="text-center text-sm font-bold text-brand-dark">{opportunity.chart.bottomText}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: TrackRecordProject; key?: string | number }) => {
  const statusColors = getStatusColor(project.status);
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col group/card transition-all duration-300 hover:shadow-xl flex-shrink-0 snap-center w-[260px] md:w-[280px] h-[360px] border border-brand-border"
    >
      <div className="relative overflow-hidden h-40">
        <img src={project.image} alt={project.name} className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" loading="lazy" />
        <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full shadow-sm">
          <div className={`w-1.5 h-1.5 ${statusColors.dot} rounded-full`} />
          <span className="text-[10px] font-bold text-brand-dark uppercase tracking-wider">{project.status}</span>
        </div>
      </div>
      <div className="flex-1 flex flex-col p-5">
        <h3 className="font-bold text-brand-dark text-lg mb-4 line-clamp-1">{project.name}</h3>
        {project.status === 'In-Progress' ? (
          <div className="flex-1 flex flex-col justify-center items-center bg-brand-bg rounded-xl border border-brand-border border-dashed">
            <span className="text-xs font-semibold text-brand-muted uppercase tracking-wider">Renovation in Progress</span>
          </div>
        ) : (
          <div className="space-y-2 mb-5">
            <div className="flex justify-between items-center text-sm">
              <span className="text-brand-muted font-medium">Investment</span>
              <span className="font-bold text-brand-dark">{project.totalInvestment}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-brand-muted font-medium">Sale Price</span>
              <span className="font-bold text-brand-dark">{project.sellingPrice}</span>
            </div>
          </div>
        )}
        <div className="mt-auto">
          {project.status === 'In-Progress' ? (
            <div className="bg-brand-dark rounded-xl p-2.5 text-center">
              <span className="text-white text-xs font-bold uppercase tracking-wider">Coming Soon</span>
            </div>
          ) : (
            <div className={`${statusColors.bg} rounded-xl p-3 flex justify-between items-center`}>
              <span className={`${statusColors.text} text-xs font-black uppercase tracking-widest`}>ROI</span>
              <span className={`${statusColors.text} text-xl font-black`}>{project.roi}</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const TrackRecord = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section className="py-16 md:py-24 bg-[#0D0D0D] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center max-w-4xl mx-auto mb-10 md:mb-16">
          <motion.span variants={fadeUp} className="inline-block px-4 py-1.5 bg-brand-accent/10 text-brand-accent text-xs font-bold uppercase tracking-widest rounded-full mb-6 border border-brand-accent/20">Track Record</motion.span>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-white tracking-tight leading-tight">
            40+ villas acquired, renovated & sold
          </motion.h2>
          <motion.p variants={fadeUp} className="text-base md:text-xl text-gray-400 leading-relaxed px-2 sm:px-0 font-light">
            Every project follows the same model: find undervalued villas in prime communities, renovate to modern standards, and sell at full market value.
          </motion.p>
        </motion.div>
      </div>
      
      <div className="relative w-full max-w-[100vw] overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#0D0D0D] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#0D0D0D] to-transparent z-10 pointer-events-none" />
        
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-6 md:px-12 pb-8 pt-4 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {trackRecordProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyGapExists = () => {
  const { whyGapExists } = homepageContent;
  const icons = [Grid3x3, MapPin, LineChart];
  return (
    <section className="py-16 md:py-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center max-w-3xl mx-auto mb-16">
          <motion.span variants={fadeUp} className="section-label">{whyGapExists.label}</motion.span>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-brand-dark mb-6 tracking-tight leading-tight">{whyGapExists.title}</motion.h2>
          <motion.p variants={fadeUp} className="text-base md:text-xl text-brand-muted leading-relaxed font-light">{whyGapExists.subtitle}</motion.p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-12">
          {whyGapExists.cards.map((card, i) => {
            const Icon = icons[i];
            return (
              <motion.div variants={fadeUp} key={i} className="bg-white rounded-3xl p-8 md:p-10 border border-brand-border hover:border-brand-accent/30 transition-all duration-300 hover:shadow-xl text-center h-full flex flex-col group">
                <div className="flex justify-center mb-6 md:mb-8">
                  <div className="w-16 h-16 bg-brand-bg group-hover:bg-brand-accent-light rounded-2xl flex items-center justify-center transition-colors duration-300">
                    <Icon className="w-8 h-8 text-brand-accent" />
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-brand-dark mb-4 leading-tight">{card.title}</h3>
                <p className="text-brand-muted leading-relaxed mb-8 text-sm md:text-base flex-1">{card.description}</p>
                <div className="inline-block bg-brand-bg group-hover:bg-brand-accent/10 text-brand-dark group-hover:text-brand-accent text-xs font-bold px-4 py-2 rounded-full border border-brand-border group-hover:border-brand-accent/20 transition-colors duration-300">
                  {card.tag}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

const TakeAction = () => {
  const { takeAction } = homepageContent;
  return (
    <section className="py-16 md:py-24 bg-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-accent via-transparent to-transparent" />
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center max-w-3xl mx-auto mb-16">
          <motion.span variants={fadeUp} className="inline-block px-4 py-1.5 bg-white/10 text-white text-xs font-bold uppercase tracking-widest rounded-full mb-6 border border-white/20">{takeAction.label}</motion.span>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">{takeAction.title}</motion.h2>
          <motion.p variants={fadeUp} className="text-base md:text-xl text-gray-300 leading-relaxed font-light">{takeAction.subtitle}</motion.p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {takeAction.metrics.map((metric, i) => (
            <motion.div variants={fadeUp} key={i} className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 text-center hover:bg-white/10 transition-colors duration-300">
              <div className="text-4xl md:text-5xl font-black text-brand-accent mb-3">{metric.value}</div>
              <div className="text-sm md:text-base font-bold text-white mb-2">{metric.label}</div>
              <div className="text-xs md:text-sm text-gray-400 leading-relaxed">{metric.description}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const { howItWorks } = homepageContent;
  const icons = [UserPlus, Search, Wallet, Eye, Banknote];
  const [expandedStep, setExpandedStep] = useState<number | null>(0);

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <motion.span variants={fadeUp} className="section-label">{howItWorks.label}</motion.span>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-brand-dark mb-6 tracking-tight leading-tight">{howItWorks.title}</motion.h2>
        </motion.div>

        {/* Desktop View */}
        <div className="hidden lg:grid grid-cols-5 gap-6">
          {howItWorks.steps.map((step, i) => {
            const Icon = icons[i];
            return (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                key={i} className="relative"
              >
                <div className="bg-brand-bg rounded-2xl p-6 border border-brand-border h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 bg-brand-accent-light rounded-xl flex items-center justify-center">
                      <Icon className="w-5 h-5 text-brand-accent" />
                    </div>
                    <span className="text-xs font-black text-brand-muted tracking-widest">STEP {step.number}</span>
                  </div>
                  <h3 className="text-lg font-bold text-brand-dark mb-2">{step.title}</h3>
                  <p className="text-sm text-brand-muted leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile View (Accordion) */}
        <div className="lg:hidden space-y-3">
          {howItWorks.steps.map((step, i) => {
            const Icon = icons[i];
            const isExpanded = expandedStep === i;
            return (
              <div 
                key={i} 
                className={`bg-brand-bg rounded-2xl border transition-colors duration-300 overflow-hidden ${isExpanded ? 'border-brand-accent/30 shadow-md' : 'border-brand-border'}`}
              >
                <button 
                  onClick={() => setExpandedStep(isExpanded ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${isExpanded ? 'bg-brand-accent text-white' : 'bg-brand-accent-light text-brand-accent'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black text-brand-muted tracking-widest block mb-0.5">STEP {step.number}</span>
                      <h3 className="text-base font-bold text-brand-dark">{step.title}</h3>
                    </div>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-brand-muted transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 pb-5 pt-1 pl-[72px]">
                        <p className="text-sm text-brand-muted leading-relaxed">{step.description}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const WhyInvestDubai = () => {
  const { whyInvestDubai } = homepageContent;
  const trustIcons = [Wrench, Shield, Banknote, Lock, Eye, Scale];
  
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const containerRect = container.getBoundingClientRect();
    const containerCenterY = containerRect.top + containerRect.height / 2;
    
    let closestIndex = 0;
    let closestDistance = Infinity;
    
    itemRefs.current.forEach((ref, index) => {
      if (ref) {
        const rect = ref.getBoundingClientRect();
        const itemCenterY = rect.top + rect.height / 2;
        const distance = Math.abs(itemCenterY - containerCenterY);
        
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      }
    });
    
    setActiveIndex(closestIndex);
  };

  return (
    <section className="py-16 md:py-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center max-w-3xl mx-auto mb-16">
          <motion.span variants={fadeUp} className="section-label">{whyInvestDubai.label}</motion.span>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-brand-dark mb-6 tracking-tight leading-tight">{whyInvestDubai.title}</motion.h2>
          <motion.p variants={fadeUp} className="text-base md:text-xl text-brand-muted leading-relaxed font-light">{whyInvestDubai.subtitle}</motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="h-[350px] md:h-[500px] overflow-y-auto pr-2 md:pr-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="h-[12px]" />
            {whyInvestDubai.trustPoints.map((point, i) => {
              const Icon = trustIcons[i];
              const isActive = activeIndex === i;
              return (
                <div 
                  key={i}
                  ref={(el) => { itemRefs.current[i] = el; }}
                  className={`flex gap-4 md:gap-6 py-6 md:py-8 border-b border-brand-border last:border-b-0 transition-all duration-300 cursor-pointer ${
                    isActive ? 'opacity-100 scale-100' : 'opacity-40 hover:opacity-70 scale-95'
                  }`}
                  onClick={() => {
                    setActiveIndex(i);
                    itemRefs.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                    isActive ? 'bg-brand-accent' : 'bg-brand-surface border border-brand-border'
                  }`}>
                    <Icon className={`w-6 h-6 transition-colors duration-300 ${
                      isActive ? 'text-white' : 'text-brand-muted'
                    }`} />
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold mb-2 transition-colors duration-300 ${
                      isActive ? 'text-brand-dark' : 'text-brand-muted'
                    }`}>{point.title}</h3>
                    <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                      isActive ? 'text-brand-muted' : 'text-brand-muted/60'
                    }`}>{point.description}</p>
                  </div>
                </div>
              );
            })}
            <div className="h-[180px]" />
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden lg:block bg-brand-dark rounded-3xl p-8 md:p-12 text-white shadow-2xl sticky top-24"
          >
            <div className="text-5xl md:text-7xl font-black text-brand-accent mb-4">{whyInvestDubai.highlightCard.stat}</div>
            <div className="text-xl md:text-3xl font-bold mb-8 leading-snug">{whyInvestDubai.highlightCard.statLabel}</div>
            
            <div className="space-y-4 mb-10">
              {whyInvestDubai.highlightCard.features.map((feature, i) => {
                const featureIcons = [MapPin, HardHat, Users, Package];
                const FeatureIcon = featureIcons[i];
                return (
                  <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
                    <FeatureIcon className="w-6 h-6 text-brand-accent flex-shrink-0" />
                    <span className="text-gray-200 font-medium">{feature}</span>
                  </div>
                );
              })}
            </div>

            <div className="pt-8 border-t border-white/10">
              <h4 className="text-xl font-bold text-white mb-3">{whyInvestDubai.alignedIncentives.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {whyInvestDubai.alignedIncentives.description}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const { faq } = homepageContent;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="lg:sticky lg:top-32 lg:self-start">
            <motion.span variants={fadeUp} className="section-label">{faq.label}</motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-brand-dark mb-6 tracking-tight leading-tight">{faq.title}</motion.h2>
            <motion.p variants={fadeUp} className="text-base md:text-xl text-brand-muted leading-relaxed mb-8 font-light">{faq.subtitle}</motion.p>
            <motion.a variants={fadeUp} href="#" className="w-full sm:w-auto border-2 border-brand-border bg-white text-brand-dark px-8 py-4 rounded-full font-bold inline-flex items-center justify-center gap-2 hover:bg-brand-bg hover:border-brand-dark transition-all">
              <Phone className="w-5 h-5" /> {faq.cta}
            </motion.a>
          </motion.div>

          <div className="space-y-4">
            {faq.questions.map((item, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={i} 
                className="bg-brand-bg rounded-2xl border border-brand-border overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-black/5 transition-colors"
                >
                  <span className="font-bold text-brand-dark pr-4 text-base md:text-lg">{item.question}</span>
                  <ChevronDown className={`w-5 h-5 text-brand-muted flex-shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2">
                        <p className="text-brand-muted leading-relaxed text-sm md:text-base">{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  const { finalCta } = homepageContent;
  return (
    <section className="py-20 md:py-32 bg-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent" />
      
      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-12 text-center relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          <motion.span variants={fadeUp} className="inline-block px-4 py-1.5 bg-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-widest rounded-full mb-6 border border-brand-accent/30">{finalCta.label}</motion.span>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">{finalCta.title}</motion.h2>
          <motion.p variants={fadeUp} className="text-base md:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto font-light">{finalCta.subtitle}</motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#" className="w-full sm:w-auto bg-brand-accent text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 text-base hover:opacity-90 transition-opacity shadow-lg shadow-brand-accent/20">
              {finalCta.primaryCta} <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#" className="w-full sm:w-auto border-2 border-white/20 text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 text-base hover:bg-white/10 transition-colors">
              <Phone className="w-5 h-5" /> {finalCta.secondaryCta}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg font-sans selection:bg-brand-accent selection:text-white">
      <GlobalNavbar />
      <main>
        <Hero />
        <Opportunity />
        <TrackRecord />
        <WhyGapExists />
        <TakeAction />
        <HowItWorks />
        <WhyInvestDubai />
        <FAQ />
        <FinalCTA />
      </main>
      <GlobalFooter />
    </div>
  );
}
