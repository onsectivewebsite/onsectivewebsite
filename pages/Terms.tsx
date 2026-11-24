import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEO/SEOHead';
import { LegalPage, Todo } from '../components/UI/PageShell';
import { LEGAL_NAME, CONTACT_EMAIL, HEADQUARTERS_ADDRESS } from '../constants';

const Terms: React.FC = () => (
  <>
    <SEOHead title="Terms of Service" description="Terms of Service for onsective.com and services provided by Onsective Inc." />
    <LegalPage title="Terms of Service" updated="TODO: add date">
      <p>
        These Terms of Service ("Terms") apply to your use of onsective.com and to services provided by {LEGAL_NAME} ("Onsective", "we", "us"),
        a company based in {HEADQUARTERS_ADDRESS.city}, {HEADQUARTERS_ADDRESS.state}, {HEADQUARTERS_ADDRESS.country}.
        <Todo> TODO: Have these Terms reviewed by a lawyer before relying on them.</Todo>
      </p>

      <h2>1. Our services</h2>
      <p>
        We provide IT consulting services, including the services described on our <Link to="/services">Services</Link> page.
        The exact scope, price and timeline for each engagement are set out in a written quote, proposal or agreement.
        If this document and a signed agreement differ, the signed agreement applies.
      </p>

      <h2>2. Quotes, fees and payment</h2>
      <ul>
        <li>How we charge is described on our <Link to="/pricing">Pricing</Link> page. Prices are in Canadian dollars unless stated otherwise.</li>
        <li>Invoices are payable within <Todo>TODO: e.g. 14 days</Todo> of the invoice date unless the agreement says otherwise.</li>
        <li>Late payments may be charged interest at <Todo>TODO: rate, or delete this line</Todo>.</li>
        <li>Applicable taxes are added where required.</li>
      </ul>

      <h2>3. Cancellations and refunds</h2>
      <p>See our <Link to="/refund-policy">Refund and Cancellation Policy</Link>.</p>

      <h2>4. Your responsibilities</h2>
      <ul>
        <li>Provide accurate information, timely feedback and access we reasonably need to do the work.</li>
        <li>Make sure you have the right to give us any content, accounts or systems we work with.</li>
        <li>Keep your own backups unless we have agreed in writing to manage them.</li>
      </ul>

      <h2>5. Intellectual property</h2>
      <p>
        Once you have paid in full, you own the deliverables we create specifically for you, except for third-party software
        and our pre-existing tools, which remain subject to their own licences. <Todo>TODO: confirm ownership terms.</Todo>
        The content and design of onsective.com belong to {LEGAL_NAME}.
      </p>

      <h2>6. Confidentiality</h2>
      <p>We keep your non-public business information confidential and use it only to provide the services.</p>

      <h2>7. No guarantees of results</h2>
      <p>
        We work carefully and professionally, but we cannot guarantee specific business results, such as search rankings,
        advertising performance, sales or security outcomes. Technology services depend on factors outside our control.
      </p>

      <h2>8. Limitation of liability</h2>
      <p>
        To the extent permitted by law, our total liability for any claim relating to our services is limited to the fees you paid us
        for the services giving rise to the claim, and we are not liable for indirect or consequential losses.
        <Todo> TODO: have a lawyer confirm this clause.</Todo>
      </p>

      <h2>9. Using this website</h2>
      <p>
        You agree not to misuse this website, attempt to gain unauthorized access, or use it for unlawful purposes.
        Information on this website is provided for general information and may be updated at any time.
      </p>

      <h2>10. Governing law</h2>
      <p>These Terms are governed by the laws of the Province of Ontario and the federal laws of Canada that apply there.</p>

      <h2>11. Changes</h2>
      <p>We may update these Terms. The date at the top shows the latest version.</p>

      <h2>12. Contact</h2>
      <p>
        {LEGAL_NAME}, {HEADQUARTERS_ADDRESS.street}, {HEADQUARTERS_ADDRESS.city}, {HEADQUARTERS_ADDRESS.state} {HEADQUARTERS_ADDRESS.zip}, {HEADQUARTERS_ADDRESS.country}.<br />
        Email: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      </p>
    </LegalPage>
  </>
);

export default Terms;
