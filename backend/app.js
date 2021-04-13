//**************** imports ****************//
const express = require('express');
const errorMiddleware = require('./middlewares/errors');


//**************** variables ****************//
const app = express();

//**************** middle ****************//
app.use(express.json());



//**************** import all routes ****************//
const products = require('./routes/product');
const auth = require('./routes/auth');


//**************** app routes ****************//
app.use('/api/v1', products);
app.use('/api/v1', auth);

//**************** handle errors middleware ****************//
app.use(errorMiddleware);


module.exports = app;