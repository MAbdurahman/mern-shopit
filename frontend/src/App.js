import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/Home';
import ProductDetails from './components/product/ProductDetails';
import Login from './components/user/Login';
import Register from './components/user/Register';
import Profile from './components/user/Profile';

import { loadUser } from './actions/userActions';
import store from './store';
// import axios from 'axios';


function App() {
	//**************** functions ****************//
	useEffect(() => {
		store.dispatch(loadUser());
	}, []);
	return (
		<Router>
			<div className='App'>
				<Header />
				<div className='container container-fluid'>
					<Route exact path='/' component={Home} />
					<Route path='/search/:keyword' component={Home} />
					<Route exact path='/product/:id' component={ProductDetails} />

					<Route path='/login' component={Login} />
					<Route path='/register' component={Register} />
					<Route path='/me' component={Profile} exact/>
				</div>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
