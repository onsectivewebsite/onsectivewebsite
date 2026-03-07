const fs = require('fs');
const path = require('path');

const documentsDir = path.join(__dirname, 'public', 'documents');

if (!fs.existsSync(documentsDir)) {
    fs.mkdirSync(documentsDir, { recursive: true });
}

// Fixed list of essential institutional documents
const documents = [
    'CompanyProfile.pdf',
    'CorporateBrochure.pdf',
    'TechnicalBrief.pdf',
    'OnsecBoard_Brief.pdf',
    'OnsecEmployee_Brief.pdf',
    'VisionManifesto.pdf',
    'ESGReport.pdf',
    'CodeOfConduct.pdf',
    'PrivacyPolicy.pdf',
    'TermsOfUse.pdf',
    'MSA.pdf',
    'EULA.pdf',
    'ModernSlaveryStatement.pdf',
    'TechnicalBrief.pdf'
];

// Create dummy PDFs for each service and industry
const services = [
    'it-strategy', 'cloud-services', 'cybersecurity', 'ai-automation',
    'digital-marketing', 'enterprise-seo', 'revenue-assurance',
    'enterprise-architecture', 'sovereign-cloud', 'autonomous-systems'
];

services.forEach(s => documents.push(`Service_${s}_Sheet.pdf`));

documents.forEach(doc => {
    const filePath = path.join(documentsDir, doc);
    fs.writeFileSync(filePath, 'Dummy PDF content for Onsective Institutional Repository');
    console.log(`Generated: ${doc}`);
});

console.log('Institutional Repository Initialization Complete.');
