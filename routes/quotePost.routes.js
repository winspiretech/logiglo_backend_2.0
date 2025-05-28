const router = require('express').Router();
const quotePostController = require('../controllers/quotePost.controllers.js');

// --- Creation Routes ---

// Create a new QuotePost
router.post('/createquotepost', quotePostController.createQuotePost);

// Create a new QuoteReply
router.post('/createquotereply', quotePostController.createQuoteReply);

// Create a new QuoteLike
router.post('/createquotelike', quotePostController.createQuoteLike);

// --- Update Routes ---

// Update an existing QuotePost
router.patch('/updatequotepost/:postId', quotePostController.updateQuotePost);
//update an existing QuoteReply
router.patch(
  '/updatequotereply/:replyId',
  quotePostController.updateQuoteReply,
);
// --- General Fetching Routes ---

// Fetch draft QuotePosts for a specific user
router.get(
  '/getdraftquotepostsbyuserid/:userId',
  quotePostController.getDraftPosts,
);

// Fetch all pending QuotePosts
router.get('/getpendingquoteposts', quotePostController.getPendingPosts);
// Fetch all pending QuotePosts
router.get('/getrejectedquoteposts', quotePostController.getRejectedPosts);

// Fetch all successful QuotePosts
router.get('/getsuccessquoteposts', quotePostController.getSuccessPosts);

// Fetch all pending QuoteReplies
router.get('/getpendingquotereplies', quotePostController.getPendingReplies);

// --- Specific Fetching Routes ---

// Fetch all QuotePosts for a specific user
router.get(
  '/getquotepostsbyuserid/:userId',
  quotePostController.getPostsByUserId,
);

// Fetch all QuoteReplies for a specific successful QuotePost
router.get(
  '/getquotereplybypostid/:postId',
  quotePostController.getRepliesByPostId,
);

// Fetch the like count and user like status for a specific QuotePost
router.get(
  '/getquotelikecountbypostid/:postId',
  quotePostController.getLikesByPostId,
);

// Fetch a specific QuotePost by postId
router.get(
  '/getquotepostbypostid/:postId',
  quotePostController.getQuotePostByPostId,
);

module.exports = router;
