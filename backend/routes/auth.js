//**************** imports ****************//
const express = require('express');
const {
	registerUser,
	loginUser,
	logout,
	forgotPassword,
	resetPassword,
	getUserProfile,
	updatePassword
} = require('../controllers/authController');
const { isAuthenticatedUser } = require('../middlewares/auth');

//**************** variables ****************//
const router = express.Router();

//**************** auth routes ****************//
router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/password/forgot').post(forgotPassword);
router.route('/password/reset/:token').put(resetPassword);
router.route('/logout').get(logout);
router.route('/me').get(isAuthenticatedUser, getUserProfile);
router.route('/password/update').put(isAuthenticatedUser, updatePassword);

module.exports = router;
