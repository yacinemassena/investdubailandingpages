import { useState } from 'react';
import { ChevronDown, Phone } from 'lucide-react';
import { homepageContent } from '../config';

const { faq } = homepageContent;

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Heading & CTA */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <span className="section-label">{faq.label}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6 leading-tight">
              {faq.title}
            </h2>
            <p className="text-base md:text-lg text-brand-muted leading-relaxed mb-8">
              {faq.subtitle}
            </p>
            <a href="#" className="border border-brand-border bg-brand-surface text-brand-dark px-6 py-3 rounded-full font-medium inline-flex items-center gap-2 hover:bg-brand-bg transition-colors">
              <Phone className="w-4 h-4" />
              {faq.cta}
            </a>
          </div>

          {/* Right Column - Accordion */}
          <div className="space-y-4">
            {faq.questions.map((item, i) => (
              <div 
                key={i} 
                className="bg-brand-bg rounded-2xl border border-brand-border overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className="font-medium text-brand-dark pr-4">{item.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-brand-muted flex-shrink-0 transition-transform duration-300 ${
                      openIndex === i ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === i ? 'max-h-[1000px]' : 'max-h-0'
                  }`}
                >
                  <p className="px-6 pb-5 text-brand-muted leading-relaxed whitespace-pre-line">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
