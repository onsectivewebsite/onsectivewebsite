import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin, Phone, Mail, ArrowRight, ArrowUpRight, Globe,
  Linkedin, Instagram, Youtube, Facebook, Star,
} from 'lucide-react';
import {
  COMPANY_NAME, SERVICES, INDUSTRIES, CONTACT_EMAIL, CONTACT_PHONE,
  LINKEDIN_URL, INSTAGRAM_URL, X_URL, YOUTUBE_URL, FACEBOOK_URL,
  HEADQUARTERS_ADDRESS, GLOBAL_OFFICES,
} from '../../constants';

const XIcon = () => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const currentYear = new Date().getFullYear();

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${HEADQUARTERS_ADDRESS.street} ${HEADQUARTERS_ADDRESS.city} ${HEADQUARTERS_ADDRESS.state} ${HEADQUARTERS_ADDRESS.zip}`
  )}`;

  const socialLinks = [
    { label: 'Google Business Profile', href: 'https://share.google/1FEaabgX3DE0px7L3', icon: <Star size={18} /> },
    { label: 'LinkedIn', href: LINKEDIN_URL, icon: <Linkedin size={18} /> },
    { label: 'Instagram', href: INSTAGRAM_URL, icon: <Instagram size={18} /> },
    { label: 'X', href: X_URL, icon: <XIcon /> },
    { label: 'YouTube', href: YOUTUBE_URL, icon: <Youtube size={18} /> },
    { label: 'Facebook', href: FACEBOOK_URL, icon: <Facebook size={18} /> },
  ];

  const [subFrequency, setSubFrequency] = useState('weekly');
  const [subError, setSubError] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubError('');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, frequency: subFrequency }),
      });
      const data = await res.json();
      if (res.ok) {
        setSubscribed(true);
        setEmail('');
        setTimeout(() => setSubscribed(false), 4000);
      } else {
        setSubError(data.message || 'Failed to subscribe.');
      }
    } catch {
      setSubError('Network error. Please try again.');
    }
  };

  return (
    <footer className="relative overflow-hidden">

      {/* ===== LARGE CTA SECTION ===== */}
      <section className="relative bg-brand-dark py-28 lg:py-36 overflow-hidden">
        {/* Animated diagonal accent lines */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'repeating-linear-gradient(135deg, #c1912f 0px, #c1912f 1px, transparent 1px, transparent 80px)' }}></div>
        {/* Floating 3D orb */}
        <div className="absolute right-[10%] top-1/2 -translate-y-1/2 w-64 h-64 border border-brand-primary/10 rounded-full animate-spin hidden lg:block" style={{ animationDuration: '25s' }}></div>
        <div className="absolute right-[12%] top-1/2 -translate-y-1/2 w-48 h-48 border border-brand-primary/5 rounded-full animate-spin hidden lg:block" style={{ animationDuration: '35s', animationDirection: 'reverse' }}></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
          <div className="max-w-3xl">
            <p className="text-brand-primary font-semibold text-sm tracking-widest uppercase mb-6">Ready to start?</p>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-7xl font-black text-white leading-[0.95] tracking-tight mb-8">
              Let's Build<br />
              <span className="text-gold">What's Next.</span>
            </h2>
            <p className="text-white/60 text-base sm:text-xl leading-relaxed mb-10 max-w-xl">
              Whether you're architecting sovereign infrastructure, entering new markets, or building a product from inception — our principals are ready when you are.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="inline-flex items-center gap-3 bg-brand-primary text-white font-bold px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base hover:bg-brand-gold-dark transition-all">
                Start a Conversation <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-3 border border-white/20 text-white font-semibold px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base hover:bg-white/5 transition-all">
                Explore Services <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== NEWSLETTER BAR ===== */}
      <div className="bg-brand-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white text-lg sm:text-xl font-display font-bold">
              Subscribe to Our Insights
            </h3>
            <p className="text-white/70 text-xs sm:text-sm mt-1">
              Get our latest articles on technology, strategy, and digital transformation.
            </p>
          </div>
          <div className="w-full md:w-auto">
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
              <div className="flex flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your work email"
                  required
                  className="flex-1 min-w-0 sm:w-64 px-4 py-3 bg-white/20 border border-white/30 text-white placeholder:text-white/50 outline-none focus:bg-white/30 transition-all text-sm"
                />
                <select
                  value={subFrequency}
                  onChange={(e) => setSubFrequency(e.target.value)}
                  className="px-2 py-3 bg-white/20 border border-white/30 border-l-0 text-white text-xs outline-none cursor-pointer"
                >
                  <option value="daily" className="text-black">Daily</option>
                  <option value="weekly" className="text-black">Weekly</option>
                  <option value="monthly" className="text-black">Monthly</option>
                </select>
              </div>
              <button type="submit" className="px-5 py-3 bg-brand-dark text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-navy-deep transition-colors shrink-0">
                {subscribed ? '✓ Subscribed' : 'Subscribe'}
              </button>
            </form>
            {subError && <p className="text-white/80 text-xs mt-2">{subError}</p>}
          </div>
        </div>
      </div>

      {/* ===== MAIN FOOTER ===== */}
      <div className="bg-[#041020]">
        {/* Gold accent line at top */}
        <div className="h-[2px] bg-gradient-to-r from-transparent via-brand-primary/40 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-20 pb-16">

          {/* Top row: Logo + tagline + offices */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
            <div className="lg:col-span-5">
              <Link to="/" className="inline-block mb-6">
                <img src="/assets/logo.png" alt={COMPANY_NAME} className="w-40 h-auto object-contain brightness-0 invert" />
              </Link>
              <p className="text-white/40 text-lg leading-relaxed max-w-md mb-8">
                A global digital transformation consultancy helping enterprises across 7+ nations modernize, innovate, and lead through technology.
              </p>
              {/* Social icons — larger */}
              <div className="flex gap-3">
                {socialLinks.map(({ label, href, icon }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                    className="w-11 h-11 flex items-center justify-center border border-white/10 text-white/40 hover:text-brand-primary hover:border-brand-primary transition-all duration-300">
                    {icon}
                  </a>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7">
              <h4 className="text-white/30 text-xs font-semibold uppercase tracking-[0.2em] mb-6">Our Global Offices</h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                {GLOBAL_OFFICES.map((office, i) => (
                  <Link key={i} to="/contact" className="group">
                    <div className="text-2xl mb-2">{office.flag}</div>
                    <div className="text-white font-semibold text-base group-hover:text-brand-primary transition-colors">{office.city}</div>
                    <div className="text-white/30 text-sm">{office.country}</div>
                    <div className="text-brand-primary/60 text-xs mt-1 font-medium">{office.type}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Separator */}
          <div className="h-px bg-white/5 mb-16"></div>

          {/* Link columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-12 mb-16">
            {/* Services */}
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-[0.15em] mb-6">Services</h4>
              <ul className="space-y-3">
                {SERVICES.map((s) => (
                  <li key={s.id}>
                    <Link to={s.path} className="text-white/40 text-xs sm:text-[15px] hover:text-brand-primary hover:translate-x-1 transition-all duration-200 inline-block">
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-[0.15em] mb-6">Industries</h4>
              <ul className="space-y-3">
                {INDUSTRIES.map((ind) => (
                  <li key={ind.id}>
                    <Link to={ind.path} className="text-white/40 text-xs sm:text-[15px] hover:text-brand-primary hover:translate-x-1 transition-all duration-200 inline-block">
                      {ind.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-[0.15em] mb-6">Company</h4>
              <ul className="space-y-3">
                {[
                  { label: 'About Onsective', path: '/onsective' },
                  { label: 'About Us', path: '/about' },
                  { label: 'Our Vision', path: '/vision' },
                  { label: 'Leadership', path: '/about' },
                  { label: 'Insights', path: '/insights' },
                  { label: 'Resources', path: '/resources' },
                  { label: 'Events', path: '/events' },
                  { label: 'Careers', path: '/careers' },
                  { label: 'Investors', path: '/investors' },
                  { label: 'Alumni', path: '/alumni' },
                  { label: 'Contact', path: '/contact' },
                ].map((item, idx) => (
                  <li key={idx}>
                    <Link to={item.path} className="text-white/35 text-[15px] hover:text-brand-primary hover:translate-x-1 transition-all duration-200 inline-block">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-[0.15em] mb-6">Get in Touch</h4>
              <div className="space-y-4">
                <a href={`tel:${CONTACT_PHONE.replace(/[^0-9+]/g, '')}`} className="flex items-center gap-3 text-white/35 text-[15px] hover:text-brand-primary transition-colors">
                  <Phone size={16} className="text-brand-primary shrink-0" />
                  {CONTACT_PHONE}
                </a>
                <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-3 text-white/35 text-[15px] hover:text-brand-primary transition-colors">
                  <Mail size={16} className="text-brand-primary shrink-0" />
                  {CONTACT_EMAIL}
                </a>
                <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-white/35 text-sm hover:text-brand-primary transition-colors">
                  <MapPin size={16} className="text-brand-primary shrink-0 mt-0.5" />
                  <span>{HEADQUARTERS_ADDRESS.street}, {HEADQUARTERS_ADDRESS.city}, {HEADQUARTERS_ADDRESS.state} {HEADQUARTERS_ADDRESS.zip}</span>
                </a>
              </div>

              <div className="mt-8">
                <Link to="/contact" className="inline-flex items-center gap-2 bg-brand-primary text-white font-semibold px-6 py-3 text-sm hover:bg-brand-gold-dark transition-colors">
                  Contact Us <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ===== BOTTOM BAR ===== */}
        <div className="border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-16 py-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="text-white/20 text-sm text-center lg:text-left">
                <p>&copy; {currentYear} {COMPANY_NAME} Enterprise Inc. All rights reserved.</p>
                <p className="mt-1 text-white/10 text-xs">All content, media, videos, and intellectual property are protected under Canadian and international copyright law.</p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-x-6 text-xs sm:text-sm text-white/25">
                <Link to="/privacy" className="hover:text-brand-primary transition-colors">Privacy</Link>
                <Link to="/terms" className="hover:text-brand-primary transition-colors">Terms</Link>
                <Link to="/copyright" className="hover:text-brand-primary transition-colors">Copyright</Link>
                <Link to="/accessibility" className="hover:text-brand-primary transition-colors">Accessibility</Link>
                <Link to="/employee-handbook" className="hover:text-brand-primary transition-colors">Employee Handbook</Link>
                <a href="/feed.xml" className="hover:text-brand-primary transition-colors">RSS</a>
                <a href="https://employee.onsective.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors flex items-center gap-1">
                  Employee Portal <ArrowUpRight size={10} />
                </a>
                <Link to="/admin" className="hover:text-brand-primary transition-colors">Admin</Link>
                <span className="flex items-center gap-1.5 text-white/30">
                  <Globe size={12} /> Global / EN
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
