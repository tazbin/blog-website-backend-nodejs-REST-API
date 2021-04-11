// imports
const express = require('express');
const createErrors = require('http-errors');
const userCtrl = require('../controllers/user.controller');

const {
    validateUserEditReq,
    validateRegisterReq,
    validateLoginReq
} = require('../middlewares/user.middleware');
const {
    verifyAccessToken
} = require('../helpers/jwt.helper');

// constants
const router = express.Router();

// route: user/

router.post('/register', validateRegisterReq, userCtrl.registerUser);
router.post('/login', validateLoginReq, userCtrl.loginUser);
router.put('/editProfile', verifyAccessToken, validateUserEditReq, userCtrl.editUser);
router.post('/me/refresToken', userCtrl.refreshToken);
router.get('/me', verifyAccessToken, userCtrl.getMyData);
router.get('/bloggerProfile/:bloggerId', userCtrl.getBloggerProfile);
router.delete('/logout', userCtrl.logout);


// exports
module.exports = router;