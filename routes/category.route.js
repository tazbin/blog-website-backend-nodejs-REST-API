// imports
const express = require('express');
const createErrors = require('http-errors');
const categoryCtrl = require('../controllers/category.controller');

// constants
const router = express.Router();

// route: category/

router.post('/', categoryCtrl.createCategory);
router.get('/', categoryCtrl.getCategories);
router.get('/categorizedBlogs/:bloggerId?', categoryCtrl.getCategorizedBlogCount);


// exports
module.exports = router;