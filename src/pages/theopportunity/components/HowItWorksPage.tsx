import { useState } from 'react';
import { UserPlus, Search, Wallet, Eye, Banknote, ArrowRight, Phone, MessageCircle, Instagram, Users, LayoutDashboard, Mail, CheckCircle, Play } from 'lucide-react';
import Logo from '../../../assets/logo.svg';

const processSteps = [
  {
    number: '01',
    title: 'Create Your Account',
    description: 'Sign up online in under 2 minutes. Complete identity verification (KYC) — we verify your documents within 24-48 hours. No payment required until you invest.',
    icon: UserPlus,
    details: [
      'Simple online registration',
      'Government ID + proof of address',
      'Approval within 24-48 hours',
      'Free account — no commitment'
    ]
  },
  {
    number: '02',
    title: 'Browse Available Projects',
    description: 'Explore current villa projects with full transparency. Each listing includes location, acquisition price, renovation budget, target return, and projected timeline.',
    icon: Search,
    details: [
      'Detailed project financials',
      'High-resolution property photos',
      'Comparable sales data',
      'Risk assessment included'
    ]
  },
  {
    number: '03',
    title: 'Invest & Become a Co-Owner',
    description: 'Fund your wallet via bank transfer and allocate capital to your chosen project. A dedicated SPV is created — you become a legal co-owner of the villa.',
    icon: Wallet,
    details: [
      'Minimum €1,000 investment',
      'Secure bank transfer',
      'SPV shares issued to you',
      'Title deed held by SPV'
    ]
  },
  {
    number: '04',
    title: 'Watch the Renovation Happen',
    description: 'Track every stage of the renovation with unprecedented transparency. Weekly video updates, WhatsApp group access, and real-time dashboard tracking.',
    icon: Eye,
    details: [
      'Weekly Instagram story updates',
      'Dedicated WhatsApp group',
      'Live dashboard tracking',
      'Direct team communication'
    ]
  },
  {
    number: '05',
    title: 'Get Paid When It Sells',
    description: 'When the renovated villa sells, your capital plus profits are credited to your wallet within 2-4 weeks. Withdraw to your bank or reinvest in the next project.',
    icon: Banknote,
    details: [
      '15% priority return paid first',
      'Profits credited to wallet',
      'Withdraw or reinvest',
      'Full transaction transparency'
    ]
  }
];

const experienceFeatures = [
  {
    icon: MessageCircle,
    title: 'Dedicated WhatsApp Group',
    description: 'Every project has its own WhatsApp group where investors receive real-time updates directly from the team on the ground. Ask questions, see progress photos, and stay connected with other investors.',
    highlight: 'Real-time communication',
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: Instagram,
    title: 'Weekly Instagram Stories',
    description: 'Follow our renovation progress through weekly Instagram story updates. See the actual work happening — demolition, construction, finishing touches. Nothing hidden, everything documented.',
    highlight: 'Visual progress tracking',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: Users,
    title: 'Meet Our In-House Architects',
    description: 'Our renovations are executed by our own in-house architecture and construction teams. Daily on-site supervision ensures quality control. You\'ll see our architects in the updates — real people, real accountability.',
    highlight: '50+ villas completed',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: LayoutDashboard,
    title: 'Easy-to-Use Platform',
    description: 'Your investor dashboard gives you complete visibility: project milestones, budget tracking, timeline updates, and all documentation in one place. Simple, clean, and always accessible.',
    highlight: '24/7 dashboard access',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: Mail,
    title: 'Regular Email Updates',
    description: 'Receive structured email reports at key milestones: acquisition complete, renovation phases, listing, offers received, and final sale. You\'ll never wonder what\'s happening with your investment.',
    highlight: 'Milestone notifications',
    image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=800&q=80'
  }
];

export const HowItWorksPage = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="min-h-screen bg-brand-bg">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-bg/80 backdrop-blur-md border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <a href="/newhomepage" className="flex items-center">
            <img src={Logo} alt="InvestDubai" className="h-6" />
          </a>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-muted">
            <a href="/newhomepage#opportunity" className="hover:text-brand-dark transition-colors">The Opportunity</a>
            <a href="/newhomepage/how-it-works" className="text-brand-dark font-semibold">How It Works</a>
            <a href="/newhomepage/investopedia" className="hover:text-brand-dark transition-colors">Investopedia</a>
            <a href="/newhomepage/price-database" className="hover:text-brand-dark transition-colors">Price Database</a>
            <a href="/newhomepage/faq" className="hover:text-brand-dark transition-colors">FAQ</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="text-sm font-medium text-brand-muted hover:text-brand-dark transition-colors">
              Log In
            </a>
            <a href="#" className="bg-brand-accent text-white px-5 py-2.5 rounded-full text-sm font-medium shadow-md shadow-brand-accent/25 hover:shadow-lg hover:-translate-y-0.5 transition-all">
              Create Your Account
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <span className="section-label">The Complete Process</span>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6 leading-tight">
            How Hands-Free Villa Flipping Works
          </h1>
          <p className="text-base md:text-lg text-brand-muted max-w-2xl mx-auto mb-8 leading-relaxed">
            From creating your account to collecting your profits — here's exactly what happens at every stage. Full transparency, no surprises.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#" className="bg-brand-accent text-white px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 shadow-md shadow-brand-accent/25 hover:shadow-lg hover:-translate-y-0.5 transition-all">
              Create Your Free Account
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#experience" className="border border-brand-border bg-white text-brand-dark px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
              <Play className="w-4 h-4" />
              See What You Experience
            </a>
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-16 bg-white border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="section-label">5 Simple Steps</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              Your Investment Journey
            </h2>
            <p className="text-brand-muted max-w-2xl mx-auto">
              We handle the sourcing, renovation, and sale. You invest, track progress, and collect profits.
            </p>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden lg:block mb-16">
            <div className="flex items-center justify-between mb-8">
              {processSteps.map((step, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStep(i)}
                  className={`flex flex-col items-center gap-3 transition-all ${
                    activeStep === i ? 'scale-105' : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all ${
                    activeStep === i 
                      ? 'bg-brand-accent text-white shadow-lg shadow-brand-accent/25' 
                      : 'bg-brand-bg text-brand-muted border border-brand-border'
                  }`}>
                    <step.icon className="w-7 h-7" />
                  </div>
                  <span className={`text-xs font-bold uppercase tracking-wider ${
                    activeStep === i ? 'text-brand-accent' : 'text-brand-muted'
                  }`}>
                    Step {step.number}
                  </span>
                </button>
              ))}
            </div>
            
            {/* Progress Line */}
            <div className="relative h-1 bg-brand-border rounded-full mb-12">
              <div 
                className="absolute top-0 left-0 h-full bg-brand-accent rounded-full transition-all duration-500"
                style={{ width: `${(activeStep / (processSteps.length - 1)) * 100}%` }}
              />
            </div>

            {/* Active Step Detail */}
            <div className="bg-brand-bg rounded-3xl p-8 border border-brand-border">
              <div className="grid grid-cols-2 gap-12">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-brand-accent-light rounded-xl flex items-center justify-center">
                      {(() => {
                        const Icon = processSteps[activeStep].icon;
                        return <Icon className="w-6 h-6 text-brand-accent" />;
                      })()}
                    </div>
                    <span className="text-sm font-bold text-brand-accent uppercase tracking-wider">
                      Step {processSteps[activeStep].number}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-brand-dark mb-4">
                    {processSteps[activeStep].title}
                  </h3>
                  <p className="text-brand-muted leading-relaxed text-lg">
                    {processSteps[activeStep].description}
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-6 border border-brand-border">
                  <h4 className="font-semibold text-brand-dark mb-4">What happens:</h4>
                  <ul className="space-y-3">
                    {processSteps[activeStep].details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-brand-muted">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Steps */}
          <div className="lg:hidden space-y-6">
            {processSteps.map((step, i) => (
              <div key={i} className="bg-brand-bg rounded-2xl p-6 border border-brand-border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-brand-accent-light rounded-xl flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-brand-accent" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-brand-accent uppercase tracking-wider">
                      Step {step.number}
                    </span>
                    <h3 className="text-lg font-bold text-brand-dark">{step.title}</h3>
                  </div>
                </div>
                <p className="text-brand-muted leading-relaxed mb-4">{step.description}</p>
                <ul className="space-y-2">
                  {step.details.map((detail, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-brand-muted">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section - Dark Background */}
      <section id="experience" className="py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-white/10 text-brand-accent text-xs font-bold uppercase tracking-widest rounded-full mb-4">
              After You Invest
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Your Experience as an Investor
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              We don't just take your money and disappear. Here's exactly how we keep you informed and involved throughout the entire process.
            </p>
          </div>

          {/* Feature Cards with Images */}
          <div className="space-y-8 mb-16">
            {experienceFeatures.map((feature, i) => (
              <div 
                key={i} 
                className={`grid md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={`${i % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden aspect-video">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-3">
                      <div className="w-10 h-10 bg-brand-accent rounded-xl flex items-center justify-center">
                        <feature.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-xs font-bold text-white uppercase tracking-wider bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                        {feature.highlight}
                      </span>
                    </div>
                  </div>
                </div>
                <div className={`${i % 2 === 1 ? 'md:order-1' : ''}`}>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-lg">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Reassurance Block */}
          <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-3xl p-8 md:p-12 border border-white/10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  No Black-Box Investing
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6 text-lg">
                  Traditional real estate investments leave you in the dark. You send money and hope for the best. We do the opposite — radical transparency at every stage.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">See exactly where your money goes</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">Watch the renovation happen in real-time</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">Direct access to the team on the ground</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">Full documentation at every milestone</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
                <div className="text-center">
                  <div className="text-5xl font-bold text-white mb-2">2,500+</div>
                  <div className="text-gray-500 mb-6">Active investors trust our process</div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <div className="text-2xl font-bold text-white">50+</div>
                      <div className="text-gray-500">Villas completed</div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <div className="text-2xl font-bold text-white">$327M</div>
                      <div className="text-gray-500">Capital deployed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white border-t border-brand-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <span className="section-label">Ready to Start?</span>
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
            Create Your Free Account
          </h2>
          <p className="text-brand-muted mb-8 max-w-xl mx-auto">
            Join 2,500+ investors. Browse available projects, see full financials, and invest when you're ready. No payment required until you find a project you love.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#" className="bg-brand-accent text-white px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 shadow-md shadow-brand-accent/25 hover:shadow-lg hover:-translate-y-0.5 transition-all">
              Create Your Free Account
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#" className="border border-brand-border bg-brand-bg text-brand-dark px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
              <Phone className="w-4 h-4" />
              Book a Call
            </a>
          </div>
          <p className="text-sm text-brand-muted mt-6">
            2-minute signup. No payment required until you invest.
          </p>
        </div>
      </section>

      {/* Global Footer */}
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
    </div>
  );
};

export default HowItWorksPage;
