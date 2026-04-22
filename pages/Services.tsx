import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, CheckCircle2 } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';
import { SERVICES } from '../constants';
import { ASSETS } from '../utils/assets';

const SERVICE_IMAGE_MAP: Record<string, string> = {
  'it-strategy': ASSETS.SERVICE_STRATEGY,
  'cloud-services': ASSETS.SERVICE_CLOUD,
  'cybersecurity': ASSETS.SERVICE_CYBER,
  'digital-experience': ASSETS.SERVICE_DIGITAL,
  'ai-automation': ASSETS.SERVICE_AI,
  'enterprise-seo': ASSETS.SERVICE_SEO,
  'digital-marketing': ASSETS.SERVICE_MARKETING,
  'social-capital': ASSETS.SERVICE_SOCIAL,
  'brand-management': ASSETS.SERVICE_BRAND,
  'custom-software': ASSETS.SERVICE_DIGITAL,
};

/* Detailed descriptions for each service — what we actually do */
const SERVICE_DETAILS: Record<string, { highlights: string[]; longDesc: string }> = {
  'it-strategy': {
    longDesc: 'We conduct forensic technology audits across your entire enterprise stack, identify architectural debt with surgical precision, map critical dependencies, and engineer multi-year transformation roadmaps. Our principals work alongside your C-suite to align every technology investment with quantifiable business outcomes — transforming IT from a cost center into your most formidable strategic weapon.',
    highlights: ['Enterprise Architecture Assessment', 'Digital Roadmap Engineering', 'Vendor & Platform Selection', 'IT Governance Frameworks', 'Cost Optimization Analysis'],
  },
  'cloud-services': {
    longDesc: 'From initial readiness assessment to full-scale migration and continuous optimization, we architect sovereign multi-cloud and hybrid environments that deliver elastic scale, data sovereignty compliance, and operational resilience that institutional stakeholders demand. We have migrated hundreds of mission-critical workloads — including legacy mainframes — with zero-downtime guarantees and measurable cost reductions averaging 35%.',
    highlights: ['AWS / Azure / GCP Architecture', 'Zero-Downtime Migration', 'FinOps & Cost Governance', 'Kubernetes & Container Orchestration', 'Disaster Recovery Engineering'],
  },
  'cybersecurity': {
    longDesc: 'Our security practice implements defense-in-depth strategies anchored by zero-trust architecture and sovereign compliance. We conduct adversarial red-team exercises, deploy 24/7 security operations centers, and engineer incident response playbooks that detect and neutralize sophisticated threats in minutes — not hours. Every system we fortify is hardened to withstand nation-state-grade attack vectors.',
    highlights: ['Zero-Trust Architecture', 'Penetration Testing & Red Teaming', '24/7 SOC Operations', 'Incident Response Engineering', 'Identity & Access Management'],
  },
  'digital-experience': {
    longDesc: 'We research, design, and engineer digital products that command attention and drive institutional-grade conversion rates. From deep ethnographic research and behavioral journey mapping to pixel-perfect interface design and full-stack engineering — we create digital touchpoints that establish brand authority, accelerate revenue, and deliver experiences users choose to return to.',
    highlights: ['Ethnographic UX Research', 'Design System Architecture', 'Mobile App Engineering', 'E-Commerce Platforms', 'Accessibility & Performance'],
  },
  'ai-automation': {
    longDesc: 'We deploy production-grade AI systems that deliver measurable ROI from day one — not science experiments that stall at proof-of-concept. Our AI engineers architect custom machine learning models, intelligent process automation workflows, and predictive analytics platforms that eliminate operational friction, surface hidden patterns, and give your teams superhuman decision-making velocity.',
    highlights: ['Custom ML Model Engineering', 'Robotic Process Automation', 'Predictive Analytics Platforms', 'Natural Language Processing', 'Computer Vision Systems'],
  },
  'enterprise-seo': {
    longDesc: 'We engineer search dominance at institutional scale. Our SEO architects optimize your technical infrastructure for crawl efficiency, build topical authority through strategic content frameworks, and capture high-intent organic traffic across global markets. We work at the intersection of engineering and content strategy — fixing what machines read and optimizing what humans discover.',
    highlights: ['Technical SEO Architecture', 'Content Strategy & Production', 'International SEO', 'Site Migration Management', 'Programmatic SEO at Scale'],
  },
  'digital-marketing': {
    longDesc: 'Our marketing strategists orchestrate full-funnel campaigns that combine paid media precision with organic content gravity. We manage multi-million dollar ad portfolios across Google, Meta, LinkedIn, and programmatic channels — always optimizing toward the metrics that institutional stakeholders care about: qualified pipeline, influenced revenue, and compounding customer lifetime value.',
    highlights: ['Paid Media Portfolio Management', 'Marketing Automation', 'Content Marketing', 'Conversion Rate Optimization', 'Multi-Touch Attribution'],
  },
  'social-capital': {
    longDesc: 'We manage institutional brand presence across LinkedIn, Instagram, X, YouTube, and Facebook at sovereign scale. Our social strategists engineer content calendars, cultivate communities, orchestrate influencer partnerships, and deploy real-time crisis communication protocols — transforming social media from a broadcast channel into a strategic instrument of brand authority.',
    highlights: ['Social Strategy & Calendar', 'Community Cultivation', 'Influencer Partnerships', 'Social Analytics & Intelligence', 'Crisis Communication Protocols'],
  },
  'custom-software': {
    longDesc: 'We are a full-service software engineering institution that builds bespoke digital products from the ground up. Whether you require a customer-facing web application, a native mobile platform, a complex SaaS ecosystem, an internal operations tool, or a microservices API architecture — our engineers design, develop, test, and deploy production-grade software tailored with absolute precision to your business requirements. We leverage modern technology stacks including React, Next.js, Node.js, Python, Go, PostgreSQL, and Kubernetes, with CI/CD pipelines, automated testing suites, infrastructure-as-code, and DevOps best practices embedded into every engagement from inception.',
    highlights: ['Web Application Engineering', 'Mobile App Development (iOS & Android)', 'SaaS Platform Architecture', 'API Design & Microservices', 'DevOps & CI/CD Pipelines', 'Legacy System Modernization'],
  },
  'brand-management': {
    longDesc: 'We codify corporate identity into governance systems that scale across every sovereign market and medium. From brand strategy and visual identity architecture to tone-of-voice codification and employer branding frameworks — we ensure your brand communicates premium institutional value, absolute consistency, and unassailable trust at every touchpoint.',
    highlights: ['Brand Strategy & Positioning', 'Visual Identity Systems', 'Brand Governance Frameworks', 'Employer Branding', 'Crisis Communication'],
  },
};

const Services: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.animate-on-scroll, .scroll-3d-enter, .slide-in-left, .slide-in-right, .scale-in, .laptop-drop, .stagger-3d-enter, .counter-wheel, .scroll-parallax-card, .text-reveal-3d').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* 3D tilt handler for service cards */
  const handleTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget.querySelector('.tilt-card-3d-inner') as HTMLElement;
    if (!card) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px) scale(1.02)`;
  };
  const resetTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget.querySelector('.tilt-card-3d-inner') as HTMLElement;
    if (card) card.style.transform = '';
  };

  return (
    <>
      <SEOHead pageKey="services" />

      {/* ===== HERO ===== */}
      <section className="relative min-h-[65vh] flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=90"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-dark/80"></div>

        {/* 3D perspective grid overlay */}
        <div className="absolute inset-0 perspective-grid opacity-50"></div>

        {/* Particle field */}
        <div className="particle-field">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDuration: `${8 + Math.random() * 12}s`,
                animationDelay: `${Math.random() * 6}s`,
              }}
            />
          ))}
        </div>

        {/* Floating 3D service badges */}
        <div className="absolute right-[5%] top-[20%] hidden lg:block z-[5]">
          <div className="float-badge bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 text-white/60 text-xs font-bold tracking-wider" style={{ animationDelay: '0s' }}>CLOUD</div>
        </div>
        <div className="absolute right-[15%] top-[45%] hidden lg:block z-[5]">
          <div className="float-badge bg-brand-primary/20 border border-brand-primary/30 px-4 py-2 text-brand-primary text-xs font-bold tracking-wider" style={{ animationDelay: '1s' }}>AI</div>
        </div>
        <div className="absolute right-[8%] bottom-[25%] hidden lg:block z-[5]">
          <div className="float-badge bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 text-white/60 text-xs font-bold tracking-wider" style={{ animationDelay: '2s' }}>SECURITY</div>
        </div>
        <div className="absolute right-[22%] top-[30%] hidden lg:block z-[5]">
          <div className="float-badge bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 text-white/40 text-xs font-bold tracking-wider" style={{ animationDelay: '3s' }}>SOFTWARE</div>
        </div>

        {/* Orbiting rings */}
        <div className="absolute right-[10%] top-1/2 -translate-y-1/2 hidden lg:block z-[3]">
          <div className="relative w-48 h-48">
            <div className="orbit-ring w-48 h-48" style={{ animationDuration: '12s' }}></div>
            <div className="orbit-ring w-36 h-36 top-6 left-6" style={{ animationDuration: '18s', animationDirection: 'reverse' }}></div>
            <div className="orbit-ring w-24 h-24 top-12 left-12" style={{ animationDuration: '8s' }}></div>
          </div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16 pb-20 pt-40">
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-8 animate-on-scroll">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-brand-primary font-medium">Capabilities</span>
          </nav>
          <h1 className="font-display text-3xl sm:text-5xl lg:text-7xl xl:text-8xl font-black text-white leading-[0.95] tracking-tight mb-6 animate-on-scroll delay-100">
            Our Capabilities
          </h1>
          <p className="text-xl text-white/50 max-w-2xl leading-relaxed animate-on-scroll delay-200">
            Ten integrated practice domains. Each led by senior principals with decades of institutional enterprise experience. From sovereign strategy through precision execution and beyond.
          </p>
        </div>
      </section>

      {/* ===== 3D ROTATING PRISM + INTRO ===== */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        <div className="hex-grid-bg"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll">
              <span className="text-brand-primary font-semibold text-xs tracking-widest uppercase mb-4 block">The Onsective Difference</span>
              <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-brand-text leading-tight mb-6">
                Strategy and execution under <span className="text-gold">sovereign authority.</span>
              </h2>
              <p className="text-brand-muted text-lg leading-relaxed mb-6">
                Most consultancies hand off strategy to separate implementation teams. We reject that model entirely. The same senior principals who architect your solution are the ones who build, deploy, and optimize it. No handoffs. No lost context. No dilution of intellectual capital.
              </p>
              <p className="text-brand-muted text-base leading-relaxed">
                Our ten practice domains operate as a unified institutional system — cloud architects collaborate with security engineers, SEO strategists align with brand principals, AI teams partner with UX designers. The result: solutions that don't merely function in isolation, but compound across your entire digital estate.
              </p>
            </div>

            {/* 3D Rotating Prism — larger, more immersive */}
            <div className="flex items-center justify-center animate-on-scroll delay-200" style={{ perspective: '800px' }}>
              <div className="relative">
                {/* Glowing shadow underneath */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-40 h-6 bg-brand-primary/10 rounded-full blur-xl"></div>
                <div className="prism-3d">
                  <div className="prism-face pf-front">Cloud</div>
                  <div className="prism-face pf-back">Security</div>
                  <div className="prism-face pf-right">AI & ML</div>
                  <div className="prism-face pf-left">Strategy</div>
                  <div className="prism-face pf-top">SEO</div>
                  <div className="prism-face pf-bottom">Brand</div>
                </div>
                {/* Orbiting accent dots */}
                <div className="absolute inset-0 orbit-ring" style={{ width: '240px', height: '240px', top: '-20px', left: '-20px', animationDuration: '15s', borderColor: 'rgba(193,145,47,0.12)' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SCROLLING 3D TECH STRIP ===== */}
      <section className="py-6 bg-brand-dark border-y border-white/5 overflow-hidden">
        <div className="scroll-parallax-strip">
          {[...Array(2)].map((_, setIdx) => (
            <div key={setIdx} className="flex gap-8 shrink-0 items-center">
              {['Cloud Architecture', 'Cybersecurity', 'AI & Automation', 'Digital Experience', 'Enterprise SEO', 'Digital Marketing', 'Brand Governance', 'Custom Software', 'IT Strategy', 'Social Capital'].map((label, i) => (
                <div key={i} className="flex items-center gap-3 px-6 shrink-0">
                  <div className="w-2 h-2 bg-brand-primary/60 rotate-45"></div>
                  <span className="text-white/30 font-display text-sm font-bold tracking-widest uppercase whitespace-nowrap">{label}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ===== MORPHING DIVIDER ===== */}
      <section className="py-16 bg-brand-dark overflow-hidden flex items-center justify-center relative">
        {/* Large morphing gold shape */}
        <div className="morph-shape w-32 h-32 bg-brand-primary/10 absolute left-[10%]" style={{ animationDelay: '0s' }}></div>
        <div className="morph-shape w-24 h-24 bg-brand-primary/5 absolute right-[15%]" style={{ animationDelay: '2s' }}></div>
        <div className="morph-shape w-20 h-20 bg-brand-primary/8 absolute left-[45%] top-[20%]" style={{ animationDelay: '4s' }}></div>
        <div className="text-center relative z-10">
          <div className="flex items-center gap-4 justify-center mb-4">
            <div className="w-12 h-px bg-brand-primary/40"></div>
            <div className="pulse-dot"></div>
            <div className="w-12 h-px bg-brand-primary/40"></div>
          </div>
          <p className="text-white/40 text-lg font-display">Ten disciplines. One sovereign delivery institution.</p>
        </div>
      </section>

      {/* ===== DETAILED SERVICES — ALTERNATING LAYOUT ===== */}
      <section className="py-20 lg:py-28 bg-brand-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-20 animate-on-scroll">
            <span className="text-brand-primary font-semibold text-xs tracking-widest uppercase mb-4 block">Our Ten Practice Domains</span>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-brand-text mb-4">
              Institutional Expertise Across Every Domain
            </h2>
            <p className="text-brand-muted text-lg max-w-3xl mx-auto">
              Explore each practice domain to discover detailed capabilities, proven methodologies, and the outcomes we deliver for the world's most demanding enterprises.
            </p>
          </div>

          <div className="space-y-20 lg:space-y-28">
            {SERVICES.map((service, idx) => {
              const details = SERVICE_DETAILS[service.id];
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={service.id}
                  className="scroll-3d-enter grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
                >
                  {/* Image — 3D tilt on hover */}
                  <div
                    className={`tilt-card-3d ${isEven ? '' : 'lg:order-2'}`}
                    onMouseMove={handleTilt}
                    onMouseLeave={resetTilt}
                  >
                    <Link to={service.path} className="tilt-card-3d-inner group relative overflow-hidden rounded-lg block">
                      <img
                        src={SERVICE_IMAGE_MAP[service.id]}
                        alt={service.title}
                        className="w-full h-72 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-brand-dark/0 transition-all duration-300"></div>
                      {/* Service number badge */}
                      <div className="absolute top-4 left-4 w-10 h-10 bg-brand-primary text-white text-sm font-bold flex items-center justify-center rounded-md">
                        {String(idx + 1).padStart(2, '0')}
                      </div>
                      {/* 3D depth layer accent */}
                      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-primary/60 via-brand-primary to-brand-primary/60 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                    </Link>
                  </div>

                  {/* Content */}
                  <div className={isEven ? '' : 'lg:order-1'}>
                    <div className="flex items-center gap-3 mb-4">
                      {/* Animated counter ring */}
                      <div className="relative w-12 h-12 shrink-0">
                        <svg className="counter-wheel w-12 h-12" viewBox="0 0 48 48">
                          <circle className="track" cx="24" cy="24" r="20" strokeWidth="2" />
                          <circle
                            className="progress"
                            cx="24" cy="24" r="20" strokeWidth="2"
                            style={{ '--target-offset': `${283 - (283 * ((idx + 1) / SERVICES.length))}` } as React.CSSProperties}
                          />
                        </svg>
                        <span className="absolute inset-0 flex items-center justify-center text-brand-primary text-xs font-bold">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <div>
                        <service.icon size={18} className="text-brand-primary" />
                      </div>
                      <span className="text-brand-primary font-semibold text-xs tracking-widest uppercase">Practice {String(idx + 1).padStart(2, '0')}</span>
                    </div>

                    <Link to={service.path}>
                      <h3 className="font-display text-3xl lg:text-4xl font-bold text-brand-text mb-4 hover:text-brand-primary transition-colors leading-tight">
                        {service.title}
                      </h3>
                    </Link>

                    <p className="text-brand-muted text-base leading-relaxed mb-6">
                      {details?.longDesc || service.description}
                    </p>

                    {/* Highlights */}
                    {details?.highlights && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                        {details.highlights.map((h, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-brand-text/70">
                            <CheckCircle2 size={14} className="text-brand-primary shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    <Link
                      to={service.path}
                      className="inline-flex items-center gap-2 text-brand-primary font-semibold text-sm hover:gap-3 transition-all group"
                    >
                      Explore {service.title} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== METHODOLOGY — 4 STEPS ===== */}
      <section className="py-20 lg:py-28 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 perspective-grid opacity-30"></div>
        <div className="particle-field">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDuration: `${10 + Math.random() * 12}s`,
                animationDelay: `${Math.random() * 8}s`,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="text-brand-primary font-semibold text-xs tracking-widest uppercase mb-4 block">Institutional Methodology</span>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Our Proven Delivery Framework
            </h2>
            <p className="text-white/40 text-lg max-w-2xl mx-auto">
              A battle-tested four-phase methodology refined across 500+ institutional engagements and deployed with precision across every sovereign market we serve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'Discover', desc: 'Executive stakeholder alignment, forensic systems audit, competitive intelligence mapping, and opportunity quantification to define transformation scope and establish institutional success metrics.' },
              { num: '02', title: 'Design', desc: 'Sovereign architecture blueprints, UX wireframes, technology selection matrices, and phased roadmaps — all calibrated to your institutional KPIs, governance requirements, and capital allocation.' },
              { num: '03', title: 'Deliver', desc: 'Disciplined agile sprints with CI/CD pipelines, automated quality gates, security-hardened deployments, and weekly executive reporting to ensure institutional delivery precision.' },
              { num: '04', title: 'Optimize', desc: 'Post-deployment monitoring, A/B experimentation, performance engineering, and iterative refinement cycles that compound ROI and establish permanent competitive infrastructure.' },
            ].map((step, i) => (
              <div
                key={i}
                className="scroll-3d-enter group relative"
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="glass-card p-8 h-full hover:border-brand-primary/40 transition-all duration-500 hover:-translate-y-2 rounded-lg holo-shimmer">
                  {/* Animated number with 3D float */}
                  <div className={`depth-layer depth-layer-${(i % 3) + 1} text-5xl font-display font-black text-brand-primary/20 mb-4 group-hover:text-brand-primary/40 transition-colors duration-500`}>
                    {step.num}
                  </div>
                  {/* Connecting line to next step */}
                  {i < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-brand-primary/30 to-transparent z-10"></div>
                  )}
                  <h3 className="font-display text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{step.desc}</p>
                  {/* Glow accent on bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SUBSIDIARY DISCLOSURE ===== */}
      <section className="bg-brand-light border-y border-brand-border py-6">
        <div className="max-w-4xl mx-auto px-6 lg:px-16 text-center">
          <p className="text-brand-muted text-xs sm:text-sm leading-relaxed">
            All digital marketing services on this page are delivered by{' '}
            <a
              href="https://itsnottechy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-primary hover:underline"
            >
              It&rsquo;s Not Techy
            </a>
            , a subsidiary of Onsective Inc.
          </p>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-24 bg-brand-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(135deg, transparent 40%, #fff 40.5%, #fff 41%, transparent 41.5%)' }}></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center animate-on-scroll relative z-10">
          <h2 className="font-display text-2xl sm:text-4xl lg:text-6xl font-black text-white mb-6 tracking-tight">
            Your Competitive Advantage Starts Here.
          </h2>
          <p className="text-white/80 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Tell us about your most ambitious challenge. We'll demonstrate how our integrated institutional capabilities can architect its solution.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-10 py-4 bg-white text-brand-dark font-bold text-base hover:bg-brand-light transition-colors rounded-md"
          >
            Begin the Conversation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Services;
