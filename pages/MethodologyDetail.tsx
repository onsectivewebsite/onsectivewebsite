import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ChevronRight, Target, ArrowRight, CheckCircle2, Layers, Zap } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';
import { getMethodologyDetail, getMethodologySlug } from '../data/methodology-details';
import { SERVICES } from '../constants';
import { toSlug } from '../utils/slugs';

const MethodologyDetail: React.FC = () => {
  const { serviceId, methodologyId } = useParams<{ serviceId: string; methodologyId: string }>();

  const parentService = SERVICES.find(s => s.path.split('/').pop() === serviceId);
  const detail = serviceId && methodologyId ? getMethodologyDetail(serviceId, methodologyId) : null;

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
  }, [methodologyId, serviceId]);

  if (!detail || !parentService) {
    return <Navigate to={serviceId ? `/services/${serviceId}` : '/services'} replace />;
  }

  const Icon = detail.icon || Target;

  return (
    <>
      <SEOHead
        title={`${detail.title} — ${parentService.title} Methodology | Onsective`}
        description={`${detail.tagline}. Onsective Enterprise Inc. delivers the ${detail.title} phase of our ${parentService.title.toLowerCase()} practice to 120+ enterprises across 7+ nations.`}
        overrides={{
          keywords: `Onsective ${detail.title}, Onsective ${parentService.title}, Onsective ${parentService.title} ${detail.title}, ${detail.title} methodology, ${parentService.title} ${detail.title} framework, ${parentService.title} consulting, ${detail.title} consulting Toronto, Onsective Enterprise, Onsective Inc, Onsec, Insec, ${detail.frameworks.slice(0, 4).join(', ')}`,
          canonical: `https://onsective.com/services/${serviceId}/methodology/${methodologyId}`,
          structuredData: {
            '@type': 'Service',
            '@id': `https://onsective.com/services/${serviceId}/methodology/${methodologyId}/#service`,
            name: `${detail.title} — Onsective ${parentService.title} Methodology`,
            serviceType: `${parentService.title} ${detail.title}`,
            description: detail.tagline,
            provider: {
              '@type': 'Organization',
              name: 'Onsective Enterprise',
              alternateName: ['Onsective', 'Onsective Inc.', 'Onsec', 'Insec'],
              url: 'https://onsective.com'
            },
            areaServed: 'Worldwide',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: `${detail.title} Deliverables`,
              itemListElement: detail.deliverables.map(d => ({
                '@type': 'Offer',
                itemOffered: { '@type': 'Service', name: d }
              }))
            }
          }
        }}
        breadcrumbs={[
          { name: 'Home', url: 'https://onsective.com/' },
          { name: 'Services', url: 'https://onsective.com/services' },
          { name: parentService.title, url: `https://onsective.com${parentService.path}` },
          { name: detail.title, url: `https://onsective.com/services/${serviceId}/methodology/${methodologyId}` }
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
            <Link to={parentService.path} className="hover:text-[#c1912f] transition-colors">{parentService.title}</Link>
            <ChevronRight size={14} className="text-[#c1912f]" />
            <span className="text-white/60">Methodology</span>
            <ChevronRight size={14} className="text-[#c1912f]" />
            <span className="text-[#c1912f]">{detail.title}</span>
          </div>

          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[#c1912f] text-xs font-semibold uppercase tracking-wider font-['Plus_Jakarta_Sans']">
                {parentService.title} · Methodology Phase
              </span>
            </div>
            <div className="w-16 h-16 bg-white/5 border border-white/10 flex items-center justify-center mb-8 rounded-lg">
              <Icon size={30} className="text-[#c1912f]" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-['Playfair_Display'] font-bold text-white tracking-tight leading-[0.95] mb-8">
              {detail.title}
            </h1>
            <p className="text-xl text-white/50 leading-relaxed mb-10 font-['Plus_Jakarta_Sans']">
              {detail.tagline}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#c1912f] text-white font-semibold text-sm font-['Plus_Jakarta_Sans'] hover:brightness-110 transition-all rounded-md"
              >
                Initiate Consultation <ArrowRight size={16} />
              </Link>
              <Link
                to={parentService.path}
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/10 text-white/70 font-semibold text-sm font-['Plus_Jakarta_Sans'] hover:border-white/30 hover:text-white transition-all rounded-md"
              >
                Back to {parentService.title}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== OVERVIEW + OUTCOMES ===== */}
      <section className="py-28 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24">
            <div className="lg:col-span-3 animate-on-scroll opacity-0 -translate-x-8 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-x-0">
              <span className="text-[#c1912f] text-xs font-semibold uppercase tracking-wider mb-6 block font-['Plus_Jakarta_Sans']">The Strategic Imperative</span>
              <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] text-[#1a1a2e] mb-8 leading-tight font-bold">
                What {detail.title} Means In {parentService.title}
              </h2>
              <div className="space-y-6">
                <p className="text-lg font-medium text-[#1a1a2e] font-['Plus_Jakarta_Sans'] leading-relaxed">{detail.overview}</p>
                <p className="text-[#64748b] leading-relaxed font-['Plus_Jakarta_Sans']">{detail.contextNote}</p>
              </div>
            </div>
            <div className="lg:col-span-2 animate-on-scroll opacity-0 translate-x-8 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-x-0">
              <div className="bg-white border border-[#e2e8f0] p-8 md:p-10 rounded-lg sticky top-32">
                <h3 className="text-2xl font-['Playfair_Display'] text-[#1a1a2e] mb-8 font-bold">Target Outcomes</h3>
                <div className="space-y-8">
                  {detail.outcomes.map((outcome, idx) => (
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

      {/* ===== PHASES — HOW WE EXECUTE ===== */}
      <section className="py-28 md:py-40 bg-[#0d2b45] relative overflow-hidden">
        <div className="absolute inset-0 perspective-grid opacity-20" />
        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
          <div className="text-center mb-20">
            <span className="text-[#c1912f] text-xs font-semibold uppercase tracking-wider mb-4 block font-['Plus_Jakarta_Sans']">Delivery Framework</span>
            <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] text-white font-bold mb-4">
              How We Execute {detail.title}
            </h2>
            <p className="text-white/40 text-lg max-w-3xl mx-auto font-['Plus_Jakarta_Sans']">
              The disciplined sub-phases within {detail.title.toLowerCase()}, refined across every institutional deployment of our {parentService.title.toLowerCase()} practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {detail.phases.map((phase, idx) => (
              <div
                key={idx}
                className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0 relative bg-white/5 border border-white/10 p-8 md:p-10 hover:bg-white/10 transition-all duration-300 rounded-lg group"
                style={{ transitionDelay: `${idx * 120}ms` }}
              >
                <div className="text-6xl font-['Playfair_Display'] text-[#c1912f]/20 absolute top-6 right-8 font-bold">
                  0{idx + 1}
                </div>
                <h3 className="text-xl font-['Playfair_Display'] mb-4 relative z-10 text-white font-bold">{phase.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed relative z-10 font-['Plus_Jakarta_Sans']">{phase.desc}</p>
                <div className="mt-6 h-[2px] bg-gradient-to-r from-[#c1912f]/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left relative z-10" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FRAMEWORKS + DELIVERABLES ===== */}
      <section className="py-28 md:py-40 bg-[#f1f5f9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Frameworks */}
            <div className="animate-on-scroll opacity-0 -translate-x-8 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-x-0">
              <div className="bg-[#0d2b45] rounded-lg p-8 md:p-10 h-full">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-lg bg-[#c1912f]/20 flex items-center justify-center">
                    <Layers size={18} className="text-[#c1912f]" />
                  </div>
                  <h3 className="text-2xl font-['Playfair_Display'] font-bold text-white">Frameworks & Tooling</h3>
                </div>
                <p className="text-white/40 text-sm leading-relaxed font-['Plus_Jakarta_Sans'] mb-8">
                  The institutional-grade frameworks, methodologies, and tooling our principals deploy during the {detail.title.toLowerCase()} phase.
                </p>
                <div className="space-y-3">
                  {detail.frameworks.map((fw, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#c1912f] rounded-full shrink-0 mt-2" />
                      <span className="text-white/70 text-sm font-['Plus_Jakarta_Sans']">{fw}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Deliverables */}
            <div className="animate-on-scroll opacity-0 translate-x-8 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-x-0">
              <div className="bg-white rounded-lg p-8 md:p-10 border border-[#e2e8f0] h-full">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-lg bg-[#c1912f]/10 flex items-center justify-center">
                    <CheckCircle2 size={18} className="text-[#c1912f]" />
                  </div>
                  <h3 className="text-2xl font-['Playfair_Display'] font-bold text-[#1a1a2e]">Artefacts We Deliver</h3>
                </div>
                <p className="text-[#64748b] text-sm leading-relaxed font-['Plus_Jakarta_Sans'] mb-8">
                  Every {detail.title.toLowerCase()} engagement concludes with these production-grade institutional deliverables, ready for board, engineering, and operational consumption.
                </p>
                <div className="space-y-4">
                  {detail.deliverables.map((d, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-[#c1912f] shrink-0 mt-0.5" />
                      <span className="text-[#1a1a2e] text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== RELATED CAPABILITIES ===== */}
      {detail.relatedCapabilities && detail.relatedCapabilities.length > 0 && (
        <section className="py-28 md:py-40 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-16">
            <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0">
              <span className="text-[#c1912f] text-xs font-semibold uppercase tracking-wider mb-4 block font-['Plus_Jakarta_Sans']">Compounding Capabilities</span>
              <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] text-[#1a1a2e] font-bold mb-4">
                Institutional Capabilities That Extend {detail.title}
              </h2>
              <p className="text-[#64748b] text-lg max-w-2xl mx-auto font-['Plus_Jakarta_Sans']">
                The sovereign domain capabilities our {parentService.title.toLowerCase()} practice deploys alongside the {detail.title.toLowerCase()} phase.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {detail.relatedCapabilities.map((cap, i) => (
                <Link
                  key={i}
                  to={`/services/${serviceId}/capability/${toSlug(cap)}`}
                  className="p-6 bg-[#f1f5f9] border border-[#e2e8f0] flex justify-between items-center group hover:bg-white hover:border-[#c1912f]/30 transition-all rounded-lg"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <span className="text-sm font-semibold text-[#1a1a2e] group-hover:text-[#c1912f] transition-colors font-['Plus_Jakarta_Sans']">{cap}</span>
                  <ArrowRight size={18} className="text-[#c1912f]" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== OTHER METHODOLOGY PHASES ===== */}
      <OtherPhases serviceId={serviceId!} currentMethodologyId={methodologyId!} />

      {/* ===== CTA ===== */}
      <section className="py-28 md:py-40 bg-[#c1912f] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0">
          <h2 className="text-4xl md:text-6xl font-['Playfair_Display'] text-white mb-6 leading-tight font-bold">
            Deploy the {detail.title} Discipline
          </h2>
          <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto leading-relaxed font-['Plus_Jakarta_Sans']">
            Engage Onsective principals to integrate the {detail.title.toLowerCase()} phase of our {parentService.title.toLowerCase()} practice into your institutional transformation programme.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-[#1a1a2e] font-semibold text-sm font-['Plus_Jakarta_Sans'] hover:bg-[#f1f5f9] transition-colors rounded-md"
            >
              Initiate Consultation <ArrowRight size={16} />
            </Link>
            <Link
              to={parentService.path}
              className="inline-flex items-center justify-center px-10 py-4 border border-white/40 text-white font-semibold text-sm font-['Plus_Jakarta_Sans'] hover:bg-white/10 transition-all rounded-md"
            >
              Back to {parentService.title}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

const OtherPhases: React.FC<{ serviceId: string; currentMethodologyId: string }> = ({ serviceId, currentMethodologyId }) => {
  // Import methodology titles from ServiceDetail's SERVICE_CONTENT by service
  const METHODOLOGY_MAP: Record<string, string[]> = {
    'it-strategy': ['Foresight', 'Architecture', 'Value Realization'],
    'cloud-services': ['Assess', 'Migrate', 'Optimize'],
    'cybersecurity': ['Assess', 'Fortify', 'Monitor'],
    'digital-experience': ['Discover', 'Design', 'Deliver'],
    'ai-automation': ['Identify', 'Build', 'Scale'],
    'enterprise-seo': ['Audit', 'Engineer', 'Dominate'],
    'digital-marketing': ['Strategize', 'Execute', 'Optimize'],
    'social-capital': ['Analyze', 'Activate', 'Amplify'],
    'custom-software': ['Discovery & Architecture', 'Agile Development', 'Launch & Scale'],
    'brand-management': ['Define', 'Design', 'Defend']
  };

  const phases = METHODOLOGY_MAP[serviceId] || [];
  const others = phases.filter(title => getMethodologySlug(title) !== currentMethodologyId);

  if (others.length === 0) return null;

  return (
    <section className="py-28 md:py-40 bg-[#f1f5f9] border-t border-[#e2e8f0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0">
          <span className="text-[#c1912f] text-xs font-semibold uppercase tracking-wider mb-4 block font-['Plus_Jakarta_Sans']">Continue Exploring</span>
          <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] text-[#1a1a2e] font-bold">Other Phases in This Methodology</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {others.map((title, i) => {
            const other = getMethodologyDetail(serviceId, getMethodologySlug(title));
            const OtherIcon = other?.icon || Zap;
            return (
              <Link
                key={i}
                to={`/services/${serviceId}/methodology/${getMethodologySlug(title)}`}
                className="group bg-white border border-[#e2e8f0] rounded-lg p-8 hover:border-[#c1912f]/40 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-lg bg-[#c1912f]/10 flex items-center justify-center">
                    <OtherIcon size={20} className="text-[#c1912f]" />
                  </div>
                  <h3 className="text-xl font-['Playfair_Display'] font-bold text-[#1a1a2e] group-hover:text-[#c1912f] transition-colors">
                    {title}
                  </h3>
                </div>
                {other && (
                  <p className="text-[#64748b] text-sm leading-relaxed font-['Plus_Jakarta_Sans'] mb-4">{other.tagline}</p>
                )}
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#c1912f] font-['Plus_Jakarta_Sans']">
                  Explore Phase <ArrowRight size={14} />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MethodologyDetail;
