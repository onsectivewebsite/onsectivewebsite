import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ChevronRight, Target, ArrowRight, CheckCircle2, Layers, Sparkles } from 'lucide-react';
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
        title={`${capabilityData.title} | ${parentService?.title || 'Strategic'} Capability | Onsective`}
        description={`${capabilityData.tagline}. Onsective Enterprise Inc. delivers ${capabilityData.title} as part of our ${parentService?.title?.toLowerCase() || 'strategic'} practice to 120+ enterprise clients across 7+ nations.`}
        overrides={{
          keywords: `Onsective ${capabilityData.title}, ${capabilityData.title}, ${capabilityData.title} consulting, ${capabilityData.title} services, ${capabilityData.title} Toronto, ${capabilityData.title} Canada, ${parentService?.title || ''} ${capabilityData.title}, Onsective Enterprise, Onsective Inc, Onsec, Insec, ${capabilityData.frameworks?.slice(0, 4).join(', ') || ''}`,
          canonical: `https://onsective.com/services/${serviceId}/capability/${capabilityId}`,
          structuredData: {
            '@type': 'Service',
            '@id': `https://onsective.com/services/${serviceId}/capability/${capabilityId}/#service`,
            name: `${capabilityData.title} — Onsective ${parentService?.title || 'Capability'}`,
            serviceType: capabilityData.title,
            description: capabilityData.tagline,
            provider: {
              '@type': 'Organization',
              name: 'Onsective Enterprise',
              alternateName: ['Onsective', 'Onsective Inc.', 'Onsec', 'Insec'],
              url: 'https://onsective.com'
            },
            areaServed: 'Worldwide',
            ...(capabilityData.deliverables && {
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: `${capabilityData.title} Deliverables`,
                itemListElement: capabilityData.deliverables.map(d => ({
                  '@type': 'Offer',
                  itemOffered: { '@type': 'Service', name: d }
                }))
              }
            })
          }
        }}
        breadcrumbs={[
          { name: 'Home', url: 'https://onsective.com/' },
          { name: 'Services', url: 'https://onsective.com/services' },
          ...(parentService ? [{ name: parentService.title, url: `https://onsective.com${parentService.path}` }] : []),
          { name: capabilityData.title, url: `https://onsective.com/services/${serviceId}/capability/${capabilityId}` }
        ]}
      />

      {/* ===== HERO ===== */}
      <section className="bg-[#0d2b45] pt-40 pb-28 relative overflow-hidden">
        <div className="absolute inset-0 perspective-grid opacity-25" />
        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
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
            <span className="text-white/60">Capability</span>
            <ChevronRight size={14} className="text-[#c1912f]" />
            <span className="text-[#c1912f]">{capabilityData.title}</span>
          </div>

          <div className="max-w-4xl">
            {parentService && (
              <span className="text-[#c1912f] text-xs font-semibold uppercase tracking-wider mb-6 block font-['Plus_Jakarta_Sans']">
                {parentService.title} · Strategic Capability
              </span>
            )}
            <div className="w-16 h-16 bg-white/5 border border-white/10 flex items-center justify-center mb-8 rounded-lg">
              <Icon size={30} className="text-[#c1912f]" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-['Playfair_Display'] font-bold text-white tracking-tight leading-[0.95] mb-8">
              {capabilityData.title}
            </h1>
            <p className="text-xl text-white/50 leading-relaxed mb-12 font-['Plus_Jakarta_Sans']">
              {capabilityData.tagline}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#c1912f] text-white font-semibold text-sm font-['Plus_Jakarta_Sans'] hover:brightness-110 transition-all rounded-md"
              >
                Initiate Consultation <ArrowRight size={16} />
              </Link>
              {parentService && (
                <Link
                  to={parentService.path}
                  className="inline-flex items-center gap-2 px-8 py-4 border border-white/10 text-white/70 font-semibold text-sm font-['Plus_Jakarta_Sans'] hover:border-white/30 hover:text-white transition-all rounded-md"
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
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24">
            <div className="lg:col-span-3 animate-on-scroll opacity-0 -translate-x-8 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-x-0">
              <span className="text-[#c1912f] text-xs font-semibold uppercase tracking-wider mb-6 block font-['Plus_Jakarta_Sans']">The Strategic Imperative</span>
              <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] text-[#1a1a2e] mb-8 leading-tight font-bold">
                {parentService ? `Why ${capabilityData.title} Matters in ${parentService.title}` : 'Objective Authority'}
              </h2>
              <div className="space-y-6">
                <p className="text-lg font-medium text-[#1a1a2e] font-['Plus_Jakarta_Sans'] leading-relaxed">{capabilityData.description}</p>
                <p className="text-[#64748b] leading-relaxed font-['Plus_Jakarta_Sans']">{capabilityData.strategicImportance}</p>
              </div>
            </div>
            <div className="lg:col-span-2 animate-on-scroll opacity-0 translate-x-8 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-x-0">
              <div className="bg-white border border-[#e2e8f0] p-8 md:p-10 rounded-lg sticky top-32">
                <h3 className="text-2xl font-['Playfair_Display'] text-[#1a1a2e] mb-8 font-bold">Target Outcomes</h3>
                <div className="space-y-8">
                  {capabilityData.outcomes.map((outcome, idx) => (
                    <div key={idx} className="flex items-center gap-5">
                      <div className="min-w-[5rem] min-h-[4rem] bg-[#c1912f] text-white flex items-center justify-center font-bold text-sm font-['Playfair_Display'] shrink-0 rounded-lg text-center px-3 py-2 leading-tight break-words">
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

      {/* ===== SIGNATURE FEATURES (OPTIONAL) ===== */}
      {capabilityData.signatureFeatures && capabilityData.signatureFeatures.length > 0 && (
        <section className="py-28 md:py-40 bg-[#f1f5f9] border-t border-[#e2e8f0]">
          <div className="max-w-7xl mx-auto px-6 lg:px-16">
            <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0">
              <span className="text-[#c1912f] text-xs font-semibold uppercase tracking-wider mb-4 block font-['Plus_Jakarta_Sans']">Signature Distinctions</span>
              <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] text-[#1a1a2e] font-bold mb-4">What Makes This Capability Sovereign</h2>
              <p className="text-[#64748b] text-lg max-w-2xl mx-auto font-['Plus_Jakarta_Sans']">
                The institutional distinctions that separate our {capabilityData.title} practice from conventional alternatives.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilityData.signatureFeatures.map((feature, i) => (
                <div
                  key={i}
                  className="bg-white border border-[#e2e8f0] rounded-lg p-8 hover:border-[#c1912f]/30 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#c1912f]/10 flex items-center justify-center mb-5">
                    <Sparkles size={18} className="text-[#c1912f]" />
                  </div>
                  <h3 className="text-lg font-['Playfair_Display'] font-bold text-[#1a1a2e] mb-3">{feature.title}</h3>
                  <p className="text-[#64748b] text-sm leading-relaxed font-['Plus_Jakarta_Sans']">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== METHODOLOGY STEPS ===== */}
      <section className="py-28 md:py-40 bg-[#0d2b45] relative overflow-hidden">
        <div className="absolute inset-0 perspective-grid opacity-20" />
        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
          <div className="text-center mb-20">
            <span className="text-[#c1912f] text-xs font-semibold uppercase tracking-wider mb-4 block font-['Plus_Jakarta_Sans']">Delivery Framework</span>
            <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] text-white font-bold mb-4">Methodology</h2>
            <p className="text-white/40 text-lg max-w-3xl mx-auto font-['Plus_Jakarta_Sans']">
              The disciplined sub-phases within our {capabilityData.title} practice, refined across every institutional deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilityData.methodology.map((step, idx) => (
              <div
                key={idx}
                className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0 relative bg-white/5 border border-white/10 p-8 md:p-10 hover:bg-white/10 transition-all duration-300 rounded-lg group"
                style={{ transitionDelay: `${idx * 120}ms` }}
              >
                <div className="text-6xl font-['Playfair_Display'] text-[#c1912f]/20 absolute top-6 right-8 font-bold">0{idx + 1}</div>
                <h3 className="text-xl font-['Playfair_Display'] mb-4 relative z-10 text-white font-bold">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed relative z-10 font-['Plus_Jakarta_Sans']">{step.desc}</p>
                <div className="mt-6 h-[2px] bg-gradient-to-r from-[#c1912f]/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left relative z-10" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FRAMEWORKS + DELIVERABLES ===== */}
      {(capabilityData.frameworks || capabilityData.deliverables) && (
        <section className="py-28 md:py-40 bg-[#f1f5f9]">
          <div className="max-w-7xl mx-auto px-6 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {capabilityData.frameworks && (
                <div className="animate-on-scroll opacity-0 -translate-x-8 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-x-0">
                  <div className="bg-[#0d2b45] rounded-lg p-8 md:p-10 h-full">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-10 h-10 rounded-lg bg-[#c1912f]/20 flex items-center justify-center">
                        <Layers size={18} className="text-[#c1912f]" />
                      </div>
                      <h3 className="text-2xl font-['Playfair_Display'] font-bold text-white">Frameworks & Tooling</h3>
                    </div>
                    <p className="text-white/40 text-sm leading-relaxed font-['Plus_Jakarta_Sans'] mb-8">
                      The institutional-grade frameworks, methodologies, and tooling our principals deploy within the {capabilityData.title} practice.
                    </p>
                    <div className="space-y-3">
                      {capabilityData.frameworks.map((fw, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-[#c1912f] rounded-full shrink-0 mt-2" />
                          <span className="text-white/70 text-sm font-['Plus_Jakarta_Sans']">{fw}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {capabilityData.deliverables && (
                <div className="animate-on-scroll opacity-0 translate-x-8 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-x-0">
                  <div className="bg-white rounded-lg p-8 md:p-10 border border-[#e2e8f0] h-full">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-10 h-10 rounded-lg bg-[#c1912f]/10 flex items-center justify-center">
                        <CheckCircle2 size={18} className="text-[#c1912f]" />
                      </div>
                      <h3 className="text-2xl font-['Playfair_Display'] font-bold text-[#1a1a2e]">Artefacts We Deliver</h3>
                    </div>
                    <p className="text-[#64748b] text-sm leading-relaxed font-['Plus_Jakarta_Sans'] mb-8">
                      Every {capabilityData.title} engagement concludes with these production-grade institutional deliverables.
                    </p>
                    <div className="space-y-4">
                      {capabilityData.deliverables.map((d, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle2 size={16} className="text-[#c1912f] shrink-0 mt-0.5" />
                          <span className="text-[#1a1a2e] text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ===== CTA ===== */}
      <section className="py-28 md:py-40 bg-[#c1912f]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0">
          <h2 className="text-4xl md:text-6xl font-['Playfair_Display'] text-white mb-6 leading-tight font-bold">Deploy {capabilityData.title}</h2>
          <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto leading-relaxed font-['Plus_Jakarta_Sans']">
            Engage Onsective principals to integrate {capabilityData.title} into your institutional transformation programme with structural precision and measurable outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-[#1a1a2e] font-semibold text-sm font-['Plus_Jakarta_Sans'] hover:bg-[#f1f5f9] transition-colors rounded-md"
            >
              Initiate Deployment <ArrowRight size={16} />
            </Link>
            {parentService && (
              <Link
                to={parentService.path}
                className="inline-flex items-center justify-center px-10 py-4 border border-white/40 text-white font-semibold text-sm font-['Plus_Jakarta_Sans'] hover:bg-white/10 transition-all rounded-md"
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
