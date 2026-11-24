import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';
import { PageHero, Todo } from '../components/UI/PageShell';
import { LEGAL_NAME, BUSINESS_REGISTRATION, HEADQUARTERS_ADDRESS, COMPANY_TAGLINE } from '../constants';

const About: React.FC = () => (
  <>
    <SEOHead
      title="About Onsective Inc."
      description="Onsective Inc. is a new Canada-based IT consulting company helping small and mid-sized businesses with software, cloud and digital systems."
    />
    <PageHero eyebrow="About" title="About Onsective" subtitle={COMPANY_TAGLINE} />

    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-brand-muted leading-relaxed space-y-6">
        <h2 className="font-display text-3xl font-bold text-brand-dark">Who we are</h2>
        <p>
          {LEGAL_NAME} is a new IT consulting company based in {HEADQUARTERS_ADDRESS.city}, {HEADQUARTERS_ADDRESS.state}, {HEADQUARTERS_ADDRESS.country}.
          We are a small team. We help small and mid-sized businesses choose, set up and run the technology they need,
          including websites, cloud hosting, custom software, security basics, automation and online marketing.
        </p>
        <p>
          We are just getting started, so we do not have a long client list to show you. What we can offer is direct communication,
          clear written quotes, plain language and careful work.
        </p>

        <h2 className="font-display text-3xl font-bold text-brand-dark pt-6">How we work</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong className="text-brand-dark">Listen first.</strong> We start with a conversation about what your business needs.</li>
          <li><strong className="text-brand-dark">Agree in writing.</strong> You get a written scope and price before work starts.</li>
          <li><strong className="text-brand-dark">Keep you informed.</strong> We tell you what we are doing and what it costs.</li>
          <li><strong className="text-brand-dark">Be honest.</strong> If a service is not a good fit for you, we will say so.</li>
        </ul>

        <h2 className="font-display text-3xl font-bold text-brand-dark pt-6">Leadership</h2>
        <p>
          Director: <Todo>TODO: Director's full name</Todo><br />
          <Todo>TODO: add one or two sentences about the director's real background, only facts you can document.</Todo>
        </p>

        <h2 className="font-display text-3xl font-bold text-brand-dark pt-6">Company details</h2>
        <dl className="grid grid-cols-1 sm:grid-cols-3 gap-y-2 text-sm">
          <dt className="font-semibold text-brand-dark">Legal name</dt><dd className="sm:col-span-2">{BUSINESS_REGISTRATION.legalName}</dd>
          <dt className="font-semibold text-brand-dark">Jurisdiction</dt><dd className="sm:col-span-2"><Todo>{BUSINESS_REGISTRATION.jurisdiction}</Todo></dd>
          <dt className="font-semibold text-brand-dark">Corporation number</dt><dd className="sm:col-span-2"><Todo>{BUSINESS_REGISTRATION.corporationNumber}</Todo></dd>
          <dt className="font-semibold text-brand-dark">Business number</dt><dd className="sm:col-span-2"><Todo>{BUSINESS_REGISTRATION.businessNumber}</Todo></dd>
          <dt className="font-semibold text-brand-dark">Incorporated</dt><dd className="sm:col-span-2"><Todo>{BUSINESS_REGISTRATION.incorporationDate}</Todo></dd>
          <dt className="font-semibold text-brand-dark">Address</dt><dd className="sm:col-span-2">{HEADQUARTERS_ADDRESS.street}, {HEADQUARTERS_ADDRESS.city}, {HEADQUARTERS_ADDRESS.state} {HEADQUARTERS_ADDRESS.zip}, {HEADQUARTERS_ADDRESS.country}</dd>
        </dl>

        <div className="pt-8 flex flex-wrap gap-4">
          <Link to="/services" className="inline-flex items-center gap-2 bg-brand-primary text-white font-semibold px-6 py-3 text-sm hover:bg-brand-gold-dark transition-colors">
            Our services <ArrowRight size={16} />
          </Link>
          <Link to="/contact" className="inline-flex items-center gap-2 border border-brand-border text-brand-dark font-semibold px-6 py-3 text-sm hover:border-brand-primary transition-colors">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default About;
