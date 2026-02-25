import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { homepageConfig } from '../config';

const lang = 'en';
const faq = homepageConfig.faq[lang];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-brand-accent/10 text-brand-accent text-sm font-semibold rounded-full mb-6">
            {faq.label}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-6 tracking-tight">
            {faq.title}
          </h2>
        </div>

        <div className="space-y-3">
          {faq.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div 
                key={i} 
                className={`rounded-2xl border overflow-hidden transition-all ${
                  isOpen 
                    ? 'bg-brand-surface border-brand-accent/20 shadow-sm' 
                    : 'bg-white border-brand-border hover:border-brand-accent/30'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className={`text-lg font-semibold pr-4 ${isOpen ? 'text-brand-accent' : 'text-brand-dark'}`}>
                    {item.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                    isOpen ? 'bg-brand-accent text-white' : 'bg-brand-surface text-brand-muted'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6">
                    <div 
                      className="text-brand-muted leading-relaxed space-y-3"
                      dangerouslySetInnerHTML={{ 
                        __html: item.answer
                          .replace(/\n\n/g, '</p><p class="mt-3">')
                          .replace(/\n/g, '<br/>')
                          .replace(/\*\*(.*?)\*\*/g, '<strong class="text-brand-dark font-semibold">$1</strong>')
                          .replace(/^- /gm, '• ')
                          .replace(/\((\d+)\)/g, '<span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-brand-accent/10 text-brand-accent text-sm font-semibold mr-1">$1</span>')
                      }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
