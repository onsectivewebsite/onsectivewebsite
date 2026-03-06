import React from 'react';
import { Lock, TrendingUp, ShieldCheck, FileText, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';
import Button from '../components/UI/Button';

const Investors: React.FC = () => {
  return (
    <>
      <SEOHead title="Investor Relations" description="Information for private stakeholders and partners of Onsective Inc." />
      
      <section className="pt-40 pb-20 bg-brand-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                  <span className="text-brand-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block animate-fade-up">Privately Held</span>
                  <h1 className="text-4xl md:text-6xl font-serif mb-6 animate-fade-up delay-100">Capital & Governance</h1>
                  <p className="text-gray-400 text-lg animate-fade-up delay-200">
                      As a privately owned enterprise, Onsective prioritizes long-term strategic growth over short-term market fluctuations. We are committed to delivering sustainable value to our exclusive partners and stakeholders.
                  </p>
              </div>
          </div>
      </section>

      <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
                  <div>
                      <h2 className="text-3xl font-serif text-brand-black mb-6">Financial Stability</h2>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                          Onsective maintains a robust and independent financial structure, allowing us to invest aggressively in R&D and strategic innovation. Our private status grants us the agility to pivot rapidly in a changing technological landscape without the pressure of public reporting cycles.
                      </p>
                      <ul className="space-y-4">
                          <li className="flex items-start gap-3">
                              <ShieldCheck className="text-brand-primary mt-1" size={20} />
                              <div>
                                  <h4 className="font-bold text-brand-black">Operational Independence</h4>
                                  <p className="text-sm text-gray-500">Self-determined growth strategy ensuring absolute autonomy.</p>
                              </div>
                          </li>
                          <li className="flex items-start gap-3">
                              <TrendingUp className="text-brand-primary mt-1" size={20} />
                              <div>
                                  <h4 className="font-bold text-brand-black">Strategic Reinvestment</h4>
                                  <p className="text-sm text-gray-500">Continuous allocation of capital into proprietary Innovation Labs.</p>
                              </div>
                          </li>
                      </ul>
                  </div>
                  <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                      <div className="flex items-center gap-3 mb-6">
                          <Lock className="text-brand-black" size={24} />
                          <h3 className="text-xl font-bold text-brand-black">Stakeholder Portal</h3>
                      </div>
                      <p className="text-gray-600 mb-8 text-sm">
                          Access to detailed financial statements, governance reports, and capitalization tables is restricted to authorized stakeholders.
                      </p>
                      <form className="space-y-4">
                          <div>
                              <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Access ID</label>
                              <input type="text" className="w-full p-3 border border-gray-300 rounded-none focus:border-brand-primary outline-none" placeholder="Enter ID" />
                          </div>
                          <div>
                              <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Password</label>
                              <input type="password" className="w-full p-3 border border-gray-300 rounded-none focus:border-brand-primary outline-none" placeholder="••••••••" />
                          </div>
                          <Button variant="primary" className="w-full">Secure Login</Button>
                      </form>
                      <div className="mt-6 text-center">
                          <a href="#" className="text-xs text-gray-400 hover:text-brand-black underline">Request Access</a>
                      </div>
                  </div>
              </div>

              {/* Governance Documents (Public) */}
              <div className="border-t border-gray-200 pt-16">
                  <h3 className="text-2xl font-serif text-brand-black mb-8">Corporate Governance</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {['Code of Business Conduct', 'ESG Impact Report 2026', 'Modern Slavery Statement'].map((doc, idx) => (
                          <a 
                            key={idx} 
                            href="/assets/company-profile.pdf" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-6 border border-gray-100 hover:border-brand-primary hover:shadow-md transition-all group cursor-pointer"
                          >
                              <div className="flex items-center gap-4">
                                  <FileText className="text-gray-400 group-hover:text-brand-primary" size={24} />
                                  <span className="font-bold text-sm text-brand-black">{doc}</span>
                              </div>
                              <ArrowRight size={16} className="text-gray-300 group-hover:text-brand-black opacity-0 group-hover:opacity-100 transition-all" />
                          </a>
                      ))}
                  </div>
              </div>

          </div>
      </section>
    </>
  );
};

export default Investors;