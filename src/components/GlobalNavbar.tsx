import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../assets/logo.svg';
import { navigationConfig } from '../config/navigation';

interface GlobalNavbarProps {
  darkUntilScroll?: boolean;
  dark?: boolean;
}

export const GlobalNavbar = ({ darkUntilScroll = false, dark = false }: GlobalNavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <a href={navigationConfig.logoHref} className="flex items-center">
          <img 
            src={Logo} 
            alt="InvestDubai" 
            className={`h-6 ${isDark ? 'brightness-0 invert' : ''}`} 
          />
        </a>
        
        {/* Desktop Navigation */}
        <div className={`hidden md:flex items-center gap-8 text-sm font-medium ${
          isDark ? 'text-white/60' : 'text-brand-muted'
        }`}>
          {navigationConfig.links.map((link, i) => (
            <a 
              key={i} 
              href={link.href} 
              className={`transition-colors ${
                isDark ? 'hover:text-white' : 'hover:text-brand-dark'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a 
            href={navigationConfig.loginHref} 
            className={`hidden md:block text-sm font-medium transition-colors ${
              isDark ? 'text-white/60 hover:text-white' : 'text-brand-muted hover:text-brand-dark'
            }`}
          >
            {navigationConfig.loginText}
          </a>
          <a href={navigationConfig.ctaHref} className="bg-brand-accent text-white px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
            {navigationConfig.ctaText}
          </a>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className={isDark ? 'text-white' : ''} /> : <Menu className={isDark ? 'text-white' : ''} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={`md:hidden absolute top-full left-0 right-0 border-b p-6 flex flex-col gap-4 ${
          isDark 
            ? 'bg-brand-dark border-white/10' 
            : 'bg-white border-brand-border'
        }`}>
          {navigationConfig.links.map((link, i) => (
            <a 
              key={i} 
              href={link.href} 
              className={`text-lg font-medium ${isDark ? 'text-white' : 'text-brand-dark'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <hr className={isDark ? 'border-white/10' : 'border-brand-border'} />
          <a href={navigationConfig.loginHref} className={`text-lg font-medium ${isDark ? 'text-white' : 'text-brand-dark'}`}>
            {navigationConfig.loginText}
          </a>
        </div>
      )}
    </nav>
  );
};

export default GlobalNavbar;
