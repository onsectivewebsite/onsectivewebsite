import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Users, Calendar, MessageSquare, ArrowRight, Heart, Globe2 } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';

const Alumni: React.FC = () => {
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
  }, []);

  const features = [
    {
      icon: Users,
      title: 'Alumni Directory',
      description: 'Find former colleagues and expand your professional network across our global alumni base spanning 7+ countries and multiple industries.'
    },
    {
      icon: Calendar,
      title: 'Exclusive Events',
      description: 'Invitations to reunions, networking mixers, thought-leadership forums, and annual gatherings in major cities worldwide.'
    },
    {
      icon: MessageSquare,
      title: 'Mentorship Program',
      description: 'Give back by mentoring the next generation of Onsective talent and shaping the future of institutional technology consulting.'
    }
  ];

  return (
    <>
      <SEOHead title="Alumni Network | Onsective" description="Connect with former colleagues and stay part of the Onsective family. A global community of leaders." />

      {/* ===== HERO ===== */}
      <section className="bg-[#0d2b45] pt-40 pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-10 h-px bg-[#c1912f]" />
            <span className="text-[#c1912f] font-semibold text-xs tracking-[0.25em] uppercase font-['Plus_Jakarta_Sans']">Community</span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-['Playfair_Display'] font-bold text-white tracking-tight leading-[0.95] mb-6">
            Alumni Network
          </h1>
          <p className="text-lg md:text-xl text-white/50 max-w-2xl leading-relaxed font-['Plus_Jakarta_Sans']">
            Once Onsective, always Onsective. A global community of leaders, innovators, and lifelong collaborators.
          </p>
        </div>
      </section>

      {/* ===== 3 FEATURE CARDS ===== */}
      <section className="py-28 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0">
            <span className="text-[#c1912f] text-xs font-semibold uppercase tracking-wider mb-4 block font-['Plus_Jakarta_Sans']">Stay Connected</span>
            <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] text-[#1a1a2e] font-bold">What the Network Offers</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feat, idx) => (
              <div
                key={idx}
                className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0 bg-white border border-[#e2e8f0] p-10 rounded-lg text-center hover:border-[#c1912f]/30 hover:shadow-sm"
                style={{ transitionDelay: `${idx * 120}ms` }}
              >
                <div className="w-14 h-14 bg-[#f1f5f9] flex items-center justify-center mx-auto mb-8 rounded-lg border border-[#e2e8f0]">
                  <feat.icon size={26} className="text-[#c1912f]" />
                </div>
                <h3 className="text-2xl font-['Playfair_Display'] font-bold text-[#1a1a2e] mb-4">{feat.title}</h3>
                <p className="text-[#64748b] text-sm leading-relaxed font-['Plus_Jakarta_Sans']">{feat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS STRIP ===== */}
      <section className="py-16 bg-[#f1f5f9] border-y border-[#e2e8f0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0">
            {[
              { icon: Globe2, value: '7+ Countries', label: 'Alumni Presence' },
              { icon: Heart, value: '500+', label: 'Active Alumni' },
              { icon: Calendar, value: '12+', label: 'Annual Events' },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <stat.icon size={24} className="text-[#c1912f] mb-3" />
                <span className="text-3xl font-['Playfair_Display'] font-bold text-[#1a1a2e]">{stat.value}</span>
                <span className="text-sm text-[#64748b] mt-1 font-['Plus_Jakarta_Sans']">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-28 md:py-40 bg-[#0d2b45]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0">
          <h2 className="text-4xl md:text-6xl font-['Playfair_Display'] font-bold mb-6 text-white">
            Reconnect with <span className="text-[#c1912f]">Onsective.</span>
          </h2>
          <p className="text-white/40 text-lg mb-12 max-w-2xl mx-auto leading-relaxed font-['Plus_Jakarta_Sans']">
            Access the alumni portal to update your profile, browse the directory, and register for upcoming events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#c1912f] text-white font-semibold text-sm font-['Plus_Jakarta_Sans'] hover:brightness-110 transition-all"
            >
              Alumni Portal Login <ArrowRight size={16} />
            </Link>
            <Link
              to="/careers"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 border border-white/10 text-white font-semibold text-sm font-['Plus_Jakarta_Sans'] hover:bg-white/10 transition-all"
            >
              Explore Careers <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Alumni;
