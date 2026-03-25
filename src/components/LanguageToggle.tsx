import { useLocale, getAlternateLocalePath } from '../hooks/useLocale';

interface LanguageToggleProps {
  isDark?: boolean;
  className?: string;
}

export const LanguageToggle = ({ isDark = false, className = '' }: LanguageToggleProps) => {
  const locale = useLocale();
  const alternatePath = getAlternateLocalePath(locale);

  return (
    <div className={`flex items-center rounded-full p-1 border ${isDark ? 'border-white/10 bg-white/5' : 'border-gray-200 bg-gray-50'} ${className}`}>
      <a
        href={locale === 'en' ? undefined : '/'}
        className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
          locale === 'en'
            ? isDark 
              ? 'bg-white/20 shadow-sm' 
              : 'bg-white shadow-sm ring-1 ring-black/5'
            : isDark 
              ? 'opacity-50 hover:opacity-100' 
              : 'opacity-50 hover:opacity-100 grayscale hover:grayscale-0'
        }`}
        aria-label="Switch to English"
      >
        <img src="https://flagcdn.com/gb.svg" width="20" alt="English" className="rounded-[2px] object-cover" style={{ aspectRatio: '4/3' }} />
      </a>
      <a
        href={locale === 'fr' ? undefined : alternatePath}
        className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
          locale === 'fr'
            ? isDark 
              ? 'bg-white/20 shadow-sm' 
              : 'bg-white shadow-sm ring-1 ring-black/5'
            : isDark 
              ? 'opacity-50 hover:opacity-100' 
              : 'opacity-50 hover:opacity-100 grayscale hover:grayscale-0'
        }`}
        aria-label="Passer en français"
      >
        <img src="https://flagcdn.com/fr.svg" width="20" alt="Français" className="rounded-[2px] object-cover" style={{ aspectRatio: '4/3' }} />
      </a>
    </div>
  );
};

export default LanguageToggle;
