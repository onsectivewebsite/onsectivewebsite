import React from 'react';
import SEOHead from '../components/SEO/SEOHead';
import { LegalPage, Todo } from '../components/UI/PageShell';
import { LEGAL_NAME, CONTACT_EMAIL, HEADQUARTERS_ADDRESS } from '../constants';

const Privacy: React.FC = () => (
  <>
    <SEOHead title="Privacy Policy" description="How Onsective Inc. collects, uses and protects personal information." />
    <LegalPage title="Privacy Policy" updated="TODO: add date">
      <p>
        {LEGAL_NAME} ("Onsective", "we", "us") respects your privacy. This policy explains what personal information we collect through
        onsective.com and when providing services, and how we use it. We follow Canada's Personal Information Protection and Electronic Documents Act (PIPEDA).
        <Todo> TODO: Have this policy reviewed by a lawyer.</Todo>
      </p>

      <h2>1. Information we collect</h2>
      <ul>
        <li><strong>Information you give us:</strong> your name, email address, phone number, company name and the message you send through our contact form or by email.</li>
        <li><strong>Information about your use of the site:</strong> pages visited, referring page, browser and device type, and approximate location, collected through analytics tools and server logs.</li>
        <li><strong>Client information:</strong> business information you share so we can deliver services, such as account access or documents. This is used only for that purpose.</li>
      </ul>

      <h2>2. How we use it</h2>
      <ul>
        <li>To reply to your enquiries and provide the services you ask for.</li>
        <li>To send quotes, invoices and service-related messages.</li>
        <li>To understand how the website is used and to improve it.</li>
        <li>To meet legal, tax and accounting obligations.</li>
      </ul>
      <p>We do not sell your personal information.</p>

      <h2>3. Cookies and analytics</h2>
      <p>
        We use cookies and similar tools, including Google Analytics, to understand site traffic. You can accept or decline non-essential cookies through the banner on our site and can block cookies in your browser settings.
      </p>

      <h2>4. Who we share it with</h2>
      <p>
        We share information only with service providers that help us run our business (for example email, hosting, analytics and payment providers)
        and only as needed for them to provide those services, or where required by law.
        <Todo> TODO: list your actual providers, e.g. hosting, email, payment processor.</Todo>
      </p>

      <h2>5. Where information is stored</h2>
      <p>
        Our providers may store information in Canada or in other countries, including the United States. Where information is stored outside Canada, it may be accessible to authorities under the laws of that country.
      </p>

      <h2>6. How long we keep it</h2>
      <p>
        We keep information only as long as needed for the purposes above or as required by law (for example, financial records are kept for the period required by Canadian tax law).
      </p>

      <h2>7. Security</h2>
      <p>
        We use reasonable safeguards, such as access controls and encrypted connections, to protect personal information. No method of transmission or storage is completely secure.
      </p>

      <h2>8. Your rights</h2>
      <p>
        You may ask to see the personal information we hold about you, ask us to correct it or delete it, or withdraw your consent to our use of it,
        subject to legal limits. Email us at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. You may also contact the Office of the Privacy Commissioner of Canada.
      </p>

      <h2>9. Children</h2>
      <p>Our website and services are intended for businesses and are not directed at children.</p>

      <h2>10. Changes</h2>
      <p>We may update this policy. The date at the top shows the latest version.</p>

      <h2>11. Contact</h2>
      <p>
        Privacy contact: <Todo>TODO: name of the person responsible for privacy</Todo><br />
        {LEGAL_NAME}, {HEADQUARTERS_ADDRESS.street}, {HEADQUARTERS_ADDRESS.city}, {HEADQUARTERS_ADDRESS.state} {HEADQUARTERS_ADDRESS.zip}, {HEADQUARTERS_ADDRESS.country}<br />
        Email: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      </p>
    </LegalPage>
  </>
);

export default Privacy;
