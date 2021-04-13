//**************** imports ****************//
const express = require('express');
const { getProducts, newProduct } = require('../controllers/productController');


//**************** variables ****************//
const router = express.Router();

//**************** product routes ****************//
router.route('/products').get(getProducts);
router.route('/product/new').post(newProduct);


module.exports = router;