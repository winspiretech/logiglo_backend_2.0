const express = require('express');
const app = express();
const userRoutes = require('./routes/user.routes.js')

// Middleware to parse JSON bodies
app.use(express.json());

// A simple route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Example of a route
app.get('/api', (req, res) => {
  res.json({
    message: ' Shree Ganeshay Namah || Radhay Radhay',
  });
});

app.use('/api/user', userRoutes);

module.exports = app;
