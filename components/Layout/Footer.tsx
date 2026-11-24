import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowRight, Linkedin, Instagram, Youtube, Facebook } from 'lucide-react';
import {
  COMPANY_NAME, LEGAL_NAME, SERVICES, CONTACT_EMAIL, CONTACT_PHONE,
  LINKEDIN_URL, INSTAGRAM_URL, X_URL, YOUTUBE_URL, FACEBOOK_URL,
  HEADQUARTERS_ADDRESS, BUSINESS_REGISTRATION, COMPANY_TAGLINE,
} from '../../constants';

const XIcon = () => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${HEADQUARTERS_ADDRESS.street} ${HEADQUARTERS_ADDRESS.city} ${HEADQUARTERS_ADDRESS.state} ${HEADQUARTERS_ADDRESS.zip}`
  )}`;

  const socialLinks = [
    { label: 'LinkedIn', href: LINKEDIN_URL, icon: <Linkedin size={18} /> },
    { label: 'Instagram', href: INSTAGRAM_URL, icon: <Instagram size={18} /> },
    { label: 'X', href: X_URL, icon: <XIcon /> },
    { label: 'YouTube', href: YOUTUBE_URL, icon: <Youtube size={18} /> },
    { label: 'Facebook', href: FACEBOOK_URL, icon: <Facebook size={18} /> },
  ];

  const companyLinks = [
    { label: 'About', path: '/about' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Contact', path: '/contact' },
  ];

  const legalLinks = [
    { label: 'Terms of Service', path: '/terms' },
    { label: 'Privacy Policy', path: '/privacy' },
    { label: 'Refund & Cancellation Policy', path: '/refund-policy' },
    { label: 'Accessibility', path: '/accessibility' },
    { label: 'Copyright', path: '/copyright' },
  ];

  const linkCls = 'text-white/50 text-sm hover:text-brand-primary transition-colors inline-block';

  return (
    <footer className="bg-[#041020]">
      <div className="h-[2px] bg-gradient-to-r from-transparent via-brand-primary/40 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-16 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block mb-5">
              <img src="/assets/logo.png" alt={COMPANY_NAME} className="w-36 h-auto object-contain brightness-0 invert" />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm mb-6">{COMPANY_TAGLINE}</p>
            <div className="flex gap-3">
              {socialLinks.map(({ label, href, icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-10 h-10 flex items-center justify-center border border-white/10 text-white/40 hover:text-brand-primary hover:border-brand-primary transition-all">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-[0.15em] mb-5">Services</h4>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.id}><Link to={s.path} className={linkCls}>{s.title}</Link></li>
              ))}
            </ul>
          </div>

          {/* Company + legal */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-sm uppercase tracking-[0.15em] mb-5">Company</h4>
            <ul className="space-y-2.5 mb-8">
              {companyLinks.map((l) => (
                <li key={l.path}><Link to={l.path} className={linkCls}>{l.label}</Link></li>
              ))}
            </ul>
            <h4 className="text-white font-bold text-sm uppercase tracking-[0.15em] mb-5">Legal</h4>
            <ul className="space-y-2.5">
              {legalLinks.map((l) => (
                <li key={l.path}><Link to={l.path} className={linkCls}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-[0.15em] mb-5">Contact</h4>
            <div className="space-y-3">
              <a href={`tel:${CONTACT_PHONE.replace(/[^0-9+]/g, '')}`} className="flex items-center gap-3 text-white/50 text-sm hover:text-brand-primary transition-colors">
                <Phone size={16} className="text-brand-primary shrink-0" /> {CONTACT_PHONE}
              </a>
              <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-3 text-white/50 text-sm hover:text-brand-primary transition-colors">
                <Mail size={16} className="text-brand-primary shrink-0" /> {CONTACT_EMAIL}
              </a>
              <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-white/50 text-sm hover:text-brand-primary transition-colors">
                <MapPin size={16} className="text-brand-primary shrink-0 mt-0.5" />
                <span>{HEADQUARTERS_ADDRESS.street}, {HEADQUARTERS_ADDRESS.city}, {HEADQUARTERS_ADDRESS.state} {HEADQUARTERS_ADDRESS.zip}, {HEADQUARTERS_ADDRESS.country}</span>
              </a>
            </div>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-2 bg-brand-primary text-white font-semibold px-5 py-2.5 text-sm hover:bg-brand-gold-dark transition-colors">
              Contact Us <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      {/* Legal / registration bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-6 text-white/40 text-xs leading-relaxed space-y-1.5">
          <p>
            <span className="text-white/60 font-semibold">{BUSINESS_REGISTRATION.legalName}</span> is a company registered in Canada.
          </p>
          <p>
            Jurisdiction: {BUSINESS_REGISTRATION.jurisdiction} &nbsp;|&nbsp; Corporation No.: {BUSINESS_REGISTRATION.corporationNumber} &nbsp;|&nbsp; Business No.: {BUSINESS_REGISTRATION.businessNumber}
          </p>
          <p>&copy; {currentYear} {LEGAL_NAME} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
