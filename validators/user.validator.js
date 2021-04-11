// imports
const Joi = require('joi');

// defining user validation schemas

const userSchema = Joi.object({

    userId: Joi.string()
        .required(),

    img: Joi.string(),

    email: Joi.string()
        .email({ minDomainSegments: 2 })
        .required(),

    first_name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    last_name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    job: Joi.string()
        .min(3)
        .max(30),

    address: Joi.string()
        .min(3)
        .max(30),

    about: Joi.string()
        .min(3)
        .max(150)

});

const userRegisterSchema = Joi.object({

    email: Joi.string()
        .email({ minDomainSegments: 2 })
        .required(),

    first_name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    last_name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    password: Joi.string()
        .min(3)
        .max(30)
        .required()

});

const userLoginSchema = Joi.object({

    email: Joi.string()
        .email({ minDomainSegments: 2 })
        .required(),

    password: Joi.string()
        .required()

});

// exports
module.exports = {
    userSchema,
    userRegisterSchema,
    userLoginSchema
};