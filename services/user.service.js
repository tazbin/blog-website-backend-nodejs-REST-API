// imports
const express = require('express');
const createErrors = require('http-errors');
const { User } = require('../models/user.model');
const utils = require('../util');

// CRUD

 const createUser = async(userbody) => {
    try {

        const newUser = new User(userbody);
        const savedUser = await newUser.save();
        return Promise.resolve(savedUser);

    } catch (error) {
        if( error.code && error.code == 11000 ) {
            error = createErrors.Conflict(`${userbody.email} already exists`);
            return Promise.reject(error);
        }
        return Promise.reject(error);
    }
}

const findUniqueUser = async(searchParams, selectFields = '') => {
    try {
        
        const userResult = await User
        .findOne(searchParams)
        .select(selectFields);
        if( !userResult ) {
            throw createErrors.NotFound('Incorrect information');
        }

        return Promise.resolve(userResult);

    } catch (error) {
        if( error.name == 'CastError' ) {
            error = createErrors.BadRequest('Invalid bloggerId')
        }
        return Promise.reject(error);
    }
}

const updateUser = async(userBody) => {
    try {
        
        const userId = userBody.userId;
        const updateBody = utils.makeObjectExcept(userBody, ['userId']);
        const updatedUser = await User.updateOne({ _id: userId }, updateBody);

        return Promise.resolve(updatedUser);

    } catch (error) {
        return Promise.reject(error);
    }
}

// exports
module.exports = {
    createUser,
    findUniqueUser,
    updateUser
}