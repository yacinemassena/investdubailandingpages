import { useState } from 'react';
import { Shield, History, Scale, Lock, ShieldCheck, ArrowRight, TrendingUp, Clock, Users, Wallet, Search, Hammer, BadgeDollarSign, BarChart3, Target, CalendarClock, CheckCircle, Phone, ChevronDown, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlobalNavbar } from '../../components/GlobalNavbar';
import { GlobalFooter } from '../../components/GlobalFooter';
import { TrackRecordCarousel } from '../../components/TrackRecordCarousel';

const comparisonRows = [
  ['ETFs', '8–12%', 'Daily liquidity', 'No control over value creation'],
  ['Buy-to-let', '4–8%', 'Long-term', 'Yield pressure, tenants, management'],
  ['Off-plan', 'Variable', 'Multi-year', 'Capital locked until delivery'],
  ['Dubai luxury villa flips', 'Target 20%+', '12–18 months', 'Active value creation. Defined exit at resale.'],
];

const steps = [
  {
    title: 'You access the project',
    description:
      'Review a specific opportunity and invest from $1,000 (~AED 4,000). Each project is held through a dedicated SPV that gives investors exposure to a specific underlying asset.',
    icon: Wallet,
  },
  {
    title: 'We source',
    description:
      'We identify high-potential luxury villas in prime Dubai locations, backed by data, experience, and timing.',
    icon: Search,
  },
  {
    title: 'We execute',
    description:
      'Our team handles design, approvals, renovation, premium finishes, and resale execution. Investors benefit from the execution without managing the asset directly.',
    icon: Hammer,
  },
  {
    title: 'You earn',
    description:
      'When the property sells, investors receive capital back plus their share of the upside through the project structure.',
    icon: BadgeDollarSign,
  },
];

const whyDifferent = [
  {
    title: 'Value creation',
    description:
      'The strategy relies on renovation and repositioning to create value before exit, rather than relying only on market appreciation.',
    icon: TrendingUp,
  },
  {
    title: 'Shorter cycles',
    description:
      '12–18 months means your capital is not locked for years and can be redeployed faster than in traditional long-duration real estate holds.',
    icon: Clock,
  },
  {
    title: 'Premium exits',
    description:
      'Prime Dubai villa communities attract an international buyer base, supporting premium exit dynamics for fully renovated properties.',
    icon: Shield,
  },
];

const protectionCards = [
  {
    title: 'Asset-backed ownership through a dedicated SPV.',
    description:
      'Each investment is held through a dedicated SPV linked to a specific property, giving investors documented exposure to an underlying asset rather than a pooled structure.',
    subtext:
      'This is brick-and-mortar ownership structured to give investors clearer protection than a generic pooled vehicle.',
  },
  {
    title: 'Fixed renovation budgets. No additional capital calls.',
    description:
      'Renovation budgets are defined upfront. If execution costs exceed plan, those overruns are not passed back to investors through additional capital calls.',
    subtext:
      'The goal is to keep the investor commitment clear and avoid surprise capital requests during execution.',
  },
  {
    title: '15% preferred return. Investors are paid first.',
    description:
      'Investors receive a 15% preferred return before profit sharing applies. Only after that threshold is met does the operator participate in the upside.',
    subtext:
      'This structure combines investor protection with incentive alignment by paying investors first.',
  },
];

const whyChoose = [
  'Realized outcomes across completed projects, supported by a track record of actual exits and distributed profits.',
  'The team handles sourcing, renovation, and resale execution, while investors access the opportunity without direct property management.',
  'Start from $1,000 (~AED 4,000) and build exposure progressively across projects.',
];

const fit = [
  'You want higher returns than ETFs or savings accounts',
  'You prefer shorter cycles over 10-year holds',
  'You want real estate exposure without direct property management',
  'You have capital you will not need immediately',
];

const notFit = [
  'You need guaranteed returns',
  'You require immediate liquidity',
  'You are not comfortable committing capital through the full project cycle',
  'You want purely passive market exposure only',
];

const faqItems = [
  {
    q: 'What exactly am I investing in?',
    s: 'You are investing in a specific luxury villa project in Dubai through a dedicated SPV, not in a blind pool of properties or a generic real estate fund.',
    a: 'More specifically, investors purchase shares in a Special Purpose Vehicle (SPV) linked to an individual project. That SPV is used to acquire, renovate, and sell a specific villa in a prime Dubai community. In practical terms, your capital is tied to an identifiable underlying asset rather than spread across an unspecified portfolio.',
  },
  {
    q: 'How are returns generated?',
    s: 'Returns come from value creation through acquisition, renovation, and resale rather than from waiting passively for market appreciation alone.',
    a: 'The model is simple: acquire undervalued villas, renovate them to premium standards, and sell into the renovated market. The return comes from execution, not from waiting passively for market appreciation.',
  },
  {
    q: 'What returns can I expect?',
    s: 'The strategy targets investor returns above 20% per project, while the historical track record across completed projects has been higher — although returns are never guaranteed.',
    a: 'Returns are driven by acquisition discipline, renovation execution, and resale conditions rather than by passive market appreciation alone. Investors should think about three levels of performance: the target investor return per project, the historical investor payout across completed projects, and the project-level ROI achieved on realized exits.',
  },
  {
    q: 'How is my investment protected?',
    s: 'Investor protection comes from the structure itself: dedicated SPVs, regulated access, asset segregation, and controlled execution.',
    a: 'Each project is linked to a specific property through a dedicated SPV, accessed through a regulated partner structure, and ring-fenced from company-level operations. Fixed renovation budgets and zero leverage are also designed to reduce execution and financing risk.',
  },
  {
    q: 'What is the 15% preferred return?',
    s: 'The first 15% goes to investors before profit sharing applies, and only after that does the 60/40 split begin.',
    a: 'This matters because the structure is designed to pay investors first. Once that threshold has been met, profits are split 60% to investors and 40% to the operator, which keeps incentives aligned with investor outcomes.',
  },
  {
    q: 'What happens if renovation costs exceed the budget?',
    s: 'Renovation budgets are defined upfront, and overruns are not passed back to investors through additional capital calls.',
    a: 'The aim is to contain execution risk at the operator level rather than push it back to investors. In practical terms, the investor commitment is meant to stay fixed once capital is deployed.',
  },
  {
    q: 'Can I invest remotely from another country?',
    s: 'Yes. The model is designed for remote investing and can be accessed without being physically present in Dubai.',
    a: 'Investors can complete onboarding, KYC, wallet funding, project review, and investment allocation digitally. The structure is built to make Dubai luxury villa opportunities accessible to an international investor base.',
  },
  {
    q: "What's the minimum investment and how do I scale up?",
    s: 'The minimum investment starts at approximately $1,000 (~AED 4,000), and investors can build exposure progressively across projects.',
    a: 'That entry point allows investors to start smaller, understand the model, and increase allocation over time. Some choose diversification across projects, while others scale up once they understand the structure and lifecycle better.',
  },
  {
    q: 'How long is my money locked and can I exit early?',
    s: 'Investors should typically expect a 12 to 18-month hold, and there is currently no early exit mechanism or secondary market for project shares.',
    a: 'Capital should be treated as illiquid for the duration of the project. The timeline covers acquisition, renovation, marketing, and resale, and proceeds are typically distributed after the final exit process is completed.',
  },
  {
    q: 'What are the risks and how do you mitigate them?',
    s: 'The main risks are market, execution, liquidity, timing, and currency risk, while mitigation comes from disciplined acquisition, controlled execution, zero leverage, and short project cycles.',
    a: 'No real estate strategy is risk-free. The model is designed to reduce risk by buying below renovated value, controlling renovation budgets, avoiding leverage, and operating on relatively short 12–18 month cycles rather than long-duration holds.',
  },
];

export default function SmarterAlternative() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-brand-bg font-sans selection:bg-emerald-500/30">
      <GlobalNavbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://pub-46bf43f4e0fb4daab5a13e7a41223da4.r2.dev/images/0A6A6039.jpg" 
            alt="Dubai luxury villa" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/95 backdrop-blur-[2px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label shadow-sm border border-emerald-100">A smarter alternative to traditional investing</span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-zinc-900 mb-6 md:mb-8 tracking-tight leading-[1.15] md:leading-[1.1]">
              Access Dubai's <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400">Luxury Villa Value Gap</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-zinc-600 max-w-3xl mx-auto leading-relaxed mb-8 md:mb-10 font-light">
              A different profile for investors looking beyond ETFs, buy-to-let, and long off-plan cycles: active value creation, defined exits, and regulated access.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 md:mb-16">
              <a href="https://investdubai.my.smartcrowd.ae/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-zinc-900 text-white px-8 py-4 rounded-full font-medium inline-flex items-center justify-center gap-2 shadow-xl shadow-zinc-900/20 hover:bg-zinc-800 hover:-translate-y-0.5 transition-all">
                Create an Account <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#how-it-works" className="w-full sm:w-auto bg-white text-zinc-900 px-8 py-4 rounded-full font-medium inline-flex items-center justify-center gap-2 border border-zinc-200 hover:bg-zinc-50 transition-all">
                See How It Works
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto">
              {[
                { label: 'Historical Payout', value: '29% avg' },
                { label: 'Hold Period', value: '12–18 mo' },
                { label: 'Leverage Used', value: '0%' },
                { label: 'Profits Distributed', value: '$80M+' }
              ].map((stat, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + (i * 0.1) }}
                  key={stat.label} 
                  className="bg-white/80 backdrop-blur-md border border-zinc-200 rounded-2xl p-4 shadow-sm"
                >
                  <p className="text-xl md:text-2xl font-bold text-zinc-900 mb-1">{stat.value}</p>
                  <p className="text-[10px] md:text-xs font-medium text-zinc-500 uppercase tracking-wider">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 bg-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-zinc-950 -z-10" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-widest rounded-full mb-6 border border-emerald-500/20">Why this strategy</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Why some investors choose this over traditional investing</h2>
            <p className="text-zinc-400 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light">Traditional investing often forces a trade-off between slow compounding, illiquidity, and exposure without clear value creation. Here is how the usual options compare.</p>
          </div>
          
          {/* Desktop Table View */}
          <div className="hidden md:block overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-xl mb-12 shadow-2xl">
            <table className="w-full text-sm md:text-base whitespace-nowrap md:whitespace-normal">
              <thead>
                <tr className="border-b border-zinc-800 bg-zinc-900/80">
                  <th className="text-left p-6 text-white font-semibold tracking-wide">Investment</th>
                  <th className="text-left p-6 text-white font-semibold tracking-wide">Return Profile</th>
                  <th className="text-left p-6 text-white font-semibold tracking-wide">Timeline</th>
                  <th className="text-left p-6 text-white font-semibold tracking-wide">Trade-off</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/50">
                {comparisonRows.map((row, i) => (
                  <tr key={i} className={`transition-colors ${i === 3 ? 'bg-emerald-950/30 relative' : 'hover:bg-zinc-800/30'}`}>
                    {i === 3 && (
                      <td className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500"></td>
                    )}
                    {row.map((cell, j) => (
                      <td key={j} className={`p-6 ${i === 3 ? 'text-white font-medium' : 'text-zinc-400'}`}>
                        {i === 3 && j === 0 ? (
                          <span className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                            {cell}
                          </span>
                        ) : cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-4 mb-12">
            {comparisonRows.map((row, i) => {
              if (i !== 1 && i !== 3) return null;
              return (
                <div key={i} className={`p-6 rounded-3xl border relative overflow-hidden ${i === 3 ? 'bg-emerald-950/20 border-emerald-500/30' : 'bg-zinc-900/50 border-zinc-800'}`}>
                  {i === 3 && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500"></div>
                  )}
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                    {i === 3 && <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>}
                    {row[0]}
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <span className="text-zinc-500 text-[10px] uppercase tracking-wider block mb-1.5 font-medium">Return Profile</span>
                      <span className={`text-sm ${i === 3 ? 'text-emerald-400 font-semibold' : 'text-zinc-300'}`}>{row[1]}</span>
                    </div>
                    <div>
                      <span className="text-zinc-500 text-[10px] uppercase tracking-wider block mb-1.5 font-medium">Timeline</span>
                      <span className={`text-sm ${i === 3 ? 'text-white font-medium' : 'text-zinc-300'}`}>{row[2]}</span>
                    </div>
                    <div>
                      <span className="text-zinc-500 text-[10px] uppercase tracking-wider block mb-1.5 font-medium">Trade-off</span>
                      <span className={`text-sm leading-relaxed block ${i === 3 ? 'text-white' : 'text-zinc-400'}`}>{row[3]}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="text-center text-zinc-500 max-w-3xl mx-auto text-sm">For some investors, this offers a more deliberate way to access real estate returns without long holding periods or direct property management.</p>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] -z-10" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="section-label border border-emerald-100">How it works</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-zinc-900">
              The investment lifecycle
            </h2>
            <p className="text-lg md:text-xl text-zinc-600 leading-relaxed font-light">
              The model is simple: acquire undervalued villas, renovate them to premium standards, and sell into the renovated market. The return comes from execution, not from waiting passively for market appreciation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 relative">
            <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-[1px] bg-gradient-to-r from-transparent via-zinc-200 to-transparent z-0" />

            {steps.map((step, index) => (
              <div key={index} className="relative z-10 group h-full">
                <div className="h-full p-8 rounded-3xl bg-white border border-zinc-200 shadow-sm hover:shadow-xl hover:shadow-zinc-200/50 hover:border-zinc-300 transition-all duration-300 flex flex-col relative overflow-hidden hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="w-14 h-14 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-8 group-hover:border-emerald-200 group-hover:bg-emerald-50 transition-colors duration-300 relative z-10">
                    <step.icon className="w-6 h-6 text-zinc-600 group-hover:text-emerald-600 transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  
                  <div className="absolute top-6 right-6 text-6xl font-bold text-zinc-100 pointer-events-none transition-colors duration-300 group-hover:text-zinc-200 select-none">
                    0{index + 1}
                  </div>

                  <h3 className="text-xl font-semibold mb-4 text-zinc-900 relative z-10 tracking-tight">{step.title}</h3>
                  <p className="text-zinc-600 leading-relaxed text-sm flex-grow relative z-10 font-light">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-3xl font-bold text-zinc-900 text-center mb-12 tracking-tight">Why the return profile is different ?</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {whyDifferent.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="bg-zinc-50 rounded-3xl p-8 border border-zinc-100 hover:border-zinc-200 transition-colors">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center mb-6 shadow-sm">
                      <Icon className="w-5 h-5 text-zinc-700" />
                    </div>
                    <h4 className="text-xl font-bold text-zinc-900 mb-3">{item.title}</h4>
                    <p className="text-zinc-600 leading-relaxed text-sm font-light">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Protection Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://pub-46bf43f4e0fb4daab5a13e7a41223da4.r2.dev/images/flip-31.jpg" 
            alt="Dubai luxury villa" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-zinc-950/90 backdrop-blur-sm" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-widest rounded-full mb-6 border border-emerald-500/20">Investor safeguards</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">How the structure protects investors</h2>
            <p className="text-zinc-400 max-w-3xl mx-auto text-lg leading-relaxed">This strategy is not only about returns. Each project is structured to protect investors through asset-backed ownership, controlled execution, and aligned incentives.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {protectionCards.map((card) => (
              <div key={card.title} className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-8 h-full flex flex-col hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center mb-6 border border-emerald-500/30">
                  <ShieldCheck className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 leading-snug">{card.title}</h3>
                <p className="text-zinc-300 leading-relaxed text-sm mb-6">{card.description}</p>
                <div className="mt-auto pt-6 border-t border-white/10">
                  <p className="text-zinc-500 leading-relaxed text-xs italic">{card.subtext}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Track Record */}
      <section id="track-record" className="py-24 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-12">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-widest rounded-full mb-6 border border-emerald-500/20">Track Record</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">40+ villas acquired, renovated & sold</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-light">Every project follows the same model: find undervalued villas, renovate to modern standards, and sell at full market value.</p>
          </div>
        </div>
        <TrackRecordCarousel rows={1} showTitle={false} showExpandButton={false} />
      </section>

      {/* Fit Section */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="section-label border border-emerald-100">Portfolio fit</span>
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6 tracking-tight">Is this the right fit for your portfolio?</h2>
            <p className="text-zinc-600 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light">If you are looking for a more deliberate alternative to traditional investing, this model may be worth exploring further.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl border border-zinc-200 p-10 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -z-0 opacity-50" />
              <h3 className="text-2xl font-bold text-zinc-900 mb-8 relative z-10">This may fit if you...</h3>
              <div className="space-y-6 relative z-10">
                {fit.map((item) => (
                  <div key={item} className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                    </div>
                    <p className="text-zinc-700 leading-relaxed font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-zinc-100 rounded-3xl border border-zinc-200 p-10 relative overflow-hidden">
              <h3 className="text-2xl font-bold text-zinc-900 mb-8 relative z-10">This may not fit if you...</h3>
              <div className="space-y-6 relative z-10">
                {notFit.map((item) => (
                  <div key={item} className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-zinc-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-4 h-4 text-zinc-500" />
                    </div>
                    <p className="text-zinc-600 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://pub-46bf43f4e0fb4daab5a13e7a41223da4.r2.dev/images/0K8A7245.jpg" 
            alt="Dubai luxury villa" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-zinc-900/80 backdrop-blur-sm" />
        </div>
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">
          <span className="inline-block px-4 py-1.5 bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest rounded-full mb-8 border border-emerald-500/30">Get Started</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Get access to Dubai's luxury villa value gap</h2>
          <p className="text-zinc-300 mb-12 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-light">Open your account in minutes, explore current projects, and invest through a regulated, asset-backed structure.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://investdubai.my.smartcrowd.ae/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-emerald-500 text-white px-8 py-4 rounded-full font-medium inline-flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 hover:bg-emerald-400 hover:-translate-y-0.5 transition-all">
              Create an Account <ArrowRight className="w-4 h-4" />
            </a>
            <a href="https://investdubai.my.smartcrowd.ae/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-transparent text-white px-8 py-4 rounded-full font-medium inline-flex items-center justify-center gap-2 border border-white/20 hover:bg-white/10 transition-all">
              <Phone className="w-4 h-4" /> Book a Call
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="section-label border border-emerald-100">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6 tracking-tight">Common investor questions</h2>
            <p className="text-zinc-600 max-w-2xl mx-auto text-lg md:text-xl font-light">Key questions around structure, returns, liquidity, and risk.</p>
          </div>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <div key={item.q} className="bg-zinc-50 border border-zinc-200 rounded-2xl overflow-hidden hover:border-zinc-300 transition-colors">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)} 
                  className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-semibold text-lg text-zinc-900 pr-8">{item.q}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${openFaq === i ? 'bg-zinc-200' : 'bg-zinc-100'}`}>
                    <ChevronDown className={`w-5 h-5 text-zinc-600 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8 pt-2 border-t border-zinc-200/50">
                        <p className="font-semibold text-zinc-900 mb-4 leading-relaxed">{item.s}</p>
                        <p className="text-zinc-600 leading-relaxed font-light">{item.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
      <GlobalFooter />
    </div>
  );
}
