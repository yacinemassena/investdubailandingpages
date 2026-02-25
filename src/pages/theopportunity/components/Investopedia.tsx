import { useState, useMemo } from 'react';
import { Search, ArrowRight, BookOpen, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ALL_ARTICLES, CATEGORIES } from '../data/investopediaArticles';

export function Investopedia() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  const filteredArticles = useMemo(() => {
    return ALL_ARTICLES.filter((article) => {
      const categoryObj = CATEGORIES.find(c => c.id === activeCategory);
      const matchesCategory = activeCategory === 'all' || article.category === categoryObj?.label;
      const matchesSearch = searchQuery === '' || 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const featuredArticles = useMemo(() => filteredArticles.slice(0, 4), [filteredArticles]);
  const mainFeatured = featuredArticles[0];
  const sideFeatured = featuredArticles.slice(1);
  
  // Group articles by category for sections
  const articlesByCategory = useMemo(() => {
    const grouped: Record<string, typeof ALL_ARTICLES> = {};
    ALL_ARTICLES.forEach(article => {
      if (!grouped[article.category]) {
        grouped[article.category] = [];
      }
      grouped[article.category].push(article);
    });
    return grouped;
  }, []);

  const sections = useMemo(() => {
    return CATEGORIES.filter(c => c.id !== 'all').map(cat => ({
      ...cat,
      articles: (articlesByCategory[cat.label] || []).slice(0, 6)
    }));
  }, [articlesByCategory]);

  return (
    <section id="investopedia" className="py-20 md:py-32 bg-brand-dark text-white overflow-hidden relative">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[600px] bg-gradient-to-t from-brand-accent-warm/10 via-transparent to-transparent pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-brand-accent mb-4">
              <BookOpen size={20} />
              <span className="uppercase tracking-[0.2em] text-xs font-bold">Investopedia</span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-6 leading-[1.1]">
              The future of Dubai real estate: <br />
              <span className="italic text-white/60">Trends & insights</span>
            </h2>
            <p className="text-brand-muted text-lg md:text-xl max-w-xl">
              Deep dives, market analysis, and educational guides to master the Dubai investment landscape.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setShowSearch(!showSearch)}
              className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors border border-white/10"
            >
              <Search size={24} />
            </button>
          </div>
        </div>

        {/* Category Navigation - Minimalist style from image */}
        <div className="mb-12 border-b border-white/10">
          <div className="flex items-center gap-8 overflow-x-auto no-scrollbar pb-4">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`text-sm font-medium transition-all whitespace-nowrap tracking-wide ${
                  activeCategory === cat.id
                    ? 'text-white border-b-2 border-brand-accent pb-4 -mb-4'
                    : 'text-white/40 hover:text-white pb-4 -mb-4'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Search Input overlay style */}
        {showSearch && (
          <div className="mb-12 animate-in fade-in slide-in-from-top-4 duration-300">
            <input
              type="text"
              placeholder="Search articles, terms, strategies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-xl focus:outline-none focus:ring-2 focus:ring-brand-accent/50 placeholder:text-white/20"
              autoFocus
            />
          </div>
        )}

        {/* Top Section: Hero + Sidebar (Trends & Insights style) */}
        {filteredArticles.length > 0 && activeCategory === 'all' && !searchQuery && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
            {/* Main Featured */}
            <div className="lg:col-span-2 group">
              <Link to={`/newhomepage/investopedia/${mainFeatured.slug}`} className="block">
                <div className="relative aspect-[16/9] rounded-3xl overflow-hidden mb-6 bg-brand-dark-surface border border-white/5">
                  <img 
                    src={mainFeatured.image} 
                    alt={mainFeatured.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-60" />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-brand-accent text-xs font-bold uppercase tracking-widest">
                    <span>{mainFeatured.category}</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-serif leading-tight group-hover:text-brand-accent transition-colors">
                    {mainFeatured.title}
                  </h3>
                  <p className="text-white/60 text-lg line-clamp-2 max-w-2xl">
                    {mainFeatured.excerpt}
                  </p>
                </div>
              </Link>
            </div>

            {/* Side Featured List */}
            <div className="space-y-8">
              {sideFeatured.map((article) => (
                <Link 
                  key={article.id} 
                  to={`/newhomepage/investopedia/${article.slug}`}
                  className="group flex gap-6 items-start"
                >
                  <div className="w-24 h-24 flex-shrink-0 rounded-2xl overflow-hidden bg-brand-dark-surface border border-white/5">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="space-y-2">
                    <span className="text-brand-accent text-[10px] font-bold uppercase tracking-widest">
                      {article.category}
                    </span>
                    <h4 className="text-lg font-medium leading-tight group-hover:text-brand-accent transition-colors line-clamp-2">
                      {article.title}
                    </h4>
                  </div>
                </Link>
              ))}
              
              <div className="pt-4">
                <div className="p-6 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-between group cursor-pointer hover:bg-white/10 transition-colors">
                  <div>
                    <div className="text-xs text-white/40 uppercase tracking-widest mb-1">Trending now</div>
                    <div className="text-lg font-medium">Market Analysis 2026</div>
                  </div>
                  <TrendingUp className="text-brand-accent" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Grid Sections (Product Updates, Business Banking, etc.) */}
        {activeCategory === 'all' && !searchQuery ? (
          <div className="space-y-32">
            {sections.map((section) => (
              <div key={section.id} className="scroll-mt-32" id={section.id}>
                <div className="flex items-center justify-between mb-12">
                  <h3 className="text-2xl md:text-4xl font-serif">{section.label}</h3>
                  <div className="h-px flex-grow mx-8 bg-white/10" />
                  <button 
                    onClick={() => setActiveCategory(section.id)}
                    className="text-sm font-medium text-white/40 hover:text-brand-accent transition-colors flex items-center gap-2 whitespace-nowrap"
                  >
                    Explore all <ArrowRight size={14} />
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
                  {section.articles.map((article) => (
                    <Link 
                      key={article.id} 
                      to={`/newhomepage/investopedia/${article.slug}`}
                      className="group flex gap-6 items-center"
                    >
                      <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 rounded-2xl overflow-hidden bg-brand-dark-surface border border-white/5">
                        <img 
                          src={article.image} 
                          alt={article.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="text-[10px] text-white/20 uppercase tracking-widest font-bold">
                          {article.category}
                        </div>
                        <h4 className="text-lg md:text-xl font-medium leading-tight group-hover:text-brand-accent transition-colors line-clamp-2">
                          {article.title}
                        </h4>
                        <p className="text-white/40 text-sm line-clamp-1 hidden md:block">
                          {article.excerpt}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Filtered Results Grid */
          <div className="mb-24">
            <div className="flex items-center justify-between mb-12">
              <h3 className="text-2xl md:text-3xl font-serif">
                {activeCategory === 'all' ? 'All Articles' : CATEGORIES.find(c => c.id === activeCategory)?.label}
              </h3>
              <div className="h-px flex-grow mx-8 bg-white/10" />
              {searchQuery && (
                <span className="text-sm text-white/40">Found {filteredArticles.length} results</span>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
              {filteredArticles.map((article) => (
                <Link 
                  key={article.id} 
                  to={`/newhomepage/investopedia/${article.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-brand-dark-surface border border-white/5">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-brand-accent text-[10px] font-bold uppercase tracking-widest">
                      <span>{article.category}</span>
                    </div>
                    <h4 className="text-xl font-medium leading-tight group-hover:text-brand-accent transition-colors line-clamp-2">
                      {article.title}
                    </h4>
                    <p className="text-white/40 text-sm line-clamp-2">
                      {article.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-32 border border-dashed border-white/10 rounded-3xl">
            <Search className="mx-auto text-white/10 mb-4" size={48} />
            <p className="text-white/40 text-xl">No articles found matching your criteria.</p>
            <button 
              onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
              className="mt-6 text-brand-accent hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Final CTA style from image */}
        <div className="mt-32 pt-32 border-t border-white/10 text-center relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-white/20 to-transparent" />
          <h2 className="text-5xl md:text-7xl font-serif mb-12">
            Start your investment <br />
            <span className="italic text-white/40 text-4xl md:text-6xl">journey in 10 minutes today</span>
          </h2>
          <Link 
            to="/newhomepage" 
            className="inline-flex items-center gap-4 px-10 py-5 bg-white text-brand-dark rounded-full font-bold text-lg hover:bg-brand-accent hover:text-white transition-all transform hover:scale-105 shadow-xl hover:shadow-brand-accent/20"
          >
            START NOW
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
