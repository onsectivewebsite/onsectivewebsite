import React, { useEffect } from 'react';
import { Shield, Zap, Target, Globe, ArrowRight, Server, Cpu, BarChart } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';
import Button from '../components/UI/Button';
import { Link } from 'react-router-dom';

const Vision: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) entry.target.classList.add('active');
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <div className="bg-white">
            <SEOHead
                title="Sovereign Vision | The Onsective Manifesto"
                description="Our vision is the radical decentralization of institutional power through sovereign digital architecture. Read the mandate for the future."
            />

            {/* Hero - The Manifesto Entry */}
            <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 bg-brand-black text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,160,89,0.15)_0%,transparent_50%)]"></div>
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                </div>
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
                    <div className="max-w-4xl">
                        <span className="text-brand-primary font-bold tracking-[0.6em] uppercase text-[11px] mb-8 block animate-fade-up">Institutional Mandate</span>
                        <h1 className="text-5xl sm:text-7xl md:text-9xl font-serif font-black mb-12 tracking-tighter leading-[0.85] animate-fade-up">
                            SOVEREIGN<br /><span className="text-gold-gradient italic">ENGINEERING.</span>
                        </h1>
                        <p className="text-xl md:text-3xl text-white/70 font-medium leading-relaxed animate-fade-up" style={{ animationDelay: '0.1s' }}>
                            We envision a world where every institution possesses absolute<br className="hidden lg:block" />
                            <span className="text-white">logical autonomy</span> and <span className="text-white">narrative integrity</span> through code.
                        </p>
                    </div>
                </div>
            </section>

            {/* The Five Pillars of Authority */}
            <section className="py-40 bg-white">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                        <div className="lg:col-span-5 reveal">
                            <h2 className="text-4xl md:text-7xl font-serif text-brand-black mb-12 leading-none font-black uppercase">The Five Pillars.</h2>
                            <p className="text-xl text-slate-700 font-medium leading-relaxed mb-12">
                                Our vision is built on five strategic pillars that define the boundaries of modern institutional power. These aren't just goals; they are technical requirements.
                            </p>
                            <Link to="/contact">
                                <Button variant="primary" size="lg" className="px-16" withArrow>Request Technical Brief</Button>
                            </Link>
                        </div>
                        <div className="lg:col-span-6 lg:col-start-7 space-y-px bg-slate-100 border border-slate-100 reveal delay-200">
                            {[
                                { icon: Shield, title: 'Logical Isolation', desc: 'Hardware-level separation of mission-critical data from the public grid.' },
                                { icon: Cpu, title: 'AI Synchronization', desc: 'Aligning human capital potential with institutional machine intelligence.' },
                                { icon: Server, title: 'Dynamic Resilience', desc: 'Infrastructure that self-optimizes under extreme market or adversarial load.' },
                                { icon: BarChart, title: 'Narrative Control', desc: 'Absolute governance over organizational communication and truth-states.' },
                                { icon: Globe, title: 'Global Presence', desc: 'Sovereign technical authority operating across all jurisdictions.' }
                            ].map((pillar, i) => (
                                <div key={i} className="bg-white p-10 flex gap-8 group hover:bg-brand-black transition-all duration-500">
                                    <div className="text-brand-primary shrink-0 transition-transform group-hover:scale-110"><pillar.icon size={32} /></div>
                                    <div>
                                        <h4 className="font-serif font-black text-xl text-brand-black group-hover:text-white uppercase mb-4">{pillar.title}</h4>
                                        <p className="text-sm text-slate-500 group-hover:text-white/60 leading-relaxed font-medium">{pillar.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* The Competitive Mandate - SEO Detailed */}
            <section className="py-40 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-2/3 h-full bg-brand-primary/5 blur-[120px] rounded-full"></div>
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
                    <div className="max-w-4xl reveal">
                        <span className="text-brand-primary font-bold tracking-[0.5em] uppercase text-[10px] mb-8 block">Competitive Mandate</span>
                        <h2 className="text-4xl md:text-7xl font-serif font-black mb-16 leading-tight uppercase">Beyond the <br /><span className="text-gold-gradient italic">Status Quo.</span></h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-lg text-white/60 leading-relaxed font-medium">
                            <p>
                                The traditional vendor-client model is dead. In the age of high-frequency digital volatility, institutions cannot rely on generic, shared-logic platforms. The <strong className="text-white">Onsective Vision</strong> is to replace dependency with autonomy. We build systems that you own entirely—physically, logically, and strategically.
                            </p>
                            <p>
                                By delivering <strong className="text-white">Sovereign Tenant Architectures</strong>, we ensure that your most valuable assets—your data and your people—are protected by a layer of proprietary logic that is impenetrable to external influence. This is the competitive edge of the 21st century.
                            </p>
                        </div>
                    </div>

                    <div className="mt-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 reveal delay-200">
                        {[
                            { label: 'Latency Reduction', val: '-85%', icon: Zap },
                            { label: 'Data Sovereignty', val: '100%', icon: Shield },
                            { label: 'Operational Uptime', val: '99.99%', icon: Server },
                            { label: 'Strategic ROI', val: '4.2x', icon: Target }
                        ].map((stat, i) => (
                            <div key={i} className="border-l border-brand-primary/30 pl-8 py-4">
                                <stat.icon size={20} className="text-brand-primary mb-6" />
                                <div className="text-4xl font-serif font-black mb-2">{stat.val}</div>
                                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Final Vision Loop */}
            <section className="py-60 bg-white relative">
                <div className="max-w-4xl mx-auto px-6 text-center reveal">
                    <h2 className="text-5xl md:text-8xl font-serif text-brand-black mb-12 font-black leading-none uppercase tracking-tighter">
                        Architecting<br /><span className="text-gold-gradient italic">The End-State.</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-slate-700 font-medium mb-16 leading-relaxed max-w-2xl mx-auto">
                        The end-state of Onsective engineering is an institution that survives beyond its founders, powered by a digital core that never degrades.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-10">
                        <Link to="/contact">
                            <Button variant="primary" size="lg" className="px-16" withArrow>Initiate Direct Contact</Button>
                        </Link>
                        <a href="/documents/VisionManifesto.pdf" className="flex items-center gap-3 text-brand-black font-black uppercase tracking-widest text-xs hover:text-brand-primary transition-all group">
                            <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-brand-black group-hover:text-white transition-all">
                                <ArrowRight size={14} />
                            </div>
                            Read Complete Manifesto
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Vision;
