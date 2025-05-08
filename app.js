const express = require('express');
const app = express();

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

module.exports = app;
