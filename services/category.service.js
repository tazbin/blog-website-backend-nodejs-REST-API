// imports
const express = require('express');
const createErrors = require('http-errors');
const { Category } = require('../models/category.model');

// CRUD

 const createCategory = async(categoryBody) => {
    try {

        const newCategory = new Category(categoryBody);
        const savedCategory = await newCategory.save();
        return Promise.resolve(savedCategory);

    } catch (error) {
        if( error.code && error.code == 11000 ) {
            error = createErrors.Forbidden(`${categoryBody.name} already exists`);
            return Promise.reject(error);
        }
        return Promise.reject(error);
    }
}

const readCategory = async() => {
    try {

        const categories = await Category
        .find()
        .select('name');
        return Promise.resolve(categories);

    } catch (error) {
        return Promise.reject(error);
    }
}

// exports
module.exports = {
    createCategory,
    readCategory
}