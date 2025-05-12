const express = require('express');
const quotePostRoutes = require('./routes/quotePost.routes.js');
const forumCategoryRoutes = require('./routes/forumCategory.routes.js');
const userRoutes = require('./routes/user.routes.js')

const app = express();
// Middleware to parse JSON bodies
app.use(express.json());

//user Route
app.use('/api/user', userRoutes);

//QuotePost Route
app.use('/api/quotePost', quotePostRoutes);

//ForumCategory Route
app.use('/api/forumCategory', forumCategoryRoutes);
// Example of a route
app.get('/', (req, res) => {
  res.json({
    message: ' Shree Ganeshay Namah || Radhay Radhay',
  });
});



module.exports = app;
