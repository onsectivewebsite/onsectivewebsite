import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, MapPin, ArrowLeft, Clock, Users, Building } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';
import { EVENTS } from '../constants';
import Button from '../components/UI/Button';

const EventDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const event = EVENTS.find(e => e.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!event) {
        return <Navigate to="/events" replace />;
    }

    return (
        <>
            <SEOHead
                title={`${event.title} | Onsective Summits`}
                description={event.description}
            />

            {/* 1. Hero Section */}
            <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 bg-brand-black text-white overflow-hidden min-h-[60vh] flex items-center">
                <div className="absolute inset-0 opacity-20">
                    <img src={event.image} alt={event.title} className="w-full h-full object-cover grayscale" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/80 to-transparent"></div>
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 w-full">
                    <Link to="/events" className="inline-flex items-center gap-2 text-brand-primary text-[10px] font-black uppercase tracking-[0.3em] hover:text-white transition-colors mb-8 animate-fade-up">
                        <ArrowLeft size={16} /> Back to Events
                    </Link>

                    <div className="flex flex-col gap-6 animate-fade-up delay-100">
                        <div className="inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.4em] text-white/60 mb-2">
                            <span className="bg-brand-primary text-brand-black px-3 py-1">{event.type}</span>
                        </div>

                        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-black tracking-tighter leading-[1.1] max-w-5xl">
                            {event.title.toUpperCase()}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 md:gap-12 mt-6 text-sm font-medium uppercase tracking-[0.2em] text-gray-300">
                            <div className="flex items-center gap-3">
                                <Calendar size={20} className="text-brand-primary" />
                                {event.date}
                            </div>
                            <div className="flex items-center gap-3">
                                <MapPin size={20} className="text-brand-primary" />
                                {event.location}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Executive Summary */}
            <section className="py-24 bg-white">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        <div className="lg:col-span-8">
                            <h2 className="text-3xl md:text-5xl font-serif text-brand-black mb-8">Executive <span className="text-brand-primary italic">Summary.</span></h2>
                            <p className="text-lg text-slate-600 leading-relaxed font-light mb-8">
                                {event.description}
                            </p>
                            <p className="text-lg text-slate-600 leading-relaxed font-light mb-8">
                                This exclusive engagement is designed for senior leadership and technical architects seeking to govern their institutional future. We will explore predictive analytics, sovereign infrastructure, and the tactical deployment of AI within enterprise pipelines.
                            </p>
                            <p className="text-lg text-slate-600 leading-relaxed font-light">
                                Attendance is strictly limited to ensure high-fidelity discourse and actionable strategic alignment.
                            </p>
                        </div>

                        {/* Registration Card */}
                        <div className="lg:col-span-4">
                            <div className="bg-slate-50 border border-slate-200 p-8 shadow-premium sticky top-32">
                                <h3 className="text-2xl font-serif text-brand-black mb-6">Secure Your Access</h3>
                                <div className="space-y-6 mb-8">
                                    <div className="flex items-center gap-4 text-slate-600">
                                        <Clock className="text-brand-primary" size={24} />
                                        <div>
                                            <div className="font-bold text-xs uppercase tracking-widest text-brand-black">Duration</div>
                                            <div className="text-sm">Full Day (9:00 AM - 6:00 PM)</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 text-slate-600">
                                        <Users className="text-brand-primary" size={24} />
                                        <div>
                                            <div className="font-bold text-xs uppercase tracking-widest text-brand-black">Audience</div>
                                            <div className="text-sm">C-Suite & SVP Executives</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 text-slate-600">
                                        <Building className="text-brand-primary" size={24} />
                                        <div>
                                            <div className="font-bold text-xs uppercase tracking-widest text-brand-black">Venue</div>
                                            <div className="text-sm">{event.location}</div>
                                        </div>
                                    </div>
                                </div>

                                <Link to="/contact">
                                    <Button variant="primary" className="w-full py-4 text-[10px] font-black tracking-[0.3em]">
                                        REQUEST INVITATION
                                    </Button>
                                </Link>
                                <p className="text-center text-xs text-slate-600 mt-4 font-medium uppercase tracking-wider">
                                    Subject to Approval
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. The Agenda */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                    <h2 className="text-4xl md:text-5xl font-serif text-brand-black mb-16 text-center">Global <span className="text-brand-primary italic">Agenda.</span></h2>

                    <div className="max-w-4xl mx-auto space-y-6">
                        {[
                            { time: '09:00 AM', title: 'Executive Briefing & Breakfast', speaker: 'Onsective Partners' },
                            { time: '10:30 AM', title: 'The Sovereign Architecture Dictate', speaker: 'Rishabh, Founder' },
                            { time: '12:00 PM', title: 'Institutional Networking Lunch', speaker: '-' },
                            { time: '02:00 PM', title: 'AI Automation at Scale', speaker: 'Shabir Ahmad, Principal Architect' },
                            { time: '04:00 PM', title: 'Roundtable: The Boardroom to Byte Mandate', speaker: 'Kavya, Global Strategy' }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start md:items-center border border-slate-100 hover:border-brand-primary transition-all shadow-sm">
                                <div className="w-40 shrink-0 text-brand-primary font-black tracking-widest text-lg">
                                    {item.time}
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-xl md:text-2xl font-serif text-brand-black mb-2">{item.title}</h4>
                                    <div className="text-sm text-slate-700 font-bold uppercase tracking-wider">
                                        {item.speaker !== '-' && <span className="text-brand-primary">Speaker: </span>}
                                        {item.speaker}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default EventDetail;
