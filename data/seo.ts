import { SEOConfigItem } from "../types";

const SITE_URL = 'https://onsective.com';
const OG_IMAGE = `${SITE_URL}/assets/logo.png`;

export const DEFAULT_SEO: SEOConfigItem = {
    title: "Onsective — Global Digital Transformation Consulting & IT Strategy",
    description: "Onsective is a global technology consulting institution. We deliver expert IT strategy, cloud migration, cybersecurity, AI automation, custom software development, enterprise SEO, and digital marketing services to 120+ enterprises across 7+ nations. Headquartered in Toronto, Canada.",
    keywords: "Onsective, Onsective Enterprise, onsective.com, Onsective consulting, Onsective Toronto, digital transformation consulting, IT consulting firm Toronto, cloud migration services, cybersecurity consulting, enterprise SEO agency, digital marketing agency Toronto, AI automation consulting, custom software development, brand management consulting",
    ogImage: OG_IMAGE,
    ogType: 'website',
    twitterCard: 'summary_large_image',
};

export const SEO_CONFIG: Record<string, SEOConfigItem> = {

    home: {
        title: "Onsective — Global Digital Transformation Consulting & IT Strategy",
        description: "Onsective is a global technology consulting institution headquartered in Toronto, Canada. We specialize in digital transformation, cloud migration (AWS, Azure, GCP), cybersecurity, AI automation, custom software development (React, Node.js, Python), enterprise SEO, digital marketing, and brand management. Serving 120+ enterprise clients across 7+ nations including Canada, USA, UK, UAE, India, Singapore, Australia, and Germany. Contact Onsective for a free strategy consultation.",
        keywords: "Onsective, Onsective Enterprise, onsective.com, Onsective consulting, Onsective Toronto, Onsective services, Onsective digital transformation, Onsective cloud, Onsective cybersecurity, Onsective AI, Onsective software, Onsective SEO, Onsective marketing, digital transformation consulting, IT consulting firm Toronto, cloud migration services Canada, cybersecurity consulting Toronto, enterprise SEO agency Toronto, digital marketing agency Toronto, AI automation consulting, custom software development Toronto, brand management consulting, IT strategy consulting Canada, technology consulting firm, global IT consulting, enterprise technology partner, React development company Toronto, Node.js development Toronto, SaaS development company Canada",
        ogTitle: "Onsective — Global Digital Transformation Consulting & IT Strategy",
        ogDescription: "Onsective is a global technology consulting institution. Cloud, AI, cybersecurity, custom software, and digital marketing services trusted by 120+ enterprises across 7+ nations.",
        ogImage: OG_IMAGE,
        canonical: SITE_URL,
        structuredData: {
            '@type': 'WebSite',
            '@id': `${SITE_URL}/#website`,
            url: SITE_URL,
            name: 'Onsective Enterprise',
            description: 'Digital Transformation Consulting & IT Strategy',
            potentialAction: {
                '@type': 'SearchAction',
                'target': `${SITE_URL}/insights?q={search_term_string}`,
                'query-input': 'required name=search_term_string',
            },
        },
    },

    about: {
        title: "About Onsective | Our Mission, Team & Digital Vision",
        description: "Discover how Onsective helps enterprises modernize through digital transformation. Meet our leadership team, learn our mission, and see why top organizations trust our consulting expertise.",
        keywords: "about Onsective, Onsective leadership team, digital transformation company Toronto, enterprise IT consulting vision, Onsective mission, technology consulting firm Canada, digital strategy experts",
        ogTitle: "About Onsective | Driving Digital Transformation Forward",
        ogDescription: "Meet the team behind Onsective. Learn how our mission-driven approach to digital transformation helps enterprises thrive in the modern landscape.",
        ogImage: OG_IMAGE,
        canonical: `${SITE_URL}/about`,
        structuredData: {
            '@type': 'AboutPage',
            '@id': `${SITE_URL}/about/#aboutpage`,
            name: 'About Onsective Enterprise',
            url: `${SITE_URL}/about`,
            description: "Learn about Onsective's mission, leadership team, and approach to enterprise digital transformation consulting.",
            mainEntity: {
                '@type': 'Organization',
                name: 'Onsective Enterprise',
                foundingLocation: { '@type': 'Place', name: 'Toronto, Ontario, Canada' },
                knowsAbout: ['Digital Transformation', 'IT Strategy', 'Cloud Computing', 'Cybersecurity', 'AI Automation', 'Digital Marketing'],
            },
        },
    },

    services: {
        title: "IT Consulting Services | Cloud, AI, Cybersecurity & SEO | Onsective",
        description: "Explore Onsective's full-service IT consulting: cloud migration, cybersecurity audits, AI automation, enterprise SEO, and digital marketing. Get a tailored strategy for your business today.",
        keywords: "IT consulting services, cloud migration consulting, cybersecurity audit services, AI automation solutions, enterprise SEO services, digital marketing consulting, IT strategy consulting Toronto, managed cloud services, penetration testing, search engine optimization agency",
        ogTitle: "IT Consulting Services | Cloud, AI, Cybersecurity & SEO | Onsective",
        ogDescription: "From cloud migration to AI automation, explore Onsective's enterprise-grade IT consulting services designed to accelerate your digital transformation.",
        ogImage: OG_IMAGE,
        canonical: `${SITE_URL}/services`,
        structuredData: {
            '@type': 'Service',
            '@id': `${SITE_URL}/services/#service`,
            name: 'Enterprise IT Consulting & Digital Transformation Services',
            provider: {
                '@type': 'Organization',
                name: 'Onsective Enterprise',
                url: SITE_URL,
            },
            serviceType: [
                'IT Strategy Consulting',
                'Cloud Migration Services',
                'Cybersecurity Consulting',
                'AI Automation Solutions',
                'Digital Marketing Services',
                'Enterprise SEO',
                'Brand Strategy',
                'Custom Software Development',
            ],
            areaServed: [
                { '@type': 'Country', name: 'Canada' },
                { '@type': 'Country', name: 'United States' },
            ],
            hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Digital Transformation Services',
                itemListElement: [
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cloud Migration & Architecture' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cybersecurity Assessment & Strategy' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI & Machine Learning Automation' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Enterprise SEO & Content Strategy' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Digital Marketing & Growth' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Software Development' } },
                ],
            },
        },
    },

    industries: {
        title: "Industry Solutions | Finance, Healthcare & Retail IT | Onsective",
        description: "Get industry-specific digital transformation for financial services, healthcare, retail, and manufacturing. Onsective delivers compliance-ready solutions tailored to your sector's unique challenges.",
        keywords: "financial services IT consulting, healthcare digital transformation, retail technology solutions, manufacturing IT modernization, industry-specific IT consulting, sector digital transformation, fintech consulting Toronto, healthcare IT compliance",
        ogTitle: "Industry-Specific Digital Transformation Solutions | Onsective",
        ogDescription: "Tailored digital transformation for finance, healthcare, retail, and manufacturing. Compliance-ready solutions built for your industry's unique challenges.",
        ogImage: OG_IMAGE,
        canonical: `${SITE_URL}/industries`,
        structuredData: {
            '@type': 'Service',
            '@id': `${SITE_URL}/industries/#industries`,
            name: 'Industry-Specific Digital Transformation',
            provider: { '@type': 'Organization', name: 'Onsective Enterprise' },
            serviceType: [
                'Financial Services IT Consulting',
                'Healthcare Digital Transformation',
                'Retail & E-Commerce Technology',
                'Manufacturing & Industrial IoT',
                'Energy & Utilities Modernization',
            ],
            areaServed: 'North America',
        },
    },

    platforms: {
        title: "Enterprise Platforms | OnsecBoard & OnsecEmployee | Onsective",
        description: "Streamline governance and HR with Onsective's proprietary platforms. OnsecBoard delivers real-time executive intelligence. OnsecEmployee modernizes talent operations. Request a demo today.",
        keywords: "OnsecBoard governance platform, OnsecEmployee HR software, enterprise governance tools, HR technology platform, corporate board management software, employee management system, proprietary enterprise platforms, executive intelligence dashboard",
        ogTitle: "Enterprise Platforms — OnsecBoard & OnsecEmployee | Onsective",
        ogDescription: "Discover Onsective's proprietary enterprise platforms for governance intelligence and modern HR operations. Request a personalized demo.",
        ogImage: OG_IMAGE,
        canonical: `${SITE_URL}/platforms`,
        structuredData: {
            '@type': 'SoftwareApplication',
            '@id': `${SITE_URL}/platforms/#software`,
            name: 'Onsective Enterprise Platforms',
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Web',
            offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'CAD',
                description: 'Contact for enterprise pricing',
            },
            author: { '@type': 'Organization', name: 'Onsective Enterprise' },
        },
    },

    insights: {
        title: "Tech Insights & Strategy Blog | AI, Cloud & SEO Trends | Onsective",
        description: "Read expert insights on AI strategy, cloud adoption, cybersecurity best practices, and enterprise SEO trends. Actionable guidance from Onsective's senior consultants for tech leaders.",
        keywords: "digital transformation blog, AI strategy insights, enterprise SEO trends, cloud migration guide, cybersecurity best practices, digital marketing trends 2026, technology thought leadership, IT strategy blog, Onsective insights, tech consulting blog",
        ogTitle: "Tech Insights & Strategy Blog | Onsective",
        ogDescription: "Actionable insights on AI, cloud, cybersecurity, and SEO from Onsective's senior consultants. Stay ahead of digital transformation trends.",
        ogImage: OG_IMAGE,
        canonical: `${SITE_URL}/insights`,
        structuredData: {
            '@type': 'Blog',
            '@id': `${SITE_URL}/insights/#blog`,
            name: 'Onsective Insights',
            url: `${SITE_URL}/insights`,
            description: 'Expert analysis and actionable guidance on AI, cloud, cybersecurity, and digital marketing for enterprise technology leaders.',
            publisher: { '@type': 'Organization', name: 'Onsective Enterprise' },
        },
    },

    contact: {
        title: "Contact Onsective | Book a Free IT Consulting Session",
        description: "Schedule a free strategy consultation with Onsective's senior consultants. Get expert advice on cloud migration, cybersecurity, AI automation, and digital marketing for your business.",
        keywords: "contact Onsective, IT consulting consultation, free strategy session, digital transformation consultation Toronto, enterprise IT consulting contact, book IT consultation, cloud migration assessment, cybersecurity consultation",
        ogTitle: "Contact Onsective | Book a Free Strategy Consultation",
        ogDescription: "Connect with Onsective's senior consultants for a free strategy session. Get tailored advice on cloud, AI, cybersecurity, and digital growth.",
        ogImage: OG_IMAGE,
        canonical: `${SITE_URL}/contact`,
        structuredData: {
            '@type': 'ContactPage',
            '@id': `${SITE_URL}/contact/#contactpage`,
            name: 'Contact Onsective',
            url: `${SITE_URL}/contact`,
            description: 'Book a free strategy consultation with Onsective senior consultants.',
            mainEntity: {
                '@type': 'Organization',
                name: 'Onsective Enterprise',
                telephone: '+1-672-673-7900',
                email: 'contact@onsective.com',
                address: {
                    '@type': 'PostalAddress',
                    streetAddress: '1111 Albion Rd',
                    addressLocality: 'Etobicoke',
                    addressRegion: 'ON',
                    postalCode: 'M9V 1A6',
                    addressCountry: 'CA',
                },
            },
        },
    },

    careers: {
        title: "Careers at Onsective | Join Our Digital Transformation Team",
        description: "Build your career in digital transformation at Onsective. Explore open roles in AI, cloud engineering, cybersecurity, and digital marketing. Remote-friendly positions across Canada.",
        keywords: "Onsective careers, digital transformation jobs Toronto, AI engineer jobs Canada, cloud architect careers, cybersecurity analyst jobs, digital marketing careers Toronto, IT consulting jobs, tech careers Canada, remote IT jobs, enterprise technology careers",
        ogTitle: "Careers at Onsective | Join Our Digital Transformation Team",
        ogDescription: "Explore exciting career opportunities in AI, cloud, cybersecurity, and digital marketing at Onsective. Remote-friendly roles across Canada.",
        ogImage: OG_IMAGE,
        canonical: `${SITE_URL}/careers`,
        structuredData: {
            '@type': 'JobPosting',
            '@id': `${SITE_URL}/careers/#jobs`,
            hiringOrganization: {
                '@type': 'Organization',
                name: 'Onsective Enterprise',
                sameAs: SITE_URL,
                logo: OG_IMAGE,
            },
            jobLocation: {
                '@type': 'Place',
                address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Toronto',
                    addressRegion: 'ON',
                    addressCountry: 'CA',
                },
            },
            applicantLocationRequirements: {
                '@type': 'Country',
                name: 'Canada',
            },
            jobLocationType: 'TELECOMMUTE',
            employmentType: 'FULL_TIME',
        },
    },

    investors: {
        title: "Investor Relations | Onsective Enterprise Inc.",
        description: "Access Onsective's investor relations portal for governance reports, capital structure details, and strategic partnership opportunities. Authorized stakeholders only.",
        keywords: "Onsective investors, enterprise technology investment, digital transformation company investors, technology private equity, Onsective capital structure, institutional investors technology",
        ogTitle: "Investor Relations | Onsective Enterprise Inc.",
        ogDescription: "Investor relations portal for authorized Onsective stakeholders. Access governance reports, capital structure, and partnership opportunities.",
        ogImage: OG_IMAGE,
        canonical: `${SITE_URL}/investors`,
        structuredData: {
            '@type': 'WebPage',
            '@id': `${SITE_URL}/investors/#investorrelations`,
            name: 'Onsective Investor Relations',
            url: `${SITE_URL}/investors`,
            description: 'Investor relations and capital governance portal for Onsective Enterprise Inc.',
        },
    },

    events: {
        title: "Tech Events & Webinars | Digital Transformation Summits | Onsective",
        description: "Register for Onsective's upcoming tech events, webinars, and executive roundtables on AI, cloud strategy, cybersecurity, and digital marketing. Free virtual events available.",
        keywords: "Onsective events, digital transformation summit, AI conference Toronto, enterprise technology webinar, cybersecurity conference Canada, digital marketing workshop, executive technology roundtable, free tech webinars",
        ogTitle: "Tech Events & Webinars | Onsective",
        ogDescription: "Register for Onsective's upcoming tech events, webinars, and executive roundtables on AI, cloud, cybersecurity, and digital strategy.",
        ogImage: OG_IMAGE,
        canonical: `${SITE_URL}/events`,
        structuredData: {
            '@type': 'EventSeries',
            '@id': `${SITE_URL}/events/#events`,
            name: 'Onsective Enterprise Events',
            url: `${SITE_URL}/events`,
            organizer: { '@type': 'Organization', name: 'Onsective Enterprise' },
            description: 'Technology summits, webinars, and executive roundtables hosted by Onsective Enterprise.',
        },
    },

    alumni: {
        title: "Onsective Alumni Network | Stay Connected With Our Community",
        description: "Join the Onsective Alumni Network to stay connected with former colleagues, access exclusive events, and continue growing your career in digital transformation.",
        keywords: "Onsective alumni, digital transformation alumni network, enterprise technology community, Onsective former employees, tech alumni network Canada",
        ogTitle: "Onsective Alumni Network | Stay Connected",
        ogDescription: "Stay connected with the Onsective community through our alumni network. Access exclusive events and career opportunities.",
        ogImage: OG_IMAGE,
        canonical: `${SITE_URL}/alumni`,
        structuredData: {
            '@type': 'WebPage',
            '@id': `${SITE_URL}/alumni/#alumni`,
            name: 'Onsective Alumni Network',
            url: `${SITE_URL}/alumni`,
            description: 'Alumni network for former Onsective team members, partners, and associates.',
        },
    },

    privacy: {
        title: "Privacy Policy | Data Protection & Your Rights | Onsective",
        description: "Read Onsective's privacy policy to understand how we collect, process, and protect your personal data. Learn about your rights under Canadian and international privacy regulations.",
        keywords: "Onsective privacy policy, data protection policy, personal data privacy, PIPEDA compliance, privacy rights, data collection policy",
        canonical: `${SITE_URL}/privacy`,
        structuredData: {
            '@type': 'WebPage',
            '@id': `${SITE_URL}/privacy/#privacypolicy`,
            name: 'Onsective Privacy Policy',
            url: `${SITE_URL}/privacy`,
        },
    },

    terms: {
        title: "Terms of Service | Website & Platform Usage | Onsective",
        description: "Review the terms governing use of Onsective's website, digital services, and enterprise platforms. Understand your rights, obligations, and service agreements.",
        keywords: "Onsective terms of service, terms of use, platform service agreement, website terms and conditions, digital services agreement",
        canonical: `${SITE_URL}/terms`,
        structuredData: {
            '@type': 'WebPage',
            '@id': `${SITE_URL}/terms/#terms`,
            name: 'Onsective Terms of Service',
            url: `${SITE_URL}/terms`,
        },
    },

    copyright: {
        title: "Copyright Policy | Intellectual Property Notice | Onsective",
        description: "Understand Onsective's copyright ownership, permissible content use, and DMCA notification procedures for all digital content and intellectual property.",
        keywords: "Onsective copyright, intellectual property policy, DMCA notice, content use policy, copyright infringement reporting",
        canonical: `${SITE_URL}/copyright`,
    },

    accessibility: {
        title: "Accessibility Statement | Inclusive Digital Experience | Onsective",
        description: "Learn about Onsective's commitment to web accessibility and digital inclusion. We design accessible experiences that work for all users, regardless of ability.",
        keywords: "Onsective accessibility, WCAG compliance, digital accessibility statement, inclusive web design, screen reader compatible website, accessible digital experience",
        canonical: `${SITE_URL}/accessibility`,
    },

    // ===== INDIVIDUAL SERVICE PAGES =====
    'service-it-strategy': {
        title: "IT Strategy Consulting Services | Enterprise Architecture | Onsective",
        description: "Onsective's IT Strategy practice delivers forensic technology audits, enterprise architecture design, and multi-year transformation roadmaps. Reduce OpEx by 40%. Trusted by 120+ enterprises across 7+ nations.",
        keywords: "IT strategy consulting, enterprise architecture consulting, technology roadmap, IT audit services, digital transformation strategy, IT governance framework, technology cost optimization, CTO consulting, IT strategy Toronto, enterprise IT assessment, TOGAF consulting, application portfolio rationalization",
        ogTitle: "IT Strategy Consulting | Enterprise Architecture | Onsective",
        canonical: `${SITE_URL}/services/it-strategy`,
    },
    'service-cloud-services': {
        title: "Cloud Migration & Architecture Services | AWS Azure GCP | Onsective",
        description: "Zero-downtime cloud migration and multi-cloud architecture by Onsective. AWS, Azure, GCP expertise. 200+ migrations completed. 35% average cost reduction. FinOps governance included.",
        keywords: "cloud migration services, AWS consulting, Azure migration, GCP architecture, multi-cloud strategy, hybrid cloud consulting, cloud cost optimization, FinOps consulting, Kubernetes consulting, zero downtime migration, cloud architecture Toronto, DevOps consulting, cloud native development, serverless architecture",
        ogTitle: "Cloud Migration & Architecture Services | Onsective",
        canonical: `${SITE_URL}/services/cloud-services`,
    },
    'service-cybersecurity': {
        title: "Cybersecurity Consulting | Zero Trust Architecture | Onsective",
        description: "Enterprise cybersecurity by Onsective. Zero-trust architecture, 24/7 SOC, penetration testing, incident response. <15 min response time. 100% compliance rate across SOC 2, ISO 27001, PCI-DSS.",
        keywords: "cybersecurity consulting, zero trust architecture, penetration testing services, SOC as a service, incident response planning, identity access management, red team testing, cybersecurity audit, SIEM consulting, cloud security posture management, cybersecurity Toronto, GRC consulting, data protection consulting",
        ogTitle: "Cybersecurity Consulting | Zero Trust | Onsective",
        canonical: `${SITE_URL}/services/cybersecurity`,
    },
    'service-digital-experience': {
        title: "Digital Experience Design & UX/UI Engineering | Onsective",
        description: "Onsective designs and builds digital experiences that drive 3.2x conversion lift. UX research, UI design systems, mobile apps, e-commerce platforms. Sub-1s load times. WCAG 2.1 AA compliant.",
        keywords: "UX design agency, UI design services, digital experience design, mobile app development, e-commerce UX, design system creation, user research agency, conversion rate optimization, web application development, React development agency, frontend development, digital product design Toronto",
        ogTitle: "Digital Experience Design & UX/UI | Onsective",
        canonical: `${SITE_URL}/services/digital-experience`,
    },
    'service-ai-automation': {
        title: "AI & Automation Consulting | Machine Learning Solutions | Onsective",
        description: "Production-grade AI systems by Onsective. Custom ML models, RPA, NLP, computer vision, predictive analytics. 70% process acceleration. 95% model accuracy. ROI within 90 days.",
        keywords: "AI consulting, machine learning consulting, robotic process automation, NLP solutions, computer vision development, predictive analytics, generative AI consulting, MLOps consulting, AI strategy, intelligent automation, artificial intelligence Toronto, deep learning consulting, AI governance, responsible AI",
        ogTitle: "AI & Automation Consulting | Onsective",
        canonical: `${SITE_URL}/services/ai-automation`,
    },
    'service-enterprise-seo': {
        title: "Enterprise SEO Services | Technical SEO & Content Strategy | Onsective",
        description: "Onsective engineers search dominance at enterprise scale. 340% average organic growth. Technical SEO, programmatic SEO, international SEO across 50+ markets. 10M+ keywords managed.",
        keywords: "enterprise SEO services, technical SEO audit, programmatic SEO, international SEO, content strategy consulting, SEO agency Toronto, enterprise link building, Core Web Vitals optimization, schema markup strategy, site migration SEO, SEO consulting Canada, search engine optimization agency",
        ogTitle: "Enterprise SEO Services | Onsective",
        canonical: `${SITE_URL}/services/enterprise-seo`,
    },
    'service-digital-marketing': {
        title: "Digital Marketing Agency | Paid Media & Marketing Automation | Onsective",
        description: "Full-funnel digital marketing by Onsective. 5.2x average ROAS. Google, Meta, LinkedIn ad management. Marketing automation. Multi-touch attribution. 3M+ leads generated.",
        keywords: "digital marketing agency, paid media management, Google Ads management, Meta advertising, LinkedIn advertising, marketing automation, conversion rate optimization, performance marketing, PPC agency Toronto, lead generation services, account based marketing, marketing attribution, digital marketing consulting Canada",
        ogTitle: "Digital Marketing Agency | Onsective",
        canonical: `${SITE_URL}/services/digital-marketing`,
    },
    'service-social-capital': {
        title: "Social Media Management & Strategy | Enterprise Scale | Onsective",
        description: "Institutional social media management by Onsective. 400% engagement growth. LinkedIn, Instagram, YouTube, TikTok strategy. 50+ brands managed. Crisis communication protocols.",
        keywords: "social media management, social media agency Toronto, LinkedIn marketing, Instagram management, YouTube strategy, TikTok marketing, social media strategy, community management, influencer marketing, social media crisis management, employer branding social media, enterprise social media",
        ogTitle: "Social Media Management | Onsective",
        canonical: `${SITE_URL}/services/social-capital`,
    },
    'service-custom-software': {
        title: "Custom Software Development Company | Web & Mobile Apps | Onsective",
        description: "Onsective builds bespoke software — web apps, mobile apps, SaaS platforms, APIs. React, Node.js, Python, Go, Kubernetes. 200+ apps shipped. 99.9% uptime. 4x faster to market.",
        keywords: "custom software development, web application development, mobile app development, SaaS development company, API development, React development company, Node.js development, Python development, Kubernetes consulting, software engineering Toronto, bespoke software, enterprise software development, full stack development company, MVP development, startup software development",
        ogTitle: "Custom Software Development | Onsective",
        canonical: `${SITE_URL}/services/custom-software`,
    },
    'service-brand-management': {
        title: "Brand Management & Strategy Consulting | Visual Identity | Onsective",
        description: "Onsective codifies institutional brand identity. Brand strategy, visual identity systems, brand governance. 85% brand recall lift. 100+ brand audits. 40+ industries served.",
        keywords: "brand management consulting, brand strategy, visual identity design, corporate rebranding, brand governance, employer branding, brand guidelines creation, brand audit services, brand positioning, corporate identity design, brand management agency Toronto, brand consulting Canada",
        ogTitle: "Brand Management & Strategy | Onsective",
        canonical: `${SITE_URL}/services/brand-management`,
    },
};
