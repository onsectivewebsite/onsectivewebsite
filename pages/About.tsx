import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEO/SEOHead';
import Button from '../components/UI/Button';
import { LEADERSHIP_TEAM, STATS } from '../constants';
import { Shield, Target, Award, Globe, Users, ChevronRight, CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
    useEffect(() => {
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
        <div className="bg-white min-h-screen selection:bg-brand-primary selection:text-brand-black">
            <SEOHead
                title="Our Genesis | The Architecture of Institutional Authority"
                description="Discover the history, methodology, and elite leadership behind Onsective. Engineering digital resilience since our inception."
            />

            {/* Premium Hero - Institutional Black */}
            <section className="relative pt-48 pb-32 md:pt-64 md:pb-48 bg-brand-black text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(197,160,89,0.1)_0%,transparent_70%)] opacity-50"></div>
                {/* Architectural Elements */}
                <div className="absolute left-0 top-0 w-1/4 h-full border-r border-white/5"></div>
                <div className="absolute right-0 top-0 w-1/4 h-full border-l border-white/5"></div>

                <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 text-center">
                    <div className="inline-flex items-center gap-4 px-6 py-2 border border-brand-primary/30 rounded-none bg-brand-primary/5 backdrop-blur-md mb-12 animate-fade-up">
                        <span className="w-2 h-2 bg-brand-primary animate-pulse"></span>
                        <span className="text-brand-primary font-black uppercase text-[10px] tracking-[0.6em]">Corporate Genesis & Mandate</span>
                    </div>
                    <h1 className="text-6xl sm:text-8xl md:text-9xl font-serif font-black mb-12 tracking-tighter leading-[0.85] animate-fade-up uppercase italic">
                        STRUCTURAL<br />
                        <span className="text-gold-gradient non-italic">AUTHORITY.</span>
                    </h1>
                    <p className="text-xl md:text-3xl text-white/50 max-w-4xl mx-auto leading-relaxed animate-fade-up font-medium" style={{ animationDelay: '0.1s' }}>
                        Onsective was founded on a singular mandate: to bridge the gap between legacy institutional stability and radical technological acceleration.
                    </p>
                </div>
            </section>

            {/* The Manifesto Section */}
            <section className="py-24 bg-white overflow-hidden relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-slate-200"></div>
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12">

                    {/* Top: heading + text */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-16 reveal">
                        <div>
                            <span className="text-brand-primary font-black tracking-[0.5em] uppercase text-[10px] mb-6 block">Execution Framework</span>
                            <h2 className="text-4xl md:text-6xl font-serif text-brand-black mb-0 leading-[0.9] font-black uppercase tracking-tighter">
                                THE ARCHITECTURAL<br /><span className="text-gold-gradient italic">MANIFESTO.</span>
                            </h2>
                        </div>
                        <div className="space-y-6 text-base md:text-lg text-slate-600 font-medium leading-relaxed pt-2">
                            <p>
                                Generic software solutions create generic institutions. We reject the "standard" model of consulting. Onsective operates as an architectural board, designing the invisible digital fortresses that allow modern organizations to operate with absolute narrative sovereignty.
                            </p>
                            <p className="border-l-4 border-brand-primary pl-8 italic text-xl text-brand-black font-serif">
                                "Our mission is not to facilitate digital adoption, but to engineer digital dominance."
                            </p>
                            <p>
                                Our methodology, known as <strong>Sovereign Engineering</strong>, prioritizes hardware-level security, logical data isolation, and institutional-grade uptime. We don't just solve problems; we engineer the structural resilience required for the centuries ahead.
                            </p>
                            <div className="grid grid-cols-2 gap-4 pt-4">
                                {['Zero-Trust Architecture', 'Hardware Security Modules', 'Logical Data Isolation', 'Post-Quantum Readiness'].map((feat, i) => (
                                    <div key={i} className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-brand-black">
                                        <CheckCircle2 size={14} className="text-brand-primary shrink-0" />
                                        {feat}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Bottom: 4 value cards in a row */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-slate-100 border border-slate-100 reveal delay-200">
                        {[
                            { icon: Shield, title: 'Integrity', body: 'Absolute data residency and narrative control for every partner.' },
                            { icon: Target, title: 'Precision', body: 'Mil-spec execution across every digital domain and deployment.' },
                            { icon: Award, title: 'Excellence', body: 'Elite-tier engineering standards that exceed global benchmarks.' },
                            { icon: Globe, title: 'Authority', body: 'Global strategic presence with localized architectural focus.' },
                        ].map((val, i) => (
                            <div key={i} className="p-10 bg-white hover:bg-brand-black group transition-all duration-700">
                                <val.icon size={32} strokeWidth={1} className="text-brand-primary mb-6 transition-transform group-hover:scale-110" />
                                <h4 className="font-serif font-black text-lg text-brand-black group-hover:text-white uppercase mb-3 tracking-tight">{val.title}</h4>
                                <p className="text-sm text-slate-500 group-hover:text-white/50 leading-relaxed font-medium transition-colors">{val.body}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* Scale & Reliability Strip */}
            <section className="py-24 bg-slate-50 border-y border-slate-200">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12 grid grid-cols-2 lg:grid-cols-4 gap-12">
                    {STATS.map((stat, i) => (
                        <div key={i} className="text-center group reveal" style={{ animationDelay: `${i * 0.1}s` }}>
                            <div className="text-brand-black font-serif font-black text-5xl mb-2 group-hover:text-brand-primary transition-colors">
                                {stat.value}<span className="text-2xl text-slate-300 group-hover:text-brand-primary/50 transition-colors">{stat.suffix}</span>
                            </div>
                            <div className="text-slate-400 text-[9px] font-black uppercase tracking-[0.4em]">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Evolution of Authority - Dark & Precise */}
            <section className="py-32 bg-brand-black text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(197,160,89,0.05)_0%,transparent_50%)]"></div>
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                    <div className="mb-24 reveal">
                        <span className="text-brand-primary font-black tracking-[0.6em] uppercase text-[10px] mb-6 block">Project Evolution</span>
                        <h2 className="text-5xl md:text-7xl font-serif font-black text-white uppercase tracking-tighter leading-[0.9]">THE GROWTH<br /><span className="text-gold-gradient italic">TRAJECTORY.</span></h2>
                    </div>

                    {/* Clean vertical timeline */}
                    <div className="relative pl-8 md:pl-16 border-l border-white/10">
                        <div className="space-y-20">
                            {[
                                { period: 'Feb 7, 2026', title: 'The Genesis Node', body: 'Onsective Enterprise Inc. officially incorporated in Toronto, Ontario. Founded on a singular mandate: to engineer digital dominance for institutional partners.', badge: 'DAY ONE' },
                                { period: 'Q1 2026', title: 'First Client Mandate', body: 'Onboarding the inaugural cohort of institutional partners across the finance and legal sectors. Sovereign engineering frameworks established.', badge: 'ACTIVE' },
                                { period: 'Q2 2026', title: 'Platform Launch', body: 'Debut of OnsecBoard and OnsecEmployee — proprietary platforms for board governance and AI-powered talent synchronization.', badge: 'UPCOMING' },
                                { period: 'Q4 2026', title: 'Global Grid Alpha', body: 'Planned expansion into strategic North American hubs, establishing the first sovereign data residency nodes for enterprise clients.', badge: 'PLANNED' },
                            ].map((milestone, i) => (
                                <div key={i} className="relative reveal group" style={{ animationDelay: `${i * 0.1}s` }}>
                                    {/* Timeline dot */}
                                    <div className="absolute -left-[37px] md:-left-[53px] top-1 w-4 h-4 bg-brand-black border-2 border-brand-primary group-hover:bg-brand-primary transition-all duration-500 rotate-45"></div>
                                    <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
                                        <div className="shrink-0 md:w-48">
                                            <div className="text-[9px] font-black uppercase tracking-widest text-brand-primary mb-1">{milestone.period}</div>
                                            <span className="inline-block px-3 py-1 border border-white/10 text-[8px] font-black uppercase tracking-widest text-white/30 group-hover:border-brand-primary/40 group-hover:text-brand-primary/60 transition-all">{milestone.badge}</span>
                                        </div>
                                        <div>
                                            <h3 className="text-2xl md:text-3xl font-serif font-black text-white uppercase tracking-tighter mb-3 leading-none">{milestone.title}</h3>
                                            <p className="text-white/40 text-sm font-medium leading-relaxed max-w-lg group-hover:text-white/60 transition-colors">{milestone.body}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Board */}
            <section id="leadership" className="py-24 bg-brand-black text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-primary/40 to-transparent"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(197,160,89,0.04)_0%,transparent_60%)]"></div>
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">

                    {/* Header */}
                    <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
                        <div>
                            <span className="text-brand-primary font-black tracking-[0.5em] uppercase text-[10px] mb-4 block">Executive Council</span>
                            <h2 className="text-4xl md:text-6xl font-serif text-white font-black uppercase leading-[0.9] tracking-tighter">
                                THE GOVERNING<br /><span className="text-gold-gradient italic">BOARD.</span>
                            </h2>
                        </div>
                        <Link to="/careers">
                            <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-brand-black group px-8 py-4 font-black text-[10px] uppercase tracking-widest whitespace-nowrap transition-all">
                                Join the Elite <Users size={13} className="ml-2 inline group-hover:scale-110 transition-transform" />
                            </Button>
                        </Link>
                    </div>

                    {/* Horizontal Cards Grid — 5 leaders side by side */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-white/5">
                        {LEADERSHIP_TEAM.map((member, i) => (
                            <div
                                key={i}
                                className="group relative bg-brand-black overflow-hidden cursor-pointer reveal"
                                style={{ animationDelay: `${i * 0.08}s` }}
                            >
                                {/* Portrait photo — tall aspect ratio */}
                                <div className="relative overflow-hidden" style={{ paddingBottom: '130%' }}>
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        style={{
                                            position: 'absolute',
                                            inset: 0,
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            objectPosition: 'center top',
                                            display: 'block',
                                            filter: 'grayscale(100%) brightness(0.65)',
                                            transition: 'filter 0.6s ease, transform 0.7s ease',
                                        }}
                                        className="group-hover:[filter:grayscale(0%)_brightness(0.85)] group-hover:[transform:scale(1.05)]"
                                    />
                                    {/* Gradient fade at bottom of photo */}
                                    <div
                                        className="absolute bottom-0 left-0 w-full pointer-events-none"
                                        style={{ height: '40%', background: 'linear-gradient(to top, #0a0a0a, transparent)' }}
                                    />

                                    {/* Connect CTA — slides up on hover from bottom of photo */}
                                    <Link
                                        to="/contact"
                                        className="absolute bottom-0 left-0 w-full flex items-center justify-center gap-2 bg-brand-primary text-brand-black py-3 font-black text-[9px] uppercase tracking-widest translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-10"
                                        onClick={e => e.stopPropagation()}
                                    >
                                        <ChevronRight size={12} /> Connect
                                    </Link>
                                </div>

                                {/* Text details below photo */}
                                <div className="px-5 py-5 border-t border-white/5 group-hover:border-brand-primary/20 transition-colors">
                                    <span className="text-brand-primary font-black uppercase tracking-[0.3em] text-[8px] mb-2 block leading-none">
                                        {member.role}
                                    </span>
                                    <h3 className="text-sm md:text-base lg:text-lg font-serif font-black text-white uppercase tracking-tight leading-tight">
                                        {member.name}
                                    </h3>
                                    {member.bio && (
                                        <p className="text-white/35 text-[10px] leading-relaxed mt-2 line-clamp-2 group-hover:text-white/60 transition-colors">
                                            {member.bio}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* Institutional CTA */}
            <section className="py-48 bg-brand-black relative text-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.07)_0%,transparent_70%)]"></div>
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent"></div>
                <div className="max-w-4xl mx-auto px-6 relative z-10 reveal">
                    <span className="text-brand-primary font-black tracking-[0.6em] uppercase text-[10px] mb-8 block">Ready to Begin</span>
                    <h2 className="text-5xl md:text-8xl font-serif text-white mb-12 font-black uppercase italic tracking-tighter leading-[0.85]">Command Your <span className="text-gold-gradient non-italic">Legacy.</span></h2>
                    <p className="text-lg md:text-xl text-white/40 mb-16 leading-relaxed font-medium max-w-2xl mx-auto">Ready to interface with our architects and build your organizational future?</p>
                    <Link to="/contact">
                        <Button variant="primary" size="lg" className="px-20 py-8 font-black uppercase text-[10px] tracking-[0.5em] shadow-gold">Initiate Briefing</Button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default About;