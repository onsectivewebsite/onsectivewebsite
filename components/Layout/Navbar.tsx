import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ChevronDown, ArrowRight, Phone, Mail } from 'lucide-react';
import { NAV_ITEMS, SERVICES, INDUSTRIES, ALL_INSIGHTS, CONTACT_EMAIL, CONTACT_PHONE } from '../../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const location = useLocation();

  // Scroll detection — hides utility bar, makes main nav sticky
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close everything on route change
  useEffect(() => {
    setIsOpen(false);
    setIsSearchOpen(false);
    setActiveMega(null);
    setSearchQuery('');
    setMobileExpanded(null);
  }, [location.pathname]);

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Focus search input when opened
  useEffect(() => {
    if (isSearchOpen) searchInputRef.current?.focus();
  }, [isSearchOpen]);

  // Search results
  const searchResults = useMemo(() => {
    if (searchQuery.length < 2) return null;
    const q = searchQuery.toLowerCase();
    return {
      services: SERVICES.filter(s => s.title.toLowerCase().includes(q)),
      industries: INDUSTRIES.filter(i => i.title.toLowerCase().includes(q)),
      insights: ALL_INSIGHTS.filter(p => p.title.toLowerCase().includes(q)).slice(0, 5),
    };
  }, [searchQuery]);

  const hasResults = searchResults
    ? searchResults.services.length + searchResults.industries.length + searchResults.insights.length > 0
    : false;

  return (
    <>
      {/* ===== UTILITY BAR (hidden mobile) ===== */}
      <div
        className={`hidden lg:block fixed top-0 left-0 right-0 z-[210] h-8 bg-brand-dark transition-transform duration-300 ${
          scrolled ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center justify-between">
          <div className="flex items-center gap-5 text-white/60 text-xs">
            <a
              href={`tel:${CONTACT_PHONE.replace(/[^0-9+]/g, '')}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone size={11} /> {CONTACT_PHONE}
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail size={11} /> {CONTACT_EMAIL}
            </a>
          </div>
          <div className="flex items-center gap-5 text-white/60 text-xs">
            <Link to="/careers" className="hover:text-white transition-colors">Careers</Link>
            <Link to="/investors" className="hover:text-white transition-colors">Investors</Link>
            <Link to="/alumni" className="hover:text-white transition-colors">Alumni</Link>
          </div>
        </div>
      </div>

      {/* ===== MAIN NAV BAR ===== */}
      <nav
        className={`fixed left-0 right-0 z-[200] h-16 bg-white border-b border-brand-border transition-all duration-300 ${
          scrolled ? 'top-0 shadow-md' : 'top-0 lg:top-8'
        }`}
        onMouseLeave={() => setActiveMega(null)}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center justify-between">
          {/* Logo — clicking always takes to home and scrolls to top. */}
          <Link
            to="/"
            onClick={() => {
              if (location.pathname === '/') window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center shrink-0"
            aria-label="Onsective — Home"
          >
            <img
              src="/assets/logo.png"
              alt="Onsective — go to home"
              className="w-32 h-auto object-contain"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden xl:flex items-center h-full">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative h-full flex items-center"
                onMouseEnter={() => item.children ? setActiveMega(item.label) : setActiveMega(null)}
              >
                <Link
                  to={item.path}
                  className={`group px-4 h-full flex items-center gap-1.5 text-[13px] font-semibold tracking-[0.05em] transition-colors relative ${
                    activeMega === item.label
                      ? 'text-brand-primary'
                      : location.pathname.startsWith(item.path) && item.path !== '/'
                        ? 'text-brand-primary'
                        : 'text-brand-text hover:text-brand-primary'
                  }`}
                >
                  <span>{item.label.split(' ').map(w => w.charAt(0) + w.slice(1).toLowerCase()).join(' ')}</span>
                  {item.children && (
                    <ChevronDown
                      size={12}
                      strokeWidth={2.5}
                      className={`transition-transform duration-300 ${activeMega === item.label ? 'rotate-180 text-brand-primary' : 'text-brand-muted group-hover:text-brand-primary'}`}
                    />
                  )}
                  {/* Active underline — thin gold rail */}
                  <span
                    className={`absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-to-r from-brand-primary via-brand-gold-light to-brand-primary transition-all duration-300 ${
                      activeMega === item.label || (location.pathname.startsWith(item.path) && item.path !== '/')
                        ? 'opacity-100 scale-x-100'
                        : 'opacity-0 scale-x-50'
                    }`}
                  />
                </Link>
              </div>
            ))}
          </div>

          {/* Right side: search + CTA + hamburger */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Inline Search */}
            <div className="hidden md:flex items-center">
              {isSearchOpen ? (
                <div className="flex items-center border border-brand-border rounded-md overflow-hidden bg-brand-light">
                  <Search size={15} className="ml-3 text-brand-muted" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search..."
                    className="w-52 px-2 py-1.5 text-sm bg-transparent outline-none text-brand-text placeholder:text-brand-muted"
                  />
                  <button
                    onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }}
                    className="p-1.5 text-brand-muted hover:text-brand-text transition-colors"
                  >
                    <X size={14} />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2 text-brand-muted hover:text-brand-primary transition-colors"
                  aria-label="Search"
                >
                  <Search size={18} />
                </button>
              )}
            </div>

            <Link to="/contact" className="hidden md:inline-flex">
              <span className="bg-brand-primary text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-brand-gold-dark transition-colors cursor-pointer">
                Contact Us
              </span>
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden p-2 text-brand-text hover:text-brand-primary transition-colors"
              aria-label="Menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* ===== INLINE SEARCH RESULTS (desktop) ===== */}
        {isSearchOpen && searchResults && (
          <div className="hidden md:block absolute right-4 lg:right-8 top-full mt-1 w-80 lg:w-96 bg-white border border-brand-border rounded-md shadow-lg z-[195] max-h-[60vh] overflow-y-auto">
            <div className="p-4 space-y-3">
              {searchResults.services.length > 0 && (
                <div>
                  <div className="text-[10px] font-semibold text-brand-muted uppercase tracking-wider mb-1.5">Services</div>
                  {searchResults.services.map(s => (
                    <Link
                      key={s.id}
                      to={s.path}
                      onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }}
                      className="block px-2 py-1.5 rounded text-sm text-brand-text hover:text-brand-primary hover:bg-brand-light transition-colors"
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>
              )}
              {searchResults.industries.length > 0 && (
                <div>
                  <div className="text-[10px] font-semibold text-brand-muted uppercase tracking-wider mb-1.5">Industries</div>
                  {searchResults.industries.map(i => (
                    <Link
                      key={i.id}
                      to={i.path}
                      onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }}
                      className="block px-2 py-1.5 rounded text-sm text-brand-text hover:text-brand-primary hover:bg-brand-light transition-colors"
                    >
                      {i.title}
                    </Link>
                  ))}
                </div>
              )}
              {searchResults.insights.length > 0 && (
                <div>
                  <div className="text-[10px] font-semibold text-brand-muted uppercase tracking-wider mb-1.5">Insights</div>
                  {searchResults.insights.map(p => (
                    <Link
                      key={p.id}
                      to={`/insights/${p.id}`}
                      onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }}
                      className="block px-2 py-1.5 rounded text-sm text-brand-text hover:text-brand-primary hover:bg-brand-light transition-colors"
                    >
                      {p.title}
                    </Link>
                  ))}
                </div>
              )}
              {!hasResults && (
                <p className="text-brand-muted text-sm text-center py-3">No results found.</p>
              )}
            </div>
          </div>
        )}

        {/* ===== MEGA MENU (desktop) — premium navy panel ===== */}
        {activeMega && NAV_ITEMS.find(i => i.label === activeMega)?.children && (
          <div
            className="hidden xl:block absolute left-0 right-0 top-full z-[190] mega-menu-animate"
            onMouseLeave={() => setActiveMega(null)}
          >
            {/* Subtle gold accent line at the top */}
            <div className="h-[2px] bg-gradient-to-r from-transparent via-brand-primary to-transparent" />
            <div className="bg-white border-b border-brand-border shadow-[0_20px_50px_-10px_rgba(13,43,69,0.15)]">
              <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
                <div className="grid grid-cols-12 gap-10">
                  {/* Left intro — premium dark panel */}
                  <div className="col-span-3 relative">
                    <div className="absolute -left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-primary/40 to-transparent hidden" />
                    <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-brand-primary mb-3 block">
                      Onsective · Chapter
                    </span>
                    <h3 className="text-2xl font-display font-bold text-brand-dark mb-3 leading-tight">
                      {NAV_ITEMS.find(i => i.label === activeMega)?.label
                        .split(' ')
                        .map(w => w.charAt(0) + w.slice(1).toLowerCase())
                        .join(' ')}
                    </h3>
                    <p className="text-brand-muted text-[13px] leading-[1.65] mb-6">
                      {NAV_ITEMS.find(i => i.label === activeMega)?.description ||
                        'Explore our solutions tailored for enterprise organizations.'}
                    </p>
                    <Link
                      to={NAV_ITEMS.find(i => i.label === activeMega)?.path || '/'}
                      onClick={() => setActiveMega(null)}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-brand-dark text-white text-xs font-semibold tracking-wider uppercase rounded-md hover:bg-brand-primary transition-all duration-300 hover:gap-2.5"
                    >
                      View All <ArrowRight size={12} />
                    </Link>
                  </div>

                  {/* Vertical gold divider */}
                  <div className="col-span-px hidden" aria-hidden="true" />

                  {/* Children grid — two columns with better cards */}
                  <div className="col-span-9 grid grid-cols-3 gap-x-2 gap-y-1 border-l border-brand-border/60 pl-10 -ml-px">
                    {NAV_ITEMS.find(i => i.label === activeMega)?.children?.map((child, idx) => (
                      <Link
                        key={idx}
                        to={child.path}
                        onClick={() => setActiveMega(null)}
                        className="group relative block px-4 py-3 rounded-md transition-all duration-200 hover:bg-brand-light"
                      >
                        {/* Gold left accent that slides in on hover */}
                        <span className="absolute left-0 top-3 bottom-3 w-[2px] bg-brand-primary rounded-full opacity-0 scale-y-50 group-hover:opacity-100 group-hover:scale-y-100 transition-all duration-300 origin-center" />
                        <div className="flex items-start gap-2.5">
                          <div className="flex-1 min-w-0">
                            <div className="text-[13px] font-bold text-brand-dark group-hover:text-brand-primary transition-colors leading-snug">
                              {child.label}
                            </div>
                            {child.description && (
                              <div className="text-[11px] text-brand-muted mt-1 line-clamp-2 leading-relaxed">
                                {child.description}
                              </div>
                            )}
                          </div>
                          <ArrowRight
                            size={12}
                            className="text-brand-primary opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 shrink-0 mt-0.5"
                          />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mega menu animation */}
        <style>{`
          .mega-menu-animate {
            animation: megaFadeIn 280ms cubic-bezier(0.16, 1, 0.3, 1);
          }
          @keyframes megaFadeIn {
            0% { opacity: 0; transform: translateY(-8px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </nav>

      {/* ===== MOBILE MENU — full screen white overlay ===== */}
      {isOpen && (
        <div className="fixed inset-0 z-[250] xl:hidden bg-white flex flex-col">
          {/* Mobile header */}
          <div className="flex items-center justify-between px-6 h-16 border-b border-brand-border shrink-0">
            <Link to="/" onClick={() => setIsOpen(false)}>
              <img src="/assets/logo.png" alt="Onsective" className="w-28 h-auto object-contain" />
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-brand-text hover:text-brand-primary transition-colors"
            >
              <X size={22} />
            </button>
          </div>

          {/* Mobile search */}
          <div className="px-6 pt-4 pb-2">
            <div className="flex items-center border border-brand-border rounded-md bg-brand-light">
              <Search size={15} className="ml-3 text-brand-muted" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="flex-1 px-2 py-2.5 text-sm bg-transparent outline-none text-brand-text placeholder:text-brand-muted"
              />
            </div>
          </div>

          {/* Mobile nav items */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-1">
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                <div className="flex items-center justify-between">
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block py-3 text-base font-semibold transition-colors ${
                      location.pathname.startsWith(item.path)
                        ? 'text-brand-primary'
                        : 'text-brand-text hover:text-brand-primary'
                    }`}
                  >
                    {item.label.split(' ').map(w => w.charAt(0) + w.slice(1).toLowerCase()).join(' ')}
                  </Link>
                  {item.children && (
                    <button
                      onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                      className="p-2 text-brand-muted"
                    >
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${mobileExpanded === item.label ? 'rotate-180' : ''}`}
                      />
                    </button>
                  )}
                </div>
                {item.children && mobileExpanded === item.label && (
                  <div className="ml-4 mb-2 border-l-2 border-brand-border pl-4 space-y-0.5">
                    {item.children.map((child, i) => (
                      <Link
                        key={i}
                        to={child.path}
                        onClick={() => setIsOpen(false)}
                        className="block py-2 text-sm text-brand-muted hover:text-brand-primary transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Extra mobile links */}
            <div className="pt-4 border-t border-brand-border space-y-1">
              <Link to="/careers" onClick={() => setIsOpen(false)} className="block py-2 text-sm text-brand-muted hover:text-brand-primary transition-colors">Careers</Link>
              <Link to="/investors" onClick={() => setIsOpen(false)} className="block py-2 text-sm text-brand-muted hover:text-brand-primary transition-colors">Investors</Link>
              <Link to="/alumni" onClick={() => setIsOpen(false)} className="block py-2 text-sm text-brand-muted hover:text-brand-primary transition-colors">Alumni</Link>
            </div>
          </div>

          {/* Mobile CTA */}
          <div className="px-6 pb-8 pt-4 shrink-0">
            <Link to="/contact" onClick={() => setIsOpen(false)} className="block">
              <span className="block w-full py-3.5 bg-brand-primary text-white font-semibold text-sm rounded-md text-center hover:bg-brand-gold-dark transition-colors cursor-pointer">
                Contact Us
              </span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
