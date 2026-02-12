export interface PageConfig {
  meta: {
    title: string;
    description: string;
    pageNumber: number;
  };
  content: {
    en: LanguageContent;
    fr: LanguageContent;
  };
}

export interface LanguageContent {
  badge: string;
  headline: string;
  answerCapsule: string;
  primaryCta: string;
  secondaryCta: string;
  heroImage: string;
  heroImageAlt: string;
  metricLabel: string;
  metricValue: string;
  metricSubtext: string;
  
  howItWorks: {
    title: string;
    subtitle: string;
    steps: Array<{
      title: string;
      description: string;
    }>;
  };
  
  trust: {
    title: string;
    items: Array<{
      icon: 'shield' | 'history' | 'scale' | 'lock' | 'check' | 'clock';
      title: string;
      description: string;
    }>;
    quote: string;
    quoteAuthor: string;
    quoteRole: string;
  };
  
  faq: {
    title: string;
    subtitle: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  
  nextStep: {
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    footnote: string;
  };
  
  footer: {
    description: string;
    explorationTitle: string;
    explorationLinks: Array<{ label: string; href: string }>;
    legalTitle: string;
    legalLinks: Array<{ label: string; href: string }>;
    disclaimer: string;
    riskWarning: string;
    lastUpdated: string;
  };
  
  nav: {
    howItWorks: string;
    faq: string;
    signUp: string;
  };
}
