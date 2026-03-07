import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Users, Clock } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';
import Button from '../components/UI/Button';
import { EVENTS } from '../data/content';

const Events: React.FC = () => {
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
        <div className="bg-slate-50 min-h-screen">
            <SEOHead
                title="Institutional Engagements | Onsective Global Calendar"
                description="Explore upcoming executive briefings, technical summits, and institutional engagement events hosted by Onsective."
            />

            {/* Events Hero */}
            <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 bg-brand-black text-white overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-black via-[#0f172a] to-brand-black z-0"></div>
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
                    <div className="max-w-4xl animate-fade-up">
                        <span className="text-brand-primary font-bold tracking-[0.6em] uppercase text-[10px] mb-8 block">Global Engagements</span>
                        <h1 className="text-5xl sm:text-7xl md:text-9xl font-serif font-black mb-12 tracking-tighter leading-[0.85]">
                            STRATEGIC<br /><span className="text-gold-gradient italic">MOMENTS.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/50 max-w-2xl font-medium leading-relaxed">
                            Join the world's most sophisticated architectural minds at our exclusive technical summits and executive briefings.
                        </p>
                    </div>
                </div>
            </section>

            {/* Events Grid */}
            <section className="py-40 bg-slate-50">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {EVENTS.map((event) => (
                            <div key={event.id} className="group bg-white border border-slate-100 hover:border-brand-primary transition-all duration-700 reveal overflow-hidden shadow-sm hover:shadow-2xl">
                                <div className="grid grid-cols-1 md:grid-cols-12 h-full">
                                    <div className="md:col-span-5 relative overflow-hidden">
                                        <img src={event.image} alt={event.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" />
                                        <div className="absolute top-6 left-6 bg-brand-black text-white p-4 text-center min-w-[70px]">
                                            <div className="text-2xl font-serif font-black text-brand-primary leading-none mb-1">{event.date.split(' ')[0]}</div>
                                            <div className="text-[9px] font-black uppercase tracking-widest">{event.date.split(' ')[1]}</div>
                                        </div>
                                    </div>
                                    <div className="md:col-span-7 p-10 flex flex-col justify-between">
                                        <div>
                                            <div className="flex items-center gap-3 text-brand-primary mb-6">
                                                <Globe size={16} />
                                                <span className="text-[10px] font-black uppercase tracking-widest">{event.location}</span>
                                            </div>
                                            <h3 className="text-2xl font-serif font-black text-brand-black mb-6 uppercase tracking-tight group-hover:text-brand-primary transition-colors">{event.title}</h3>
                                            <p className="text-sm text-slate-500 font-medium leading-relaxed mb-10">{event.description}</p>
                                        </div>
                                        <div className="flex items-center justify-between pt-8 border-t border-slate-100">
                                            <div className="flex items-center gap-3">
                                                <Clock size={14} className="text-slate-300" />
                                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">09:00 AM EST</span>
                                            </div>
                                            <Link to={`/events/${event.id}`}>
                                                <Button variant="ghost" className="p-0 text-brand-black font-black uppercase text-[10px] tracking-[0.3em] flex items-center gap-3">
                                                    Secure Invitation <ArrowRight size={14} />
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter / Notifications */}
            <section className="py-40 bg-brand-black text-white relative">
                <div className="max-w-4xl mx-auto px-6 text-center reveal">
                    <Users size={64} className="mx-auto text-brand-primary mb-12" />
                    <h2 className="text-4xl md:text-6xl font-serif font-black mb-10 leading-none uppercase">Executive <br /><span className="text-gold-gradient italic">Briefing List.</span></h2>
                    <p className="text-lg md:text-xl text-white/50 font-medium mb-12 leading-relaxed">
                        Register your institutional credentials to receive private invitations to our upcoming technical summits and sovereignty workshops.
                    </p>
                    <div className="max-w-md mx-auto">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="Institutional Email"
                                className="flex-1 bg-white/5 border border-white/10 px-8 py-4 text-xs font-black uppercase tracking-widest focus:outline-none focus:border-brand-primary transition-all"
                            />
                            <Button variant="primary" className="px-10">Register</Button>
                        </div>
                        <p className="text-[9px] text-white/20 mt-6 font-medium uppercase tracking-widest">Subject to institutional validation and vetting.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Events;