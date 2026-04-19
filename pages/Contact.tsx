import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, ChevronDown, CheckCircle, AlertCircle, Send, ArrowUpRight } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';
import { CONTACT_EMAIL, CONTACT_PHONE, SERVICES, GLOBAL_OFFICES } from '../constants';

const FAQ_ITEMS = [
  {
    question: 'How quickly can you mobilize a team for a new project?',
    answer: 'Most engagements begin within one to two weeks of a signed agreement. For urgent requirements, we can assemble a core delivery team within days. Every project starts with a structured discovery session to align on scope, timeline, and success metrics.',
  },
  {
    question: 'Do you serve startups and mid-market companies?',
    answer: 'Yes. While we maintain deep relationships with large enterprises, we also partner with growth-stage organizations that require institutional-grade solutions scaled appropriately to their maturity. Our engagement models are flexible, from advisory retainers to full-service delivery.',
  },
  {
    question: 'Which industries does Onsective specialize in?',
    answer: 'Our primary verticals include financial services, healthcare and life sciences, retail and e-commerce, manufacturing, and energy. That said, our core methodologies in cloud, cybersecurity, AI, and digital marketing are transferable across virtually any industry.',
  },
  {
    question: 'How do you approach data security and regulatory compliance?',
    answer: 'Security is embedded at every layer of our delivery process. We implement zero-trust architectures, encrypt data at rest and in transit, and maintain compliance with GDPR, HIPAA, SOC 2, and PCI DSS. Non-disclosure agreements are executed prior to any technical discussion.',
  },
  {
    question: 'What does a typical client engagement look like?',
    answer: 'Each engagement follows our four-phase methodology: Discover, Design, Deliver, Optimize. We begin with deep stakeholder interviews and systems audits, move through architecture and design sprints, execute via agile delivery, and provide ongoing optimization post-launch.',
  },
];

const FEATURED_OFFICES = [
  { city: 'Toronto', country: 'Canada', address: '1111 Albion Rd, Etobicoke, ON M9V 1A6', phone: '+1 (672) 673-7900' },
  { city: 'New York', country: 'United States', address: 'Americas Hub', phone: '' },
  { city: 'London', country: 'United Kingdom', address: 'EMEA Hub', phone: '' },
  { city: 'Dubai', country: 'UAE', address: 'Middle East Hub', phone: '' },
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

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
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ firstName: '', lastName: '', company: '', email: '', phone: '', service: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputClasses = 'w-full px-4 py-3 bg-brand-light border border-brand-border rounded text-brand-text text-sm focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/20 transition-colors placeholder:text-brand-muted/60';

  return (
    <>
      <SEOHead pageKey="contact" />

      {/* ===== SECTION 1: HERO ===== */}
      <section className="bg-brand-dark pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center">
          <span className="text-brand-primary font-semibold text-xs tracking-[0.2em] uppercase block mb-4 animate-on-scroll">Get in Touch</span>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-on-scroll delay-100">
            Contact Us
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed animate-on-scroll delay-200">
            Have a project in mind or need strategic guidance? Reach out to our team and we will connect you with the right experts.
          </p>
        </div>
      </section>

      {/* ===== SECTION 2: FORM + CONTACT INFO ===== */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Left: Form (3 cols) */}
            <div className="lg:col-span-3 animate-on-scroll">
              <h2 className="font-display text-3xl font-bold text-brand-dark mb-2">Send Us a Message</h2>
              <p className="text-brand-muted mb-8">Fill out the form below and a member of our team will respond within 24 hours.</p>

              {status === 'success' && (
                <div className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <CheckCircle size={20} className="text-green-600 flex-shrink-0" />
                  <p className="text-green-800 text-sm">Thank you for reaching out. Our team will be in touch shortly.</p>
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                  <AlertCircle size={20} className="text-red-600 flex-shrink-0" />
                  <p className="text-red-800 text-sm">Something went wrong. Please try again or email us directly.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-brand-dark mb-1.5">First Name *</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required placeholder="John" className={inputClasses} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-dark mb-1.5">Last Name *</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required placeholder="Smith" className={inputClasses} />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-dark mb-1.5">Company</label>
                  <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Your organization" className={inputClasses} />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-brand-dark mb-1.5">Email Address *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="john@company.com" className={inputClasses} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-dark mb-1.5">Phone Number</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" className={inputClasses} />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-dark mb-1.5">Service of Interest</label>
                  <select name="service" value={formData.service} onChange={handleChange} className={inputClasses}>
                    <option value="">Select a service</option>
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.id}>{s.title}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-dark mb-1.5">Message *</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} placeholder="Tell us about your project or inquiry..." className={inputClasses + ' resize-none'} />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="inline-flex items-center gap-3 px-8 py-3.5 bg-brand-primary text-white font-semibold text-sm hover:bg-brand-gold-dark transition-colors duration-300 rounded disabled:opacity-60"
                >
                  {status === 'submitting' ? 'Sending...' : 'Submit Inquiry'}
                  <Send size={16} />
                </button>
              </form>
            </div>

            {/* Right: Contact details (2 cols) */}
            <div className="lg:col-span-2 animate-on-scroll delay-200">
              <h2 className="font-display text-3xl font-bold text-brand-dark mb-8">Contact Information</h2>

              <div className="space-y-8">
                {/* Offices */}
                {FEATURED_OFFICES.map((office, idx) => (
                  <div key={idx} className="flex gap-4">
                    <MapPin size={20} className="text-brand-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-brand-dark">{office.city}{idx === 0 ? ' (Global HQ)' : ''}</h4>
                      <p className="text-brand-muted text-sm">{office.address}</p>
                      {office.phone && <p className="text-brand-muted text-sm">{office.phone}</p>}
                    </div>
                  </div>
                ))}

                <div className="border-t border-brand-border pt-8 space-y-5">
                  <div className="flex gap-4">
                    <Phone size={20} className="text-brand-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-brand-dark">Phone</h4>
                      <a href={`tel:${CONTACT_PHONE}`} className="text-brand-muted text-sm hover:text-brand-primary transition-colors">{CONTACT_PHONE}</a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Mail size={20} className="text-brand-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-brand-dark">Email</h4>
                      <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand-muted text-sm hover:text-brand-primary transition-colors">{CONTACT_EMAIL}</a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Clock size={20} className="text-brand-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-brand-dark">Business Hours</h4>
                      <p className="text-brand-muted text-sm">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                      <p className="text-brand-muted text-sm">Saturday - Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== GOOGLE BUSINESS PROFILE + LINKEDIN CTA ===== */}
      <section className="py-16 bg-white border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Google Business Profile */}
            <div className="bg-gradient-to-br from-brand-dark to-brand-navy-deep rounded-lg p-8 flex flex-col gap-6 text-white">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-brand-primary/20 flex items-center justify-center shrink-0">
                  <svg width={22} height={22} viewBox="0 0 24 24" fill="none">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1Z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.99.66-2.26 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z" fill="#34A853"/>
                    <path d="M5.84 14.1a6.62 6.62 0 0 1 0-4.2V7.07H2.18a11 11 0 0 0 0 9.87l3.66-2.84Z" fill="#FBBC05"/>
                    <path d="M12 4.75c1.62 0 3.06.56 4.2 1.64l3.15-3.15C17.45 1.19 14.97.25 12 .25A11 11 0 0 0 2.18 7.07L5.84 9.9C6.71 7.3 9.14 4.75 12 4.75Z" fill="#EA4335"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-xs font-semibold text-brand-primary uppercase tracking-widest mb-1">Google Business Profile</div>
                  <h3 className="text-lg md:text-xl font-display font-bold leading-tight">Find, Review, and Save Onsective on Google</h3>
                  <p className="text-white/60 text-sm mt-2">
                    View the Onsective location, hours, and contact information. Leaving a review supports local search visibility.
                  </p>
                </div>
              </div>
              <a
                href="https://share.google/1FEaabgX3DE0px7L3"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-brand-primary text-white font-semibold text-sm rounded-md hover:brightness-110 w-fit"
              >
                Open on Google <ArrowUpRight size={14} />
              </a>
            </div>

            {/* LinkedIn Company Page */}
            <div className="bg-gradient-to-br from-[#0077B5] to-[#004770] rounded-lg p-8 flex flex-col gap-6 text-white">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <svg width={22} height={22} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.86-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.86 3.38-1.86 3.61 0 4.28 2.38 4.28 5.47v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .78 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .78 23.2 0 22.22 0Z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-xs font-semibold text-white/80 uppercase tracking-widest mb-1">LinkedIn Company</div>
                  <h3 className="text-lg md:text-xl font-display font-bold leading-tight">Follow Onsective on LinkedIn</h3>
                  <p className="text-white/70 text-sm mt-2">
                    Follow Onsective Enterprise for institutional insights, case studies, thought leadership, and career opportunities.
                  </p>
                </div>
              </div>
              <a
                href="https://www.linkedin.com/company/onsective/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white text-[#0077B5] font-semibold text-sm rounded-md hover:bg-white/90 w-fit"
              >
                Follow on LinkedIn <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: OFFICES MAP ===== */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="text-brand-primary font-semibold text-xs tracking-[0.2em] uppercase block mb-4">Worldwide Operations</span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-dark mb-6">
              Our Offices
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {GLOBAL_OFFICES.map((office, idx) => (
              <div
                key={idx}
                className="bg-white border border-brand-border rounded-lg p-5 hover:border-brand-primary/40 hover:shadow-md transition-all duration-300 animate-on-scroll"
                style={{ transitionDelay: `${idx * 70}ms` }}
              >
                <span className="text-3xl block mb-2">{office.flag}</span>
                <h4 className="font-bold text-brand-dark text-base">{office.city}</h4>
                <p className="text-brand-muted text-sm">{office.country}</p>
                <p className="text-xs text-brand-primary font-medium mt-2 uppercase tracking-wider">{office.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: FAQ ===== */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="text-brand-primary font-semibold text-xs tracking-[0.2em] uppercase block mb-4">Common Questions</span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-dark">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {FAQ_ITEMS.map((faq, idx) => (
              <div
                key={idx}
                className="border border-brand-border rounded-lg overflow-hidden animate-on-scroll"
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-brand-light/50 transition-colors"
                >
                  <span className="font-semibold text-brand-dark text-sm">{faq.question}</span>
                  <ChevronDown
                    size={18}
                    className={`text-brand-muted flex-shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${openFaq === idx ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="px-6 pb-5 text-brand-muted text-sm leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
