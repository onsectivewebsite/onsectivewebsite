import React from 'react';
import SEOHead from '../components/SEO/SEOHead';

const Accessibility: React.FC = () => {
  return (
    <>
      <SEOHead title="Accessibility Statement" description="Accessibility commitment for Onsective." />
      <section className="pt-40 pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-serif text-brand-black mb-8">Accessibility Statement</h1>
            <div className="prose prose-lg text-gray-600">
                <p>Onsective is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.</p>
                <h3>Conformance Status</h3>
                <p>The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. Onsective is partially conformant with WCAG 2.1 level AA.</p>
                <h3>Feedback</h3>
                <p>We welcome your feedback on the accessibility of Onsective. Please let us know if you encounter accessibility barriers on Onsective: concierge@onsective.com.</p>
            </div>
        </div>
      </section>
    </>
  );
};

export default Accessibility;