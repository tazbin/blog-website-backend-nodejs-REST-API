// imports
const mongoose = require('mongoose');
const utils = require('../util');
const { Schema } = mongoose;

// shcema definition
const userSchema = new Schema({
    img: {
        type: String
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
        require: false
    },
    joined: {
        type: String,
        default: utils.getCurretDate()
    },
    address: {
        type: String,
        require: false
    },
    about: {
        type: String,
        require: false
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