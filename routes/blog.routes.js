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
  getArchivedBlogs,
  toggleArchiveBlog,
  addUnarchiveBlogReason,
} = require('../controllers/blog.controllers.js');
const isAdmin = require('../middleware/isAdmin.js');

router.post('/create', isAdmin, createBlog);
router.get('/admins-blogs', isAdmin, getAdminsBlogs);
router.delete('/:id', isAdmin, deleteBlog);
router.get('/archived', isAdmin, getArchivedBlogs);
router.get('/', getAllBlogs);
router.get('/:id', getBlog);
router.patch('/:id', isAdmin, editBlog);
router.patch('/archive/:id', isAdmin, toggleArchiveBlog);
router.post('/unarchive-reason/:id', isAdmin, addUnarchiveBlogReason);

module.exports = router;
