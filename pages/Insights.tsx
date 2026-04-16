import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft, Search as SearchIcon, ArrowUpRight, Clock } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';
import { ALL_INSIGHTS } from '../constants';

const ITEMS_PER_PAGE = 9;

const Insights: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

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
  }, [currentPage, searchQuery]);

  const filteredPosts = useMemo(() => {
    return ALL_INSIGHTS.filter(post => {
      const q = searchQuery.toLowerCase();
      return post.title.toLowerCase().includes(q) || post.excerpt.toLowerCase().includes(q) || post.category.toLowerCase().includes(q);
    });
  }, [searchQuery]);

  const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE);
  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const featuredPost = currentPosts[0];
  const gridPosts = currentPosts.slice(1);

  return (
    <>
      <SEOHead
        title="Insights & Perspectives | Onsective"
        description="Expert analysis on AI, cloud, cybersecurity, digital marketing, and enterprise transformation from Onsective Research."
      />

      {/* ===== HEADER ===== */}
      <section className="pt-32 sm:pt-40 md:pt-44 pb-10 bg-white border-b border-[#e2e8f0] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-[#c1912f]" />
                <span className="text-[#c1912f] text-xs font-semibold uppercase tracking-[0.2em] font-['Plus_Jakarta_Sans']">Research</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-['Playfair_Display'] font-bold text-[#1a1a2e]">
                Insights &amp; Perspectives
              </h1>
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
        </div>
      </section>

      {/* ===== CONTENT ===== */}
      <section className="py-16 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">

          {currentPosts.length > 0 ? (
            <>
              {/* Featured Article */}
              {featuredPost && (
                <div className="mb-20 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center group">
                    <div className="lg:col-span-7 overflow-hidden relative aspect-video rounded-lg">
                      <Link to={`/insights/${featuredPost.id}`}>
                        <img
                          src={featuredPost.image}
                          alt={featuredPost.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#071a2e]/60 to-transparent" />
                      </Link>
                    </div>
                    <div className="lg:col-span-5 flex flex-col justify-center">
                      <span className="inline-block px-3 py-1 bg-[#c1912f] text-white text-xs font-semibold rounded w-fit mb-4 font-['Plus_Jakarta_Sans']">
                        {featuredPost.category}
                      </span>
                      <Link to={`/insights/${featuredPost.id}`}>
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                {gridPosts.map((post, idx) => (
                  <div
                    key={post.id}
                    className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0 flex flex-col group rounded-lg overflow-hidden bg-white border border-[#e2e8f0] hover:border-[#c1912f]/30 hover:shadow-sm"
                    style={{ transitionDelay: `${idx * 80}ms` }}
                  >
                    <Link to={`/insights/${post.id}`} className="block overflow-hidden aspect-[3/2] relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-[#c1912f] text-white text-xs font-semibold rounded font-['Plus_Jakarta_Sans']">
                          {post.category}
                        </span>
                      </div>
                    </Link>
                    <div className="flex-1 flex flex-col p-6">
                      <Link to={`/insights/${post.id}`}>
                        <h3 className="text-lg font-bold text-[#1a1a2e] mb-2 font-['Playfair_Display'] group-hover:text-[#c1912f] transition-colors leading-snug">
                          {post.title}
                        </h3>
                      </Link>
                      <p className="text-[#64748b] text-sm mb-4 line-clamp-2 leading-relaxed font-['Plus_Jakarta_Sans']">
                        {post.excerpt}
                      </p>
                      <div className="mt-auto pt-4 border-t border-[#e2e8f0] flex justify-between items-center">
                        <span className="text-xs text-[#64748b] font-medium font-['Plus_Jakarta_Sans']">{post.date}</span>
                        <Link to={`/insights/${post.id}`} className="text-[#c1912f] hover:brightness-110 transition-all">
                          <ArrowUpRight size={18} />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-[#64748b] mb-4 font-['Plus_Jakarta_Sans']">No articles match your search.</p>
              <button
                onClick={() => setSearchQuery('')}
                className="text-[#c1912f] font-semibold text-sm hover:underline font-['Plus_Jakarta_Sans']"
              >
                Clear search
              </button>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 border-t border-[#e2e8f0] pt-10">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="w-10 h-10 rounded-lg border border-[#e2e8f0] flex items-center justify-center text-[#64748b] hover:border-[#c1912f] hover:text-[#c1912f] disabled:opacity-30 transition-all"
              >
                <ChevronLeft size={16} />
              </button>

              <span className="text-sm font-semibold text-[#1a1a2e] font-['Plus_Jakarta_Sans']">
                Page {currentPage} of {totalPages}
              </span>

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
