import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';
import { INDUSTRIES } from '../constants';

const Industries: React.FC = () => {
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
      <SEOHead pageKey="industries" />

      {/* 1. HEADER - GLOBAL VERTICALS */}
      <section className="relative pt-20 sm:pt-28 md:pt-36 lg:pt-40 pb-20 md:pb-28 bg-brand-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/80 via-transparent to-brand-black z-[1]"></div>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl">
            <span className="text-brand-primary font-bold tracking-[0.5em] uppercase text-[10px] mb-4 md:mb-6 block animate-fade-up">Specialized Stewardship</span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7.5rem] font-serif font-black mb-6 md:mb-8 tracking-tighter leading-none animate-fade-up" style={{ animationDelay: '0.1s' }}>
              GLOBAL<br /><span className="text-gold-gradient italic">VERTICALS.</span>
            </h1>
            <p className="text-base md:text-lg text-white/60 font-medium max-w-2xl leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
              We provide deep technical focus and specialized stewardship for the world's most vital business sectors.
            </p>
          </div>
        </div>
      </section>

      {/* 1.5 SECTOR RELEVANCE BRIEF */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 reveal">
              <span className="text-brand-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block">Domain Intelligence</span>
              <h2 className="text-3xl md:text-5xl font-serif font-black text-brand-black mb-8 leading-tight uppercase">Sector-Specific<br /><span className="text-gold-gradient italic">Architecture.</span></h2>
              <p className="text-lg text-slate-700 font-medium leading-relaxed mb-8">
                Every industry operates within a unique constellation of regulatory mandates, capital flows, and technological pressures. A generic solution applied to a specialized institution is not a solution—it is a liability. Onsective's vertical teams are composed of former industry executives, regulatory compliance architects, and sector-specific engineers who speak your language fluently and natively.
              </p>
              <p className="text-base text-slate-600 font-medium leading-relaxed">
                Our institutional stewardship model ensures your digital strategy is not only technically sound, but structurally aligned with the specific governance requirements, risk tolerances, and growth trajectories of your sector.
              </p>
            </div>
            <div className="lg:col-span-5 grid grid-cols-2 gap-px bg-slate-100 border border-slate-100 reveal delay-200">
              {[
                { stat: 'Tier 1', label: 'Regulatory Compliance Depth' },
                { stat: '99.97%', label: 'Systems Uptime SLA' },
                { stat: '8+', label: 'Global Verticals Served' },
                { stat: 'ISO 27001', label: 'Security Certification Class' },
              ].map((item, i) => (
                <div key={i} className="bg-white p-10 text-center group hover:bg-brand-black transition-all duration-700">
                  <div className="text-2xl font-serif font-black text-brand-black group-hover:text-brand-primary transition-colors mb-2">{item.stat}</div>
                  <div className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-500 group-hover:text-white/60 transition-colors">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. GRID - THE VERTICAL HOOK */}
      <section className="py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES.map((industry, idx) => (
              <Link key={industry.id} to={industry.path} className="group p-12 bg-slate-50 border border-slate-100 hover:border-brand-primary transition-all duration-700 reveal" style={{ transitionDelay: `${idx * 100}ms` }}>
                <h3 className="text-3xl font-serif text-brand-black mb-6 group-hover:text-brand-primary transition-colors">{industry.title}</h3>
                <p className="text-slate-700 font-medium mb-12 leading-relaxed">{industry.description}</p>
                <div className="flex items-center text-[10px] font-black text-brand-primary uppercase tracking-[0.4em] group-hover:gap-6 transition-all">Sector Analysis <ArrowRight size={16} className="ml-2" /></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Industries;