//**************** imports ****************//
const Product = require('../models/product');
const ErrorHandler = require('../utils/errorHandler');

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

/*===================================================
   get all products -> /api/v1/products?keyword=apple
======================================================*/
exports.getProducts = async (req, res, next) => {
	const products = await Product.find();
	res.status(200).json({
		success: true,
		count: products.length,
		products,
	});
};

/*================================================
   get single product -> /api/v1/product/:id
===================================================*/
exports.getSingleProduct = async (req, res, next) => {
	const product = await Product.findById(req.params.id);

	if (!product) {
		return next(new ErrorHandler('Product not found', 404));
	}

	res.status(200).json({
		success: true,
		product,
	});
};

/*=========================================================
   update product -> /api/v1/admin/product/:id
=========================================================*/
exports.updateProduct = async (req, res, next) => {
	let product = await Product.findById(req.params.id);

	if (!product) {
		return next(new ErrorHandler('Product not found', 404));
	}

	product = await Product.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
		runValidators: true,
		useFindAndModify: false,
	});

	res.status(200).json({
		success: true,
		product,
	});
};

/*=========================================================
   delete product -> /api/v1/admin/product/:id
=========================================================*/
exports.deleteProduct = async (req, res, next) => {
	const { id } = req.params;
	const product = await Product.findById(id);

	if (!product) {
		return next(new ErrorHandler('Product not found', 404));
	}
   
	await product.remove();
	res.status(200).json({
		success: true,
		message: 'Product deleted!',
	});
};
