import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ShieldCheck, 
  History, 
  Scale, 
  Lock,
  Check,
  Clock,
  Plus,
  Minus,
  AlertTriangle,
  Globe
} from 'lucide-react';
import { PageConfig, LanguageContent } from '../types/config';
import logo from '../assets/investdubailogo.svg';
import heroImg from '../assets/hero_img.jpeg';

interface LandingPageProps {
  config: PageConfig;
}

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

const Logo = () => (
  <a href="#" className="flex items-center">
    <img src={logo} alt="InvestDubai" className="h-6" />
  </a>
);

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
  <nav className={`fixed left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 ${isInIframe() ? 'top-0' : 'top-10'}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <Logo />
      <div className="flex items-center gap-6">
        <a href="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-black transition-colors hidden md:block">
          {content.nav.howItWorks}
        </a>
        <a href="#faq" className="text-sm font-medium text-gray-600 hover:text-black transition-colors hidden md:block">
          {content.nav.faq}
        </a>
        <LanguageToggle language={language} onToggle={onLanguageToggle} />
        <button className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors">
          {language === 'en' ? 'Get Started' : "S'inscrire"}
        </button>
      </div>
    </div>
  </nav>
);

const Hero = ({ content, language }: { content: LanguageContent; language: 'en' | 'fr' }) => (
  <section className="pt-32 pb-20 px-4 text-center">
    <div className="max-w-4xl mx-auto">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-100 text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
        <span className="w-1.5 h-1.5 rounded-full bg-[#28de91] animate-pulse"></span>
        {content.badge}
      </div>
      
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
        {content.headline.split('—')[0]}
        <br />
        <span className="text-gray-400">{content.headline.split('—')[1] || ''}</span>
      </h1>
      
      <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
        {content.answerCapsule.substring(0, 200)}...
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
        <button className="w-full sm:w-auto px-8 py-3 bg-gray-100 text-black font-semibold rounded-md hover:bg-gray-200 transition-colors">
          {content.secondaryCta}
        </button>
        <button className="w-full sm:w-auto px-8 py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
          {language === 'en' ? 'Get Started' : "S'inscrire"} <ArrowRight size={16} />
        </button>
      </div>
      
      {/* Stats Row */}
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
        <div className="text-center">
          <p className="text-3xl font-bold text-black">{content.metricValue}</p>
          <p className="text-xs text-gray-400 uppercase tracking-widest">{content.metricLabel}</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold text-black">50+</p>
          <p className="text-xs text-gray-400 uppercase tracking-widest">{language === 'en' ? 'Completed Projects' : 'Projets Réalisés'}</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold text-black">2,500+</p>
          <p className="text-xs text-gray-400 uppercase tracking-widest">{language === 'en' ? 'Investors' : 'Investisseurs'}</p>
        </div>
      </div>
    </div>
  </section>
);

const FeatureShowcase = ({ content, language }: { content: LanguageContent; language: 'en' | 'fr' }) => {
  const tabs = [
    { id: 'invest', label: language === 'en' ? 'Invest' : 'Investir' },
    { id: 'track', label: language === 'en' ? 'Track' : 'Suivre' },
    { id: 'profit', label: language === 'en' ? 'Profit' : 'Profiter' },
  ];
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-10 border-b border-gray-100">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-4 text-sm font-medium transition-all relative ${
                activeTab === tab.id ? 'text-black' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black" />
              )}
            </button>
          ))}
        </div>

        <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-900 shadow-2xl group">
          <img 
            src={heroImg}
            alt="Feature display"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          
          <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between text-white">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#28de91]/20 backdrop-blur-md flex items-center justify-center">
                <Check size={20} className="text-[#28de91]" />
              </div>
              <div>
                <p className="text-sm font-semibold">{language === 'en' ? 'Villa Project Active' : 'Projet Villa Actif'}</p>
                <p className="text-xs text-gray-300">{language === 'en' ? 'Palm Jumeirah • Dubai Hills' : 'Palm Jumeirah • Dubai Hills'}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 rounded bg-white/10 text-[10px] font-bold uppercase tracking-wider border border-white/20">{content.metricValue} ROI</span>
              <span className="px-2 py-1 rounded bg-[#28de91]/20 text-[#28de91] text-[10px] font-bold uppercase tracking-wider border border-[#28de91]/30">{language === 'en' ? 'Accepting Investors' : 'Ouvert aux Investisseurs'}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const IntroSection = ({ content, language }: { content: LanguageContent; language: 'en' | 'fr' }) => (
  <section className="py-24 px-4 text-center">
    <div className="max-w-4xl mx-auto">
      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
        {language === 'en' ? 'Introducing InvestDubai' : 'Découvrez InvestDubai'}
      </span>
      <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-8">{content.howItWorks.title}</h2>
      <p className="text-xl text-gray-500 leading-relaxed">
        {content.howItWorks.subtitle}
      </p>
    </div>
  </section>
);

const FeatureGrid = ({ content, language }: { content: LanguageContent; language: 'en' | 'fr' }) => {
  const features = content.howItWorks.steps.slice(0, 4).map((step, idx) => ({
    title: step.title,
    description: step.description.substring(0, 120) + '...',
    image: `https://picsum.photos/seed/feature${idx}/400/300`,
    icon: idx === 0 ? <ShieldCheck className="w-5 h-5" /> : 
          idx === 1 ? <Scale className="w-5 h-5" /> : 
          idx === 2 ? <History className="w-5 h-5" /> : 
          <Check className="w-5 h-5" />
  }));

  return (
    <section className="py-24 px-4 bg-gray-50/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            {language === 'en' ? 'InvestDubai isn\'t just another investment.' : 'InvestDubai n\'est pas un investissement ordinaire.'}
          </h2>
          <p className="text-xl text-gray-500">
            {language === 'en' ? 'It\'s everything you need to profit from Dubai real estate.' : 'C\'est tout ce qu\'il vous faut pour profiter de l\'immobilier Dubai.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((card, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow flex flex-col h-full">
              <div className="mb-6 rounded-xl overflow-hidden aspect-[4/3] bg-gray-100">
                <img src={card.image} alt={card.title} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
              </div>
              <div className="mt-auto">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-gray-50 rounded-lg text-gray-400">
                    {card.icon}
                  </div>
                  <h3 className="font-bold text-lg leading-tight">{card.title}</h3>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SocialProof = ({ content, language }: { content: LanguageContent; language: 'en' | 'fr' }) => {
  const caseStudies = [
    {
      company: 'FLIP36',
      logo: 'https://picsum.photos/seed/flip36/60/60',
      quote: language === 'en' ? 'Our most successful flip to date with exceptional returns for all investors.' : 'Notre flip le plus réussi à ce jour avec des rendements exceptionnels.',
      stats: [
        { label: language === 'en' ? 'TOTAL PROFIT' : 'PROFIT TOTAL', value: '$4.1M' },
        { label: language === 'en' ? 'INVESTOR ROI' : 'ROI INVESTISSEUR', value: '28%' }
      ]
    },
    {
      company: 'FLIP31',
      logo: 'https://picsum.photos/seed/flip31/60/60',
      quote: language === 'en' ? 'Palm Jumeirah villa transformed in record time with premium finishes.' : 'Villa Palm Jumeirah transformée en temps record avec finitions premium.',
      stats: [
        { label: language === 'en' ? 'TOTAL PROFIT' : 'PROFIT TOTAL', value: '$2.7M' },
        { label: language === 'en' ? 'INVESTOR ROI' : 'ROI INVESTISSEUR', value: '24%' }
      ]
    },
    {
      company: 'FLIP22',
      logo: 'https://picsum.photos/seed/flip22/60/60',
      quote: language === 'en' ? 'Dubai Hills masterpiece that exceeded all expectations.' : 'Chef-d\'œuvre Dubai Hills qui a dépassé toutes les attentes.',
      stats: [
        { label: language === 'en' ? 'TOTAL PROFIT' : 'PROFIT TOTAL', value: '$1.5M' },
        { label: language === 'en' ? 'INVESTOR ROI' : 'ROI INVESTISSEUR', value: '22%' }
      ]
    }
  ];

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
            {language === 'en' ? 'Track Record' : 'Historique'}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 max-w-2xl mx-auto">
            "{language === 'en' ? '$82M in profits shared with 2,500+ investors since 2020.' : '82M$ de profits partagés avec 2 500+ investisseurs depuis 2020.'}"
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 flex flex-col relative overflow-hidden group">
              <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <img src={study.logo} alt={study.company} className="w-24 h-24 object-contain" />
              </div>

              <div className="w-12 h-12 rounded-lg bg-[#28de91]/10 flex items-center justify-center mb-8">
                <span className="text-[#28de91] font-bold text-sm">{study.company}</span>
              </div>
              <p className="text-lg font-medium text-gray-700 mb-8 leading-relaxed italic">
                "{study.quote}"
              </p>
              
              <div className="mt-auto space-y-4 pt-8 border-t border-gray-50">
                {study.stats.map((stat, sIdx) => (
                  <div key={sIdx} className="flex justify-between items-end">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest max-w-[120px]">
                      {stat.label}
                    </span>
                    <span className="text-2xl font-bold">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="text-sm font-bold border-b-2 border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors">
            {language === 'en' ? 'View all completed projects' : 'Voir tous les projets réalisés'} [ ]
          </button>
        </div>
      </div>
    </section>
  );
};

const getIcon = (iconName: string, size: number = 28) => {
  const icons: Record<string, React.ReactNode> = {
    shield: <ShieldCheck className="text-blue-400" size={size} />,
    history: <History className="text-green-400" size={size} />,
    scale: <Scale className="text-purple-400" size={size} />,
    lock: <Lock className="text-yellow-400" size={size} />,
    check: <Check className="text-[#28de91]" size={size} />,
    clock: <Clock className="text-[#28de91]" size={size} />,
  };
  return icons[iconName] || <ShieldCheck className="text-blue-400" size={size} />;
};

const SecuritySection = ({ content, language }: { content: LanguageContent; language: 'en' | 'fr' }) => (
  <section className="py-24 px-4 bg-[#1a1a1a] text-white">
    <div className="max-w-4xl mx-auto text-center mb-20">
      <h2 className="text-3xl font-bold mb-4">{content.trust.title}</h2>
      <p className="text-gray-400">
        {language === 'en' ? 'Your investment is protected by multiple layers of security.' : 'Votre investissement est protégé par plusieurs niveaux de sécurité.'}
      </p>
    </div>
    
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {content.trust.items.map((item, idx) => (
        <div key={idx} className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-gray-500 transition-all">
          {getIcon(item.icon, 32)}
          <h3 className="font-bold mb-2 mt-6">{item.title}</h3>
          <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
        </div>
      ))}
    </div>
  </section>
);

const Timeline = ({ content, language }: { content: LanguageContent; language: 'en' | 'fr' }) => {
  const timelineSteps = [
    {
      day: language === 'en' ? 'STEP 1' : 'ÉTAPE 1',
      title: content.howItWorks.steps[0]?.title || '',
      description: content.howItWorks.steps[0]?.description.substring(0, 150) + '...' || ''
    },
    {
      day: language === 'en' ? 'STEP 2' : 'ÉTAPE 2',
      title: content.howItWorks.steps[1]?.title || '',
      description: content.howItWorks.steps[1]?.description.substring(0, 150) + '...' || ''
    },
    {
      day: language === 'en' ? 'STEP 3' : 'ÉTAPE 3',
      title: content.howItWorks.steps[2]?.title || '',
      description: content.howItWorks.steps[2]?.description.substring(0, 150) + '...' || ''
    }
  ];

  return (
    <section id="how-it-works" className="py-24 px-4 bg-gray-50/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
            {language === 'en' ? 'How It Works' : 'Comment ça marche'}
          </span>
          <h2 className="text-4xl font-bold mt-4">{content.howItWorks.title}</h2>
          <p className="text-gray-500 mt-2">{content.howItWorks.subtitle}</p>
        </div>

        <div className="relative">
          <div className="absolute top-0 left-0 bottom-0 w-px bg-gray-200 md:w-full md:h-px md:top-6" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {timelineSteps.map((step, idx) => (
              <div key={idx} className="relative pl-8 md:pl-0 pt-2 md:pt-12">
                <div className="absolute top-2 left-[-4px] md:top-[-4px] md:left-0 w-2 h-2 rounded-full bg-[#28de91] ring-4 ring-white" />
                
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">
                  {step.day}
                </span>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ question, answer, isOpen, toggle }: { question: string; answer: string; isOpen: boolean; toggle: () => void }) => {
  return (
    <div className="border-b border-gray-100">
      <button 
        onClick={toggle}
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

const FAQ = ({ content }: { content: LanguageContent }) => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">FAQ</span>
          <h2 className="text-4xl font-bold mt-4 mb-4">{content.faq.title}</h2>
          <p className="text-xl text-gray-500">{content.faq.subtitle}</p>
        </div>
        <div className="divide-y divide-gray-100 border-t border-gray-100">
          {content.faq.items.map((faq, idx) => (
            <FAQItem 
              key={idx} 
              question={faq.question} 
              answer={faq.answer} 
              isOpen={idx === openIndex}
              toggle={() => setOpenIndex(idx === openIndex ? -1 : idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = ({ content, language }: { content: LanguageContent; language: 'en' | 'fr' }) => (
  <section className="py-32 px-4 bg-white relative overflow-hidden">
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
        {language === 'en' ? 'Start Today' : 'Commencez Aujourd\'hui'}
      </span>
      <h2 className="text-5xl md:text-7xl font-bold mt-8 mb-12">{content.nextStep.title}</h2>
      <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto">{content.nextStep.subtitle}</p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <button className="text-sm font-bold border-b-2 border-black pb-1">{content.nextStep.secondaryCta}</button>
        <button className="bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-all shadow-xl flex items-center gap-2">
          {content.nextStep.primaryCta} <ArrowRight size={16} />
        </button>
      </div>
      <p className="text-gray-400 text-sm mt-8">{content.nextStep.footnote}</p>
    </div>

    <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 hidden lg:block">
      <img src="https://picsum.photos/seed/cta1/300/200" className="w-64 h-48 object-cover rounded-xl shadow-2xl rotate-[-5deg]" alt="" />
    </div>
    <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 hidden lg:block">
      <img src="https://picsum.photos/seed/cta2/300/200" className="w-64 h-48 object-cover rounded-xl shadow-2xl rotate-[5deg]" alt="" />
    </div>
  </section>
);

const Footer = ({ content, language }: { content: LanguageContent; language: 'en' | 'fr' }) => (
  <footer className="bg-[#1a1a1a] text-gray-400 py-20 px-4">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
      <div className="lg:col-span-2">
        <div className="flex items-center gap-2 mb-6">
          <img src={logo} alt="InvestDubai" className="h-6 brightness-0 invert" />
        </div>
        <p className="text-xs leading-relaxed max-w-xs mb-8">
          {content.footer.description}
          <br /><br />
          © 2026 INVESTDUBAI. ALL RIGHTS RESERVED
        </p>
        <div className="flex items-center gap-2 text-[10px] uppercase font-bold text-green-500">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          {language === 'en' ? 'Platform Online' : 'Plateforme en ligne'}
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-[10px] uppercase font-bold tracking-widest text-white">{content.footer.explorationTitle}</h4>
        <ul className="text-xs space-y-2">
          {content.footer.explorationLinks.map((link, idx) => (
            <li key={idx}>
              <a href={link.href} className="hover:text-white transition-colors">[ ] {link.label}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-4">
        <h4 className="text-[10px] uppercase font-bold tracking-widest text-white">{content.footer.legalTitle}</h4>
        <ul className="text-xs space-y-2">
          {content.footer.legalLinks.map((link, idx) => (
            <li key={idx}>
              <a href={link.href} className="hover:text-white transition-colors">[ ] {link.label}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="lg:col-span-1">
        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
          <h4 className="text-[10px] uppercase font-bold tracking-widest text-white mb-4">
            {language === 'en' ? 'Ready to Invest?' : 'Prêt à Investir?'}
          </h4>
          <p className="text-[10px] mb-6 leading-relaxed">
            {language === 'en' ? 'Start from just 5,000 AED and become a co-owner of luxury Dubai villas.' : 'Commencez dès 5 000 AED et devenez co-propriétaire de villas de luxe à Dubai.'}
          </p>
          <button className="w-full py-2 px-3 bg-[#28de91] hover:bg-[#20c47f] transition-colors rounded text-[10px] font-bold text-black flex items-center justify-center gap-2">
            {language === 'en' ? 'GET STARTED' : 'COMMENCER'} <ArrowRight size={12} />
          </button>
        </div>
      </div>
    </div>
    
    <div className="border-t border-gray-800 pt-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-2 text-[10px] font-bold">
          <AlertTriangle size={14} className="text-[#28de91]" />
          <span>{content.footer.disclaimer}</span>
        </div>
        <div className="flex items-center gap-6 opacity-40">
          <span className="text-[10px] font-bold">DIFC REGULATED</span>
          <span className="text-[10px] font-bold">SHARIA COMPLIANT</span>
          <span className="text-[10px] font-bold">SPV PROTECTED</span>
        </div>
      </div>
      <p className="text-[10px] leading-relaxed max-w-5xl">
        {content.footer.riskWarning}
      </p>
      <p className="text-[10px] mt-4 text-gray-600">{content.footer.lastUpdated}</p>
    </div>
  </footer>
);

export const LandingPageV1: React.FC<LandingPageProps> = ({ config }) => {
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
        <FeatureShowcase content={content} language={language} />
        <IntroSection content={content} language={language} />
        <FeatureGrid content={content} language={language} />
        <SocialProof content={content} language={language} />
        <SecuritySection content={content} language={language} />
        <Timeline content={content} language={language} />
        <FAQ content={content} />
        <FinalCTA content={content} language={language} />
      </main>
      <Footer content={content} language={language} />
    </div>
  );
};

export default LandingPageV1;
