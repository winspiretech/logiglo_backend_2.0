const express = require('express');
const app = express();
const path = require('path');
// const userRoutes = require('./routes/user.routes.js')
const educationRoutes = require('./routes/education.routes.js');

// Middleware to parse JSON bodies
app.use(express.json());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

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

//api end points
// app.use('/api/user', userRoutes);
app.use('/api/education', educationRoutes)

module.exports = app;