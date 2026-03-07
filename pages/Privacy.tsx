import React from 'react';
import SEOHead from '../components/SEO/SEOHead';
import { COMPANY_NAME, CONTACT_EMAIL } from '../constants';
import Button from '../components/UI/Button';

const Privacy: React.FC = () => {
    return (
        <>
            <SEOHead title="Privacy Policy" description="Privacy Policy for Onsective." />
            <section className="pt-40 pb-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12">
                        <div>
                            <h1 className="text-4xl font-serif text-brand-black mb-2">Privacy Policy</h1>
                            <p className="text-gray-600">Last Updated: February 2026</p>
                        </div>
                        <a href="/documents/PrivacyPolicy.pdf" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="sm" className="border-brand-black text-brand-black hover:bg-brand-black hover:text-white px-8">Download PDF</Button>
                        </a>
                    </div>

                    <div className="prose prose-lg text-gray-600">
                        <p>
                            At {COMPANY_NAME}, we are committed to protecting your privacy and ensuring the security of your personal information.
                            This policy outlines how we collect, use, disclose, and safeguard your data when you visit our website or engage our services.
                        </p>

                        <h3>1. Information Collection</h3>
                        <p>We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, request a consultation, or contact us for support. This may include:</p>
                        <ul>
                            <li>Contact information (Name, Email, Phone Number)</li>
                            <li>Professional information (Company Name, Job Title)</li>
                            <li>Communications and feedback</li>
                        </ul>

                        <h3>2. How We Use Your Information</h3>
                        <p>We use the information we collect to:</p>
                        <ul>
                            <li>Provide, maintain, and improve our consulting services and digital platforms.</li>
                            <li>Process transactions and send related information, including confirmations and invoices.</li>
                            <li>Send you technical notices, updates, security alerts, and support messages.</li>
                            <li>Respond to your comments, questions, and requests.</li>
                        </ul>

                        <h3>3. Data Retention</h3>
                        <p>
                            We retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy.
                            We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.
                        </p>

                        <h3>4. Information Sharing and Disclosure</h3>
                        <p>
                            We do not sell your personal information. We may share information with third-party vendors, consultants, and other service providers who need access to such information to carry out work on our behalf, subject to strict confidentiality obligations.
                        </p>

                        <h3>5. International Data Transfers</h3>
                        <p>
                            Your information, including personal data, may be transferred to — and maintained on — computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.
                        </p>

                        <h3>6. Security</h3>
                        <p>
                            We have implemented appropriate organizational and technical security measures designed to protect your personal information against accidental or unlawful destruction, loss, alteration, unauthorized disclosure, or access.
                        </p>

                        <h3>7. Contact Us</h3>
                        <p>If you have questions about this policy or our privacy practices, please contact us at {CONTACT_EMAIL}.</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Privacy;