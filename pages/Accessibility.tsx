import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowRight, CheckCircle2, AlertCircle, Monitor, Accessibility as AccessibilityIcon } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';

const Accessibility: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -80px 0px' }
    );
    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <SEOHead title="Accessibility Statement | Onsective" description="Onsective's commitment to digital accessibility and inclusive design for all users." />

      {/* ===== HERO ===== */}
      <section className="bg-[#0d2b45] pt-40 pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-10 h-px bg-[#c1912f]" />
            <span className="text-[#c1912f] font-semibold text-xs tracking-[0.25em] uppercase font-['Plus_Jakarta_Sans']">Commitment</span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-['Playfair_Display'] font-bold text-white tracking-tight leading-[0.95] mb-6">
            Accessibility
          </h1>
          <p className="text-lg md:text-xl text-white/50 max-w-3xl leading-relaxed font-['Plus_Jakarta_Sans']">
            Onsective Inc. is committed to ensuring digital accessibility for all users, including people with disabilities. We continuously work to improve the user experience for everyone.
          </p>
        </div>
      </section>

      {/* ===== CONTENT ===== */}
      <section className="py-28 md:py-40 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-16">

          {/* Our Commitment */}
          <div className="mb-20 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0">
            <div className="flex items-center gap-3 mb-6">
              <AccessibilityIcon size={24} className="text-[#c1912f]" />
              <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] text-[#1a1a2e] font-bold">Our Commitment</h2>
            </div>
            <p className="text-[#64748b] leading-relaxed mb-6 font-['Plus_Jakarta_Sans']">
              At Onsective, we believe the internet should be accessible to all people, regardless of their abilities or disabilities. We are committed to providing a digital experience that is accessible to the widest possible audience, including those who use assistive technologies such as screen readers, magnifiers, and voice recognition software.
            </p>
            <p className="text-[#64748b] leading-relaxed mb-6 font-['Plus_Jakarta_Sans']">
              We strive to maintain and improve the accessibility of our digital properties by applying industry best practices and adhering to internationally recognized standards. Our development and content teams receive regular training on accessibility requirements and techniques.
            </p>
            <p className="text-[#64748b] leading-relaxed font-['Plus_Jakarta_Sans']">
              Accessibility is an ongoing effort. As we identify areas for improvement, we remediate issues and integrate accessible design principles into our development workflow to prevent future barriers.
            </p>
          </div>

          {/* Conformance Status */}
          <div className="mb-20 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle2 size={24} className="text-[#c1912f]" />
              <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] text-[#1a1a2e] font-bold">Conformance Status</h2>
            </div>
            <p className="text-[#64748b] leading-relaxed mb-6 font-['Plus_Jakarta_Sans']">
              The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA.
            </p>
            <div className="bg-[#f1f5f9] border border-[#e2e8f0] rounded-lg p-6 mb-6">
              <p className="text-[#1a1a2e] font-semibold font-['Plus_Jakarta_Sans'] mb-2">Current Status</p>
              <p className="text-[#64748b] font-['Plus_Jakarta_Sans']">
                Onsective is <strong className="text-[#1a1a2e]">partially conformant</strong> with WCAG 2.1 Level AA. Partially conformant means that some parts of the content do not fully conform to the accessibility standard. We are actively working to achieve full conformance.
              </p>
            </div>
            <p className="text-[#64748b] leading-relaxed font-['Plus_Jakarta_Sans']">
              We conduct quarterly accessibility reviews of all public-facing digital properties. Any non-conformance issues identified during these reviews are prioritized and addressed within our standard development cycles.
            </p>
          </div>

          {/* Measures We Take */}
          <div className="mb-20 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0">
            <div className="flex items-center gap-3 mb-6">
              <Monitor size={24} className="text-[#c1912f]" />
              <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] text-[#1a1a2e] font-bold">Measures We Take</h2>
            </div>
            <div className="bg-[#f1f5f9] border border-[#e2e8f0] rounded-lg p-8 md:p-10">
              <ul className="space-y-4">
                {[
                  'Semantic HTML structure and proper heading hierarchy across all pages',
                  'Keyboard-navigable interfaces and interactive components with visible focus indicators',
                  'Sufficient color contrast ratios in accordance with WCAG AA standards',
                  'Alternative text for all meaningful images and media content',
                  'Descriptive link text and ARIA labels where appropriate',
                  'Responsive design that accommodates text resizing and zoom up to 200%',
                  'Regular accessibility audits using both automated and manual testing tools',
                  'Ongoing team training on accessible design and development practices',
                  'Focus management for single-page application route transitions',
                  'Skip navigation links for keyboard and screen reader users',
                  'Form labels and error messages that are programmatically associated',
                  'Logical tab order throughout all interactive elements',
                ].map((measure, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#64748b] text-sm font-['Plus_Jakarta_Sans']">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c1912f] mt-2 shrink-0" />
                    {measure}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Compatibility */}
          <div className="mb-20 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0">
            <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] text-[#1a1a2e] mb-6 font-bold">Compatibility</h2>
            <p className="text-[#64748b] leading-relaxed mb-6 font-['Plus_Jakarta_Sans']">
              Our website is designed to be compatible with the following assistive technologies:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                'Screen readers (NVDA, JAWS, VoiceOver, TalkBack)',
                'Screen magnification software',
                'Speech recognition software',
                'Keyboard-only navigation',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-[#f1f5f9] border border-[#e2e8f0] rounded-lg">
                  <CheckCircle2 size={16} className="text-[#c1912f] shrink-0" />
                  <span className="text-[#1a1a2e] text-sm font-medium font-['Plus_Jakarta_Sans']">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-[#64748b] leading-relaxed font-['Plus_Jakarta_Sans']">
              Our site is designed to function across modern browsers including Chrome, Firefox, Safari, and Edge. We recommend using the latest version of your preferred browser for the best experience.
            </p>
          </div>

          {/* Known Limitations */}
          <div className="mb-20 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0">
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle size={24} className="text-[#c1912f]" />
              <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] text-[#1a1a2e] font-bold">Known Limitations</h2>
            </div>
            <p className="text-[#64748b] leading-relaxed mb-6 font-['Plus_Jakarta_Sans']">
              Despite our efforts to ensure accessibility across our website, some areas may not yet fully meet all accessibility standards. Known limitations include:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Some third-party content or embedded media may not fully conform to WCAG 2.1 AA',
                'Certain PDF documents may require additional remediation for screen reader compatibility',
                'Some older content pages are being incrementally updated to meet current standards',
                'Complex data visualizations may have limited alternative text descriptions',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[#64748b] text-sm font-['Plus_Jakarta_Sans']">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c1912f] mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-[#64748b] leading-relaxed font-['Plus_Jakarta_Sans']">
              We are actively remediating these issues and aim to resolve them as part of our continuous improvement process. Our goal is to achieve full WCAG 2.1 Level AA conformance across all digital properties.
            </p>
          </div>

          {/* Feedback */}
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0 bg-[#f1f5f9] border border-[#e2e8f0] rounded-lg p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <Mail size={20} className="text-[#c1912f]" />
              <h2 className="text-2xl md:text-3xl font-['Playfair_Display'] text-[#1a1a2e] font-bold">Feedback &amp; Contact</h2>
            </div>
            <p className="text-[#64748b] leading-relaxed mb-6 font-['Plus_Jakarta_Sans']">
              We welcome your feedback on the accessibility of our digital properties. If you encounter accessibility barriers, have difficulty accessing any content, or wish to request information in an alternative format, please contact us. We will make reasonable efforts to provide the information you need in an accessible format within a reasonable timeframe.
            </p>
            <div className="space-y-3 mb-8">
              <p className="text-sm text-[#64748b] font-['Plus_Jakarta_Sans']">
                <strong className="text-[#1a1a2e]">Email:</strong>{' '}
                <a href="mailto:concierge@onsective.com" className="text-[#c1912f] hover:brightness-110 transition-colors">
                  concierge@onsective.com
                </a>
              </p>
              <p className="text-sm text-[#64748b] font-['Plus_Jakarta_Sans']">
                <strong className="text-[#1a1a2e]">Phone:</strong>{' '}
                <a href="tel:+16726737900" className="text-[#c1912f] hover:brightness-110 transition-colors">
                  +1 (672)-673-7900
                </a>
              </p>
              <p className="text-sm text-[#64748b] font-['Plus_Jakarta_Sans']">
                We aim to respond to accessibility feedback within 5 business days.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#c1912f] text-white font-semibold text-sm font-['Plus_Jakarta_Sans'] hover:brightness-110 transition-all"
            >
              Contact Us <ArrowRight size={14} />
            </Link>
          </div>

          {/* Last Updated */}
          <p className="text-[#64748b] text-xs mt-8 font-['Plus_Jakarta_Sans']">
            This accessibility statement was last reviewed and updated on April 15, 2026.
          </p>
        </div>
      </section>
    </>
  );
};

export default Accessibility;
