import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Cookie, X } from 'lucide-react';

const KEY = 'onsective-cookie-consent-v1';

const CookieConsent: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Short delay so the banner doesn't fight with initial paint.
    const t = setTimeout(() => {
      try {
        if (!localStorage.getItem(KEY)) setShow(true);
      } catch {
        setShow(true);
      }
    }, 800);
    return () => clearTimeout(t);
  }, []);

  const accept = (choice: 'all' | 'essential') => {
    try {
      localStorage.setItem(KEY, JSON.stringify({ choice, at: Date.now() }));
    } catch {}
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-consent-title"
      className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-[80] bg-[#0d2b45] text-white border border-[#c1912f]/30 rounded-lg shadow-2xl p-5 font-['Plus_Jakarta_Sans']"
    >
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded-lg bg-[#c1912f]/20 flex items-center justify-center shrink-0">
          <Cookie size={18} className="text-[#c1912f]" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 id="cookie-consent-title" className="text-sm font-bold text-white">Cookie preferences</h3>
            <button
              type="button"
              onClick={() => accept('essential')}
              aria-label="Close cookie banner"
              className="text-white/40 hover:text-white"
            >
              <X size={16} />
            </button>
          </div>
          <p className="text-xs text-white/55 mt-1 leading-relaxed">
            Onsective uses essential cookies to operate this site and optional analytics cookies to improve your experience.
            See our{' '}
            <Link to="/privacy" className="text-[#c1912f] hover:underline">Privacy Policy</Link>
            {' '}for details.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => accept('all')}
              className="px-4 py-2 bg-[#c1912f] hover:brightness-110 text-white text-xs font-semibold rounded"
            >
              Accept all
            </button>
            <button
              type="button"
              onClick={() => accept('essential')}
              className="px-4 py-2 border border-white/15 hover:border-white/40 text-white/80 text-xs font-semibold rounded"
            >
              Essential only
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
