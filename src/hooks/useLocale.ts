import { useMemo } from 'react';

export type Locale = 'en' | 'fr';

export const useLocale = (): Locale => {
  return useMemo(() => {
    if (typeof window === 'undefined') return 'en';
    const path = window.location.pathname;
    return path.startsWith('/fr') ? 'fr' : 'en';
  }, []);
};

export const getLocalizedPath = (path: string, locale: Locale): string => {
  if (locale === 'fr') {
    if (path === '/') return '/fr';
    return `/fr${path}`;
  }
  return path;
};

export const getAlternateLocalePath = (currentLocale: Locale): string => {
  if (typeof window === 'undefined') return '/';
  const path = window.location.pathname;
  
  if (currentLocale === 'en') {
    // Switch to French
    if (path === '/') return '/fr';
    return `/fr${path}`;
  } else {
    // Switch to English
    if (path === '/fr' || path === '/fr/') return '/';
    return path.replace(/^\/fr/, '');
  }
};
