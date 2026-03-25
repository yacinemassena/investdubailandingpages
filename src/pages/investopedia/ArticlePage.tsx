import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useDocumentHead } from '../../hooks/useDocumentHead';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ALL_ARTICLES } from './data/investopediaArticles';

function formatMarkdown(content: string): string {
  // Normalize line endings
  let text = content.replace(/\r\n/g, '\n');
  
  // Escape HTML
  text = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  
  const lines = text.split('\n');
  const output: string[] = [];
  let i = 0;
  
  while (i < lines.length) {
    const line = lines[i].trim();
    
    // Skip empty lines
    if (!line) {
      i++;
      continue;
    }
    
    // Headers
    if (line.startsWith('### ')) {
      output.push(`<h3>${applyInlineStyles(line.substring(4))}</h3>`);
      i++;
    } else if (line.startsWith('## ')) {
      output.push(`<h2>${applyInlineStyles(line.substring(3))}</h2>`);
      i++;
    } else if (line.startsWith('# ')) {
      output.push(`<h1>${applyInlineStyles(line.substring(2))}</h1>`);
      i++;
    }
    // Unordered lists
    else if (line.startsWith('- ')) {
      const items: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith('- ')) {
        items.push(`<li>${applyInlineStyles(lines[i].trim().substring(2))}</li>`);
        i++;
      }
      output.push(`<ul>${items.join('')}</ul>`);
    }
    // Ordered lists
    else if (/^\d+\.\s/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) {
        const itemContent = lines[i].trim().replace(/^\d+\.\s*/, '');
        items.push(`<li>${applyInlineStyles(itemContent)}</li>`);
        i++;
      }
      output.push(`<ol>${items.join('')}</ol>`);
    }
    // Tables
    else if (line.includes('|')) {
      const tableRows: string[] = [];
      let isFirstRow = true;
      while (i < lines.length && lines[i].includes('|')) {
        const row = lines[i].trim();
        const cells = row.split('|').filter(c => c.trim());
        // Skip separator rows
        if (!cells.every(c => /^[-:\s]+$/.test(c.trim()))) {
          const cellTag = isFirstRow ? 'th' : 'td';
          const cellsHtml = cells.map(c => `<${cellTag}>${applyInlineStyles(c.trim())}</${cellTag}>`).join('');
          tableRows.push(`<tr>${cellsHtml}</tr>`);
          isFirstRow = false;
        }
        i++;
      }
      if (tableRows.length > 0) {
        output.push(`<table><tbody>${tableRows.join('')}</tbody></table>`);
      }
    }
    // Regular paragraph
    else {
      const paraLines: string[] = [];
      while (i < lines.length) {
        const currentLine = lines[i].trim();
        // Stop if we hit a special line or empty line
        if (!currentLine || currentLine.startsWith('#') || currentLine.startsWith('- ') || 
            /^\d+\.\s/.test(currentLine) || currentLine.includes('|')) {
          break;
        }
        paraLines.push(currentLine);
        i++;
      }
      if (paraLines.length > 0) {
        output.push(`<p>${applyInlineStyles(paraLines.join('<br>'))}</p>`);
      }
    }
  }
  
  return output.join('\n');
}

function applyInlineStyles(text: string): string {
  // Apply bold and italic
  let result = text;
  result = result.replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>');
  result = result.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  result = result.replace(/\*(.+?)\*/g, '<em>$1</em>');
  return result;
}

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = ALL_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-brand-dark text-white">
        <Navbar />
        <main className="py-32">
          <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-12 text-center">
            <h1 className="text-h2 font-serif mb-6">Article Not Found</h1>
            <p className="text-body-lg text-white/40 mb-12">The article you're looking for doesn't exist.</p>
            <Link
              to="/investopedia"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-dark rounded-full font-medium hover:bg-brand-accent hover:text-white transition-all"
            >
              <ArrowLeft size={20} />
              Back to Investopedia
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Dynamic meta tags
  useEffect(() => {
    if (!article) return;
    document.title = `${article.title} | InvestDubai Investopedia`;
    let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = article.excerpt || article.title;

    // Article schema
    const schemaId = 'investopedia-article-schema';
    let script = document.getElementById(schemaId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = schemaId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Article',
      'headline': article.title,
      'description': article.excerpt || article.title,
      'image': article.image || '',
      'author': { '@type': 'Organization', 'name': 'InvestDubai' },
      'publisher': { '@type': 'Organization', 'name': 'InvestDubai' },
      'mainEntityOfPage': { '@type': 'WebPage', '@id': `https://www.investdubai.com/investopedia/${article.slug}` },
    });

    return () => {
      document.title = 'InvestDubai | Dubai Luxury Villa Flips, Regulated Access from $1,000';
      const el = document.getElementById(schemaId);
      if (el) el.remove();
    };
  }, [article]);

  // Get related articles from same category
  const relatedArticles = ALL_ARTICLES.filter(
    (a) => a.category === article.category && a.id !== article.id
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-brand-dark text-white">
      <Navbar dark />
      <main>
        {/* Hero Section */}
        <section className="pt-24 md:pt-32 pb-10 md:pb-16">
          <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-12">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-body uppercase tracking-widest text-white/40 mb-8 md:mb-12">
              <Link to="/" className="hover:text-brand-accent transition-colors">Home</Link>
              <span className="opacity-20">/</span>
              <Link to="/investopedia" className="hover:text-brand-accent transition-colors">Investopedia</Link>
              <span className="opacity-20">/</span>
              <span className="text-white/80 truncate">{article.title}</span>
            </nav>

            {/* Category & Meta */}
            <div className="flex items-center gap-4 text-brand-accent text-label mb-6 md:mb-8">
              <span>{article.category}</span>
            </div>

            {/* Title */}
            <h1 className="text-display-1 font-serif mb-6 md:mb-12">
              {article.title.split(':').length > 1 ? (
                <>
                  {article.title.split(':')[0]} <br />
                  <span className="italic text-white/60">{article.title.split(':')[1]}</span>
                </>
              ) : article.title}
            </h1>

            {/* Excerpt */}
            <p className="text-body-lg text-white/60 mb-8 md:mb-12">
              {article.excerpt}
            </p>
          </div>
        </section>

        {/* Featured Image */}
        <section className="pb-12 md:pb-24">
          <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-12">
            <div className="aspect-[16/9] md:aspect-[21/9] rounded-xl md:rounded-[2rem] overflow-hidden bg-brand-dark-surface border border-white/5 shadow-2xl">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover scale-105"
              />
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="pb-16 md:pb-32">
          <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-12">
            <div 
              className="prose prose-invert prose-base md:prose-xl max-w-none 
                prose-headings:font-serif prose-headings:font-normal prose-headings:text-white
                prose-h2:text-2xl prose-h2:md:text-4xl prose-h2:mb-6 prose-h2:md:mb-10 prose-h2:mt-12 prose-h2:md:mt-20 prose-h2:leading-tight
                prose-h3:text-xl prose-h3:md:text-3xl prose-h3:mb-4 prose-h3:md:mb-8 prose-h3:mt-10 prose-h3:md:mt-16 prose-h3:leading-snug
                prose-p:text-white/80 prose-p:leading-[1.8] prose-p:mb-4 prose-p:md:mb-6 prose-p:text-sm prose-p:md:text-lg
                prose-strong:text-white prose-strong:font-semibold
                prose-ul:my-6 prose-ul:md:my-8 prose-ul:space-y-2 prose-ul:md:space-y-3 prose-li:text-white/75 prose-li:leading-relaxed prose-li:text-sm prose-li:md:text-lg
                prose-ol:my-6 prose-ol:md:my-8 prose-ol:space-y-2 prose-ol:md:space-y-3
                prose-li:marker:text-brand-accent prose-li:marker:font-bold
                prose-blockquote:border-brand-accent prose-blockquote:bg-white/5 prose-blockquote:py-3 prose-blockquote:md:py-4 prose-blockquote:px-4 prose-blockquote:md:px-8 prose-blockquote:rounded-r-xl prose-blockquote:md:rounded-r-2xl prose-blockquote:my-6 prose-blockquote:md:my-8
                prose-table:my-6 prose-table:md:my-10 prose-table:text-sm prose-table:md:text-base prose-table:border-collapse
                prose-th:bg-white/10 prose-th:p-3 prose-th:md:p-5 prose-th:text-left prose-th:font-semibold prose-th:border prose-th:border-white/20
                prose-td:p-3 prose-td:md:p-5 prose-td:border prose-td:border-white/10 prose-td:text-white/70
                [&>*]:mb-4 [&>*]:md:mb-6"
              dangerouslySetInnerHTML={{ __html: formatMarkdown(article.content) }}
            />
          </div>
        </section>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="py-12 md:py-20 bg-white/5 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
              <div className="flex items-center justify-between mb-10 md:mb-16">
                <h2 className="text-h2 font-serif">More insights</h2>
                <Link
                  to="/investopedia"
                  className="text-white/40 hover:text-brand-accent transition-colors flex items-center gap-2 text-label"
                >
                  View all <ArrowRight size={14} />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {relatedArticles.map((related) => (
                  <Link
                    key={related.id}
                    to={`/investopedia/${related.slug}`}
                    className="group block"
                  >
                    <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-brand-dark-surface border border-white/5">
                      <img
                        src={related.image}
                        alt={related.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="space-y-3">
                      <span className="text-brand-accent text-label">
                        {related.category}
                      </span>
                      <h3 className="text-h4 group-hover:text-brand-accent transition-colors line-clamp-2">
                        {related.title}
                      </h3>
                      <p className="text-body-sm text-white/40 line-clamp-2">
                        {related.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Back CTA */}
        <section className="py-12 md:py-20 text-center">
          <Link
            to="/investopedia"
            className="inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3.5 md:py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-label transition-all"
          >
            <ArrowLeft size={16} />
            Back to Investopedia
          </Link>
        </section>
      </main>
      <Footer dark />
    </div>
  );
}
