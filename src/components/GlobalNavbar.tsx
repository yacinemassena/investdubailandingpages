import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navigationConfig } from '../config/navigation';
import { navigationConfigFr } from '../config/navigation.fr';
import { useLocale } from '../hooks/useLocale';
import { LanguageToggle } from './LanguageToggle';
import Logo from '../assets/logo.svg';

interface GlobalNavbarProps {
  darkUntilScroll?: boolean;
  dark?: boolean;
}

export const GlobalNavbar = ({ darkUntilScroll = false, dark = false }: GlobalNavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/';
  const locale = useLocale();
  const navConfig = locale === 'fr' ? navigationConfigFr : navigationConfig;

  useEffect(() => {
    if (!darkUntilScroll) return;
    
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.9;
      setScrolled(window.scrollY > heroHeight - 80);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [darkUntilScroll]);

  const isDark = darkUntilScroll ? !scrolled : dark;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${
      isDark 
        ? 'bg-transparent border-white/10 text-white' 
        : 'bg-brand-bg/95 border-brand-border text-brand-dark'
    }`}>
      <div className="max-w-[90rem] mx-auto px-5 sm:px-6 lg:px-8 xl:px-12 h-20 flex items-center justify-between">
        <a href={navConfig.logoHref} className="flex items-center flex-shrink-0 mr-4 xl:mr-8">
          <img 
            src={Logo} 
            alt="InvestDubai" 
            className={`h-4 sm:h-5 md:h-6 ${isDark ? 'brightness-0 invert' : ''}`} 
          />
        </a>
        
        {/* Desktop Navigation - hidden below 1024px */}
        <div className={`hidden lg:flex items-center justify-center flex-1 gap-4 xl:gap-8 text-body ${
          isDark ? 'text-white/60' : 'text-brand-muted'
        }`}>
          {navConfig.links.map((link, i) => {
            const isActive = currentPath === link.href;
            return (
              <a 
                key={i} 
                href={link.href} 
                className={`transition-colors whitespace-nowrap text-sm xl:text-base ${
                  isActive
                    ? `font-bold border-b-2 pb-1 ${isDark ? 'text-white border-white' : 'text-brand-dark border-brand-dark'}`
                    : isDark ? 'hover:text-white' : 'hover:text-brand-dark'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-3 xl:gap-6 flex-shrink-0 ml-4 xl:ml-8">
          {/* Language Toggle - desktop */}
          <LanguageToggle isDark={isDark} className="hidden lg:flex" />
          
          {/* Login - hidden below 1024px */}
          <a 
            href={navConfig.loginHref} 
            className={`hidden lg:block text-sm xl:text-base font-medium transition-colors whitespace-nowrap ${
              isDark ? 'text-white/60 hover:text-white' : 'text-brand-muted hover:text-brand-dark'
            }`}
          >
            {navConfig.loginText}
          </a>
          
          {/* CTA - shows "Get Started" on mobile, full text on desktop */}
          <a href={navConfig.ctaHref} className="bg-brand-accent text-white px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-full text-sm sm:text-body font-medium hover:opacity-90 transition-opacity whitespace-nowrap flex-shrink-0">
            <span className="lg:hidden">{locale === 'fr' ? 'Commencer' : 'Get Started'}</span>
            <span className="hidden lg:inline">{navConfig.ctaText}</span>
          </a>
          
          {/* Mobile Menu Button - visible below 1024px */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className={isDark ? 'text-white' : ''} /> : <Menu className={isDark ? 'text-white' : ''} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - visible below 1024px */}
      {mobileMenuOpen && (
        <div className={`lg:hidden absolute top-full left-0 right-0 border-b p-6 flex flex-col gap-4 ${
          isDark 
            ? 'bg-brand-dark border-white/10' 
            : 'bg-white border-brand-border'
        }`}>
          {navConfig.links.map((link, i) => (
            <a 
              key={i} 
              href={link.href} 
              className={`text-body-lg ${currentPath === link.href ? 'font-bold underline' : 'font-medium'} ${isDark ? 'text-white' : 'text-brand-dark'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <hr className={isDark ? 'border-white/10' : 'border-brand-border'} />
          <a href={navConfig.loginHref} className={`text-body-lg font-medium ${isDark ? 'text-white' : 'text-brand-dark'}`}>
            {navConfig.loginText}
          </a>
          <hr className={isDark ? 'border-white/10' : 'border-brand-border'} />
          {/* Language Toggle - mobile */}
          <div className="flex items-center gap-2">
            <span className={`text-body ${isDark ? 'text-white/60' : 'text-brand-muted'}`}>🌐</span>
            <LanguageToggle isDark={isDark} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default GlobalNavbar;
