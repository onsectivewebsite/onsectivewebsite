import React, { useEffect } from 'react';
import { Users, Target, Cpu, ArrowRight, Download, Briefcase, Award, ChevronRight, Activity, Network } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';
import Button from '../components/UI/Button';
import { ASSETS } from '../utils/assets';
import { Link } from 'react-router-dom';

const OnsecEmployee: React.FC = () => {
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

    const capabilities = [
        { icon: Cpu, title: 'AI Skills Vectorization', desc: 'Real-time multi-dimensional analysis of institutional talent clusters to identify structural potential gaps with 99% accuracy.' },
        { icon: Network, title: 'Talent Mesh Visualization', desc: 'Proprietary neural networks showing how human capital potential synchronizes with evolving corporate mandates.' },
        { icon: Target, title: 'Authority Alignment', desc: 'Dynamic recalibration of individual KPIs centered on mission-critical success vectors and institutional sovereignty.' },
        { icon: Award, title: 'Elite Merit Scoring', desc: 'Immutable, merit-based verification of technical and strategic leadership depth within the global organization.' }
    ];

    return (
        <div className="bg-white min-h-screen selection:bg-brand-primary selection:text-brand-black">
            <SEOHead
                title="OnsecEmployee | High-Fidelity Talent Synchronization"
                description="The premier human capital orchestration platform. Engineered to synchronize elite individual potential with global institutional mandates."
            />

            {/* Platform Hero - Institutional Scale */}
            <section className="relative pt-32 pb-40 md:pt-48 md:pb-60 bg-brand-black text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={ASSETS.PLATFORM_ONSECEMPLOYEE_PREMIUM || ASSETS.PLATFORM_ONSECEMPLOYEE}
                        className="w-full h-full object-cover opacity-40 scale-105"
                        alt="OnsecEmployee Platform"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black"></div>
                </div>

                <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 text-center">
                    <div className="max-w-5xl mx-auto animate-fade-up">
                        <Link to="/platforms" className="inline-flex items-center gap-3 px-6 py-2 border border-brand-primary/30 bg-brand-primary/5 mb-16 hover:border-brand-primary transition-all group">
                            <ArrowRight className="rotate-180 text-brand-primary" size={14} />
                            <span className="text-brand-primary text-[10px] uppercase font-black tracking-widest">Return to Ecosystem</span>
                        </Link>
                        <h1 className="text-7xl md:text-9xl font-serif font-black mb-12 tracking-tighter leading-none italic uppercase">
                            ONSEC<br /><span className="text-gold-gradient non-italic">EMPLOYEE.</span>
                        </h1>
                        <p className="text-xl md:text-3xl text-white/70 font-medium leading-relaxed mb-20 max-w-4xl mx-auto">
                            Human capital is not a resource; it is an architectural asset. <br className="hidden md:block" />
                            Synchronize your elite talent with the absolute speed of innovation.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-10">
                            <Button variant="primary" size="lg" className="px-20 shadow-gold py-10">Initiate Synchronization</Button>
                            <a href="/documents/OnsecEmployee_Brief.pdf" className="flex items-center justify-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-white/40 hover:text-white transition-colors group">
                                <div className="w-12 h-12 rounded-none border border-white/10 flex items-center justify-center group-hover:border-brand-primary transition-all">
                                    <Download size={18} />
                                </div>
                                <span>Technical Briefing</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
                    <span className="text-[8px] font-black uppercase tracking-[0.5em]">The Network</span>
                    <div className="w-[1px] h-12 bg-white/30 animate-[scan_2s_infinite]"></div>
                </div>
            </section>

            {/* Talent Synchronization Section - Architectural */}
            <section className="py-48 bg-white overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                        <div className="reveal">
                            <span className="text-brand-primary font-black tracking-[0.5em] uppercase text-[10px] mb-8 block">Resource Engineering</span>
                            <h2 className="text-5xl md:text-7xl font-serif text-brand-black font-black mb-12 uppercase leading-[0.85] tracking-tighter">SYNCHRONIZING<br /><span className="text-gold-gradient italic">POTENTIAL.</span></h2>
                            <p className="text-xl text-slate-700 font-medium leading-relaxed mb-16">
                                OnsecEmployee utilizes proprietary AI vectors to map the cognitive and technical potential of your workforce. By visualizing the "talent mesh," leadership can deploy human capital with mathematical precision across global clusters.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                                {capabilities.map((cap, i) => (
                                    <div key={i} className="space-y-6 group">
                                        <div className="w-16 h-16 bg-slate-50 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-brand-black transition-all border border-slate-100">
                                            <cap.icon size={24} strokeWidth={1} />
                                        </div>
                                        <h4 className="font-serif font-black text-2xl text-brand-black uppercase tracking-tight">{cap.title}</h4>
                                        <p className="text-base text-slate-500 font-medium leading-relaxed">{cap.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative reveal delay-200">
                            <div className="aspect-[4/5] bg-slate-900 p-16 relative overflow-hidden group shadow-2xl">
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                                <div className="absolute top-0 right-0 p-12 text-brand-primary opacity-20">
                                    <Users size={180} strokeWidth={0.5} />
                                </div>
                                <div className="relative z-10 flex flex-col justify-between h-full text-white">
                                    <div className="space-y-6">
                                        <div className="w-12 h-[2px] bg-brand-primary"></div>
                                        <h3 className="text-4xl font-serif font-black uppercase tracking-tighter">THE TALENT <br />MESH.</h3>
                                        <p className="text-base text-white/50 leading-relaxed font-medium">98.4% Accuracy rating in technical skill alignment across global remote clusters.</p>
                                    </div>
                                    <div className="space-y-8">
                                        {[
                                            { label: 'Sync Status', val: 'Synchronized' },
                                            { label: 'Global Density', val: 'High-Fidelity' },
                                            { label: 'Delta Rating', val: 'Optimal Sync' }
                                        ].map((stat, i) => (
                                            <div key={i} className="flex justify-between items-end border-b border-white/10 pb-4">
                                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30">{stat.label}</span>
                                                <span className="text-brand-primary font-black uppercase tracking-widest text-xs">{stat.val}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/* Scanning Effect */}
                                <div className="absolute top-0 left-0 w-full h-[1px] bg-brand-primary/20 animate-[scan_4s_linear_infinite]"></div>
                            </div>
                            {/* Decorative Background Element */}
                            <div className="absolute -bottom-12 -left-12 w-48 h-48 border border-slate-100 -z-10 bg-slate-50"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Operational ROI Section - Industrial Tier */}
            <section className="py-48 bg-slate-50 border-y border-slate-200">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                    <div className="max-w-4xl mx-auto text-center reveal">
                        <span className="text-brand-primary font-black tracking-[0.6em] uppercase text-[10px] mb-8 block">Institutional ROI</span>
                        <h2 className="text-5xl md:text-8xl font-serif text-brand-black font-black mb-12 uppercase leading-[0.85] tracking-tighter">THE EFFICIENCY <br /><span className="text-gold-gradient italic">MULTIPLIER.</span></h2>
                        <p className="text-xl md:text-2xl text-slate-700 font-medium leading-relaxed mb-24 max-w-4xl mx-auto">
                            Organizations utilizing OnsecEmployee report a 40% reduction in recruitment friction and a 2.5x increase in internal innovation output through precision skills deployment.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-24 text-left">
                            {[
                                { label: 'Recruitment Tier', val: '-40%', sub: 'Latency in Hiring' },
                                { label: 'Retention Rate', val: '+65%', sub: 'Talent Continuity' },
                                { label: 'Internal Velocity', val: '2.5x', sub: 'Innovation Output' }
                            ].map((stat, i) => (
                                <div key={i} className="p-12 bg-white border border-slate-200 hover:border-brand-primary transition-all group scale-100 hover:scale-[1.02] duration-500 shadow-sm hover:shadow-xl">
                                    <div className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-8 border-b border-slate-100 pb-4">{stat.label}</div>
                                    <div className="text-6xl font-serif font-black text-brand-black mb-4">{stat.val}</div>
                                    <div className="text-xs font-black uppercase tracking-widest text-brand-primary group-hover:tracking-[0.2em] transition-all">{stat.sub}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Performance Visualization Callout */}
            <section className="py-48 bg-brand-black text-white relative">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32 reveal">
                        <div className="space-y-12">
                            <span className="text-brand-primary font-black tracking-[0.6em] uppercase text-[10px]">Real-time Visualization</span>
                            <h2 className="text-5xl md:text-7xl font-serif font-black uppercase leading-[0.85] tracking-tighter italic">THE AUTHORITY <br /><span className="text-gold-gradient non-italic">DASHBOARD.</span></h2>
                            <p className="text-xl text-white/50 leading-relaxed font-medium">
                                Command your entire global workforce from a single, high-fidelity interface. Visualize skills gaps, project dependencies, and leadership potential in real-time.
                            </p>
                            <div className="pt-8">
                                <Link to="/contact">
                                    <Button variant="primary" size="lg" className="px-16" withArrow>Request Dashboard Access</Button>
                                </Link>
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="aspect-video bg-white/5 border border-white/10 p-4 relative overflow-hidden shadow-2xl">
                                <div className="absolute inset-0 bg-brand-primary/5 group-hover:bg-brand-primary/10 transition-colors"></div>
                                <div className="h-full flex flex-col justify-center items-center text-brand-primary/20">
                                    <Activity size={120} strokeWidth={0.5} className="group-hover:scale-110 transition-transform duration-1000" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA - Institutional Alignment */}
            <section className="py-64 bg-white text-center relative">
                <div className="max-w-5xl mx-auto px-6 reveal relative z-10">
                    <Briefcase size={64} className="mx-auto text-brand-primary mb-16 animate-pulse" />
                    <h2 className="text-5xl md:text-9xl font-serif text-brand-black font-black mb-12 leading-[0.85] uppercase tracking-tighter uppercase italic">
                        Synchronize Your <br /><span className="text-gold-gradient non-italic">Legacy.</span>
                    </h2>
                    <p className="text-xl md:text-3xl text-slate-700 font-medium mb-20 max-w-4xl mx-auto leading-relaxed">
                        Interface with our talent board to request an institutional synchronization audit for your global workforce. Secure your future human capital today.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-12">
                        <Link to="/contact">
                            <Button variant="primary" size="lg" className="px-24 py-10 shadow-gold uppercase tracking-widest font-black">Initiate Institutional Audit</Button>
                        </Link>
                        <Link to="/contact" className="group flex items-center gap-4 text-slate-400 hover:text-brand-black transition-all">
                            <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-brand-primary transition-all">
                                <ChevronRight size={18} />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-[0.5em]">View System Specs</span>
                        </Link>
                    </div>
                </div>
                {/* Decorative Background Text */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black text-slate-50 pointer-events-none -z-10 uppercase tracking-tighter opacity-50 select-none">
                    ONSECP
                </div>
            </section>
        </div>
    );
};

export default OnsecEmployee;
