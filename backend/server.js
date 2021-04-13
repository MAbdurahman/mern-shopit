//**************** imports ****************//
const app = require('./app');
const dotenv = require('dotenv');



//**************** configuration setup ****************//
dotenv.config({path: 'backend/config/config.env'});

//**************** variables ****************//
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV;










//**************** app listening ****************//
const server = app.listen(PORT, () => {
   console.log(
		`The server is listening at - http://localhost:${PORT} in ${NODE_ENV} mode🔥`
	);
});
