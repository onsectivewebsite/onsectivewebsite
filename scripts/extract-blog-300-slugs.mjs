#!/usr/bin/env node
/**
 * Extracts the BLOG_300 slugs for sitemap inclusion.
 */
import fs from 'node:fs';
import path from 'node:path';

const toSlug = (str) =>
  str.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');

const TOPICS = [
  { keywords: [
    'custom software development cost', 'build vs buy software', 'software architecture patterns',
    'microservices architecture guide', 'monolith to microservices migration', 'api first design',
    'graphql vs rest api', 'event driven architecture', 'serverless architecture patterns',
    'domain driven design guide', 'software development lifecycle', 'agile vs waterfall',
    'scrum vs kanban', 'test driven development tdd', 'behaviour driven development bdd',
    'code review best practices', 'technical debt management', 'code quality metrics',
    'software team structure', 'engineering manager responsibilities', 'tech lead role',
    'mobile app development cost', 'react native vs flutter', 'ios vs android development',
    'web app vs mobile app', 'progressive web app guide', 'saas platform architecture',
    'multi tenant saas design', 'enterprise software integration', 'erp integration patterns',
    'crm integration patterns', 'legacy system modernization roadmap', 'software migration strategy',
    'database selection guide', 'postgresql vs mysql', 'nosql vs sql',
    'redis caching strategies', 'message queue patterns', 'kafka vs rabbitmq',
    'observability stack', 'logging best practices', 'distributed tracing'
  ]},
  { keywords: [
    'zero trust architecture implementation', 'identity and access management strategy', 'single sign on sso',
    'multifactor authentication mfa', 'privileged access management pam', 'privileged identity management pim',
    'endpoint detection and response edr', 'extended detection and response xdr', 'security orchestration soar',
    'cloud security posture management', 'cloud workload protection', 'container security guide',
    'kubernetes security hardening', 'devsecops implementation', 'secure software development lifecycle',
    'application security testing', 'sast vs dast', 'software composition analysis sca',
    'penetration testing methodology', 'red team operations', 'blue team operations',
    'purple team exercises', 'bug bounty programs', 'vulnerability disclosure program',
    'incident response playbook', 'ransomware incident response', 'data breach response',
    'forensic investigation process', 'threat intelligence platforms', 'mitre attack framework',
    'soc 2 compliance checklist', 'iso 27001 implementation', 'pci dss compliance',
    'hipaa compliance guide', 'gdpr compliance checklist', 'ccpa vs gdpr',
    'data classification framework', 'data loss prevention dlp', 'encryption at rest',
    'encryption in transit', 'key management best practices'
  ]},
  { keywords: [
    'aws vs azure vs gcp comparison', 'cloud migration strategy', 'lift and shift vs refactor',
    'aws well architected framework', 'azure well architected framework', 'gcp architecture framework',
    'multi cloud strategy', 'hybrid cloud architecture', 'private cloud deployment',
    'aws cost optimization', 'azure cost optimization', 'gcp cost optimization',
    'finops implementation', 'cloud governance framework', 'cloud landing zone',
    'infrastructure as code terraform', 'infrastructure as code pulumi', 'cloudformation best practices',
    'kubernetes cluster management', 'eks vs aks vs gke', 'service mesh istio',
    'service mesh linkerd', 'ci cd pipeline design', 'github actions workflows',
    'gitlab ci best practices', 'jenkins modernization', 'argocd gitops',
    'flux cd gitops', 'observability with prometheus', 'grafana dashboards',
    'elastic stack elk', 'splunk alternatives', 'datadog best practices',
    'new relic best practices', 'dynatrace observability', 'chaos engineering',
    'resilience engineering', 'disaster recovery planning', 'business continuity planning',
    'rto rpo planning'
  ]},
  { keywords: [
    'ai strategy for enterprises', 'generative ai implementation', 'large language models llm',
    'retrieval augmented generation rag', 'vector database comparison', 'pinecone vs weaviate',
    'fine tuning llm guide', 'prompt engineering best practices', 'ai agents framework',
    'langchain framework guide', 'llamaindex vs langchain', 'openai api best practices',
    'anthropic claude api', 'hugging face transformers', 'model deployment strategies',
    'mlops platform comparison', 'feature store architecture', 'experiment tracking mlflow',
    'data labeling best practices', 'synthetic data generation', 'model monitoring in production',
    'model drift detection', 'ai bias detection', 'explainable ai xai',
    'responsible ai framework', 'ai ethics guidelines', 'ai governance structure',
    'computer vision applications', 'object detection algorithms', 'image classification pipeline',
    'natural language processing pipeline', 'sentiment analysis at scale', 'named entity recognition',
    'time series forecasting', 'recommendation system design', 'collaborative filtering',
    'reinforcement learning applications', 'deep learning framework comparison', 'tensorflow vs pytorch',
    'ai infrastructure requirements', 'gpu selection for ml'
  ]},
  { keywords: [
    'digital transformation roadmap', 'enterprise architecture framework', 'togaf certification',
    'zachman framework', 'it strategy frameworks', 'ciso vs cto roles',
    'technology stack modernization', 'vendor consolidation strategy', 'technology cost optimization',
    'business capability mapping', 'value stream mapping', 'operating model design',
    'agile transformation guide', 'safe framework implementation', 'less framework',
    'spotify model scaling', 'team topologies', 'platform engineering teams',
    'enabling teams structure', 'devops maturity model', 'digital maturity assessment',
    'innovation lab structure', 'technology radar implementation', 'proof of concept process',
    'mvp development approach', 'build vs buy decision framework', 'outsourcing vs insourcing',
    'vendor risk management', 'third party risk management', 'supply chain technology risk'
  ]},
  { keywords: [
    'financial services digital transformation', 'banking core modernization', 'open banking strategy',
    'fintech platform architecture', 'insurance technology modernization', 'insurtech platforms',
    'healthcare digital transformation', 'electronic health records integration', 'telemedicine platform architecture',
    'pharmacy benefit management technology', 'retail digital transformation', 'ecommerce platform selection',
    'omnichannel retail technology', 'supply chain visibility platforms', 'manufacturing 4.0 playbook',
    'iiot implementation guide', 'digital twin strategy', 'predictive maintenance programs',
    'energy sector digital transformation', 'smart grid technology', 'renewable energy platforms',
    'utilities modernization', 'education technology platforms', 'learning management systems',
    'government digital services', 'civic technology platforms', 'smart city architecture',
    'professional services technology', 'legal technology platforms', 'accounting firm technology',
    'media streaming architecture', 'content management platforms', 'sports technology platforms',
    'real estate technology proptech', 'construction technology contech', 'transportation technology'
  ]},
  { keywords: [
    'figma vs sketch vs adobe xd', 'notion vs confluence', 'asana vs monday vs jira',
    'slack vs microsoft teams', 'zoom vs webex vs google meet', 'airtable vs smartsheet',
    'webflow vs wordpress', 'shopify vs bigcommerce vs woocommerce', 'stripe vs adyen vs square',
    'zendesk vs intercom vs freshdesk', 'hubspot vs salesforce comparison', 'amplitude vs mixpanel',
    'segment vs rudderstack vs mparticle', 'contentful vs sanity vs strapi', 'vercel vs netlify',
    'github vs gitlab vs bitbucket', 'docker vs podman', 'nginx vs apache',
    'postman vs insomnia', 'terraform vs pulumi', 'kubernetes vs docker swarm',
    'kafka vs rabbitmq vs aws sqs', 'elasticsearch vs opensearch', 'grafana vs datadog vs new relic',
    'snowflake vs bigquery vs redshift', 'dbt vs matillion', 'tableau vs power bi vs looker',
    'jupyter vs databricks', 'vscode vs cursor vs jetbrains', 'chrome devtools vs firefox devtools'
  ]},
  { keywords: [
    'how to build a saas product', 'how to scale a startup engineering team', 'how to hire a cto',
    'how to conduct code reviews', 'how to run sprint retrospectives', 'how to write technical specs',
    'how to design apis', 'how to document software', 'how to handle technical debt',
    'how to reduce aws bill', 'how to speed up ci pipeline', 'how to improve test coverage',
    'how to migrate monolith to microservices', 'how to implement feature flags', 'how to ab test features',
    'how to structure git commits', 'how to write good unit tests', 'how to handle error logging',
    'how to set up observability', 'how to implement authentication', 'how to implement authorization',
    'how to design database schema', 'how to handle database migrations', 'how to optimize postgres queries',
    'how to implement caching', 'how to handle rate limiting', 'how to implement webhooks',
    'how to design event driven systems', 'how to implement search', 'how to build recommendation engine'
  ]}
];

const ANGLES = ['guide', 'framework', 'checklist', 'mistakes', 'trends', 'case-study', 'playbook', 'faq', 'comparison', 'roadmap'];
const slugs = [];
const seen = new Set();
let idx = 0;
const target = 300;

TOPICS.forEach(topic => {
  topic.keywords.forEach(kw => {
    if (slugs.length >= target) return;
    const angle = ANGLES[idx % ANGLES.length];
    const slug = toSlug(`${kw}-${angle}-b-${idx}`);
    if (!seen.has(slug)) { seen.add(slug); slugs.push(slug); }
    idx++;
  });
});

const allCombos = [];
TOPICS.forEach(t => t.keywords.forEach(kw => allCombos.push(kw)));
while (slugs.length < target && idx < target * 4) {
  const kw = allCombos[idx % allCombos.length];
  const angle = ANGLES[Math.floor(idx / allCombos.length) % ANGLES.length];
  const slug = toSlug(`${kw}-${angle}-b-${idx}`);
  if (!seen.has(slug)) { seen.add(slug); slugs.push(slug); }
  idx++;
}

fs.writeFileSync(path.resolve('scripts/blog-300-slugs.json'), JSON.stringify(slugs, null, 2));
console.log(`Wrote ${slugs.length} blog-300 slugs to scripts/blog-300-slugs.json`);
