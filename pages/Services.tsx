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

      {/* 2. GRID */}
      <section className="py-32 bg-white relative">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-32 gap-x-12">
            {SERVICES.map((service, index) => (
              <div key={service.id} className={`lg:col-span-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center reveal`}>
                <div className={`lg:col-span-7 relative group overflow-hidden ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <div className="aspect-[16/9] overflow-hidden bg-slate-100 shadow-2xl">
                    <img src={`https://picsum.photos/1200/800?random=${index + 100}`} alt={service.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" />
                  </div>
                  <div className="absolute inset-0 bg-brand-black/10 group-hover:bg-transparent transition-all"></div>
                </div>
                <div className={`lg:col-span-5 ${index % 2 !== 0 ? 'lg:order-1 lg:pr-12' : 'lg:pl-12'}`}>
                  <div className="mb-10 text-brand-primary group-hover:scale-110 transition-transform"><service.icon size={56} strokeWidth={1} /></div>
                  <h2 className="text-4xl md:text-5xl font-serif text-brand-black mb-8 leading-tight tracking-tight uppercase font-black">{service.title}</h2>
                  <p className="text-lg md:text-xl text-slate-500 font-medium mb-12 leading-relaxed">{service.description}</p>
                  <Link to={service.path}><Button variant="outline" withArrow className="w-full sm:w-auto font-black text-xs">Domain Specification</Button></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;