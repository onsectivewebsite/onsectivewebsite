import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowRight, BarChart, Shield, PieChart, Zap, Cpu, Database, ChevronRight, FileDown } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';
import Button from '../components/UI/Button';
import { SERVICES } from '../constants';
import { ASSETS } from '../utils/assets';
import { toSlug } from '../utils/slugs';

// Content map with extended, SEO-rich institutional detail
const SERVICE_CONTENT: Record<string, any> = {
  'it-strategy': {
    heroImage: ASSETS.SERVICE_STRATEGY,
    tagline: 'Transform your technology organization into a strategic value center.',
    challenge: 'Technical debt, siloed operations, and reactive planning are the silent killers of enterprise growth. We provide the architectural foresight required to build a resilient, future-ready organization. In an economy defined by speed, your IT strategy must be your primary competitive advantage.',
    detailedDescription: 'Our strategic technical advisory services go beyond simple roadmap planning. We conduct forensic audits of your existing infrastructure, governance models, and team dynamics to identify structural inefficiencies that are bleeding capital. We then architect a bespoke "Sovereign Operating Model" that aligns your IT investments directly with institutional P&L objectives.',
    methodology: [
      { title: 'Foresight', desc: 'Predictive analytics and roadmap engineering to anticipate market shifts before they occur.' },
      { title: 'Architecture', desc: 'Designing modular, scalable IT systems that empower leadership rather than restricting innovation.' },
      { title: 'Value', desc: 'Quantifying every technical move in terms of P&L impact, market capital, and long-term asset value.' }
    ],
    capabilities: [
      'Digital Operating Models',
      'M&A Technology Integration',
      'Enterprise Architecture',
      'IT Cost Optimization',
      'Vendor Management Strategy'
    ],
    stats: [
      { value: '40%', label: 'OpEx Reduction', icon: PieChart },
      { value: '3x', label: 'Innovation Speed', icon: Zap }
    ]
  },
  'cloud-services': {
    heroImage: ASSETS.SERVICE_CLOUD,
    tagline: 'Architecting agile, resilient cloud ecosystems for absolute global stability.',
    challenge: 'Cloud is no longer a destination; it is an operating model. We help you move beyond simple migration to true cloud-native resilience. The risk of vendor lock-in and opaque security controls in the public cloud environment demands a sophisticated, hybrid-first approach.',
    detailedDescription: 'Onsective cloud engineering focuses on "Logical Sovereignty." We design multi-cloud and hybrid mesh networks that ensure your institutional data remains under your absolute control, regardless of where the compute occurs. Our solutions prioritize latency, cross-border compliance, and hardware-level isolation to prevent data leakage in shared environments.',
    methodology: [
      { title: 'Assess', desc: 'Readiness audits and stack analysis to identify the optimal mix of edge, private, and public nodes.' },
      { title: 'Migrate', desc: 'Seamless transition with zero downtime using our proprietary transition sync protocol.' },
      { title: 'Optimize', desc: 'Continuous performance and cost tuning powered by AI-driven resource orchestration.' }
    ],
    capabilities: [
      'Hybrid Cloud Orchestration',
      'Cloud Native Development',
      'DevSecOps Automation',
      'Mainframe Modernization',
      'Edge Computing'
    ],
    stats: [
      { value: '99.99%', label: 'Sovereign Uptime', icon: Shield },
      { value: '25%', label: 'Infrastructure Savings', icon: BarChart }
    ]
  },
  'cybersecurity': {
    heroImage: ASSETS.SERVICE_CYBER,
    tagline: 'Engineering deep-state digital resilience against next-generation threats.',
    challenge: 'The traditional perimeter has dissolved. Adversaries now utilize AI-driven attack vectors to exploit structural vulnerabilities in your logic, not just your software. A reactive defensive posture is no longer an option.',
    detailedDescription: 'We deliver "Zero-Trust Sovereign Defense." Our security architects engineer ecosystems that assume compromise at every layer, utilizing post-quantum cryptographic standards and behavioral AI to identify and isolate threats in sub-millisecond timeframes. We protect your institutional narrative as much as your data.',
    methodology: [
      { title: 'Audit', desc: 'Forensic-grade vulnerability assessments and adversarial simulation.' },
      { title: 'Defend', desc: 'Deployment of multi-layered, isolated security grids and biometric hardening.' },
      { title: 'Preserve', desc: 'Continuous surveillance and automated incident neutralization protocols.' }
    ],
    capabilities: [
      'Managed Detection & Response',
      'Zero Trust Architecture',
      'Post-Quantum Encryption',
      'Incident Response Strategy',
      'Governance & Compliance'
    ],
    stats: [
      { value: '0', label: 'Critical Breaches', icon: Shield },
      { value: '< 1ms', label: 'Threat Response', icon: Zap }
    ]
  },
  'ai-automation': {
    heroImage: ASSETS.SERVICE_AI,
    tagline: 'Synchronizing human potential with institutional machine intelligence.',
    challenge: 'AI is often deployed as a novelty rather than a structural asset. The challenge is not in the technology itself, but in the intelligent integration of AI into complex institutional workflows without losing human oversight.',
    detailedDescription: 'Onsective AI engineering focuses on "Cognitive Architecture." We build proprietary AI models that understand your unique institutional logic, automating high-frequency decision making while providing a crystal-clear layer for executive governance. We turn data siloes into predictive engines.',
    methodology: [
      { title: 'Ingest', desc: 'Data cleaning and normalization to extract high-fidelity signal from noise.' },
      { title: 'Engine', desc: 'Building custom LLM and predictive models tuned to your industry vertical.' },
      { title: 'Deploy', desc: 'Seamless integration of AI agents into your operational workflow.' }
    ],
    capabilities: [
      'Generative AI Integration',
      'Predictive Analytics',
      'RPA & Workflow Automation',
      'Custom LLM Development',
      'Data Science Advisory'
    ],
    stats: [
      { value: '85%', label: 'Efficiency Gain', icon: Cpu },
      { value: '10x', label: 'Data Processing', icon: Database }
    ]
  }
};

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const serviceMeta = SERVICES.find(s => s.id === id || s.path.split('/').pop() === id);

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

  const content = serviceMeta ? SERVICE_CONTENT[serviceMeta.id] || {
    heroImage: ASSETS.SERVICE_BRAND,
    tagline: 'Strategic Execution',
    challenge: 'Modern enterprise challenges require specialized focus and institutional authority.',
    detailedDescription: 'The strategic mandate of this domain focuses on structural ROI and long-term institutional value. We work with board-level stakeholders to ensure that every technical deployment is a strategic asset.',
    methodology: [
      { title: 'Analyze', desc: 'Deep-dive forensic analysis of current state.' },
      { title: 'Blueprint', desc: 'Strategic architectural mapping.' },
      { title: 'Execute', desc: 'Precision deployment with zero technical debt.' }
    ],
    capabilities: ['Strategic Planning', 'Technical Oversight', 'Institutional Intelligence'],
    stats: [{ value: '25%', label: 'Growth', icon: BarChart }, { value: '100%', label: 'Uptime', icon: Shield }]
  } : null;

  if (!serviceMeta) return <Navigate to="/services" replace />;

  return (
    <div className="bg-white min-h-screen">
      <SEOHead title={`${serviceMeta.title} | Onsective Institutional Core`} description={content.tagline} />

      {/* Premium Detail Hero */}
      <section className="relative h-[70vh] flex items-center bg-brand-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={content.heroImage} className="w-full h-full object-cover opacity-30 scale-105" alt={serviceMeta.title} />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/80 to-transparent"></div>
        </div>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 w-full">
          <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-brand-primary mb-12 animate-fade-up">
            <Link to="/services" className="hover:text-white transition-colors">Catalog</Link>
            <ChevronRight size={14} />
            <span className="text-white/50">{serviceMeta.title}</span>
          </div>
          <div className="max-w-4xl animate-fade-up">
            <h1 className="text-5xl md:text-9xl font-serif font-black mb-8 leading-none tracking-tighter uppercase whitespace-pre-line">
              {serviceMeta.title.split(' & ').join(' &\n')}
            </h1>
            <p className="text-xl md:text-3xl text-white/60 font-medium leading-relaxed italic max-w-2xl">
              "{content.tagline}"
            </p>
          </div>
        </div>
        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
          <div className="text-[9px] font-black uppercase tracking-[0.4em]">Scroll to Brief</div>
          <div className="w-px h-12 bg-white animate-reveal"></div>
        </div>
      </section>

      {/* The Challenge & Brief Section */}
      <section className="py-40 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div className="reveal">
              <span className="text-brand-primary font-bold tracking-[0.5em] uppercase text-[10px] mb-8 block">Executive Assessment</span>
              <h2 className="text-4xl md:text-6xl font-serif text-brand-black font-black mb-10 leading-none">The Structural<br />Challenge.</h2>
              <p className="text-xl text-slate-700 font-medium leading-relaxed mb-10">
                {content.challenge}
              </p>
              <p className="text-lg text-slate-500 font-medium leading-relaxed mb-12">
                {content.detailedDescription}
              </p>
              <div className="p-10 bg-slate-50 border-l-8 border-brand-primary">
                <p className="font-serif italic text-brand-black text-2xl leading-relaxed">
                  "Engineering the invisible systems that power undisputed global authority."
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 reveal delay-200">
              {content.stats.map((stat: any, i: number) => (
                <div key={i} className={`p-10 aspect-square flex flex-col justify-center items-center text-center ${i === 0 ? 'bg-brand-black text-white shadow-gold shadow-2xl' : 'bg-slate-50 border border-slate-100'}`}>
                  <stat.icon size={44} className="text-brand-primary mb-8" strokeWidth={1} />
                  <div className="text-4xl md:text-6xl font-serif font-black mb-2">{stat.value}</div>
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] opacity-60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Deep Dive */}
      <section className="py-40 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(197,160,89,0.05)_0%,transparent_50%)]"></div>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-32 reveal">
            <span className="text-brand-primary font-bold tracking-[0.5em] uppercase text-[10px] mb-8 block">Project Lifecycle</span>
            <h2 className="text-4xl md:text-7xl font-serif font-black uppercase leading-none">The Sovereign <span className="text-gold-gradient italic">Methodology.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {content.methodology.map((step: any, i: number) => (
              <div key={i} className="group p-12 bg-white/5 border border-white/10 hover:border-brand-primary transition-all duration-700 reveal" style={{ animationDelay: `${i * 0.2}s` }}>
                <div className="text-6xl font-serif font-black text-white/10 group-hover:text-brand-primary/20 transition-colors mb-12">0{i + 1}</div>
                <h3 className="text-2xl font-serif font-black text-white group-hover:text-brand-primary transition-colors mb-6 uppercase tracking-tight">{step.title}</h3>
                <p className="text-white/50 text-base leading-relaxed font-medium">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Loop - Dynamic Internal Links */}
      <section className="py-40 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-32">
            <div className="lg:w-1/3 reveal">
              <h2 className="text-4xl md:text-6xl font-serif text-brand-black font-black mb-10 leading-none">Domain <br />Capabilities.</h2>
              <p className="text-xl text-slate-600 font-medium leading-relaxed mb-16">
                Specialized mandates within the {serviceMeta.title} portfolio. Each node links to a deep-dive technical specification.
              </p>
              <div className="space-y-6">
                <Link to="/contact">
                  <Button variant="primary" size="lg" className="w-full px-12 shadow-gold">Request Engagement</Button>
                </Link>
                <a
                  href={`/documents/Service_${id}_Sheet.pdf`}
                  className="flex items-center justify-center gap-3 w-full py-5 border border-brand-black font-black uppercase tracking-widest text-xs hover:bg-brand-black hover:text-white transition-all group"
                >
                  <FileDown size={18} className="group-hover:scale-110 transition-transform" /> Download Spec Sheet
                </a>
              </div>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4 reveal delay-200">
              {content.capabilities.map((cap: string, i: number) => (
                <Link
                  key={i}
                  to={`/services/${id}/capability/${toSlug(cap)}`}
                  className="p-10 bg-slate-50 border border-slate-100 flex items-center justify-between group hover:bg-brand-black transition-all duration-500"
                >
                  <div className="space-y-2">
                    <div className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-400 group-hover:text-brand-primary/60 transition-colors">Capability Node 0{i + 1}</div>
                    <div className="text-sm font-black uppercase tracking-widest text-brand-black group-hover:text-white transition-colors">{cap}</div>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-brand-primary group-hover:border-brand-primary group-hover:text-white transition-all transform group-hover:translate-x-2">
                    <ArrowRight size={14} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;