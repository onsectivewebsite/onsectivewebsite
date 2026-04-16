import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';

const Careers: React.FC = () => {
  const CAREER_PORTAL_URL = 'https://career.onsective.com';
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = CAREER_PORTAL_URL;
    }, 2000);

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 100;
        return prev + 2;
      });
    }, 40);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <SEOHead
        title="Careers Portal | Redirecting"
        description="Transferring to Onsective's specialized career platform."
      />

      <section className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center relative">
        {/* Logo */}
        <div className="mb-12">
          <img
            src="/assets/logo.png"
            alt="Onsective Logo"
            className="w-48 md:w-56 h-auto object-contain"
          />
        </div>

        {/* Content */}
        <div className="max-w-lg space-y-8">
          <h1 className="text-4xl md:text-5xl font-['Playfair_Display'] text-[#1a1a2e] font-bold leading-tight">
            Redirecting to Career Portal...
          </h1>

          <p className="text-[#64748b] text-sm md:text-base leading-relaxed max-w-md mx-auto font-['Plus_Jakarta_Sans']">
            You are being transferred to Onsective's dedicated career platform where you can explore open positions and submit applications.
          </p>

          {/* Progress Bar */}
          <div className="w-64 mx-auto">
            <div className="h-1 bg-[#e2e8f0] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#c1912f] rounded-full transition-all duration-100 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-xs text-[#64748b] mt-3 font-['Plus_Jakarta_Sans']">
              Transferring...
            </p>
          </div>

          {/* Manual Link */}
          <div className="pt-4">
            <p className="text-sm text-[#64748b] mb-4 font-['Plus_Jakarta_Sans']">
              If you are not redirected automatically:
            </p>
            <a href={CAREER_PORTAL_URL}>
              <span className="inline-flex items-center gap-2 px-10 py-4 bg-[#c1912f] text-white font-semibold text-sm font-['Plus_Jakarta_Sans'] hover:brightness-110 transition-all cursor-pointer">
                Visit career.onsective.com <ArrowRight size={16} />
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;
