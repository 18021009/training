import { authenticate, REFRESH_TYPE } from '../../middleware/auth';
import {
    login, getProfile, updateProfile, changePassword, refreshToken, logout
} from './authController';
import {
    loginValidator, profileValidator, passwordValidator, logoutValidator
} from './authValidator';

const express = require('express');

module.exports = (app) => {
    const router = express.Router();
    router.post('/login', loginValidator, login);
    router.post('/refresh-token', (req, res, next) => { req.authorization_type = 'refresh'; next(); }, authenticate('refresh'), refreshToken);
    router.get('/profile', authenticate(), getProfile);
    router.post('/profile', authenticate(), profileValidator, updateProfile);
    router.post('/profile/change-password', authenticate(), passwordValidator, changePassword);
    router.post('/logout', authenticate(), logoutValidator, logout);
    app.use('/api', router);
};
