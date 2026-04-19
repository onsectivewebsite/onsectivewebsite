import React, { useState } from 'react';
import { Linkedin, Twitter, Facebook, Mail, Link2, Check } from 'lucide-react';

interface Props {
  title: string;
  url?: string;
}

const ShareButtons: React.FC<Props> = ({ title, url }) => {
  const [copied, setCopied] = useState(false);
  const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : 'https://onsective.com');
  const t = encodeURIComponent(title);
  const u = encodeURIComponent(shareUrl);

  const channels = [
    { label: 'LinkedIn', href: `https://www.linkedin.com/sharing/share-offsite/?url=${u}`, icon: Linkedin },
    { label: 'X / Twitter', href: `https://twitter.com/intent/tweet?text=${t}&url=${u}&via=OnsectiveEnt`, icon: Twitter },
    { label: 'Facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${u}`, icon: Facebook },
    { label: 'Email', href: `mailto:?subject=${t}&body=${u}`, icon: Mail }
  ];

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-[11px] font-semibold uppercase tracking-widest text-[#64748b] font-['Plus_Jakarta_Sans'] mr-2">Share</span>
      {channels.map(c => (
        <a
          key={c.label}
          href={c.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Share on ${c.label}`}
          className="w-9 h-9 rounded-full border border-[#e2e8f0] flex items-center justify-center text-[#64748b] hover:border-[#c1912f] hover:text-[#c1912f] transition-all"
        >
          <c.icon size={15} />
        </a>
      ))}
      <button
        type="button"
        onClick={copy}
        aria-label="Copy link"
        className="w-9 h-9 rounded-full border border-[#e2e8f0] flex items-center justify-center text-[#64748b] hover:border-[#c1912f] hover:text-[#c1912f] transition-all"
      >
        {copied ? <Check size={15} className="text-[#22c55e]" /> : <Link2 size={15} />}
      </button>
    </div>
  );
};

export default ShareButtons;
