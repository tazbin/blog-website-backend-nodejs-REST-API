// import
const jwt = require('jsonwebtoken');
const createErrors = require('http-errors');

const signAccessToken = async(userId) => {
    try {

        userId = JSON.stringify(userId);
        
        const payload = {};
        const privateKey = process.env.accessTokenKey;
        const options = {
            expiresIn: "1d",
            issuer: 'tazbinur.info',
            audience: userId
        };
        
        const accessToken = await jwt.sign(payload, privateKey, options);
        return Promise.resolve(accessToken);
        
    } catch (error) {
        return Promise.reject(error);
    }
}

const verifyAccessToken = async(req, res, next) => {
    try {
        
        if (!req.headers['authorization']){
            throw createErrors.Unauthorized('No accessToken');
        }
        
        const accessToken = req.headers['authorization'].split(' ')[1];
        if( !accessToken ) {
            throw createErrors.Unauthorized('No accessToken');
        }
        
        const decoded = await jwt.verify(accessToken, process.env.accessTokenKey);
        
        if( !decoded ) {
            throw createErrors.Unauthorized('No accessToken');
        }

        req.body.userId = JSON.parse(decoded.aud);
        next();
        
    } catch (error) {
        if( error.name == 'TokenExpiredError' || error.name == 'JsonWebTokenError' ) {
            error = createErrors.Unauthorized(error.name);
        }
        next(error);
    }
}

const signRefreshToken = async(userId) => {
    try {
        
        userId = JSON.stringify(userId);

        const payload = {};
        const privateKey = process.env.refreshTokenKey;
        const options = {
            expiresIn: "1d",
            issuer: 'tazbinur.info',
            audience: userId
        };

        const refreshToken = await jwt.sign(payload, privateKey, options);
        return Promise.resolve(refreshToken);

    } catch (error) {
        return Promise.reject(error);
    }
}

const verifyRefreshToken = async(refreshToken) => {
    try {

        const decoded = await jwt.verify(refreshToken, process.env.refreshTokenKey);
        const userId = JSON.parse(decoded.aud);

        return Promise.resolve(userId);

    } catch (error) {
        if( error.name == 'TokenExpiredError' || error.name == 'JsonWebTokenError' ) {
            error = createErrors.Forbidden(error.name);
        }
        return Promise.reject(error);
    }
}

// exports
module.exports = {
    signAccessToken,
    verifyAccessToken,
    signRefreshToken,
    verifyRefreshToken
}