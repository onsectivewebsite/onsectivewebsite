import React, { useEffect } from 'react';
import { Globe, ShieldCheck } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';
import Button from '../components/UI/Button';

const Careers: React.FC = () => {
  const CAREER_PORTAL_URL = 'https://career.onsective.com';

  useEffect(() => {
    // Strategic institutional redirection timer
    // Allows users to witness the premium brand transition before routing
    const timer = setTimeout(() => {
      window.location.href = CAREER_PORTAL_URL;
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <SEOHead
        title="Human Capital Portal | Redirecting"
        description="Transferring to Onsective's specialized career platform for elite mandates and institutional roles."
      />

      <section className="min-h-screen bg-brand-black flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
        {/* Background Institutional Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0 bg-[url('/assets/carbon-fibre.png')]"></div>
        </div>

        {/* Visual Anchor - The Onsective Logo */}
        <div className="relative mb-12 animate-fade-up flex justify-center items-center">
          <img
            src="/assets/logo.png"
            alt="Onsective Logo"
            className="w-56 md:w-80 h-auto object-contain bg-transparent"
          />
        </div>

        {/* Messaging Component */}
        <div className="max-w-xl space-y-8 animate-fade-up relative z-10" style={{ animationDelay: '0.2s' }}>
          <div className="space-y-2">
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-brand-primary animate-pulse block">
              Synchronizing Human Capital
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-white uppercase font-black tracking-tighter leading-none">
              ELITE <span className="text-gold-gradient italic">MANDATES.</span>
            </h1>
          </div>

          <p className="text-white/80 text-sm md:text-base font-medium leading-relaxed max-w-md mx-auto">
            You are being securely routed to our specialized human capital portal at
            <span className="text-brand-primary ml-1 font-bold whitespace-nowrap">career.onsective.com</span>
          </p>

          <div className="flex flex-col items-center gap-8 pt-8">
            <a href={CAREER_PORTAL_URL}>
              <Button variant="primary" size="lg" withArrow className="px-16 group shadow-gold">
                Proceed to Portal
              </Button>
            </a>

            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-3 text-[9px] font-black text-white/20 uppercase tracking-[0.4em]">
                <ShieldCheck size={14} className="text-brand-primary/40" />
                Sovereign Tunnel Active
              </div>
              <div className="flex items-center gap-3 text-[9px] font-black text-white/20 uppercase tracking-[0.4em]">
                <Globe size={14} />
                Global Access Node: Primary
              </div>
            </div>
          </div>
        </div>

        {/* Institutional Progress Matrix (Progress Bar) */}
        <div className="fixed bottom-0 left-0 w-full h-1 bg-white/5 overflow-hidden">
          <div className="h-full bg-brand-primary animate-[reveal_2s_linear_forwards]"></div>
        </div>

        {/* Subtle Decorative Architectural Lines */}
        <div className="absolute top-10 left-10 w-px h-32 bg-gradient-to-b from-brand-primary/20 to-transparent"></div>
        <div className="absolute bottom-10 right-10 w-px h-32 bg-gradient-to-t from-brand-primary/20 to-transparent"></div>
      </section>
    </>
  );
};

export default Careers;