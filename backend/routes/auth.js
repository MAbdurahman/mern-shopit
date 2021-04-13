//**************** imports ****************//
const express = require('express');
const { registerUser } = require('../controllers/authController');

//**************** variables ****************//
const router = express.Router();

//**************** auth routes ****************//
router.route('/register').post(registerUser);
// router.route('/login').post(loginUser);

module.exports = router;
