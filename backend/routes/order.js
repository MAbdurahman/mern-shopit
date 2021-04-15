//**************** imports ****************//
const express = require('express');
const {
   newOrder,
   getSingleOrder,
   myOrders,
   allOrders
} = require('../controllers/orderController');
const { isAuthenticatedUser, authorizeRoles} = require('../middlewares/auth');

//**************** variables ****************//
const router = express.Router();

//**************** order routes ****************//
router.route('/order/new').post(isAuthenticatedUser, newOrder);
router.route('/order/:id').get(isAuthenticatedUser, getSingleOrder);
router.route('/orders/me').get(isAuthenticatedUser, myOrders);
router.route('/admin/orders/').get(isAuthenticatedUser, authorizeRoles('admin'), allOrders);



module.exports = router;