//**************** imports ****************//
const express = require('express');
const errorMiddleware = require('./middlewares/errors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cloudinary = require('cloudinary');
const fileUpload = require('express-fileupload');
//**************** variables ****************//
const app = express();

//**************** middle ****************//
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload());

//**************** cloudinary configuration ****************//
cloudinary.config({
   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
   api_key: process.env.CLOUDINARY_API_KEY,
   api_secret: process.env.CLOUDINARY_API_SECRET

})

//**************** import all routes ****************//
const products = require('./routes/product');
const auth = require('./routes/auth');
const order = require('./routes/order');

//**************** app routes ****************//
app.use('/api/v1', products);
app.use('/api/v1', auth);
app.use('/api/v1', order);

//**************** handle errors middleware ****************//
app.use(errorMiddleware);


module.exports = app;