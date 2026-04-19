import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, ChevronLeft, Globe, Users, BarChart3, Shield, Zap, Cpu, Code2 } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';
import { SERVICES, GLOBAL_OFFICES, INDUSTRIES } from '../constants';
import { ASSETS } from '../utils/assets';
import { LATEST_INSIGHTS } from '../data/blog';
import { StrategyCubeScene } from '../components/UI/ServiceScene3D';

/* ------------------------------------------------------------------ */
/*  useCounter — animates a number from 0 to target on scroll         */
/* ------------------------------------------------------------------ */
const useCounter = (target: number, duration = 1600) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const triggered = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          const start = performance.now();
          const step = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
};

/* ------------------------------------------------------------------ */
/*  INDUSTRY IMAGE MAP                                                */
/* ------------------------------------------------------------------ */
// High-relevance Unsplash photos per industry. Explicit sig values
// lock each industry to a consistent, distinct, topical photo.
const INDUSTRY_IMAGES: Record<string, string> = {
  banking: 'https://source.unsplash.com/1200x800/?bank,skyscraper,wall-street,finance-building&sig=4011',
  healthcare: 'https://source.unsplash.com/1200x800/?hospital,doctor,medical-technology,healthcare-facility&sig=4021',
  retail: 'https://source.unsplash.com/1200x800/?retail-store,shopping-mall,boutique,ecommerce-warehouse&sig=4031',
  manufacturing: 'https://source.unsplash.com/1200x800/?factory,manufacturing-plant,industrial-robot,production-line&sig=4041',
  energy: 'https://source.unsplash.com/1200x800/?wind-turbine,solar-farm,power-grid,renewable-energy&sig=4051',
  technology: 'https://source.unsplash.com/1200x800/?tech-company,software-office,silicon-valley,startup-hq&sig=4061',
  'professional-services': 'https://source.unsplash.com/1200x800/?law-firm,consultancy,executive-meeting,boardroom-table&sig=4071',
  education: 'https://source.unsplash.com/1200x800/?university-campus,lecture-hall,students-studying,classroom&sig=4081',
  government: 'https://source.unsplash.com/1200x800/?capitol-building,parliament,public-sector,government-office&sig=4091',
  media: 'https://source.unsplash.com/1200x800/?television-studio,broadcast-camera,production-set,newsroom&sig=4101'
};

/* ------------------------------------------------------------------ */
/*  HERO SLIDES                                                       */
/* ------------------------------------------------------------------ */
const HERO_SLIDES = [
  {
    id: 1,
    bg: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1800&q=90',
    heading: 'Architect the Inevitable.',
    subtext: 'We are Onsective — a global consulting institution engineering sovereign digital transformation for the world\'s most ambitious enterprises across 7+ nations.',
    cta: 'Discover Our Legacy',
    ctaLink: '/services',
  },
  {
    id: 2,
    bg: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1800&q=90',
    heading: 'Where Vision Becomes Infrastructure.',
    subtext: 'From bespoke software platforms and sovereign cloud architectures to AI-powered operations — we engineer the technological foundations that define your next decade of dominance.',
    cta: 'Explore Our Arsenal',
    ctaLink: '/services',
  },
  {
    id: 3,
    bg: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1800&q=90',
    heading: 'Ten Disciplines. Zero Compromise.',
    subtext: 'Strategy. Cloud. Security. Intelligence. Software. Brand. Ten world-class practices under one institution, deployed with precision across 7+ sovereign markets.',
    cta: 'Our Capabilities',
    ctaLink: '/services',
  },
  {
    id: 4,
    bg: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1800&q=90',
    heading: 'Global Authority. Local Mastery.',
    subtext: 'Toronto. New York. London. Dubai. Mumbai. Singapore. Sydney. Berlin. Wherever capital flows, we deliver with institutional precision.',
    cta: 'Meet the Principals',
    ctaLink: '/about',
  },
];

/* ------------------------------------------------------------------ */
/*  WHY ONSECTIVE ITEMS                                               */
/* ------------------------------------------------------------------ */
const WHY_ITEMS = [
  {
    icon: Shield,
    title: 'Principal-Led Engagement',
    description: 'Every client relationship is stewarded by a senior principal with decades of enterprise experience. No delegation. No dilution. No exceptions.',
  },
  {
    icon: Globe,
    title: 'Sovereign Global Footprint',
    description: 'Strategic presence across 7+ sovereign markets ensures local regulatory mastery paired with the full weight of global delivery infrastructure.',
  },
  {
    icon: BarChart3,
    title: 'Outcome-Obsessed Delivery',
    description: 'We architect our commercial models around measurable business impact — not billable hours, not slide decks, not theoretical frameworks.',
  },
  {
    icon: Zap,
    title: 'Deep Vertical Expertise',
    description: 'Institutional-grade domain knowledge across financial services, healthcare, retail, manufacturing, and energy — built over hundreds of deployments.',
  },
  {
    icon: Code2,
    title: 'Bespoke Software Engineering',
    description: 'End-to-end custom software development — from rapid prototypes to mission-critical enterprise platforms — architected to compound value at scale.',
    link: '/services/custom-software',
  },
];

/* ------------------------------------------------------------------ */
/*  CLIENT LOGOS / TRUST STRIP                                        */
/* ------------------------------------------------------------------ */
const TRUST_WORDS = ['STRATEGY', 'INTELLIGENCE', 'CLOUD', 'SECURITY', 'SOFTWARE', 'BRAND', 'EXPERIENCE', 'AUTOMATION', 'ANALYTICS', 'GOVERNANCE'];

/* ================================================================== */
/*  HOME COMPONENT                                                    */
/* ================================================================== */
const Home: React.FC = () => {
  /* ---------- Hero carousel state ---------- */
  const [activeSlide, setActiveSlide] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoRotate = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
  };

  useEffect(() => {
    startAutoRotate();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const goToSlide = (idx: number) => {
    setActiveSlide(idx);
    startAutoRotate();
  };

  const prevSlide = () => goToSlide((activeSlide - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  const nextSlide = () => goToSlide((activeSlide + 1) % HERO_SLIDES.length);

  /* ---------- Scroll animations ---------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
    );
    const elements = document.querySelectorAll('.animate-on-scroll, .scroll-3d-enter, .laptop-drop, .slide-in-left, .slide-in-right, .scale-in, .scroll-parallax-card, .text-reveal-3d');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* ---------- Counter data ---------- */
  const counter1 = useCounter(7);
  const counter2 = useCounter(120);
  const counter3 = useCounter(500);
  const counter4 = useCounter(10);

  const counters = [
    { ...counter1, suffix: '+', label: 'Sovereign Markets', icon: Globe },
    { ...counter2, suffix: '+', label: 'Enterprise Clients', icon: Users },
    { ...counter3, suffix: '+', label: 'Engagements Delivered', icon: BarChart3 },
    { ...counter4, suffix: '', label: 'Practice Domains', icon: Cpu },
  ];

  /* ---------- Services to display (first 8) ---------- */
  const displayedServices = SERVICES.slice(0, 8);

  /* ---------- Insights to display (first 3) ---------- */
  const latestInsights = LATEST_INSIGHTS.slice(0, 3);

  return (
    <>
      <SEOHead pageKey="home" />

      {/* ============================================================ */}
      {/*  HERO — ROTATING CAROUSEL                                    */}
      {/* ============================================================ */}
      <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
        {/* Particle field overlay */}
        <div className="particle-field z-[5]">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDuration: `${8 + Math.random() * 12}s`,
                animationDelay: `${Math.random() * 8}s`,
              }}
            />
          ))}
        </div>

        {/* Slides */}
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              idx === activeSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Background */}
            {slide.bg === 'navy' ? (
              <div className="absolute inset-0 bg-brand-navy-deep">
                <div
                  className="absolute top-0 right-0 w-1/2 h-full opacity-10"
                  style={{
                    background: 'linear-gradient(135deg, transparent 40%, #c1912f 40.5%, #c1912f 41%, transparent 41.5%)',
                  }}
                />
              </div>
            ) : (
              <>
                <img
                  src={slide.bg}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                  loading={idx === 0 ? 'eager' : 'lazy'}
                />
                <div className="absolute inset-0 bg-brand-navy-deep/80" />
              </>
            )}

            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
              <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Left: Text */}
                  <div className="max-w-2xl">
                    <h1
                      className={`font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[6.5rem] font-black text-white leading-[0.95] mb-6 sm:mb-8 tracking-[-0.03em] transition-all duration-700 delay-100 ${
                        idx === activeSlide ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                      }`}
                    >
                      {slide.heading}
                    </h1>
                    <p
                      className={`text-lg sm:text-xl text-white/60 leading-relaxed mb-8 transition-all duration-700 delay-200 ${
                        idx === activeSlide ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                      }`}
                    >
                      {slide.subtext}
                    </p>
                    <Link
                      to={slide.ctaLink}
                      className={`inline-flex items-center gap-2 bg-brand-primary text-white font-semibold px-7 py-3.5 rounded-md text-sm tracking-wide hover:bg-brand-gold-dark transition-all duration-700 delay-300 shadow-lg ${
                        idx === activeSlide ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                      }`}
                    >
                      {slide.cta}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Right: 3D Icosahedron (desktop only) */}
                  {idx === 0 && (
                    <div className="hidden lg:flex items-center justify-center h-[400px] xl:h-[500px]">
                      <div className="relative">
                        {/* Icosahedron wireframe */}
                        <div className="icosahedron-3d" style={{ width: '280px', height: '280px' }}>
                          {Array.from({ length: 6 }).map((_, i) => (
                            <div key={i} className="ico-ring" style={{ width: '280px', height: '280px' }} />
                          ))}
                        </div>
                        {/* Center text */}
                        <div className="absolute inset-0 flex items-center justify-center z-10">
                          <div className="text-center">
                            <div className="text-7xl xl:text-8xl font-display font-black text-brand-primary leading-none">7+</div>
                            <div className="text-sm font-semibold text-white/50 mt-2 tracking-widest uppercase">Nations</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Right: 3D Torus (slide 2) */}
                  {idx === 1 && (
                    <div className="hidden lg:flex items-center justify-center h-[400px] xl:h-[500px]">
                      <div className="torus-3d" style={{ width: '260px', height: '260px' }}>
                        {Array.from({ length: 12 }).map((_, i) => (
                          <div
                            key={i}
                            className="torus-segment"
                            style={{
                              width: '260px',
                              height: '260px',
                              transform: `rotateY(${i * 30}deg)`,
                              borderColor: `rgba(193, 145, 47, ${0.06 + (i % 3) * 0.04})`,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Right: 3D Pyramid (slide 3) */}
                  {idx === 2 && (
                    <div className="hidden lg:flex items-center justify-center h-[400px] xl:h-[500px]">
                      <div className="pyramid-3d" style={{ width: '220px', height: '220px' }}>
                        <div className="py-face" />
                        <div className="py-face" />
                        <div className="py-face" />
                        <div className="py-face" />
                      </div>
                    </div>
                  )}

                  {/* Right: Concentric spheres (slide 4) */}
                  {idx === 3 && (
                    <div className="hidden lg:flex items-center justify-center h-[400px] xl:h-[500px]">
                      <div className="concentric-spheres" style={{ width: '280px', height: '280px' }}>
                        {[140, 110, 80, 50, 25].map((size, i) => (
                          <div
                            key={i}
                            className="sphere-ring"
                            style={{
                              width: `${size * 2}px`,
                              height: `${size * 2}px`,
                              marginLeft: `-${size}px`,
                              marginTop: `-${size}px`,
                              transform: `rotateX(${20 + i * 15}deg) rotateY(${i * 30}deg)`,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center rounded-full border border-white/30 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center rounded-full border border-white/30 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                idx === activeSlide
                  ? 'bg-brand-primary w-8'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/*  3D SCROLL SHOWCASE — STRATEGY CUBE                          */}
      {/* ============================================================ */}
      <StrategyCubeScene />

      {/* ============================================================ */}
      {/*  COUNTER STRIP                                               */}
      {/* ============================================================ */}
      <section className="bg-brand-dark py-16 relative overflow-hidden">
        <div className="absolute inset-0 perspective-grid opacity-30"></div>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {counters.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  ref={item.ref}
                  className="text-center stat-glow rounded-lg p-4"
                >
                  <Icon className="w-6 h-6 text-brand-gold-light mx-auto mb-3" />
                  <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                    {item.count}{item.suffix}
                  </div>
                  <div className="text-sm text-white/50 tracking-wide uppercase">
                    {item.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SCROLLING TRUST STRIP — 3D rotating keywords                */}
      {/* ============================================================ */}
      <section className="bg-brand-dark py-5 overflow-hidden border-t border-white/5">
        <div className="ticker">
          {[...TRUST_WORDS, ...TRUST_WORDS].map((word, i) => (
            <div key={i} className="flex items-center gap-4 mx-10 whitespace-nowrap">
              <div className="w-2 h-2 bg-brand-primary/60 rotate-45 shrink-0"></div>
              <span className="text-white/20 font-display text-sm font-bold tracking-[0.2em] uppercase">{word}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/*  3D BRANDED MONUMENT — rotating brand tower                  */}
      {/* ============================================================ */}
      <section className="py-28 lg:py-36 bg-brand-dark relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 perspective-grid opacity-15"></div>
        <div className="particle-field">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDuration: `${10 + Math.random() * 15}s`,
                animationDelay: `${Math.random() * 10}s`,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
            {/* Left: 3D Brand Tower */}
            <div className="flex flex-col items-center animate-on-scroll overflow-hidden">
              <div className="relative" style={{ perspective: '1200px' }}>
                {/* Orbiting rings — hidden on mobile */}
                <div className="brand-orbit hidden sm:block" style={{ width: '280px', height: '280px', top: '0', left: '-40px', animationDuration: '20s' }}></div>
                <div className="brand-orbit hidden sm:block" style={{ width: '240px', height: '240px', top: '20px', left: '-20px', animationDuration: '28s', animationDirection: 'reverse' }}></div>
                <div className="brand-orbit hidden lg:block" style={{ width: '320px', height: '320px', top: '-20px', left: '-50px', animationDuration: '35s' }}></div>

                {/* The Tower */}
                <div className="brand-tower">
                  {/* Front — Logo + Brand Name */}
                  <div className="tower-face tf-front">
                    <img src="/assets/logo.png" alt="Onsective" className="tower-logo" />
                    <div className="tower-brand">Onsective</div>
                    <div className="tower-divider"></div>
                    <div className="tower-sub">Enterprise</div>
                    <div style={{ height: '8px' }}></div>
                    <div className="tower-sub">Est. 2026 — Toronto</div>
                  </div>

                  {/* Back — Tagline + Mission */}
                  <div className="tower-face tf-back">
                    <img src="/assets/logo.png" alt="Onsective" className="tower-logo" style={{ opacity: 0.4 }} />
                    <div className="tower-divider"></div>
                    <div className="tower-tagline">
                      "Command<br />The Future."
                    </div>
                    <div className="tower-divider"></div>
                    <div className="tower-sub" style={{ marginTop: '4px' }}>Global Technology</div>
                    <div className="tower-sub">Consulting Institution</div>
                  </div>

                  {/* Right — Services */}
                  <div className="tower-face tf-right">
                    <div className="tower-sub" style={{ marginBottom: '6px', color: 'rgba(193,145,47,0.5)' }}>Ten Practice Domains</div>
                    <ul className="tower-service-list">
                      <li>IT Strategy</li>
                      <li>Cloud Services</li>
                      <li>Cybersecurity</li>
                      <li>Digital Experience</li>
                      <li>AI & Automation</li>
                      <li>Enterprise SEO</li>
                      <li>Digital Marketing</li>
                      <li>Social Media</li>
                      <li>Custom Software</li>
                      <li>Brand Management</li>
                    </ul>
                  </div>

                  {/* Left — Stats */}
                  <div className="tower-face tf-left">
                    <div className="tower-sub" style={{ marginBottom: '8px', color: 'rgba(193,145,47,0.5)' }}>By the Numbers</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                      <div style={{ textAlign: 'center' }}>
                        <div className="tower-stat">7+</div>
                        <div className="tower-stat-label">Nations</div>
                      </div>
                      <div className="tower-divider"></div>
                      <div style={{ textAlign: 'center' }}>
                        <div className="tower-stat">120+</div>
                        <div className="tower-stat-label">Clients</div>
                      </div>
                      <div className="tower-divider"></div>
                      <div style={{ textAlign: 'center' }}>
                        <div className="tower-stat">500+</div>
                        <div className="tower-stat-label">Projects</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Glowing base */}
              <div className="brand-tower-base mt-4"></div>
            </div>

            {/* Right: Brand Statement */}
            <div className="text-center lg:text-left animate-on-scroll delay-200">
              <span className="text-brand-primary font-semibold text-sm tracking-widest uppercase mb-4 block">The Institution</span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-6xl font-black text-white leading-[1.0] tracking-tight mb-6">
                Built to<br />
                <span className="text-gold">Endure.</span>
              </h2>
              <p className="text-white/50 text-base sm:text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
                Onsective is not a consultancy. It is an institution — engineered for permanence, built on the principle that technology infrastructure should compound in value, not depreciate.
              </p>
              <p className="text-white/30 text-base leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0">
                From our founding in Toronto to our sovereign presence across seven nations, every engagement is led by principals who architect solutions designed to outlast market cycles, regulatory shifts, and competitive disruption.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 bg-brand-primary text-white font-semibold px-7 py-3.5 rounded-md text-sm tracking-wide hover:bg-brand-gold-dark transition-colors"
                >
                  Our Story <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 border border-white/20 text-white font-semibold px-7 py-3.5 rounded-md text-sm tracking-wide hover:bg-white/5 transition-colors"
                >
                  Our Capabilities
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  LAPTOP MOCKUP — drops from top on scroll                    */}
      {/* ============================================================ */}
      <section className="py-24 lg:py-32 bg-brand-light overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-12 animate-on-scroll">
            <p className="text-brand-primary font-semibold text-sm tracking-widest uppercase mb-4">Institutional-Grade Platforms</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand-text mb-4">
              Engineered for <span className="text-gold">Absolute Performance.</span>
            </h2>
            <p className="text-brand-muted text-lg max-w-2xl mx-auto">
              Every platform we architect is built to institutional standards — zero-downtime deployments, sovereign data compliance, and performance that scales without limits.
            </p>
          </div>

          {/* Laptop that drops from top */}
          <div className="laptop-drop">
            <div className="laptop-frame shadow-2xl">
              <div className="laptop-screen">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=90&auto=format&fit=crop"
                  alt="Dashboard preview"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="laptop-base"></div>
            <div className="laptop-stand"></div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SCROLLING TICKER — moving services marquee                  */}
      {/* ============================================================ */}
      <section className="bg-brand-dark py-5 overflow-hidden">
        <div className="ticker">
          {[...SERVICES, ...SERVICES].map((s, i) => (
            <Link key={i} to={s.path} className="flex items-center gap-3 mx-8 text-white/30 hover:text-brand-primary transition-colors whitespace-nowrap">
              <span className="w-1.5 h-1.5 bg-brand-primary rounded-full shrink-0"></span>
              <span className="text-sm font-semibold tracking-wide">{s.title}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SERVICES                                                    */}
      {/* ============================================================ */}
      <section className="bg-white py-20 lg:py-28 relative overflow-hidden">
        <div className="hex-grid-bg"></div>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          {/* Heading */}
          <div className="animate-on-scroll mb-16">
            <span className="text-brand-primary font-semibold text-sm tracking-widest uppercase mb-4 block">Our Practice Domains</span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-text leading-[1.1] mb-4">
              Ten Disciplines.<br /><span className="text-gold">Unrivalled Depth.</span>
            </h2>
            <p className="text-brand-muted text-lg max-w-2xl leading-relaxed">Each practice is led by principals who have architected and delivered enterprise-scale transformations across the world's most complex and regulated environments.</p>
          </div>

          {/* Grid: 2 rows x 4 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {displayedServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.id}
                  to={service.path}
                  className={`scroll-parallax-card group block border border-brand-border rounded-lg p-6 hover:border-brand-primary hover:shadow-lg transition-all duration-300 magnetic-3d holo-shimmer bg-white`}
                  style={{ transitionDelay: `${(idx % 4) * 80}ms` }}
                >
                  <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center mb-5 group-hover:bg-brand-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-brand-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-brand-text mb-2 group-hover:text-brand-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-brand-muted leading-relaxed line-clamp-3 mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-brand-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>

          {/* View all link */}
          <div className="animate-on-scroll mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-brand-primary font-semibold text-sm hover:gap-3 transition-all"
            >
              View All Practice Domains <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  3D ROTATING OBJECTS SHOWCASE                                 */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-24 bg-brand-dark relative overflow-hidden">
        <div className="particle-field">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDuration: `${10 + Math.random() * 15}s`,
                animationDelay: `${Math.random() * 10}s`,
              }}
            />
          ))}
        </div>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="grid grid-cols-3 gap-4 sm:gap-8 lg:gap-12 items-center">
            {/* Left: 3D Cube */}
            <div className="text-center animate-on-scroll">
              <div className="cube-stage" style={{ perspective: '500px' }}>
                <div className="cube-3d">
                  <div className="face front">Strategy</div>
                  <div className="face back">Cloud</div>
                  <div className="face right">Security</div>
                  <div className="face left">AI</div>
                  <div className="face top">Brand</div>
                  <div className="face bottom">Software</div>
                </div>
              </div>
              <h3 className="text-white font-display text-sm sm:text-xl font-bold mb-1 sm:mb-2">Six Pillars</h3>
              <p className="text-white/40 text-xs sm:text-sm hidden sm:block">Integrated practice architecture</p>
            </div>

            {/* Center: 3D Prism */}
            <div className="text-center animate-on-scroll delay-200">
              <div className="cube-stage" style={{ perspective: '500px' }}>
                <div className="prism-3d">
                  <div className="prism-face pf-front">Discover</div>
                  <div className="prism-face pf-back">Design</div>
                  <div className="prism-face pf-right">Deliver</div>
                  <div className="prism-face pf-left">Optimize</div>
                  <div className="prism-face pf-top">Scale</div>
                  <div className="prism-face pf-bottom">Govern</div>
                </div>
              </div>
              <h3 className="text-white font-display text-sm sm:text-xl font-bold mb-1 sm:mb-2">Methodology</h3>
              <p className="text-white/40 text-xs sm:text-sm hidden sm:block">Proven delivery framework</p>
            </div>

            {/* Right: 3D Icosahedron */}
            <div className="text-center animate-on-scroll delay-400">
              <div className="cube-stage" style={{ perspective: '500px' }}>
                <div className="icosahedron-3d">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="ico-ring" />
                  ))}
                </div>
              </div>
              <h3 className="text-white font-display text-sm sm:text-xl font-bold mb-1 sm:mb-2">Global Network</h3>
              <p className="text-white/40 text-xs sm:text-sm hidden sm:block">Interconnected delivery fabric</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  WHY ONSECTIVE                                               */}
      {/* ============================================================ */}
      <section className="bg-brand-light py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left — Heading */}
            <div className="animate-on-scroll">
              <h2 className="font-display text-2xl sm:text-4xl lg:text-6xl font-black text-brand-text leading-[1.05] tracking-tight">
                Why the World's Most Ambitious Enterprises Choose{' '}
                <span className="text-gold">Onsective</span>
              </h2>
              <p className="mt-6 text-brand-muted text-xl leading-relaxed max-w-lg">
                We don't consult from the sidelines. We embed with your executive teams, architect your sovereign infrastructure, and deliver outcomes that compound into permanent competitive advantage.
              </p>
            </div>

            {/* Right — stacked items */}
            <div className="space-y-8">
              {WHY_ITEMS.map((item, idx) => {
                const Icon = item.icon;
                const dest = (item as any).link || '/services';
                return (
                  <Link
                    key={idx}
                    to={dest}
                    className={`scroll-parallax-card flex gap-5 group`}
                    style={{ transitionDelay: `${(idx + 1) * 100}ms` }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-brand-primary/10 flex items-center justify-center group-hover:bg-brand-primary/20 transition-colors">
                      <Icon className="w-5 h-5 text-brand-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-brand-text mb-1 group-hover:text-brand-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-brand-muted leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  INDUSTRIES                                                  */}
      {/* ============================================================ */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="animate-on-scroll mb-14">
            <span className="text-brand-primary font-semibold text-sm tracking-widest uppercase mb-3 block">Vertical Expertise</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-text mb-3">
              Industries We Command
            </h2>
            <div className="w-16 h-1 bg-brand-primary rounded-full" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {INDUSTRIES.map((industry, idx) => (
              <Link
                key={industry.id}
                to={industry.path}
                className={`scroll-parallax-card group relative h-56 sm:h-64 rounded-lg overflow-hidden`}
                style={{ transitionDelay: `${(idx + 1) * 80}ms` }}
              >
                <img
                  src={INDUSTRY_IMAGES[industry.id] || ASSETS.IND_BANKING}
                  alt={industry.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white text-sm font-semibold leading-snug">
                    {industry.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  INSIGHTS                                                    */}
      {/* ============================================================ */}
      <section className="bg-brand-dark py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="animate-on-scroll mb-14">
            <span className="text-brand-primary font-semibold text-sm tracking-widest uppercase mb-3 block">Thought Leadership</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-3">
              Institutional Insights
            </h2>
            <div className="w-16 h-1 bg-brand-primary rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {latestInsights.map((post, idx) => (
              <Link
                key={post.id}
                to={`/insights/${post.id}`}
                className={`scroll-parallax-card group block bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300`}
                style={{ transitionDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-brand-primary uppercase tracking-wide">
                      {post.category}
                    </span>
                    <span className="text-xs text-brand-muted">{post.date}</span>
                  </div>
                  <h3 className="text-base font-semibold text-brand-text leading-snug mb-3 line-clamp-2 group-hover:text-brand-primary transition-colors">
                    {post.title}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-brand-primary">
                    Read More <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  CTA BANNER                                                  */}
      {/* ============================================================ */}
      <section className="bg-brand-dark py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(135deg, transparent 40%, #c1912f 40.5%, #c1912f 41%, transparent 41.5%)' }}></div>
        <div className="particle-field">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDuration: `${12 + Math.random() * 10}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center relative z-10">
          <div className="animate-on-scroll">
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 tracking-tight leading-[0.95]">
              Architect the<br /><span className="text-gold">Inevitable.</span>
            </h2>
            <p className="text-white/40 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              The organizations that will define the next decade are making their moves today. Your transformation begins with one conversation.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-brand-primary text-white font-bold px-6 sm:px-10 py-3.5 sm:py-4 rounded-md text-sm sm:text-base tracking-wide hover:bg-brand-gold-dark transition-colors shadow-lg"
            >
              Begin the Conversation <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  GLOBAL PRESENCE                                             */}
      {/* ============================================================ */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="animate-on-scroll text-center max-w-3xl mx-auto">
            <span className="text-brand-primary font-semibold text-sm tracking-widest uppercase mb-3 block">Sovereign Presence</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-text mb-6">
              Our Global Footprint
            </h2>
            <div className="w-16 h-1 bg-brand-primary rounded-full mx-auto mb-8" />

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-8">
              {GLOBAL_OFFICES.map((office, idx) => (
                <Link
                  key={idx}
                  to="/contact"
                  className="text-brand-text font-medium text-base hover:text-brand-primary transition-colors"
                >
                  {office.city}
                  {idx < GLOBAL_OFFICES.length - 1 && (
                    <span className="ml-6 text-brand-border">|</span>
                  )}
                </Link>
              ))}
            </div>

            <p className="text-brand-muted text-lg leading-relaxed">
              With sovereign presence across 7+ nations, we deliver with local regulatory expertise and the full force of global institutional scale. Our distributed delivery model ensures that wherever capital flows, Onsective principals are already on the ground.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
