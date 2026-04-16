import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowRight, Users, Lock, BarChart3, Layers, Settings, Globe, Workflow, FileCheck, Smartphone } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';

const Platforms: React.FC = () => {
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
      <SEOHead title="Platforms | Onsective" description="Proprietary enterprise platforms built for governance, compliance, and workforce management at institutional scale." />

      {/* ===== HERO ===== */}
      <section className="bg-[#0d2b45] pt-40 pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-10 h-px bg-[#c1912f]" />
              <span className="text-[#c1912f] font-semibold text-xs tracking-[0.25em] uppercase font-['Plus_Jakarta_Sans']">Technology</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-['Playfair_Display'] font-bold text-white tracking-tight leading-[0.95] mb-8">
              Our Platforms
            </h1>
            <p className="text-lg md:text-xl text-white/50 max-w-2xl leading-relaxed font-['Plus_Jakarta_Sans']">
              Purpose-built enterprise software for governance, compliance, and workforce management. Engineered in-house for institutional-grade reliability and security.
            </p>
          </div>
        </div>
      </section>

      {/* ===== ONSECBOARD ===== */}
      <section id="onsecboard" className="py-28 md:py-40 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="animate-on-scroll opacity-0 -translate-x-8 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-x-0">
              <span className="inline-block px-3 py-1 bg-[#f1f5f9] text-[#c1912f] text-xs font-semibold uppercase tracking-wider rounded font-['Plus_Jakarta_Sans'] mb-6">Platform 01</span>
              <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] text-[#1a1a2e] mb-6 font-bold leading-tight">OnsecBoard</h2>
              <p className="text-[#64748b] text-base leading-relaxed mb-8 font-['Plus_Jakarta_Sans']">
                A secure digital boardroom engineered for enterprise governance. Real-time compliance tracking, encrypted communications, automated reporting, and centralized stakeholder management -- all unified in a single platform.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  { icon: Lock, title: 'Military-grade encryption', desc: 'End-to-end encryption with hardware security modules for board-level communications.' },
                  { icon: BarChart3, title: 'Compliance automation', desc: 'Automated regulatory tracking across jurisdictions with real-time audit trails.' },
                  { icon: Users, title: 'Stakeholder management', desc: 'Centralized portal for board members, executives, advisors, and committee coordination.' },
                  { icon: FileCheck, title: 'Document governance', desc: 'Version-controlled document management with granular access permissions and digital signatures.' },
                  { icon: Workflow, title: 'Meeting orchestration', desc: 'Automated agenda building, resolution tracking, and minute generation with AI-powered summarization.' },
                ].map((feat, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-[#f1f5f9] border border-[#e2e8f0] rounded-lg hover:border-[#c1912f]/30 transition-all">
                    <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shrink-0 border border-[#e2e8f0]">
                      <feat.icon size={18} className="text-[#c1912f]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1a1a2e] text-sm mb-0.5 font-['Plus_Jakarta_Sans']">{feat.title}</h4>
                      <p className="text-xs text-[#64748b] font-['Plus_Jakarta_Sans']">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link to="/contact">
                <span className="inline-flex items-center gap-3 px-8 py-4 bg-[#c1912f] text-white font-semibold text-sm font-['Plus_Jakarta_Sans'] hover:brightness-110 transition-all cursor-pointer">
                  Request a Demo <ArrowRight size={16} />
                </span>
              </Link>
            </div>

            <div className="animate-on-scroll opacity-0 translate-x-8 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-x-0">
              <div className="bg-[#f1f5f9] border border-[#e2e8f0] rounded-lg aspect-[16/10] flex items-center justify-center">
                <div className="text-center">
                  <Shield size={48} className="text-[#e2e8f0] mx-auto mb-4" />
                  <span className="text-sm font-medium text-[#64748b] font-['Plus_Jakarta_Sans']">Platform Preview Coming Soon</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DIVIDER ===== */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="h-px bg-[#e2e8f0]" />
      </div>

      {/* ===== ONSECEMPLOYEE ===== */}
      <section id="onsecemployee" className="py-28 md:py-40 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="lg:order-2 animate-on-scroll opacity-0 translate-x-8 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-x-0">
              <span className="inline-block px-3 py-1 bg-[#f1f5f9] text-[#c1912f] text-xs font-semibold uppercase tracking-wider rounded font-['Plus_Jakarta_Sans'] mb-6">Platform 02</span>
              <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] text-[#1a1a2e] mb-6 font-bold leading-tight">OnsecEmployee</h2>
              <p className="text-[#64748b] text-base leading-relaxed mb-8 font-['Plus_Jakarta_Sans']">
                Next-generation workforce management built for distributed, multi-country teams. From automated onboarding to performance analytics, OnsecEmployee consolidates your entire HR operation into one intelligent platform.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {[
                  { icon: Globe, label: 'Multi-country payroll & compliance' },
                  { icon: Workflow, label: 'Automated onboarding workflows' },
                  { icon: BarChart3, label: 'Performance reviews & OKRs' },
                  { icon: Settings, label: 'Time & attendance tracking' },
                  { icon: Smartphone, label: 'Self-service employee portal' },
                  { icon: Layers, label: 'Benefits administration' },
                ].map((feat, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-[#f1f5f9] border border-[#e2e8f0] rounded-lg">
                    <feat.icon size={16} className="text-[#c1912f] shrink-0" />
                    <span className="text-[#1a1a2e] text-sm font-medium font-['Plus_Jakarta_Sans']">{feat.label}</span>
                  </div>
                ))}
              </div>

              <Link to="/contact">
                <span className="inline-flex items-center gap-3 px-8 py-4 bg-[#c1912f] text-white font-semibold text-sm font-['Plus_Jakarta_Sans'] hover:brightness-110 transition-all cursor-pointer">
                  Schedule a Walkthrough <ArrowRight size={16} />
                </span>
              </Link>
            </div>

            <div className="lg:order-1 animate-on-scroll opacity-0 -translate-x-8 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-x-0">
              <div className="bg-[#f1f5f9] border border-[#e2e8f0] rounded-lg aspect-[16/10] flex items-center justify-center">
                <div className="text-center">
                  <Users size={48} className="text-[#e2e8f0] mx-auto mb-4" />
                  <span className="text-sm font-medium text-[#64748b] font-['Plus_Jakarta_Sans']">Platform Preview Coming Soon</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-28 md:py-40 bg-[#0d2b45]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0">
          <h2 className="text-4xl md:text-6xl font-['Playfair_Display'] text-white mb-6 font-bold">
            Need a custom <span className="text-[#c1912f]">platform?</span>
          </h2>
          <p className="text-white/40 text-lg mb-12 leading-relaxed max-w-2xl mx-auto font-['Plus_Jakarta_Sans']">
            We build bespoke enterprise software tailored to your operational requirements. If our existing platforms do not fit, we will engineer one that does.
          </p>
          <Link to="/contact">
            <span className="inline-flex items-center gap-3 px-10 py-4 bg-[#c1912f] text-white font-semibold text-sm font-['Plus_Jakarta_Sans'] hover:brightness-110 transition-all cursor-pointer">
              Discuss Your Requirements <ArrowRight size={16} />
            </span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Platforms;
