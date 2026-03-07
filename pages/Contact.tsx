import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, CheckCircle, AlertCircle, ArrowRight, Globe, Clock, Shield } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';
import Button from '../components/UI/Button';
import { CONTACT_EMAIL, CONTACT_PHONE, SERVICES } from '../constants';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const payload = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      service: formData.get('service'),
      message: formData.get('message'),
      timestamp: new Date().toISOString()
    };

    try {
      // Direct integration with server.js API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Institutional synchronization failed.');
      }

      setFormState('success');
      // Also sync to local storage for secondary backup
      const existingLeads = JSON.parse(localStorage.getItem('onsective_leads') || '[]');
      localStorage.setItem('onsective_leads', JSON.stringify([payload, ...existingLeads]));
    } catch (err: any) {
      console.error('API Error:', err);
      setFormState('error');
      setErrorMessage(err.message || 'A transmission protocol error occurred.');
    }
  };

  return (
    <>
      <SEOHead
        title="Institutional Engagement"
        description="Interface with Onsective's global advisors. Secure a strategic briefing for enterprise architecture and resilient growth."
      />

      {/* 1. HERO - THE EXECUTIVE DESK */}
      <section className="relative pt-48 pb-24 bg-brand-black text-white overflow-hidden border-b border-white/5">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-primary/5 rounded-bl-[200px] z-0"></div>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-10 relative z-10">
          <div className="max-w-4xl">
            <span className="text-brand-primary font-bold tracking-[0.5em] uppercase text-[10px] mb-8 block animate-fade-up">
              Institutional Access Point
            </span>
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif font-black mb-10 tracking-tighter leading-[0.9] animate-fade-up" style={{ animationDelay: '0.1s' }}>
              THE EXECUTIVE<br /><span className="text-gold-gradient italic">DESK.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 font-medium max-w-2xl leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Interface with our senior strategists. We provide the technical clarity required for global governing mandates and digital sovereignty.
            </p>
          </div>
        </div>
      </section>

      {/* 1.5 TRUST BRIEF */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-slate-100 border border-slate-100">
            {[
              { label: '< 24hrs', desc: 'Senior Director Response Window' },
              { label: 'AES-256', desc: 'Institutional Encryption Standard' },
              { label: 'NDA-First', desc: 'All Engagements Confidential by Default' },
              { label: 'Global Ops', desc: 'Advisors Across 12 Time Zones' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 group hover:bg-brand-black transition-all duration-500 text-center">
                <div className="text-2xl font-serif font-black text-brand-black group-hover:text-brand-primary transition-colors mb-3">{item.label}</div>
                <div className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-500 group-hover:text-white/60 transition-colors">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. ENGAGEMENT INTERFACE */}
      <section className="bg-white">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">

            {/* Left Column: Security & Contact Briefing */}
            <div className="lg:col-span-5 bg-slate-50 p-8 sm:p-16 lg:p-24 border-r border-slate-100 flex flex-col justify-between">
              <div className="space-y-16">
                <div className="reveal active">
                  <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-black mb-12 flex items-center gap-4">
                    <div className="w-12 h-px bg-brand-black"></div>
                    Response Protocol
                  </h2>
                  <div className="space-y-10">
                    <div className="flex gap-8">
                      <div className="w-12 h-12 bg-brand-black text-brand-primary flex items-center justify-center shrink-0 shadow-lg">
                        <Clock size={20} />
                      </div>
                      <div>
                        <h3 className="font-serif text-xl text-brand-black mb-1 uppercase font-black">24-Hour Triage</h3>
                        <p className="text-slate-700 text-sm font-medium leading-relaxed">
                          All inquiries undergo a senior director assessment within one business day for strategic alignment.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-8">
                      <div className="w-12 h-12 bg-brand-black text-brand-primary flex items-center justify-center shrink-0 shadow-lg">
                        <Shield size={20} />
                      </div>
                      <div>
                        <h3 className="font-serif text-xl text-brand-black mb-1 uppercase font-black">NDA Compliance</h3>
                        <p className="text-slate-700 text-sm font-medium leading-relaxed">
                          Confidentiality is institutional. NDAs are available prior to any technical disclosure.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="reveal active delay-100">
                  <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-black mb-12 flex items-center gap-4">
                    <div className="w-12 h-px bg-brand-black"></div>
                    Global Nodes
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 group">
                      <MapPin size={18} className="text-brand-primary transition-transform group-hover:scale-125" />
                      <span className="text-xs font-bold text-brand-black uppercase tracking-widest">Toronto Headquarters</span>
                    </div>
                    <div className="flex items-center gap-4 group">
                      <Phone size={18} className="text-brand-primary transition-transform group-hover:scale-125" />
                      <span className="text-xs font-bold text-brand-black uppercase tracking-widest">{CONTACT_PHONE}</span>
                    </div>
                    <div className="flex items-center gap-4 group">
                      <Mail size={18} className="text-brand-primary transition-transform group-hover:scale-125" />
                      <span className="text-xs font-bold text-brand-black lowercase tracking-tight">{CONTACT_EMAIL}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-20 p-8 bg-brand-black text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-primary/10 rounded-bl-full transition-all group-hover:scale-150"></div>
                <Globe className="text-brand-primary mb-6" size={32} />
                <h4 className="text-lg font-serif font-black mb-4 uppercase">Institutional Status</h4>
                <p className="text-white/90 text-[10px] font-medium leading-relaxed mb-8">
                  Authorized personnel may bypass this portal using their secure Command Center credentials.
                </p>
                <Link to="/admin">
                  <Button variant="outline" size="sm" className="w-full border-brand-primary text-brand-primary py-3">
                    Security Portal Login
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Column: The Form */}
            <div className="lg:col-span-7 p-8 sm:p-16 lg:p-24 bg-white">
              <div className="max-w-2xl mx-auto">
                {formState === 'success' ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-fade-up">
                    <div className="w-24 h-24 bg-brand-primary text-brand-black rounded-full flex items-center justify-center mb-10 shadow-gold">
                      <CheckCircle size={48} />
                    </div>
                    <h3 className="text-4xl font-serif text-brand-black mb-6 uppercase font-black tracking-tight">Transmission Successful.</h3>
                    <p className="text-slate-700 text-lg font-medium max-w-sm mx-auto mb-12">
                      Your strategic briefing has been securely transmitted. A director will initiate contact shortly.
                    </p>
                    <Button variant="primary" onClick={() => setFormState('idle')}>
                      Return to Portal
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-12">
                    <div className="reveal active">
                      <h2 className="text-3xl md:text-5xl font-serif text-brand-black mb-4 font-black tracking-tight uppercase">Engagement Brief</h2>
                      <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.4em]">Define your organizational objectives</p>
                    </div>

                    {formState === 'error' && (
                      <div className="p-6 bg-red-50 border-l-4 border-red-600 text-red-900 flex items-center gap-4 animate-fade-up">
                        <AlertCircle size={20} className="shrink-0" />
                        <span className="text-[10px] font-black uppercase tracking-widest">{errorMessage}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 reveal active delay-100">
                      <div className="space-y-4">
                        <label htmlFor="firstName" className="text-[9px] font-black text-slate-600 uppercase tracking-widest block">Given Name</label>
                        <input
                          required name="firstName" type="text" id="firstName"
                          className="w-full bg-transparent border-b border-slate-200 px-0 py-4 focus:border-brand-primary outline-none transition-all text-brand-black font-bold placeholder:text-slate-200"
                          placeholder="E.g. Alexander"
                        />
                      </div>
                      <div className="space-y-4">
                        <label htmlFor="lastName" className="text-[9px] font-black text-slate-600 uppercase tracking-widest block">Surname</label>
                        <input
                          required name="lastName" type="text" id="lastName"
                          className="w-full bg-transparent border-b border-slate-200 px-0 py-4 focus:border-brand-primary outline-none transition-all text-brand-black font-bold placeholder:text-slate-200"
                          placeholder="E.g. Sterling"
                        />
                      </div>
                    </div>

                    <div className="reveal active delay-200">
                      <label htmlFor="email" className="text-[9px] font-black text-slate-600 uppercase tracking-widest block mb-4">Corporate Email</label>
                      <input
                        required name="email" type="email" id="email"
                        className="w-full bg-transparent border-b border-slate-200 px-0 py-4 focus:border-brand-primary outline-none transition-all text-brand-black font-bold placeholder:text-slate-200"
                        placeholder="executive@organization.com"
                      />
                    </div>

                    <div className="reveal active delay-300">
                      <label htmlFor="service" className="text-[9px] font-black text-slate-600 uppercase tracking-widest block mb-4">Strategic Objective</label>
                      <div className="relative">
                        <select name="service" id="service" className="w-full bg-transparent border-b border-slate-200 px-0 py-4 focus:border-brand-primary outline-none text-brand-black font-black appearance-none cursor-pointer">
                          <option value="">Select Domain...</option>
                          {SERVICES.map(service => (
                            <option key={service.id} value={service.title} className="text-brand-black bg-white">{service.title}</option>
                          ))}
                        </select>
                        <ArrowRight size={16} className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90 text-slate-300 pointer-events-none" />
                      </div>
                    </div>

                    <div className="reveal active delay-400">
                      <label htmlFor="message" className="text-[9px] font-black text-slate-600 uppercase tracking-widest block mb-4">Context & Scope</label>
                      <textarea
                        required name="message" id="message" rows={5}
                        className="w-full bg-transparent border-b border-slate-200 px-0 py-4 focus:border-brand-primary outline-none transition-all text-brand-black font-bold resize-none placeholder:text-slate-200"
                        placeholder="Briefly describe the institutional challenges or mandates requiring architectural intervention..."
                      ></textarea>
                    </div>

                    <div className="pt-6">
                      <Button
                        type="submit"
                        className="w-full reveal active delay-500 py-6 text-xs"
                        size="lg"
                        disabled={formState === 'submitting'}
                        withArrow
                      >
                        {formState === 'submitting' ? 'AUTHENTICATING ENCRYPTED CHANNEL...' : 'EXECUTE BRIEFING TRANSMISSION'}
                      </Button>
                      <p className="text-[8px] font-black text-slate-300 uppercase tracking-[0.4em] text-center mt-8">
                        Protected by 256-bit institutional-grade encryption protocols
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CAREERS REDIRECT */}
      <section className="py-24 bg-brand-black text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-serif font-black mb-8 leading-tight tracking-tight uppercase font-black">Join the <span className="text-brand-primary">Elite.</span></h2>
          <p className="text-white/80 text-sm mb-12 font-medium max-w-xl mx-auto">
            We are always seeking the world's most disciplined technical minds and senior strategists.
          </p>
          <Link to="/careers">
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-brand-black px-12 py-4">
              Human Capital Portal
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Contact;