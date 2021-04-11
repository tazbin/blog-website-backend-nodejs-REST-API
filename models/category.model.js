// imports
const mongoose = require('mongoose');
const utils = require('../util');
const { Schema } = mongoose;

// shcema definition
const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    }
});

const Category = mongoose.model('Category', categorySchema);
  
// exports
module.exports = {
    Category
};