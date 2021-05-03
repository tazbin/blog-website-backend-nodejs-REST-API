// imports
const express = require('express');
const createErrors = require('http-errors');
const blogService = require('../services/blog.service');
const { Blog } = require('../models/blog.model');

const itemsPerPage = 3;

const createBlog = async(req, res, next) => {
    try {
        
        let blogBody = req.body;

        if( req.file ) {
            blogBody.img = req.file.path;
        }

        blogBody.writter = req.body.userId;

        const savedblog = await blogService.createBlog(blogBody)
        res.send(savedblog);

    } catch (error) {
        next(error);
    }
}

const getBlogs = async(req, res, next) => {
    try {

        let searchParams = {};
        let selectFields = 'posted title img';
        let perPage = itemsPerPage;
        let page = req.query.page && req.query.page > 0 ? req.query.page-1 : 0;

        
        const numBlogs = await blogService.countBlogs(searchParams);
        const blogs = await blogService.readBlogs(searchParams, selectFields, perPage, page);
        
        let totalPages = Math.ceil(numBlogs / perPage);
        let currentPage = page+1;

        res.send({
            result: blogs, 
            totalBlogs: numBlogs,
            totalPages: totalPages,
            currentPage: currentPage
        });

    } catch (error) {
        next(error);
    }
}

const getBloggerBlogs = async(req, res, next) => {
    try {

        const userId = req.params.bloggerId;
        let searchParams = {writter: userId};
        let selectFields = 'posted title img';
        let perPage = itemsPerPage;
        let page = req.query.page && req.query.page > 0 ? req.query.page-1 : 0;

        
        const numBlogs = await blogService.countBlogs(searchParams);
        const blogs = await blogService.readBlogs(searchParams, selectFields, perPage, page);
        
        let totalPages = Math.ceil(numBlogs / perPage);
        let currentPage = page+1;

        res.send({
            result: blogs, 
            totalBlogs: numBlogs,
            totalPages: totalPages,
            currentPage: currentPage
        });

    } catch (error) {
        next(error);
    }
}

const getBlogsByCategory = async(req, res, next) => {
    try {

        const categoryId = req.params.categoryId;
        let searchParams;
        if( categoryId == 'all' ) {
            searchParams = {};
        } else {
            searchParams = {category: categoryId};
        }
        let selectFields = 'posted title img';
        let perPage = itemsPerPage;
        let page = req.query.page && req.query.page > 0 ? req.query.page-1 : 0;

        const numBlogs = await blogService.countBlogs(searchParams);
        const blogs = await blogService.readBlogs(searchParams, selectFields, perPage, page);
        
        let totalPages = Math.ceil(numBlogs / perPage);
        let currentPage = page+1;

        res.send({
            result: blogs, 
            totalBlogs: numBlogs,
            totalPages: totalPages,
            currentPage: currentPage
        });

    } catch (error) {
        next(error);
    }
}

const getSingleBlog = async(req, res, next) => {
    try {

        let searchParams = {_id: req.params.blogId};
        let selectFields = '';
        let blog = await blogService.readBlogs(searchParams, selectFields);

        blog = blog[0];

        res.send(blog);

    } catch (error) {
        next(error);
    }
}

const reactToBlog = async(req, res, next) => {
    try {

        let reactBody = req.body;
        const searchParams = { _id: reactBody.blogId };
        const selectFields = '';

        let blog = await blogService.readBlogs(searchParams, selectFields);
        if( blog.length == 0 ) {
            throw createErrors.NotFound('This blog does not exists');
        }

        blog = blog[0];
        const updatedBlog = await blogService.reactBlog(blog, reactBody);
        res.send(updatedBlog);

    } catch (error) {
        next(error);
    }
}

const commentToBlog = async(req, res, next) => {
    try {

        const commentBody = req.body;
        const searchParams = { _id: commentBody.blogId };
        const selectFields = '';

        let blog = await blogService.readBlogs(searchParams, selectFields);
        if( blog.length == 0 ) {
            throw createErrors.NotFound('This blog does not exists');
        }
        blog = blog[0];

        const updatedBlog = await blogService.postComment(blog, commentBody);
        res.send(updatedBlog);

    } catch (error) {
        next(error);
    }
}

const deleteComment = async(req, res, next) => {
    try {

        const commentBody = req.body;
        const searchParams = { _id: commentBody.blogId };
        const selectFields = '';

        let blog = await blogService.readBlogs(searchParams, selectFields);
        if( blog.length == 0 ) {
            throw createErrors.NotFound('This blog does not exists');
        }
        blog = blog[0];

        const updatedBlog = await blogService.deleteComment(blog, commentBody);
        res.send(updatedBlog);

    } catch (error) {
        next(error);
    }
}

 // exports
 module.exports = {
    createBlog,
    getBlogs,
    getBloggerBlogs,
    getBlogsByCategory,
    getSingleBlog,
    reactToBlog,
    commentToBlog,
    deleteComment
 }