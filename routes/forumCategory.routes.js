const express = require('express');
const router = express.Router();
const forumCategoryController = require('../controllers/forumCategory.controllers.js');

// ForumMainCategory routes
router.post(
  '/createforummaincategory',
  forumCategoryController.createForumMainCategory,
);
router.patch(
  '/updateforummaincategory/:id',
  forumCategoryController.updateForumMainCategory,
);
router.get(
  '/getforummaincategorybyid/:id',
  forumCategoryController.getForumMainCategoryById,
);
router.get(
  '/getallforummaincategories',
  forumCategoryController.getAllForumMainCategories,
);

// ForumSubCategory routes
router.post(
  '/createforumsubcategory',
  forumCategoryController.createForumSubCategory,
);
router.patch(
  '/updateforumsubcategory/:id',
  forumCategoryController.updateForumSubCategory,
);
router.get(
  '/getforumsubcategorybyid/:id',
  forumCategoryController.getForumSubCategoryById,
);
router.get(
  '/getallforumsubcategories',
  forumCategoryController.getAllForumSubCategories,
);

module.exports = router;
