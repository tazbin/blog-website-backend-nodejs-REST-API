// imports
const mongoose = require('mongoose');
const utils = require('../util');
const { Schema } = mongoose;

// shcema definition
const BlogSchema = new Schema({
    writter: {
        type: Schema.Types.ObjectId, 
        ref: 'User',
        required: true
    },
    title:{
        type: String,
        required: true
    },
    img: {
        type: String,
        default: 'https://res.cloudinary.com/s4whf65/image/upload/v1661202691/blogs/eoiptbfzwf38m17yffft.jpg'
    },
    posted: {
        type: String,
        default: utils.getCurretDate()
    },
    category: {
        type: Schema.Types.ObjectId, 
        ref: 'Category',
        required: true
    },
    body: {
        type: String,
        required: true
    },
    reacts: {
        like: [{
            type: Schema.Types.ObjectId, 
            ref: 'User'
        }],
        love: [{
            type: Schema.Types.ObjectId, 
            ref: 'User'
        }],
        funny: [{
            type: Schema.Types.ObjectId, 
            ref: 'User'
        }],
        sad: [{
            type: Schema.Types.ObjectId, 
            ref: 'User'
        }],
        informative: [{
            type: Schema.Types.ObjectId, 
            ref: 'User'
        }]
    },
    comments: [{
        people: {
            type: Schema.Types.ObjectId, 
            ref: 'User',
            required: true
        },
        time: {
            type: String,
            default: utils.getCurretDate()
        },
        body: {
            type: String,
            required: true
        }
    }]
  });

  const Blog = mongoose.model('Blog', BlogSchema);
  
  // exports
  module.exports = {
      Blog
    };