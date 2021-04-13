//**************** imports ****************//
const express = require('express');
const {getProducts } = require('../controllers/productController');


//**************** variables ****************//
const router = express.Router();

//**************** product routes ****************//
router.route('/products').get(getProducts);


module.exports = router;