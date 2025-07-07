const express = require('express');
const isAdmin = require('../middleware/isAdmin');
const router = express.Router();
const {
  createBlogCategory,
  getAllBlogCategory,
  deleteBlogCategory,
  editBlogCategory,
} = require('../controllers/blogCategory.controller');

router.post('/create', isAdmin, createBlogCategory);
router.get('/blog-categories', getAllBlogCategory);
router.patch('/:categoryId', isAdmin, editBlogCategory);
router.delete('/:categoryId', isAdmin, deleteBlogCategory);

module.exports = router;
