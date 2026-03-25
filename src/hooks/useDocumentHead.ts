import { useEffect } from 'react';

interface DocumentHeadOptions {
  title: string;
  description: string;
  canonical?: string;
}

export function useDocumentHead({ title, description, canonical }: DocumentHeadOptions) {
  useEffect(() => {
    // Title
    document.title = title;

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description;

    // Canonical
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonical) {
      if (!link) {
        link = document.createElement('link');
        link.rel = 'canonical';
        document.head.appendChild(link);
      }
      link.href = canonical;
    }

    // Cleanup: restore defaults on unmount
    return () => {
      document.title = 'InvestDubai | Dubai Luxury Villa Flips, Regulated Access from $1,000';
      if (metaDesc) metaDesc.content = 'We buy undervalued luxury villas in Dubai, renovate them, and sell at full market value. 40+ villas completed. 29% avg investor payout. 12-18 month cycles. Invest from $1,000.';
    };
  }, [title, description, canonical]);
}
