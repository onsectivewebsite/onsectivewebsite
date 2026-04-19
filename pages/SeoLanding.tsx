import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, CheckCircle2, Phone, Sparkles, Clock } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';
import { SERVICES } from '../constants';
import {
  getLocation,
  getIndustrySEO,
  getIntent,
  getGuide,
  SEO_LOCATIONS,
  SEO_GUIDES
} from '../data/seo-landing';
import ReadingProgress from '../components/UI/ReadingProgress';
import ShareButtons from '../components/UI/ShareButtons';

type Mode = 'service-location' | 'service-industry' | 'service-intent' | 'industry-location' | 'guide';

interface Props {
  mode: Mode;
}

const SITE_URL = 'https://onsective.com';

const SeoLanding: React.FC<Props> = ({ mode }) => {
  const params = useParams<{ serviceId?: string; industryId?: string; cityId?: string; intentId?: string; slug?: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('is-visible')),
      { threshold: 0.08, rootMargin: '0px 0px -80px 0px' }
    );
    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [params]);

  // ================== GUIDE MODE ==================
  if (mode === 'guide') {
    const guide = params.slug ? getGuide(params.slug) : null;
    if (!guide) return <Navigate to="/insights" replace />;
    const relatedService = SERVICES.find(s => s.id === guide.relatedService);

    const readMins = 2 + guide.sections.length * 2;
    const relatedGuides = SEO_GUIDES
      .filter(g => g.slug !== guide.slug && g.category === guide.category)
      .slice(0, 4);

    return (
      <>
        <ReadingProgress />
        <SEOHead
          title={guide.metaTitle}
          description={guide.metaDescription}
          overrides={{
            keywords: `${guide.keywords}, Onsective, Onsective Enterprise, Onsective Inc, Onsec, Insec, ${guide.category} consulting`,
            canonical: `${SITE_URL}/guides/${guide.slug}`,
            structuredData: {
              '@type': 'Article',
              '@id': `${SITE_URL}/guides/${guide.slug}/#article`,
              headline: guide.title,
              description: guide.metaDescription,
              author: { '@type': 'Organization', name: 'Onsective Enterprise', url: SITE_URL },
              publisher: { '@type': 'Organization', name: 'Onsective Enterprise', logo: { '@type': 'ImageObject', url: `${SITE_URL}/assets/logo.png` } },
              datePublished: '2026-04-18',
              dateModified: '2026-04-18',
              mainEntityOfPage: `${SITE_URL}/guides/${guide.slug}`,
              keywords: guide.keywords
            }
          }}
          breadcrumbs={[
            { name: 'Home', url: SITE_URL },
            { name: 'Guides', url: `${SITE_URL}/guides` },
            { name: guide.title, url: `${SITE_URL}/guides/${guide.slug}` }
          ]}
        />

        <section className="bg-[#0d2b45] pt-40 pb-24 relative overflow-hidden">
          <div className="absolute inset-0 perspective-grid opacity-25" />
          <div className="max-w-5xl mx-auto px-6 lg:px-16 relative z-10">
            <div className="flex items-center gap-2 text-sm text-white/40 mb-6 font-['Plus_Jakarta_Sans'] flex-wrap">
              <Link to="/" className="hover:text-[#c1912f]">Home</Link>
              <ChevronRight size={14} className="text-[#c1912f]" />
              <span className="text-white/60">Guides</span>
              <ChevronRight size={14} className="text-[#c1912f]" />
              <span className="text-[#c1912f]">{guide.category}</span>
            </div>
            <span className="text-[#c1912f] text-xs font-semibold uppercase tracking-wider mb-4 block font-['Plus_Jakarta_Sans']">
              {guide.category} · Onsective Guide
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-['Playfair_Display'] font-bold text-white leading-[0.95] mb-6">
              {guide.title}
            </h1>
            <p className="text-lg text-white/50 font-['Plus_Jakarta_Sans'] max-w-3xl leading-relaxed mb-6">
              {guide.metaDescription}
            </p>
            <div className="flex items-center gap-5 text-xs text-white/40 font-['Plus_Jakarta_Sans']">
              <span className="inline-flex items-center gap-1.5"><Clock size={12} /> {readMins} min read</span>
              <span>·</span>
              <span>Onsective Research</span>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-16">
            {guide.sections.map((section, i) => (
              <div key={i} className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0 mb-14">
                <h2 className="text-2xl md:text-3xl font-['Playfair_Display'] font-bold text-[#1a1a2e] mb-5">{section.heading}</h2>
                <p className="text-[#475569] font-['Plus_Jakarta_Sans'] leading-[1.9] text-base">{section.body}</p>
              </div>
            ))}

            {/* Share cluster */}
            <div className="mt-10 pt-8 border-t border-[#e2e8f0]">
              <ShareButtons title={guide.title} />
            </div>

            {relatedService && (
              <div className="mt-20 p-8 md:p-12 bg-[#f1f5f9] border-l-4 border-[#c1912f] rounded-lg">
                <span className="text-xs font-semibold text-[#c1912f] uppercase tracking-wider font-['Plus_Jakarta_Sans']">Onsective Practice</span>
                <h3 className="text-2xl font-['Playfair_Display'] font-bold text-[#1a1a2e] mt-2 mb-4">Engage Onsective for {relatedService.title}</h3>
                <p className="text-[#64748b] font-['Plus_Jakarta_Sans'] leading-relaxed mb-6">{relatedService.description}</p>
                <div className="flex flex-wrap gap-3">
                  <Link to={relatedService.path} className="inline-flex items-center gap-2 px-6 py-3 bg-[#c1912f] text-white font-semibold text-sm font-['Plus_Jakarta_Sans'] hover:brightness-110 rounded-md">
                    Explore {relatedService.title} <ArrowRight size={14} />
                  </Link>
                  <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 border border-[#1a1a2e]/20 text-[#1a1a2e] font-semibold text-sm font-['Plus_Jakarta_Sans'] hover:border-[#c1912f] rounded-md">
                    Schedule Consultation
                  </Link>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Related guides */}
        {relatedGuides.length > 0 && (
          <section className="py-16 bg-[#f1f5f9] border-t border-[#e2e8f0]">
            <div className="max-w-5xl mx-auto px-6 lg:px-16">
              <div className="flex items-baseline justify-between mb-8">
                <h3 className="text-2xl font-['Playfair_Display'] font-bold text-[#1a1a2e]">Continue Reading</h3>
                <Link to="/insights" className="text-xs font-semibold text-[#c1912f] uppercase tracking-wider font-['Plus_Jakarta_Sans']">
                  All articles <ArrowRight size={12} className="inline" />
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {relatedGuides.map(rg => (
                  <Link
                    key={rg.slug}
                    to={`/guides/${rg.slug}`}
                    className="group p-5 bg-white border border-[#e2e8f0] rounded-lg hover:border-[#c1912f]/40 transition-all"
                  >
                    <div className="text-xs font-semibold text-[#c1912f] uppercase tracking-wider mb-2 font-['Plus_Jakarta_Sans']">
                      {rg.category}
                    </div>
                    <h4 className="text-base font-semibold text-[#1a1a2e] group-hover:text-[#c1912f] transition-colors font-['Plus_Jakarta_Sans'] leading-snug">
                      {rg.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </>
    );
  }

  // ================== SERVICE-LOCATION MODE ==================
  if (mode === 'service-location') {
    const service = SERVICES.find(s => s.path.split('/').pop() === params.serviceId);
    const location = params.cityId ? getLocation(params.cityId) : null;
    if (!service || !location) return <Navigate to="/services" replace />;
    return renderServiceLocation(service, location);
  }

  // ================== SERVICE-INDUSTRY MODE ==================
  if (mode === 'service-industry') {
    const service = SERVICES.find(s => s.path.split('/').pop() === params.serviceId);
    const industry = params.industryId ? getIndustrySEO(params.industryId) : null;
    if (!service || !industry) return <Navigate to="/services" replace />;
    return renderServiceIndustry(service, industry);
  }

  // ================== SERVICE-INTENT MODE ==================
  if (mode === 'service-intent') {
    const service = SERVICES.find(s => s.path.split('/').pop() === params.serviceId);
    const intent = params.intentId ? getIntent(params.intentId) : null;
    if (!service || !intent) return <Navigate to="/services" replace />;
    return renderServiceIntent(service, intent);
  }

  // ================== INDUSTRY-LOCATION MODE ==================
  if (mode === 'industry-location') {
    const industry = params.industryId ? getIndustrySEO(params.industryId) : null;
    const location = params.cityId ? getLocation(params.cityId) : null;
    if (!industry || !location) return <Navigate to="/industries" replace />;
    return renderIndustryLocation(industry, location);
  }

  return <Navigate to="/" replace />;
};

// ============================================================
// Render: Service × Location
// ============================================================
const renderServiceLocation = (service: any, location: any) => {
  const title = `${serviceTitleCase(service.title)} in ${location.city} | Onsective ${location.country}`;
  const description = `Onsective delivers premium ${service.title.toLowerCase()} in ${location.city}, ${location.country}. Principal-led engagements, institutional-grade outcomes, and ${location.hub} operations. Free consultation for ${location.city} enterprises.`;
  const canonical = `${SITE_URL}/services/${service.path.split('/').pop()}/in/${location.id}`;

  return (
    <>
      <SEOHead
        title={title}
        description={description}
        overrides={{
          keywords: `${service.title} in ${location.city}, ${service.title} ${location.city}, ${service.title} ${location.country}, ${service.title} near ${location.city}, ${service.title} agency ${location.city}, ${service.title} consulting ${location.city}, ${service.title} firm ${location.city}, Onsective ${location.city}, Onsective ${location.country}, Onsective Enterprise, Onsective Inc, Onsec, Insec`,
          canonical,
          structuredData: {
            '@type': 'LocalBusiness',
            '@id': `${canonical}/#localbusiness`,
            name: `Onsective Enterprise — ${serviceTitleCase(service.title)} in ${location.city}`,
            description,
            url: canonical,
            telephone: '+1-672-673-7900',
            image: `${SITE_URL}/assets/logo.png`,
            priceRange: '$$$',
            address: {
              '@type': 'PostalAddress',
              addressLocality: location.city,
              addressRegion: location.region,
              addressCountry: location.countryCode
            },
            geo: { '@type': 'GeoCoordinates', latitude: location.lat, longitude: location.lng },
            areaServed: { '@type': 'City', name: location.city },
            provider: { '@type': 'Organization', name: 'Onsective Enterprise' }
          }
        }}
        breadcrumbs={[
          { name: 'Home', url: SITE_URL },
          { name: 'Services', url: `${SITE_URL}/services` },
          { name: service.title, url: `${SITE_URL}${service.path}` },
          { name: `${location.city}, ${location.country}`, url: canonical }
        ]}
      />
      <Hero
        eyebrow={`${location.flag} ${location.city}, ${location.country} · ${location.hub}`}
        h1={`${serviceTitleCase(service.title)} in ${location.city}`}
        subtitle={description}
        primaryCta="Schedule a Consultation"
        primaryHref="/contact"
        secondaryCta={`Explore ${serviceTitleCase(service.title)}`}
        secondaryHref={service.path}
      />

      <Section bg="white" title={`Why ${location.city} Enterprises Choose Onsective for ${serviceTitleCase(service.title)}`}
        eyebrow="Local Presence, Global Standards">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: `Principal-Led ${location.city} Delivery`, body: `Every engagement in ${location.city} is led by a senior Onsective principal — not junior contractors. Our ${location.hub} operations bring institutional-grade delivery to the ${location.country} market.` },
            { title: `${location.country} Regulatory Fluency`, body: `Our consultants operate fluently across the compliance frameworks governing ${location.country} enterprises, embedding regulatory requirements into every deliverable.` },
            { title: `Global Network, Local Execution`, body: `Onsective operates 8 global hubs — ${location.city} clients tap a worldwide delivery bench while benefiting from on-the-ground engagement discipline.` }
          ].map((c, i) => (
            <Card key={i} title={c.title} body={c.body} index={i} />
          ))}
        </div>
      </Section>

      <Section bg="dark" title={`${serviceTitleCase(service.title)} Outcomes for ${location.city} Enterprises`} eyebrow={`${location.city} Engagements`} dark>
        <p className="text-white/60 text-lg leading-relaxed font-['Plus_Jakarta_Sans'] max-w-3xl mx-auto text-center mb-12">
          {service.description}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            'Measurable P&L impact within the first 90 days of engagement',
            'Documented compliance with relevant regulatory regimes',
            `Cross-practice integration across Onsective's 10 sovereign domains`
          ].map((outcome, i) => (
            <OutcomeCard key={i} body={outcome} index={i} />
          ))}
        </div>
      </Section>

      <RelatedLinks
        title={`Explore Onsective in Other ${location.country} Markets`}
        links={SEO_LOCATIONS.filter(l => l.countryCode === location.countryCode && l.id !== location.id).slice(0, 4).map(l => ({
          label: `${serviceTitleCase(service.title)} in ${l.city}`,
          href: `/services/${service.path.split('/').pop()}/in/${l.id}`
        }))}
      />
      <Cta service={service} context={`${location.city} engagement`} />
    </>
  );
};

// ============================================================
// Render: Service × Industry
// ============================================================
const renderServiceIndustry = (service: any, industry: any) => {
  const title = `${serviceTitleCase(service.title)} for ${industry.name} | Onsective`;
  const description = `Onsective delivers ${service.title.toLowerCase()} engineered for ${industry.name.toLowerCase()} — aligned to ${industry.regulations.slice(0, 3).join(', ')} and tuned to the operational realities of ${industry.shortName.toLowerCase()}.`;
  const canonical = `${SITE_URL}/services/${service.path.split('/').pop()}/for/${industry.id}`;

  return (
    <>
      <SEOHead
        title={title}
        description={description}
        overrides={{
          keywords: `${service.title} for ${industry.name}, ${service.title} ${industry.shortName}, ${industry.shortName} ${service.title}, ${industry.name} ${service.title.toLowerCase()}, ${industry.aka.join(', ')}, ${service.title} ${industry.regulations.slice(0, 3).join(', ')}, Onsective ${industry.shortName}, Onsective Enterprise, Onsec, Insec`,
          canonical,
          structuredData: {
            '@type': 'Service',
            '@id': `${canonical}/#service`,
            name: `${serviceTitleCase(service.title)} for ${industry.name}`,
            description,
            provider: { '@type': 'Organization', name: 'Onsective Enterprise' },
            serviceType: service.title,
            areaServed: 'Worldwide',
            audience: { '@type': 'BusinessAudience', audienceType: industry.name }
          }
        }}
        breadcrumbs={[
          { name: 'Home', url: SITE_URL },
          { name: 'Services', url: `${SITE_URL}/services` },
          { name: service.title, url: `${SITE_URL}${service.path}` },
          { name: `For ${industry.shortName}`, url: canonical }
        ]}
      />
      <Hero
        eyebrow={`${industry.name} · ${service.title}`}
        h1={`${serviceTitleCase(service.title)} for ${industry.name}`}
        subtitle={description}
        primaryCta="Schedule Industry Consultation"
        primaryHref="/contact"
        secondaryCta={`Explore ${serviceTitleCase(service.title)}`}
        secondaryHref={service.path}
      />

      <Section bg="white" eyebrow="Industry-Specific Delivery" title={`How Onsective Delivers ${serviceTitleCase(service.title)} for ${industry.shortName}`}>
        <p className="text-[#64748b] text-lg leading-relaxed font-['Plus_Jakarta_Sans'] max-w-3xl mb-12">
          {service.description}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card title={`${industry.shortName} Regulatory Framework`} body={`Every engagement aligns with the regulatory regime governing ${industry.shortName.toLowerCase()}: ${industry.regulations.join(', ')}.`} index={0} />
          <Card title={`${industry.shortName} Pain-Point Focus`} body={`Our ${service.title.toLowerCase()} work for ${industry.shortName.toLowerCase()} clients targets ${industry.painPoints.slice(0, 3).join(', ')} — the operational realities of the sector.`} index={1} />
        </div>
      </Section>

      <Section bg="dark" eyebrow="Companion Practices" title={`Capabilities Onsective Deploys Alongside ${serviceTitleCase(service.title)} in ${industry.shortName}`} dark>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {industry.keyCapabilities.slice(0, 3).map((cap: string, i: number) => (
            <OutcomeCard key={i} body={cap} index={i} />
          ))}
        </div>
      </Section>

      <RelatedLinks
        title={`${industry.name} × Other Onsective Practices`}
        links={SERVICES.filter(s => s.id !== service.id).slice(0, 4).map(s => ({
          label: `${s.title} for ${industry.shortName}`,
          href: `/services/${s.path.split('/').pop()}/for/${industry.id}`
        }))}
      />
      <Cta service={service} context={`${industry.shortName} deployment`} />
    </>
  );
};

// ============================================================
// Render: Service × Intent
// ============================================================
const renderServiceIntent = (service: any, intent: any) => {
  const h1 = intent.headline(serviceTitleCase(service.title));
  const title = `${h1} | Onsective`;
  const description = intent.intro(serviceTitleCase(service.title));
  const canonical = `${SITE_URL}/services/${service.path.split('/').pop()}/intent/${intent.id}`;

  return (
    <>
      <SEOHead
        title={title}
        description={description}
        overrides={{
          keywords: `${intent.keywords(serviceTitleCase(service.title))}, Onsective ${service.title}, Onsective Enterprise, Onsective Inc, Onsec, Insec, ${service.title} Onsective`,
          canonical,
          structuredData: {
            '@type': 'WebPage',
            '@id': `${canonical}/#webpage`,
            name: h1,
            description,
            mainEntity: {
              '@type': 'Service',
              name: service.title,
              provider: { '@type': 'Organization', name: 'Onsective Enterprise' }
            }
          }
        }}
        breadcrumbs={[
          { name: 'Home', url: SITE_URL },
          { name: 'Services', url: `${SITE_URL}/services` },
          { name: service.title, url: `${SITE_URL}${service.path}` },
          { name: intent.label, url: canonical }
        ]}
      />
      <Hero
        eyebrow={`Onsective · ${service.title}`}
        h1={h1}
        subtitle={description}
        primaryCta="Request a Proposal"
        primaryHref="/contact"
        secondaryCta={`${service.title} Overview`}
        secondaryHref={service.path}
      />

      <Section bg="white" eyebrow="What to Expect" title={`Onsective's ${intent.label} Model for ${serviceTitleCase(service.title)}`}>
        <p className="text-[#64748b] text-lg leading-relaxed font-['Plus_Jakarta_Sans'] max-w-3xl mb-12">
          {service.description}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card title="Principal-Led" body={`Every ${service.title.toLowerCase()} engagement is led by a senior Onsective principal — not a junior contractor.`} index={0} />
          <Card title="Outcome-Indexed" body={`We tie our commercial model to your measurable outcomes — so our economic alignment matches yours.`} index={1} />
          <Card title="Compounding Value" body={`Onsective deliverables are engineered to compound. Every engagement leaves institutional capability in place.`} index={2} />
        </div>
      </Section>

      <RelatedLinks
        title={`Other ${serviceTitleCase(service.title)} Queries Onsective Answers`}
        links={['pricing', 'agency', 'company', 'consulting', 'firm', 'experts', 'solutions', 'services'].filter(i => i !== intent.id).slice(0, 5).map(i => ({
          label: `${serviceTitleCase(service.title)} ${i.charAt(0).toUpperCase() + i.slice(1)}`,
          href: `/services/${service.path.split('/').pop()}/intent/${i}`
        }))}
      />
      <Cta service={service} context={`${intent.label.toLowerCase()} inquiry`} />
    </>
  );
};

// ============================================================
// Render: Industry × Location
// ============================================================
const renderIndustryLocation = (industry: any, location: any) => {
  const title = `${industry.shortName} Consulting in ${location.city} | Onsective ${location.country}`;
  const description = `Onsective delivers ${industry.name.toLowerCase()} digital transformation consulting in ${location.city}, ${location.country}. Cloud, cybersecurity, AI, and software expertise tuned to ${industry.regulations.slice(0, 3).join(', ')}.`;
  const canonical = `${SITE_URL}/industries/${industry.id}/in/${location.id}`;

  return (
    <>
      <SEOHead
        title={title}
        description={description}
        overrides={{
          keywords: `${industry.shortName} consulting ${location.city}, ${industry.name} ${location.city}, ${industry.shortName} technology ${location.city}, ${industry.name} digital transformation ${location.country}, Onsective ${location.city}, Onsective ${industry.shortName}, Onsective Enterprise, Onsec, Insec`,
          canonical,
          structuredData: {
            '@type': 'LocalBusiness',
            '@id': `${canonical}/#localbusiness`,
            name: `Onsective — ${industry.shortName} Consulting in ${location.city}`,
            description,
            url: canonical,
            telephone: '+1-672-673-7900',
            address: {
              '@type': 'PostalAddress',
              addressLocality: location.city,
              addressRegion: location.region,
              addressCountry: location.countryCode
            },
            geo: { '@type': 'GeoCoordinates', latitude: location.lat, longitude: location.lng },
            areaServed: { '@type': 'City', name: location.city },
            priceRange: '$$$'
          }
        }}
        breadcrumbs={[
          { name: 'Home', url: SITE_URL },
          { name: 'Industries', url: `${SITE_URL}/industries` },
          { name: industry.name, url: `${SITE_URL}/industries/${industry.id}` },
          { name: location.city, url: canonical }
        ]}
      />
      <Hero
        eyebrow={`${location.flag} ${location.city} · ${industry.name}`}
        h1={`${industry.shortName} Consulting in ${location.city}`}
        subtitle={description}
        primaryCta="Schedule a Consultation"
        primaryHref="/contact"
        secondaryCta={`Explore ${industry.shortName}`}
        secondaryHref={`/industries/${industry.id}`}
      />

      <Section bg="white" eyebrow={`${industry.name} × ${location.city}`} title={`How Onsective Serves ${industry.shortName} in ${location.city}`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {industry.keyCapabilities.slice(0, 3).map((cap: string, i: number) => (
            <Card
              key={i}
              title={`${cap} for ${industry.shortName}`}
              body={`Onsective deploys ${cap.toLowerCase()} expertise for ${industry.shortName.toLowerCase()} institutions in ${location.city}, delivering ${location.hub} standards with local engagement discipline.`}
              index={i}
            />
          ))}
        </div>
      </Section>

      <RelatedLinks
        title={`${industry.name} Pain Points Onsective Solves`}
        links={industry.painPoints.slice(0, 5).map((pp: string) => ({
          label: `${pp.charAt(0).toUpperCase() + pp.slice(1)} in ${location.city}`,
          href: `/industries/${industry.id}`
        }))}
      />
      <Cta />
    </>
  );
};

// ============================================================
// Shared layout primitives
// ============================================================
const Hero: React.FC<{ eyebrow: string; h1: string; subtitle: string; primaryCta: string; primaryHref: string; secondaryCta: string; secondaryHref: string }> = ({ eyebrow, h1, subtitle, primaryCta, primaryHref, secondaryCta, secondaryHref }) => (
  <section className="bg-[#0d2b45] pt-40 pb-28 relative overflow-hidden">
    <div className="absolute inset-0 perspective-grid opacity-25" />
    <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
      <span className="text-[#c1912f] text-xs font-semibold uppercase tracking-wider mb-6 block font-['Plus_Jakarta_Sans']">{eyebrow}</span>
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-['Playfair_Display'] font-bold text-white leading-[0.95] mb-8 max-w-5xl">{h1}</h1>
      <p className="text-lg md:text-xl text-white/55 font-['Plus_Jakarta_Sans'] leading-relaxed max-w-3xl mb-10">{subtitle}</p>
      <div className="flex flex-wrap gap-3">
        <Link to={primaryHref} className="inline-flex items-center gap-2 px-8 py-4 bg-[#c1912f] text-white font-semibold text-sm font-['Plus_Jakarta_Sans'] hover:brightness-110 rounded-md">
          {primaryCta} <ArrowRight size={16} />
        </Link>
        <Link to={secondaryHref} className="inline-flex items-center gap-2 px-8 py-4 border border-white/10 text-white/70 font-semibold text-sm font-['Plus_Jakarta_Sans'] hover:border-white/30 hover:text-white rounded-md">
          {secondaryCta}
        </Link>
      </div>
    </div>
  </section>
);

const Section: React.FC<{ bg: string; title: string; eyebrow: string; dark?: boolean; children: React.ReactNode }> = ({ bg, title, eyebrow, dark, children }) => (
  <section className={`py-24 md:py-32 ${bg === 'dark' ? 'bg-[#0d2b45]' : bg === 'light' ? 'bg-[#f1f5f9]' : 'bg-white'} relative overflow-hidden`}>
    {dark && <div className="absolute inset-0 perspective-grid opacity-15" />}
    <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
      <div className="mb-14 text-center animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0">
        <span className={`text-[#c1912f] text-xs font-semibold uppercase tracking-wider mb-4 block font-['Plus_Jakarta_Sans']`}>{eyebrow}</span>
        <h2 className={`text-3xl md:text-4xl font-['Playfair_Display'] font-bold ${dark ? 'text-white' : 'text-[#1a1a2e]'}`}>{title}</h2>
      </div>
      {children}
    </div>
  </section>
);

const Card: React.FC<{ title: string; body: string; index: number }> = ({ title, body, index }) => (
  <div
    className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0 bg-white border border-[#e2e8f0] p-8 rounded-lg hover:border-[#c1912f]/30 transition-all"
    style={{ transitionDelay: `${index * 120}ms` }}
  >
    <div className="w-10 h-10 rounded-lg bg-[#c1912f]/10 flex items-center justify-center mb-5">
      <Sparkles size={18} className="text-[#c1912f]" />
    </div>
    <h3 className="text-lg font-['Playfair_Display'] font-bold text-[#1a1a2e] mb-3">{title}</h3>
    <p className="text-[#64748b] text-sm leading-relaxed font-['Plus_Jakarta_Sans']">{body}</p>
  </div>
);

const OutcomeCard: React.FC<{ body: string; index: number }> = ({ body, index }) => (
  <div
    className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0 bg-white/5 border border-white/10 p-8 rounded-lg text-white/70"
    style={{ transitionDelay: `${index * 120}ms` }}
  >
    <CheckCircle2 size={20} className="text-[#c1912f] mb-4" />
    <p className="text-sm leading-relaxed font-['Plus_Jakarta_Sans']">{body}</p>
  </div>
);

const RelatedLinks: React.FC<{ title: string; links: { label: string; href: string }[] }> = ({ title, links }) => (
  <section className="py-20 bg-[#f1f5f9] border-t border-[#e2e8f0]">
    <div className="max-w-7xl mx-auto px-6 lg:px-16">
      <h3 className="text-xl font-['Playfair_Display'] font-bold text-[#1a1a2e] mb-8">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {links.map((l, i) => (
          <Link
            key={i}
            to={l.href}
            className="p-5 bg-white border border-[#e2e8f0] rounded-lg hover:border-[#c1912f]/30 flex justify-between items-center group transition-all"
          >
            <span className="text-sm font-semibold text-[#1a1a2e] group-hover:text-[#c1912f] font-['Plus_Jakarta_Sans']">{l.label}</span>
            <ArrowRight size={16} className="text-[#c1912f]" />
          </Link>
        ))}
      </div>
    </div>
  </section>
);

const Cta: React.FC<{ service?: any; context?: string }> = ({ service, context }) => (
  <section className="py-24 md:py-32 bg-[#c1912f] relative overflow-hidden">
    <div className="max-w-5xl mx-auto px-6 lg:px-16 text-center">
      <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold text-white mb-6">Engage Onsective Today</h2>
      <p className="text-white/80 font-['Plus_Jakarta_Sans'] text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
        {service && context
          ? `Connect with Onsective principals for a ${context} covering ${service.title.toLowerCase()} scope, timeline, and commercial structure.`
          : 'Connect with Onsective principals to discuss your institutional objectives and how our ten sovereign practice domains can accelerate them.'}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-[#1a1a2e] font-semibold text-sm font-['Plus_Jakarta_Sans'] rounded-md hover:bg-[#f1f5f9]">
          Schedule Consultation <ArrowRight size={16} />
        </Link>
        <a href="tel:+16726737900" className="inline-flex items-center justify-center gap-2 px-10 py-4 border border-white/40 text-white font-semibold text-sm font-['Plus_Jakarta_Sans'] rounded-md hover:bg-white/10">
          <Phone size={16} /> +1-672-673-7900
        </a>
      </div>
    </div>
  </section>
);

const serviceTitleCase = (t: string) =>
  t.toLowerCase().split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

export default SeoLanding;
