import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Globe, ArrowRight, Server, Cpu, BarChart, ChevronRight } from 'lucide-react';
import { SERVICES, STATS } from '../data/content';
import Button from '../components/UI/Button';
import SEOHead from '../components/SEO/SEOHead';
import { ASSETS } from '../utils/assets';

const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-brand-black overflow-hidden w-full">
      <SEOHead
        title="Command the Future | Global Digital Transformation Authority"
        description="Onsective is the premier global authority in sovereign digital transformation, engineering high-performance ecosystems for elite enterprises."
      />

      {/* Cinematic Hero - Flexible Height to prevent overlap */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden w-full bg-brand-black">
        {/* Background Video/Animation layer */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {ASSETS.HERO_VIDEO && (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute w-full h-full object-cover opacity-40 scale-105"
            >
              <source src={ASSETS.HERO_VIDEO} type="video/mp4" />
            </video>
          )}
          {/* Deep Premium Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-transparent to-brand-black"></div>
          <div className="absolute inset-0 bg-brand-black/40"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.15)_0%,transparent_100%)]"></div>

          {/* Architectural Grid Pattern (SVG instead of external png) */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #C5A059 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 relative z-10 text-center w-full pt-48 pb-64">
          <div className="inline-flex items-center gap-3 px-6 py-2 border border-brand-primary/30 rounded-none bg-brand-primary/5 backdrop-blur-md mb-12 animate-fade-up">
            <span className="w-2 h-2 bg-brand-primary animate-pulse"></span>
            <span className="text-brand-primary font-black uppercase text-[10px] tracking-[0.5em]">Institutional Domain Authority</span>
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-9xl font-serif font-black text-white mb-10 tracking-tighter leading-[0.85] animate-fade-up uppercase">
            COMMAND THE<br />
            <span className="text-gold-gradient italic">FUTURE.</span>
          </h1>

          <p className="text-lg md:text-2xl text-white/50 max-w-4xl mx-auto mb-16 leading-relaxed font-medium animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Architecting sovereign digital resilience for the world's most sophisticated organizations.
            Engineering the invisible systems that power global authority and institutional stewardship.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-8 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Link to="/contact">
              <Button variant="primary" size="lg" className="px-16 py-8 font-black uppercase text-xs tracking-[0.3em] shadow-gold" withArrow>Initiate Briefing</Button>
            </Link>
            <Link to="/vision">
              <Button variant="outline" size="lg" className="px-16 py-8 font-black uppercase text-xs tracking-[0.3em] border-white/20 text-white hover:bg-white hover:text-brand-black transition-all">Institutional Vision</Button>
            </Link>
          </div>
        </div>

        {/* Structural Stats Strip - Positioned properly within min-h-screen */}
        <div className="absolute bottom-0 left-0 w-full bg-brand-black/80 backdrop-blur-3xl border-t border-white/5 py-12 z-20">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12 grid grid-cols-2 lg:grid-cols-4 gap-12">
            {STATS.map((stat, i) => (
              <div key={i} className="text-center group border-r border-white/5 last:border-0">
                <div className="text-brand-primary font-serif font-black text-4xl mb-2">
                  {stat.value}<span className="text-2xl opacity-50">{stat.suffix}</span>
                </div>
                <div className="text-white/30 text-[9px] font-black uppercase tracking-[0.4em] group-hover:text-white transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sovereign Engineering Module */}
      <section className="py-40 bg-white relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div className="reveal">
              <span className="text-brand-primary font-black tracking-[0.6em] uppercase text-[10px] mb-8 block">Project Stewardship</span>
              <h2 className="text-5xl md:text-8xl font-serif text-brand-black mb-12 leading-none font-black uppercase">Sovereign<br />Engineering.</h2>
              <p className="text-xl text-slate-700 font-medium leading-relaxed mb-16">
                In an era of radical centralization, we deliver the structural autonomy required to navigate global volatility.
                Our mission is to engineer systems that are not only high-performing but logically isolated and institutionally secure.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mb-16">
                {[
                  { title: 'Narrative Sovereignty', icon: Shield, desc: 'Complete control over your organizational data and digital identity.' },
                  { title: 'Architectural Resilience', icon: Server, desc: 'Ecosystems designed to survive and thrive under extreme market stress.' }
                ].map((item, idx) => (
                  <div key={idx} className="group">
                    <div className="w-14 h-14 bg-slate-900 flex items-center justify-center text-brand-primary mb-6 group-hover:bg-brand-primary group-hover:text-brand-black transition-all">
                      <item.icon size={24} />
                    </div>
                    <h4 className="font-serif font-black text-xl text-brand-black uppercase tracking-tight mb-4">{item.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>
              <Link to="/about">
                <Button variant="outline" className="border-brand-black text-brand-black group px-16 py-6 font-black uppercase text-[10px] tracking-widest">
                  Our Genesis <ArrowRight className="ml-4 group-hover:translate-x-2 transition-transform" />
                </Button>
              </Link>
            </div>
            <div className="relative reveal delay-200 lg:px-12">
              <div className="aspect-[4/5] bg-slate-100 shadow-[0_40px_100px_rgba(0,0,0,0.1)] relative overflow-hidden">
                <img
                  src={ASSETS.IND_MANUFACTURING}
                  className="w-full h-full object-cover grayscale brightness-50"
                  alt="Sovereign Architecture"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 to-transparent"></div>
                <div className="absolute bottom-12 left-12 right-12">
                  <div className="text-4xl font-serif font-black text-white mb-2 tracking-tighter uppercase italic">Institutional Hardening.</div>
                  <div className="text-[10px] font-black tracking-[0.4em] text-brand-primary uppercase">Status: Fully Operational</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Spectrum */}
      <section className="py-40 bg-brand-black border-y border-white/5">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-16 mb-24 reveal">
            <div className="max-w-3xl">
              <span className="text-brand-primary font-black tracking-[0.6em] uppercase text-[10px] mb-8 block">Operational Spectrum</span>
              <h2 className="text-4xl md:text-7xl font-serif text-white font-black uppercase leading-[0.9] tracking-tighter">
                DEEP DOMAIN<br /><span className="text-gold-gradient italic">CAPABILITIES.</span>
              </h2>
            </div>
            <Link to="/services">
              <Button variant="outline" className="text-white border-white/20 font-black uppercase tracking-[0.3em] text-[10px] flex items-center gap-4 px-12">
                Full Portfolio <ChevronRight size={14} />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
            {SERVICES.slice(0, 6).map((service, idx) => (
              <Link
                key={service.id}
                to={service.path}
                className="group relative bg-brand-black p-16 hover:bg-white transition-all duration-700 reveal border-r border-b border-white/5"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="relative z-10">
                  <div className="text-brand-primary mb-12 group-hover:scale-110 group-hover:text-brand-black transition-all duration-500">
                    <service.icon size={48} strokeWidth={1} />
                  </div>
                  <h3 className="text-2xl font-serif font-black text-white group-hover:text-brand-black uppercase tracking-tighter mb-8 leading-none transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/40 group-hover:text-slate-600 text-sm leading-relaxed mb-12 font-medium transition-colors">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-4 text-brand-primary group-hover:text-brand-black font-black uppercase text-[10px] tracking-widest opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all">
                    Launch Spec <ArrowRight size={14} />
                  </div>
                </div>
                <div className="absolute top-0 right-0 p-8 text-white/5 group-hover:text-brand-black/5 font-serif font-black text-7xl transition-colors">
                  {(idx + 1).toString().padStart(2, '0')}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Infrastructure */}
      <section className="py-40 bg-white border-b border-slate-100">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center reveal">
          <span className="text-brand-primary font-black tracking-[0.5em] uppercase text-[10px] mb-8 block">Global Benchmarks</span>
          <h2 className="text-4xl md:text-7xl font-serif text-brand-black font-black uppercase mb-32 tracking-tighter">PERFORMANCE<br /><span className="text-gold-gradient italic">METRICS.</span></h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-24">
            {[
              { label: 'Network Latency', val: '< 2ms', icon: Cpu },
              { label: 'Core Uptime', val: '99.999%', icon: Globe },
              { label: 'Security Grade', val: 'Level IV', icon: Shield },
              { label: 'Data Throughput', val: '10 PB+', icon: BarChart }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className="w-16 h-16 bg-slate-50 flex items-center justify-center text-brand-primary mb-10 group-hover:bg-brand-black transition-all">
                  <stat.icon size={24} />
                </div>
                <div className="text-4xl font-serif font-black text-brand-black mb-2 uppercase tracking-tight">{stat.val}</div>
                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Ultimatum CTA */}
      <section className="py-60 bg-brand-black relative">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 reveal">
          <h2 className="text-5xl md:text-9xl font-serif text-white mb-16 font-black leading-none uppercase tracking-tighter">
            ARCHITECT<br /><span className="text-gold-gradient italic">LEGACY.</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/50 font-medium mb-16 leading-relaxed max-w-2xl mx-auto">
            Interface with our architectural board to initiate your organizational transformation. Engineering authority since 2018.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-12">
            <Link to="/contact">
              <Button variant="primary" size="lg" className="px-24 py-10 font-black uppercase text-xs tracking-[0.4em] shadow-gold">Contact Core Node</Button>
            </Link>
            <a href="/documents/CorporateBrochure.pdf" className="group text-white font-black uppercase tracking-[0.4em] text-[10px] flex items-center gap-4 hover:text-brand-primary transition-all">
              <span className="w-12 h-[1px] bg-white/20 group-hover:bg-brand-primary transition-all"></span>
              Download Brochure
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
