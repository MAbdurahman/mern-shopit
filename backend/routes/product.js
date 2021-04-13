//**************** imports ****************//
const express = require('express');
const {
	getProducts,
	newProduct,
	getSingleProduct,
	updateProduct,
	deleteProduct,
} = require('../controllers/productController');

//**************** variables ****************//
const router = express.Router();

//**************** product routes ****************//
router.route('/products').get(getProducts);
router.route('/product/:id').get(getSingleProduct);
router.route('/admin/product/new').post(newProduct);
router.route('/admin/product/:id').put(updateProduct).delete(deleteProduct);

module.exports = router;
