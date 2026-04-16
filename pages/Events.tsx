import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, ArrowRight, Filter } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';
import { EVENTS } from '../constants';

const Events: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');

  const filteredEvents = EVENTS.filter(e => e.type === activeTab);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -80px 0px' }
    );
    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [activeTab]);

  return (
    <>
      <SEOHead
        title="Events & Summits | Onsective"
        description="Join Onsective at our upcoming global summits, webinars, and exclusive executive roundtables."
      />

      {/* ===== HERO ===== */}
      <section className="bg-[#0d2b45] pt-40 pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-10 h-px bg-[#c1912f]" />
            <span className="text-[#c1912f] font-semibold text-xs tracking-[0.25em] uppercase font-['Plus_Jakarta_Sans']">Events</span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-['Playfair_Display'] font-bold text-white tracking-tight leading-[0.95] mb-6">
            Events &amp; Summits
          </h1>
          <p className="text-lg md:text-xl text-white/50 max-w-2xl leading-relaxed font-['Plus_Jakarta_Sans']">
            Where industry leaders converge to shape the future of business and technology. Exclusive roundtables, global summits, and thought leadership forums.
          </p>
        </div>
      </section>

      {/* ===== TABS & CONTENT ===== */}
      <section className="py-28 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">

          {/* Tab Filter */}
          <div className="flex items-center justify-center gap-4 mb-20">
            <Filter size={16} className="text-[#64748b]" />
            <div className="flex border border-[#e2e8f0] rounded-lg overflow-hidden">
              <button
                onClick={() => setActiveTab('upcoming')}
                className={`px-10 py-3.5 text-sm font-semibold transition-all duration-200 font-['Plus_Jakarta_Sans'] ${
                  activeTab === 'upcoming'
                    ? 'bg-[#c1912f] text-white'
                    : 'bg-white text-[#64748b] hover:bg-[#f1f5f9]'
                }`}
              >
                Upcoming
              </button>
              <button
                onClick={() => setActiveTab('past')}
                className={`px-10 py-3.5 text-sm font-semibold transition-all duration-200 font-['Plus_Jakarta_Sans'] ${
                  activeTab === 'past'
                    ? 'bg-[#c1912f] text-white'
                    : 'bg-white text-[#64748b] hover:bg-[#f1f5f9]'
                }`}
              >
                Past Events
              </button>
            </div>
          </div>

          {/* Event Cards */}
          <div className="space-y-8">
            {filteredEvents.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-[#64748b] text-lg font-['Plus_Jakarta_Sans']">No events found in this category.</p>
              </div>
            ) : (
              filteredEvents.map((event, idx) => (
                <div
                  key={event.id}
                  className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0 flex flex-col md:flex-row bg-white border border-[#e2e8f0] overflow-hidden group hover:border-[#c1912f]/30 hover:shadow-sm rounded-lg"
                  style={{ transitionDelay: `${idx * 150}ms` }}
                >
                  <div className="md:w-1/3 h-64 md:h-auto overflow-hidden relative">
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-[#c1912f] text-white font-semibold px-3 py-1 text-xs rounded capitalize font-['Plus_Jakarta_Sans']">
                        {event.type}
                      </span>
                    </div>
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex flex-wrap items-center gap-6 text-sm text-[#64748b] mb-4 font-medium font-['Plus_Jakarta_Sans']">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} className="text-[#c1912f]" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={14} className="text-[#c1912f]" />
                        {event.location}
                      </div>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-['Playfair_Display'] text-[#1a1a2e] mb-4 group-hover:text-[#c1912f] transition-colors font-bold">
                      {event.title}
                    </h3>
                    <p className="text-[#64748b] text-sm mb-8 leading-relaxed font-['Plus_Jakarta_Sans']">
                      {event.description}
                    </p>
                    <Link
                      to={`/events/${event.id}`}
                      className="self-start inline-flex items-center gap-2 text-sm font-semibold text-[#c1912f] hover:brightness-110 transition-all font-['Plus_Jakarta_Sans']"
                    >
                      View Details <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-28 md:py-40 bg-[#0d2b45]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0">
          <h2 className="text-4xl md:text-6xl font-['Playfair_Display'] text-white mb-6 font-bold">Interested in Hosting?</h2>
          <p className="text-white/40 text-lg max-w-2xl mx-auto mb-12 leading-relaxed font-['Plus_Jakarta_Sans']">
            Partner with Onsective to co-host exclusive summits, roundtables, and thought leadership events for your organization.
          </p>
          <Link to="/contact">
            <span className="inline-flex items-center gap-3 px-10 py-4 bg-[#c1912f] text-white font-semibold text-sm font-['Plus_Jakarta_Sans'] hover:brightness-110 transition-all cursor-pointer">
              Get in Touch <ArrowRight size={16} />
            </span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Events;
