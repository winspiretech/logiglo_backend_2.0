const express = require('express');
const { isUserLoggedIn } = require('../middleware/isUserLoggedIn');
const {
  createComment,
  getCommentsByPostId,
  approveOrRejectComment,
  deleteCommentById,
} = require('../controllers/blogComments.controllers');
const isAdmin = require('../middleware/isAdmin');
const router = express.Router();

router.post('/create/:blogId', isUserLoggedIn, createComment);
router.get('/:blogId', getCommentsByPostId);
router.post('/update-status/:commentId', isAdmin, approveOrRejectComment);
router.delete('/:commentId', isUserLoggedIn, deleteCommentById);

module.exports = router;
