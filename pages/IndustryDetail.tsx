import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, ShieldCheck, Zap } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';
import Button from '../components/UI/Button';
import { ASSETS } from '../src/assets';

const INDUSTRY_CONTENT: Record<string, any> = {
  'banking': {
    heroImage: ASSETS.IND_BANKING,
    title: 'Financial Institutions',
    subtitle: 'Redefining Trust in the Sovereign Economy',
    trends: 'Institutional liquidity, decentralized governance, and hyper-personalized transactionality are reshaping the global financial landscape.',
    solutions: ['Core Banking Modernization', 'Sovereign Payment Infrastructure', 'Algorithmic Fraud Mitigation', 'Institutional Compliance Frameworks']
  },
  'healthcare': {
    heroImage: ASSETS.IND_HEALTH,
    title: 'Life Sciences',
    subtitle: 'Accelerating Therapeutic Outcomes',
    trends: 'From telemedicine to genomics, technology is moving care from reactive models to proactive, precision-based data orchestration.',
    solutions: ['Telehealth Ecosystems', 'Health-Data Interoperability', 'Medical IoT Resilience', 'Clinical Intelligence Analytics']
  },
  'retail': {
    heroImage: ASSETS.IND_RETAIL,
    title: 'Commerce & CPG',
    subtitle: 'Unified Phygital Architectures',
    trends: 'Synthesizing the physical and digital domains to create responsive, high-fidelity value networks.',
    solutions: ['Omnichannel Value Streams', 'Customer Loyalty Intelligence', 'Supply Chain Orchestration', 'Intelligent Commerce Hubs']
  },
  'manufacturing': {
    heroImage: ASSETS.IND_MANUFACTURING,
    title: 'Industrial 4.0',
    subtitle: 'Autonomous Ecosystems Realized',
    trends: 'Smart factories powered by neural networks and Digital Twins are driving unprecedented structural efficiency.',
    solutions: ['Predictive Operational Maintenance', 'Digital Twin Prototyping', 'Supply Chain Transparency', 'OT/IT System Integration']
  },
  'energy': {
    heroImage: ASSETS.IND_ENERGY,
    title: 'Utilities & Renewables',
    subtitle: 'Orchestrating a Resilient Future',
    trends: 'Decarbonization and grid modernization require high-performance digital backbones to manage distributed assets.',
    solutions: ['Smart Grid Intelligence', 'Renewable Asset Optimization', 'Field Workforce Mobility', 'Energy Trading Platforms']
  }
};

const IndustryDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const content = id ? INDUSTRY_CONTENT[id] : null;

  if (!content) {
    return <Navigate to="/industries" replace />;
  }

  return (
    <>
      <SEOHead title={content.title} description={content.trends} />
      
      <section className="relative h-[60vh] bg-brand-black text-white overflow-hidden flex items-center">
         <div className="absolute inset-0">
            <img src={content.heroImage} className="w-full h-full object-cover opacity-30" alt={content.title} />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/60 to-transparent"></div>
         </div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-20">
             <div className="flex items-center gap-3 text-brand-primary font-bold uppercase tracking-widest text-[10px] mb-6 animate-fade-up">
                 <Link to="/industries" className="hover:text-white transition-colors">Strategic Verticals</Link> 
                 <ArrowRight size={12} /> 
                 <span>{content.title}</span>
             </div>
             <h1 className="text-5xl md:text-7xl font-serif mb-4 animate-fade-up delay-100">{content.title}</h1>
             <p className="text-2xl text-gray-300 font-light animate-fade-up delay-200">{content.subtitle}</p>
         </div>
      </section>

      <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                  <div className="lg:col-span-8">
                      <h2 className="text-3xl font-serif text-brand-black mb-6">Market Landscape</h2>
                      <p className="text-lg text-gray-600 mb-12 leading-relaxed">{content.trends}</p>
                      
                      <h3 className="text-2xl font-serif text-brand-black mb-6">Expertise for {content.title}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {content.solutions.map((sol: string, idx: number) => (
                              <div key={idx} className="p-10 border border-gray-100 hover:border-brand-primary transition-all group">
                                  <div className="w-12 h-12 bg-slate-900 text-brand-primary flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-brand-black transition-colors">
                                      <Zap size={20} />
                                  </div>
                                  <h4 className="font-bold text-xl mb-3">{sol}</h4>
                                  <p className="text-sm text-gray-500 font-medium leading-relaxed">Specialized implementation framework designed for institutional authority and absolute compliance.</p>
                              </div>
                          ))}
                      </div>
                  </div>
                  
                  <div className="lg:col-span-4 space-y-8">
                      <div className="bg-brand-black text-white p-12">
                          <TrendingUp className="text-brand-primary mb-6" size={32} />
                          <h4 className="text-xl font-bold mb-3 font-serif">Intelligence Brief</h4>
                          <p className="text-gray-400 text-sm mb-10 font-medium">Access our proprietary sector analysis on the evolution of {content.title}.</p>
                          <Button variant="outline" size="sm" className="w-full text-brand-primary border-brand-primary hover:bg-brand-primary hover:text-brand-black">Download Briefing</Button>
                      </div>
                      <div className="bg-slate-50 p-12 border border-slate-100">
                          <ShieldCheck className="text-brand-black mb-6" size={32} />
                          <h4 className="text-xl font-bold mb-3 text-brand-black font-serif">Sovereign Compliance</h4>
                          <p className="text-gray-600 text-sm font-medium">Our vertical-specific solutions are engineered to meet global regulatory mandates.</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
};

export default IndustryDetail;