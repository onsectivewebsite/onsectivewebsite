import { SEOConfigItem } from "../types";

const SITE_URL = 'https://onsective.com';
const OG_IMAGE = `${SITE_URL}/assets/logo.png`;

export const DEFAULT_SEO: SEOConfigItem = {
    title: "Command the Future | Enterprise Excellence",
    description: "Onsective is a premier global digital transformation partner delivering IT strategy, cloud, cybersecurity, AI automation, digital marketing, and enterprise SEO solutions for the world's most sophisticated organizations.",
    keywords: "Onsective, digital transformation, IT consulting, cloud services, cybersecurity, AI automation, enterprise SEO, digital marketing, global IT partner",
    ogImage: OG_IMAGE,
    ogType: 'website',
    twitterCard: 'summary_large_image',
};

export const SEO_CONFIG: Record<string, SEOConfigItem> = {

    home: {
        title: "Command the Future | Global Digital Transformation Partner",
        description: "Command the future with Onsective — the world's premier digital transformation firm. We engineer digital resilience for enterprise organizations across cloud, AI, cybersecurity, and marketing.",
        keywords: "Onsective, digital transformation partner, global IT strategy, enterprise cloud services, cybersecurity firm, AI automation company, digital marketing agency, Onsective Enterprise, digital transformation Toronto, enterprise technology consulting",
        ogTitle: "Command the Future | Command the Future of Digital",
        ogDescription: "Onsective engineers digital resilience for the world's most sophisticated organizations through sovereign cloud, AI, and data architecture.",
        ogImage: OG_IMAGE,
        canonical: SITE_URL,
        structuredData: {
            '@type': 'WebSite',
            '@id': `${SITE_URL}/#website`,
            url: SITE_URL,
            name: 'Onsective Enterprise',
            description: 'Global Digital Transformation Partner',
            potentialAction: {
                '@type': 'SearchAction',
                'target': `${SITE_URL}/insights?q={search_term_string}`,
                'query-input': 'required name=search_term_string',
            },
        },
    },

    about: {
        title: "About Command the Future | Leadership, Vision & Global Mission",
        description: "Learn about Onsective's mission to transform the global enterprise landscape. Meet our executive leadership team and understand our philosophy of Sovereign Engineering and Institutional Digital Stewardship.",
        keywords: "about Onsective, Onsective leadership, digital transformation company history, enterprise IT vision, institutional technology, Onsective team, digital transformation mission",
        ogTitle: "About Onsective — The Genesis of a Digital Authority",
        ogDescription: "Discover the story, mission, and leadership behind Onsective — the global digital transformation authority trusted by sophisticated enterprises worldwide.",
        ogImage: OG_IMAGE,
        canonical: `${SITE_URL}/about`,
        structuredData: {
            '@type': 'AboutPage',
            name: 'About Onsective',
            url: `${SITE_URL}/about`,
            description: "Onsective's mission, leadership, and global vision.",
        },
    },

    services: {
        title: "Enterprise IT Services | Cloud, AI, Cybersecurity & Digital Marketing | Command the Future",
        description: "Explore Onsective's enterprise-grade service catalog: IT Strategy, Cloud Architecture, Cybersecurity, AI Automation, Digital Marketing, Enterprise SEO, and Brand Management — built for global institutions.",
        keywords: "enterprise IT services, cloud consulting, cybersecurity services, AI automation, digital marketing agency, enterprise SEO, brand management, IT strategy consulting, Onsective services, digital transformation services",
        ogTitle: "Onsective Service Catalog | Enterprise-Grade Digital Services",
        ogDescription: "From zero-trust cloud architecture to autonomous AI systems, explore Onsective's full catalog of institutional-grade digital services.",
        ogImage: OG_IMAGE,
        canonical: `${SITE_URL}/services`,
        structuredData: {
            '@type': 'Service',
            name: 'Enterprise Digital Transformation Services',
            provider: { '@type': 'Organization', name: 'Onsective Enterprise' },
            serviceType: ['IT Strategy', 'Cloud Services', 'Cybersecurity', 'AI Automation', 'Digital Marketing', 'Enterprise SEO', 'Brand Management'],
            areaServed: 'Worldwide',
        },
    },

    industries: {
        title: "Industry Verticals | Financial, Healthcare, Retail & Manufacturing | Command the Future",
        description: "Onsective delivers specialized digital transformation for Financial Institutions, Life Sciences, Retail & Commerce, Industrial 4.0, and Energy & Utilities sectors worldwide.",
        keywords: "financial technology, healthcare IT, retail digital transformation, industrial IoT, energy technology, vertical IT solutions, sector-specific technology, Onsective industries",
        ogTitle: "Onsective Industry Verticals | Specialized Global Stewardship",
        ogDescription: "Deep sector expertise across Finance, Life Sciences, Retail, Manufacturing, and Energy for the world's most institutional digital programs.",
        ogImage: OG_IMAGE,
        canonical: `${SITE_URL}/industries`,
    },

    platforms: {
        title: "Enterprise Platforms | OnsecBoard & OnsecEmployee | Command the Future",
        description: "Discover Onsective's proprietary enterprise software platforms. OnsecBoard delivers real-time governance intelligence while OnsecEmployee modernizes institutional HR and talent operations.",
        keywords: "OnsecBoard, OnsecEmployee, enterprise governance software, HR technology, institutional platforms, proprietary enterprise software, corporate governance tools, Onsective platforms",
        ogTitle: "Onsective Platforms | Proprietary Enterprise Intelligence",
        ogDescription: "Proprietary institutional platforms engineered to govern, accelerate, and streamline the world's most complex enterprise operations.",
        ogImage: OG_IMAGE,
        canonical: `${SITE_URL}/platforms`,
    },

    insights: {
        title: "Strategic Insights | AI, Digital Marketing, SEO & Enterprise Technology | Command the Future",
        description: "Read Onsective's expert insights on AI strategy, digital marketing trends, enterprise SEO, cloud adoption, and cybersecurity intelligence curated for institutional decision-makers.",
        keywords: "digital transformation insights, AI trends, enterprise SEO blog, digital marketing strategy, cybersecurity intelligence, cloud adoption guide, technology thought leadership, Onsective insights",
        ogTitle: "Onsective Strategic Intelligence | Expert Market Insights",
        ogDescription: "Curated analysis, research, and strategic intelligence on AI, digital marketing, cloud, and cybersecurity for enterprise leaders.",
        ogImage: OG_IMAGE,
        canonical: `${SITE_URL}/insights`,
        structuredData: {
            '@type': 'Blog',
            name: 'Onsective Strategic Intelligence',
            url: `${SITE_URL}/insights`,
            description: 'Expert briefings on AI, digital marketing, and enterprise technology.',
        },
    },

    contact: {
        title: "Contact Command the Future | Book an Executive Consultation",
        description: "Initiate a confidential executive briefing with Onsective architects. Contact our team for enterprise digital transformation consulting, cloud strategy, and institutional technology solutions.",
        keywords: "contact Onsective, digital transformation consultation, enterprise IT consulting, book a consultation, executive briefing, IT strategy meeting, Onsective contact, Toronto IT consulting",
        ogTitle: "Contact Command the Future | Initiate Your Strategic Briefing",
        ogDescription: "Connect directly with Onsective's senior architects. All engagements are confidential, strategic, and institutional-grade.",
        ogImage: OG_IMAGE,
        canonical: `${SITE_URL}/contact`,
        structuredData: {
            '@type': 'ContactPage',
            name: 'Contact Command the Future',
            url: `${SITE_URL}/contact`,
            description: 'Book a confidential executive consultation with Onsective architects.',
        },
    },

    careers: {
        title: "Careers at Command the Future | Join the Global Digital Elite",
        description: "Explore elite career mandates at Command the Future across AI, Cloud, Cybersecurity, Strategy, and Digital Marketing. We hire sovereign thinkers who engineer undisputed market authority.",
        keywords: "Onsective careers, digital transformation jobs, AI jobs Toronto, cloud architect jobs, cybersecurity careers, IT strategy careers, digital marketing jobs, tech careers Canada, enterprise technology careers",
        ogTitle: "Careers at Command the Future | Elite Technology Mandates",
        ogDescription: "Drive the future of enterprise technology. Explore career opportunities in AI, Cloud, Cybersecurity, and Digital Strategy at Command the Future.",
        ogImage: OG_IMAGE,
        canonical: `${SITE_URL}/careers`,
        structuredData: {
            '@type': 'JobPosting',
            hiringOrganization: {
                '@type': 'Organization',
                name: 'Onsective Enterprise',
                sameAs: 'https://onsective.com',
            },
            jobLocation: {
                '@type': 'Place',
                address: { '@type': 'PostalAddress', addressLocality: 'Toronto', addressRegion: 'ON', addressCountry: 'CA' },
            },
        },
    },

    investors: {
        title: "Investor Relations | Command the Future Enterprise Inc.",
        description: "Private investor relations hub for Onsective Enterprise Inc. Access governance reports, capital structure information, and strategic partnership briefings for authorized stakeholders.",
        keywords: "Onsective investors, enterprise investment, digital transformation investment, technology company investors, private equity technology, Onsective capital, institutional investors",
        ogTitle: "Onsective Investor Relations | Capital Governance",
        ogDescription: "Exclusive capital governance and investor relations portal for authorized Onsective stakeholders.",
        ogImage: OG_IMAGE,
        canonical: `${SITE_URL}/investors`,
    },

    events: {
        title: "Global Events & Summits | Command the Future Enterprise",
        description: "Join Onsective at exclusive global summits, executive roundtables, and technology conferences focused on AI governance, digital sovereignty, and enterprise transformation.",
        keywords: "Onsective events, digital transformation summit, AI conference, enterprise technology conference, global technology summit, executive roundtable, Onsective webinar",
        ogTitle: "Onsective Global Events | Executive Summits & Conferences",
        ogDescription: "Join Onsective's exclusive global summits, roundtables, and enterprise technology conferences worldwide.",
        ogImage: OG_IMAGE,
        canonical: `${SITE_URL}/events`,
    },

    alumni: {
        title: "Command the Future Alumni Network | Stay Connected",
        description: "The Onsective Alumni Network connects former team members, partners, and associates. Stay engaged with the global Onsective community.",
        keywords: "Onsective alumni, digital transformation alumni, enterprise technology network, Onsective community, former employees",
        ogTitle: "Onsective Alumni Network | The Community Continues",
        ogDescription: "Stay connected with the global Onsective community through our exclusive alumni network.",
        ogImage: OG_IMAGE,
        canonical: `${SITE_URL}/alumni`,
    },

    privacy: {
        title: "Privacy Policy | Command the Future Enterprise",
        description: "Read Onsective's comprehensive privacy policy covering data collection, processing, storage, and your rights under GDPR, PIPEDA, and applicable privacy regulations.",
        keywords: "Onsective privacy policy, data protection, GDPR, PIPEDA, enterprise data privacy, personal data policy",
        canonical: `${SITE_URL}/privacy`,
    },

    terms: {
        title: "Terms of Use | Command the Future Enterprise",
        description: "Terms and conditions governing the use of Onsective's website, digital services, platforms, and proprietary tools.",
        keywords: "Onsective terms of service, terms of use, service agreement, platform terms",
        canonical: `${SITE_URL}/terms`,
    },

    copyright: {
        title: "Copyright Policy | Command the Future Enterprise",
        description: "Copyright ownership, permissible use, and DMCA infringement notification procedures for all Onsective digital content and intellectual property.",
        keywords: "Onsective copyright, intellectual property policy, DMCA, content use policy",
        canonical: `${SITE_URL}/copyright`,
    },

    accessibility: {
        title: "Accessibility Statement | Command the Future Enterprise",
        description: "Onsective's commitment to digital inclusion, WCAG 2.1 AA compliance, and accessible experience design for all users.",
        keywords: "Onsective accessibility, WCAG 2.1, digital inclusion, accessible website, screen reader",
        canonical: `${SITE_URL}/accessibility`,
    },
};
