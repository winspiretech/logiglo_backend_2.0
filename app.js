// app.js
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

const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();

// Middleware to parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const allowedOrigins = [
  'http://localhost:3004',
  'http://tester.logiglo.com',
  'https://tester.logiglo.com',
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
app.use('/api/quotePost', quotePostRoutes);
app.use('/api/generalPost', generalPostRoutes);
app.use('/api/forumCategory', forumCategoryRoutes);
app.use('/api/uploadFiles', uploadRoute);
app.use('/api/blog', blogRoute);
app.use('/api/event', eventRoute);
app.use('/api/education', educationRoute);
app.use('/api/notifications', notificationRoutes);
app.use('/api/landingPageMenuItems', landingPageMenuItemsRoutes);

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
