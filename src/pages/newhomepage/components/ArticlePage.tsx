import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ALL_ARTICLES } from '../data/investopediaArticles';

function formatMarkdown(content: string): string {
  let html = content;
  
  // Escape HTML
  html = html.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  
  // Split into blocks first (separated by double newlines)
  const blocks = html.split(/\n\n+/);
  const processedBlocks: string[] = [];
  
  for (let block of blocks) {
    block = block.trim();
    if (!block) continue;
    
    // Headers
    if (block.startsWith('### ')) {
      processedBlocks.push(`<h3>${block.substring(4)}</h3>`);
    } else if (block.startsWith('## ')) {
      processedBlocks.push(`<h2>${block.substring(3)}</h2>`);
    } else if (block.startsWith('# ')) {
      processedBlocks.push(`<h1>${block.substring(2)}</h1>`);
    }
    // Unordered lists
    else if (block.includes('\n- ') || block.startsWith('- ')) {
      const items = block.split('\n').filter(line => line.trim().startsWith('- '));
      const listItems = items.map(item => {
        let content = item.substring(2).trim();
        // Apply bold/italic to list items
        content = content.replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>');
        content = content.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
        content = content.replace(/\*(.+?)\*/g, '<em>$1</em>');
        return `<li>${content}</li>`;
      }).join('');
      processedBlocks.push(`<ul>${listItems}</ul>`);
    }
    // Ordered lists
    else if (block.match(/^\d+\. /)) {
      const items = block.split('\n').filter(line => line.trim().match(/^\d+\. /));
      const listItems = items.map(item => {
        let content = item.replace(/^\d+\.\s*/, '').trim();
        // Apply bold/italic to list items
        content = content.replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>');
        content = content.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
        content = content.replace(/\*(.+?)\*/g, '<em>$1</em>');
        return `<li>${content}</li>`;
      }).join('');
      processedBlocks.push(`<ol>${listItems}</ol>`);
    }
    // Tables
    else if (block.includes('|')) {
      const rows = block.split('\n').filter(line => line.includes('|'));
      const tableRows: string[] = [];
      let isFirstRow = true;
      
      for (const row of rows) {
        const cells = row.split('|').filter(c => c.trim());
        // Skip separator rows
        if (cells.every(c => /^[-:\s]+$/.test(c.trim()))) {
          continue;
        }
        const cellTag = isFirstRow ? 'th' : 'td';
        const cellsHtml = cells.map(c => `<${cellTag}>${c.trim()}</${cellTag}>`).join('');
        tableRows.push(`<tr>${cellsHtml}</tr>`);
        isFirstRow = false;
      }
      
      if (tableRows.length > 0) {
        processedBlocks.push(`<table><tbody>${tableRows.join('')}</tbody></table>`);
      }
    }
    // Regular paragraphs
    else {
      let para = block;
      // Apply bold and italic
      para = para.replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>');
      para = para.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
      para = para.replace(/\*(.+?)\*/g, '<em>$1</em>');
      // Preserve single line breaks within paragraphs
      para = para.replace(/\n/g, '<br>');
      processedBlocks.push(`<p>${para}</p>`);
    }
  }
  
  return processedBlocks.join('\n\n');
}

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = ALL_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-brand-dark text-white">
        <Navbar />
        <main className="py-32">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-serif mb-6">Article Not Found</h1>
            <p className="text-white/40 mb-12 text-lg">The article you're looking for doesn't exist.</p>
            <Link
              to="/newhomepage/investopedia"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-dark rounded-full font-bold hover:bg-brand-accent hover:text-white transition-all"
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

  // Get related articles from same category
  const relatedArticles = ALL_ARTICLES.filter(
    (a) => a.category === article.category && a.id !== article.id
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-brand-dark text-white">
      <Navbar dark />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/40 mb-12">
              <Link to="/newhomepage" className="hover:text-brand-accent transition-colors">Home</Link>
              <span className="opacity-20">/</span>
              <Link to="/newhomepage/investopedia" className="hover:text-brand-accent transition-colors">Investopedia</Link>
              <span className="opacity-20">/</span>
              <span className="text-white/80 truncate">{article.title}</span>
            </nav>

            {/* Category & Meta */}
            <div className="flex items-center gap-4 text-brand-accent text-xs font-bold uppercase tracking-[0.2em] mb-8">
              <span>{article.category}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-12 leading-[1.1]">
              {article.title.split(':').length > 1 ? (
                <>
                  {article.title.split(':')[0]} <br />
                  <span className="italic text-white/60">{article.title.split(':')[1]}</span>
                </>
              ) : article.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl md:text-2xl text-white/60 leading-relaxed font-light mb-12">
              {article.excerpt}
            </p>
          </div>
        </section>

        {/* Featured Image */}
        <section className="pb-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="aspect-[21/9] rounded-[2rem] overflow-hidden bg-brand-dark-surface border border-white/5 shadow-2xl">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover scale-105"
              />
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="pb-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div 
              className="prose prose-invert prose-xl max-w-none 
                prose-headings:font-serif prose-headings:font-normal prose-headings:text-white
                prose-h2:text-4xl prose-h2:mb-10 prose-h2:mt-20 prose-h2:leading-tight
                prose-h3:text-3xl prose-h3:mb-8 prose-h3:mt-16 prose-h3:leading-snug
                prose-p:text-white/80 prose-p:leading-[1.8] prose-p:mb-6 prose-p:text-lg
                prose-strong:text-white prose-strong:font-semibold
                prose-ul:my-8 prose-ul:space-y-3 prose-li:text-white/75 prose-li:leading-relaxed prose-li:text-lg
                prose-ol:my-8 prose-ol:space-y-3
                prose-li:marker:text-brand-accent prose-li:marker:font-bold
                prose-blockquote:border-brand-accent prose-blockquote:bg-white/5 prose-blockquote:py-4 prose-blockquote:px-8 prose-blockquote:rounded-r-2xl prose-blockquote:my-8
                prose-table:my-10 prose-table:text-base prose-table:border-collapse
                prose-th:bg-white/10 prose-th:p-5 prose-th:text-left prose-th:font-semibold prose-th:border prose-th:border-white/20
                prose-td:p-5 prose-td:border prose-td:border-white/10 prose-td:text-white/70
                [&>*]:mb-6"
              dangerouslySetInnerHTML={{ __html: formatMarkdown(article.content) }}
            />
          </div>
        </section>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="py-32 bg-white/5 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between mb-16">
                <h2 className="text-3xl md:text-4xl font-serif">More insights</h2>
                <Link
                  to="/newhomepage/investopedia"
                  className="text-white/40 hover:text-brand-accent transition-colors flex items-center gap-2 text-sm uppercase tracking-widest font-bold"
                >
                  View all <ArrowRight size={14} />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {relatedArticles.map((related) => (
                  <Link
                    key={related.id}
                    to={`/newhomepage/investopedia/${related.slug}`}
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
                      <span className="text-brand-accent text-[10px] font-bold uppercase tracking-widest">
                        {related.category}
                      </span>
                      <h3 className="text-xl font-medium leading-tight group-hover:text-brand-accent transition-colors line-clamp-2">
                        {related.title}
                      </h3>
                      <p className="text-white/40 text-sm line-clamp-2">
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
        <section className="py-24 text-center">
          <Link
            to="/newhomepage/investopedia"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm font-bold uppercase tracking-widest transition-all"
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
