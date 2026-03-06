import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';
import { EVENTS } from '../constants';
import { ASSETS } from '../src/assets';

const Events: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');

    const filteredEvents = EVENTS.filter(e => e.type === activeTab);

    return (
        <>
            <SEOHead
                title="Global Events & Summits"
                description="Join Onsective at our upcoming global summits, webinars, and exclusive roundtables."
            />

            {/* Header */}
            <section className="pt-40 pb-20 bg-brand-black text-white px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img src={ASSETS.BG_EVENTS} className="w-full h-full object-cover" />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto text-center">
                    <span className="text-brand-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block animate-fade-up">Connect & Inspire</span>
                    <h1 className="text-5xl md:text-7xl font-serif mb-8 animate-fade-up delay-100">Global Summits</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light animate-fade-up delay-200">
                        Where industry leaders converge to shape the future of business and technology.
                    </p>
                </div>
            </section>

            {/* Tabs & Content */}
            <section className="py-20 bg-slate-50 min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Tabs */}
                    <div className="flex justify-center mb-16 animate-fade-up delay-300">
                        <div className="flex space-x-1 bg-white p-1 rounded-full shadow-lg border border-gray-100">
                            <button
                                onClick={() => setActiveTab('upcoming')}
                                className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 ${activeTab === 'upcoming' ? 'bg-brand-black text-white' : 'text-gray-500 hover:text-brand-black'}`}
                            >
                                Upcoming
                            </button>
                            <button
                                onClick={() => setActiveTab('past')}
                                className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 ${activeTab === 'past' ? 'bg-brand-black text-white' : 'text-gray-500 hover:text-brand-black'}`}
                            >
                                Past Events
                            </button>
                        </div>
                    </div>

                    {/* Calendar Grid Visual */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                        {/* Event List */}
                        <div className="lg:col-span-12 space-y-8">
                            {filteredEvents.length === 0 ? (
                                <div className="text-center py-20 text-gray-500 italic">No events found in this category.</div>
                            ) : (
                                filteredEvents.map((event, idx) => (
                                    <div key={event.id} className={`flex flex-col md:flex-row bg-white rounded-none border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group animate-fade-up delay-${idx * 100}`}>
                                        <div className="md:w-1/3 h-64 md:h-auto overflow-hidden relative">
                                            <div className="absolute top-0 left-0 bg-brand-primary text-brand-black font-bold px-4 py-2 z-10 text-xs uppercase tracking-widest">
                                                {event.type}
                                            </div>
                                            <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                        </div>
                                        <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center border-l-0 md:border-l-4 border-transparent group-hover:border-brand-primary transition-all">
                                            <div className="flex items-center gap-6 text-sm text-gray-500 mb-4 font-medium uppercase tracking-wider">
                                                <div className="flex items-center gap-2"><Calendar size={16} className="text-brand-primary" /> {event.date}</div>
                                                <div className="flex items-center gap-2"><MapPin size={16} className="text-brand-primary" /> {event.location}</div>
                                            </div>
                                            <h3 className="text-3xl font-serif text-brand-black mb-4 group-hover:text-brand-primary transition-colors">{event.title}</h3>
                                            <p className="text-gray-600 font-light text-lg mb-8">{event.description}</p>
                                            <Link to={`/events/${event.id}`} className="self-start text-brand-black border-b-2 border-brand-black pb-1 text-sm font-bold uppercase tracking-widest hover:text-brand-primary hover:border-brand-primary transition-all">
                                                View Agenda
                                            </Link>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Events;