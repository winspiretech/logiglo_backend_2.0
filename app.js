const express = require('express');
const quotePostRoutes = require('./routes/quotePost.routes.js');
const forumCategoryRoutes = require('./routes/forumCategory.routes.js');
const userRoutes = require('./routes/user.routes.js');
const generalPostRoutes = require('./routes/generalPost.routes.js');
const uploadRoute = require('./routes/uploadImage.routes.js');
const blogRoute = require('./routes/blog.routes.js');
const educationRoute = require('./routes/education.routes.js');
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();
// Middleware to parse JSON bodies
app.use(cookieParser());
app.use(express.json());
//user Route
app.use('/api/user', userRoutes);

//QuotePost Route
app.use('/api/quotePost', quotePostRoutes);

//General Post Route
app.use('/api/generalPost', generalPostRoutes);
//ForumCategory Route
app.use('/api/forumCategory', forumCategoryRoutes);
// Example of a route
app.get('/', (req, res) => {
  res.json({
    message: ' Shree Ganeshay Namah || Radhay Radhay',
  });
});
// Serve uploads folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api/uploadFiles', uploadRoute);
app.use('/api/blog', blogRoute);
app.use('/api/education', educationRoute)

module.exports = app;