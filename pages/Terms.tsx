import React from 'react';
import { Shield, FileText, AlertTriangle } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';
import { COMPANY_NAME, CONTACT_EMAIL, HEADQUARTERS_ADDRESS } from '../data/company';

const Terms: React.FC = () => {
    const lastUpdated = "February 12, 2026";

    return (
        <>
            <SEOHead
                title="Terms of Use"
                description={`Legal terms and conditions for using ${COMPANY_NAME} services, platforms, and website.`}
            />

            {/* Legal Header */}
            <section className="pt-32 pb-12 bg-gray-50 border-b border-gray-200">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-3 text-brand-primary mb-4">
                        <Shield size={24} />
                        <span className="font-bold uppercase tracking-widest text-xs">Legal Documentation</span>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-6">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-serif text-brand-black mb-6">Terms of Use</h1>
                            <p className="text-gray-600 text-sm font-mono">
                                Effective Date: {lastUpdated} <br />
                                Version: 4.2 (Global Enterprise)
                            </p>
                        </div>
                        <a href="/documents/TermsOfUse.pdf" target="_blank" rel="noopener noreferrer">
                            <button className="px-8 py-3 bg-brand-black text-brand-primary font-black text-[10px] uppercase tracking-[0.3em] hover:bg-brand-primary hover:text-brand-black transition-all">
                                Download PDF
                            </button>
                        </a>
                    </div>
                </div>
            </section>

            {/* Legal Content */}
            <section className="py-16 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-12">

                        {/* Table of Contents Sidebar */}
                        <div className="lg:w-1/4 hidden lg:block">
                            <div className="sticky top-32 space-y-1 text-sm text-gray-600 border-l border-gray-200 pl-4">
                                <p className="font-bold text-brand-black mb-4 uppercase tracking-wider text-xs">Contents</p>
                                <a href="#acceptance" className="block hover:text-brand-primary transition-colors">1. Acceptance</a>
                                <a href="#changes" className="block hover:text-brand-primary transition-colors">2. Changes to Terms</a>
                                <a href="#access" className="block hover:text-brand-primary transition-colors">3. Access & Security</a>
                                <a href="#ip" className="block hover:text-brand-primary transition-colors">4. Intellectual Property</a>
                                <a href="#prohibited" className="block hover:text-brand-primary transition-colors">5. Prohibited Uses</a>
                                <a href="#platforms" className="block hover:text-brand-primary transition-colors">6. Platform Specifics</a>
                                <a href="#liability" className="block hover:text-brand-primary transition-colors">7. Liability Limits</a>
                                <a href="#indemnification" className="block hover:text-brand-primary transition-colors">8. Indemnification</a>
                                <a href="#governing" className="block hover:text-brand-primary transition-colors">9. Governing Law</a>
                                <a href="#contact" className="block hover:text-brand-primary transition-colors">10. Contact</a>
                            </div>
                        </div>

                        {/* Main Text */}
                        <div className="lg:w-3/4 prose prose-slate max-w-none prose-headings:font-serif prose-headings:text-brand-black prose-a:text-brand-primary">

                            <p className="lead text-lg text-gray-600">
                                Please read the Terms of Use carefully before you start to use the Website or our Services. By using the Website or by clicking to accept or agree to the Terms of Use when this option is made available to you, you accept and agree to be bound and abide by these Terms of Use and our Privacy Policy.
                            </p>

                            <hr className="my-8 border-gray-100" />

                            <h2 id="acceptance">1. Acceptance of the Terms of Use</h2>
                            <p>
                                These terms of use are entered into by and between You and <strong>{COMPANY_NAME}</strong> ("Company," "we," or "us"). The following terms and conditions, together with any documents they expressly incorporate by reference (collectively, these "Terms of Use"), govern your access to and use of {window.location.hostname}, including any content, functionality, and services offered on or through the website (the "Website"), whether as a guest or a registered user.
                            </p>
                            <p>
                                If you do not want to agree to these Terms of Use or the Privacy Policy, you must not access or use the Website.
                            </p>

                            <h2 id="changes">2. Changes to the Terms of Use</h2>
                            <p>
                                We may revise and update these Terms of Use from time to time in our sole discretion. All changes are effective immediately when we post them, and apply to all access to and use of the Website thereafter. However, any changes to the dispute resolution provisions set out in Governing Law and Jurisdiction will not apply to any disputes for which the parties have actual notice on or before the date the change is posted on the Website.
                            </p>
                            <p>
                                Your continued use of the Website following the posting of revised Terms of Use means that you accept and agree to the changes. You are expected to check this page each time you access this Website so you are aware of any changes, as they are binding on you.
                            </p>

                            <h2 id="access">3. Accessing the Website and Account Security</h2>
                            <p>
                                We reserve the right to withdraw or amend this Website, and any service or material we provide on the Website, in our sole discretion without notice. We will not be liable if for any reason all or any part of the Website is unavailable at any time or for any period. From time to time, we may restrict access to some parts of the Website, or the entire Website, to users, including registered users.
                            </p>
                            <p><strong>You are responsible for:</strong></p>
                            <ul>
                                <li>Making all arrangements necessary for you to have access to the Website.</li>
                                <li>Ensuring that all persons who access the Website through your internet connection are aware of these Terms of Use and comply with them.</li>
                            </ul>
                            <p>
                                To access the Website or some of the resources it offers, you may be asked to provide certain registration details or other information. It is a condition of your use of the Website that all the information you provide on the Website is correct, current, and complete.
                            </p>

                            <h2 id="ip">4. Intellectual Property Rights</h2>
                            <p>
                                The Website and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by the Company, its licensors, or other providers of such material and are protected by Canadian and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                            </p>
                            <p>
                                These Terms of Use permit you to use the Website for your personal, non-commercial use only. You must not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Website, except as follows:
                            </p>
                            <ul>
                                <li>Your computer may temporarily store copies of such materials in RAM incidental to your accessing and viewing those materials.</li>
                                <li>You may store files that are automatically cached by your Web browser for display enhancement purposes.</li>
                                <li>You may print or download one copy of a reasonable number of pages of the Website for your own personal, non-commercial use and not for further reproduction, publication, or distribution.</li>
                            </ul>

                            <h2 id="prohibited">5. Prohibited Uses</h2>
                            <p>You may use the Website only for lawful purposes and in accordance with these Terms of Use. You agree not to use the Website:</p>
                            <ul>
                                <li>In any way that violates any applicable federal, state, local, or international law or regulation (including, without limitation, any laws regarding the export of data or software to and from the US, Canada, or other countries).</li>
                                <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing them to inappropriate content, asking for personally identifiable information, or otherwise.</li>
                                <li>To transmit, or procure the sending of, any advertising or promotional material without our prior written consent, including any "junk mail," "chain letter," "spam," or any other similar solicitation.</li>
                                <li>To impersonate or attempt to impersonate the Company, a Company employee, another user, or any other person or entity.</li>
                            </ul>

                            <h2 id="platforms">6. Specific Terms for SaaS Platforms (OnsecBoard & OnsecEmployee)</h2>
                            <p>
                                Usage of our proprietary platforms, <strong>OnsecBoard</strong> and <strong>OnsecEmployee</strong>, is governed by a separate <a href="/documents/MSA.pdf" target="_blank" rel="noopener noreferrer" className="font-bold underline">Master Services Agreement (MSA)</a> or <a href="/documents/EULA.pdf" target="_blank" rel="noopener noreferrer" className="font-bold underline">End User License Agreement (EULA)</a> executed at the time of purchase. However, the following general terms apply to any trial or demo access provided via this Website:
                            </p>
                            <ul>
                                <li><strong>Data Sovereignity:</strong> Data input into trial versions may be stored in temporary instances and is not guaranteed to be retained after the trial period expires.</li>
                                <li><strong>Reverse Engineering:</strong> You agree not to decompile, reverse engineer, or attempt to obtain the source code of the platforms.</li>
                                <li><strong>AI & Automated Interactions:</strong> Features utilizing Generative AI within our platforms are provided "as is". Verification of AI-generated output is the sole responsibility of the user.</li>
                            </ul>

                            <h2 id="reliance">7. Reliance on Information Posted</h2>
                            <p>
                                The information presented on or through the Website is made available solely for general information purposes. We do not warrant the accuracy, completeness, or usefulness of this information. Any reliance you place on such information is strictly at your own risk. We disclaim all liability and responsibility arising from any reliance placed on such materials by you or any other visitor to the Website, or by anyone who may be informed of any of its contents.
                            </p>

                            <h2 id="liability">8. Disclaimer of Warranties & Limitation of Liability</h2>
                            <div className="bg-red-50 p-6 rounded-lg border border-red-100 my-6">
                                <div className="flex items-center gap-2 text-red-800 font-bold mb-2">
                                    <AlertTriangle size={20} />
                                    <span>IMPORTANT LEGAL DISCLAIMER</span>
                                </div>
                                <p className="text-sm text-red-800 mb-0">
                                    YOUR USE OF THE WEBSITE, ITS CONTENT, AND ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITE IS AT YOUR OWN RISK. THE WEBSITE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS.
                                </p>
                            </div>
                            <p>
                                TO THE FULLEST EXTENT PROVIDED BY LAW, IN NO EVENT WILL THE COMPANY, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE WEBSITE, ANY WEBSITES LINKED TO IT, ANY CONTENT ON THE WEBSITE OR SUCH OTHER WEBSITES, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO, PERSONAL INJURY, PAIN AND SUFFERING, EMOTIONAL DISTRESS, LOSS OF REVENUE, LOSS OF PROFITS, LOSS OF BUSINESS OR ANTICIPATED SAVINGS, LOSS OF USE, LOSS OF GOODWILL, LOSS OF DATA, AND WHETHER CAUSED BY TORT (INCLUDING NEGLIGENCE), BREACH OF CONTRACT, OR OTHERWISE, EVEN IF FORESEEABLE.
                            </p>

                            <h2 id="indemnification">9. Indemnification</h2>
                            <p>
                                You agree to defend, indemnify, and hold harmless the Company, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms of Use or your use of the Website, including, but not limited to, your User Contributions, any use of the Website's content, services, and products other than as expressly authorized in these Terms of Use, or your use of any information obtained from the Website.
                            </p>

                            <h2 id="governing">10. Governing Law and Jurisdiction</h2>
                            <p>
                                All matters relating to the Website and these Terms of Use, and any dispute or claim arising therefrom or related thereto (in each case, including non-contractual disputes or claims), shall be governed by and construed in accordance with the internal laws of the Province of Ontario and the federal laws of Canada applicable therein without giving effect to any choice or conflict of law provision or rule.
                            </p>
                            <p>
                                Any legal suit, action, or proceeding arising out of, or related to, these Terms of Use or the Website shall be instituted exclusively in the federal courts of Canada or the courts of the Province of Ontario. You waive any and all objections to the exercise of jurisdiction over you by such courts and to venue in such courts.
                            </p>

                            <h2>11. Arbitration</h2>
                            <p>
                                At Company's sole discretion, it may require You to submit any disputes arising from the use of these Terms of Use or the Website, including disputes arising from or concerning their interpretation, violation, invalidity, non-performance, or termination, to final and binding arbitration under the Rules of Arbitration of the Canadian Arbitration Association applying Ontario law.
                            </p>

                            <h2>12. Limitation on Time to File Claims</h2>
                            <p>
                                ANY CAUSE OF ACTION OR CLAIM YOU MAY HAVE ARISING OUT OF OR RELATING TO THESE TERMS OF USE OR THE WEBSITE MUST BE COMMENCED WITHIN ONE (1) YEAR AFTER THE CAUSE OF ACTION ACCRUES; OTHERWISE, SUCH CAUSE OF ACTION OR CLAIM IS PERMANENTLY BARRED.
                            </p>

                            <h2>13. Waiver and Severability</h2>
                            <p>
                                No waiver by the Company of any term or condition set out in these Terms of Use shall be deemed a further or continuing waiver of such term or condition or a waiver of any other term or condition, and any failure of the Company to assert a right or provision under these Terms of Use shall not constitute a waiver of such right or provision.
                            </p>
                            <p>
                                If any provision of these Terms of Use is held by a court or other tribunal of competent jurisdiction to be invalid, illegal, or unenforceable for any reason, such provision shall be eliminated or limited to the minimum extent such that the remaining provisions of the Terms of Use will continue in full force and effect.
                            </p>

                            <h2>14. Entire Agreement</h2>
                            <p>
                                The Terms of Use and our Privacy Policy constitute the sole and entire agreement between you and {COMPANY_NAME} regarding the Website and supersede all prior and contemporaneous understandings, agreements, representations, and warranties, both written and oral, regarding the Website.
                            </p>

                            <div className="bg-gray-50 border border-gray-200 p-8 rounded-xl mt-12" id="contact">
                                <div className="flex items-start gap-4">
                                    <FileText className="text-brand-primary mt-1" size={24} />
                                    <div>
                                        <h3 className="text-xl font-serif text-brand-black mb-2 mt-0">Your Comments and Concerns</h3>
                                        <p className="mb-2">This website is operated by {COMPANY_NAME}.</p>
                                        <p className="mb-4">
                                            All notices of copyright infringement claims should be sent to the copyright agent designated in our Copyright Policy in the manner and by the means set out therein.
                                        </p>
                                        <p className="mb-2 font-bold">Mailing Address:</p>
                                        <p className="mb-4 text-sm font-mono text-gray-600">
                                            {HEADQUARTERS_ADDRESS.street}<br />
                                            {HEADQUARTERS_ADDRESS.city}, {HEADQUARTERS_ADDRESS.state} {HEADQUARTERS_ADDRESS.zip}<br />
                                            {HEADQUARTERS_ADDRESS.country}
                                        </p>
                                        <p className="mb-0">
                                            All other feedback, comments, requests for technical support, and other communications relating to the Website should be directed to: <a href={`mailto:${CONTACT_EMAIL}`} className="font-bold text-brand-primary">{CONTACT_EMAIL}</a>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Terms;