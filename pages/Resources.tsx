import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, FileText, BarChart3, Zap, BookOpen, Share2, Link2 } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';

const SITE_URL = 'https://onsective.com';

const Resources: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('is-visible')),
      { threshold: 0.08, rootMargin: '0px 0px -80px 0px' }
    );
    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const toolkits = [
    { icon: FileText, title: 'Digital Marketing Strategy Canvas', body: 'A 12-box canvas to codify audience, offer, channels, and measurement. Used by 120+ CMOs to structure annual planning.' },
    { icon: BarChart3, title: 'Marketing Mix Modelling Starter Kit', body: 'Templates, data-preparation checklists, and validation frameworks for building your first MMM — without the consulting invoice.' },
    { icon: Zap, title: 'Incrementality Testing Playbook', body: 'Geo-lift, holdout, and conversion-lift experiment designs — with statistical significance calculators and reporting templates.' },
    { icon: BookOpen, title: 'Enterprise SEO Audit Checklist', body: 'The 180-point audit Onsective runs for Fortune 500 clients — technical, content, competitive, and measurement coverage.' },
    { icon: Share2, title: 'Social Media Crisis Response Playbook', body: 'Pre-approved response frameworks, spokesperson protocols, and 15-minute activation SLAs for reputational events.' },
    { icon: FileText, title: 'AI Use-Case Prioritisation Matrix', body: 'ROI × feasibility × data readiness × change impact scoring for institutional AI portfolios.' }
  ];

  const featured = [
    'Forbes Technology Council',
    'Harvard Business Review',
    'MIT Technology Review',
    'Wall Street Journal',
    'Financial Times',
    'The Globe and Mail',
    'Gartner',
    'Forrester Research',
    'McKinsey Quarterly',
    'Bloomberg Businessweek'
  ];

  const partners = [
    { name: 'AWS', role: 'Cloud Services Partner' },
    { name: 'Microsoft Azure', role: 'Cloud Services Partner' },
    { name: 'Google Cloud', role: 'Cloud Services Partner' },
    { name: 'HubSpot', role: 'Marketing Automation Partner' },
    { name: 'Salesforce', role: 'CRM Partner' },
    { name: 'Adobe', role: 'Digital Experience Partner' },
    { name: 'Snowflake', role: 'Data Platform Partner' },
    { name: 'Cloudflare', role: 'Edge & Security Partner' }
  ];

  return (
    <>
      <SEOHead
        title="Onsective Resources — Toolkits, Research, and Industry References"
        description="Free toolkits, research, and reference materials from Onsective Enterprise — digital marketing frameworks, SEO audits, AI playbooks, and incrementality testing templates."
        overrides={{
          keywords: 'Onsective resources, Onsective toolkit, Onsective research, digital marketing toolkit, SEO audit checklist, AI playbook, marketing mix modelling, incrementality testing, Onsective Enterprise, Onsec, Insec',
          canonical: `${SITE_URL}/resources`,
          structuredData: {
            '@type': 'CollectionPage',
            '@id': `${SITE_URL}/resources/#collection`,
            name: 'Onsective Resources',
            description: 'Toolkits, research, and references from Onsective Enterprise consulting practice.',
            url: `${SITE_URL}/resources`,
            publisher: { '@type': 'Organization', name: 'Onsective Enterprise' }
          }
        }}
        breadcrumbs={[
          { name: 'Home', url: SITE_URL },
          { name: 'Resources', url: `${SITE_URL}/resources` }
        ]}
      />

      {/* ===== HERO ===== */}
      <section className="bg-[#0d2b45] pt-40 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 perspective-grid opacity-25" />
        <div className="max-w-5xl mx-auto px-6 lg:px-16 relative z-10">
          <span className="text-[#c1912f] text-xs font-semibold uppercase tracking-[0.25em] mb-6 block font-['Plus_Jakarta_Sans']">Onsective · Resources</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-['Playfair_Display'] font-bold text-white leading-[0.95] mb-8">
            Toolkits, Research, and References.
          </h1>
          <p className="text-lg md:text-xl text-white/55 font-['Plus_Jakarta_Sans'] leading-relaxed max-w-3xl">
            Institutional-grade frameworks that power our engagements — made available to the community. Use, share, adapt.
          </p>
        </div>
      </section>

      {/* ===== TOOLKITS ===== */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <span className="text-[#c1912f] text-xs font-semibold uppercase tracking-wider mb-3 block font-['Plus_Jakarta_Sans']">Practitioner Toolkits</span>
            <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] text-[#1a1a2e] font-bold mb-3">
              Frameworks From Our Practice
            </h2>
            <p className="text-[#64748b] text-lg max-w-2xl mx-auto font-['Plus_Jakarta_Sans']">
              The same tools Onsective principals use on institutional engagements. Request your copy.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {toolkits.map((t, i) => (
              <div
                key={i}
                className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0 p-8 bg-[#f1f5f9] border border-[#e2e8f0] rounded-lg hover:bg-white hover:border-[#c1912f]/30 transition-all"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-[#c1912f]/10 flex items-center justify-center mb-5">
                  <t.icon size={22} className="text-[#c1912f]" />
                </div>
                <h3 className="text-lg font-['Playfair_Display'] font-bold text-[#1a1a2e] mb-3">{t.title}</h3>
                <p className="text-[#64748b] text-sm leading-relaxed font-['Plus_Jakarta_Sans'] mb-5">{t.body}</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#c1912f] font-['Plus_Jakarta_Sans']"
                >
                  <Download size={14} /> Request Copy
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED IN ===== */}
      <section className="py-24 bg-[#0d2b45] border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 perspective-grid opacity-15" />
        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
          <div className="text-center mb-12">
            <span className="text-[#c1912f] text-xs font-semibold uppercase tracking-wider mb-3 block font-['Plus_Jakarta_Sans']">Press & Recognition</span>
            <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] text-white font-bold mb-3">
              Featured In
            </h2>
            <p className="text-white/50 text-base max-w-2xl mx-auto font-['Plus_Jakarta_Sans']">
              Onsective principals regularly contribute to and are cited by institutional publications and research firms.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {featured.map((name, i) => (
              <div
                key={i}
                className="p-6 bg-white/5 border border-white/10 rounded-lg text-center hover:bg-white/10 transition-all"
              >
                <span className="text-sm font-['Playfair_Display'] font-bold text-white/80">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TECHNOLOGY PARTNERS ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-12">
            <span className="text-[#c1912f] text-xs font-semibold uppercase tracking-wider mb-3 block font-['Plus_Jakarta_Sans']">Technology Alliances</span>
            <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] text-[#1a1a2e] font-bold mb-3">
              Our Partner Network
            </h2>
            <p className="text-[#64748b] text-base max-w-2xl mx-auto font-['Plus_Jakarta_Sans']">
              Onsective operates sovereign alliances across the institutional technology landscape.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {partners.map((p, i) => (
              <div
                key={i}
                className="p-6 bg-[#f1f5f9] border border-[#e2e8f0] rounded-lg text-center"
              >
                <div className="text-base font-['Playfair_Display'] font-bold text-[#1a1a2e] mb-1">{p.name}</div>
                <div className="text-xs text-[#c1912f] uppercase tracking-wider font-['Plus_Jakarta_Sans']">{p.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LINK-BACK / CITATION SECTION ===== */}
      <section className="py-24 bg-[#f1f5f9] border-t border-[#e2e8f0]">
        <div className="max-w-4xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-12">
            <span className="text-[#c1912f] text-xs font-semibold uppercase tracking-wider mb-3 block font-['Plus_Jakarta_Sans']">For Journalists & Researchers</span>
            <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] text-[#1a1a2e] font-bold mb-3">
              Cite Onsective
            </h2>
            <p className="text-[#64748b] text-base max-w-2xl mx-auto font-['Plus_Jakarta_Sans']">
              Using Onsective research or commentary? Here is how to cite us.
            </p>
          </div>
          <div className="bg-white border border-[#e2e8f0] rounded-lg p-8 mb-6">
            <div className="flex items-start gap-3 mb-3">
              <Link2 size={18} className="text-[#c1912f] mt-1 shrink-0" />
              <div>
                <div className="text-xs font-semibold text-[#c1912f] uppercase tracking-wider mb-1 font-['Plus_Jakarta_Sans']">Organisation Citation</div>
                <p className="text-sm text-[#1a1a2e] font-['Plus_Jakarta_Sans'] leading-relaxed">
                  Onsective Inc. (2026). <em>[Report/Framework/Insight Title]</em>. Retrieved from https://onsective.com
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white border border-[#e2e8f0] rounded-lg p-8 mb-6">
            <div className="flex items-start gap-3 mb-3">
              <Link2 size={18} className="text-[#c1912f] mt-1 shrink-0" />
              <div>
                <div className="text-xs font-semibold text-[#c1912f] uppercase tracking-wider mb-1 font-['Plus_Jakarta_Sans']">Expert Interview</div>
                <p className="text-sm text-[#1a1a2e] font-['Plus_Jakarta_Sans'] leading-relaxed mb-2">
                  Request expert commentary by emailing <a href="mailto:press@onsective.com" className="text-[#c1912f]">press@onsective.com</a>. Our principals are available for interviews on IT strategy, cloud, cybersecurity, AI, digital marketing, SEO, and brand management.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white border border-[#e2e8f0] rounded-lg p-8">
            <div className="flex items-start gap-3">
              <Link2 size={18} className="text-[#c1912f] mt-1 shrink-0" />
              <div>
                <div className="text-xs font-semibold text-[#c1912f] uppercase tracking-wider mb-1 font-['Plus_Jakarta_Sans']">Linking to Us</div>
                <p className="text-sm text-[#1a1a2e] font-['Plus_Jakarta_Sans'] leading-relaxed">
                  When linking back to Onsective, preferred anchor text: <strong>"Onsective"</strong>, <strong>"Onsective Enterprise"</strong>, or <strong>"Onsective Inc."</strong> — all verified entity aliases that reinforce brand search.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-24 bg-[#c1912f]">
        <div className="max-w-5xl mx-auto px-6 lg:px-16 text-center">
          <h2 className="text-3xl md:text-5xl font-['Playfair_Display'] font-bold text-white mb-6">
            Need a Custom Framework?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto font-['Plus_Jakarta_Sans']">
            Onsective principals build bespoke frameworks for institutional clients. Request a conversation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-[#1a1a2e] font-semibold text-sm rounded-md font-['Plus_Jakarta_Sans']"
          >
            Contact Onsective <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Resources;
