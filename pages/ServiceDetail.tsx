import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowRight, BarChart, Shield, PieChart, Zap } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';
import Button from '../components/UI/Button';
import { SERVICES } from '../constants';
import { ASSETS } from '../utils/assets';
import { toSlug } from '../utils/slugs';

// Content map synchronized with onsective.com/services/strategy
const SERVICE_CONTENT: Record<string, any> = {
  'it-strategy': {
    heroImage: ASSETS.SERVICE_STRATEGY,
    tagline: 'Transform your technology organization into a strategic value center.',
    challenge: 'Technical debt, siloed operations, and reactive planning are the silent killers of enterprise growth. We provide the architectural foresight required to build a resilient, future-ready organization.',
    methodology: [
      { title: 'Foresight', desc: 'Predictive analytics and roadmap engineering to anticipate market shifts.' },
      { title: 'Architecture', desc: 'Designing modular, scalable IT systems that empower rather than restrict.' },
      { title: 'Value', desc: 'Quantifying every technical move in terms of P&L impact and market capital.' }
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
    challenge: 'Cloud is no longer a destination; it is an operating model. We help you move beyond simple migration to true cloud-native resilience.',
    methodology: [
      { title: 'Assess', desc: 'Readiness audits and stack analysis.' },
      { title: 'Migrate', desc: 'Seamless transition with zero downtime.' },
      { title: 'Optimize', desc: 'Continuous performance and cost tuning.' }
    ],
    capabilities: [
      'Hybrid Cloud Orchestration',
      'Cloud Native Development',
      'DevSecOps Automation',
      'Mainframe Modernization',
      'Edge Computing'
    ],
    stats: [
      { value: '99.9%', label: 'Uptime', icon: Shield },
      { value: '25%', label: 'Cost Savings', icon: BarChart }
    ]
  }
};

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const serviceMeta = SERVICES.find(s => s.path.split('/').pop() === id);
  const content = serviceMeta ? SERVICE_CONTENT[serviceMeta.id] || { 
    heroImage: ASSETS.SERVICE_BRAND, 
    tagline: 'Strategic Execution', 
    challenge: 'Modern enterprise challenges require specialized focus.',
    methodology: [{title: 'Analyze', desc: 'Deep dive.'}, {title: 'Draft', desc: 'Strategic map.'}, {title: 'Ship', desc: 'Rapid value.'}],
    capabilities: ['Strategic Planning', 'Technical Oversight'],
    stats: [{value: '25%', label: 'Growth', icon: BarChart}, {value: '100%', label: 'Uptime', icon: Shield}]
  } : null;

  if (!serviceMeta) return <Navigate to="/services" replace />;

  return (
    <>
      <SEOHead title={serviceMeta.title} description={content.tagline} />
      
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 bg-brand-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
            <img src={content.heroImage} className="w-full h-full object-cover" alt="Hero" />
        </div>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-10 relative z-10">
            <div className="flex items-center gap-2 text-[9px] md:text-xs font-bold uppercase tracking-widest text-brand-primary mb-4 md:mb-8">
                <Link to="/services">Services</Link> <ArrowRight size={12}/> <span>{serviceMeta.title}</span>
            </div>
            <h1 className="text-4xl md:text-8xl font-serif mb-6 md:mb-10 leading-none">{serviceMeta.title}</h1>
            <p className="text-lg md:text-2xl text-gray-300 font-light max-w-2xl">{content.tagline}</p>
        </div>
      </section>

      <section className="py-16 md:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
                <div className="order-2 lg:order-1">
                    <span className="text-brand-primary font-bold tracking-[0.2em] uppercase text-[10px] mb-4 block">Executive Brief</span>
                    <h2 className="text-2xl sm:text-4xl font-serif text-brand-black mb-8 leading-tight">The Competitive Imperative</h2>
                    <p className="text-slate-600 text-sm md:text-lg leading-relaxed mb-10">{content.challenge}</p>
                    <div className="p-6 md:p-10 bg-slate-50 border-l-4 border-brand-primary">
                        <p className="font-serif italic text-brand-black text-lg">"Engineering the blueprints for undisputed market leadership."</p>
                    </div>
                </div>
                <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
                    {content.stats.map((stat: any, i: number) => (
                      <div key={i} className={`p-8 text-center flex flex-col items-center justify-center aspect-square ${i === 0 ? 'bg-brand-black text-white shadow-2xl' : 'bg-slate-50 border border-slate-100'}`}>
                        <stat.icon className="text-brand-primary mb-4" size={32} />
                        <span className="text-3xl md:text-4xl font-serif font-black">{stat.value}</span>
                        <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest mt-2 opacity-60">{stat.label}</span>
                      </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      <section className="py-20 md:py-40 bg-brand-black text-white">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-10 text-center">
              <h2 className="text-3xl md:text-6xl font-serif mb-16 md:mb-32">Our Methodology</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {content.methodology.map((step: any, i: number) => (
                    <div key={i} className="p-8 md:p-12 border border-white/10 bg-white/5 text-left group hover:bg-white/10 transition-all">
                        <div className="text-4xl md:text-6xl font-serif text-brand-primary/10 mb-8">0{i+1}</div>
                        <h3 className="text-xl md:text-2xl font-serif mb-4 text-brand-primary">{step.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  ))}
              </div>
          </div>
      </section>

      <section className="py-20 md:py-32 bg-white">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-10">
              <div className="flex flex-col lg:flex-row gap-16 md:gap-32">
                  <div className="lg:w-1/3">
                      <span className="text-brand-primary font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">Key Assets</span>
                      <h2 className="text-3xl md:text-5xl font-serif text-brand-black mb-8">Domain <br className="hidden md:block"/>Capabilities</h2>
                      <p className="text-slate-500 mb-10">Deep-rooted technical focus across the entire digital ecosystem.</p>
                      <div className="flex flex-col gap-4">
                          <Link to="/contact" className="w-full sm:w-auto"><Button variant="primary" size="lg" className="w-full" withArrow>Inquire Now</Button></Link>
                          <a href="/assets/company-profile.pdf" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                              <Button variant="outline" size="lg" className="w-full border-brand-black text-brand-black hover:bg-brand-black hover:text-white">Download Service Sheet (PDF)</Button>
                          </a>
                      </div>
                  </div>
                  <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {content.capabilities.map((cap: string, i: number) => (
                        <Link key={i} to={`/services/${id}/capability/${toSlug(cap)}`} className="p-6 bg-slate-50 border border-slate-100 flex justify-between items-center group hover:bg-white hover:border-brand-primary transition-all">
                          <span className="text-[10px] md:text-[11px] font-black uppercase tracking-widest text-brand-black group-hover:text-brand-primary">{cap}</span>
                          <ArrowRight size={18} className="text-brand-primary"/>
                        </Link>
                      ))}
                  </div>
              </div>
          </div>
      </section>
    </>
  );
};

export default ServiceDetail;