import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Download, FileText, ExternalLink } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';

const SITE_URL = 'https://onsective.com';
const PDF_URL = '/document/Onsective-Inc-Employee-Handbook.pdf';

const EmployeeHandbook: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead
        title="Employee Handbook | Onsective Inc."
        description="The official Onsective Inc. Employee Handbook — code of conduct, employment policies, benefits, and workplace standards for the Onsective global workforce."
        overrides={{
          keywords: 'Onsective employee handbook, Onsective Inc employee handbook, Onsective policies, Onsective code of conduct, Onsective HR, Onsective benefits, Onsective workplace policies',
          canonical: `${SITE_URL}/employee-handbook`,
          structuredData: {
            '@type': 'DigitalDocument',
            '@id': `${SITE_URL}/employee-handbook/#document`,
            name: 'Onsective Inc. Employee Handbook',
            description: 'Official employee handbook outlining employment policies, code of conduct, benefits, and workplace standards.',
            url: `${SITE_URL}${PDF_URL}`,
            fileFormat: 'application/pdf',
            publisher: { '@type': 'Organization', name: 'Onsective Enterprise' }
          }
        }}
        breadcrumbs={[
          { name: 'Home', url: SITE_URL },
          { name: 'Employee Handbook', url: `${SITE_URL}/employee-handbook` }
        ]}
      />

      {/* HERO */}
      <section className="bg-[#0d2b45] pt-40 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 perspective-grid opacity-25" />
        <div className="max-w-5xl mx-auto px-6 lg:px-16 relative z-10">
          <span className="text-[#c1912f] text-xs font-semibold uppercase tracking-[0.25em] mb-6 block font-['Plus_Jakarta_Sans']">Human Resources · Official Document</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-['Playfair_Display'] font-bold text-white leading-[0.95] mb-6">
            Onsective Inc.<br />Employee Handbook
          </h1>
          <p className="text-lg text-white/55 font-['Plus_Jakarta_Sans'] leading-relaxed max-w-3xl">
            The official Onsective Inc. Employee Handbook. Code of conduct, employment policies, benefits, and workplace standards governing every Onsective employee across our global operations.
          </p>
        </div>
      </section>

      {/* DOWNLOAD CARD */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-16">
          <div className="bg-[#f1f5f9] border border-[#e2e8f0] rounded-lg p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-16 h-16 rounded-lg bg-[#c1912f]/10 flex items-center justify-center shrink-0">
              <FileText size={28} className="text-[#c1912f]" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-['Playfair_Display'] font-bold text-[#1a1a2e] mb-1">Onsective Inc Employee Handbook</h2>
              <p className="text-sm text-[#64748b] font-['Plus_Jakarta_Sans']">PDF document · Official version</p>
            </div>
            <div className="flex gap-2 flex-wrap">
              <a
                href={PDF_URL}
                download="Onsective-Inc-Employee-Handbook.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#c1912f] text-white font-semibold text-sm rounded-md font-['Plus_Jakarta_Sans'] hover:brightness-110"
              >
                <Download size={14} /> Download
              </a>
              <a
                href={PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#1a1a2e]/20 text-[#1a1a2e] font-semibold text-sm rounded-md font-['Plus_Jakarta_Sans'] hover:border-[#c1912f]"
              >
                <ExternalLink size={14} /> Open in new tab
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* EMBEDDED VIEWER — iframe is the most compatible approach.  */}
      {/* If the browser blocks PDF inline rendering, the fallback   */}
      {/* block below is revealed via the Google Docs viewer link.   */}
      <section className="pb-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-16">
          <div className="bg-[#0d2b45] rounded-lg overflow-hidden border border-[#e2e8f0]">
            <iframe
              src={PDF_URL + '#view=FitH'}
              title="Onsective Employee Handbook PDF"
              className="w-full block h-[60vh] sm:h-[75vh]"
              style={{ minHeight: '420px', border: 0 }}
            />
          </div>
          <p className="text-xs text-[#64748b] mt-4 text-center font-['Plus_Jakarta_Sans']">
            PDF not rendering? Try{' '}
            <a
              href={`https://docs.google.com/viewer?url=https://onsective.com${PDF_URL}&embedded=true`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c1912f] underline"
            >
              opening in Google Docs Viewer
            </a>
            {' '}or{' '}
            <a href={PDF_URL} download="Onsective-Inc-Employee-Handbook.pdf" className="text-[#c1912f] underline">
              downloading the PDF directly
            </a>.
          </p>
        </div>
      </section>

      {/* RELATED */}
      <section className="py-20 bg-[#f1f5f9] border-t border-[#e2e8f0]">
        <div className="max-w-4xl mx-auto px-6 lg:px-16">
          <h3 className="text-2xl font-['Playfair_Display'] font-bold text-[#1a1a2e] mb-6">Related Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link to="/careers" className="p-5 bg-white border border-[#e2e8f0] rounded-lg hover:border-[#c1912f]/40 group">
              <div className="text-xs text-[#c1912f] uppercase tracking-wider font-['Plus_Jakarta_Sans'] mb-2">Careers</div>
              <div className="text-base font-semibold text-[#1a1a2e] group-hover:text-[#c1912f] transition-colors font-['Plus_Jakarta_Sans']">Join Onsective</div>
            </Link>
            <Link to="/terms" className="p-5 bg-white border border-[#e2e8f0] rounded-lg hover:border-[#c1912f]/40 group">
              <div className="text-xs text-[#c1912f] uppercase tracking-wider font-['Plus_Jakarta_Sans'] mb-2">Legal</div>
              <div className="text-base font-semibold text-[#1a1a2e] group-hover:text-[#c1912f] transition-colors font-['Plus_Jakarta_Sans']">Terms of Use</div>
            </Link>
            <Link to="/privacy" className="p-5 bg-white border border-[#e2e8f0] rounded-lg hover:border-[#c1912f]/40 group">
              <div className="text-xs text-[#c1912f] uppercase tracking-wider font-['Plus_Jakarta_Sans'] mb-2">Legal</div>
              <div className="text-base font-semibold text-[#1a1a2e] group-hover:text-[#c1912f] transition-colors font-['Plus_Jakarta_Sans']">Privacy Policy</div>
            </Link>
            <Link to="/contact" className="p-5 bg-white border border-[#e2e8f0] rounded-lg hover:border-[#c1912f]/40 group">
              <div className="text-xs text-[#c1912f] uppercase tracking-wider font-['Plus_Jakarta_Sans'] mb-2">Contact</div>
              <div className="text-base font-semibold text-[#1a1a2e] group-hover:text-[#c1912f] transition-colors font-['Plus_Jakarta_Sans']">Speak with HR</div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default EmployeeHandbook;
