// imports
const express = require('express');
const createErrors = require('http-errors');
const blogCtrl = require('../controllers/blog.controller');

const {
    verifyAccessToken
} = require('../helpers/jwt.helper');

// constants
const router = express.Router();

// route: blog/

router.post('/', verifyAccessToken, blogCtrl.createBlog);
router.get('/', blogCtrl.getBlogs);
router.get('/blogger/:bloggerId', blogCtrl.getBloggerBlogs);
router.get('/:blogId', blogCtrl.getSingleBlog);
router.get('/category/:categoryId', blogCtrl.getBlogsByCategory);
router.put('/react', verifyAccessToken, blogCtrl.reactToBlog);
router.post('/comment', verifyAccessToken, blogCtrl.commentToBlog);
router.delete('/comment', verifyAccessToken, blogCtrl.deleteComment);


// exports
module.exports = router;