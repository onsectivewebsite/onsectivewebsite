import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEO/SEOHead';
import Button from '../components/UI/Button';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('active'); });
    }, { threshold: 0.05, rootMargin: '0px 0px -50px 0px' });
    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));
    const fallback = setTimeout(() => {
      elements.forEach((el) => el.classList.add('active'));
    }, 2000);
    return () => { observer.disconnect(); clearTimeout(fallback); };
  }, []);

  return (
    <>
      <SEOHead pageKey="services" />

      {/* 1. HEADER - CAPABILITIES */}
      <section className="relative pt-20 sm:pt-28 md:pt-36 lg:pt-40 pb-20 md:pb-28 bg-brand-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-25"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/80 via-transparent to-brand-black z-[1]"></div>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-5xl">
            <span className="text-brand-primary font-bold tracking-[0.5em] uppercase text-[10px] mb-4 md:mb-6 block animate-fade-up">Domain Mastery</span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7.5rem] font-serif font-black mb-6 md:mb-8 tracking-tighter leading-none animate-fade-up" style={{ animationDelay: '0.1s' }}>
              THE<br /><span className="text-gold-gradient italic">CATALOG.</span>
            </h1>
            <p className="text-base md:text-xl text-white/70 font-medium max-w-3xl leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
              A collection of institutional-grade capabilities designed to secure digital sovereignty and accelerate enterprise value.
            </p>
          </div>
        </div>
      </section>

      {/* 1.5 INTEGRATION PROTOCOL (PREMIUM BRIEF) */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row gap-12 items-center justify-between">
            <div className="max-w-xl reveal">
              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-primary mb-4">The Execution Standard</h3>
              <h2 className="text-2xl md:text-3xl font-serif text-brand-black mb-6 uppercase italic font-black">Architecture over <span className="text-brand-primary">Automation.</span></h2>
              <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed">
                While the market focuses on generic automation, Onsective prioritizes <strong>Architectural Clarity</strong>. Every capability in our catalog is deployed through a rigorous three-phase verification protocol, ensuring that new technical assets integrate seamlessly with your existing institutional governance.
              </p>
            </div>
            <div className="flex gap-12 reveal delay-200">
              <div className="text-center">
                <div className="text-3xl font-serif font-black text-brand-black">01</div>
                <div className="text-[8px] font-black uppercase tracking-widest text-slate-500 mt-2">Audit</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-serif font-black text-brand-black">02</div>
                <div className="text-[8px] font-black uppercase tracking-widest text-slate-500 mt-2">Design</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-serif font-black text-brand-black">03</div>
                <div className="text-[8px] font-black uppercase tracking-widest text-slate-500 mt-2">Orchestrate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. GRID */}
      <section className="py-20 bg-white relative">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-20 gap-x-12">
            {SERVICES.map((service, index) => (
              <div key={service.id} className={`lg:col-span-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center reveal`}>
                <div className={`lg:col-span-5 relative group overflow-hidden ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <div className="aspect-[16/10] max-h-[350px] overflow-hidden bg-slate-50 shadow-xl border border-slate-100">
                    <img
                      src={service.image || `https://picsum.photos/1200/800?random=${index + 100}`}
                      alt={service.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className={`lg:col-span-7 ${index % 2 !== 0 ? 'lg:order-1 lg:pr-12' : 'lg:pl-12'}`}>
                  <div className="mb-6 text-brand-primary group-hover:scale-110 transition-transform"><service.icon size={40} strokeWidth={1} /></div>
                  <h2 className="text-3xl md:text-4xl font-serif text-brand-black mb-6 leading-tight tracking-tight uppercase font-black">{service.title}</h2>
                  <p className="text-base md:text-lg text-slate-700 font-medium mb-10 leading-relaxed">{service.description}</p>
                  <Link to={service.path}><Button variant="outline" withArrow className="w-full sm:w-auto font-black text-xs">Domain Specification</Button></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 3. DELIVERY PROMISE BAR */}
      <section className="py-16 bg-brand-black text-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border border-white/5">
            {[
              { val: '< 72hrs', label: 'First Brief Delivered' },
              { val: 'ISO 27001', label: 'Security Baseline' },
              { val: 'NDA-First', label: 'Engagement Confidentiality' },
              { val: 'Bespoke', label: '100% Tailored Architecture' },
            ].map((item, i) => (
              <div key={i} className="p-12 text-center group hover:bg-white/5 transition-all">
                <div className="text-2xl font-serif font-black text-brand-primary mb-2">{item.val}</div>
                <div className="text-[9px] font-black uppercase tracking-widest text-white/40">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TECHNICAL EXCELLENCE BRIEF */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="reveal">
              <span className="text-brand-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block">The Onsective Standard</span>
              <h2 className="text-3xl md:text-5xl font-serif font-black text-brand-black mb-8 leading-tight uppercase">Technical Excellence as <span className="text-gold-gradient italic">Institutional Standard.</span></h2>
              <p className="text-slate-700 text-lg font-medium leading-relaxed mb-8">
                In an era where every agency claims to deliver "world-class" outcomes, Onsective enforces a concrete <strong>Technical Quality Covenant</strong> on every engagement. Before any solution is delivered, it must pass our proprietary 7-Layer Architectural Validation—covering security posture, scalability benchmarks, regulatory compliance, performance under load, disaster recovery, documentation completeness, and maintainability scoring.
              </p>
              <p className="text-slate-600 text-base font-medium leading-relaxed">
                Solutions that fail any layer are sent back for architectural revision. We do not ship technical debt. We do not make exceptions for budget pressures. The Onsective name on a solution guarantees a specific and measurable standard.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 reveal delay-200">
              {[
                { layer: 'Layer 01', title: 'Security Posture Review', desc: 'Zero-Trust validation, penetration test simulation, and compliance gap analysis.' },
                { layer: 'Layer 02', title: 'Scalability Benchmark', desc: 'Load testing at 10x projected peak capacity before any production deployment.' },
                { layer: 'Layer 03', title: 'Regulatory Compliance Audit', desc: 'Jurisdiction-specific review against GDPR, SOC 2, ISO 27001, HIPAA, and sector mandates.' },
                { layer: 'Layer 04', title: 'Disaster Recovery Validation', desc: 'Tested RPO/RTO targets with documented failover procedures and executive-ready runbooks.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 p-8 bg-white border border-slate-100 hover:border-brand-primary transition-all group">
                  <div className="text-[9px] font-black uppercase tracking-widest text-brand-primary shrink-0 pt-1">{item.layer}</div>
                  <div>
                    <h4 className="font-black text-brand-black uppercase tracking-[0.1em] text-xs mb-2">{item.title}</h4>
                    <p className="text-slate-500 text-xs font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. FULL ENGAGEMENT CTA */}
      <section className="py-24 bg-brand-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-brand-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-8 block">The Next Step</span>
              <h2 className="text-3xl md:text-5xl font-serif font-black mb-8 leading-tight uppercase">Architect Your <span className="text-gold-gradient italic">Institutional Future.</span></h2>
              <p className="text-gray-300 text-lg font-medium leading-relaxed mb-10">
                Whether you are undergoing a complete digital transformation, modernizing a legacy infrastructure, or deploying a new governance platform—Onsective has the architectural depth, regulatory expertise, and institutional experience to execute at the highest standard.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link to="/contact"><Button variant="primary" size="lg" className="px-12 font-black" withArrow>Begin a Mandate</Button></Link>
                <a href="/documents/TechnicalBrief.pdf" target="_blank" rel="noopener noreferrer"><Button variant="outline" size="lg" className="px-12 font-black text-white border-white hover:bg-white hover:text-brand-black">Technical Brief (PDF)</Button></a>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div className="p-8 bg-white/5 border border-white/10 hover:border-brand-primary/50 transition-all">
                <h4 className="text-brand-primary font-black uppercase tracking-[0.2em] text-xs mb-4">For Enterprise Leaders</h4>
                <p className="text-gray-400 text-sm font-medium leading-relaxed">Strategic advisory, digital operating model design, and board-level governance platform deployment for Fortune 1000-caliber institutions.</p>
              </div>
              <div className="p-8 bg-white/5 border border-white/10 hover:border-brand-primary/50 transition-all">
                <h4 className="text-brand-primary font-black uppercase tracking-[0.2em] text-xs mb-4">For Scale-Up Institutions</h4>
                <p className="text-gray-400 text-sm font-medium leading-relaxed">Cloud architecture, security infrastructure, and institutional software for high-growth organizations that need enterprise-grade foundations without enterprise-scale timelines.</p>
              </div>
              <div className="p-8 bg-white/5 border border-white/10 hover:border-brand-primary/50 transition-all">
                <h4 className="text-brand-primary font-black uppercase tracking-[0.2em] text-xs mb-4">For Public Sector</h4>
                <p className="text-gray-400 text-sm font-medium leading-relaxed">Sovereign-native digital infrastructure for government agencies, regulatory bodies, and public institutions requiring absolute data sovereignty and Tier 1 compliance postures.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
