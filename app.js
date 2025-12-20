require('dotenv').config();
const express = require('express');
const path = require('path');
const fs = require('fs');
const quotePostRoutes = require('./routes/quotePost.routes.js');
const forumCategoryRoutes = require('./routes/forumCategory.routes.js');
const userRoutes = require('./routes/user.routes.js');
const generalPostRoutes = require('./routes/generalPost.routes.js');
const uploadRoute = require('./routes/uploadImage.routes.js');
const blogRoute = require('./routes/blog.routes.js');
const eventRoute = require('./routes/event.routes.js');
const educationRoute = require('./routes/education.routes.js');
const notificationRoutes = require('./routes/notification.routes.js');
const landingPageMenuItemsRoutes = require('./routes/landingPageMenuItems.routes.js');
const dataRoute = require('./routes/data.routes.js');
const ratingRoute = require('./routes/rating.routes.js');
const commentRoute = require('./routes/blogComments.routes.js');
const blogCategory = require('./routes/blogCategory.routes.js');
const eventInterested = require('./routes/eventInterested.routes.js');
const contactUs = require('./routes/contactUs.routes.js');
const ads = require('./routes/ad.routes.js');
const timeSpentRoute = require('./routes/timeSpent.routes.js');
const adminRoutes = require('./routes/admin.routes.js');
const formBuilderRoutes = require('./routes/formBuilder.routes.js');
const exporterRoutes = require('./routes/directoryRoutes/exporterRoutes.js');
const importerRoute = require('./controllers/importers/excelImporter.js');
const dashboardAnalyticsroutes = require('./routes/dashboard.routes.js');
const adminDashboardRoutes = require('./routes/adminDashboardAnalytics.routes.js');
const userDashboardRoutes = require('./routes/userDashboard.routes.js');
const session = require('express-session');
const passport = require('passport');
require('./middleware/passportLinkedIn.js');

// Import SEO middleware
const { blogSEO, eventSEO } = require('./middleware/seoMiddleware.js');

const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();

// Middleware to parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  session({ secret: 'secret_key', resave: false, saveUninitialized: true }),
);

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/Uploads', express.static(path.join(__dirname, 'Uploads')));

const allowedOrigins = [
  'http://localhost:3004',
  'http://localhost:3001',
  'http://tester.logiglo.com',
  'https://tester.logiglo.com',
  'https://logiglo.com',
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));

// Serve static files from the uploads volume
app.use('/Uploads', express.static('/root/backend/Uploads'));

// =================================================================
// SEO-OPTIMIZED ROUTES - MUST BE BEFORE API ROUTES
// These handle direct URL access for crawlers (Google, Facebook, etc.)
// =================================================================

// Helper function to serve HTML with injected meta tags
const serveWithSEO = (req, res) => {
  try {
    // Path to your React build index.html
    const indexPath = path.join(__dirname, '../client/build', 'index.html');
    
    // Check if build exists
    if (!fs.existsSync(indexPath)) {
      console.error('Build index.html not found at:', indexPath);
      return res.status(404).send('Build not found. Run `npm run build` in client folder.');
    }

    let html = fs.readFileSync(indexPath, 'utf8');
    
    // Inject meta tags if available from middleware
    if (req.seoMetaTags) {
      // Replace the closing </head> tag with meta tags + </head>
      html = html.replace('</head>', `${req.seoMetaTags}\n  </head>`);
    }
    
    res.send(html);
  } catch (error) {
    console.error('Error serving HTML:', error);
    res.status(500).send('Server error');
  }
};

// SEO Routes for Blog Detail Pages
app.get('/landing/blog/:id', blogSEO, serveWithSEO);

// SEO Routes for Event Detail Pages
app.get('/landing/event/:id', eventSEO, serveWithSEO);

// =================================================================
// API ROUTES
// =================================================================

app.use('/api/user', userRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/quotePost', quotePostRoutes);
app.use('/api/generalPost', generalPostRoutes);
app.use('/api/form', formBuilderRoutes);
app.use('/api/forumCategory', forumCategoryRoutes);
app.use('/api/dashboard', dashboardAnalyticsroutes);
app.use('/api/uploadFiles', uploadRoute);
app.use('/api/blog', blogRoute);
app.use('/api/event', eventRoute);
app.use('/api/education', educationRoute);
app.use('/api/notification', notificationRoutes);
app.use('/api/landingPageMenuItems', landingPageMenuItemsRoutes);
app.use('/api/data', dataRoute);
app.use('/api/rating', ratingRoute);
app.use('/api/blog/comment', commentRoute);
app.use('/api/blog/category', blogCategory);
app.use('/api/event/interested', eventInterested);
app.use('/api/contact-us', contactUs);
app.use('/api/ads', ads);
app.use('/api/section-times', timeSpentRoute);
app.use('/api/exporters', exporterRoutes);
app.use('/api/exporters/import', importerRoute);
app.use('/api/admin-dashboard', adminDashboardRoutes);
app.use('/api/user-dashboard', userDashboardRoutes);

// =================================================================
// SERVE REACT APP FOR ALL OTHER ROUTES
// This must be AFTER all API routes
// =================================================================

// Serve static files from React build
const buildPath = path.join(__dirname, '../client/build');
if (fs.existsSync(buildPath)) {
  app.use(express.static(buildPath));
  
  // Catch-all route for React Router (must be last)
  app.get('*', (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'));
  });
} else {
  console.warn('⚠️ React build folder not found. Run `npm run build` in client directory.');
}

// Root route (fallback if build doesn't exist)
app.get('/', (req, res) => {
  res.json({
    message: 'Shree Ganeshay Namah || Radhay Radhay',
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err.stack);
  res.status(500).json({ message: 'Server error', details: err.message });
});

module.exports = app;