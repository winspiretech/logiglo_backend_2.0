// app.js
require('dotenv').config();
const express = require('express');
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
const session = require('express-session');
const passport = require('passport');
require('./middleware/passportLinkedIn.js');
// const authRoutesPassport = require('./routes/auth');

const path = require('path');
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

// app.use(passport.initialize());
// app.use(passport.session());

// app.use(authRoutesPassport);

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

// Routes
app.use('/api/user', userRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/quotePost', quotePostRoutes);
app.use('/api/generalPost', generalPostRoutes);
app.use('/api/forumCategory', forumCategoryRoutes);
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

// Root route
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
