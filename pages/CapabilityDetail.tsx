import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Shield, Server, Globe, Cpu, ChevronRight, FileDown } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';
import Button from '../components/UI/Button';
import { SERVICES } from '../constants';

const CapabilityDetail: React.FC = () => {
    const { serviceId, capabilityId } = useParams<{ serviceId: string; capabilityId: string }>();

    useEffect(() => {
        window.scrollTo(0, 0);
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) entry.target.classList.add('active');
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [capabilityId]);

    const service = SERVICES.find(s => s.path.split('/').pop() === serviceId);

    // Fallback content if no specific data is found
    const capabilityTitle = (capabilityId || 'Capability').split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    if (!service) return <Navigate to="/services" replace />;

    return (
        <div className="bg-white min-h-screen">
            <SEOHead title={`${capabilityTitle} | ${service.title}`} description={`Deep-dive technical specification for ${capabilityTitle} within our ${service.title} portfolio.`} />

            {/* Technical Detail Hero */}
            <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 bg-brand-black text-white overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,160,89,0.1)_0%,transparent_50%)]"></div>
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
                    <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-brand-primary mb-12 animate-fade-up">
                        <Link to="/services" className="hover:text-white transition-colors">Services</Link>
                        <ChevronRight size={14} />
                        <Link to={service.path} className="hover:text-white transition-colors">{service.title}</Link>
                        <ChevronRight size={14} />
                        <span className="text-white/50">{capabilityTitle}</span>
                    </div>
                    <div className="max-w-4xl animate-fade-up">
                        <span className="text-brand-primary font-bold tracking-[0.5em] uppercase text-[10px] mb-8 block">Capability Specification</span>
                        <h1 className="text-5xl md:text-8xl font-serif font-black mb-12 tracking-tighter leading-none uppercase">
                            {capabilityTitle}.
                        </h1>
                        <p className="text-xl md:text-2xl text-white/70 font-medium leading-relaxed max-w-2xl">
                            Engineering the structural boundaries of {(capabilityTitle || '').toLowerCase()} to deliver maximum institutional resilience.
                        </p>
                    </div>
                </div>
            </section>


            {/* Depth Content */}
            <section className="py-40 bg-white">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-start">
                        <div className="reveal">
                            <h2 className="text-4xl md:text-6xl font-serif text-brand-black font-black mb-10 leading-none">The Technical <br />Mandate.</h2>
                            <div className="prose prose-lg text-slate-600 font-medium leading-relaxed space-y-8">
                                <p>
                                    As a core pillar of the <strong className="text-brand-black">{service.title}</strong> portfolio, this capability is engineered to address the radical volatility of the modern digital landscape. We utilize proprietary logic to ensure that every deployment is logically isolated, high-performing, and institutionally secure.
                                </p>
                                <p>
                                    Our approach to <strong className="text-brand-black">{capabilityTitle}</strong> focuses on structural longevity. We build systems that are not only compliant with current global standards but are architecturally prepared for post-quantum cryptographic shifts and radical scalability requirements.
                                </p>
                            </div>
                            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-px bg-slate-100 border border-slate-100">
                                {[
                                    { title: 'Zero-Trust Frameworks', icon: Shield },
                                    { title: 'Modular Architecture', icon: Server },
                                    { title: 'AI-Enhanced Logic', icon: Cpu },
                                    { title: 'Global Grid Sync', icon: Globe }
                                ].map((node, i) => (
                                    <div key={i} className="bg-white p-10 flex items-center gap-6 group hover:bg-brand-black transition-all">
                                        <node.icon size={24} className="text-brand-primary transition-transform group-hover:scale-110" />
                                        <span className="text-xs font-black uppercase tracking-widest text-slate-900 group-hover:text-white transition-colors">{node.title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="reveal delay-200">
                            <div className="bg-slate-50 border border-slate-100 p-12 lg:p-16">
                                <span className="text-brand-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-8 block">Operational Benchmarks</span>
                                <div className="space-y-12">
                                    {[
                                        { label: 'Security Density', val: 'High-Level IV' },
                                        { label: 'Integration Speed', val: '< 24 Hours' },
                                        { label: 'Network Latency', val: 'Sub-2ms' },
                                        { label: 'Compliance Grade', val: 'Institutional' }
                                    ].map((stat, i) => (
                                        <div key={i} className="flex justify-between items-end border-b border-slate-200 pb-4">
                                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">{stat.label}</span>
                                            <span className="text-brand-black font-serif font-black text-xl">{stat.val}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-16 space-y-6">
                                    <Button variant="primary" size="lg" className="w-full shadow-gold">Initiate Capability Brief</Button>
                                    <a
                                        href="/documents/TechnicalBrief.pdf"
                                        className="flex items-center justify-center gap-3 w-full py-5 border border-brand-black font-black uppercase tracking-widest text-xs hover:bg-brand-black hover:text-white transition-all group"
                                    >
                                        <FileDown size={18} /> Download Capability Spec
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Implementation Lifecycle */}
            <section className="py-40 bg-slate-900 text-white">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
                    <h2 className="text-4xl md:text-7xl font-serif font-black uppercase mb-32 leading-none">The Deployment <span className="text-gold-gradient italic">Cycle.</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-white/10 border border-white/10">
                        {[
                            { step: '01', title: 'Institutional Audit', body: 'Deep-dive assessment of domain requirements.' },
                            { step: '02', title: 'Strategic Roadmap', body: 'Bespoke architectural mapping and resource sync.' },
                            { step: '03', title: 'Precision Launch', body: 'Mil-spec deployment with zero technical debt.' },
                            { step: '04', title: 'Legacy Governance', body: 'Perpetual monitoring and structural evolution.' }
                        ].map((node, i) => (
                            <div key={i} className="p-12 text-left hover:bg-white/5 transition-colors">
                                <div className="text-4xl font-serif font-black text-brand-primary mb-8">{node.step}</div>
                                <h4 className="text-xl font-serif font-black uppercase mb-4 tracking-tighter">{node.title}</h4>
                                <p className="text-sm text-white/50 leading-relaxed font-medium">{node.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CapabilityDetail;