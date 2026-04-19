import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';
import { SERVICES, GLOBAL_OFFICES } from '../constants';

const SITE_URL = 'https://onsective.com';

const Onsective: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('is-visible')),
      { threshold: 0.08, rootMargin: '0px 0px -80px 0px' }
    );
    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <SEOHead
        title="Onsective — Global Digital Transformation Consulting Institution"
        description="Onsective (Onsective Enterprise Inc.) is a global technology consulting institution headquartered in Toronto, Canada. Serving 120+ enterprises across 7+ nations in digital transformation, cloud, cybersecurity, AI, enterprise SEO, digital marketing, and brand management."
        overrides={{
          keywords: 'Onsective, Onsective Enterprise, Onsective Enterprise Inc, Onsective Inc, Onsective Consulting, Onsective Software, Onsective Technologies, Onsective Digital, Onsective Global, Onsective Toronto, Onsective Canada, Onsec, Onsec Enterprise, Insec, Insective, onsective.com, what is Onsective, who is Onsective, Onsective company, Onsective services, Onsective reviews, Onsective careers, Onsective contact, OnsecBoard, OnsecEmployee',
          canonical: `${SITE_URL}/onsective`,
          structuredData: {
            '@type': 'Organization',
            '@id': `${SITE_URL}/#organization-entity`,
            name: 'Onsective Enterprise',
            legalName: 'Onsective Enterprise Inc.',
            alternateName: [
              'Onsective', 'Onsective Enterprise Inc.', 'Onsective Inc', 'Onsective Consulting',
              'Onsective Software', 'Onsective Technologies', 'Onsective Digital', 'Onsective Global',
              'Onsec', 'Onsec Enterprise', 'Insec', 'Insective'
            ],
            url: SITE_URL,
            logo: `${SITE_URL}/assets/logo.png`,
            email: 'contact@onsective.com',
            telephone: '+1-672-673-7900',
            foundingDate: '2026',
            foundingLocation: { '@type': 'Place', name: 'Toronto, Ontario, Canada' },
            address: {
              '@type': 'PostalAddress',
              streetAddress: '1111 Albion Rd',
              addressLocality: 'Etobicoke',
              addressRegion: 'ON',
              postalCode: 'M9V 1A6',
              addressCountry: 'CA'
            },
            sameAs: [
              'https://share.google/1FEaabgX3DE0px7L3',
              'https://www.linkedin.com/company/onsective',
              'https://www.instagram.com/onsective',
              'https://twitter.com/OnsectiveEnt',
              'https://www.facebook.com/onsective',
              'https://www.youtube.com/@onsective',
              'https://github.com/onsectivewebsite'
            ],
            hasMap: 'https://share.google/1FEaabgX3DE0px7L3',
            description: 'Onsective Enterprise Inc. is a global technology consulting institution specialising in digital transformation, cloud migration, cybersecurity, AI automation, enterprise SEO, digital marketing, and brand management.'
          }
        }}
        breadcrumbs={[
          { name: 'Home', url: SITE_URL },
          { name: 'Onsective', url: `${SITE_URL}/onsective` }
        ]}
      />

      {/* ===== HERO ===== */}
      <section className="bg-[#0d2b45] pt-40 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 perspective-grid opacity-25" />
        <div className="max-w-6xl mx-auto px-6 lg:px-16 relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <img src="/assets/logo.png" alt="Onsective logo" className="h-14 w-auto" />
            <div>
              <span className="text-[#c1912f] text-xs font-semibold uppercase tracking-[0.25em] font-['Plus_Jakarta_Sans']">
                Onsective Enterprise Inc.
              </span>
              <div className="text-white/50 text-sm font-['Plus_Jakarta_Sans']">Global Digital Transformation Institution</div>
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-['Playfair_Display'] font-bold text-white leading-[0.95] mb-8">
            Onsective.
          </h1>
          <p className="text-lg md:text-xl text-white/60 font-['Plus_Jakarta_Sans'] leading-relaxed max-w-3xl mb-10">
            <strong>Onsective</strong> — also known as <strong>Onsective Enterprise</strong>, <strong>Onsective Inc.</strong>, or <strong>Onsective Consulting</strong> — is a global technology consulting institution headquartered in Toronto, Canada. We serve 120+ enterprise clients across 7+ sovereign markets through ten integrated practice domains.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/services" className="inline-flex items-center gap-2 px-8 py-4 bg-[#c1912f] text-white font-semibold text-sm rounded-md font-['Plus_Jakarta_Sans'] hover:brightness-110">
              Explore Services <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 border border-white/10 text-white/70 font-semibold text-sm rounded-md font-['Plus_Jakarta_Sans'] hover:border-white/30 hover:text-white">
              Contact Onsective
            </Link>
          </div>
        </div>
      </section>

      {/* ===== AT A GLANCE (entity facts panel) ===== */}
      <section className="py-20 bg-[#f1f5f9] border-b border-[#e2e8f0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-[#e2e8f0] rounded-lg p-8">
              <span className="text-[#c1912f] text-xs font-semibold uppercase tracking-wider mb-4 block font-['Plus_Jakarta_Sans']">Onsective at a Glance</span>
              <h2 className="text-3xl font-['Playfair_Display'] font-bold text-[#1a1a2e] mb-6">Institutional Facts</h2>
              <dl className="space-y-4">
                <div className="flex gap-3">
                  <dt className="w-36 shrink-0 text-sm font-semibold text-[#64748b] font-['Plus_Jakarta_Sans']">Legal Name</dt>
                  <dd className="text-sm text-[#1a1a2e] font-['Plus_Jakarta_Sans']">Onsective Enterprise Inc.</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-36 shrink-0 text-sm font-semibold text-[#64748b] font-['Plus_Jakarta_Sans']">Also Known As</dt>
                  <dd className="text-sm text-[#1a1a2e] font-['Plus_Jakarta_Sans']">Onsective · Onsective Enterprise · Onsective Consulting · Onsective Software · Onsec · Insec</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-36 shrink-0 text-sm font-semibold text-[#64748b] font-['Plus_Jakarta_Sans']">Founded</dt>
                  <dd className="text-sm text-[#1a1a2e] font-['Plus_Jakarta_Sans']">2026</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-36 shrink-0 text-sm font-semibold text-[#64748b] font-['Plus_Jakarta_Sans']">Headquarters</dt>
                  <dd className="text-sm text-[#1a1a2e] font-['Plus_Jakarta_Sans']">1111 Albion Rd, Etobicoke, Ontario M9V 1A6, Canada</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-36 shrink-0 text-sm font-semibold text-[#64748b] font-['Plus_Jakarta_Sans']">Industry</dt>
                  <dd className="text-sm text-[#1a1a2e] font-['Plus_Jakarta_Sans']">Technology Consulting · Digital Transformation</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-36 shrink-0 text-sm font-semibold text-[#64748b] font-['Plus_Jakarta_Sans']">Website</dt>
                  <dd className="text-sm text-[#1a1a2e] font-['Plus_Jakarta_Sans']"><a href="https://onsective.com" className="text-[#c1912f]">https://onsective.com</a></dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-36 shrink-0 text-sm font-semibold text-[#64748b] font-['Plus_Jakarta_Sans']">Phone</dt>
                  <dd className="text-sm text-[#1a1a2e] font-['Plus_Jakarta_Sans']"><a href="tel:+16726737900" className="text-[#c1912f]">+1-672-673-7900</a></dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-36 shrink-0 text-sm font-semibold text-[#64748b] font-['Plus_Jakarta_Sans']">Email</dt>
                  <dd className="text-sm text-[#1a1a2e] font-['Plus_Jakarta_Sans']"><a href="mailto:contact@onsective.com" className="text-[#c1912f]">contact@onsective.com</a></dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-36 shrink-0 text-sm font-semibold text-[#64748b] font-['Plus_Jakarta_Sans']">Enterprise Clients</dt>
                  <dd className="text-sm text-[#1a1a2e] font-['Plus_Jakarta_Sans']">120+</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-36 shrink-0 text-sm font-semibold text-[#64748b] font-['Plus_Jakarta_Sans']">Global Markets</dt>
                  <dd className="text-sm text-[#1a1a2e] font-['Plus_Jakarta_Sans']">7+ Nations (Canada, USA, UK, UAE, India, Singapore, Australia, Germany)</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-36 shrink-0 text-sm font-semibold text-[#64748b] font-['Plus_Jakarta_Sans']">Projects Delivered</dt>
                  <dd className="text-sm text-[#1a1a2e] font-['Plus_Jakarta_Sans']">500+</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-36 shrink-0 text-sm font-semibold text-[#64748b] font-['Plus_Jakarta_Sans']">Platform Uptime</dt>
                  <dd className="text-sm text-[#1a1a2e] font-['Plus_Jakarta_Sans']">99.9%</dd>
                </div>
              </dl>
            </div>

            <div className="bg-[#0d2b45] text-white rounded-lg p-8">
              <span className="text-[#c1912f] text-xs font-semibold uppercase tracking-wider mb-4 block font-['Plus_Jakarta_Sans']">Connect With Onsective</span>
              <h2 className="text-3xl font-['Playfair_Display'] font-bold mb-6">Official Channels</h2>
              <div className="space-y-3">
                {[
                  { label: 'Google Business Profile', url: 'https://share.google/1FEaabgX3DE0px7L3' },
                  { label: 'LinkedIn', url: 'https://www.linkedin.com/company/onsective' },
                  { label: 'Instagram', url: 'https://www.instagram.com/onsective' },
                  { label: 'X (Twitter)', url: 'https://twitter.com/OnsectiveEnt' },
                  { label: 'Facebook', url: 'https://www.facebook.com/onsective' },
                  { label: 'YouTube', url: 'https://www.youtube.com/@onsective' },
                  { label: 'GitHub', url: 'https://github.com/onsectivewebsite' }
                ].map(c => (
                  <a key={c.label} href={c.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all">
                    <span className="text-sm font-semibold text-white font-['Plus_Jakarta_Sans']">{c.label}</span>
                    <ArrowRight size={14} className="text-[#c1912f]" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT ONSECTIVE DOES ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-14">
            <span className="text-[#c1912f] text-xs font-semibold uppercase tracking-wider mb-3 block font-['Plus_Jakarta_Sans']">Practice Domains</span>
            <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] text-[#1a1a2e] font-bold mb-3">What Onsective Does</h2>
            <p className="text-[#64748b] text-base max-w-2xl mx-auto font-['Plus_Jakarta_Sans']">
              Ten sovereign practice domains integrated under a single engagement model.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {SERVICES.map(s => (
              <Link
                key={s.id}
                to={s.path}
                className="group p-5 bg-[#f1f5f9] border border-[#e2e8f0] rounded-lg hover:bg-white hover:border-[#c1912f]/40 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-[#c1912f]/10 flex items-center justify-center mb-3">
                  <s.icon size={18} className="text-[#c1912f]" />
                </div>
                <h3 className="text-sm font-semibold text-[#1a1a2e] group-hover:text-[#c1912f] transition-colors font-['Plus_Jakarta_Sans']">{s.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GLOBAL OFFICES ===== */}
      <section className="py-20 bg-[#0d2b45] relative overflow-hidden">
        <div className="absolute inset-0 perspective-grid opacity-15" />
        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
          <div className="text-center mb-14">
            <span className="text-[#c1912f] text-xs font-semibold uppercase tracking-wider mb-3 block font-['Plus_Jakarta_Sans']">Global Footprint</span>
            <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] text-white font-bold mb-3">Where Onsective Operates</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {GLOBAL_OFFICES.map((o, i) => (
              <div key={i} className="p-5 bg-white/5 border border-white/10 rounded-lg">
                <div className="text-2xl mb-2">{o.flag}</div>
                <h3 className="text-base font-['Playfair_Display'] font-bold text-white mb-1">{o.city}</h3>
                <p className="text-xs text-white/50 font-['Plus_Jakarta_Sans'] mb-1">{o.country}</p>
                <p className="text-xs text-[#c1912f] font-['Plus_Jakarta_Sans']">{o.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FREQUENTLY ASKED ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-12">
            <span className="text-[#c1912f] text-xs font-semibold uppercase tracking-wider mb-3 block font-['Plus_Jakarta_Sans']">Common Questions</span>
            <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] text-[#1a1a2e] font-bold mb-3">Frequently Asked About Onsective</h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: 'What is Onsective?',
                a: 'Onsective (Onsective Enterprise Inc.) is a global technology consulting institution headquartered in Toronto, Canada. We specialise in digital transformation, cloud migration, cybersecurity, AI automation, enterprise SEO, digital marketing, custom software development, and brand management.'
              },
              {
                q: 'Is Onsective the same as Onsec or Insec?',
                a: 'Yes. "Onsective", "Onsective Enterprise", "Onsective Inc.", "Onsec", "Onsec Enterprise", "Insec", "Insective", and "Onsective Consulting" all refer to the same organisation — Onsective Enterprise Inc.'
              },
              {
                q: 'Where is Onsective headquartered?',
                a: 'Onsective\'s global headquarters is at 1111 Albion Rd, Etobicoke, Ontario M9V 1A6, Canada. We operate eight additional global hubs across New York, London, Dubai, Mumbai, Singapore, Sydney, Berlin, and San Francisco.'
              },
              {
                q: 'How do I contact Onsective?',
                a: 'Call +1-672-673-7900, email contact@onsective.com, or visit onsective.com/contact for a free strategy consultation.'
              },
              {
                q: 'What services does Onsective offer?',
                a: 'Onsective delivers ten integrated practice domains: IT Strategy, Cloud Services (AWS, Azure, GCP), Cybersecurity, Digital Experience Design, AI & Automation, Enterprise SEO, Digital Marketing, Social Media Handling, Custom Software Development, and Brand Management.'
              },
              {
                q: 'What is OnsecBoard and OnsecEmployee?',
                a: 'OnsecBoard and OnsecEmployee are proprietary Onsective enterprise platforms — OnsecBoard delivers governance intelligence for boards and executives, while OnsecEmployee is a workforce experience and talent management suite.'
              }
            ].map((f, i) => (
              <div key={i} className="bg-[#f1f5f9] border border-[#e2e8f0] rounded-lg p-6">
                <h3 className="text-base font-semibold text-[#1a1a2e] mb-2 font-['Plus_Jakarta_Sans']">
                  <span className="text-[#c1912f] font-bold mr-2">Q.</span>{f.q}
                </h3>
                <p className="text-sm text-[#64748b] font-['Plus_Jakarta_Sans'] leading-relaxed pl-6">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-24 bg-[#c1912f]">
        <div className="max-w-5xl mx-auto px-6 lg:px-16 text-center">
          <h2 className="text-3xl md:text-5xl font-['Playfair_Display'] font-bold text-white mb-6">
            Engage Onsective
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto font-['Plus_Jakarta_Sans']">
            Connect with Onsective principals for a free strategy consultation.
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

export default Onsective;
