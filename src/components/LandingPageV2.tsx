import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  Play, 
  ArrowRight, 
  ArrowUpRight, 
  Menu, 
  X, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  ShieldCheck,
  History,
  Scale,
  Lock,
  Check,
  Clock,
  Plus,
  Minus,
  Globe,
  Phone
} from 'lucide-react';
import { PageConfig, LanguageContent } from '../types/config';
import logo from '../assets/investdubailogo.svg';
import heroImg from '../assets/hero_img.jpeg';

interface LandingPageV2Props {
  config: PageConfig;
}

const getCTAText = (language: 'en' | 'fr') => ({
  primary: language === 'en' ? 'Get Started' : "S'inscrire",
  secondary: language === 'en' ? 'Book a Call with an Advisor' : 'Appeler un conseiller',
});

const pageDescriptions: Record<number, { topic: string; kpi: string }> = {
  1: { topic: "Dubai Luxury Flips: Hands-Free Flipping", kpi: "signup_complete" },
  2: { topic: "Minimum Investment (2,000 AED)", kpi: "signup → deposit" },
  3: { topic: "Flipping vs Buy-to-Let Comparison", kpi: "signup_complete" },
  4: { topic: "Security: SPV Ownership & Protections", kpi: "deposit + call" },
  5: { topic: "Dubai Market 2026: Demand Drivers", kpi: "signup_complete" },
  6: { topic: "Timeline: 6-18 Months Explained", kpi: "signup → deposit" },
  7: { topic: "Returns & Profit Sharing (60/40)", kpi: "deposit + call" },
  8: { topic: "Remote Investing: 100% Digital", kpi: "signup_complete" },
  9: { topic: "Beginner's Guide (No Landlord)", kpi: "signup_complete" },
  10: { topic: "Complete FAQ Hub", kpi: "deposit + call" },
};

const isInIframe = () => {
  try { return window.self !== window.top; } catch { return true; }
};

const PageNavigation = ({ currentPage }: { currentPage: number }) => {
  if (isInIframe()) return null;
  return (
    <div className="fixed top-0 left-0 right-0 bg-black z-[60] py-2">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-center gap-2">
        <span className="text-xs font-bold uppercase tracking-widest text-white/50 mr-4">Pages:</span>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
          <div key={num} className="relative group">
            <Link
              to={`/v2/page/${num}`}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                currentPage === num
                  ? 'text-black'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
              style={currentPage === num ? { backgroundColor: '#28de91' } : {}}
            >
              {num}
            </Link>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[70]">
              <div className="bg-white text-black rounded-lg px-4 py-3 shadow-xl min-w-[200px] text-center">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-white"></div>
                <p className="text-xs font-bold text-zinc-500 mb-1">Page {num}</p>
                <p className="text-sm font-medium">{pageDescriptions[num].topic}</p>
                <p className="text-[10px] text-zinc-400 mt-1 uppercase tracking-wider">KPI: {pageDescriptions[num].kpi}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

interface StatProps {
  label: string;
  value: string;
  subValue?: string;
}

const StatCard = ({ label, value, subValue }: StatProps) => (
  <div className="flex flex-col gap-1 border-l border-zinc-200 pl-6 py-2 first:border-0 first:pl-0">
    <p className="text-xs text-zinc-500 uppercase tracking-widest font-semibold">{label}</p>
    <p className="text-3xl font-bold tracking-tight">{value} <span className="text-sm font-medium text-zinc-400">{subValue}</span></p>
  </div>
);

const Navbar = ({ 
  content, 
  language, 
  onLanguageToggle 
}: { 
  content: LanguageContent; 
  language: 'en' | 'fr';
  onLanguageToggle: () => void;
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed left-0 right-0 z-50 transition-all duration-300 ${isInIframe() ? 'top-0' : 'top-10'} ${isScrolled ? 'bg-white/90 backdrop-blur-md border-b py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-12">
          <a href="#" className="flex items-center">
            <img src={logo} alt="InvestDubai" className="h-6" />
          </a>
          <div className="hidden md:flex items-center gap-8 font-medium text-sm text-zinc-600">
            <a href="#how-it-works" className="hover:text-black transition-colors">{content.nav.howItWorks}</a>
            <a href="#faq" className="hover:text-black transition-colors">{content.nav.faq}</a>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <button 
            onClick={onLanguageToggle}
            className="flex items-center gap-2 text-sm font-medium hover:underline underline-offset-4"
          >
            <Globe size={14} />
            {language === 'en' ? 'EN' : 'FR'}
          </button>
          <button className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-zinc-800 transition-all">
            {language === 'en' ? 'Get Started' : "S'inscrire"}
          </button>
        </div>
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b p-6 flex flex-col gap-6 shadow-xl animate-in fade-in slide-in-from-top-4">
          <a href="#how-it-works" className="text-lg font-medium">{content.nav.howItWorks}</a>
          <a href="#faq" className="text-lg font-medium">{content.nav.faq}</a>
          <hr />
          <div className="flex flex-col gap-3">
            <button 
              onClick={onLanguageToggle}
              className="text-center font-medium py-3 border border-zinc-200 rounded-full"
            >
              {language === 'en' ? 'Français' : 'English'}
            </button>
            <button className="bg-black text-white py-4 rounded-full font-medium">{language === 'en' ? 'Get Started' : "S'inscrire"}</button>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = ({ content, language }: { content: LanguageContent; language: 'en' | 'fr' }) => (
  <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
      <div className="relative z-10 flex flex-col gap-8">
        <div className="flex items-center gap-2 bg-zinc-50 border w-fit px-3 py-1 rounded-full text-xs font-medium">
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#28de91' }}></span>
          {content.badge}
          <ChevronRight size={14} className="ml-1 opacity-50" />
        </div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-balance leading-[0.9]">
          {content.headline}
        </h1>
        <p className="text-lg text-zinc-600 leading-relaxed max-w-xl">
          {content.answerCapsule.substring(0, 200)}...
        </p>
        <div className="flex flex-wrap gap-4 mt-4">
          <button className="text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide hover:opacity-90 flex items-center gap-2 group transition-all" style={{ backgroundColor: '#28de91' }}>
            {language === 'en' ? 'Get Started' : "S'inscrire"}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="flex items-center gap-2 px-6 py-4 rounded-full font-bold text-sm text-zinc-500 hover:text-black transition-colors">
            <Phone size={14} />
            {language === 'en' ? 'Book a Call with an Advisor' : 'Appeler un conseiller'}
          </button>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-8">
          <StatCard label={content.metricLabel} value={content.metricValue} subValue={content.metricSubtext} />
        </div>
      </div>
      <div className="relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120%] bg-zinc-50/50 rounded-full blur-3xl -z-10"></div>
        <img 
          src={heroImg}
          alt={content.heroImageAlt}
          className="rounded-3xl shadow-2xl"
        />
        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-zinc-100 hidden md:block">
          <p className="text-sm font-semibold text-zinc-400 mb-1">{content.metricLabel}</p>
          <p className="text-3xl font-bold">{content.metricValue} <span className="text-sm font-medium text-zinc-400">{content.metricSubtext}</span></p>
        </div>
      </div>
    </div>
  </section>
);

const HowItWorks = ({ content }: { content: LanguageContent }) => (
  <section id="how-it-works" className="py-24 bg-zinc-900 overflow-hidden text-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            {content.howItWorks.title}
          </h2>
          <p className="text-zinc-400 text-lg">
            {content.howItWorks.subtitle}
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {content.howItWorks.steps.map((step, idx) => (
          <div 
            key={idx} 
            className="bg-zinc-800/50 border border-white/5 rounded-2xl p-8 flex flex-col gap-4 hover:bg-zinc-800 transition-all cursor-default group"
          >
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-2 transition-all" style={{ '--hover-bg': '#28de91' } as React.CSSProperties}>
              <span className="text-sm font-bold">{String(idx + 1).padStart(2, '0')}</span>
            </div>
            <h3 className="text-xl font-bold leading-tight">{step.title}</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const getIcon = (iconName: string, size: number = 20) => {
  const icons: Record<string, React.ReactNode> = {
    shield: <ShieldCheck size={size} />,
    history: <History size={size} />,
    scale: <Scale size={size} />,
    lock: <Lock size={size} />,
    check: <Check size={size} />,
    clock: <Clock size={size} />,
  };
  return icons[iconName] || <ShieldCheck size={size} />;
};

const TrustSection = ({ content, language }: { content: LanguageContent; language: 'en' | 'fr' }) => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6">Why Trust Us</p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance leading-tight mb-12">
          {content.trust.title}
        </h2>
        <div className="flex flex-col">
          {content.trust.items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 py-6 border-b border-zinc-100 last:border-0 group cursor-default">
              <div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-600 group-hover:text-white transition-all duration-300" style={{ '--hover-bg': '#28de91' } as React.CSSProperties}>
                {getIcon(item.icon)}
              </div>
              <div>
                <p className="text-lg font-medium text-zinc-700">{item.title}</p>
                <p className="text-sm text-zinc-500">{item.description.substring(0, 80)}...</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border-2 relative overflow-hidden" style={{ borderColor: '#28de91' }}>
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl -mr-32 -mt-32" style={{ backgroundColor: 'rgba(40, 222, 145, 0.1)' }}></div>
        
        <div className="relative z-10">
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3">{language === 'en' ? 'Ready to Start?' : 'Prêt à commencer ?'}</p>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
              {language === 'en' ? 'Start Investing Today' : 'Commencez à investir'}
            </h3>
            <p className="text-zinc-600 leading-relaxed">
              {language === 'en' ? 'Join thousands of investors building wealth through Dubai real estate. Start from 2,000 AED.' : 'Rejoignez des milliers d\'investisseurs qui construisent leur patrimoine grâce à l\'immobilier de luxe à Dubai. Dès 2 000 AED.'}
            </p>
          </div>

          <ul className="flex flex-col gap-3 mb-8">
            {(language === 'en' ? ['2-minute signup', 'Start from 2,000 AED', 'Secure SPV ownership', '100% remote process'] : ['Inscription en 2 minutes', 'Dès 2 000 AED', 'Propriété légale sécurisée', '100% à distance']).map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-sm font-medium text-zinc-700">
                <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: '#28de91' }}>
                  <Check size={12} className="text-white" />
                </div>
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3">
            <button className="w-full text-black py-4 rounded-full font-bold text-sm tracking-widest hover:opacity-90 transition-colors" style={{ backgroundColor: '#28de91' }}>
              {language === 'en' ? 'Get Started' : "S'inscrire"}
            </button>
            <button className="w-full py-3 rounded-full font-medium text-sm text-zinc-500 hover:text-zinc-700 transition-colors flex items-center justify-center gap-2">
              <Phone size={14} />
              {language === 'en' ? 'Book a Call with an Advisor' : 'Appeler un conseiller'}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-zinc-100">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group transition-colors"
      >
        <span className={`text-lg font-bold pr-8 transition-colors ${isOpen ? 'text-black' : 'text-zinc-600 group-hover:text-black'}`}>{question}</span>
        {isOpen ? <Minus size={20} className="shrink-0" /> : <Plus size={20} className="shrink-0 text-zinc-300 group-hover:text-black" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[600px] pb-6' : 'max-h-0'}`}>
        <p className="text-zinc-600 leading-relaxed max-w-3xl">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = ({ content }: { content: LanguageContent }) => (
  <section id="faq" className="py-24 bg-zinc-50">
    <div className="max-w-4xl mx-auto px-6">
      <div className="text-center mb-16">
        <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6">FAQ</p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{content.faq.title}</h2>
        <p className="text-zinc-500 text-lg">{content.faq.subtitle}</p>
      </div>
      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-zinc-100">
        {content.faq.items.map((faq, idx) => (
          <FAQItem key={idx} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  </section>
);

const FinalCTA = ({ content, language }: { content: LanguageContent; language: 'en' | 'fr' }) => (
  <section className="py-24 md:py-32">
    <div className="max-w-5xl mx-auto px-6 bg-zinc-900 rounded-[48px] p-12 md:p-24 text-center relative overflow-hidden">
      <div className="relative z-10 flex flex-col items-center gap-8">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">{content.nextStep.title}</h2>
        <p className="text-zinc-400 text-lg max-w-xl">{content.nextStep.subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <button className="text-black px-10 py-5 rounded-full font-bold text-sm tracking-widest hover:scale-105 transition-transform" style={{ backgroundColor: '#28de91' }}>
            {language === 'en' ? 'Get Started' : "S'inscrire"}
          </button>
          <button className="border border-white/20 text-white px-10 py-5 rounded-full font-bold text-sm tracking-widest hover:bg-white/10 transition-all flex items-center justify-center gap-2">
            <Phone size={14} />
            {language === 'en' ? 'Book a Call with an Advisor' : 'Appeler un conseiller'}
          </button>
        </div>
        <p className="text-zinc-500 text-xs uppercase tracking-widest mt-4">{content.nextStep.footnote}</p>
      </div>
    </div>
  </section>
);

const Footer = ({ content, language }: { content: LanguageContent; language: 'en' | 'fr' }) => (
  <footer className="bg-black text-white pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-2 md:col-span-1">
          <a href="#" className="flex items-center mb-8">
            <img src={logo} alt="InvestDubai" className="h-6 invert" />
          </a>
          <p className="text-zinc-500 text-sm leading-relaxed">
            {content.footer.description}
          </p>
        </div>
        
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest mb-6 opacity-40">{content.footer.explorationTitle}</h4>
          <ul className="flex flex-col gap-4 text-zinc-400 text-sm font-medium">
            {content.footer.explorationLinks.map((link, idx) => (
              <li key={idx}><a href={link.href} className="hover:text-white transition-all">{link.label}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest mb-6 opacity-40">{content.footer.legalTitle}</h4>
          <ul className="flex flex-col gap-4 text-zinc-400 text-sm font-medium">
            {content.footer.legalLinks.map((link, idx) => (
              <li key={idx}><a href={link.href} className="hover:text-white transition-all">{link.label}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <button className="w-full text-black py-4 rounded-full font-bold text-sm tracking-widest hover:opacity-90 transition-colors mb-8" style={{ backgroundColor: '#28de91' }}>
            {language === 'en' ? 'Get Started' : "S'inscrire"}
          </button>
          <div className="flex gap-6 justify-center md:justify-start">
            <Twitter size={18} className="text-zinc-500 hover:text-white cursor-pointer transition-colors" />
            <Instagram size={18} className="text-zinc-500 hover:text-white cursor-pointer transition-colors" />
            <Youtube size={18} className="text-zinc-500 hover:text-white cursor-pointer transition-colors" />
            <Linkedin size={18} className="text-zinc-500 hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-800 pt-10 text-[10px] text-zinc-500 leading-relaxed space-y-4">
        <p>{content.footer.disclaimer}</p>
        <p>{content.footer.riskWarning}</p>
        <p>{content.footer.lastUpdated}</p>
      </div>
    </div>
  </footer>
);

export const LandingPageV2: React.FC<LandingPageV2Props> = ({ config }) => {
  const defaultLang = typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('lang') === 'fr' ? 'fr' : 'en';
  const [language, setLanguage] = useState<'en' | 'fr'>(defaultLang);
  const content = config.content[language];
  
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'fr' : 'en');
  };

  return (
    <div className="min-h-screen bg-white">
      <PageNavigation currentPage={config.meta.pageNumber} />
      <Navbar content={content} language={language} onLanguageToggle={toggleLanguage} />
      <main>
        <Hero content={content} language={language} />
        <HowItWorks content={content} />
        <TrustSection content={content} language={language} />
        <FAQ content={content} />
        <FinalCTA content={content} language={language} />
      </main>
      <Footer content={content} language={language} />
    </div>
  );
};

export default LandingPageV2;
