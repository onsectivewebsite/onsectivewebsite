import React, { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Sparkles } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';
import { SEO_GUIDES } from '../data/seo-landing';

const SITE_URL = 'https://onsective.com';

// Curated featured guides — the AI-SEO targeted set we commit to keeping
// as the index's primary entry points. Order matters.
const FEATURED_SLUGS = [
  'digital-marketing-agency-toronto-law-firms',
  'immigration-law-firm-marketing-toronto',
  'saas-development-company-toronto',
  'custom-legal-software-development-toronto',
  'cloud-hosting-canadian-law-firms'
];

// Category display order + human labels. Any guide in SEO_GUIDES whose
// category is not in this map falls back to the "More" bucket.
const CATEGORY_ORDER: { key: string; label: string; blurb: string }[] = [
  { key: 'Cloud',         label: 'Cloud & Infrastructure', blurb: 'Migration, FinOps, Kubernetes, DevSecOps, and modernisation.' },
  { key: 'AI',            label: 'AI & Automation',        blurb: 'Generative AI, RAG, MLOps, governance, and enterprise agents.' },
  { key: 'Cybersecurity', label: 'Cybersecurity',          blurb: 'Zero trust, incident response, compliance, and threat intelligence.' },
  { key: 'Software',      label: 'Custom Software',        blurb: 'SaaS architecture, legal tech, and enterprise platform engineering.' },
  { key: 'SEO',           label: 'SEO & Technical Search', blurb: 'Technical SEO, programmatic SEO, migrations, and Core Web Vitals.' },
  { key: 'Marketing',     label: 'Digital Marketing',      blurb: 'Paid media, attribution, content strategy, and lifecycle.' },
  { key: 'Brand',         label: 'Brand & Reputation',     blurb: 'Brand strategy, visual identity, employer branding, and crisis comms.' }
];

const PER_CATEGORY_LIMIT = 12;

const Guides: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('is-visible')),
      { threshold: 0.08, rootMargin: '0px 0px -80px 0px' }
    );
    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const featuredGuides = useMemo(
    () => FEATURED_SLUGS.map(slug => SEO_GUIDES.find(g => g.slug === slug)).filter(Boolean) as typeof SEO_GUIDES,
    []
  );

  const groupedGuides = useMemo(() => {
    const byCategory: Record<string, typeof SEO_GUIDES> = {};
    for (const g of SEO_GUIDES) {
      if (FEATURED_SLUGS.includes(g.slug)) continue; // featured handled separately
      (byCategory[g.category] = byCategory[g.category] || ([] as any)).push(g);
    }
    return byCategory;
  }, []);

  const totalGuides = SEO_GUIDES.length;

  return (
    <>
      <SEOHead
        title="Onsective Guides — Enterprise Technology, Cloud, AI, SEO & Marketing"
        description="100+ practitioner-grade enterprise guides from Onsective — cloud, AI, cybersecurity, custom software, SEO, marketing, and brand, with Toronto and Canadian focus."
        overrides={{
          keywords: 'Onsective guides, enterprise technology guides, cloud guides, AI guides, cybersecurity guides, custom software guides, SEO guides, digital marketing guides, Toronto consulting guides, Canadian enterprise guides, Onsective Enterprise, Onsec, Insec',
          canonical: `${SITE_URL}/guides`,
          structuredData: {
            '@type': 'CollectionPage',
            '@id': `${SITE_URL}/guides/#collection`,
            name: 'Onsective Enterprise Guides',
            description: 'Practitioner-grade enterprise guides from Onsective covering cloud, AI, cybersecurity, software, SEO, marketing, and brand.',
            url: `${SITE_URL}/guides`,
            publisher: { '@type': 'Organization', name: 'Onsective Enterprise' },
            mainEntity: {
              '@type': 'ItemList',
              numberOfItems: featuredGuides.length,
              itemListElement: featuredGuides.map((g, i) => ({
                '@type': 'ListItem',
                position: i + 1,
                url: `${SITE_URL}/guides/${g.slug}`,
                name: g.title
              }))
            }
          }
        }}
        breadcrumbs={[
          { name: 'Home', url: SITE_URL },
          { name: 'Guides', url: `${SITE_URL}/guides` }
        ]}
      />

      {/* Hero */}
      <section className="bg-[#0d2b45] pt-40 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 perspective-grid opacity-25" />
        <div className="max-w-6xl mx-auto px-6 lg:px-16 relative z-10">
          <span className="text-[#c1912f] text-xs font-semibold uppercase tracking-wider mb-6 block font-['Plus_Jakarta_Sans']">
            Onsective Knowledge · {totalGuides.toLocaleString()} Guides
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-['Playfair_Display'] font-bold text-white leading-[0.95] mb-8 max-w-4xl">
            Enterprise Technology Guides
          </h1>
          <p className="text-lg md:text-xl text-white/55 font-['Plus_Jakarta_Sans'] leading-relaxed max-w-3xl mb-8">
            Practitioner-grade guides authored by Onsective principals — cloud, AI, cybersecurity, custom software, SEO, marketing, and brand. Built for enterprise leaders who need answers, not marketing copy.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#c1912f] text-white font-semibold text-sm font-['Plus_Jakarta_Sans'] hover:brightness-110 rounded-md">
              Schedule Consultation <ArrowRight size={16} />
            </Link>
            <Link to="/services" className="inline-flex items-center gap-2 px-8 py-4 border border-white/10 text-white/70 font-semibold text-sm font-['Plus_Jakarta_Sans'] hover:border-white/30 hover:text-white rounded-md">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Featured — AI-SEO targeted set */}
      {featuredGuides.length > 0 && (
        <section className="py-20 bg-white border-b border-[#e2e8f0]">
          <div className="max-w-7xl mx-auto px-6 lg:px-16">
            <div className="mb-12">
              <span className="text-[#c1912f] text-xs font-semibold uppercase tracking-wider mb-3 block font-['Plus_Jakarta_Sans']">
                <Sparkles size={12} className="inline mr-1.5 -mt-0.5" />Featured · Toronto & Canadian Focus
              </span>
              <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-[#1a1a2e] max-w-3xl">
                Guides Our Clients Ask For Most
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {featuredGuides.map((g, i) => (
                <Link
                  key={g.slug}
                  to={`/guides/${g.slug}`}
                  className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0 group p-6 border border-[#e2e8f0] rounded-lg hover:border-[#c1912f]/40 hover:shadow-md bg-white flex flex-col"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="text-xs font-semibold text-[#c1912f] uppercase tracking-wider mb-3 font-['Plus_Jakarta_Sans']">
                    {g.category}
                  </div>
                  <h3 className="text-lg font-['Playfair_Display'] font-bold text-[#1a1a2e] group-hover:text-[#c1912f] transition-colors leading-snug mb-3">
                    {g.title}
                  </h3>
                  <p className="text-sm text-[#64748b] font-['Plus_Jakarta_Sans'] leading-relaxed flex-1">
                    {g.metaDescription}
                  </p>
                  <div className="mt-4 text-xs font-semibold text-[#c1912f] uppercase tracking-wider font-['Plus_Jakarta_Sans'] inline-flex items-center gap-1.5">
                    Read guide <ArrowRight size={12} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Category sections */}
      {CATEGORY_ORDER.map(cat => {
        const list = (groupedGuides[cat.key] || []).slice(0, PER_CATEGORY_LIMIT);
        if (list.length === 0) return null;
        const totalInCategory = (groupedGuides[cat.key] || []).length;
        return (
          <section key={cat.key} className="py-20 bg-[#f8fafc] border-b border-[#e2e8f0]">
            <div className="max-w-7xl mx-auto px-6 lg:px-16">
              <div className="flex flex-wrap items-end justify-between mb-10 gap-4">
                <div>
                  <span className="text-[#c1912f] text-xs font-semibold uppercase tracking-wider mb-3 block font-['Plus_Jakarta_Sans']">
                    <BookOpen size={12} className="inline mr-1.5 -mt-0.5" />{cat.label}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-[#1a1a2e] mb-3">
                    {cat.label} Guides
                  </h2>
                  <p className="text-[#64748b] font-['Plus_Jakarta_Sans'] max-w-2xl leading-relaxed">
                    {cat.blurb}
                  </p>
                </div>
                <span className="text-xs text-[#94a3b8] font-['Plus_Jakarta_Sans']">
                  {list.length} of {totalInCategory} shown
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {list.map(g => (
                  <Link
                    key={g.slug}
                    to={`/guides/${g.slug}`}
                    className="group p-5 bg-white border border-[#e2e8f0] rounded-lg hover:border-[#c1912f]/40 hover:shadow-sm transition-all flex flex-col"
                  >
                    <h3 className="text-base font-semibold text-[#1a1a2e] group-hover:text-[#c1912f] transition-colors font-['Plus_Jakarta_Sans'] leading-snug">
                      {g.title}
                    </h3>
                    <p className="text-xs text-[#64748b] font-['Plus_Jakarta_Sans'] leading-relaxed mt-2 line-clamp-2">
                      {g.metaDescription}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="py-24 md:py-32 bg-[#c1912f] relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 lg:px-16 text-center">
          <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold text-white mb-6">
            Need More Than a Guide?
          </h2>
          <p className="text-white/80 font-['Plus_Jakarta_Sans'] text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Onsective principals deliver enterprise-grade engagements across cloud, cybersecurity, AI, custom software, SEO, and marketing. Principal-led. Outcome-indexed. Institutional-grade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-[#1a1a2e] font-semibold text-sm font-['Plus_Jakarta_Sans'] rounded-md hover:bg-[#f1f5f9]">
              Schedule Consultation <ArrowRight size={16} />
            </Link>
            <Link to="/services" className="inline-flex items-center justify-center gap-2 px-10 py-4 border border-white/40 text-white font-semibold text-sm font-['Plus_Jakarta_Sans'] rounded-md hover:bg-white/10">
              Explore All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Guides;
