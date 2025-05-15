const express = require('express');
const router = express.Router();
const {
  test,
  createBlog,
  getAllBlogs,
  editBlog,
  deleteBlog,
  getBlog,
} = require('../controllers/blog.controllers.js');
const isAdmin = require('../middleware/isAdmin.js');

router.post('/create', isAdmin, createBlog);
router.get('/', getAllBlogs);
router.get('/:id', getBlog);
router.patch('/:id', isAdmin, editBlog);
router.delete('/:id', isAdmin, deleteBlog);

module.exports = router;
