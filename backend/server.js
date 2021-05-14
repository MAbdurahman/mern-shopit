//**************** imports ****************//
const app = require('./app');
const dotenv = require('dotenv');
const connectDatabase = require('./config/database');
const cloudinary = require('cloudinary');

//**************** handling Uncaught exceptions ****************//
process.on('uncaughtException', err => {
	console.log(`ERROR: ${err.stack}`);
	console.log('Shutting down the server due to Uncaught Exception!');
	process.exit(1);
});

//**************** configuration setup ****************//
dotenv.config({path: 'backend/config/config.env'});

//**************** variables ****************//
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV;

//**************** connect to database ****************//
connectDatabase();
//**************** cloudinary configuration ****************//
cloudinary.config({
   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
   api_key: process.env.CLOUDINARY_API_KEY,
   api_secret: process.env.CLOUDINARY_API_SECRET

})
//**************** app listening ****************//
const server = app.listen(PORT, () => {
   console.log(
		`The server is listening at - http://127.0.0.1:${PORT} in ${NODE_ENV} mode🔥`
	);
});
//**************** handling unhandled promise rejection ****************//
process.on('unhandledRejection', err => {
	console.log(`ERROR: ${err.stack}`);
	console.log('Shutting down the server due to Unhandled Promise Rejection!');
	server.close(() => {
		process.exit(1);
	});
});
