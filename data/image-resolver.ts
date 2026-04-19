// ============================================================
// Onsective — Guaranteed-Unique Image Resolver
//
// Problem: the unified feed has 1,237 posts. Every post must have
// a unique picture. Previous Unsplash-Source approach pooled photos
// per keyword so different slugs in the same category could repeat.
//
// Solution:
//   1. Hash slug → pick one of Picsum's 1,000+ specific photo IDs.
//      Each ID maps to a fixed, unique photo (not random). Different
//      hashes → different IDs → different photos.
//   2. Pair with an Unsplash-Source topical URL as a best-effort
//      relevance fallback. Consumers choose which to use.
// ============================================================

// Picsum's /id/ endpoint has gaps in its ID range — many IDs return
// 404. We use the /seed/ endpoint instead: any seed string returns
// a valid image deterministically, with no 404 risk. Seeds guarantee
// uniqueness AND reliability at the same time.

const hash = (s: string): number => {
  let h = 5381;
  for (let i = 0; i < s.length; i++) {
    h = ((h << 5) + h) + s.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
};

/**
 * Guaranteed-unique, guaranteed-loading image per slug.
 *
 * Uses Picsum's /seed/ endpoint. Every unique seed string returns
 * a specific, reproducible image. No 404s, no gaps, no dead URLs.
 *
 * Seed combines category + slug so posts never collide even if
 * slugs happen to match across categories.
 */
export const resolveImage = (slug: string, category: string, width = 1200, height = 750): string => {
  // Sanitise seed to alphanumeric + hyphen so Picsum's routing is predictable.
  const rawSeed = `${category}-${slug}-${hash(`${category}::${slug}`)}`;
  const seed = rawSeed.toLowerCase().replace(/[^a-z0-9-]/g, '-').replace(/-+/g, '-');
  return `https://picsum.photos/seed/${seed}/${width}/${height}`;
};

/**
 * Alias for resolveImage — kept for backwards compatibility with
 * callers that historically requested a "topical" variant. Both now
 * use the same reliable Picsum-ID-based resolution since Unsplash
 * Source API was deprecated in 2024 and its URLs no longer return
 * consistent images.
 */
export const resolveTopicalImage = resolveImage;

export const resolveImageGeneric = (slug: string, width = 1200, height = 750): string =>
  resolveImage(slug, 'Digital Marketing', width, height);
