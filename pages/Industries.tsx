import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, TrendingUp, Globe2 } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';
import { INDUSTRIES } from '../constants';
import { ASSETS } from '../utils/assets';

const INDUSTRY_IMAGES: Record<string, string> = {
  banking: ASSETS.IND_BANKING,
  healthcare: ASSETS.IND_HEALTH,
  retail: ASSETS.IND_RETAIL,
  manufacturing: ASSETS.IND_MANUFACTURING,
  energy: ASSETS.IND_ENERGY,
};

const INDUSTRY_STATS: Record<string, string> = {
  banking: '40+ Financial Institutions Served',
  healthcare: '25+ Healthcare Systems Transformed',
  retail: '60+ Retail Brands Optimized',
  manufacturing: '35+ Smart Factories Deployed',
  energy: '20+ Grid Modernization Programs',
};

const Industries: React.FC = () => {
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
      { threshold: 0.08, rootMargin: '0px 0px -80px 0px' }
    );
    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <SEOHead pageKey="industries" />

      {/* ===== HERO ===== */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600"
          alt="Industries hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d2b45] via-[#0d2b45]/80 to-[#0d2b45]/40" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16 pb-24 pt-40">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-px bg-[#c1912f]" />
            <span className="text-[#c1912f] font-semibold text-xs tracking-[0.25em] uppercase font-['Plus_Jakarta_Sans']">Sector Expertise</span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-['Playfair_Display'] font-bold text-white tracking-tight leading-[0.95] mb-6">
            Industries We Serve
          </h1>
          <p className="text-lg text-white/50 max-w-2xl leading-relaxed font-['Plus_Jakarta_Sans']">
            Deep domain knowledge across the world's most complex and regulated sectors. We understand the ecosystems, stakeholders, and technology imperatives that define each vertical.
          </p>
        </div>
      </section>

      {/* ===== INDUSTRY CARDS ===== */}
      <section className="py-28 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES.map((industry, idx) => (
              <Link
                key={industry.id}
                to={industry.path}
                className="group animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0 block"
                style={{ transitionDelay: `${idx * 120}ms` }}
              >
                <div className="relative overflow-hidden rounded-lg h-72 mb-6">
                  <img
                    src={INDUSTRY_IMAGES[industry.id]}
                    alt={industry.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071a2e]/90 via-[#071a2e]/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-[#c1912f] text-xs font-semibold uppercase tracking-wider font-['Plus_Jakarta_Sans']">
                      {INDUSTRY_STATS[industry.id]}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-['Playfair_Display'] font-bold text-[#1a1a2e] mb-3 group-hover:text-[#c1912f] transition-colors duration-300">
                  {industry.title}
                </h3>
                <p className="text-[#64748b] text-sm leading-relaxed mb-4 font-['Plus_Jakarta_Sans']">
                  {industry.description}
                </p>
                <span className="inline-flex items-center gap-2 text-[#c1912f] text-sm font-semibold font-['Plus_Jakarta_Sans'] group-hover:gap-3 transition-all duration-300">
                  Explore Sector <ArrowRight size={15} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY ONSECTIVE STRIP ===== */}
      <section className="py-20 bg-[#f1f5f9] border-y border-[#e2e8f0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0">
            {[
              { icon: Building2, title: 'Regulated Expertise', desc: 'Proven track record in highly regulated environments with compliance-first architectures.' },
              { icon: TrendingUp, title: 'Measurable Outcomes', desc: 'Every engagement tied to quantifiable business metrics and P&L impact.' },
              { icon: Globe2, title: 'Global Delivery', desc: 'Cross-border implementation capability spanning 7+ nations with local market intelligence.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-5">
                <div className="w-12 h-12 rounded-lg bg-white border border-[#e2e8f0] flex items-center justify-center shrink-0">
                  <item.icon size={22} className="text-[#c1912f]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1a1a2e] mb-1 font-['Plus_Jakarta_Sans']">{item.title}</h4>
                  <p className="text-sm text-[#64748b] leading-relaxed font-['Plus_Jakarta_Sans']">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-28 md:py-40 bg-[#0d2b45]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0">
          <h2 className="text-4xl md:text-6xl font-['Playfair_Display'] font-bold text-white mb-6">
            Don't see your <span className="text-[#c1912f]">industry?</span>
          </h2>
          <p className="text-white/40 text-lg mb-12 max-w-2xl mx-auto leading-relaxed font-['Plus_Jakarta_Sans']">
            We serve organizations across dozens of sectors globally. If your vertical is not listed, reach out -- we have likely delivered transformative work in your space.
          </p>
          <Link to="/contact">
            <span className="inline-flex items-center gap-3 px-10 py-4 bg-[#c1912f] text-white font-semibold text-sm font-['Plus_Jakarta_Sans'] hover:brightness-110 transition-all cursor-pointer">
              Start a Conversation <ArrowRight size={16} />
            </span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Industries;
