import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft, Search as SearchIcon, ArrowUpRight, Clock, LayoutGrid } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';
import { UNIFIED_FEED, feedPostHref, FEED_CATEGORIES } from '../data/unified-feed';

const ITEMS_PER_PAGE = 24;
const ALL_CATEGORY = 'All';

const Insights: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>(ALL_CATEGORY);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -60px 0px' }
    );
    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [currentPage, searchQuery, activeCategory]);

  const filteredPosts = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return UNIFIED_FEED.filter(post => {
      if (activeCategory !== ALL_CATEGORY && post.category !== activeCategory) return false;
      if (!q) return true;
      return (
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q)
      );
    });
  }, [searchQuery, activeCategory]);

  const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE) || 1;
  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const featuredPost = currentPage === 1 ? currentPosts[0] : null;
  const gridPosts = currentPage === 1 ? currentPosts.slice(1) : currentPosts;

  return (
    <>
      <SEOHead
        title="Insights & Perspectives | Onsective"
        description="Over 1,200 expert articles, guides, and frameworks on digital marketing, SEO, cloud, cybersecurity, AI, and enterprise transformation — from Onsective Research."
        overrides={{
          keywords: 'Onsective insights, Onsective blog, Onsective research, digital marketing blog, SEO blog, AI blog, cloud blog, cybersecurity blog, enterprise insights, command the future'
        }}
      />

      {/* ===== HEADER ===== */}
      <section className="pt-32 sm:pt-40 md:pt-44 pb-8 bg-white border-b border-[#e2e8f0] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-[#c1912f]" />
                <span className="text-[#c1912f] text-xs font-semibold uppercase tracking-[0.2em] font-['Plus_Jakarta_Sans']">
                  Onsective Research
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-['Playfair_Display'] font-bold text-[#1a1a2e] mb-4">
                Insights &amp; Perspectives
              </h1>
              <p className="text-[#64748b] text-base md:text-lg font-['Plus_Jakarta_Sans'] leading-relaxed">
                {UNIFIED_FEED.length.toLocaleString()} articles, guides, and frameworks across digital marketing, SEO, cloud, cybersecurity, AI, brand, and enterprise transformation.
              </p>
            </div>

            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                className="w-full pl-5 pr-11 py-3 bg-[#f1f5f9] border border-[#e2e8f0] rounded-lg focus:border-[#c1912f] focus:ring-2 focus:ring-[#c1912f]/10 focus:outline-none transition-all text-sm font-['Plus_Jakarta_Sans']"
              />
              <SearchIcon className="absolute right-4 top-3.5 text-[#64748b]" size={18} />
            </div>
          </div>

          {/* Category chips */}
          <div className="mt-8 flex flex-wrap gap-2">
            <button
              onClick={() => { setActiveCategory(ALL_CATEGORY); setCurrentPage(1); }}
              className={`px-4 py-2 rounded-full text-xs font-semibold font-['Plus_Jakarta_Sans'] transition-all ${
                activeCategory === ALL_CATEGORY
                  ? 'bg-[#c1912f] text-white'
                  : 'bg-[#f1f5f9] text-[#64748b] hover:bg-[#e2e8f0]'
              }`}
            >
              <LayoutGrid size={12} className="inline mr-1.5" />
              All <span className="opacity-60 ml-1">({UNIFIED_FEED.length.toLocaleString()})</span>
            </button>
            {FEED_CATEGORIES.map(cat => (
              <button
                key={cat.name}
                onClick={() => { setActiveCategory(cat.name); setCurrentPage(1); }}
                className={`px-4 py-2 rounded-full text-xs font-semibold font-['Plus_Jakarta_Sans'] transition-all ${
                  activeCategory === cat.name
                    ? 'bg-[#c1912f] text-white'
                    : 'bg-[#f1f5f9] text-[#64748b] hover:bg-[#e2e8f0]'
                }`}
              >
                {cat.name} <span className="opacity-60 ml-1">({cat.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTENT ===== */}
      <section className="py-14 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="flex items-baseline justify-between mb-8 text-sm text-[#64748b] font-['Plus_Jakarta_Sans']">
            <span>
              <strong className="text-[#1a1a2e]">{filteredPosts.length.toLocaleString()}</strong> {filteredPosts.length === 1 ? 'article' : 'articles'}
              {activeCategory !== ALL_CATEGORY && <> · {activeCategory}</>}
              {searchQuery && <> · matching "{searchQuery}"</>}
            </span>
            {totalPages > 1 && <span>Page {currentPage} / {totalPages}</span>}
          </div>

          {currentPosts.length > 0 ? (
            <>
              {/* Featured Article (first page only) */}
              {featuredPost && (
                <div className="mb-14 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center group">
                    <div className="lg:col-span-7 overflow-hidden relative aspect-video rounded-lg">
                      <Link to={feedPostHref(featuredPost.id)}>
                        <img
                          src={featuredPost.image}
                          alt={featuredPost.title}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#071a2e]/60 to-transparent" />
                        <span className="absolute top-5 left-5 inline-block px-3 py-1 bg-[#c1912f] text-white text-xs font-semibold rounded font-['Plus_Jakarta_Sans']">
                          Featured · {featuredPost.category}
                        </span>
                      </Link>
                    </div>
                    <div className="lg:col-span-5 flex flex-col justify-center">
                      <Link to={feedPostHref(featuredPost.id)}>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-['Playfair_Display'] text-[#1a1a2e] mb-4 leading-tight font-bold group-hover:text-[#c1912f] transition-colors">
                          {featuredPost.title}
                        </h2>
                      </Link>
                      <p className="text-[#64748b] mb-6 text-sm leading-relaxed line-clamp-3 font-['Plus_Jakarta_Sans']">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center gap-6 text-xs text-[#64748b] font-medium font-['Plus_Jakarta_Sans'] border-t border-[#e2e8f0] pt-4">
                        <span>{featuredPost.date}</span>
                        <span className="flex items-center gap-1"><Clock size={12} /> {featuredPost.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Article Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
                {gridPosts.map((post, idx) => (
                  <article
                    key={post.id}
                    className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-600 [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0 flex flex-col group rounded-lg overflow-hidden bg-white border border-[#e2e8f0] hover:border-[#c1912f]/40 hover:shadow-md hover:-translate-y-0.5"
                    style={{ transitionDelay: `${Math.min(idx, 12) * 40}ms` }}
                  >
                    <Link to={feedPostHref(post.id)} className="block overflow-hidden aspect-[3/2] relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#071a2e]/50 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="px-2.5 py-1 bg-[#c1912f] text-white text-[10px] font-semibold rounded font-['Plus_Jakarta_Sans'] uppercase tracking-wider">
                          {post.category}
                        </span>
                      </div>
                    </Link>
                    <div className="flex-1 flex flex-col p-5">
                      <Link to={feedPostHref(post.id)}>
                        <h3 className="text-base font-bold text-[#1a1a2e] mb-2 font-['Playfair_Display'] group-hover:text-[#c1912f] transition-colors leading-snug line-clamp-2">
                          {post.title}
                        </h3>
                      </Link>
                      <p className="text-[#64748b] text-sm mb-4 line-clamp-2 leading-relaxed font-['Plus_Jakarta_Sans']">
                        {post.excerpt}
                      </p>
                      <div className="mt-auto pt-3 border-t border-[#e2e8f0] flex justify-between items-center text-xs text-[#64748b] font-medium font-['Plus_Jakarta_Sans']">
                        <span className="flex items-center gap-1.5">
                          <Clock size={11} /> {post.readTime}
                        </span>
                        <span>{post.date}</span>
                        <Link to={feedPostHref(post.id)} className="text-[#c1912f] hover:brightness-110">
                          <ArrowUpRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-[#64748b] mb-4 font-['Plus_Jakarta_Sans']">No articles match your filters.</p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory(ALL_CATEGORY); }}
                className="text-[#c1912f] font-semibold text-sm hover:underline font-['Plus_Jakarta_Sans']"
              >
                Reset filters
              </button>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-3 border-t border-[#e2e8f0] pt-10">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="w-10 h-10 rounded-lg border border-[#e2e8f0] flex items-center justify-center text-[#64748b] hover:border-[#c1912f] hover:text-[#c1912f] disabled:opacity-30 transition-all"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => setCurrentPage(1)}
                disabled={currentPage === 1}
                className="px-3 py-2 text-xs rounded-lg border border-[#e2e8f0] text-[#64748b] hover:border-[#c1912f] hover:text-[#c1912f] disabled:opacity-30 transition-all font-semibold font-['Plus_Jakarta_Sans']"
              >
                First
              </button>
              <span className="text-sm font-semibold text-[#1a1a2e] font-['Plus_Jakarta_Sans'] px-2 tabular-nums">
                {currentPage} / {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage(totalPages)}
                disabled={currentPage === totalPages}
                className="px-3 py-2 text-xs rounded-lg border border-[#e2e8f0] text-[#64748b] hover:border-[#c1912f] hover:text-[#c1912f] disabled:opacity-30 transition-all font-semibold font-['Plus_Jakarta_Sans']"
              >
                Last
              </button>
              <button
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="w-10 h-10 rounded-lg border border-[#e2e8f0] flex items-center justify-center text-[#64748b] hover:border-[#c1912f] hover:text-[#c1912f] disabled:opacity-30 transition-all"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Insights;
