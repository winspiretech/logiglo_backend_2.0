const express = require('express');
const router = express.Router();
const {
  test,
  createBlog,
  getAllBlogs,
  editBlog,
  deleteBlog,
  getBlog,
  getAdminsBlogs,
} = require('../controllers/blog.controllers.js');
const isAdmin = require('../middleware/isAdmin.js');
const multer = require('multer');
const upload = multer();

router.post('/create', isAdmin, createBlog);
router.get('/admins-blogs', isAdmin, getAdminsBlogs);
router.get('/', getAllBlogs);
router.get('/:id', getBlog);
router.patch('/:id', isAdmin, upload.none(), editBlog);
router.delete('/:id', isAdmin, deleteBlog);

module.exports = router;
