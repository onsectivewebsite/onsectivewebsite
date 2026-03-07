import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { TrendingUp, ShieldCheck, Zap, Globe, ChevronRight } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';
import Button from '../components/UI/Button';
import { ASSETS } from '../utils/assets';


const INDUSTRY_CONTENT: Record<string, any> = {
  'banking': {
    heroImage: ASSETS.IND_BANKING,
    title: 'Financial Institutions',
    subtitle: 'Redefining Trust in the Sovereign Economy',
    trends: 'Institutional liquidity, decentralized governance, and hyper-personalized transactionality are reshaping the global financial landscape. In an era of radical digital transparency, the legacy boundaries between traditional banking and programmable finance have evaporated.',
    solutions: [
      { title: 'Core Modernization', desc: 'Rewriting the logical foundations of banking for real-time clearing and settlement.' },
      { title: 'Sovereign Payments', desc: 'Architecting cross-border payment networks that operate outside of centralized friction points.' },
      { title: 'Algorithmic Defense', desc: 'Utilizing neural networks to identify and neutralize fraudulent vectors at the point of origin.' },
      { title: 'Compliance Grids', desc: 'Automated, real-time regulatory reporting and ESG performance tracking for global institutions.' }
    ],
    stats: [{ label: 'Liquidity Boost', val: '+35%' }, { label: 'Settlement Time', val: '-90%' }]
  },
  'healthcare': {
    heroImage: ASSETS.IND_HEALTH,
    title: 'Life Sciences',
    subtitle: 'Accelerating Therapeutic Outcomes',
    trends: 'From telemedicine to genomics, technology is moving care from reactive models to proactive, precision-based data orchestration. The challenge lies in the secure, sovereign management of patient-level data at global scale.',
    solutions: [
      { title: 'Telehealth Ecosystems', desc: 'Secure, high-fidelity remote care environments with integrated biometric monitoring.' },
      { title: 'Data Interoperability', desc: 'Breaking down siloed health records to create a unified, lifelong human health ledger.' },
      { title: 'Medical IoT', desc: 'Hardening connected medical devices against adversarial intrusion and operational failure.' },
      { title: 'Clinical Analytics', desc: 'Accelerating drug discovery through predictive modeling and large-scale data synthesis.' }
    ],
    stats: [{ label: 'Trial Velocity', val: '2.4x' }, { label: 'Data Latency', val: '< 5ms' }]
  },
  'retail': {
    heroImage: ASSETS.IND_RETAIL,
    title: 'Commerce & CPG',
    subtitle: 'Unified Phygital Architectures',
    trends: 'Synthesizing the physical and digital domains to create responsive, high-fidelity value networks. Modern commerce demands a "Zero-Friction" interface between the brand and the individual.',
    solutions: [
      { title: 'Omnichannel Sync', desc: 'Ensuring absolute consistency in data and experience across all physical and digital nodes.' },
      { title: 'Loyalty Intelligence', desc: 'Moving beyond reward points to deep behavioral understanding and predicted intent.' },
      { title: 'Supply Orchestration', desc: 'Real-time traceability and autonomous inventory management for global retail clusters.' },
      { title: 'Commerce Hubs', desc: 'High-performance API networks that power rapid feature deployment and global scale.' }
    ],
    stats: [{ label: 'Conversion Lift', val: '40%' }, { label: 'Churn Reduction', val: '22%' }]
  },
  'manufacturing': {
    heroImage: ASSETS.IND_MANUFACTURING,
    title: 'Industrial 4.0',
    subtitle: 'Autonomous Ecosystems Realized',
    trends: 'Smart factories powered by neural networks and Digital Twins are driving unprecedented structural efficiency. The shift from "Mass Production" to "Predictive Personalization" is now the primary competitive mandate.',
    solutions: [
      { title: 'Predictive Ops', desc: 'Identifying hardware failure before it occurs through forensic vibrational analysis.' },
      { title: 'Digital Twins', desc: 'Creating virtual replicas of physical assets to run millions of operational simulations in seconds.' },
      { title: 'Supply Transparency', desc: 'Blockchain-verified traceability for raw materials and finished goods across the value chain.' },
      { title: 'OT/IT Convergence', desc: 'Hardened bridge architecture between industrial control systems and enterprise intelligence.' }
    ],
    stats: [{ label: 'OpEx Savings', val: '28%' }, { label: 'Innovation Speed', val: '3x' }]
  },
  'energy': {
    heroImage: ASSETS.IND_ENERGY,
    title: 'Utilities & Renewables',
    subtitle: 'Orchestrating a Resilient Future',
    trends: 'Decarbonization and grid modernization require high-performance digital backbones to manage distributed assets. The transition to a green economy is fundamentally a data engineering challenge.',
    solutions: [
      { title: 'Smart Grid Intel', desc: 'Real-time demand forecasting and autonomous load balancing for national energy grids.' },
      { title: 'Asset Optimization', desc: 'Maximizing the yields of renewable arrays through weather-correlated predictive tuning.' },
      { title: 'Field Mobility', desc: 'Empowering specialized technical teams with AR and real-time remote technical assist.' },
      { title: 'Trading Platforms', desc: 'High-frequency, secure markets for the exchange of energy credits and wholesale throughput.' }
    ],
    stats: [{ label: 'Grid Stability', val: '99.99%' }, { label: 'Carbon Delta', val: '-45%' }]
  }
};

const IndustryDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const content = id ? INDUSTRY_CONTENT[id] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [id]);

  if (!content) return <Navigate to="/industries" replace />;

  return (
    <div className="bg-white min-h-screen">
      <SEOHead title={`${content.title} | Sector Vertical Spec`} description={content.trends} />

      {/* Premium Industry Hero */}
      <section className="relative h-[70vh] flex items-center bg-brand-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={content.heroImage} className="w-full h-full object-cover opacity-30 scale-105" alt={content.title} />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/80 to-transparent"></div>
        </div>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 w-full pt-20">
          <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-brand-primary mb-12 animate-fade-up">
            <Link to="/industries" className="hover:text-white transition-colors">Verticals</Link>
            <ChevronRight size={14} />
            <span className="text-white/50">{content.title}</span>
          </div>
          <div className="max-w-4xl animate-fade-up">
            <h1 className="text-5xl md:text-9xl font-serif font-black mb-8 leading-none tracking-tighter uppercase whitespace-pre-line">
              {content.title.split(' & ').join(' &\n')}
            </h1>
            <p className="text-xl md:text-3xl text-white/60 font-medium leading-relaxed italic max-w-2xl">
              "{content.subtitle}"
            </p>
          </div>
        </div>
      </section>

      {/* Sector Deep-Dive Brief */}
      <section className="py-40 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-32">
            <div className="lg:col-span-8 reveal">
              <span className="text-brand-primary font-bold tracking-[0.5em] uppercase text-[10px] mb-8 block">Market Intelligence</span>
              <h2 className="text-4xl md:text-6xl font-serif text-brand-black font-black mb-10 leading-none">The Landscape.</h2>
              <p className="text-xl text-slate-700 font-medium leading-relaxed mb-16">
                {content.trends}
              </p>

              <h3 className="text-2xl font-serif font-black text-brand-black mb-12 uppercase">Vertical Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {content.solutions.map((sol: any, idx: number) => (
                  <div key={idx} className="p-10 border border-slate-100 hover:border-brand-primary transition-all duration-700 group">
                    <div className="w-12 h-12 bg-slate-900 text-brand-primary flex items-center justify-center mb-8 group-hover:bg-brand-primary group-hover:text-brand-black transition-colors">
                      <Zap size={20} />
                    </div>
                    <h4 className="font-serif font-black text-xl mb-4 text-brand-black uppercase">{sol.title}</h4>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">{sol.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 space-y-12 reveal delay-200">
              <div className="bg-brand-black text-white p-12 lg:p-16">
                <TrendingUp className="text-brand-primary mb-10" size={44} strokeWidth={1} />
                <h4 className="text-xl font-serif font-black mb-6 uppercase">Sector Benchmarks</h4>
                <div className="space-y-10">
                  {content.stats.map((stat: any, i: number) => (
                    <div key={i} className="flex flex-col gap-2 border-b border-white/10 pb-6">
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30">{stat.label}</span>
                      <span className="text-4xl font-serif font-black text-brand-primary">{stat.val}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-16">
                  <a href="/documents/TechnicalBrief.pdf" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full text-brand-primary border-brand-primary hover:bg-brand-primary hover:text-brand-black font-black">Download Sector Brief</Button>
                  </a>
                </div>
              </div>
              <div className="p-12 border border-slate-100 bg-slate-50">
                <ShieldCheck className="text-brand-black mb-6" size={32} />
                <h4 className="text-xl font-serif font-black mb-4">Regulatory Compliance</h4>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  Our vertical architecture is engineered to survive the most rigorous global institutional scrutiny.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Final CTA */}
      <section className="py-60 bg-white text-center border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6 reveal">
          <Globe size={64} className="mx-auto text-brand-primary mb-12" />
          <h2 className="text-4xl md:text-7xl font-serif text-brand-black font-black mb-10 leading-none uppercase tracking-tighter">
            Command Your <br /><span className="text-gold-gradient italic">Value Chain.</span>
          </h2>
          <p className="text-xl text-slate-700 font-medium mb-16 max-w-2xl mx-auto leading-relaxed">
            Interface with our {content.title} partners to request a confidential institutional briefing.
          </p>
          <Link to="/contact">
            <Button variant="primary" size="lg" className="px-20 py-8 shadow-gold">Request Sector briefing</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default IndustryDetail;