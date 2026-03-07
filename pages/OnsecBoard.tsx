import React, { useEffect } from 'react';
import { Shield, Lock, FileText, Share2, Eye, Database, ArrowRight, Download, ChevronRight, Activity, Terminal } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';
import Button from '../components/UI/Button';
import { ASSETS } from '../utils/assets';
import { Link } from 'react-router-dom';

const OnsecBoard: React.FC = () => {
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

    const features = [
        { icon: Lock, title: 'Post-Quantum AES-GCM', desc: 'Sovereign-level data protection designed to withstand next-generation adversarial compute and brute-force vectors.' },
        { icon: Eye, title: 'Zero-Knowledge Auditing', desc: 'Provide absolute transparency for stakeholders without compromising underlying sensitive data or proprietary configurations.' },
        { icon: Share2, title: 'Multi-Sig Governance', desc: 'Enforce conditional execution of boardroom decisions based on distributed authorization and cryptographic proximity.' },
        { icon: FileText, title: 'Immutable Archiving', desc: 'Secure, legally-binding session recording with blockchain-verified timestamps and multi-region redundancy.' }
    ];

    return (
        <div className="bg-white min-h-screen selection:bg-brand-primary selection:text-brand-black">
            <SEOHead
                title="OnsecBoard | Institutional Governance Ecosystem"
                description="The world's most secure digital boardroom environment. Encrypted orchestration for executive governance and high-value decision making."
            />

            {/* Cinematic Hero - Institutional Power */}
            <section className="relative pt-32 pb-40 md:pt-48 md:pb-60 bg-brand-black text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={ASSETS.PLATFORM_ONSECBOARD_PREMIUM || ASSETS.PLATFORM_ONSECBOARD}
                        className="w-full h-full object-cover opacity-40 scale-105"
                        alt="OnsecBoard Environment"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-transparent to-brand-black"></div>
                </div>

                <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 text-center">
                    <div className="max-w-5xl mx-auto animate-fade-up">
                        <Link to="/platforms" className="inline-flex items-center gap-3 px-6 py-2 border border-brand-primary/30 bg-brand-primary/5 mb-16 hover:border-brand-primary transition-all group">
                            <ArrowRight className="rotate-180 text-brand-primary" size={14} />
                            <span className="text-brand-primary text-[10px] uppercase font-black tracking-widest">Return to Ecosystem</span>
                        </Link>
                        <h1 className="text-7xl md:text-9xl font-serif font-black mb-12 tracking-tighter leading-none italic uppercase">
                            ONSEC<br /><span className="text-gold-gradient non-italic">BOARD.</span>
                        </h1>
                        <p className="text-xl md:text-3xl text-white/70 font-medium leading-relaxed mb-20 max-w-4xl mx-auto">
                            The definitive environment for executive orchestration. <br className="hidden md:block" />
                            Where institutional transparency meets absolute, post-quantum security.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-10">
                            <Button variant="primary" size="lg" className="px-20 shadow-gold py-10">Initiate Secure Session</Button>
                            <a href="/documents/OnsecBoard_Brief.pdf" className="flex items-center justify-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-white/40 hover:text-white transition-colors group">
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
                    <span className="text-[8px] font-black uppercase tracking-[0.5em]">The Domain</span>
                    <div className="w-[1px] h-12 bg-white/30 animate-[scan_2s_infinite]"></div>
                </div>
            </section>

            {/* Architecture Section - Clean & Industrial */}
            <section className="py-48 bg-white overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                        <div className="reveal">
                            <span className="text-brand-primary font-black tracking-[0.5em] uppercase text-[10px] mb-8 block">Project Integrity</span>
                            <h2 className="text-5xl md:text-7xl font-serif text-brand-black font-black mb-12 uppercase leading-[0.85] tracking-tighter">BUILT FOR <br /><span className="text-gold-gradient italic">SOVEREIGNTY.</span></h2>
                            <p className="text-xl text-slate-700 font-medium leading-relaxed mb-16">
                                OnsecBoard is not merely a communication tool; it is a governance hub. Every interaction is rendered in an isolated secure enclave, ensuring that mission-critical data never touches the unencrypted public stack.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                                {features.map((feat, i) => (
                                    <div key={i} className="space-y-6 group">
                                        <div className="w-16 h-16 bg-slate-50 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-brand-black transition-all border border-slate-100">
                                            <feat.icon size={24} strokeWidth={1} />
                                        </div>
                                        <h4 className="font-serif font-black text-2xl text-brand-black uppercase tracking-tight">{feat.title}</h4>
                                        <p className="text-base text-slate-500 font-medium leading-relaxed">{feat.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative reveal delay-200">
                            {/* Abstract UI Representation */}
                            <div className="aspect-square bg-slate-900 p-16 relative overflow-hidden group shadow-2xl">
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                                <div className="relative z-10 flex flex-col justify-between h-full">
                                    <div className="space-y-12">
                                        <div className="flex items-center justify-between">
                                            <Terminal className="text-brand-primary" size={32} />
                                            <div className="flex gap-2">
                                                <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                                                <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                                                <div className="w-3 h-3 rounded-full bg-green-500/50 animate-pulse"></div>
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="text-brand-primary font-serif font-black text-6xl leading-none">SYS.64</div>
                                            <div className="text-white font-serif font-black text-3xl leading-tight uppercase">HARDWARE-LEVEL <br />ISOLATION.</div>
                                        </div>
                                    </div>
                                    <div className="space-y-8">
                                        <div className="flex justify-between items-end border-b border-white/10 pb-4">
                                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30">Security Tier</span>
                                            <span className="text-brand-primary font-black uppercase tracking-widest text-xs">Tier IV Obsidian Vault</span>
                                        </div>
                                        <div className="flex justify-between items-end border-b border-white/10 pb-4">
                                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30">Latency</span>
                                            <span className="text-brand-primary font-black uppercase tracking-widest text-xs">0.4ms Stable</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute -bottom-24 -right-24 text-white opacity-[0.03] rotate-12">
                                    <Shield size={400} strokeWidth={0.5} />
                                </div>
                            </div>
                            <div className="absolute -top-12 -left-12 w-48 h-48 border border-slate-100 -z-10 bg-slate-50"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Forensic Hub Detail - Dark Tier */}
            <section className="py-48 bg-brand-black text-white relative">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-end mb-32 reveal">
                        <div className="lg:col-span-8">
                            <span className="text-brand-primary font-black tracking-[0.6em] uppercase text-[10px] mb-8 block">Audit Verification</span>
                            <h2 className="text-5xl md:text-8xl font-serif font-black mb-10 leading-[0.85] tracking-tighter uppercase italic">THE FORENSIC <br /><span className="text-gold-gradient non-italic">PROTOCOL.</span></h2>
                            <p className="text-2xl text-white/50 leading-relaxed font-medium max-w-4xl">
                                Every decision, amendment, and vote within OnsecBoard is recorded with forensic-grade immutable logging, ensuring an ironclad audit trail for regulatory compliance.
                            </p>
                        </div>
                        <div className="lg:col-span-4 flex justify-end">
                            <Activity className="text-brand-primary opacity-20" size={120} strokeWidth={0.5} />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-1 reveal delay-200">
                        {[
                            { label: 'Latency Pulse', value: '0.4ms', sub: 'Bus Synchronization' },
                            { label: 'Uptime Threshold', value: '100%', sub: 'Zero-Downtime Grid' },
                            { label: 'Throughput', value: '100 GB/s', sub: 'Cryptographic Stream' }
                        ].map((stat, i) => (
                            <div key={i} className="p-20 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-center">
                                <div className="text-[10px] font-black uppercase tracking-[0.5em] text-white/30 mb-8">{stat.label}</div>
                                <div className="text-6xl font-serif font-black text-brand-primary mb-4">{stat.value}</div>
                                <div className="text-xs font-black uppercase tracking-widest text-white/40 italic">{stat.sub}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final Call to Order */}
            <section className="py-64 bg-white text-center relative overflow-hidden">
                <div className="max-w-5xl mx-auto px-6 reveal relative z-10">
                    <Database size={64} className="mx-auto text-brand-primary mb-16 animate-pulse" />
                    <h2 className="text-5xl md:text-9xl font-serif text-brand-black font-black mb-12 leading-[0.85] uppercase tracking-tighter">
                        Command Your <br /><span className="text-gold-gradient italic">Governance.</span>
                    </h2>
                    <p className="text-xl md:text-3xl text-slate-700 font-medium mb-20 max-w-4xl mx-auto leading-relaxed">
                        Secure your institutional legacy with the world's most sophisticated digital orchestration platform. Dedicated, elite technical support available 24/7/365.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-12">
                        <Link to="/contact">
                            <Button variant="primary" size="lg" className="px-24 py-10 shadow-gold uppercase tracking-widest font-black">Request Credential Access</Button>
                        </Link>
                        <Link to="/contact" className="group flex items-center gap-4 text-slate-400 hover:text-brand-black transition-all">
                            <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-brand-primary transition-all">
                                <ChevronRight size={18} />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-[0.5em]">View Integration Manual</span>
                        </Link>
                    </div>
                </div>
                {/* Decorative Background Text */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black text-slate-50 pointer-events-none -z-10 uppercase tracking-tighter opacity-50 select-none">
                    ONSECV
                </div>
            </section>
        </div>
    );
};

export default OnsecBoard;
