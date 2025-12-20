const prisma = require('../models/prismaClient');

// Helper to strip HTML tags
const stripHtml = (html) => {
  if (!html) return '';
  return html.replace(/<[^>]*>/g, '');
};

// Helper to truncate text
const truncate = (text, length = 160) => {
  if (!text) return '';
  return text.length > length ? text.substring(0, length) + '...' : text;
};

// Helper to escape HTML for meta tags
const escapeHtml = (text) => {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};

// Generate meta tags HTML
const generateMetaTags = ({
  title,
  description,
  image,
  url,
  type = 'article',
  publishedTime,
  modifiedTime,
  author
}) => {
  const fullTitle = escapeHtml(title ? `${title} | Logiglo` : 'Logiglo');
  const safeDescription = escapeHtml(description || 'Logiglo - Logistics Platform');
  
  return `
    <title>${fullTitle}</title>
    <meta name="description" content="${safeDescription}" />
    <meta name="robots" content="index, follow" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="${type}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:title" content="${fullTitle}" />
    <meta property="og:description" content="${safeDescription}" />
    ${image ? `<meta property="og:image" content="${escapeHtml(image)}" />` : ''}
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="${url}" />
    <meta name="twitter:title" content="${fullTitle}" />
    <meta name="twitter:description" content="${safeDescription}" />
    ${image ? `<meta name="twitter:image" content="${escapeHtml(image)}" />` : ''}
    
    <!-- Article specific -->
    ${type === 'article' && publishedTime ? `<meta property="article:published_time" content="${publishedTime}" />` : ''}
    ${type === 'article' && modifiedTime ? `<meta property="article:modified_time" content="${modifiedTime}" />` : ''}
    ${type === 'article' && author ? `<meta property="article:author" content="${escapeHtml(author)}" />` : ''}
    
    <!-- Canonical URL -->
    <link rel="canonical" href="${url}" />
  `.trim();
};

// Middleware for blog SEO
const blogSEO = async (req, res, next) => {
  const { id } = req.params;
  
  try {
    const blog = await prisma.blog.findFirst({
      where: { 
        id,
        isArchived: false 
      },
      include: {
        category: true,
        author: { 
          select: { name: true } 
        }
      }
    });

    if (blog) {
      const cleanDescription = truncate(stripHtml(blog.description), 160);
      const metaTags = generateMetaTags({
        title: blog.title,
        description: cleanDescription || 'Logistics industry insights and news',
        image: blog.image_url?.[0],
        url: `https://logiglo.com/landing/blog/${id}`,
        type: 'article',
        publishedTime: blog.createdAt?.toISOString(),
        author: blog.author?.name || 'Logiglo'
      });

      req.seoMetaTags = metaTags;
    }
  } catch (error) {
    console.error('Blog SEO middleware error:', error);
    // Continue without SEO tags if error occurs
  }
  
  next();
};

// Middleware for event SEO
const eventSEO = async (req, res, next) => {
  const { id } = req.params;
  
  try {
    const event = await prisma.event.findFirst({
      where: { 
        id,
        isArchived: false 
      }
    });

    if (event) {
      const cleanDescription = truncate(stripHtml(event.description), 160);
      const metaTags = generateMetaTags({
        title: event.eventTitle,
        description: cleanDescription || 'Logistics industry event',
        image: event.coverImages?.[0],
        url: `https://logiglo.com/landing/event/${id}`,
        type: 'article',
        publishedTime: event.createdAt?.toISOString(),
        modifiedTime: event.startDate?.toISOString()
      });

      req.seoMetaTags = metaTags;
    }
  } catch (error) {
    console.error('Event SEO middleware error:', error);
    // Continue without SEO tags if error occurs
  }
  
  next();
};

module.exports = {
  blogSEO,
  eventSEO,
  generateMetaTags
};