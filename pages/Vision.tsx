import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Lightbulb, Shield, Award, Users, Zap, ArrowRight, Eye, Target } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';
import { COMPANY_NAME } from '../constants';

const VALUES = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We pursue bold ideas and emerging technologies that redefine what is possible for our clients. Curiosity drives every solution we build.',
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'Transparency, honesty, and ethical conduct are non-negotiable. We earn trust through actions, not promises, at every stage of engagement.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We hold ourselves to the highest standards of quality. Every deliverable, every interaction, and every recommendation reflects our commitment to being best-in-class.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Great outcomes are built together. We operate as an extension of our clients\u2019 teams, fostering open dialogue, shared ownership, and collective accountability.',
  },
  {
    icon: Zap,
    title: 'Impact',
    description: 'We measure success not by hours billed but by the tangible business outcomes we create. Every initiative must deliver measurable, lasting value.',
  },
];

const Vision: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <SEOHead pageKey="vision" />

      {/* ===== SECTION 1: HERO ===== */}
      <section className="bg-brand-dark pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center">
          <span className="text-brand-primary font-semibold text-xs tracking-[0.2em] uppercase block mb-4 animate-on-scroll">Purpose & Direction</span>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-on-scroll delay-100">
            Our Vision & Mission
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed animate-on-scroll delay-200">
            The principles that guide our strategy, shape our culture, and define the value we create for every client and community we serve.
          </p>
        </div>
      </section>

      {/* ===== SECTION 2: MISSION & VISION ===== */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Mission */}
            <div className="animate-on-scroll">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-brand-primary/10 rounded-full flex items-center justify-center">
                  <Target size={26} className="text-brand-primary" />
                </div>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-brand-dark">Our Mission</h2>
              </div>
              <div className="pl-[4.5rem]">
                <p className="text-brand-muted text-base leading-relaxed mb-4">
                  To empower enterprises worldwide with integrated technology consulting and digital transformation services that convert strategic ambition into operational reality. We exist to bridge the gap between where organizations are today and where they need to be tomorrow.
                </p>
                <p className="text-brand-muted text-base leading-relaxed">
                  Every engagement we undertake is designed to deliver measurable business outcomes, strengthen organizational resilience, and create competitive advantages that endure beyond the lifecycle of any single project. We are not vendors; we are partners invested in our clients' long-term success.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="animate-on-scroll delay-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-brand-primary/10 rounded-full flex items-center justify-center">
                  <Eye size={26} className="text-brand-primary" />
                </div>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-brand-dark">Our Vision</h2>
              </div>
              <div className="pl-[4.5rem]">
                <p className="text-brand-muted text-base leading-relaxed mb-4">
                  To be recognized as the world's most trusted digital transformation consultancy, setting the standard for how technology, strategy, and human ingenuity converge to solve the defining challenges of our era.
                </p>
                <p className="text-brand-muted text-base leading-relaxed">
                  We envision a future where every enterprise, regardless of size or geography, has access to world-class technology guidance. By expanding our global footprint and deepening our domain expertise, we aim to democratize institutional-grade digital capabilities for organizations ready to lead.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: VALUES ===== */}
      <section className="py-24 lg:py-32 bg-brand-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="text-brand-primary font-semibold text-xs tracking-[0.2em] uppercase block mb-4">What We Stand For</span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-dark mb-6">
              Our Core Values
            </h2>
            <p className="text-brand-muted text-lg max-w-3xl mx-auto leading-relaxed">
              Five foundational principles that inform every decision, every hire, and every solution we deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {VALUES.map((value, idx) => (
              <div
                key={idx}
                className={`bg-white border border-brand-border rounded-lg p-8 hover:shadow-lg hover:border-brand-primary/30 transition-all duration-300 animate-on-scroll ${idx === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center mb-5">
                  <value.icon size={22} className="text-brand-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-brand-dark mb-3">{value.title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: IP NOTICE ===== */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-16 text-center animate-on-scroll">
          <div className="border border-brand-border rounded-lg p-8 lg:p-10">
            <h3 className="font-display text-xl font-bold text-brand-dark mb-4">Intellectual Property Notice</h3>
            <p className="text-brand-muted text-sm leading-relaxed">
              All content, methodologies, frameworks, proprietary tools, and brand assets displayed on this website are the exclusive intellectual property of {COMPANY_NAME} Enterprise Inc. Unauthorized reproduction, distribution, or commercial use of any materials without prior written consent is strictly prohibited. {COMPANY_NAME}, the {COMPANY_NAME} logo, and all associated trademarks are registered marks of {COMPANY_NAME} Enterprise Inc. &copy; {new Date().getFullYear()} {COMPANY_NAME} Enterprise Inc. All rights reserved.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: CTA ===== */}
      <section className="py-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center animate-on-scroll">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6">
            Build the Future With Us
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
            Our mission is only possible through strong partnerships. If our values resonate with your organization, we would welcome the conversation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-10 py-4 bg-brand-primary text-white font-bold text-sm hover:bg-brand-gold-dark transition-colors duration-300 rounded"
          >
            Start a Conversation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Vision;
