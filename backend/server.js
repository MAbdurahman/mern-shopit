//**************** imports ****************//
const app = require('./app');
const dotenv = require('dotenv');
const connectDatabase = require('./config/database');



//**************** configuration setup ****************//
dotenv.config({path: 'backend/config/config.env'});

//**************** variables ****************//
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV;

//**************** connect to database ****************//
connectDatabase();

//**************** app listening ****************//
const server = app.listen(PORT, () => {
   console.log(
		`The server is listening at - http://localhost:${PORT} in ${NODE_ENV} mode🔥`
	);
});
