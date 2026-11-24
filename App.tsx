import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import BackToTop from './components/UI/BackToTop';
import CookieConsent from './components/UI/CookieConsent';

// Lazy load pages for performance
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const Contact = lazy(() => import('./pages/Contact'));
const Admin = lazy(() => import('./pages/Admin'));
const About = lazy(() => import('./pages/About'));
const BusinessCardRishabh = lazy(() => import('./pages/BusinessCardRishabh'));

// Legal Pages
const Pricing = lazy(() => import('./pages/Pricing'));
const Refund = lazy(() => import('./pages/Refund'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const Copyright = lazy(() => import('./pages/Copyright'));
const Accessibility = lazy(() => import('./pages/Accessibility'));

// Loading Screen
const Loading = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-white">
    <div className="mb-6">
      <img
        src="/assets/logo.png"
        alt="Onsective"
        className="w-36 h-auto object-contain"
      />
    </div>
    <div className="flex flex-col items-center gap-3">
      <div className="w-40 h-px bg-brand-border relative overflow-hidden">
        <div
          className="absolute inset-y-0 left-0 w-1/3 bg-brand-primary"
          style={{ animation: 'loadSlide 1.4s ease-in-out infinite' }}
        />
        <style>{`@keyframes loadSlide { 0% { transform: translateX(-100%); } 100% { transform: translateX(400%); } }`}</style>
      </div>
      <span className="text-brand-muted text-sm">Loading...</span>
    </div>
  </div>
);

// Layout Wrapper to hide Nav/Footer on Admin pages
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const hideNavFooter = location.pathname.startsWith('/admin') || location.pathname.startsWith('/internal/businesscard');

  return (
    <div className="min-h-screen flex flex-col bg-white text-brand-dark font-sans antialiased selection:bg-brand-primary selection:text-white overflow-x-hidden w-full max-w-[100vw] relative">
      {!hideNavFooter && <Navbar />}
      <main className="flex-grow">
        {children}
      </main>
      {!hideNavFooter && <Footer />}
      {!hideNavFooter && <BackToTop />}
      {!hideNavFooter && <CookieConsent />}
    </div>
  );
};

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Analytics tracker — sends page views to backend
const AnalyticsTracker = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname.startsWith('/admin')) return;
    const sessionId = sessionStorage.getItem('onsective_sid') || `sid-${Date.now()}-${Math.random().toString(36).slice(2)}`;
    sessionStorage.setItem('onsective_sid', sessionId);
    fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        page: pathname,
        referrer: document.referrer,
        userAgent: navigator.userAgent,
        sessionId,
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
      }),
    }).catch(() => {});
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <AnalyticsTracker />
      <Layout>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetail />} />

            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/refund-policy" element={<Refund />} />
            <Route path="/copyright" element={<Copyright />} />
            <Route path="/accessibility" element={<Accessibility />} />

            {/* Retired pages: the server sends a 301; this covers in-app navigation. */}
            <Route path="/industries/*" element={<Navigate to="/services" replace />} />
            <Route path="/insights/*" element={<Navigate to="/services" replace />} />
            <Route path="/guides/*" element={<Navigate to="/services" replace />} />

            <Route path="/internal/businesscard/rishabh" element={<BusinessCardRishabh />} />

            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
};

export default App;
