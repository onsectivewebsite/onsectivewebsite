import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Instagram, Globe, ChevronRight, Facebook, Youtube } from 'lucide-react';
import { CONTACT_EMAIL, CONTACT_PHONE, LINKEDIN_URL, INSTAGRAM_URL, X_URL, FACEBOOK_URL, YOUTUBE_URL, HEADQUARTERS_ADDRESS } from '../../data/company';
import { NAV_ITEMS } from '../../data/navigation';
import { ASSETS } from '../../utils/assets';

// Custom X (formerly Twitter) icon component
const XIcon = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Footer: React.FC = () => {

  const socialLinks = [
    { url: LINKEDIN_URL, icon: Linkedin, label: 'LinkedIn' },
    { url: X_URL, icon: XIcon, label: 'X (Twitter)' },
    { url: INSTAGRAM_URL, icon: Instagram, label: 'Instagram' },
    { url: FACEBOOK_URL, icon: Facebook, label: 'Facebook' },
    { url: YOUTUBE_URL, icon: Youtube, label: 'YouTube' }
  ];

  return (
    <footer className="bg-brand-black text-white relative overflow-hidden border-t border-white/5">
      {/* Strategic Gradient Overlays */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-primary/50 to-transparent"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[radial-gradient(circle_at_top_right,rgba(197,160,89,0.05)_0%,transparent_70%)]"></div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Upper Tier: Brand & Core Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 py-32 border-b border-white/5">
          <div className="lg:col-span-4 space-y-12">
            {/* Logo */}
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="inline-block group mb-8 focus:outline-none cursor-pointer">
              <img
                src={ASSETS.LOGO || "/assets/logo.png"}
                alt="Onsective"
                className="w-48 h-48 md:w-56 md:h-56 object-contain brightness-0 invert group-hover:scale-105 transition-transform duration-500 drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]"
              />
            </button>
            {/* Founding badge */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-px bg-brand-primary"></div>
              <span className="text-[9px] font-black uppercase tracking-[0.5em] text-brand-primary">Est. February 2026</span>
              <div className="w-6 h-px bg-brand-primary"></div>
            </div>
            <p className="text-white/40 text-lg leading-relaxed font-medium max-w-sm">
              Institutional stewardship through sovereign technical architecture. Engineering digital resilience for the global elite since February 2026.
            </p>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 text-white/40 hover:text-brand-primary hover:border-brand-primary transition-all rounded-none group"
                  >
                    <Icon size={18} className="group-hover:scale-110 transition-transform" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-12 lg:pl-16">
            <div className="space-y-10">
              <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-primary border-b border-brand-primary/20 pb-4 inline-block">Domains</h4>
              <ul className="space-y-6">
                {(NAV_ITEMS[0].children || []).slice(0, 6).map((item: any, i: number) => (
                  <li key={i}>
                    <Link to={item.path} className="text-xs font-black uppercase tracking-[0.2em] text-white/30 hover:text-white transition-all flex items-center gap-2 group">
                      <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-brand-primary" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-10">
              <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-primary border-b border-brand-primary/20 pb-4 inline-block">Repository</h4>
              <ul className="space-y-6">
                {[
                  { label: 'Our Genesis', path: '/about' },
                  { label: 'Sovereign Vision', path: '/vision' },
                  { label: 'Capital Strategy', path: '/investors' },
                  { label: 'The Ecosystem', path: '/platforms' },
                  { label: 'Talent Portal', path: '/careers' }
                ].map((link, i) => (
                  <li key={i}>
                    <Link to={link.path} className="text-xs font-black uppercase tracking-[0.2em] text-white/30 hover:text-white transition-all flex items-center gap-2 group">
                      <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-brand-primary" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-10">
              <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-primary border-b border-brand-primary/20 pb-4 inline-block">Direct Node</h4>
              <div className="space-y-6">
                {/* Google Maps Embed */}
                <a
                  href="https://maps.google.com/?q=1111+Albion+Rd,+Etobicoke,+Toronto,+ON+M9V+1A6,+Canada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group overflow-hidden relative border border-white/10 hover:border-brand-primary/40 transition-all duration-300"
                >
                  <iframe
                    title="Onsective HQ"
                    src="https://maps.google.com/maps?q=1111+Albion+Rd+Etobicoke+Toronto+ON+M9V+1A6&output=embed&z=15"
                    width="100%"
                    height="160"
                    style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(90%)' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="absolute inset-0 border border-brand-primary/0 group-hover:border-brand-primary/30 transition-all duration-300 pointer-events-none" />
                  <div className="absolute bottom-2 right-2 text-[8px] font-black uppercase tracking-widest text-brand-primary bg-brand-black/80 px-2 py-1">
                    View Map
                  </div>
                </a>
                <div className="flex gap-4 group cursor-default">
                  <MapPin size={20} className="text-brand-primary shrink-0 transition-transform group-hover:translate-y-[-2px]" />
                  <span className="text-[11px] font-black uppercase tracking-widest text-white/60 leading-relaxed">
                    {HEADQUARTERS_ADDRESS.street}<br />
                    {HEADQUARTERS_ADDRESS.city}, {HEADQUARTERS_ADDRESS.state}
                  </span>
                </div>
                <a href={`mailto:${CONTACT_EMAIL}`} className="flex gap-4 group items-center">
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-brand-black transition-all">
                    <Mail size={14} />
                  </div>
                  <span className="text-[11px] font-black tracking-widest text-white/40 group-hover:text-white transition-colors lowercase">{CONTACT_EMAIL}</span>
                </a>
                <a href={`tel:${CONTACT_PHONE}`} className="flex gap-4 group items-center">
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-brand-black transition-all">
                    <Phone size={14} />
                  </div>
                  <span className="text-[11px] font-black tracking-widest text-white/40 group-hover:text-white transition-colors uppercase">{CONTACT_PHONE}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Lower Tier: Legal & Compliance */}
        <div className="pt-10 pb-12 border-t border-white/10">
          {/* Top row: copyright + links */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white">
              © 2026 ONSECTIVE ENTERPRISE INC. ALL RIGHTS RESERVED.
            </span>
            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-[9px] font-black uppercase tracking-[0.35em] text-white/60">
              {[
                { label: 'Privacy', path: '/privacy' },
                { label: 'Terms', path: '/terms' },
                { label: 'Employee Login', path: 'https://employee.onsective.com', isExternal: true },
                { label: 'Employee Storage Login', path: 'https://onsective.us12.ug.link/desktop/?os=ugospro#/', isExternal: true },
              ].map((link, i) => (
                link.isExternal ? (
                  <a key={i} href={link.path} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors whitespace-nowrap">
                    {link.label}
                  </a>
                ) : (
                  <Link key={i} to={link.path} className="hover:text-white transition-colors whitespace-nowrap">{link.label}</Link>
                )
              ))}
              {/* Language / Region selector */}
              <span className="text-white/40 border border-white/10 px-3 py-1 cursor-default hover:border-brand-primary hover:text-brand-primary transition-all tracking-widest">GLOBAL / EN ↓</span>
            </div>
          </div>
        </div>
      </div>

      {/* Structural Globe Accent */}
      <div className="absolute -bottom-64 -right-64 opacity-[0.03] pointer-events-none select-none animate-[spin_120s_linear_infinite]">
        <Globe size={1000} strokeWidth={0.5} />
      </div>
    </footer>
  );
};

export default Footer;