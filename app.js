const express = require('express');
const quotePostRoutes = require('./routes/quotePost.routes.js');
const forumCategoryRoutes = require('./routes/forumCategory.routes.js');
const userRoutes = require('./routes/user.routes.js');
const generalPostRoutes = require('./routes/generalPost.routes.js');
const uploadRoute = require('./routes/uploadImage.routes.js');
const blogRoute = require('./routes/blog.routes.js');
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// A simple route
app.get('/', (req, res) => {
  res.json({
    message: ' Shree Ganeshay Namah || Radhay Radhay',
  });
});

module.exports = app;