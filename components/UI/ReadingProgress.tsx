import React, { useEffect, useState } from 'react';

/**
 * Thin gold bar at the top of the viewport showing scroll progress
 * through the article. Mount inside article-style pages.
 */
const ReadingProgress: React.FC = () => {
  const [p, setP] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const total = doc.scrollHeight - doc.clientHeight;
      setP(total > 0 ? Math.min(1, Math.max(0, window.scrollY / total)) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="fixed top-0 left-0 right-0 h-0.5 bg-transparent z-[70] pointer-events-none"
    >
      <div
        className="h-full bg-[#c1912f] transition-[width] duration-100 ease-out shadow-[0_0_8px_rgba(193,145,47,0.8)]"
        style={{ width: `${p * 100}%` }}
      />
    </div>
  );
};

export default ReadingProgress;
