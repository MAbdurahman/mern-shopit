//**************** imports ****************//
const express = require('express');
const { registerUser, loginUser, logout } = require('../controllers/authController');

//**************** variables ****************//
const router = express.Router();

//**************** auth routes ****************//
router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/logout').get(logout);

module.exports = router;
