import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';
import { PageHero, Todo } from '../components/UI/PageShell';
import { PRICING_MODELS } from '../constants';

const Pricing: React.FC = () => (
  <>
    <SEOHead
      title="How We Charge"
      description="How Onsective Inc. charges for IT consulting: hourly, project-based quotes or a monthly retainer. All prices are in Canadian dollars."
    />
    <PageHero
      eyebrow="Pricing"
      title="How We Charge"
      subtitle="We offer three simple ways to work together. Every engagement starts with a conversation and a written quote or agreement. There are no hidden fees."
    />

    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRICING_MODELS.map((m) => (
            <div key={m.id} className="border border-brand-border rounded-lg p-8 flex flex-col">
              <h2 className="font-display text-2xl font-bold text-brand-dark mb-2">{m.name}</h2>
              <p className="text-brand-muted text-sm mb-5">{m.summary}</p>
              <p className="text-brand-dark font-semibold mb-1"><Todo>{m.amount}</Todo></p>
              <p className="text-brand-muted text-xs mb-5">Best for: {m.bestFor}</p>
              <ul className="space-y-2 text-sm text-brand-muted mt-auto">
                {m.details.map((d, i) => (
                  <li key={i} className="flex gap-2"><Check size={16} className="text-brand-primary shrink-0 mt-0.5" /><span>{d.startsWith('TODO') ? <Todo>{d}</Todo> : d}</span></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 max-w-3xl mx-auto text-brand-muted text-sm leading-relaxed space-y-3">
          <h2 className="font-display text-2xl font-bold text-brand-dark">Good to know</h2>
          <ul className="list-disc pl-6 space-y-1.5">
            <li>All prices are in Canadian dollars (CAD) unless the quote says otherwise.</li>
            <li><Todo>TODO: Add "plus applicable GST/HST" only if you are registered for GST/HST.</Todo></li>
            <li>Third-party costs (cloud hosting, software licences, domain names, advertising spend) are paid by you directly to the provider and are not included in our fees.</li>
            <li>Payment terms are written into each quote or agreement. <Todo>TODO: e.g. invoices due within 14 days.</Todo></li>
            <li>Cancellations and refunds are covered in our <Link to="/refund-policy" className="text-brand-primary underline">Refund and Cancellation Policy</Link>.</li>
          </ul>
        </div>

        <div className="text-center mt-14">
          <Link to="/contact" className="inline-flex items-center gap-3 bg-brand-primary text-white font-semibold px-8 py-3.5 text-sm hover:bg-brand-gold-dark transition-colors">
            Request a quote <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default Pricing;
