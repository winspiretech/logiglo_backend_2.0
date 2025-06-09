const express = require('express');
const { isUserLoggedIn } = require('../middleware/isUserLoggedIn');
const {
  createComment,
  getCommentsByPostId,
  approveOrRejectComment,
  deleteCommentById,
  getAllPendingComments,
  getCommentById,
  getChildCommentsByParentId,
} = require('../controllers/blogComments.controllers');
const isAdmin = require('../middleware/isAdmin');
const router = express.Router();

router.post('/create/:blogId', isUserLoggedIn, createComment);
router.get('/pending', isAdmin, getAllPendingComments);
router.get('/child-comments/:parentCommentId', getChildCommentsByParentId);
router.get('/:blogId', getCommentsByPostId);
router.get('/pending-comment/:commentId', isAdmin, getCommentById);
router.post('/update-status/:commentId', isAdmin, approveOrRejectComment);
router.delete('/:commentId', isUserLoggedIn, deleteCommentById);

module.exports = router;
