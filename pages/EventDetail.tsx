import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, MapPin, ArrowLeft, Clock, Users, Building, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';
import { EVENTS } from '../constants';

const EventDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const event = EVENTS.find(e => e.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);

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
  }, [id]);

  if (!event) {
    return <Navigate to="/events" replace />;
  }

  const AGENDA = [
    { time: '09:00 AM', title: 'Executive Briefing & Breakfast', speaker: 'Onsective Partners' },
    { time: '10:30 AM', title: 'The Sovereign Architecture Dictate', speaker: 'Rishabh, Founder' },
    { time: '12:00 PM', title: 'Institutional Networking Lunch', speaker: '-' },
    { time: '02:00 PM', title: 'AI Automation at Scale', speaker: 'Shabir Ahmad, Principal Architect' },
    { time: '04:00 PM', title: 'Roundtable: The Boardroom to Byte Mandate', speaker: 'Kavya, Global Strategy' },
  ];

  return (
    <>
      <SEOHead
        title={`${event.title} | Onsective Events`}
        description={event.description}
      />

      {/* ===== HERO ===== */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <img src={event.image} alt={event.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d2b45] via-[#0d2b45]/70 to-[#0d2b45]/30" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16 pb-20 pt-40">
          <Link to="/events" className="inline-flex items-center gap-2 text-[#c1912f] text-sm font-medium hover:brightness-110 transition-all mb-8 font-['Plus_Jakarta_Sans']">
            <ArrowLeft size={16} /> Back to Events
          </Link>
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-[#c1912f] text-white text-xs font-semibold rounded capitalize font-['Plus_Jakarta_Sans']">{event.type}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-['Playfair_Display'] font-bold text-white tracking-tight leading-[0.95] mb-8">
            {event.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-white/50 font-['Plus_Jakarta_Sans']">
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-[#c1912f]" />
              {event.date}
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-[#c1912f]" />
              {event.location}
            </div>
          </div>
        </div>
      </section>

      {/* ===== DETAILS + REGISTRATION ===== */}
      <section className="py-28 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 animate-on-scroll opacity-0 -translate-x-8 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-x-0">
              <span className="text-[#c1912f] text-xs font-semibold uppercase tracking-wider mb-4 block font-['Plus_Jakarta_Sans']">Overview</span>
              <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] text-[#1a1a2e] mb-10 font-bold">Executive Summary</h2>
              <p className="text-base text-[#64748b] leading-relaxed mb-6 font-['Plus_Jakarta_Sans']">
                {event.description}
              </p>
              <p className="text-base text-[#64748b] leading-relaxed mb-6 font-['Plus_Jakarta_Sans']">
                This exclusive engagement is designed for senior leadership and technical architects seeking to govern their institutional future. We will explore predictive analytics, sovereign infrastructure, and the tactical deployment of AI within enterprise pipelines.
              </p>
              <p className="text-base text-[#64748b] leading-relaxed font-['Plus_Jakarta_Sans']">
                Attendance is strictly limited to ensure high-fidelity discourse and actionable strategic alignment across all participants.
              </p>
            </div>

            {/* Registration Card */}
            <div className="lg:col-span-4 animate-on-scroll opacity-0 translate-x-8 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-x-0">
              <div className="bg-white border border-[#e2e8f0] p-8 sticky top-32 rounded-lg shadow-sm">
                <h3 className="text-xl font-['Playfair_Display'] text-[#1a1a2e] mb-8 font-bold">Secure Your Access</h3>
                <div className="space-y-6 mb-10">
                  <div className="flex items-center gap-4 text-[#64748b]">
                    <Clock className="text-[#c1912f] shrink-0" size={20} />
                    <div>
                      <div className="font-semibold text-xs uppercase tracking-wider text-[#1a1a2e] font-['Plus_Jakarta_Sans']">Duration</div>
                      <div className="text-sm font-['Plus_Jakarta_Sans']">Full Day (9:00 AM - 6:00 PM)</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-[#64748b]">
                    <Users className="text-[#c1912f] shrink-0" size={20} />
                    <div>
                      <div className="font-semibold text-xs uppercase tracking-wider text-[#1a1a2e] font-['Plus_Jakarta_Sans']">Audience</div>
                      <div className="text-sm font-['Plus_Jakarta_Sans']">C-Suite &amp; SVP Executives</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-[#64748b]">
                    <Building className="text-[#c1912f] shrink-0" size={20} />
                    <div>
                      <div className="font-semibold text-xs uppercase tracking-wider text-[#1a1a2e] font-['Plus_Jakarta_Sans']">Venue</div>
                      <div className="text-sm font-['Plus_Jakarta_Sans']">{event.location}</div>
                    </div>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="block w-full py-4 bg-[#c1912f] text-white text-sm font-semibold text-center hover:brightness-110 transition-all rounded font-['Plus_Jakarta_Sans']"
                >
                  Request Invitation
                </Link>
                <p className="text-center text-xs text-[#64748b] mt-4 font-['Plus_Jakarta_Sans']">
                  Subject to Approval
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== AGENDA TABLE ===== */}
      <section className="py-28 md:py-40 bg-[#f1f5f9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <span className="text-[#c1912f] text-xs font-semibold uppercase tracking-wider mb-4 block font-['Plus_Jakarta_Sans']">Schedule</span>
            <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] text-[#1a1a2e] font-bold">The Agenda</h2>
          </div>

          <div className="max-w-4xl mx-auto overflow-hidden rounded-lg border border-[#e2e8f0]">
            <table className="w-full">
              <thead>
                <tr className="bg-[#0d2b45] text-white">
                  <th className="text-left py-4 px-6 text-xs font-semibold uppercase tracking-wider font-['Plus_Jakarta_Sans']">Time</th>
                  <th className="text-left py-4 px-6 text-xs font-semibold uppercase tracking-wider font-['Plus_Jakarta_Sans']">Session</th>
                  <th className="text-left py-4 px-6 text-xs font-semibold uppercase tracking-wider font-['Plus_Jakarta_Sans'] hidden md:table-cell">Speaker</th>
                </tr>
              </thead>
              <tbody>
                {AGENDA.map((item, idx) => (
                  <tr
                    key={idx}
                    className={`animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0 ${idx % 2 === 0 ? 'bg-white' : 'bg-[#f1f5f9]'} hover:bg-[#c1912f]/5 transition-colors`}
                    style={{ transitionDelay: `${idx * 80}ms` }}
                  >
                    <td className="py-5 px-6 text-[#c1912f] font-bold text-sm font-['Playfair_Display'] whitespace-nowrap">{item.time}</td>
                    <td className="py-5 px-6">
                      <div className="text-[#1a1a2e] font-semibold text-sm font-['Plus_Jakarta_Sans']">{item.title}</div>
                      <div className="text-xs text-[#64748b] md:hidden mt-1 font-['Plus_Jakarta_Sans']">{item.speaker !== '-' && item.speaker}</div>
                    </td>
                    <td className="py-5 px-6 text-sm text-[#64748b] font-['Plus_Jakarta_Sans'] hidden md:table-cell">
                      {item.speaker !== '-' ? item.speaker : ''}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="max-w-4xl mx-auto mt-16 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#c1912f] text-white text-sm font-semibold hover:brightness-110 transition-all rounded font-['Plus_Jakarta_Sans']"
            >
              Register Interest <ArrowRight size={14} />
            </Link>
            <Link
              to="/events"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#1a1a2e] text-[#1a1a2e] text-sm font-semibold hover:bg-[#1a1a2e] hover:text-white transition-all rounded font-['Plus_Jakarta_Sans']"
            >
              View All Events
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventDetail;
