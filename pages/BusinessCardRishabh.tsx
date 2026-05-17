import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Send, ArrowRight, Linkedin, Globe, CheckCircle, AlertCircle } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';
import { SERVICES, CONTACT_EMAIL, CONTACT_PHONE } from '../constants';

const BusinessCardRishabh: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, firstName: formData.name, lastName: 'BusinessCardLead' }),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputClasses = 'w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-[#c1912f] focus:ring-1 focus:ring-[#c1912f]/30 transition-colors placeholder:text-white/40';

  return (
    <>
      <SEOHead
        title="Rishabh | Onsective Enterprise"
        description="Connect with Rishabh at Onsective Enterprise. Global digital transformation, cloud, cybersecurity, and enterprise SEO."
        overrides={{
          canonical: `https://onsective.com/internal/businesscard/rishabh`,
          robots: 'noindex, nofollow' // Internal page, hide from Google
        }}
      />

      <div className="min-h-screen bg-[#0d2b45] relative overflow-hidden font-sans pb-20">
        {/* Background Accents */}
        <div className="absolute inset-0 perspective-grid opacity-20 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[500px] bg-[#c1912f]/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-xl mx-auto px-6 relative z-10 pt-20">
          
          {/* Profile Header */}
          <div className="text-center mb-10">
            <div className="w-28 h-28 mx-auto bg-gradient-to-tr from-[#0d2b45] to-[#1a1a2e] border-2 border-[#c1912f] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(193,145,47,0.3)] mb-6 overflow-hidden">
              <img src="/assets/logo.png" alt="Onsective Logo" className="w-16 h-auto opacity-90" />
            </div>
            <h1 className="text-3xl font-['Playfair_Display'] font-bold text-white mb-2">Rishabh</h1>
            <p className="text-[#c1912f] text-sm uppercase tracking-widest font-semibold mb-4 font-['Plus_Jakarta_Sans']">Onsective Enterprise</p>
            <p className="text-white/70 text-sm max-w-md mx-auto leading-relaxed font-['Plus_Jakarta_Sans']">
              Global Digital Transformation & Technology Consulting. Let's discuss how we can accelerate your enterprise growth.
            </p>
          </div>

          {/* Social / Direct Links */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
            <a href={`mailto:${CONTACT_EMAIL}`} className="flex flex-col items-center gap-2 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-[#c1912f]/50 transition-all text-white group">
              <Mail size={22} className="text-[#c1912f] group-hover:scale-110 transition-transform" />
              <span className="text-xs font-semibold">Email</span>
            </a>
            <a href={`tel:${CONTACT_PHONE}`} className="flex flex-col items-center gap-2 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-[#c1912f]/50 transition-all text-white group">
              <Phone size={22} className="text-[#c1912f] group-hover:scale-110 transition-transform" />
              <span className="text-xs font-semibold">Call</span>
            </a>
            <a href="https://www.linkedin.com/company/onsective/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-[#c1912f]/50 transition-all text-white group">
              <Linkedin size={22} className="text-[#c1912f] group-hover:scale-110 transition-transform" />
              <span className="text-xs font-semibold">LinkedIn</span>
            </a>
            <a href="https://onsective.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-[#c1912f]/50 transition-all text-white group">
              <Globe size={22} className="text-[#c1912f] group-hover:scale-110 transition-transform" />
              <span className="text-xs font-semibold">Website</span>
            </a>
          </div>

          {/* Services Quick Links */}
          <div className="mb-12">
            <h2 className="text-xs font-bold text-white/50 uppercase tracking-widest mb-4 font-['Plus_Jakarta_Sans'] pl-1">Our Core Services</h2>
            <div className="space-y-3">
              {SERVICES.slice(0, 5).map((service, idx) => (
                <Link
                  key={idx}
                  to={service.path}
                  className="flex items-center justify-between p-4 bg-gradient-to-r from-white/5 to-transparent border border-white/10 rounded-xl hover:border-[#c1912f]/50 transition-all group"
                >
                  <div className="flex items-center gap-3 text-white">
                    <div className="w-8 h-8 rounded-full bg-[#c1912f]/20 flex items-center justify-center">
                      <service.icon size={16} className="text-[#c1912f]" />
                    </div>
                    <span className="font-semibold text-sm font-['Plus_Jakarta_Sans']">{service.title}</span>
                  </div>
                  <ArrowRight size={18} className="text-white/30 group-hover:text-[#c1912f] group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
              <Link to="/services" className="block text-center text-xs font-bold text-[#c1912f] uppercase tracking-widest hover:text-white transition-colors py-2 font-['Plus_Jakarta_Sans']">
                View All Services
              </Link>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 relative overflow-hidden shadow-2xl backdrop-blur-sm">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#c1912f]/10 blur-3xl rounded-full" />
            
            <h2 className="text-2xl font-['Playfair_Display'] font-bold text-white mb-2 relative z-10">Start a Conversation</h2>
            <p className="text-white/60 text-sm mb-6 relative z-10 font-['Plus_Jakarta_Sans']">
              Leave your details below and I'll get back to you personally within 24 hours.
            </p>

            {status === 'success' && (
              <div className="flex items-start gap-3 bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-6 relative z-10">
                <CheckCircle size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                <p className="text-green-300 text-sm">Thank you. Your message has been received and I will be in touch shortly.</p>
              </div>
            )}
            {status === 'error' && (
              <div className="flex items-start gap-3 bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-6 relative z-10">
                <AlertCircle size={20} className="text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-red-300 text-sm">Something went wrong. Please try emailing me directly.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
              <div>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your Name *" className={inputClasses} />
              </div>
              <div>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Email Address *" className={inputClasses} />
              </div>
              <div>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className={inputClasses} />
              </div>
              <div>
                <select name="service" value={formData.service} onChange={handleChange} className={inputClasses}>
                  <option value="" className="text-black">Select an Area of Interest</option>
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.id} className="text-black">{s.title}</option>
                  ))}
                </select>
              </div>
              <div>
                <textarea name="message" value={formData.message} onChange={handleChange} required rows={3} placeholder="How can we help you? *" className={inputClasses + ' resize-none'} />
              </div>
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full flex items-center justify-center gap-2 py-4 bg-[#c1912f] text-white font-bold text-sm uppercase tracking-wider rounded-lg hover:brightness-110 transition-all disabled:opacity-70 disabled:cursor-not-allowed font-['Plus_Jakarta_Sans']"
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
                <Send size={16} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </>
  );
};

export default BusinessCardRishabh;
