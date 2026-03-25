import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { homepageConfig } from '../config';

const lang = 'en';
const faq = homepageConfig.faq[lang];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const items = faq.items || faq.questions || [];

  return (
    <section className="py-24 bg-white border-t border-brand-border">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <span className="section-label">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            {faq.title || 'Common investor questions'}
          </h2>
          <p className="text-brand-muted max-w-2xl mx-auto leading-relaxed">
            {faq.subtitle || 'Key questions around structure, returns, liquidity, and risk.'}
          </p>
        </div>

        <div className="space-y-4">
          {items.map((item: any, index: number) => (
            <div
              key={index}
              className="bg-brand-bg border border-brand-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-medium text-brand-dark">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-brand-muted flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 border-t border-brand-border pt-4">
                  {item.shortAnswer ? (
                    <p className="font-semibold text-brand-dark mb-3 leading-relaxed">
                      {item.shortAnswer}
                    </p>
                  ) : null}
                  <p className="text-brand-muted leading-relaxed whitespace-pre-line">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
