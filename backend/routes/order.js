//**************** imports ****************//
const express = require('express');
const {
   newOrder
} = require('../controllers/orderController');
const { isAuthenticatedUser, authorizeRoles} = require('../middlewares/auth');

//**************** variables ****************//
const router = express.Router();

//**************** order routes ****************//
router.route('/order/new').post(isAuthenticatedUser, newOrder);



module.exports = router;