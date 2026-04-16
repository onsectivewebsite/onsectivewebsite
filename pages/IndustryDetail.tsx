import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowRight, Zap, ChevronRight } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';
import { SERVICES } from '../constants';
import { ASSETS } from '../utils/assets';

const INDUSTRY_IMAGES: Record<string, string> = {
  banking: ASSETS.IND_BANKING,
  healthcare: ASSETS.IND_HEALTH,
  retail: ASSETS.IND_RETAIL,
  manufacturing: ASSETS.IND_MANUFACTURING,
  energy: ASSETS.IND_ENERGY,
};

const INDUSTRY_CONTENT: Record<string, any> = {
  'banking': {
    title: 'Financial Institutions',
    subtitle: 'Redefining Trust in the Sovereign Economy',
    trends: 'Institutional liquidity, decentralized governance, and hyper-personalized transactionality are reshaping the global financial landscape. Banks and financial institutions must navigate an environment where regulatory complexity grows alongside customer expectations for seamless digital experiences. The institutions that thrive will be those that treat technology as the core of their competitive strategy, not a support function.',
    solutions: ['Core Banking Modernization', 'Sovereign Payment Infrastructure', 'Algorithmic Fraud Mitigation', 'Institutional Compliance Frameworks'],
    relatedServiceIds: ['cybersecurity', 'cloud-services', 'ai-automation']
  },
  'healthcare': {
    title: 'Life Sciences',
    subtitle: 'Accelerating Therapeutic Outcomes',
    trends: 'From telemedicine to genomics, technology is moving care from reactive models to proactive, precision-based data orchestration. Healthcare organizations face the dual challenge of improving patient outcomes while managing costs and maintaining rigorous compliance. The convergence of AI, IoT, and interoperability standards is creating unprecedented opportunities for organizations with the vision to act.',
    solutions: ['Telehealth Ecosystems', 'Health-Data Interoperability', 'Medical IoT Resilience', 'Clinical Intelligence Analytics'],
    relatedServiceIds: ['ai-automation', 'cybersecurity', 'digital-experience']
  },
  'retail': {
    title: 'Commerce & CPG',
    subtitle: 'Unified Phygital Architectures',
    trends: 'Synthesizing the physical and digital domains to create responsive, high-fidelity value networks. The modern consumer expects seamless experiences across every touchpoint, from discovery to delivery. Retailers that unify their data, personalize at scale, and optimize fulfillment will capture disproportionate market share in the new commerce landscape.',
    solutions: ['Omnichannel Value Streams', 'Customer Loyalty Intelligence', 'Supply Chain Orchestration', 'Intelligent Commerce Hubs'],
    relatedServiceIds: ['digital-experience', 'enterprise-seo', 'digital-marketing']
  },
  'manufacturing': {
    title: 'Industrial 4.0',
    subtitle: 'Autonomous Ecosystems Realized',
    trends: 'Smart factories powered by neural networks and Digital Twins are driving unprecedented structural efficiency. The convergence of operational technology and information technology is enabling real-time visibility, predictive maintenance, and autonomous quality assurance. Manufacturers that embrace this transformation will achieve resilience and agility that legacy operations cannot match.',
    solutions: ['Predictive Operational Maintenance', 'Digital Twin Prototyping', 'Supply Chain Transparency', 'OT/IT System Integration'],
    relatedServiceIds: ['ai-automation', 'cloud-services', 'it-strategy']
  },
  'energy': {
    title: 'Utilities & Renewables',
    subtitle: 'Orchestrating a Resilient Future',
    trends: 'Decarbonization and grid modernization require high-performance digital backbones to manage distributed assets. The energy transition demands intelligent infrastructure that can balance renewable intermittency, optimize asset performance, and enable real-time trading. Utilities that digitize their operations will lead the transition to a sustainable energy future.',
    solutions: ['Smart Grid Intelligence', 'Renewable Asset Optimization', 'Field Workforce Mobility', 'Energy Trading Platforms'],
    relatedServiceIds: ['it-strategy', 'ai-automation', 'cybersecurity']
  }
};

const IndustryDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const content = id ? INDUSTRY_CONTENT[id] : null;

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
  }, [id]);

  if (!content) {
    return <Navigate to="/industries" replace />;
  }

  const relatedServices = SERVICES.filter(s => content.relatedServiceIds?.includes(s.id));
  const heroImage = id ? INDUSTRY_IMAGES[id] : '';

  return (
    <>
      <SEOHead title={content.title} description={content.trends.substring(0, 160)} />

      {/* ===== HERO ===== */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        {heroImage && (
          <img src={heroImage} alt={content.title} className="absolute inset-0 w-full h-full object-cover" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d2b45] via-[#0d2b45]/75 to-[#0d2b45]/30" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16 pb-20 pt-40">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm font-medium text-white/40 mb-8 font-['Plus_Jakarta_Sans']">
            <Link to="/industries" className="hover:text-[#c1912f] transition-colors">Industries</Link>
            <ChevronRight size={14} />
            <span className="text-[#c1912f]">{content.title}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-['Playfair_Display'] font-bold text-white tracking-tight leading-[0.95] mb-6">{content.title}</h1>
          <p className="text-lg text-white/50 max-w-2xl leading-relaxed font-['Plus_Jakarta_Sans']">{content.subtitle}</p>
        </div>
      </section>

      {/* ===== MARKET LANDSCAPE ===== */}
      <section className="py-28 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="max-w-4xl animate-on-scroll opacity-0 -translate-x-8 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-x-0">
            <span className="text-[#c1912f] text-xs font-semibold uppercase tracking-wider mb-4 block font-['Plus_Jakarta_Sans']">Sector Intelligence</span>
            <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] text-[#1a1a2e] mb-10 leading-tight font-bold">Market Landscape</h2>
            <p className="text-[#64748b] text-base md:text-lg leading-relaxed font-['Plus_Jakarta_Sans']">{content.trends}</p>
          </div>
        </div>
      </section>

      {/* ===== SOLUTIONS GRID ===== */}
      <section className="py-28 md:py-40 bg-[#f1f5f9] border-t border-b border-[#e2e8f0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0">
            <span className="text-[#c1912f] text-xs font-semibold uppercase tracking-wider mb-4 block font-['Plus_Jakarta_Sans']">What We Deliver</span>
            <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] text-[#1a1a2e] font-bold">Solutions for {content.title}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.solutions.map((sol: string, idx: number) => (
              <div
                key={idx}
                className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0 bg-white border border-[#e2e8f0] p-8 md:p-10 hover:border-[#c1912f]/30 transition-all group rounded-lg"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="w-10 h-10 bg-[#f1f5f9] text-[#c1912f] flex items-center justify-center mb-6 group-hover:bg-[#c1912f]/10 transition-colors rounded-lg border border-[#e2e8f0]">
                  <Zap size={18} />
                </div>
                <h4 className="font-bold text-xl font-['Playfair_Display'] mb-3 text-[#1a1a2e]">{sol}</h4>
                <p className="text-sm text-[#64748b] leading-relaxed font-['Plus_Jakarta_Sans']">Specialized implementation framework designed for institutional authority and absolute compliance within the {content.title.toLowerCase()} sector.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== RELATED SERVICES CROSS-LINKS ===== */}
      <section className="py-28 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0">
            <span className="text-[#c1912f] text-xs font-semibold uppercase tracking-wider mb-4 block font-['Plus_Jakarta_Sans']">Cross-Domain Expertise</span>
            <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] text-[#1a1a2e] font-bold">Relevant Capabilities</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((service, i) => (
              <Link
                key={service.id}
                to={service.path}
                className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0 group bg-white border border-[#e2e8f0] rounded-lg overflow-hidden hover:border-[#c1912f]/30 transition-all duration-300"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="p-8">
                  <service.icon className="text-[#c1912f] mb-6" size={24} />
                  <h3 className="text-lg font-['Playfair_Display'] font-bold text-[#1a1a2e] mb-3 group-hover:text-[#c1912f] transition-colors">{service.title}</h3>
                  <p className="text-[#64748b] text-sm leading-relaxed mb-4 font-['Plus_Jakarta_Sans']">{service.description}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#c1912f] font-['Plus_Jakarta_Sans']">
                    Explore Capability <ChevronRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-28 md:py-40 bg-[#0d2b45]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0">
          <h2 className="text-4xl md:text-6xl font-['Playfair_Display'] text-white mb-6 font-bold">Begin Your Transformation</h2>
          <p className="text-white/40 text-lg max-w-2xl mx-auto mb-12 leading-relaxed font-['Plus_Jakarta_Sans']">
            Connect with our {content.title.toLowerCase()} practice leads to discuss your strategic objectives.
          </p>
          <Link to="/contact">
            <span className="inline-flex items-center gap-3 px-10 py-4 bg-[#c1912f] text-white font-semibold text-sm font-['Plus_Jakarta_Sans'] hover:brightness-110 transition-all cursor-pointer">
              Schedule a Consultation <ArrowRight size={16} />
            </span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default IndustryDetail;
