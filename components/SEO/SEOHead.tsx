import React, { useEffect } from 'react';
import { LEGAL_NAME, HEADQUARTERS_ADDRESS, CONTACT_EMAIL, CONTACT_PHONE } from '../../data/company';

interface SEOHeadProps {
  title?: string;
  description?: string;
  pageKey?: string;     // kept for compatibility, unused
  overrides?: unknown;  // kept for compatibility, unused
  breadcrumbs?: { name: string; url: string }[];
  faqItems?: { q: string; a: string }[];
}

const SITE_NAME = 'Onsective';
const SITE_URL = 'https://onsective.com';
const DEFAULT_TITLE = 'Onsective Inc. | IT Consulting in Canada';
const DEFAULT_DESC =
  'Onsective Inc. is a Canada-based IT consulting company helping small and mid-sized businesses with software, cloud and digital systems.';
const OG_IMAGE = `${SITE_URL}/assets/logo.png`;

const setMeta = (selector: string, key: 'name' | 'property', name: string, value: string) => {
  let el = document.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(key, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', value);
};

const setLink = (rel: string, href: string) => {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
};

const SEOHead: React.FC<SEOHeadProps> = ({ title, description, breadcrumbs, faqItems }) => {
  useEffect(() => {
    const finalTitle = title || DEFAULT_TITLE;
    const finalDesc = description || DEFAULT_DESC;
    const fullTitle = finalTitle.includes('|') ? finalTitle : `${finalTitle} | ${SITE_NAME}`;

    // Canonical URL is always the clean path: no query string, no hash, no trailing slash.
    let path = window.location.pathname;
    if (path.length > 1 && path.endsWith('/')) path = path.slice(0, -1);
    const canonicalUrl = path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`;

    document.title = fullTitle;
    setMeta('meta[name="description"]', 'name', 'description', finalDesc);
    setMeta('meta[name="robots"]', 'name', 'robots', 'index, follow');
    setMeta('meta[name="author"]', 'name', 'author', LEGAL_NAME);

    setMeta('meta[property="og:title"]', 'property', 'og:title', fullTitle);
    setMeta('meta[property="og:description"]', 'property', 'og:description', finalDesc);
    setMeta('meta[property="og:image"]', 'property', 'og:image', OG_IMAGE);
    setMeta('meta[property="og:type"]', 'property', 'og:type', 'website');
    setMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    setMeta('meta[property="og:site_name"]', 'property', 'og:site_name', SITE_NAME);
    setMeta('meta[property="og:locale"]', 'property', 'og:locale', 'en_CA');

    setMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary');
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', fullTitle);
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', finalDesc);
    setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', OG_IMAGE);

    setLink('canonical', canonicalUrl);

    const graph: any[] = [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: SITE_NAME,
        legalName: LEGAL_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/assets/logo.png`,
        email: CONTACT_EMAIL,
        telephone: CONTACT_PHONE.replace(/[^0-9+]/g, ''),
        address: {
          '@type': 'PostalAddress',
          streetAddress: HEADQUARTERS_ADDRESS.street,
          addressLocality: 'Etobicoke',
          addressRegion: HEADQUARTERS_ADDRESS.state,
          postalCode: HEADQUARTERS_ADDRESS.zip,
          addressCountry: 'CA',
        },
      },
    ];
    if (breadcrumbs && breadcrumbs.length > 0) {
      graph.push({
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((bc, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: bc.name,
          item: bc.url,
        })),
      });
    }
    if (faqItems && faqItems.length > 0) {
      graph.push({
        '@type': 'FAQPage',
        mainEntity: faqItems.map(item => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      });
    }

    let ld = document.querySelector('script[data-seo="structured"]') as HTMLScriptElement | null;
    if (!ld) {
      ld = document.createElement('script');
      ld.type = 'application/ld+json';
      ld.setAttribute('data-seo', 'structured');
      document.head.appendChild(ld);
    }
    ld.textContent = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
  }, [title, description, breadcrumbs, faqItems]);

  return null;
};

export default SEOHead;
