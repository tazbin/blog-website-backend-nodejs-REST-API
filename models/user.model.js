// imports
const mongoose = require('mongoose');
const utils = require('../util');
const { Schema } = mongoose;

// shcema definition
const userSchema = new Schema({
    img: {
        type: String,
        default: 'uploads/default.png'
    },
    email:{
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'blogger'
    },
    job: {
        type: String,
        require: false,
        default: ''
    },
    joined: {
        type: String,
        default: utils.getCurretDate()
    },
    address: {
        type: String,
        require: false,
        default: ''
    },
    about: {
        type: String,
        require: false,
        default: ''
    },
    password: {
        type: String,
        required: true
    }
  });

  const User = mongoose.model('User', userSchema);
  
  // exports
  module.exports = {
      User
    };