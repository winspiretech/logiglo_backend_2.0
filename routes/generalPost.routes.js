const express = require('express');
const router = express.Router();
const generalPostController = require('../controllers/generalPost.controllers');

// --- Creation Routes ---

// Create a new GeneralPost
router.post('/creategeneralpost', generalPostController.createGeneralPost);

// Create a new GeneralReply
router.post('/creategeneralreply', generalPostController.createGeneralReply);

// Create a new GeneralLike
router.post('/creategenerallike', generalPostController.createGeneralLike);

// --- Update Routes ---

// Update an existing GeneralPost
router.patch(
  '/updategeneralpost/:postId',
  generalPostController.updateGeneralPost,
);
router.patch(
  '/updategeneralreply/:replyId',
  generalPostController.updateGeneralReply,
);

// --- General Fetching Routes ---

// Fetch draft GeneralPosts for a specific user
router.get(
  '/getdraftgeneralpostsbyuserid/:userId',
  generalPostController.getDraftPosts,
);

// Fetch all pending GeneralPosts
router.get('/getpendinggeneralposts', generalPostController.getPendingPosts);
// Fetch all Rejected GeneralPosts
router.get('/getrejectedgeneralposts', generalPostController.getRejectedPosts);

// Fetch all successful GeneralPosts
router.get('/getsuccessgeneralposts', generalPostController.getSuccessPosts);

// Fetch all pending GeneralReplies
router.get(
  '/getpendinggeneralreplies',
  generalPostController.getPendingReplies,
);

// --- Specific Fetching Routes ---

// Fetch all GeneralPosts for a specific user
router.get(
  '/getgeneralpostsbyuserid/:userId',
  generalPostController.getPostsByUserId,
);

// Fetch all GeneralReplies for a specific successful GeneralPost
router.get(
  '/getgeneralreplybypostid/:postId',
  generalPostController.getRepliesByPostId,
);

// Fetch the like count and user like status for a specific GeneralPost
router.get(
  '/getgenerallikecountbypostid/:postId',
  generalPostController.getLikesByPostId,
);

// Fetch a specific GeneralPost by postId
router.get(
  '/getgeneralpostbypostid/:postId',
  generalPostController.getGeneralPostByPostId,
);

module.exports = router;
