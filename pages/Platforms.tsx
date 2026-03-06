import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Layout } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';
import Button from '../components/UI/Button';

const Platforms: React.FC = () => {
  return (
    <>
      <SEOHead title="Proprietary Logic | Systems of Authority" description="Discover our high-performance enterprise platforms: OnsecBoard and OnsecEmployee." />
      
      {/* 1. HERO */}
      <section className="relative pt-20 sm:pt-28 md:pt-36 lg:pt-40 pb-20 md:pb-28 bg-brand-black text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-primary/5 rounded-bl-[200px] z-0"></div>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
            <span className="text-brand-primary font-bold tracking-[0.5em] uppercase text-[10px] mb-4 md:mb-6 block animate-fade-up">Architectural Software</span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7.5rem] font-serif font-black mb-6 md:mb-8 tracking-tighter leading-none animate-fade-up">
                PROPRIETARY<br/><span className="text-gold-gradient italic">LOGIC.</span>
            </h1>
            <p className="text-base md:text-xl text-white/70 max-w-3xl leading-relaxed animate-fade-up" style={{ animationDelay: '0.1s' }}>
                Exclusive SaaS ecosystems designed to automate institutional governance and elevate human capital for the world's most resilient enterprises.
            </p>
        </div>
      </section>

      {/* 2. ONSECBOARD */}
      <section id="onsecboard" className="py-32 bg-white scroll-mt-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
                <div className="lg:col-span-5">
                    <span className="text-brand-primary font-bold tracking-[0.3em] uppercase text-[11px] mb-6 block">Platform 01</span>
                    <h2 className="text-5xl md:text-7xl font-serif text-brand-black mb-10 leading-none">OnsecBoard</h2>
                    <p className="text-xl text-slate-500 mb-12 font-medium leading-relaxed">
                        A secure digital boardroom engineered for elite institutional governance. OnsecBoard provides the structural oversight required to manage global risk while ensuring absolute narrative sovereignty.
                    </p>
                    <div className="space-y-8 mb-16">
                        {[
                            { icon: Shield, title: 'Sovereign Encryption', desc: 'Hardware-level protection for sensitive board communications.' },
                            { icon: Layout, title: 'Governance Orchestration', desc: 'Automated compliance tracking for global board mandates.' }
                        ].map((feat, i) => (
                            <div key={i} className="flex gap-6">
                                <div className="text-brand-primary shrink-0"><feat.icon size={28} /></div>
                                <div>
                                    <h4 className="font-serif font-black text-xl text-brand-black uppercase">{feat.title}</h4>
                                    <p className="text-sm text-slate-400 font-medium">{feat.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Button variant="primary" size="lg" className="w-full sm:w-auto font-black">Initiate Deployment</Button>
                </div>
                <div className="lg:col-span-7">
                    <div className="bg-slate-900 aspect-[16/10] shadow-2xl relative group overflow-hidden border border-white/5">
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-transparent"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40 group-hover:text-brand-primary transition-all">Institutional Interface Visualization</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 3. CTA */}
      <section className="py-32 bg-slate-50 border-t border-slate-100">
          <div className="max-w-4xl mx-auto text-center px-6">
              <h2 className="text-4xl md:text-6xl font-serif text-brand-black mb-10 leading-none">Upgrade your <span className="text-gold-gradient italic">Operating System.</span></h2>
              <p className="text-lg md:text-xl text-slate-500 font-medium mb-12 leading-relaxed">
                  Interface with Onsective architects to integrate our proprietary logic into your enterprise architecture.
              </p>
              <Link to="/contact">
                  <Button variant="primary" size="lg" className="px-16 py-6 font-black" withArrow>Request Technical Briefing</Button>
              </Link>
          </div>
      </section>
    </>
  );
};

export default Platforms;