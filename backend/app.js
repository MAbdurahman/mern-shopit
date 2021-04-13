//**************** imports ****************//
const express = require('express');



//**************** variables ****************//
const app = express();

//**************** middle ****************//
app.use(express.json());



//**************** import all routes ****************//
const products = require('./routes/product');


//**************** app routes ****************//
app.use('/api/v1', products);





module.exports = app;