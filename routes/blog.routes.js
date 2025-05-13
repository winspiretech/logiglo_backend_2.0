const express = require('express');
const router = express.Router();
const {test, createBlog, getAllBlogs, editBlog} = require("../controllers/blog.controllers.js");
const isAdmin = require('../middleware/isAdmin.js');

router.post("/create",isAdmin, createBlog);
router.get("/", getAllBlogs);
router.patch("/:id",isAdmin, editBlog)

module.exports = router