import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play, Shield, Zap, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';
import Button from '../components/UI/Button';
import { SERVICES } from '../constants';
import { ASSETS } from '../utils/assets';

const Home: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('active');
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -50px 0px' }
    );
    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    const fallback = setTimeout(() => {
      elements.forEach((el) => el.classList.add('active'));
    }, 2000);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  return (
    <>
      <SEOHead pageKey="home" />

      {/* 1. HERO - Locked to viewport height to prevent scrollbars */}
      <section className="relative h-[100dvh] min-h-[500px] bg-brand-black text-white flex flex-col pt-20 overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-60 z-0 scale-105">
          <source src={ASSETS.HERO_VIDEO} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/90 via-transparent to-brand-black z-[1]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/20 to-transparent z-[1]"></div>

        {/* Optimized spacing for full visibility within 100vh - reduced padding and text sizes */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 flex-1 flex items-center">
          <div className="max-w-5xl w-full">
            {/* Removed animation from tagline to ensure visibility */}
            <span className="inline-block text-brand-primary font-bold tracking-[0.4em] uppercase text-[9px] md:text-[10px] mb-3 md:mb-4">
              Institutional Digital Stewardship
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[7rem] font-serif font-black leading-[0.9] md:leading-[0.85] mb-4 md:mb-6 tracking-tighter drop-shadow-2xl animate-fade-up" style={{ animationDelay: '0.2s' }}>
              COMMAND THE<br />
              <span className="text-gold-gradient italic">FUTURE.</span>
            </h1>
            <p className="text-sm sm:text-base lg:text-lg font-medium text-white/70 mb-6 md:mb-8 max-w-2xl leading-relaxed animate-fade-up" style={{ animationDelay: '0.4s' }}>
              Onsective engineers digital resilience for the world's most sophisticated organizations. We convert technical complexity into undisputed market authority.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 md:gap-8 animate-fade-up" style={{ animationDelay: '0.6s' }}>
              <Link to="/services" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" withArrow className="w-full sm:px-12 group">Explore Catalog</Button>
              </Link>
              <Link to="/vision">
                <button className="flex items-center gap-4 text-[10px] font-black tracking-[0.3em] uppercase group hover:text-brand-primary transition-all">
                  <div className="w-10 h-10 md:w-16 md:h-16 border border-white/20 flex items-center justify-center group-hover:border-brand-primary group-hover:bg-brand-primary/10 transition-all">
                    <Play size={16} className="md:w-[18px] md:h-[18px]" fill="currentColor" />
                  </div>
                  <span>Institutional Vision</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PHILOSOPHY */}
      <section className="py-24 md:py-48 bg-white overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
            <div className="reveal">
              <span className="text-brand-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block">Our Methodology</span>
              <h2 className="text-4xl md:text-7xl font-serif text-brand-black mb-10 leading-[1.1]">The Architecture of <span className="text-gold-gradient italic">Resilience.</span></h2>
              <p className="text-slate-500 text-lg md:text-xl leading-relaxed mb-12 font-medium">
                At Onsective, we believe technical excellence is not a goal—it is a baseline. Our architects specialize in "Sovereign Engineering," ensuring your digital foundation is built to withstand market volatility and cyber threats.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-12">
                {[
                  { icon: Shield, title: 'Defensive Integrity', desc: 'Sovereign protection for high-value data.' },
                  { icon: Zap, title: 'Execution Speed', desc: 'Rapid deployment without structural compromise.' }
                ].map((item, i) => (
                  <div key={i} className="space-y-4">
                    <div className="text-brand-primary"><item.icon size={32} /></div>
                    <h4 className="font-serif text-xl font-bold uppercase tracking-tight">{item.title}</h4>
                    <p className="text-sm text-slate-400 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative reveal delay-200">
              <div className="aspect-[4/5] bg-slate-100 overflow-hidden shadow-premium">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover grayscale" alt="Architecture" />
              </div>
              <div className="absolute -bottom-10 -right-5 md:-right-10 bg-brand-black p-8 md:p-14 text-white hidden sm:block">
                <div className="text-5xl md:text-7xl font-serif font-black text-brand-primary mb-2">99.9%</div>
                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Sovereign Reliability</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CAPABILITIES */}
      <section className="py-24 md:py-48 bg-brand-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 lg:mb-32 gap-12 reveal">
            <div className="max-w-3xl">
              <span className="text-brand-primary font-bold tracking-[0.5em] uppercase text-[10px] mb-8 block">Domain Mastery</span>
              <h2 className="text-5xl md:text-9xl font-serif text-white leading-[0.9] uppercase font-black tracking-tighter">CORE<br />DOMAINS<span className="text-gold-gradient">.</span></h2>
            </div>
            <div className="lg:max-w-sm">
              <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed mb-10">
                Engineering digital blueprints that empower your business to lead, grow, and dominate.
              </p>
              <Link to="/services">
                <Button variant="outline" withArrow className="text-white border-white hover:bg-white hover:text-brand-black w-full sm:w-auto">Full Domain Catalog</Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {SERVICES.slice(0, 6).map((service, idx) => (
              <Link
                key={service.id}
                to={service.path}
                className="group p-10 md:p-16 bg-white/[0.03] border border-white/5 hover:border-brand-primary/40 transition-all duration-700 relative overflow-hidden reveal"
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <div className="mb-12 text-brand-primary group-hover:scale-110 transition-transform duration-700">
                  <service.icon size={48} strokeWidth={1} />
                </div>
                <h3 className="text-2xl md:text-4xl font-serif text-white mb-6 group-hover:text-brand-primary transition-colors tracking-tighter uppercase font-black">{service.title}</h3>
                <p className="text-gray-400 text-base font-medium mb-12 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center text-[10px] font-black text-brand-primary uppercase tracking-[0.5em] group-hover:gap-6 transition-all">
                  Domain Specification <ArrowRight size={14} className="ml-2" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;