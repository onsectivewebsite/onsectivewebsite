import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';
import { PageHero } from '../components/UI/PageShell';
import { SERVICES } from '../constants';

const Services: React.FC = () => (
  <>
    <SEOHead
      title="IT Consulting Services"
      description="Onsective Inc. offers IT consulting for small and mid-sized businesses: IT strategy, cloud, security, websites, software, automation, SEO and marketing."
    />
    <PageHero
      eyebrow="Services"
      title="What we do"
      subtitle="Practical IT consulting for small and mid-sized businesses. Each service below is described in plain language. See How We Charge for pricing."
    />

    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-16 space-y-8">
        {SERVICES.map((s) => (
          <article key={s.id} className="border border-brand-border rounded-lg p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-3">
                <s.icon size={22} className="text-brand-primary" />
                <h2 className="font-display text-2xl font-bold text-brand-dark">{s.title}</h2>
              </div>
              <p className="text-brand-muted leading-relaxed mb-4">{s.description}</p>
              <p className="text-sm text-brand-muted"><strong className="text-brand-dark">Good for:</strong> {s.goodFor}</p>
              <Link to={s.path} className="inline-flex items-center gap-2 text-brand-primary font-semibold text-sm mt-5 hover:gap-3 transition-all">
                Learn more <ArrowRight size={14} />
              </Link>
            </div>
            <ul className="space-y-2 text-sm text-brand-muted">
              {s.whatWeDo.map((w, i) => (
                <li key={i} className="flex gap-2"><CheckCircle2 size={16} className="text-brand-primary shrink-0 mt-0.5" />{w}</li>
              ))}
            </ul>
          </article>
        ))}

        <div className="text-center pt-6">
          <Link to="/pricing" className="inline-flex items-center gap-3 bg-brand-primary text-white font-semibold px-8 py-3.5 text-sm hover:bg-brand-gold-dark transition-colors">
            How we charge <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default Services;
