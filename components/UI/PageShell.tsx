import React from 'react';

export const PageHero: React.FC<{ eyebrow?: string; title: string; subtitle?: string }> = ({ eyebrow, title, subtitle }) => (
  <section className="bg-brand-dark pt-40 pb-16">
    <div className="max-w-5xl mx-auto px-6 lg:px-16 text-center">
      {eyebrow && <span className="text-brand-primary font-semibold text-xs tracking-[0.2em] uppercase block mb-4">{eyebrow}</span>}
      <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">{title}</h1>
      {subtitle && <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>}
    </div>
  </section>
);

/** Highlighted placeholder so unfinished facts are impossible to miss. */
export const Todo: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <mark className="bg-yellow-100 text-yellow-900 px-1 rounded">{children}</mark>
);

export const LegalPage: React.FC<{ title: string; updated: string; children: React.ReactNode }> = ({ title, updated, children }) => (
  <>
    <PageHero title={title} />
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <p className="text-brand-muted text-sm mb-10">Last updated: {updated}</p>
        <div className="space-y-5 text-brand-muted leading-relaxed [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-brand-dark [&_h2]:mt-10 [&_h2]:mb-2 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1.5 [&_a]:text-brand-primary [&_a]:underline">
          {children}
        </div>
      </div>
    </section>
  </>
);
