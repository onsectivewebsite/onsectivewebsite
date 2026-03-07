import React, { useEffect } from 'react';
import { Shield, BarChart, Globe, Lock, ArrowRight, TrendingUp, DollarSign, PieChart } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';
import Button from '../components/UI/Button';
import { Link } from 'react-router-dom';

const Investors: React.FC = () => {
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
        <div className="bg-white min-h-screen">
            <SEOHead
                title="Capital Strategy | Investor Advisory Portal"
                description="Onsective Investor Relations: Explore our fiscal methodology, institutional growth trajectory, and long-term capital strategy."
            />

            {/* Investor Hero */}
            <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 bg-brand-black text-white overflow-hidden">
                <div className="absolute inset-0 bg-[#0f172a] opacity-50 z-0"></div>
                <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-primary/5 rounded-bl-[300px] z-0"></div>

                <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
                        <div className="lg:col-span-8 animate-fade-up">
                            <span className="text-brand-primary font-bold tracking-[0.5em] uppercase text-[10px] mb-8 block">Fiscal Stewardship</span>
                            <h1 className="text-5xl sm:text-7xl md:text-9xl font-serif font-black mb-10 tracking-tighter leading-none">
                                CAPITAL<br /><span className="text-gold-gradient italic">GOVERNANCE.</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-white/60 max-w-3xl leading-relaxed font-medium">
                                Engineering long-term value through architectural resilience and sovereign technological dominance.
                            </p>
                        </div>
                        <div className="lg:col-span-4 hidden lg:block animate-fade-up delay-300">
                            <div className="p-12 border border-white/10 bg-white/5 backdrop-blur-2xl">
                                <div className="text-brand-primary font-serif font-black text-6xl mb-2">4.2x</div>
                                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-10">Historical Alpha</div>
                                <div className="space-y-4">
                                    <div className="h-[1px] w-full bg-white/10"></div>
                                    <div className="flex justify-between text-[9px] font-black uppercase tracking-widest text-white/60">
                                        <span>Growth Status</span>
                                        <span className="text-brand-primary">Accelerating</span>
                                    </div>
                                    <div className="h-[1px] w-full bg-white/10"></div>
                                    <div className="flex justify-between text-[9px] font-black uppercase tracking-widest text-white/60">
                                        <span>Market Cap</span>
                                        <span className="text-brand-primary">Sovereign Tier</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Strategic Value Proposition */}
            <section className="py-40 bg-white">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                        <div className="reveal">
                            <h2 className="text-4xl md:text-6xl font-serif text-brand-black mb-12 leading-none font-black uppercase">Growth Through<br />Resilience.</h2>
                            <p className="text-xl text-slate-700 font-medium leading-relaxed mb-10">
                                Onsective does not operate on quarterly speculation. We operate on epochs. Our fiscal strategy is built on the acquisition and engineering of mission-critical digital assets that provide structural utility to global institutions.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
                                {[
                                    { icon: TrendingUp, title: 'Asset Appreciation', body: 'Proprietary IP that increases in value as institutions scale.' },
                                    { icon: DollarSign, title: 'Strategic Reinvestment', body: 'Recursive R&D focused on post-quantum security and AI sync.' }
                                ].map((val, i) => (
                                    <div key={i} className="space-y-4">
                                        <val.icon size={28} className="text-brand-primary" />
                                        <h4 className="font-serif font-black text-lg text-brand-black uppercase">{val.title}</h4>
                                        <p className="text-sm text-slate-500 font-medium leading-relaxed">{val.body}</p>
                                    </div>
                                ))}
                            </div>
                            <Link to="/contact">
                                <Button variant="outline" className="border-brand-black text-brand-black px-12">Register for Q1 Update</Button>
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-slate-100 border border-slate-100 reveal delay-200">
                            {[
                                { icon: PieChart, title: 'Global Exposure', body: 'Geographical diversification across 5 core nodes.' },
                                { icon: Globe, title: 'Institutional Flow', body: 'Tier-1 partnerships with global sovereign bodies.' },
                                { icon: BarChart, title: 'Ecosystem Lock-in', body: '98% retention rate across all enterprise platforms.' },
                                { icon: Shield, title: 'Asset Integrity', body: 'Physically backed digital sovereignty models.' }
                            ].map((item, i) => (
                                <div key={i} className="bg-white p-12 group hover:bg-brand-black transition-all duration-500">
                                    <item.icon size={32} className="text-brand-primary mb-8 transition-transform group-hover:scale-110" strokeWidth={1} />
                                    <h4 className="font-serif font-black text-lg text-brand-black group-hover:text-white uppercase mb-4">{item.title}</h4>
                                    <p className="text-xs text-slate-500 group-hover:text-white/60 font-medium leading-relaxed">{item.body}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Document Portal (Dummy Links) */}
            <section className="py-24 bg-slate-50 border-y border-slate-200">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                    <div className="mb-20 reveal">
                        <span className="text-brand-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block">Intelligence Repository</span>
                        <h2 className="text-4xl font-serif text-brand-black font-black uppercase leading-none">Institutional <span className="text-gold-gradient italic">Briefings.</span></h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 reveal delay-200">
                        {[
                            { title: 'Annual Report 2024', file: 'ESGReport.pdf', category: 'Fiscal' },
                            { title: 'Corporate Governance', file: 'CodeOfConduct.pdf', category: 'Compliance' },
                            { title: 'Market Strategy Brief', file: 'CorporateBrochure.pdf', category: 'Growth' },
                            { title: 'Equity Structure', file: 'MSA.pdf', category: 'Institutional' }
                        ].map((doc, i) => (
                            <a
                                key={i}
                                href={`/documents/${doc.file}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group p-8 bg-white border border-slate-200 hover:border-brand-primary transition-all flex flex-col justify-between aspect-square"
                            >
                                <div className="text-[9px] font-black uppercase tracking-widest text-slate-400 group-hover:text-brand-primary transition-colors">{doc.category}</div>
                                <div>
                                    <h4 className="font-serif font-black text-xl text-brand-black uppercase mb-4">{doc.title}</h4>
                                    <div className="flex items-center gap-3 text-brand-primary font-black uppercase text-[10px] tracking-widest">
                                        Download <ArrowRight size={14} />
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stakeholder Authentication Gate */}
            <section className="py-40 bg-white">
                <div className="max-w-4xl mx-auto text-center px-6 reveal">
                    <Lock size={64} className="mx-auto text-brand-primary mb-12" />
                    <h2 className="text-4xl md:text-6xl font-serif text-brand-black mb-10 leading-none uppercase font-black">Stakeholder <br /><span className="text-gold-gradient italic">Access Portal.</span></h2>
                    <p className="text-lg md:text-xl text-slate-700 font-medium mb-12 leading-relaxed">
                        Authorized institutions and registered stakeholders may enter the primary data room for real-time asset transparency and operational reporting.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link to="/contact">
                            <Button variant="primary" size="lg" className="px-16" withArrow>Inquire for Credentials</Button>
                        </Link>
                        <Link to="/about">
                            <Button variant="outline" size="lg" className="px-16 border-brand-black text-brand-black">View Organizational Ethics</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Investors;