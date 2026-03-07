import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, ChevronRight, Lock, Target, Cpu, Zap } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';
import Button from '../components/UI/Button';
import { ASSETS } from '../utils/assets';

const Platforms: React.FC = () => {
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

    const platforms = [
        {
            id: 'onsecboard',
            name: 'OnsecBoard',
            tagline: 'Institutional Governance Architecture',
            description: 'A cryptographic orchestration environment for elite executive boards. Secure mission-critical decisions with post-quantum encryption and multi-signature authorization protocols.',
            image: ASSETS.PLATFORM_ONSECBOARD,
            path: '/platforms/onsecboard',
            features: [
                { icon: Lock, text: 'AES-GCM-256 Core Encryption' },
                { icon: Shield, text: 'Hardware-Level Isolation' },
                { icon: Target, text: 'Forensic Audit Trails' }
            ],
            icon: Shield,
            theme: 'gold'
        },
        {
            id: 'onsecemployee',
            name: 'OnsecEmployee',
            tagline: 'High-Fidelity Talent Synchronization',
            description: 'AI-driven human capital engineering for global institutions. Align elite individual potential with corporate mandates through real-time skills mapping and talent visualization.',
            image: ASSETS.PLATFORM_ONSECEMPLOYEE,
            path: '/platforms/onsecemployee',
            features: [
                { icon: Cpu, text: 'AI Skills Vectoring' },
                { icon: Users, text: 'Dynamic Human Capital Mesh' },
                { icon: Zap, text: 'Predictive Performance Sync' }
            ],
            icon: Users,
            theme: 'slate'
        }
    ];

    return (
        <div className="bg-white min-h-screen selection:bg-brand-primary selection:text-brand-black">
            <SEOHead
                title="Proprietary Ecosystems | Institutional Intelligence"
                description="Explore Onsective's proprietary software ecosystems: OnsecBoard for executive governance and OnsecEmployee for talent synchronization."
            />

            {/* Premium Hero - Industrial Contrast */}
            <section className="relative pt-48 pb-32 md:pt-64 md:pb-48 bg-brand-black text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(197,160,89,0.1)_0%,transparent_70%)] opacity-30"></div>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>

                <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 text-center">
                    <div className="inline-flex items-center gap-4 px-6 py-2 border border-brand-primary/30 rounded-none bg-brand-primary/5 backdrop-blur-md mb-12 animate-fade-up">
                        <span className="w-2 h-2 bg-brand-primary animate-pulse"></span>
                        <span className="text-brand-primary font-black uppercase text-[10px] tracking-[0.6em]">Systemic Ecosystems</span>
                    </div>
                    <h1 className="text-6xl sm:text-8xl md:text-9xl font-serif font-black mb-12 tracking-tighter leading-[0.85] animate-fade-up uppercase italic">
                        PLATFORM<br />
                        <span className="text-gold-gradient non-italic">AUTHORITY.</span>
                    </h1>
                    <p className="text-xl md:text-3xl text-white/50 max-w-4xl mx-auto leading-relaxed animate-fade-up font-medium" style={{ animationDelay: '0.1s' }}>
                        Our proprietary software ecosystems are the logical foundations upon which modern institutions achieve absolute digital sovereignty.
                    </p>
                </div>
            </section>

            {/* Platform Showcase - Large Perspective Cards */}
            <section className="py-48 bg-white overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                    <div className="space-y-64">
                        {platforms.map((platform, i) => (
                            <div key={platform.id} className={`grid grid-cols-1 lg:grid-cols-12 gap-24 items-center reveal ${i % 2 !== 0 ? '' : ''}`}>
                                <div className={`lg:col-span-12 grid grid-cols-1 lg:grid-cols-12 gap-24 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                                    <div className={`lg:col-span-5 ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                                        <div className="flex items-center gap-4 text-brand-primary mb-12">
                                            <platform.icon size={32} strokeWidth={1.5} />
                                            <div className="h-px w-24 bg-brand-primary/30"></div>
                                            <span className="text-[10px] font-black uppercase tracking-[0.5em]">System Domain {i + 1}</span>
                                        </div>
                                        <h2 className="text-5xl md:text-8xl font-serif text-brand-black font-black mb-8 uppercase leading-[0.85] tracking-tighter">
                                            {platform.name}<span className="text-brand-primary">.</span>
                                        </h2>
                                        <p className="text-2xl font-serif italic text-brand-primary mb-12 leading-tight">
                                            {platform.tagline}
                                        </p>
                                        <p className="text-xl text-slate-700 font-medium leading-relaxed mb-16">
                                            {platform.description}
                                        </p>
                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
                                            {platform.features.map((feat, idx) => (
                                                <div key={idx} className="p-8 bg-slate-50 border border-slate-100 hover:border-brand-primary/50 transition-all group">
                                                    <feat.icon size={24} className="text-brand-primary mb-6 group-hover:scale-110 transition-transform" />
                                                    <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 group-hover:text-brand-black transition-colors">{feat.text}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <Link to={platform.path} className="group inline-flex items-center gap-8">
                                            <Button variant="primary" size="lg" className="px-16" withArrow>Domain Access</Button>
                                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 group-hover:text-brand-black transition-colors">Technical Spec (PDF)</span>
                                        </Link>
                                    </div>
                                    <div className={`lg:col-span-7 relative ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                                        {/* Large Mockup Visualization */}
                                        <div className="aspect-[16/10] bg-slate-100 shadow-premium overflow-hidden group border border-slate-200">
                                            <img
                                                src={platform.image}
                                                alt={platform.name}
                                                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                                            />
                                            {/* UI Scan Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/40 via-transparent to-transparent"></div>
                                            <div className="absolute top-8 left-8 p-6 bg-brand-black/10 backdrop-blur-md border border-white/10 text-white">
                                                <div className="flex flex-col gap-1">
                                                    <span className="text-[8px] font-black uppercase tracking-[0.4em]">System Status</span>
                                                    <span className="text-[10px] font-black uppercase text-brand-primary">SECURE INTERFACE ACTIVE</span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Decorative Depth Elements */}
                                        <div className="absolute -bottom-12 -right-12 w-96 h-96 bg-brand-primary/5 rounded-full blur-[100px] -z-10"></div>
                                        <div className="absolute -top-12 -left-12 w-64 h-64 border-t border-l border-brand-primary/20 -z-10"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technical Comparison - Architectural Grid */}
            <section className="py-48 bg-slate-50 border-y border-slate-200">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                    <div className="max-w-3xl mb-32 reveal">
                        <span className="text-brand-primary font-black tracking-[0.5em] uppercase text-[10px] mb-8 block">Comparative Framework</span>
                        <h2 className="text-4xl md:text-7xl font-serif text-brand-black font-black uppercase leading-[0.85] tracking-tighter">TECHNICAL <br /><span className="text-gold-gradient italic">SPECIFICATION.</span></h2>
                    </div>

                    <div className="overflow-x-auto reveal delay-200">
                        <table className="w-full border-collapse bg-white shadow-premium">
                            <thead>
                                <tr className="border-b border-slate-200">
                                    <th className="p-12 text-left text-[10px] font-black uppercase tracking-[0.5em] text-slate-400">Core Parameters</th>
                                    <th className="p-12 text-left font-serif font-black text-2xl text-brand-black">ONSECTIVE BOARD</th>
                                    <th className="p-12 text-left font-serif font-black text-2xl text-brand-black">ONSECTIVE EMPLOYEE</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {[
                                    { p: 'Security Framework', c1: 'Post-Quantum AES-GCM-256', c2: 'Zero-Trust ID Synchronicity' },
                                    { p: 'Main Objective', c1: 'Boardroom Governance', c2: 'Human Capital Engineering' },
                                    { p: 'Data Distribution', c1: 'Sovereign Distributed Ledger', c2: 'AI-Mesh Neural Grid' },
                                    { p: 'Isolation Tier', c1: 'Physical & Logical Hardware Isolation', c2: 'Logical Tenant Containerization' },
                                    { p: 'Audit Readiness', c1: 'Immutable Forensic Log (MIL-SPEC)', c2: 'Real-time Authority Delta' }
                                ].map((row, idx) => (
                                    <tr key={idx} className="group hover:bg-slate-50 transition-colors">
                                        <td className="p-12 text-[10px] font-black uppercase tracking-[0.4em] text-brand-primary italic">{row.p}</td>
                                        <td className="p-12 text-sm font-medium text-slate-700 leading-relaxed border-l border-slate-50">{row.c1}</td>
                                        <td className="p-12 text-sm font-medium text-slate-700 leading-relaxed border-l border-slate-50">{row.c2}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Ecosystem CTA - Centered Authority */}
            <section className="py-64 bg-brand-black relative text-center">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                <div className="max-w-[1440px] mx-auto px-6 relative z-10 reveal">
                    <h2 className="text-5xl md:text-9xl font-serif text-white mb-16 font-black uppercase italic tracking-tighter leading-[0.85]">
                        Occupy Your <br /><span className="text-gold-gradient non-italic">OS.</span>
                    </h2>
                    <p className="text-xl md:text-3xl text-white/50 mb-20 leading-relaxed max-w-4xl mx-auto font-medium">
                        Request a private technical briefing to understand how our proprietary platforms can secure your institutional legacy.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-10">
                        <Link to="/contact">
                            <Button variant="primary" size="lg" className="px-24 py-10 font-black uppercase tracking-widest shadow-gold">Request Ecosystem Access</Button>
                        </Link>
                        <Link to="/about" className="flex items-center justify-center gap-4 text-white/40 hover:text-white transition-all group">
                            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-brand-primary group-hover:text-brand-black transition-all">
                                <ChevronRight size={18} />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-[0.5em]">The Architectural Mandate</span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Platforms;