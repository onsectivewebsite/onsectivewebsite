import { BlogPost } from '../types';
import { ASSETS } from '../utils/assets';

const IMAGES = [
  ASSETS.BLOG_1,
  ASSETS.BLOG_2,
  ASSETS.BLOG_3,
  ASSETS.BLOG_4,
  ASSETS.BLOG_5,
  ASSETS.BLOG_6,
  ASSETS.BLOG_7,
  ASSETS.BLOG_8,
];

const BLOG_TOPICS = [
  {
    category: 'Artificial Intelligence',
    keywords: ['AI Tools', 'Smart Software', 'Data Analytics', 'Predictive Systems', 'Automation']
  },
  {
    category: 'Digital Strategy',
    keywords: ['Business Growth', 'Online Sales', 'Modern Marketing', 'Growth Plans']
  },
  {
    category: 'Technical Authority',
    keywords: ['Google Ranking', 'Website Speed', 'Online Presence', 'Search Power']
  },
  {
    category: 'Brand Stewardship',
    keywords: ['Company Image', 'Public Trust', 'Brand Story', 'Corporate Identity']
  }
];

const TITLES = [
  "How to Use {kw} for Success",
  "A Simple Guide to {kw}",
  "Why {kw} Matters for Your Business",
  "The Benefits of {kw} Today",
  "Common Questions About {kw} Answered"
];

const generateBlogPosts = (): BlogPost[] => {
  const posts: BlogPost[] = [];
  let id = 1;

  BLOG_TOPICS.forEach((topic) => {
    topic.keywords.forEach((kw) => {
      TITLES.forEach((template, tIdx) => {
        const title = template.replace('{kw}', kw);
        const imageIndex = (id + tIdx) % IMAGES.length;
        
        posts.push({
          id: `insight-${id}`,
          title: title,
          excerpt: `In this post, we look at ${kw} and how it helps companies work better. We explain the main ideas in a way that is easy to follow and apply to your own team.`,
          date: ['Feb 2026', 'Jan 2026', 'Dec 2025', 'Nov 2025'][id % 4],
          readTime: `${5 + (id % 5)} min read`,
          category: topic.category,
          image: IMAGES[imageIndex]
        });
        id++;
      });
    });
  });

  return posts;
};

export const ALL_INSIGHTS = generateBlogPosts();
export const LATEST_INSIGHTS = ALL_INSIGHTS.slice(0, 9);
