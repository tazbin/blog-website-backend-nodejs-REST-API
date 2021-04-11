// imports
const express = require('express');
const createErrors = require('http-errors');
const categoryService = require('../services/category.service');
const blogService = require('../services/blog.service');
const { Category } = require('../models/category.model');
const utils = require('../util');

const createCategory = async(req, res, next) => {
    try {
        
        let categoryBody = req.body;

        const savedCategory = await categoryService.createCategory(categoryBody);
        res.send(savedCategory);

    } catch (error) {
        next(error);
    }
}

const getCategories = async(req, res, next) => {
    try {

        let searchParams = {};
        const categories = await categoryService.readCategory(searchParams);
        res.send(categories);

    } catch (error) {
        next(error);
    }
}
const getCategorizedBlogCount = async(req, res, next) => {
    try {

        let searchParams = {};
        let categories = await categoryService.readCategory(searchParams);

        let count = [];

        categories.forEach(c => {
            count.push(
                blogService.countBlogs({category: c._id})
            );
        });

        count = await Promise.all(count);

        const result = utils.combineArrayObjectAndArray(categories, ['_id', 'name'], count, 'count')

        res.send(result);

    } catch (error) {
        next(error);
    }
}

 // exports
 module.exports = {
    createCategory,
    getCategories,
    getCategorizedBlogCount
 }