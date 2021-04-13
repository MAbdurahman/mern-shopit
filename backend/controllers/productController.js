//**************** imports ****************//
const Product = require('../models/product');

/*===================================================
creates new product -> /api/v1/admin/product/new
======================================================*/
exports.newProduct = async (req, res, next) => {
	const product = await Product.create(req.body);
	res.status(201).json({
		success: true,
		product,
	});
};

exports.getProducts = (req, res, next) => {
	res.status(200).json({
		success: true,
		message: 'This route shows all products in database.',
	});
};
