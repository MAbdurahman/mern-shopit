//**************** imports ****************//
const express = require('express');
const errorMiddleware = require('./middlewares/errors');


//**************** variables ****************//
const app = express();

//**************** middle ****************//
app.use(express.json());



//**************** import all routes ****************//
const products = require('./routes/product');


//**************** app routes ****************//
app.use('/api/v1', products);


//**************** handle errors middleware ****************//
app.use(errorMiddleware);


module.exports = app;