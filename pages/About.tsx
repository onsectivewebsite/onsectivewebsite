import React, { useEffect } from 'react';
import SEOHead from '../components/SEO/SEOHead';
import { LEADERSHIP_TEAM, STATS } from '../constants';
import { Target, Globe } from 'lucide-react';

const About: React.FC = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('active'); });
        }, { threshold: 0.05, rootMargin: '0px 0px -50px 0px' });
        const elements = document.querySelectorAll('.reveal');
        elements.forEach((el) => observer.observe(el));
        // Fallback: ensure all reveal elements become visible after 2s
        const fallback = setTimeout(() => {
            elements.forEach((el) => el.classList.add('active'));
        }, 2000);
        return () => { observer.disconnect(); clearTimeout(fallback); };
    }, []);

    return (
        <>
            <SEOHead pageKey="about" />

            {/* 1. OUR GENESIS - THE MISSION */}
            <section className="relative pt-20 sm:pt-28 md:pt-36 lg:pt-40 pb-20 md:pb-28 bg-brand-black text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop')] bg-cover"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/40 to-transparent z-[1]"></div>
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
                    <span className="text-brand-primary font-bold tracking-[0.5em] uppercase text-[10px] mb-4 md:mb-6 block animate-fade-up">Institutional Origins</span>
                    <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7.5rem] font-serif font-black mb-6 md:mb-8 tracking-tighter leading-none animate-fade-up" style={{ animationDelay: '0.1s' }}>
                        OUR<br /><span className="text-gold-gradient italic">GENESIS.</span>
                    </h1>
                    <p className="text-base md:text-xl text-white/70 font-medium max-w-4xl leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
                        Founded on the principle of "Structural Integrity," Onsective was engineered to provide senior leadership with the technical clarity required to govern global digital transformation.
                    </p>
                    <div className="mt-10 animate-fade-up" style={{ animationDelay: '0.3s' }}>
                        <a href="/assets/company-profile.pdf" target="_blank" rel="noopener noreferrer">
                            <button className="px-8 py-4 bg-brand-primary text-brand-black font-black text-[10px] uppercase tracking-[0.3em] hover:bg-white transition-all">
                                Download Company Profile (PDF)
                            </button>
                        </a>
                    </div>
                </div>
            </section>

            {/* 2. THE VISION - BOARDROOM TO BIT */}
            <section className="py-32 md:py-48 bg-white">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
                        <div className="lg:col-span-7 reveal">
                            <h2 className="text-4xl md:text-7xl font-serif text-brand-black mb-12 leading-[1.1]">The Executive <span className="text-gold-gradient">Mandate.</span></h2>
                            <div className="space-y-8 text-lg md:text-xl text-slate-500 font-medium leading-relaxed">
                                <p>
                                    We don't just provide consulting; we architect permanence. Onsective is a strategic powerhouse focused on helping exclusive enterprise clients navigate the "Digital Sovereignty" era with absolute speed and technical precision.
                                </p>
                                <p>
                                    Our principals are senior strategists and technical architects who believe that institutional excellence is the only standard worth pursuing. We work where the boardroom meets the byte, ensuring our select clientele achieves undisputed market leadership.
                                </p>
                            </div>
                            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-10">
                                {[
                                    { icon: Target, title: 'Forensic Strategy', desc: 'Predictive analytics for market dominance.' },
                                    { icon: Globe, title: 'Global Stewardship', desc: 'Managing critical digital assets worldwide.' }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-5">
                                        <div className="text-brand-primary shrink-0"><item.icon size={28} /></div>
                                        <div>
                                            <h4 className="font-serif font-bold text-xl text-brand-black">{item.title}</h4>
                                            <p className="text-sm text-slate-400">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:col-span-5 grid grid-cols-2 gap-px bg-slate-200 border border-slate-200 shadow-premium reveal delay-200">
                            {STATS.map((stat, idx) => (
                                <div key={idx} className="bg-white p-10 md:p-14 text-center group hover:bg-brand-black transition-all duration-700">
                                    <div className="text-xl md:text-3xl font-serif font-black text-brand-black mb-4 group-hover:text-brand-primary transition-colors">{stat.value}{stat.suffix}</div>
                                    <div className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 group-hover:text-white/60 transition-colors">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. SENIOR LEADERSHIP */}
            <section className="py-32 bg-slate-50 relative overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
                    <div className="text-center mb-24 reveal">
                        <span className="text-brand-primary font-bold tracking-[0.5em] uppercase text-[10px] mb-6 block">The Executive Core</span>
                        <h2 className="text-5xl md:text-8xl font-serif text-brand-black uppercase leading-none">THE LEADERSHIP.</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-12">
                        {LEADERSHIP_TEAM.map((leader, idx) => (
                            <div key={idx} className={`group text-center reveal delay-${idx * 100}`}>
                                <div className="aspect-[3/4] overflow-hidden bg-brand-black mb-8 relative transition-all duration-1000 group-hover:shadow-gold">
                                    <img src={leader.image} alt={leader.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" />
                                    <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-transparent transition-all"></div>
                                </div>
                                <h3 className="text-2xl font-serif font-black text-brand-black mb-2 tracking-tight">{leader.name}</h3>
                                <p className="text-[10px] font-black text-brand-primary uppercase tracking-[0.4em]">{leader.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </>
    );
};

export default About;