import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';
import { SERVICES, PRICING_MODELS, COMPANY_TAGLINE } from '../constants';

const Home: React.FC = () => (
  <>
    <SEOHead
      title="Onsective Inc. | IT Consulting in Canada"
      description={COMPANY_TAGLINE}
    />

    {/* Hero */}
    <section className="bg-brand-dark pt-40 pb-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-16 text-center">
        <span className="text-brand-primary font-semibold text-xs tracking-[0.2em] uppercase block mb-5">Onsective Inc. &middot; Canada</span>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          IT consulting for small and mid-sized businesses
        </h1>
        <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed mb-10">
          {COMPANY_TAGLINE} We are a new, small team and we focus on clear communication, written quotes and careful work.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="inline-flex items-center justify-center gap-3 bg-brand-primary text-white font-semibold px-8 py-3.5 text-sm hover:bg-brand-gold-dark transition-colors">
            Get in touch <ArrowRight size={16} />
          </Link>
          <Link to="/services" className="inline-flex items-center justify-center gap-3 border border-white/20 text-white font-semibold px-8 py-3.5 text-sm hover:bg-white/5 transition-colors">
            See our services
          </Link>
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-16">
        <h2 className="font-display text-3xl lg:text-4xl font-bold text-brand-dark text-center mb-3">What we help with</h2>
        <p className="text-brand-muted text-center max-w-2xl mx-auto mb-12">
          A short summary of each service. Open one to see what is included.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s) => (
            <Link key={s.id} to={s.path} className="group border border-brand-border rounded-lg p-6 hover:border-brand-primary/50 hover:shadow-md transition-all">
              <s.icon size={22} className="text-brand-primary mb-3" />
              <h3 className="font-display text-lg font-bold text-brand-dark mb-2">{s.title}</h3>
              <p className="text-brand-muted text-sm leading-relaxed">{s.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* How we charge */}
    <section className="py-20 bg-brand-light">
      <div className="max-w-5xl mx-auto px-6 lg:px-16 text-center">
        <h2 className="font-display text-3xl lg:text-4xl font-bold text-brand-dark mb-3">How we charge</h2>
        <p className="text-brand-muted max-w-2xl mx-auto mb-10">
          Choose the arrangement that suits your project. You always get a written quote or agreement before work starts.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
          {PRICING_MODELS.map((m) => (
            <div key={m.id} className="bg-white border border-brand-border rounded-lg p-6">
              <h3 className="font-display text-lg font-bold text-brand-dark mb-2">{m.name}</h3>
              <p className="text-brand-muted text-sm">{m.summary}</p>
            </div>
          ))}
        </div>
        <Link to="/pricing" className="inline-flex items-center gap-2 text-brand-primary font-semibold text-sm mt-8 hover:gap-3 transition-all">
          See pricing details <ArrowRight size={14} />
        </Link>
      </div>
    </section>

    {/* About teaser */}
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-display text-3xl font-bold text-brand-dark mb-4">About Onsective</h2>
        <p className="text-brand-muted leading-relaxed mb-8">
          Onsective Inc. is a newly started company based in Toronto, Ontario. Read more about who we are and how we work,
          or send us a message to discuss your project.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/about" className="inline-flex items-center justify-center gap-2 border border-brand-border text-brand-dark font-semibold px-6 py-3 text-sm hover:border-brand-primary transition-colors">
            About us
          </Link>
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-brand-primary text-white font-semibold px-6 py-3 text-sm hover:bg-brand-gold-dark transition-colors">
            Contact us <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default Home;
