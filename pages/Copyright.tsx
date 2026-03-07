import React from 'react';
import { Copyright as CopyrightIcon, FileText } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';
import { COMPANY_NAME, CONTACT_EMAIL, HEADQUARTERS_ADDRESS } from '../data/company';

const Copyright: React.FC = () => {
  return (
    <>
      <SEOHead title="Copyright Policy" description="Copyright ownership and DMCA notification procedures." />
      <section className="pt-40 pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 text-brand-primary mb-4">
                <CopyrightIcon size={24} />
                <span className="font-bold uppercase tracking-widest text-xs">Intellectual Property</span>
            </div>
            <h1 className="text-4xl font-serif text-brand-black mb-2">Copyright Policy</h1>
            <p className="text-gray-600 mb-12">Last Updated: February 12, 2026</p>

            <div className="prose prose-lg text-gray-700 max-w-none">
                <p className="lead text-xl text-gray-600">
                    {COMPANY_NAME} respects the intellectual property rights of others and expects its users to do the same. In accordance with the Digital Millennium Copyright Act of 1998 ("DMCA") and other applicable laws, we have adopted a policy of responding to clear notices of alleged copyright infringement.
                </p>

                <h3>1. Ownership of Site Content</h3>
                <p>
                    Unless otherwise stated, all materials, including but not limited to text, graphics, user interfaces, visual interfaces, photographs, trademarks, logos, sounds, music, artwork, and computer code (collectively, "Content"), contained on the Website are owned, controlled, or licensed by or to {COMPANY_NAME}, and are protected by trade dress, copyright, patent, and trademark laws, and various other intellectual property rights and unfair competition laws.
                </p>

                <h3>2. Reporting Copyright Infringement (DMCA Notice)</h3>
                <p>
                    If you believe that your work has been copied in a way that constitutes copyright infringement, please provide our Copyright Agent with the following information in writing (to be effective, the notification must include substantially the following):
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>A physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.</li>
                    <li>Identification of the copyrighted work claimed to have been infringed, or, if multiple copyrighted works at a single online site are covered by a single notification, a representative list of such works at that site.</li>
                    <li>Identification of the material that is claimed to be infringing or to be the subject of infringing activity and that is to be removed or access to which is to be disabled, and information reasonably sufficient to permit {COMPANY_NAME} to locate the material.</li>
                    <li>Information reasonably sufficient to permit {COMPANY_NAME} to contact the complaining party, such as an address, telephone number, and, if available, an electronic mail address at which the complaining party may be contacted.</li>
                    <li>A statement that the complaining party has a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law.</li>
                    <li>A statement that the information in the notification is accurate, and under penalty of perjury, that the complaining party is authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.</li>
                </ul>

                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
                    <h4 className="flex items-center gap-2 font-bold text-brand-black mb-4">
                        <FileText size={20} className="text-brand-primary" />
                        Designated Copyright Agent
                    </h4>
                    <p className="text-sm mb-2">All notices of copyright infringement should be sent to:</p>
                    <address className="not-italic text-sm text-gray-600">
                        <strong>Copyright Agent</strong><br/>
                        Legal Department, {COMPANY_NAME}<br/>
                        {HEADQUARTERS_ADDRESS.street}<br/>
                        {HEADQUARTERS_ADDRESS.city}, {HEADQUARTERS_ADDRESS.state} {HEADQUARTERS_ADDRESS.zip}<br/>
                        {HEADQUARTERS_ADDRESS.country}<br/><br/>
                        Email: <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand-primary font-medium">{CONTACT_EMAIL}</a> (Subject: "Copyright Infringement")
                    </address>
                </div>

                <h3>3. Counter-Notice Procedures</h3>
                <p>
                    If you believe that material you posted on the Website was removed or access to it was disabled by mistake or misidentification, you may file a counter-notification with us (a "Counter-Notice") by submitting written notification to our copyright agent designated above.
                </p>

                <h3>4. Repeat Infringers</h3>
                <p>
                    It is our policy in appropriate circumstances to disable and/or terminate the accounts of users who are repeat infringers.
                </p>

                <h3>5. Trademarks</h3>
                <p>
                    The {COMPANY_NAME} name, the company logo, and all related names, logos, product and service names, designs, and slogans are trademarks of {COMPANY_NAME} or its affiliates or licensors. You must not use such marks without the prior written permission of the Company. All other names, logos, product and service names, designs, and slogans on this Website are the trademarks of their respective owners.
                </p>
            </div>
        </div>
      </section>
    </>
  );
};

export default Copyright;
