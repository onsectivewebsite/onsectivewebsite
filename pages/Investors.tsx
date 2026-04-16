import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Lock, TrendingUp, ShieldCheck, FileText, ArrowRight, Globe, Shield, BarChart3, Landmark, Scale } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';
import { GLOBAL_OFFICES } from '../constants';

const Investors: React.FC = () => {
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
      <SEOHead title="Investor Relations | Onsective" description="Information for private stakeholders and partners of Onsective Enterprise Inc." />

      {/* ===== HERO ===== */}
      <section className="bg-[#0d2b45] pt-40 pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-10 h-px bg-[#c1912f]" />
            <span className="text-[#c1912f] font-semibold text-xs tracking-[0.25em] uppercase font-['Plus_Jakarta_Sans']">Privately Held</span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-['Playfair_Display'] font-bold text-white tracking-tight leading-[0.95] mb-6">
            Investor Relations
          </h1>
          <p className="text-white/50 text-lg max-w-2xl leading-relaxed font-['Plus_Jakarta_Sans']">
            As a privately owned enterprise, Onsective prioritizes long-term strategic growth over short-term market fluctuations. We deliver sustainable value to our exclusive partners and stakeholders.
          </p>
        </div>
      </section>

      {/* ===== FINANCIAL INFO + STAKEHOLDER PORTAL ===== */}
      <section className="py-28 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div className="animate-on-scroll opacity-0 -translate-x-8 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-x-0">
              <span className="text-[#c1912f] text-xs font-semibold uppercase tracking-wider mb-4 block font-['Plus_Jakarta_Sans']">Financial Position</span>
              <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] text-[#1a1a2e] mb-8 font-bold">Financial Stability</h2>
              <p className="text-[#64748b] mb-10 leading-relaxed font-['Plus_Jakarta_Sans']">
                Onsective maintains a robust and independent financial structure, allowing aggressive investment in R&D and strategic innovation. Our private status grants agility to pivot rapidly without the constraints of public reporting cycles.
              </p>

              <div className="space-y-6">
                {[
                  { icon: ShieldCheck, title: 'Operational Independence', desc: 'Self-determined growth strategy ensuring absolute autonomy in decision-making.' },
                  { icon: TrendingUp, title: 'Strategic Reinvestment', desc: 'Continuous allocation of capital into proprietary Innovation Labs and R&D.' },
                  { icon: Shield, title: 'Risk Governance', desc: 'Enterprise-grade risk management protocols aligned with global compliance standards.' },
                  { icon: BarChart3, title: 'Revenue Diversification', desc: 'Balanced portfolio across consulting, platforms, and managed services.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#f1f5f9] flex items-center justify-center shrink-0 border border-[#e2e8f0]">
                      <item.icon className="text-[#c1912f]" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1a1a2e] font-['Plus_Jakarta_Sans']">{item.title}</h4>
                      <p className="text-sm text-[#64748b] font-['Plus_Jakarta_Sans']">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stakeholder Portal */}
            <div className="animate-on-scroll opacity-0 translate-x-8 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-x-0">
              <div className="bg-white border border-[#e2e8f0] p-8 rounded-lg sticky top-32 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <Lock className="text-[#1a1a2e]" size={22} />
                  <h3 className="text-xl font-bold text-[#1a1a2e] font-['Plus_Jakarta_Sans']">Stakeholder Portal</h3>
                </div>
                <p className="text-[#64748b] mb-8 text-sm font-['Plus_Jakarta_Sans']">
                  Access to detailed financial statements, governance reports, and capitalization tables is restricted to authorized stakeholders only.
                </p>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#64748b] mb-2 font-['Plus_Jakarta_Sans']">Access ID</label>
                    <input type="text" className="w-full p-3 border border-[#e2e8f0] rounded-lg focus:border-[#c1912f] focus:ring-2 focus:ring-[#c1912f]/10 outline-none transition-all text-sm font-['Plus_Jakarta_Sans']" placeholder="Enter your access ID" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#64748b] mb-2 font-['Plus_Jakarta_Sans']">Password</label>
                    <input type="password" className="w-full p-3 border border-[#e2e8f0] rounded-lg focus:border-[#c1912f] focus:ring-2 focus:ring-[#c1912f]/10 outline-none transition-all text-sm font-['Plus_Jakarta_Sans']" placeholder="********" />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#c1912f] text-white text-sm font-semibold hover:brightness-110 transition-all rounded-lg font-['Plus_Jakarta_Sans']"
                  >
                    Secure Login
                  </button>
                </form>
                <div className="mt-6 text-center">
                  <Link to="/contact" className="text-xs text-[#64748b] hover:text-[#c1912f] underline transition-colors font-['Plus_Jakarta_Sans']">Request Access</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== GOVERNANCE DOCUMENTS ===== */}
      <section className="py-28 md:py-40 bg-[#f1f5f9] border-y border-[#e2e8f0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0">
            <span className="text-[#c1912f] text-xs font-semibold uppercase tracking-wider mb-4 block font-['Plus_Jakarta_Sans']">Compliance</span>
            <h3 className="text-4xl md:text-5xl font-['Playfair_Display'] text-[#1a1a2e] mb-12 font-bold">Corporate Governance</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Code of Business Conduct', icon: Scale },
                { title: 'ESG Impact Report 2026', icon: Landmark },
                { title: 'Modern Slavery Statement', icon: FileText },
              ].map((doc, idx) => (
                <a
                  key={idx}
                  href="/assets/company-profile.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-6 bg-white border border-[#e2e8f0] hover:border-[#c1912f]/30 transition-all group cursor-pointer rounded-lg"
                >
                  <div className="flex items-center gap-4">
                    <doc.icon className="text-[#64748b] group-hover:text-[#c1912f] transition-colors" size={22} />
                    <span className="font-semibold text-sm text-[#1a1a2e] font-['Plus_Jakarta_Sans']">{doc.title}</span>
                  </div>
                  <ArrowRight size={16} className="text-[#e2e8f0] group-hover:text-[#c1912f] transition-all" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== GLOBAL FOOTPRINT ===== */}
      <section className="py-28 md:py-40 bg-[#0d2b45]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0">
            <span className="text-[#c1912f] text-xs font-semibold uppercase tracking-wider mb-4 block font-['Plus_Jakarta_Sans']">Global Presence</span>
            <h2 className="text-4xl md:text-6xl font-['Playfair_Display'] font-bold mb-6 text-white">Global Footprint</h2>
            <p className="text-white/40 max-w-2xl mx-auto font-['Plus_Jakarta_Sans']">
              Strategic operations spanning 7+ nations, delivering institutional-grade consulting with local precision and global scale.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {GLOBAL_OFFICES.map((office, idx) => (
              <div
                key={idx}
                className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-500 [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0 border border-white/10 p-6 rounded-lg hover:border-[#c1912f]/30 hover:bg-white/5 transition-all"
                style={{ transitionDelay: `${idx * 60}ms` }}
              >
                <Globe size={20} className="text-[#c1912f] mb-4" />
                <h4 className="font-semibold text-white text-sm mb-1 font-['Plus_Jakarta_Sans']">{office.city}</h4>
                <p className="text-xs text-white/30 font-medium font-['Plus_Jakarta_Sans']">{office.type}</p>
                <p className="text-xs text-white/20 mt-1 font-['Plus_Jakarta_Sans']">{office.country}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Investors;
