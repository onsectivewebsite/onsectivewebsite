import React, { useEffect } from 'react';
import { SEO_CONFIG, DEFAULT_SEO } from '../../data/seo';
import { SEOConfigItem } from '../../types';

interface SEOHeadProps {
  title?: string;
  description?: string;
  pageKey?: string;
  overrides?: Partial<SEOConfigItem>;
}

const SITE_NAME = 'Command the Future';
const SITE_URL = 'https://onsective.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/logo.png`;

const setMeta = (selector: string, attr: string, value: string, attrName = 'content') => {
  let el = document.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, selector.match(/"([^"]+)"/)?.[1] || '');
    document.head.appendChild(el);
  }
  el.setAttribute(attrName, value);
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

const SEOHead: React.FC<SEOHeadProps> = ({ title, description, pageKey, overrides }) => {
  useEffect(() => {
    // 1. Resolve SEO config
    const pageSEO: SEOConfigItem = pageKey && SEO_CONFIG[pageKey]
      ? { ...DEFAULT_SEO, ...SEO_CONFIG[pageKey], ...overrides }
      : { ...DEFAULT_SEO, ...overrides };

    const finalTitle = title || pageSEO.title;
    const finalDesc = description || pageSEO.description;
    const finalKeywords = pageSEO.keywords || DEFAULT_SEO.keywords || '';
    const finalOgTitle = pageSEO.ogTitle || finalTitle;
    const finalOgDesc = pageSEO.ogDescription || finalDesc;
    const finalOgImage = pageSEO.ogImage || DEFAULT_OG_IMAGE;
    const finalOgType = pageSEO.ogType || 'website';
    const finalTwitterCard = pageSEO.twitterCard || 'summary_large_image';
    const canonicalUrl = pageSEO.canonical || SITE_URL;

    // --- Page Title ---
    const titleSuffix = ` | ${SITE_NAME}`;
    document.title = finalTitle.includes('|') ? finalTitle : `${finalTitle}${titleSuffix}`;

    // --- Basic Meta ---
    setMeta('meta[name="description"]', 'name', finalDesc);
    if (finalKeywords) setMeta('meta[name="keywords"]', 'name', finalKeywords);
    setMeta('meta[name="robots"]', 'name', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    setMeta('meta[name="author"]', 'name', SITE_NAME);

    // --- Open Graph ---
    setMeta('meta[property="og:title"]', 'property', finalOgTitle);
    setMeta('meta[property="og:description"]', 'property', finalOgDesc);
    setMeta('meta[property="og:image"]', 'property', finalOgImage);
    setMeta('meta[property="og:type"]', 'property', finalOgType);
    setMeta('meta[property="og:url"]', 'property', canonicalUrl);
    setMeta('meta[property="og:site_name"]', 'property', SITE_NAME);
    setMeta('meta[property="og:locale"]', 'property', 'en_CA');

    // --- Twitter Card ---
    setMeta('meta[name="twitter:card"]', 'name', finalTwitterCard);
    setMeta('meta[name="twitter:title"]', 'name', finalOgTitle);
    setMeta('meta[name="twitter:description"]', 'name', finalOgDesc);
    setMeta('meta[name="twitter:image"]', 'name', finalOgImage);
    setMeta('meta[name="twitter:site"]', 'name', '@OnsectiveEnt');
    setMeta('meta[name="twitter:creator"]', 'name', '@OnsectiveEnt');

    // --- Canonical ---
    setLink('canonical', canonicalUrl);

    // --- Structured Data (JSON-LD) ---
    const orgSchema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': `${SITE_URL}/#organization`,
          name: SITE_NAME,
          url: SITE_URL,
          logo: {
            '@type': 'ImageObject',
            url: `${SITE_URL}/assets/logo.png`,
          },
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+1-672-673-7900',
            contactType: 'customer service',
            areaServed: 'Worldwide',
          },
          sameAs: [
            'https://www.linkedin.com/company/onsective',
            'https://www.instagram.com/onsective',
            'https://twitter.com/OnsectiveEnt',
          ],
          address: {
            '@type': 'PostalAddress',
            streetAddress: '1111 Albion Rd',
            addressLocality: 'Etobicoke',
            addressRegion: 'ON',
            postalCode: 'M9V 1A6',
            addressCountry: 'CA',
          },
        },
        ...(pageSEO.structuredData ? [pageSEO.structuredData] : []),
      ],
    };

    let ldScript = document.querySelector('script[data-seo="structured"]') as HTMLScriptElement | null;
    if (!ldScript) {
      ldScript = document.createElement('script');
      ldScript.type = 'application/ld+json';
      ldScript.setAttribute('data-seo', 'structured');
      document.head.appendChild(ldScript);
    }
    ldScript.textContent = JSON.stringify(orgSchema, null, 2);

    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [title, description, pageKey, overrides]);

  return null;
};

export default SEOHead;