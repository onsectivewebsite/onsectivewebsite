import React from 'react';
import SEOHead from '../components/SEO/SEOHead';
import { LegalPage, Todo } from '../components/UI/PageShell';
import { LEGAL_NAME, CONTACT_EMAIL } from '../constants';

const Refund: React.FC = () => (
  <>
    <SEOHead title="Refund and Cancellation Policy" description="Refund and cancellation policy for services provided by Onsective Inc." />
    <LegalPage title="Refund and Cancellation Policy" updated="TODO: add date">
      <p>
        This policy explains how cancellations and refunds work for services provided by {LEGAL_NAME} ("Onsective", "we", "us").
        <Todo> TODO: Review every term below with your lawyer or accountant and change anything that does not match how you actually operate.</Todo>
      </p>

      <h2>1. Hourly work</h2>
      <p>
        You are billed only for hours actually worked. You can stop an hourly engagement at any time by telling us in writing.
        Hours already worked up to that point are invoiced and are not refundable. <Todo>TODO: confirm.</Todo>
      </p>

      <h2>2. Project-based work</h2>
      <ul>
        <li>Each project has a written scope, price and payment schedule agreed before work starts.</li>
        <li>You may cancel a project in writing at any time. You will be invoiced for work completed up to the cancellation date, plus any non-refundable third-party costs already committed on your behalf.</li>
        <li>Any deposit is applied to work already done. <Todo>TODO: state whether deposits are refundable, partly refundable or non-refundable, and within how many days.</Todo></li>
        <li>If we cannot deliver the agreed scope, we will refund payments made for the undelivered part of the work.</li>
      </ul>

      <h2>3. Monthly retainers</h2>
      <ul>
        <li>Retainers renew monthly until cancelled.</li>
        <li>You may cancel with <Todo>TODO: notice period, e.g. 30 days</Todo> written notice. You will not be charged for periods after the notice period ends.</li>
        <li>Fees for a month already started are not refunded. Unused hours do not carry over unless your agreement says so. <Todo>TODO: confirm.</Todo></li>
      </ul>

      <h2>4. Third-party costs</h2>
      <p>
        Costs paid to other companies (for example cloud hosting, software licences, domain names and advertising spend) are
        governed by that company's own terms. We cannot refund amounts paid to third parties.
      </p>

      <h2>5. Problems with our work</h2>
      <p>
        If you are not happy with work we delivered, tell us in writing within <Todo>TODO: e.g. 14 days</Todo> of delivery, explaining what is wrong.
        We will first try to fix the problem at no extra charge. If we cannot fix it, we will discuss a partial or full refund of the affected part of the work.
      </p>

      <h2>6. How refunds are paid</h2>
      <p>
        Approved refunds are returned to the original payment method within <Todo>TODO: e.g. 10 business days</Todo>.
        Depending on your bank or card issuer, it may take additional time to appear on your statement.
      </p>

      <h2>7. How to request a cancellation or refund</h2>
      <p>
        Email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> with your name, company, invoice or project reference and the reason for your request.
        We will reply within 2 business days.
      </p>

      <h2>8. Your other rights</h2>
      <p>This policy does not limit any rights you have under applicable Canadian consumer protection or other laws.</p>
    </LegalPage>
  </>
);

export default Refund;
