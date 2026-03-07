import React, { useState, useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ChevronDown, ArrowRight } from 'lucide-react';
import { NAV_ITEMS, SERVICES, INDUSTRIES, ALL_INSIGHTS } from '../../constants';
import { ASSETS } from '../../utils/assets';
import Button from '../UI/Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const location = useLocation();

  const isDarkHeroPage = ['/', '/services', '/about', '/careers', '/industries', '/platforms', '/contact'].includes(location.pathname);
  const navTheme = (!scrolled && isDarkHeroPage && !isOpen) ? 'dark' : 'light';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setIsSearchOpen(false);
    setActiveMega(null);
  }, [location.pathname]);

  // Global Search Logic
  const searchResults = useMemo(() => {
    if (searchQuery.length < 2) return null;
    const q = searchQuery.toLowerCase();
    return {
      services: SERVICES.filter((s: any) => s.title.toLowerCase().includes(q)),
      industries: INDUSTRIES.filter((i: any) => i.title.toLowerCase().includes(q)),
      insights: ALL_INSIGHTS.filter((p: any) => p.title.toLowerCase().includes(q)).slice(0, 5)
    };
  }, [searchQuery]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[300] transition-all duration-500 ${navTheme === 'dark'
          ? 'bg-transparent'
          : 'bg-white/95 backdrop-blur-2xl shadow-premium border-b border-slate-100'
          }`}
        onMouseLeave={() => setActiveMega(null)}
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-12">
          <div className={`flex justify-between items-center transition-all duration-500 ${scrolled ? 'h-16 md:h-20' : 'h-20 md:h-24'}`}>

            {/* Logo */}
            <Link to="/" className="flex items-center z-[310] group shrink-0" aria-label="Home">
              <div className={`transition-all duration-700 ${scrolled ? 'w-24 md:w-32' : 'w-28 md:w-40'} flex items-center justify-start bg-transparent`}>
                <img
                  src={ASSETS.LOGO || '/assets/logo.png'}
                  alt="Onsective Logo"
                  className={`w-full h-auto object-contain object-left transition-all duration-700 ${navTheme === 'dark' ? 'brightness-0 invert' : ''}`}
                />
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden xl:flex flex-1 items-center justify-center h-full shrink">
              {NAV_ITEMS.map((item: any) => (
                <div
                  key={item.label}
                  className="h-full flex items-center"
                  onMouseEnter={() => setActiveMega(item.label)}
                >
                  {item.isExternal ? (
                    <a
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-3 2xl:px-6 text-[10px] 2xl:text-xs font-bold uppercase tracking-[0.25em] transition-all duration-300 h-full flex items-center relative group ${navTheme === 'dark' ? 'text-white/80' : 'text-slate-600'} hover:text-brand-primary`}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      to={item.path}
                      className={`px-3 2xl:px-6 text-[10px] 2xl:text-xs font-bold uppercase tracking-[0.25em] transition-all duration-300 h-full flex items-center relative group ${navTheme === 'dark' ? 'text-white/80' : 'text-slate-600'} hover:text-brand-primary`}
                    >
                      {item.label}
                      {item.children && (
                        <ChevronDown size={14} className={`ml-1.5 transition-transform ${activeMega === item.label ? 'rotate-180' : ''}`} />
                      )}
                      <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-brand-primary transition-all duration-500 ${activeMega === item.label ? 'w-full' : ''}`}></span>
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Right Controls */}
            <div className="flex items-center gap-3 md:gap-5 z-[310] shrink-0">
              <button
                onClick={() => setIsSearchOpen(true)}
                className={`transition-colors p-2 ${isOpen || navTheme === 'light' ? 'text-brand-black' : 'text-white'} hover:text-brand-primary`}
              >
                <Search size={22} className="w-5 h-5 md:w-6 md:h-6" />
              </button>

              <Link to="/contact" className="hidden lg:block">
                <Button
                  variant={navTheme === 'dark' ? 'outline' : 'primary'}
                  size="sm"
                  className={`text-[10px] md:text-xs px-3 md:px-5 ${navTheme === 'dark' ? 'border-white text-white hover:bg-white hover:text-brand-black' : ''}`}
                >
                  Consultation
                </Button>
              </Link>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`xl:hidden p-2 rounded-none transition-all duration-500 border ${isOpen
                  ? 'bg-brand-primary text-brand-black border-brand-primary'
                  : (navTheme === 'dark' ? 'bg-white/10 text-white border-white/20' : 'bg-slate-100 text-brand-black border-slate-200')
                  }`}
                aria-label="Toggle Menu"
              >
                {isOpen ? <X size={20} className="md:w-6 md:h-6" /> : <Menu size={20} className="md:w-6 md:h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mega Menu - Premium White Dropdown */}
        <div
          className={`hidden xl:block absolute left-0 right-0 top-full bg-white shadow-2xl transition-all duration-500 transform border-t border-slate-100 ${activeMega && NAV_ITEMS.find((i: any) => i.label === activeMega)?.children
              ? 'opacity-100 translate-y-0 visible'
              : 'opacity-0 -translate-y-4 invisible'
            }`}
        >
          <div className="max-w-[1440px] mx-auto px-12 py-16 grid grid-cols-12 gap-12">
            <div className="col-span-4 border-r border-slate-100 pr-12">
              <h3 className="text-4xl font-serif text-brand-black mb-6">{activeMega}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-10 font-medium">
                Architecting proprietary systems for the world's most sophisticated enterprise organizations.
              </p>
              <Link to={NAV_ITEMS.find((i: any) => i.label === activeMega)?.path || '/'}>
                <Button variant="text" withArrow className="font-bold">Explore Full Catalog</Button>
              </Link>
            </div>
            <div className="col-span-8 grid grid-cols-2 gap-x-12 gap-y-2">
              {NAV_ITEMS.find((i: any) => i.label === activeMega)?.children?.map((child: any, idx: number) => (
                <Link key={idx} to={child.path} className="group block p-4 hover:bg-slate-50 transition-colors border-b border-slate-50">
                  <h4 className="font-bold text-brand-black text-[11px] uppercase tracking-widest mb-1 group-hover:text-brand-primary transition-colors flex items-center justify-between">
                    {child.label}
                    <ArrowRight size={11} className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-brand-primary" />
                  </h4>
                  {child.description && (
                    <p className="text-[10px] text-slate-400 font-medium leading-relaxed truncate">
                      {child.description}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          </div>
          {/* Gold accent bottom bar */}
          <div className="h-1 w-full bg-gold-gradient"></div>
        </div>
      </nav>

      {/* SEARCH OVERLAY */}
      <div className={`fixed inset-0 bg-brand-black z-[400] transition-all duration-700 flex flex-col ${isSearchOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
        <div className="p-6 md:p-12 flex justify-between items-center border-b border-white/5">
          <span className="text-brand-primary font-black uppercase tracking-[0.4em] text-xs">Global Intelligence Search</span>
          <button onClick={() => setIsSearchOpen(false)} className="text-white hover:text-brand-primary transition-colors">
            <X size={32} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-6 md:px-24 py-12 md:py-24">
          <div className="max-w-4xl mx-auto">
            <input
              type="text"
              placeholder="Search Capabilities, Industries, or Insights..."
              className="w-full bg-transparent border-b-4 border-brand-primary/20 pb-8 text-3xl md:text-7xl font-serif text-white focus:border-brand-primary outline-none transition-all placeholder:text-white/10"
              autoFocus={isSearchOpen}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            {searchResults && (
              <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 animate-fade-up">
                {searchResults.services.length > 0 && (
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-primary mb-6">Capabilities</h4>
                    <div className="space-y-4">
                      {searchResults.services.map((s: any) => (
                        <Link key={s.id} to={s.path} className="block group" onClick={() => setIsSearchOpen(false)}>
                          <p className="text-white text-xl font-serif group-hover:text-brand-primary transition-colors">{s.title}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
                {searchResults.industries.length > 0 && (
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-primary mb-6">Verticals</h4>
                    <div className="space-y-4">
                      {searchResults.industries.map((i: any) => (
                        <Link key={i.id} to={i.path} className="block group" onClick={() => setIsSearchOpen(false)}>
                          <p className="text-white text-xl font-serif group-hover:text-brand-primary transition-colors">{i.title}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
                {searchResults.insights.length > 0 && (
                  <div className="md:col-span-2">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-primary mb-6">Strategic Insights</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {searchResults.insights.map((p: any) => (
                        <Link key={p.id} to={`/insights/${p.id}`} className="block group p-4 border border-white/5 hover:border-brand-primary/20 transition-all" onClick={() => setIsSearchOpen(false)}>
                          <p className="text-white font-serif group-hover:text-brand-primary transition-colors">{p.title}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE NAV OVERLAY */}
      <div
        className={`fixed inset-0 w-full h-[100dvh] bg-brand-black z-[250] transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] flex flex-col ${isOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none'}`}
      >
        <div className="flex flex-col h-full pt-20 sm:pt-32 px-6 sm:px-16 pb-12 overflow-y-auto">
          <div className="space-y-6 sm:space-y-10 mb-16">
            {NAV_ITEMS.map((item: any, idx: number) => (
              <div
                key={item.label}
                className={`transition-all duration-700 transform ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}
                style={{ transitionDelay: `${100 + (idx * 80)}ms` }}
              >
                {item.isExternal ? (
                  <a
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl sm:text-4xl md:text-6xl font-serif font-black text-white hover:text-brand-primary transition-colors inline-block uppercase tracking-tighter"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    to={item.path}
                    className="text-2xl sm:text-4xl md:text-6xl font-serif font-black text-white hover:text-brand-primary transition-colors inline-block uppercase tracking-tighter"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}

                {item.children && (
                  <div className="mt-4 sm:mt-6 flex flex-wrap gap-3 sm:gap-6 pl-4 border-l-2 border-brand-primary/20">
                    {item.children.slice(0, 4).map((child: any, cIdx: number) => (
                      <Link
                        key={cIdx}
                        to={child.path}
                        className="text-[9px] sm:text-xs font-bold uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                    <Link
                      to={item.path}
                      className="text-[9px] sm:text-xs font-black text-brand-primary uppercase tracking-[0.3em] flex items-center gap-2"
                      onClick={() => setIsOpen(false)}
                    >
                      ALL <ArrowRight size={12} />
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-auto pt-8 border-t border-white/10 flex flex-col gap-6">
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <Button variant="primary" className="w-full py-5 text-xs font-black" size="lg">
                Initiate Briefing
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;