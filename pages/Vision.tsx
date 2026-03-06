import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Globe, Zap, Users, Target, TrendingUp } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';
import Button from '../components/UI/Button';

const Vision: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('active'); });
        }, { threshold: 0.05, rootMargin: '0px 0px -50px 0px' });

        const elements = document.querySelectorAll('.reveal');
        elements.forEach((el) => observer.observe(el));

        const fallback = setTimeout(() => {
            elements.forEach((el) => el.classList.add('active'));
        }, 2000);

        return () => { observer.disconnect(); clearTimeout(fallback); };
    }, []);

    const differentiators = [
        {
            icon: Zap,
            title: "Future-First Technology Philosophy",
            description: "Onsective champions innovation by integrating emerging technologies with user-centric design and performance optimization."
        },
        {
            icon: Target,
            title: "Creative Tech + Strategic Insight",
            description: "Combining technical expertise with branding and storytelling to craft solutions that resonate with audiences."
        },
        {
            icon: Users,
            title: "Remote-First Collaborative Culture",
            description: "Built for a distributed workforce that thrives on flexibility, collaboration, and diverse perspectives."
        },
        {
            icon: Globe,
            title: "Impactful Digital Solutions",
            description: "From custom platforms and applications to compelling visual media, Onsective drives meaningful digital engagement."
        },
        {
            icon: TrendingUp,
            title: "Commitment to Growth",
            description: "Empowering clients and team members to evolve through continuous learning, experimentation, and measurable results."
        }
    ];

    return (
        <>
            <SEOHead pageKey="about" />

            {/* 1. HERO - Institutional Vision */}
            <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 bg-brand-black text-white overflow-hidden min-h-[60vh] flex items-center">
                <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop')] bg-cover"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/80 to-transparent"></div>

                <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 w-full reveal">
                    <span className="text-brand-primary font-bold tracking-[0.5em] uppercase text-[10px] mb-6 block">The Baseline</span>
                    <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif font-black mb-8 tracking-tighter leading-none">
                        INSTITUTIONAL <br /><span className="text-gold-gradient italic">VISION.</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-white/70 font-medium max-w-4xl leading-relaxed">
                        Founded in 2026, Onsective Inc. is an innovative technology firm dedicated to reshaping how businesses connect with audiences in the digital age. Rooted in creativity, data-driven strategy, and cutting-edge tech solutions, Onsective partners with brands, agencies, and enterprises to deliver impactful digital products and immersive experiences.
                    </p>
                </div>
            </section>

            {/* 2. THE CORE METHODOLOGY */}
            <section className="py-24 md:py-32 bg-white">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
                        <div className="reveal">
                            <h2 className="text-4xl md:text-6xl font-serif text-brand-black mb-10 leading-[1.1]">The Core <span className="text-gold-gradient italic">Identity.</span></h2>
                            <p className="text-slate-500 text-lg md:text-xl leading-relaxed font-medium">
                                At its core, Onsective blends technology with storytelling—building scalable systems, dynamic digital content, and strategic tech solutions that drive engagement, growth, and measurable outcomes.
                            </p>
                            <p className="text-slate-500 text-lg md:text-xl leading-relaxed mt-6 font-medium">
                                With a focus on agility and forward-thinking innovation, the company continually pushes boundaries in software, digital media, and interactive design.
                            </p>
                        </div>
                        <div className="relative reveal delay-200">
                            <div className="aspect-square bg-slate-100 overflow-hidden shadow-premium">
                                <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100" alt="Technology Sphere" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. WHAT SETS US APART */}
            <section className="py-24 md:py-32 bg-slate-50">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                    <div className="text-center mb-20 reveal">
                        <span className="text-brand-primary font-bold tracking-[0.5em] uppercase text-[10px] mb-6 block">Our Defensibility</span>
                        <h2 className="text-4xl md:text-6xl font-serif text-brand-black leading-none">WHAT SETS <span className="text-brand-primary italic">ONSECTIVE</span> APART.</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                        {differentiators.map((diff, idx) => (
                            <div key={idx} className={`bg-white p-10 shadow-sm border border-slate-100 hover:border-brand-primary/50 transition-all duration-500 reveal delay-${idx * 100} group`}>
                                <div className="text-brand-primary mb-8 group-hover:scale-110 transition-transform">
                                    <diff.icon size={40} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl md:text-2xl font-serif font-black text-brand-black mb-4 group-hover:text-brand-primary transition-colors">{diff.title}</h3>
                                <p className="text-slate-500 leading-relaxed font-medium">
                                    {diff.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. CTA */}
            <section className="py-24 bg-brand-black text-white text-center">
                <div className="max-w-4xl mx-auto px-6 reveal">
                    <h2 className="text-4xl md:text-6xl font-serif mb-8">Ready to <span className="text-gold-gradient italic">Reshape</span> Your Future?</h2>
                    <Link to="/contact">
                        <Button variant="primary" size="lg" className="px-12 uppercase tracking-widest text-[10px] font-black">
                            Initiate Partnership
                        </Button>
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Vision;
