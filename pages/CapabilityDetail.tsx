import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ChevronRight, Target, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';
import { getCapabilityData } from '../data/capabilities';
import { SERVICES } from '../constants';

const CapabilityDetail: React.FC = () => {
  const { serviceId, capabilityId } = useParams<{ serviceId: string; capabilityId: string }>();

  const capabilityData = capabilityId ? getCapabilityData(capabilityId) : null;
  const parentService = SERVICES.find(s => s.path.includes(serviceId || ''));

  useEffect(() => {
    window.scrollTo(0, 0);

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
  }, [capabilityId]);

  if (!capabilityData) {
    return <Navigate to={`/services/${serviceId}`} replace />;
  }

  const Icon = capabilityData.icon || Target;

  return (
    <>
      <SEOHead
        title={`${capabilityData.title} | Strategic Domain Asset`}
        description={capabilityData.tagline}
      />

      {/* ===== HERO ===== */}
      <section className="bg-[#0d2b45] pt-40 pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm font-medium text-white/40 mb-10 font-['Plus_Jakarta_Sans'] flex-wrap">
            <Link to="/services" className="hover:text-[#c1912f] transition-colors">Services</Link>
            <ChevronRight size={14} className="text-[#c1912f]" />
            {parentService && (
              <>
                <Link to={parentService.path} className="hover:text-[#c1912f] transition-colors">{parentService.title}</Link>
                <ChevronRight size={14} className="text-[#c1912f]" />
              </>
            )}
            <span className="text-[#c1912f]">{capabilityData.title}</span>
          </div>

          <div className="max-w-4xl">
            <div className="w-14 h-14 bg-white/5 border border-white/10 flex items-center justify-center mb-8 rounded-lg">
              <Icon size={28} className="text-[#c1912f]" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-['Playfair_Display'] font-bold text-white tracking-tight leading-[0.95] mb-8">
              {capabilityData.title}
            </h1>
            <p className="text-xl text-white/40 leading-relaxed mb-12 font-['Plus_Jakarta_Sans']">
              {capabilityData.tagline}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="px-8 py-4 bg-[#c1912f] text-white font-semibold text-sm font-['Plus_Jakarta_Sans'] hover:brightness-110 transition-all"
              >
                Initiate Consultation
              </Link>
              {parentService && (
                <Link
                  to={parentService.path}
                  className="px-8 py-4 border border-white/10 text-white/60 font-semibold text-sm font-['Plus_Jakarta_Sans'] hover:border-white/30 hover:text-white transition-all"
                >
                  Back to {parentService.title}
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ===== DESCRIPTION + OUTCOMES ===== */}
      <section className="py-28 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div className="animate-on-scroll opacity-0 -translate-x-8 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-x-0">
              <span className="text-[#c1912f] text-xs font-semibold uppercase tracking-wider mb-6 block font-['Plus_Jakarta_Sans']">The Strategic Imperative</span>
              <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] text-[#1a1a2e] mb-8 leading-tight font-bold">Objective Authority</h2>
              <div className="space-y-6">
                <p className="text-lg font-medium text-[#1a1a2e] font-['Plus_Jakarta_Sans']">{capabilityData.description}</p>
                <p className="text-[#64748b] leading-relaxed font-['Plus_Jakarta_Sans']">{capabilityData.strategicImportance}</p>
              </div>
            </div>
            <div className="animate-on-scroll opacity-0 translate-x-8 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-x-0">
              <div className="bg-white border border-[#e2e8f0] p-8 md:p-10 rounded-lg">
                <h3 className="text-2xl font-['Playfair_Display'] text-[#1a1a2e] mb-8 font-bold">Target Outcomes</h3>
                <div className="space-y-8">
                  {capabilityData.outcomes.map((outcome: any, idx: number) => (
                    <div key={idx} className="flex items-center gap-6">
                      <div className="w-14 h-14 bg-[#c1912f] text-white flex items-center justify-center font-bold text-lg font-['Playfair_Display'] shrink-0 rounded-lg">
                        {outcome.value}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-[#c1912f] mb-2 font-['Plus_Jakarta_Sans']">{outcome.label}</div>
                        <div className="h-1.5 w-full bg-[#f1f5f9] relative overflow-hidden rounded-lg">
                          <div className="absolute inset-0 bg-[#c1912f]/30 w-2/3 rounded-lg" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== METHODOLOGY STEPS ===== */}
      <section className="py-28 md:py-40 bg-[#0d2b45]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-20">
            <span className="text-[#c1912f] text-xs font-semibold uppercase tracking-wider mb-4 block font-['Plus_Jakarta_Sans']">Delivery Framework</span>
            <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] text-white font-bold">Methodology</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {capabilityData.methodology.map((step: any, idx: number) => (
              <div
                key={idx}
                className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0 relative bg-white/5 border border-white/10 p-8 md:p-10 hover:bg-white/10 transition-all duration-300 rounded-lg"
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="text-6xl font-['Playfair_Display'] text-[#c1912f]/20 absolute top-6 right-8 font-bold">0{idx + 1}</div>
                <h3 className="text-xl font-['Playfair_Display'] mb-4 relative z-10 text-white font-bold">{step.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed relative z-10 font-['Plus_Jakarta_Sans']">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-28 md:py-40 bg-[#c1912f]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0">
          <h2 className="text-4xl md:text-6xl font-['Playfair_Display'] text-white mb-6 leading-tight font-bold">Upgrade Your Strategic Assets</h2>
          <p className="text-white/70 text-lg mb-12 max-w-2xl mx-auto leading-relaxed font-['Plus_Jakarta_Sans']">
            Interface with Onsective partners to integrate {capabilityData.title} with structural precision and measurable outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-[#1a1a2e] font-semibold text-sm font-['Plus_Jakarta_Sans'] hover:bg-[#f1f5f9] transition-colors"
            >
              Initiate Deployment <ArrowRight size={16} />
            </Link>
            {parentService && (
              <Link
                to={parentService.path}
                className="inline-flex items-center justify-center px-10 py-4 border border-white/30 text-white font-semibold text-sm font-['Plus_Jakarta_Sans'] hover:bg-white/10 transition-all"
              >
                Back to {parentService.title}
              </Link>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default CapabilityDetail;
