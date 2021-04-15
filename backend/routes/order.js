//**************** imports ****************//
const express = require('express');
const {
   newOrder,
   getSingleOrder,
   myOrders
} = require('../controllers/orderController');
const { isAuthenticatedUser, authorizeRoles} = require('../middlewares/auth');

//**************** variables ****************//
const router = express.Router();

//**************** order routes ****************//
router.route('/order/new').post(isAuthenticatedUser, newOrder);
router.route('/order/:id').get(isAuthenticatedUser, getSingleOrder);
router.route('/orders/me').get(isAuthenticatedUser, myOrders);



module.exports = router;