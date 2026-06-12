const prisma = require('../models/prismaClient');

const stripHtml = (html) => html?.replace(/<[^>]*>/g, '') || '';
const truncate = (text, length = 160) =>
  text?.length > length ? text.substring(0, length) + '...' : text;
const escapeHtml = (text) =>
  text
    ?.replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;') || '';

// Force absolute HTTPS for both logiglo.com and tester.logiglo.com image URLs
// Facebook/LinkedIn reject http:// and relative image URLs
const absoluteImage = (url) => {
  if (!url) return 'https://logiglo.com/og-banner.jpg'; // fallback 1200×630

  // Already a valid https URL (covers both logiglo.com and tester.logiglo.com)
  if (url.startsWith('https://')) return url;

  // Upgrade http:// to https:// for both domains
  if (url.startsWith('http://')) return url.replace('http://', 'https://');

  // Relative path — attach main domain
  if (url.startsWith('/')) return `https://logiglo.com${url}`;

  return url;
};

const generateMetaTags = ({
  title,
  description,
  image,
  url,
  type = 'article',
  publishedTime,
  author,
}) =>
  `
  <title>${escapeHtml(title ? `${title} | Logiglo` : 'Logiglo')}</title>
  <meta name="description" content="${escapeHtml(description || 'Logiglo - Logistics Platform')}" />
  <meta name="robots" content="index, follow" />
  <meta property="og:type" content="${type}" />
  <meta property="og:url" content="${url}" />
  <meta property="og:site_name" content="Logiglo" />
  <meta property="og:title" content="${escapeHtml(title ? `${title} | Logiglo` : 'Logiglo')}" />
  <meta property="og:description" content="${escapeHtml(description || '')}" />
  <meta property="og:image" content="${absoluteImage(image)}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${escapeHtml(title ? `${title} | Logiglo` : 'Logiglo')}" />
  <meta name="twitter:description" content="${escapeHtml(description || '')}" />
  <meta name="twitter:image" content="${absoluteImage(image)}" />
  ${type === 'article' && publishedTime ? `<meta property="article:published_time" content="${publishedTime}" />` : ''}
  ${type === 'article' && author ? `<meta property="article:author" content="${escapeHtml(author)}" />` : ''}
  <link rel="canonical" href="${url}" />
`.trim();

const universalSEO = async (req, res, next) => {
  const path = req.path;
  const host = req.get('host') || 'logiglo.com';

  // ✅ /blog/:id  — no /landing/ prefix
  const blogMatch = path.match(/^\/blog\/([a-zA-Z0-9-]+)$/);
  if (blogMatch) {
    const id = blogMatch[1];
    try {
      const blog = await prisma.blog.findFirst({
        where: { id, isArchived: false },
        include: { author: { select: { name: true } } },
      });

      if (blog) {
        const description = truncate(stripHtml(blog.description), 160);
        req.seoMetaTags = generateMetaTags({
          title: blog.title,
          description: description || 'Logistics industry insights',
          image: blog.image_url?.[0],
          url: `https://${host}${path}`,
          publishedTime: blog.createdAt?.toISOString(),
          author: blog.author?.name || 'Logiglo',
        });
      }
    } catch (error) {
      console.error('Blog SEO error:', error);
    }
  }

  // ✅ /event/:id  — no /landing/ prefix
  const eventMatch = path.match(/^\/event\/([a-zA-Z0-9-]+)$/);
  if (eventMatch) {
    const id = eventMatch[1];
    try {
      const event = await prisma.event.findFirst({
        where: { id, isArchived: false },
      });

      if (event) {
        const description = truncate(stripHtml(event.description), 160);
        req.seoMetaTags = generateMetaTags({
          title: event.eventTitle,
          description: description || 'Logistics industry event',
          image: event.coverImages?.[0],
          url: `https://${host}${path}`,
          publishedTime: event.createdAt?.toISOString(),
        });
      }
    } catch (error) {
      console.error('Event SEO error:', error);
    }
  }

  next();
};

module.exports = { universalSEO };