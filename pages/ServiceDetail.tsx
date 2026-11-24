import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';
import { PageHero } from '../components/UI/PageShell';
import { SERVICES, PRICING_MODELS } from '../constants';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES.find((s) => s.id === id);
  if (!service) return <Navigate to="/services" replace />;
  const others = SERVICES.filter((s) => s.id !== service.id);

  return (
    <>
      <SEOHead
        title={`${service.title} | IT Consulting`}
        description={service.description}
        breadcrumbs={[
          { name: 'Home', url: 'https://onsective.com/' },
          { name: 'Services', url: 'https://onsective.com/services' },
          { name: service.title, url: `https://onsective.com${service.path}` },
        ]}
      />
      <PageHero eyebrow="Service" title={service.title} subtitle={service.description} />

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-brand-muted leading-relaxed space-y-8">
          <div>
            <h2 className="font-display text-2xl font-bold text-brand-dark mb-4">What we do</h2>
            <ul className="space-y-3">
              {service.whatWeDo.map((w, i) => (
                <li key={i} className="flex gap-3"><CheckCircle2 size={18} className="text-brand-primary shrink-0 mt-1" />{w}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-brand-dark mb-2">Who it is for</h2>
            <p>{service.goodFor}</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-brand-dark mb-2">How we charge</h2>
            <p>
              We work {PRICING_MODELS.map((m) => m.name.toLowerCase()).join(', ')}. See the{' '}
              <Link to="/pricing" className="text-brand-primary underline">pricing page</Link> for details.
              You always receive a written quote or agreement before work starts.
            </p>
          </div>

          <div className="pt-4">
            <Link to="/contact" className="inline-flex items-center gap-3 bg-brand-primary text-white font-semibold px-8 py-3.5 text-sm hover:bg-brand-gold-dark transition-colors">
              Request a quote <ArrowRight size={16} />
            </Link>
          </div>

          <div className="pt-8 border-t border-brand-border">
            <h2 className="font-display text-xl font-bold text-brand-dark mb-3">Other services</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-sm">
              {others.map((o) => (
                <li key={o.id}><Link to={o.path} className="text-brand-primary hover:underline">{o.title}</Link></li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;
