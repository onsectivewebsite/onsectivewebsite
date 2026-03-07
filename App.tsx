import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import { ASSETS } from './utils/assets';

// Lazy load pages for performance
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const Industries = lazy(() => import('./pages/Industries'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const CapabilityDetail = lazy(() => import('./pages/CapabilityDetail'));
const IndustryDetail = lazy(() => import('./pages/IndustryDetail'));
const Contact = lazy(() => import('./pages/Contact'));
const Insights = lazy(() => import('./pages/Insights'));
const InsightDetail = lazy(() => import('./pages/InsightDetail'));
const Careers = lazy(() => import('./pages/Careers'));
const Events = lazy(() => import('./pages/Events'));
const Admin = lazy(() => import('./pages/Admin'));
const About = lazy(() => import('./pages/About'));
const Investors = lazy(() => import('./pages/Investors'));
const Alumni = lazy(() => import('./pages/Alumni'));
const Platforms = lazy(() => import('./pages/Platforms'));
const OnsecBoard = lazy(() => import('./pages/OnsecBoard'));
const OnsecEmployee = lazy(() => import('./pages/OnsecEmployee'));
const EventDetail = lazy(() => import('./pages/EventDetail'));
const Vision = lazy(() => import('./pages/Vision'));

// Legal Pages
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const Copyright = lazy(() => import('./pages/Copyright'));
const Accessibility = lazy(() => import('./pages/Accessibility'));

// Elite Loading Fallback
const Loading = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-brand-black text-white p-6">
    <div className="relative mb-12 flex justify-center items-center">
      <div className="w-40 h-auto bg-transparent overflow-hidden animate-pulse">
        <img
          src={ASSETS.LOGO || "/assets/logo.png"}
          alt="Onsective Logo"
          className="w-64 h-auto object-contain bg-transparent brightness-0 invert drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]"
        />
      </div>
    </div>
    <div className="flex flex-col items-center gap-4">
      <span className="text-[10px] font-black uppercase tracking-[0.6em] text-brand-primary animate-pulse">
        Synchronizing Enterprise
      </span>
      <div className="w-48 h-[1px] bg-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-primary animate-[reveal_2s_infinite]"></div>
      </div>
    </div>
  </div>
);

// Layout Wrapper to hide Nav/Footer on Admin pages
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  return (
    <div className="min-h-screen flex flex-col bg-white text-brand-dark font-sans antialiased selection:bg-brand-primary selection:text-brand-black overflow-x-hidden w-full relative">
      {!isAdmin && <Navbar />}
      <main className="flex-grow">
        {children}
      </main>
      {!isAdmin && <Footer />}
    </div>
  );
};

// Scroll to top or specific hash on route change
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'auto' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/services/:serviceId/capability/:capabilityId" element={<CapabilityDetail />} />

            <Route path="/industries" element={<Industries />} />
            <Route path="/industries/:id" element={<IndustryDetail />} />

            <Route path="/platforms" element={<Platforms />} />
            <Route path="/platforms/onsecboard" element={<OnsecBoard />} />
            <Route path="/platforms/onsecemployee" element={<OnsecEmployee />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/:id" element={<InsightDetail />} />

            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/investors" element={<Investors />} />
            <Route path="/alumni" element={<Alumni />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:id" element={<EventDetail />} />
            <Route path="/vision" element={<Vision />} />

            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/copyright" element={<Copyright />} />
            <Route path="/accessibility" element={<Accessibility />} />

            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
};

export default App;