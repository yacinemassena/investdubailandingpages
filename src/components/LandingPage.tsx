import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ArrowRight, 
  ShieldCheck, 
  History, 
  Scale, 
  Lock,
  Check,
  Clock,
  Phone,
  Plus,
  Minus,
  ExternalLink,
  AlertTriangle,
  Globe
} from 'lucide-react';
import { PageConfig, LanguageContent } from '../types/config';
import logo from '../assets/investdubailogo.svg';
import heroImg from '../assets/hero_img.jpeg';

interface LandingPageProps {
  config: PageConfig;
}

const Logo = () => (
  <a href="#" className="flex items-center">
    <img src={logo} alt="InvestDubai" className="h-6" />
  </a>
);

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
    <div className="fixed top-0 left-0 right-0 bg-[#28de91] z-[60] py-2">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-center gap-2">
        <span className="text-xs font-bold uppercase tracking-widest text-black/70 mr-4">Pages:</span>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
          <div key={num} className="relative group">
            <Link
              to={`/page/${num}`}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                currentPage === num
                  ? 'bg-black text-white'
                  : 'bg-white/30 text-black hover:bg-white/60'
              }`}
            >
              {num}
            </Link>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[70]">
              <div className="bg-black text-white rounded-lg px-4 py-3 shadow-xl min-w-[200px] text-center">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-black"></div>
                <p className="text-xs font-bold text-[#28de91] mb-1">Page {num}</p>
                <p className="text-sm font-medium">{pageDescriptions[num].topic}</p>
                <p className="text-[10px] text-white/60 mt-1 uppercase tracking-wider">KPI: {pageDescriptions[num].kpi}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const LanguageToggle = ({ 
  language, 
  onToggle 
}: { 
  language: 'en' | 'fr'; 
  onToggle: () => void;
}) => (
  <button 
    onClick={onToggle}
    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-xs font-bold uppercase tracking-widest"
  >
    <Globe size={14} />
    {language === 'en' ? 'EN' : 'FR'}
  </button>
);

const Navbar = ({ 
  content, 
  language, 
  onLanguageToggle 
}: { 
  content: LanguageContent; 
  language: 'en' | 'fr';
  onLanguageToggle: () => void;
}) => (
  <nav className={`fixed left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-100 z-50 ${isInIframe() ? 'top-0' : 'top-10'}`}>
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <Logo />
      <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest">
        <a href="#how-it-works" className="hover:text-[#28de91] transition-colors">{content.nav.howItWorks}</a>
        <a href="#faq" className="hover:text-[#28de91] transition-colors">{content.nav.faq}</a>
        <LanguageToggle language={language} onToggle={onLanguageToggle} />
        <button className="bg-black text-white px-6 py-2.5 rounded-full hover:bg-gray-800 transition-all shadow-sm">
          {language === 'en' ? 'Get Started' : "S'inscrire"}
        </button>
      </div>
      <div className="md:hidden">
        <LanguageToggle language={language} onToggle={onLanguageToggle} />
      </div>
    </div>
  </nav>
);

const Hero = ({ content, language }: { content: LanguageContent; language: 'en' | 'fr' }) => (
  <section className="pt-48 pb-24 px-6 relative overflow-hidden bg-white">
    <div className="absolute top-0 right-0 w-[600px] h-[600px] brand-green-glow -mr-64 -mt-32 pointer-events-none opacity-50"></div>
    
    <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center relative z-10">
      <div className="lg:col-span-7 space-y-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-100 text-[10px] font-bold uppercase tracking-[0.2em]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#28de91] animate-pulse"></span>
          {content.badge}
        </div>
        
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-[1.05] tracking-tight text-black">
          {content.headline}
        </h1>
        
        <div className="answer-capsule border-l-4 border-[#28de91] pl-6 py-2">
          <p className="text-xl text-gray-700 leading-relaxed font-medium">
            {content.answerCapsule}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-5 pt-4">
          <button className="bg-black text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 group hover:bg-gray-900 transition-all transform hover:-translate-y-0.5 shadow-xl shadow-black/5">
            {language === 'en' ? 'Get Started' : "S'inscrire"} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="bg-white border border-gray-200 text-black px-10 py-5 rounded-full font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:border-[#28de91] transition-all">
            <Phone size={16} className="text-[#28de91]" />
            {language === 'en' ? 'Book a Call with an Advisor' : 'Appeler un conseiller'}
          </button>
        </div>
      </div>
      
      <div className="lg:col-span-5 relative">
        <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl relative z-10 border border-gray-100">
          <img 
            src={heroImg}
            alt={content.heroImageAlt}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl border border-gray-50 z-20 space-y-2 min-w-[240px]">
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{content.metricLabel}</p>
          <p className="text-5xl font-serif text-black leading-none">{content.metricValue} <span className="text-lg font-medium text-gray-500">{content.metricSubtext}</span></p>
        </div>
      </div>
    </div>
  </section>
);

const HowItWorks = ({ content }: { content: LanguageContent }) => (
  <section id="how-it-works" className="py-32 bg-[#f9f9f8] px-6">
    <div className="max-w-7xl mx-auto">
      <div className="max-w-3xl mb-20">
        <h2 className="text-5xl font-serif mb-8 text-black">{content.howItWorks.title}</h2>
        <p className="text-xl text-gray-600 leading-relaxed">
          {content.howItWorks.subtitle}
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {content.howItWorks.steps.map((step, idx) => (
          <div key={idx} className="bg-white p-10 rounded-[2rem] border border-gray-100 flex flex-col gap-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-[#28de91]/10 flex items-center justify-center text-[#28de91] font-black text-sm italic">
              {String(idx + 1).padStart(2, '0')}
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const getIcon = (iconName: string, size: number = 28) => {
  const icons: Record<string, React.ReactNode> = {
    shield: <ShieldCheck className="text-[#28de91]" size={size} />,
    history: <History className="text-[#28de91]" size={size} />,
    scale: <Scale className="text-[#28de91]" size={size} />,
    lock: <Lock className="text-[#28de91]" size={size} />,
    check: <Check className="text-[#28de91]" size={size} />,
    clock: <Clock className="text-[#28de91]" size={size} />,
  };
  return icons[iconName] || <ShieldCheck className="text-[#28de91]" size={size} />;
};

const TrustSection = ({ content, language }: { content: LanguageContent; language: 'en' | 'fr' }) => (
  <section id="trust" className="py-32 px-6 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-24 items-start">
        <div className="space-y-12">
          <h2 className="text-5xl font-serif leading-tight">{content.trust.title}</h2>
          
          <div className="space-y-10">
            {content.trust.items.map((item, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center">
                  {getIcon(item.icon)}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-[3rem] p-12 relative overflow-hidden min-h-[500px] shadow-2xl border-2 border-[#28de91]">
          <div className="absolute top-0 right-0 w-80 h-80 brand-green-glow opacity-10 -mr-40 -mt-40"></div>
          
          <div className="relative z-10 h-full flex flex-col">
            <div className="mb-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">{language === 'en' ? 'Ready to Start?' : 'Prêt à commencer ?'}</p>
              <h3 className="text-3xl font-serif mb-4">{language === 'en' ? 'Start Investing Today' : 'Commencez à investir'}</h3>
              <p className="text-gray-600 leading-relaxed">
                {language === 'en' ? 'Join thousands of investors building wealth through Dubai real estate. Start from 2,000 AED.' : 'Rejoignez des milliers d\'investisseurs qui construisent leur patrimoine grâce à l\'immobilier de luxe à Dubai. Dès 2 000 AED.'}
              </p>
            </div>

            <ul className="space-y-4 mb-10 flex-1">
              {(language === 'en' ? ['2-minute signup', 'Start from 2,000 AED', 'Secure SPV ownership', '100% remote process'] : ['Inscription en 2 minutes', 'Dès 2 000 AED', 'Propriété légale sécurisée', '100% à distance']).map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-sm font-medium text-gray-700">
                  <div className="w-6 h-6 rounded-full bg-[#28de91] flex items-center justify-center">
                    <Check size={14} className="text-white" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <div className="space-y-4">
              <button className="w-full bg-[#28de91] text-black py-5 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#20c47f] transition-all shadow-lg shadow-[#28de91]/20">
                {language === 'en' ? 'Get Started' : "S'inscrire"}
              </button>
              <button className="w-full py-4 rounded-full font-medium text-sm text-gray-500 hover:text-gray-700 transition-colors flex items-center justify-center gap-2">
                <Phone size={16} />
                {language === 'en' ? 'Book a Call with an Advisor' : 'Appeler un conseiller'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-100">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 flex items-center justify-between text-left group transition-colors"
      >
        <span className={`text-xl font-bold pr-8 transition-colors ${isOpen ? 'text-[#28de91]' : 'text-black group-hover:text-[#28de91]'}`}>{question}</span>
        {isOpen ? <Minus size={24} className="shrink-0 text-[#28de91]" /> : <Plus size={24} className="shrink-0 text-gray-300 group-hover:text-[#28de91]" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[600px] pb-8' : 'max-h-0'}`}>
        <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = ({ content }: { content: LanguageContent }) => (
  <section id="faq" className="py-32 px-6 bg-white">
    <div className="max-w-4xl mx-auto">
      <div className="mb-20">
        <h2 className="text-5xl font-serif mb-6">{content.faq.title}</h2>
        <p className="text-xl text-gray-500">{content.faq.subtitle}</p>
      </div>
      <div className="divide-y divide-gray-100 border-t border-gray-100">
        {content.faq.items.map((faq, idx) => (
          <FAQItem key={idx} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  </section>
);

const NextStep = ({ content, language }: { content: LanguageContent; language: 'en' | 'fr' }) => (
  <section className="py-32 px-6 bg-[#f9f9f8]">
    <div className="max-w-7xl mx-auto bg-black rounded-[4rem] p-16 md:p-32 text-white text-center relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] brand-green-glow opacity-30 -mr-48 -mt-48 pointer-events-none"></div>
      
      <div className="relative z-10 space-y-10 max-w-3xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-serif">{content.nextStep.title}</h2>
        <p className="text-white/60 text-xl leading-relaxed">
          {content.nextStep.subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
          <button className="bg-[#28de91] text-black px-12 py-6 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#20c47f] transition-all transform hover:scale-105 shadow-2xl shadow-[#28de91]/20">
            {language === 'en' ? 'Get Started' : "S'inscrire"}
          </button>
          <button className="bg-transparent border border-white/20 hover:bg-white/5 px-12 py-6 rounded-full font-bold uppercase tracking-widest text-xs transition-colors flex items-center justify-center gap-3">
            <Phone size={16} className="text-[#28de91]" />
            {language === 'en' ? 'Book a Call with an Advisor' : 'Appeler un conseiller'}
          </button>
        </div>
        
        <p className="text-white/30 text-[10px] font-bold uppercase tracking-[0.2em] pt-8">
          {content.nextStep.footnote}
        </p>
      </div>
    </div>
  </section>
);

const Footer = ({ content }: { content: LanguageContent }) => (
  <footer className="py-24 px-6 bg-white border-t border-gray-100">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-4 gap-16 mb-20">
        <div className="col-span-2 space-y-8">
          <Logo />
          <p className="text-gray-500 max-w-sm text-lg leading-relaxed">
            {content.footer.description}
          </p>
        </div>
        <div>
          <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-8 text-black">{content.footer.explorationTitle}</h4>
          <ul className="space-y-4 text-sm text-gray-500 font-medium">
            {content.footer.explorationLinks.map((link, idx) => (
              <li key={idx}><a href={link.href} className="hover:text-[#28de91] transition-colors">{link.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-8 text-black">{content.footer.legalTitle}</h4>
          <ul className="space-y-4 text-sm text-gray-500 font-medium">
            {content.footer.legalLinks.map((link, idx) => (
              <li key={idx}><a href={link.href} className="hover:text-[#28de91] transition-colors">{link.label}</a></li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="pt-12 border-t border-gray-100 space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">
          <div className="flex items-center gap-3">
            <AlertTriangle size={14} className="text-[#28de91]" />
            <span>{content.footer.disclaimer}</span>
          </div>
          <span className="bg-gray-50 px-3 py-1 rounded">{content.footer.lastUpdated}</span>
        </div>
        
        <p className="text-[11px] text-gray-400 leading-relaxed max-w-5xl">
          {content.footer.riskWarning}
        </p>
      </div>
    </div>
  </footer>
);

export const LandingPage: React.FC<LandingPageProps> = ({ config }) => {
  const defaultLang = typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('lang') === 'fr' ? 'fr' : 'en';
  const [language, setLanguage] = useState<'en' | 'fr'>(defaultLang);
  const content = config.content[language];
  
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'fr' : 'en');
  };

  return (
    <div className="min-h-screen selection:bg-[#28de91]/30 selection:text-black">
      <PageNavigation currentPage={config.meta.pageNumber} />
      <Navbar content={content} language={language} onLanguageToggle={toggleLanguage} />
      <main>
        <Hero content={content} language={language} />
        <HowItWorks content={content} />
        <TrustSection content={content} language={language} />
        <FAQ content={content} />
        <NextStep content={content} language={language} />
      </main>
      <Footer content={content} />
    </div>
  );
};

export default LandingPage;
