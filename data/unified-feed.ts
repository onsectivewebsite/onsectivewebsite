// ============================================================
// Onsective — Unified Insights Feed
// Merges the original 560 ALL_INSIGHTS posts with the /guides/
// SEO content (DM keyword guides + topical guides + 500 blog posts)
// into a single browsable feed for /insights.
// ============================================================

import { ALL_INSIGHTS } from './blog';
import { SEO_GUIDES } from './seo-landing';
import { BlogPost } from '../types';

const MONTHS_CYCLE = [
  'Apr 2026', 'Mar 2026', 'Feb 2026', 'Jan 2026',
  'Dec 2025', 'Nov 2025', 'Oct 2025', 'Sep 2025',
  'Aug 2025', 'Jul 2025', 'Jun 2025', 'May 2025',
  'Apr 2025', 'Mar 2025', 'Feb 2025', 'Jan 2025'
];

// Hashes a string to a stable integer for deterministic date/read-time.
const hash = (s: string): number => {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = ((h << 5) - h) + s.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
};

// Convert a guide into a BlogPost-shaped record so the Insights
// page can render it uniformly. `id` starts with "guide-" so the
// Insights page knows to route to /guides/:slug instead of /insights/:id.
const guideToPost = (g: { slug: string; title: string; metaDescription: string; category: string; sections?: any[] }): BlogPost => {
  const h = hash(g.slug);
  const readMins = 5 + (h % 11);
  const monthIdx = h % MONTHS_CYCLE.length;
  return {
    id: `guide-${g.slug}`,
    title: g.title,
    excerpt: g.metaDescription,
    category: g.category,
    date: MONTHS_CYCLE[monthIdx],
    readTime: `${readMins} min read`,
    image: `https://picsum.photos/seed/onsective-${g.slug}/1200/750`
  };
};

// Merge: original insights first (already have real images), then
// guide-derived posts. Dedup by id.
const seen = new Set<string>();
const merged: BlogPost[] = [];
for (const p of ALL_INSIGHTS) {
  if (!seen.has(p.id)) {
    seen.add(p.id);
    merged.push(p);
  }
}
for (const g of SEO_GUIDES) {
  const p = guideToPost(g);
  if (!seen.has(p.id)) {
    seen.add(p.id);
    merged.push(p);
  }
}

export const UNIFIED_FEED: BlogPost[] = merged;

// ------------------------------------------------------------------
// Resolver: given a feed post id, return the correct link target.
// ------------------------------------------------------------------
export const feedPostHref = (id: string): string => {
  if (id.startsWith('guide-')) {
    return `/guides/${id.slice('guide-'.length)}`;
  }
  return `/insights/${id}`;
};

// ------------------------------------------------------------------
// Categories available in the unified feed — sorted by post count.
// ------------------------------------------------------------------
export const FEED_CATEGORIES: { name: string; count: number }[] = (() => {
  const counts = new Map<string, number>();
  for (const p of UNIFIED_FEED) {
    counts.set(p.category, (counts.get(p.category) || 0) + 1);
  }
  return Array.from(counts.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
})();
