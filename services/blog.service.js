// imports
const express = require('express');
const createErrors = require('http-errors');
const { Blog } = require('../models/blog.model');

// CRUD

 const createBlog = async(blogBody) => {
    try {

        const newBlog = new Blog(blogBody);
        let savedBlog = await newBlog.save();

        savedBlog = await savedBlog
        .populate('writter', 'first_name last_name joined')
        .populate('category', 'name')
        .populate('comments.people', 'first_name last_name')
        .execPopulate();

        return Promise.resolve(savedBlog);

    } catch (error) {
        return Promise.reject(error);
    }
}

const readBlogs = async(
    searchParams = {}, 
    selectFields = '', 
    perPage = 99999999, 
    page = 0) => {
    try {

        const blogs = await Blog
        .find(searchParams)
        .limit(perPage)
        .skip(perPage * page)
        .populate('writter', 'first_name last_name joined')
        .populate('category', 'name')
        .populate('comments.people', 'first_name last_name img')
        .select(selectFields);
        return Promise.resolve(blogs);

    } catch (error) {
        if( error.name == 'CastError' ) {
            error = createErrors.BadRequest('Invalied blogId');
        }
        return Promise.reject(error);
    }
}

const countBlogs = async(countParams) => {
    try {

        const numBlogs = await Blog
        .where(countParams)
        .countDocuments();
        return Promise.resolve(numBlogs);

    } catch (error) {
        if( error.name == 'CastError' ) {
            error = createErrors.BadRequest('Invalied Id provided');
        }
        return Promise.reject(error);
    }
}

const reactBlog = async(blog, reactBody) => {

    try {

        const allReacts = ['like', 'love', 'funny', 'sad', 'informative'];
        let oldReactName = '';

        // remove all reacts of this user
        allReacts.forEach(react => {
            blog.reacts[react] = blog.reacts[react].filter(r => {
                if( reactBody.userId == r ) {
                    oldReactName = react;
                } else {
                    return r;
                }
            });
        });

        // set new react
        if( oldReactName != reactBody.reactName ) {
            blog.reacts[reactBody.reactName].push(reactBody.userId);
        }

        let updatedBlog = await blog.save();

        return Promise.resolve(updatedBlog);

    } catch (error) {
        return Promise.reject(error);
    }
}

const postComment = async(blog, commentBody) => {
    try {

        blog.comments.push({
            people: commentBody.userId,
            body: commentBody.body
        });

        let updatedBlog = await blog.save();
        updatedBlog = await updatedBlog
        .populate('comments.people', 'first_name last_name img')
        .execPopulate();

        return Promise.resolve(updatedBlog);

    } catch (error) {
        return Promise.reject(error);
    }
}

const deleteComment = async(blog, commentBody) => {
    try {

        blog.comments = blog.comments.filter(c => {
            if( c._id == commentBody.id && c.people._id == commentBody.userId ) {
                return false;
            } else {
                return true;
            }
        });

        const updatedBlog = await blog.save();
        return Promise.resolve(updatedBlog);

    } catch (error) {
        return Promise.reject(error);
    }
}

// exports
module.exports = {
    createBlog,
    readBlogs,
    countBlogs,
    reactBlog,
    postComment,
    deleteComment
}