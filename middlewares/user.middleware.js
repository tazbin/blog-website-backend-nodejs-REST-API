// imports
const Joi = require('joi');
const {
    userSchema,
    userRegisterSchema,
    userLoginSchema } = require('../validators/user.validator');

// middlewares
const validateUserEditReq = async(req, res, next) => {
    try {
       await userSchema.validateAsync(req.body);
        next();

    } catch (error) {
        next(error);
    }
}

const validateRegisterReq = async(req, res, next) => {
    try {
        
       await userRegisterSchema.validateAsync(req.body);
        next();

    } catch (error) {
        next(error);
    }
}

const validateLoginReq = async(req, res, next) => {
    try {
        
        await userLoginSchema.validateAsync(req.body);
         next();
 
     } catch (error) {
         next(error);
     }
}

// exports
module.exports = {
    validateUserEditReq,
    validateRegisterReq,
    validateLoginReq
}