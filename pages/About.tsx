import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Layers, Settings, ChevronRight } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';
import { LEADERSHIP_TEAM, GLOBAL_OFFICES } from '../constants';

// Animated counter hook
const useCounter = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [started, end, duration]);

  return { count, ref };
};

const About: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.animate-on-scroll, .card-stagger-1, .card-stagger-2, .card-stagger-3, .card-stagger-4, .card-stagger-5, .slide-in-left, .slide-in-right, .scale-in, .stagger-3d-enter').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const counter7 = useCounter(7, 1800);
  const counter120 = useCounter(120, 2200);
  const counter500 = useCounter(500, 2600);
  const counter10 = useCounter(10, 1400);

  const APPROACH_PILLARS = [
    {
      icon: Globe,
      title: 'Consult',
      description: 'We begin every engagement with deep-dive discovery workshops, stakeholder mapping, and enterprise-wide assessments to align technology strategy with business objectives.',
    },
    {
      icon: Layers,
      title: 'Build',
      description: 'Our engineering teams architect and deliver scalable platforms using agile sprints, continuous integration, and rigorous quality gates that ensure production-grade reliability.',
    },
    {
      icon: Settings,
      title: 'Operate',
      description: 'Post-deployment, we provide managed services, 24/7 monitoring, performance optimization, and iterative enhancements to maximize long-term return on investment.',
    },
  ];

  return (
    <>
      <SEOHead pageKey="about" />

      {/* ===== SECTION 1: HERO BANNER ===== */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600"
          alt="Onsective corporate headquarters"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-dark/80"></div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16 pb-20 pt-40">
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-8 animate-on-scroll">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-brand-primary font-medium">About Onsective</span>
          </nav>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-on-scroll delay-100">
            Enabling Digital<br />
            Transformation Since 2026
          </h1>
          <p className="text-lg text-white/60 max-w-2xl leading-relaxed animate-on-scroll delay-200">
            A global technology consultancy committed to building enduring digital ecosystems for enterprises navigating the complexities of modern transformation.
          </p>
        </div>
      </section>

      {/* ===== SECTION 2: WHO WE ARE ===== */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left: Story */}
            <div className="animate-on-scroll">
              <span className="text-brand-primary font-semibold text-xs tracking-[0.2em] uppercase block mb-4">Our Identity</span>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-dark mb-8 leading-tight">
                Who We Are
              </h2>
              <div className="space-y-5 text-brand-muted text-base leading-relaxed">
                <p>
                  Onsective was founded with a singular conviction: that meaningful digital transformation requires more than technical proficiency. It demands strategic foresight, cross-functional expertise, and an unwavering commitment to measurable outcomes.
                </p>
                <p>
                  From our global headquarters in Toronto, we have expanded to serve enterprises across seven nations through a unified delivery model. Every engagement is anchored by domain principals who bring decades of hands-on experience in building and scaling enterprise-grade platforms.
                </p>
                <p>
                  Our multidisciplinary teams span cloud architecture, cybersecurity, artificial intelligence, enterprise SEO, digital marketing, and brand management, providing end-to-end capabilities under a single strategic umbrella. We do not outsource critical thinking; we embed it in every phase of delivery.
                </p>
              </div>
            </div>

            {/* Right: Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { ref: counter7.ref, value: counter7.count, suffix: '+', label: 'Nations', sublabel: 'Global Presence' },
                { ref: counter120.ref, value: counter120.count, suffix: '+', label: 'Clients', sublabel: 'Enterprise Relationships' },
                { ref: counter500.ref, value: counter500.count, suffix: '+', label: 'Projects', sublabel: 'Successfully Delivered' },
                { ref: counter10.ref, value: counter10.count, suffix: '', label: 'Services', sublabel: 'Core Capabilities' },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  ref={stat.ref}
                  className="bg-brand-light border border-brand-border rounded-lg p-6 lg:p-8 animate-on-scroll"
                  style={{ transitionDelay: `${idx * 120}ms` }}
                >
                  <div className="text-4xl lg:text-5xl font-display font-bold text-brand-primary mb-2">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-lg font-bold text-brand-dark">{stat.label}</div>
                  <div className="text-sm text-brand-muted mt-1">{stat.sublabel}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: OUR APPROACH ===== */}
      <section className="py-24 lg:py-32 bg-brand-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="text-brand-primary font-semibold text-xs tracking-[0.2em] uppercase block mb-4">Engagement Model</span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-dark mb-6">
              Our Approach
            </h2>
            <p className="text-brand-muted text-lg max-w-3xl mx-auto leading-relaxed">
              A structured, three-phase delivery methodology that ensures every project transitions seamlessly from strategic vision to operational reality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {APPROACH_PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white border border-brand-border rounded-lg p-8 lg:p-10 text-center hover:shadow-lg hover:border-brand-primary/30 transition-all duration-300 animate-on-scroll"
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <pillar.icon size={28} className="text-brand-primary" />
                </div>
                <div className="text-sm font-bold text-brand-primary tracking-widest uppercase mb-2">Phase {idx + 1}</div>
                <h3 className="font-display text-2xl font-bold text-brand-dark mb-4">{pillar.title}</h3>
                <p className="text-brand-muted leading-relaxed text-sm">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: LEADERSHIP — with creative motion elements ===== */}
      <section className="py-24 lg:py-40 bg-brand-dark relative overflow-hidden">
        {/* Animated hexagonal grid background */}
        <div className="hex-grid-bg opacity-50"></div>

        {/* Glowing orbs — ambient motion */}
        <div className="glow-orb w-96 h-96 bg-brand-primary/10 -top-20 -left-20" style={{ animationDelay: '0s' }}></div>
        <div className="glow-orb w-72 h-72 bg-brand-primary/8 bottom-10 right-10" style={{ animationDelay: '3s' }}></div>

        {/* Connected node network */}
        <div className="node-network">
          {/* Nodes */}
          {[
            { top: '15%', left: '8%', delay: '0s' },
            { top: '25%', left: '22%', delay: '1s' },
            { top: '60%', left: '12%', delay: '2s' },
            { top: '80%', left: '25%', delay: '0.5s' },
            { top: '20%', right: '15%', delay: '1.5s' },
            { top: '45%', right: '8%', delay: '2.5s' },
            { top: '70%', right: '20%', delay: '0.8s' },
            { top: '35%', right: '30%', delay: '3s' },
          ].map((pos, i) => (
            <div key={i} className="network-node" style={{ ...pos, animationDelay: pos.delay } as React.CSSProperties}></div>
          ))}
          {/* Connecting lines */}
          {[
            { top: '16%', left: '9%', width: '120px', transform: 'rotate(10deg)', delay: '0.5s' },
            { top: '62%', left: '13%', width: '100px', transform: 'rotate(-15deg)', delay: '1.5s' },
            { top: '22%', right: '16%', width: '130px', transform: 'rotate(-20deg)', delay: '2s' },
            { top: '50%', right: '10%', width: '110px', transform: 'rotate(25deg)', delay: '1s' },
          ].map((pos, i) => (
            <div key={i} className="network-line" style={{ ...pos, animationDelay: pos.delay } as React.CSSProperties}></div>
          ))}
        </div>

        {/* Orbiting decorative rings */}
        <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 hidden xl:block">
          <div className="relative w-64 h-64">
            <div className="orbit-ring w-64 h-64" style={{ animationDuration: '20s', borderColor: 'rgba(193,145,47,0.08)' }}></div>
            <div className="orbit-ring w-48 h-48 top-8 left-8" style={{ animationDuration: '28s', animationDirection: 'reverse', borderColor: 'rgba(193,145,47,0.05)' }}></div>
          </div>
        </div>
        <div className="absolute left-[-3%] bottom-[20%] hidden xl:block">
          <div className="relative w-40 h-40">
            <div className="orbit-ring w-40 h-40" style={{ animationDuration: '16s', borderColor: 'rgba(193,145,47,0.06)' }}></div>
          </div>
        </div>

        {/* DNA helix accent on far left */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden xl:block dna-strand">
          {[0, 1, 2, 3, 4, 5, 6, 7].map(i => (
            <React.Fragment key={i}>
              <div className="dna-dot" style={{ top: `${i * 50}px`, animationDelay: `${i * 0.3}s` }}></div>
              <div className="dna-dot-alt" style={{ top: `${i * 50 + 25}px`, left: '40px', animationDelay: `${i * 0.3}s` }}></div>
            </React.Fragment>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
          <div className="text-center mb-24 animate-on-scroll">
            {/* Animated divider with dual pulse dots */}
            <div className="flex items-center gap-3 justify-center mb-8">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-brand-primary/40"></div>
              <div className="pulse-dot"></div>
              <div className="w-8 h-px bg-brand-primary/30"></div>
              <div className="pulse-dot" style={{ animationDelay: '1s' }}></div>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-brand-primary/40"></div>
            </div>
            <h2 className="font-display text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight">
              The People Behind the <span className="text-gold">Vision.</span>
            </h2>
            <p className="text-white/40 text-lg max-w-2xl mx-auto leading-relaxed">
              Senior practitioners who have built and scaled enterprise platforms across the world's most demanding environments. They lead every engagement personally.
            </p>
          </div>

          {/* Leadership grid — magnetic 3D hover with glow borders & spinning rings */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
            {LEADERSHIP_TEAM.map((leader, idx) => (
              <div
                key={idx}
                className={`stagger-3d-enter leader-card group text-center`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                {/* Glow border effect */}
                <div className="leader-card-glow rounded-sm"></div>

                {/* Photo container with spinning ring */}
                <div className="relative mb-6">
                  <div className="relative overflow-hidden">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full aspect-[3/4] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                    {/* Multi-layer gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/30 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 via-transparent to-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                    {/* Role text that slides up on hover */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                      <p className="text-brand-primary text-xs font-bold tracking-widest uppercase">{leader.role}</p>
                    </div>
                  </div>

                  {/* Spinning accent ring on hover */}
                  <div className="leader-ring"></div>

                  {/* Animated gold corner accents — all 4 corners */}
                  <div className="absolute top-0 left-0 w-0 h-0 border-t-2 border-l-2 border-brand-primary/0 group-hover:w-6 group-hover:h-6 group-hover:border-brand-primary transition-all duration-500"></div>
                  <div className="absolute top-0 right-0 w-0 h-0 border-t-2 border-r-2 border-brand-primary/0 group-hover:w-6 group-hover:h-6 group-hover:border-brand-primary transition-all duration-500 delay-100"></div>
                  <div className="absolute bottom-0 left-0 w-0 h-0 border-b-2 border-l-2 border-brand-primary/0 group-hover:w-6 group-hover:h-6 group-hover:border-brand-primary transition-all duration-500 delay-200"></div>
                  <div className="absolute bottom-0 right-0 w-0 h-0 border-b-2 border-r-2 border-brand-primary/0 group-hover:w-6 group-hover:h-6 group-hover:border-brand-primary transition-all duration-500 delay-300"></div>
                </div>

                <h3 className="font-display text-xl font-bold text-white group-hover:text-brand-primary transition-colors duration-300">{leader.name}</h3>
                <p className="text-white/30 text-sm mt-1 group-hover:text-white/50 transition-colors duration-300">{leader.role}</p>
              </div>
            ))}
          </div>

          {/* Animated tagline strip below leadership */}
          <div className="mt-20 overflow-hidden rounded-lg border border-white/5">
            <div className="py-4 bg-white/[0.02] flex overflow-hidden">
              <div className="scroll-parallax-strip">
                {[...Array(2)].map((_, setIdx) => (
                  <div key={setIdx} className="flex gap-10 shrink-0 items-center">
                    {['Strategy', 'Innovation', 'Execution', 'Leadership', 'Vision', 'Integrity', 'Excellence', 'Partnership'].map((word, i) => (
                      <div key={i} className="flex items-center gap-4 shrink-0">
                        <span className="text-white/10 font-display text-sm font-black tracking-[0.3em] uppercase whitespace-nowrap">{word}</span>
                        <div className="w-1.5 h-1.5 bg-brand-primary/30 rounded-full"></div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: GLOBAL OFFICES ===== */}
      <section className="py-24 lg:py-32 bg-brand-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="mb-16 animate-on-scroll">
            <span className="text-brand-primary font-semibold text-xs tracking-[0.2em] uppercase block mb-4">Worldwide Operations</span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-dark">
              Global Presence
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {GLOBAL_OFFICES.map((office, idx) => (
              <Link
                key={idx}
                to="/contact"
                className="bg-white border border-brand-border rounded-lg p-6 hover:border-brand-primary/40 hover:shadow-md transition-all duration-300 group animate-on-scroll"
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <span className="text-3xl block mb-3">{office.flag}</span>
                <h4 className="font-bold text-brand-dark text-lg group-hover:text-brand-primary transition-colors">{office.city}</h4>
                <p className="text-brand-muted text-sm mt-1">{office.country}</p>
                <p className="text-xs text-brand-primary font-medium mt-2 uppercase tracking-wider">{office.type}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 6: CTA ===== */}
      <section className="py-24 bg-brand-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center animate-on-scroll">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6">
            Partner With Us
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether you are modernizing legacy infrastructure or launching a new digital initiative, our team is ready to help you navigate the path forward.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-10 py-4 bg-white text-brand-dark font-bold text-sm hover:bg-brand-light transition-colors duration-300 rounded"
          >
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;
