import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft, Search as SearchIcon, ArrowUpRight } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';
import { ALL_INSIGHTS } from '../constants';
import Button from '../components/UI/Button';

const ITEMS_PER_PAGE = 9;

const Insights: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  // Scroll to top when page changes
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Filter Logic - Only Search now
  const filteredPosts = useMemo(() => {
    return ALL_INSIGHTS.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesSearch;
    });
  }, [searchQuery]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE);
  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Featured Post (First one of filtered or global)
  const featuredPost = currentPosts[0];
  const listPosts = currentPosts.slice(1);

  return (
    <>
      <SEOHead
        title="Insights & Analysis"
        description="Explore expert articles on AI, Digital Marketing, SEO, and Brand Strategy."
      />

      {/* EDITORIAL MANDATE */}
      <section className="pt-32 pb-0 bg-brand-black text-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pb-20 border-b border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            <div>
              <span className="text-brand-primary font-bold tracking-[0.5em] uppercase text-[10px] mb-6 block animate-fade-up">Intelligence Archive</span>
              <h1 className="text-5xl md:text-7xl font-serif font-black mb-0 tracking-tighter leading-none uppercase animate-fade-up">
                STRATEGIC<br /><span className="text-gold-gradient italic">INTELLIGENCE.</span>
              </h1>
            </div>
            <div className="animate-fade-up">
              <p className="text-gray-300 text-lg md:text-xl font-medium leading-relaxed mb-8">
                Onsective's Intelligence Archive is not a blog—it is an executive research instrument. Our senior architects and domain strategists publish peer-reviewed analysis on the forces reshaping institutional technology, sovereign governance, and enterprise resilience.
              </p>
              <p className="text-gray-400 text-sm font-medium leading-relaxed">
                Each brief is designed to be actionable at the boardroom level, providing the <strong className="text-white">factual architecture</strong> required to make decisive, informed investments in your institution's digital future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Header with Search Filter */}
      <section className="pt-16 pb-12 bg-white px-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <span className="text-brand-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block animate-fade-up">Perspectives</span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-brand-black animate-fade-up delay-100">
                The Knowledge<span className="text-brand-primary">.</span>
              </h1>
            </div>

            <div className="relative w-full md:w-80 animate-fade-up delay-200">
              <input
                type="text"
                placeholder="Search topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-10 py-3 bg-gray-50 border-b-2 border-gray-200 focus:border-brand-primary focus:outline-none transition-colors text-sm font-medium"
              />
              <SearchIcon className="absolute right-0 top-3 text-gray-300" size={20} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {currentPosts.length > 0 ? (
            <>
              {/* Featured Hero Article */}
              <div className="mb-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center group cursor-pointer">
                <div className="lg:col-span-8 overflow-hidden relative aspect-video">
                  <Link to={`/insights/${featuredPost.id}`}>
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                  </Link>
                </div>
                <div className="lg:col-span-4 flex flex-col justify-center">
                  <div className="mb-6">
                    <span className="bg-brand-black text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                      {featuredPost.category}
                    </span>
                  </div>
                  <Link to={`/insights/${featuredPost.id}`}>
                    <h2 className="text-3xl md:text-4xl font-serif text-brand-black mb-6 leading-tight group-hover:text-brand-primary transition-colors">
                      {featuredPost.title}
                    </h2>
                  </Link>
                  <p className="text-gray-600 mb-8 font-light leading-relaxed line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-300 uppercase tracking-widest border-t border-gray-100 pt-6">
                    <span>{featuredPost.date}</span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
              </div>

              {/* Grid for remaining posts */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mb-20">
                {listPosts.map((post) => (
                  <div key={post.id} className="flex flex-col group">
                    <Link to={`/insights/${post.id}`} className="block overflow-hidden mb-6 aspect-[3/2] relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                      />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                        {post.category}
                      </div>
                    </Link>
                    <div className="flex-1 flex flex-col">
                      <Link to={`/insights/${post.id}`}>
                        <h3 className="text-xl font-serif font-medium text-brand-black mb-3 group-hover:text-brand-primary transition-colors leading-snug">
                          {post.title}
                        </h3>
                      </Link>
                      <p className="text-gray-600 text-sm font-light mb-6 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                        <span className="text-xs text-gray-300 font-medium uppercase tracking-wider">{post.date}</span>
                        <Link to={`/insights/${post.id}`} className="text-brand-black hover:text-brand-primary transition-colors">
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
              <p className="text-xl text-gray-600">No articles found matching your criteria.</p>
              <button onClick={() => { setSearchQuery(''); }} className="text-brand-primary mt-4 font-bold underline">Reset Filters</button>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 border-t border-gray-100 pt-12">
              <Button
                variant="outline"
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="w-10 h-10 p-0 flex items-center justify-center border-gray-200"
              >
                <ChevronLeft size={16} />
              </Button>

              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-brand-black">Page {currentPage} of {totalPages}</span>
              </div>

              <Button
                variant="outline"
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="w-10 h-10 p-0 flex items-center justify-center border-gray-200"
              >
                <ChevronRight size={16} />
              </Button>
            </div>
          )}

        </div>
      </section>
    </>
  );
};

export default Insights;