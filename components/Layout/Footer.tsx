import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Facebook, Youtube, MapPin, Phone, Mail, Instagram, X as XIcon, Globe } from 'lucide-react';
import { COMPANY_NAME, SERVICES, INDUSTRIES, CONTACT_EMAIL, CONTACT_PHONE, LINKEDIN_URL, INSTAGRAM_URL, X_URL, YOUTUBE_URL, FACEBOOK_URL, HEADQUARTERS_ADDRESS } from '../../constants';
import Button from '../UI/Button';

const Footer: React.FC = () => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${HEADQUARTERS_ADDRESS.street} ${HEADQUARTERS_ADDRESS.city} ${HEADQUARTERS_ADDRESS.state} ${HEADQUARTERS_ADDRESS.zip}`)}`;

  return (
    <footer className="bg-white text-brand-dark border-t border-gray-100">

      {/* Pre-Footer CTA */}
      <div className="bg-brand-black py-16 sm:py-24 px-4 sm:px-12">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left max-w-2xl">
            <h3 className="text-2xl sm:text-5xl font-serif text-white mb-4">Ready to navigate your next?</h3>
            <p className="text-gray-400 font-medium text-base sm:text-xl">Interface with Onsective architects to accelerate your institutional transformation.</p>
          </div>
          <Link to="/contact" className="w-full sm:w-auto">
            <Button variant="primary" size="lg" className="w-full bg-white text-brand-black hover:bg-brand-primary hover:text-white border-none">
              Initiate Briefing
            </Button>
          </Link>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-12 py-16 sm:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-10 gap-12 lg:gap-8 xl:gap-12">

          {/* Brand & Address */}
          <div className="space-y-4 lg:col-span-4 pr-0 lg:pr-12">
            <Link to="/" className="group inline-block mb-2 -mt-4 sm:-mt-6 lg:-mt-10">
              <img
                src="/assets/logo.png"
                alt={COMPANY_NAME}
                className="w-48 sm:w-56 h-auto object-contain object-left transition-transform duration-500 group-hover:scale-105"
              />
            </Link>

            <div className="space-y-4 text-sm font-medium text-slate-500">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 hover:text-brand-primary transition-colors group"
              >
                <MapPin className="w-5 h-5 shrink-0 text-brand-primary group-hover:scale-110 transition-all" />
                <span className="leading-relaxed font-bold uppercase tracking-tight text-[10px] xl:text-xs">
                  {HEADQUARTERS_ADDRESS.street}<br />
                  {HEADQUARTERS_ADDRESS.city}, {HEADQUARTERS_ADDRESS.state} {HEADQUARTERS_ADDRESS.zip}<br />
                  {HEADQUARTERS_ADDRESS.country}
                </span>
              </a>

              <a
                href={`tel:${CONTACT_PHONE.replace(/[^0-9+]/g, '')}`}
                className="flex items-center gap-4 hover:text-brand-primary transition-colors group"
              >
                <Phone className="w-5 h-5 shrink-0 text-brand-primary group-hover:scale-110 transition-all" />
                <span className="font-black tracking-widest text-[10px] xl:text-xs">{CONTACT_PHONE}</span>
              </a>

              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-4 hover:text-brand-primary transition-colors group"
              >
                <Mail className="w-5 h-5 shrink-0 text-brand-primary group-hover:scale-110 transition-all" />
                <span className="font-bold lowercase text-[10px] xl:text-xs">{CONTACT_EMAIL}</span>
              </a>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <SocialIcon Icon={Linkedin} href={LINKEDIN_URL} />
              <SocialIcon Icon={Instagram} href={INSTAGRAM_URL} />
              <SocialIcon Icon={XIcon} href={X_URL} />
              <SocialIcon Icon={Youtube} href={YOUTUBE_URL} />
              <SocialIcon Icon={Facebook} href={FACEBOOK_URL} />
            </div>
          </div>

          {/* Capabilities */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-[10px] uppercase tracking-[0.3em] text-brand-black mb-8 border-b border-slate-100 pb-2">Capabilities</h4>
            <ul className="space-y-4 text-[10px] font-black uppercase tracking-widest text-slate-400">
              {SERVICES.slice(0, 6).map(s => (
                <li key={s.id}>
                  <Link to={s.path} className="hover:text-brand-primary transition-colors">{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-[10px] uppercase tracking-[0.3em] text-brand-black mb-8 border-b border-slate-100 pb-2">Verticals</h4>
            <ul className="space-y-4 text-[10px] font-black uppercase tracking-widest text-slate-400">
              {INDUSTRIES.map(i => (
                <li key={i.id}>
                  <Link to={i.path} className="hover:text-brand-primary transition-colors">{i.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Intelligence */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-[10px] uppercase tracking-[0.3em] text-brand-black mb-8 border-b border-slate-100 pb-2">Intelligence</h4>
            <ul className="space-y-4 text-[10px] font-black uppercase tracking-widest text-slate-400">
              <li><Link to="/insights" className="hover:text-brand-primary transition-colors">Strategic Briefs</Link></li>
              <li><Link to="/careers" className="hover:text-brand-primary transition-colors">Elite Mandates</Link></li>
              <li><Link to="/about" className="hover:text-brand-primary transition-colors">Our Genesis</Link></li>
              <li><Link to="/investors" className="hover:text-brand-primary transition-colors">Capital Governance</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Legal & Localities */}
      <div className="bg-slate-50 border-t border-slate-100 py-10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-12 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] font-black uppercase tracking-widest text-slate-400">
          <p className="text-center md:text-left">&copy; {new Date().getFullYear()} ONSECTIVE ENTERPRISE INC. ALL RIGHTS RESERVED.</p>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
            <Link to="/privacy" className="hover:text-brand-black">Privacy</Link>
            <Link to="/terms" className="hover:text-brand-black">Terms</Link>
            <a href="https://employee.onsective.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-black">Employee Login</a>
            <a href="https://ug.link/onsective" target="_blank" rel="noopener noreferrer" className="hover:text-brand-black">Employee Storage Login</a>
            <div className="flex items-center gap-2 text-brand-primary">
              <Globe size={14} className="text-brand-primary" />
              <span>GLOBAL / EN</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ Icon, href = "#" }: { Icon: any; href?: string }) => (
  <a
    href={href}
    target={href !== "#" ? "_blank" : undefined}
    rel={href !== "#" ? "noopener noreferrer" : undefined}
    className="w-10 h-10 rounded-none border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-brand-black hover:text-brand-primary hover:border-brand-black transition-all duration-300"
  >
    <Icon size={18} />
  </a>
);

export default Footer;