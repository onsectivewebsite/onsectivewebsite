import { BlogPost } from '../types';

// @ts-ignore — kept for potential future use
const _LEGACY_IMAGES = [
  'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1553028826-ccdfc006d078?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517433456624-010a3c853eb2?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1552581234-26160f608093?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1556155092-490a1ba16284?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1589652717521-10c0d092dea9?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1548092372-0d1bd40894a3?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1516542076529-1ea3854896f2?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1460467820054-c87ab43e9b59?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1509718443690-d8e2fb3474b7?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1454923634634-bd1614719a7b?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1565728744382-61accd4aa148?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1546054454-aa26e2b734c7?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1550439062-609e1531270e?w=800&auto=format&fit=crop',
];

const BLOG_TOPICS = [
  {
    category: 'Artificial Intelligence',
    keywords: ['Generative AI', 'Machine Learning Ops', 'Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'AI Governance', 'Neural Networks', 'Intelligent Automation', 'AI Strategy', 'Deep Learning']
  },
  {
    category: 'Cloud & Infrastructure',
    keywords: ['Multi-Cloud Architecture', 'Cloud Migration', 'Serverless Computing', 'Kubernetes Orchestration', 'Cloud Cost Optimization', 'Hybrid Cloud', 'Edge Computing', 'Cloud Security Posture', 'Infrastructure as Code']
  },
  {
    category: 'Cybersecurity',
    keywords: ['Zero Trust Security', 'Threat Intelligence', 'Penetration Testing', 'Ransomware Defense', 'Identity Access Management', 'SOC Operations', 'Data Loss Prevention', 'Incident Response', 'Supply Chain Security']
  },
  {
    category: 'Digital Transformation',
    keywords: ['Legacy Modernization', 'Digital Maturity', 'Change Management', 'Enterprise Architecture', 'Process Re-engineering', 'Digital Twin Strategy', 'API-First Design', 'Composable Enterprise', 'Platform Engineering']
  },
  {
    category: 'Enterprise SEO',
    keywords: ['Technical SEO Audits', 'International SEO', 'Core Web Vitals', 'Schema Markup Strategy', 'Enterprise Link Building', 'Search Intent Optimization', 'Programmatic SEO', 'SEO Migration Planning']
  },
  {
    category: 'Digital Marketing',
    keywords: ['Performance Marketing', 'Marketing Attribution', 'Conversion Rate Optimization', 'Paid Media Strategy', 'Content Marketing ROI', 'Account-Based Marketing', 'Marketing Automation', 'Customer Data Platforms']
  },
  {
    category: 'Brand Strategy',
    keywords: ['Brand Architecture', 'Corporate Repositioning', 'Brand Equity Measurement', 'Visual Identity Systems', 'Employer Branding', 'Brand Governance', 'Market Positioning', 'Narrative Strategy']
  },
  {
    category: 'Industry Insights',
    keywords: ['Financial Services Trends', 'Healthcare Digitization', 'Retail Innovation', 'Manufacturing 4.0', 'Energy Transition Tech', 'Public Sector Modernization', 'Logistics Optimization', 'Telecommunications Evolution', 'Real Estate Technology']
  }
];

const TITLES = [
  "Why Most {kw} Initiatives Fail (And How to Avoid It)",
  "The Hidden Cost of Ignoring {kw}",
  "{kw}: What Every CTO Should Know in 2026",
  "Inside Our Approach to {kw}",
  "A Practical Framework for {kw} at Enterprise Scale",
  "The Executive's Guide to {kw}",
  "What We Learned From 50 {kw} Engagements",
  "Rethinking {kw}: Lessons From the Front Lines"
];

const EXCERPTS = [
  "Most organizations underestimate the complexity of {kw}. We break down the critical success factors that separate transformative outcomes from expensive failures.",
  "Is your organization leaving value on the table? Our analysis of {kw} across 120+ enterprise clients reveals patterns that consistently drive measurable results.",
  "The landscape around {kw} is shifting faster than most leadership teams realize. Here is what the data tells us about where the market is heading next.",
  "{kw} is no longer optional for enterprises competing at global scale. We outline the strategic imperatives and implementation realities that boards need to understand.",
  "After leading dozens of {kw} initiatives across industries, our team distills the frameworks and methodologies that consistently deliver ROI within the first year.",
  "The conversation around {kw} has matured significantly. We share a candid assessment of what works, what does not, and where organizations should focus investment.",
  "Enterprise leaders are asking harder questions about {kw}. This analysis cuts through the noise to deliver actionable intelligence for decision-makers.",
  "Drawing on our work with Fortune 500 clients, we examine how {kw} is reshaping competitive dynamics and what it means for your strategic roadmap."
];

const MONTHS = [
  'Apr 2026', 'Mar 2026', 'Feb 2026', 'Jan 2026',
  'Dec 2025', 'Nov 2025', 'Oct 2025', 'Sep 2025',
  'Aug 2025', 'Jul 2025', 'Jun 2025', 'May 2025',
  'Apr 2025', 'Mar 2025', 'Feb 2025', 'Jan 2025',
  'Dec 2024', 'Nov 2024', 'Oct 2024', 'Sep 2024',
  'Aug 2024', 'Jul 2024', 'Jun 2024', 'May 2024',
  'Apr 2024', 'Mar 2024', 'Feb 2024', 'Jan 2024'
];

const generateBlogPosts = (): BlogPost[] => {
  const posts: BlogPost[] = [];
  let id = 1;

  BLOG_TOPICS.forEach((topic) => {
    topic.keywords.forEach((kw) => {
      TITLES.forEach((template, tIdx) => {
        const title = template.replace('{kw}', kw);
        const excerptTemplate = EXCERPTS[(id + tIdx) % EXCERPTS.length];
        const excerpt = excerptTemplate.replace(/\{kw\}/g, kw);
        const monthIndex = (id - 1) % MONTHS.length;
        const readTime = 4 + (id % 9);
        // Every post gets a truly unique image — picsum.photos serves a different photo per seed ID
        const uniqueImage = `https://picsum.photos/seed/onsective-${id}/800/500`;

        posts.push({
          id: `insight-${id}`,
          title: title,
          excerpt: excerpt,
          date: MONTHS[monthIndex],
          readTime: `${readTime} min read`,
          category: topic.category,
          image: uniqueImage
        });
        id++;
      });
    });
  });

  return posts;
};

export const ALL_INSIGHTS = generateBlogPosts();
export const LATEST_INSIGHTS = ALL_INSIGHTS.slice(0, 9);
