import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/Home';
import ProductDetails from './components/product/ProductDetails';

import Login from './components/user/Login';
import Register from './components/user/Register';
import Profile from './components/user/Profile';
import UpdateProfile from './components/user/UpdateProfile';
import UpdatePassword from './components/user/UpdatePassword';
import ForgotPassword from './components/user/ForgotPassword';
import NewPassword from './components/user/NewPassword';

import Cart from './components/cart/Cart';
import Shipping from './components/cart/Shipping';
import ConfirmOrder from './components/cart/ConfirmOrder';
import Payment from './components/cart/Payment';
import OrderSuccess from './components/cart/OrderSuccess';

import ListOrders from './components/order/ListOrders';
import OrderDetails from './components/order/OrderDetails';

//**************** admin imports ****************//
import Dashboard from './components/admin/Dashboard';
import ProductsList from './components/admin/ProductsList';
import NewProduct from './components/admin/NewProduct';
import UpdateProduct from './components/admin/UpdateProduct';

import ProtectedRoute from './components/route/ProtectedRoute';
import { loadUser } from './actions/userActions';
import { useSelector } from 'react-redux';
import store from './store';
import axios from 'axios';

//**************** payment imports ****************//
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';




function App() {
	//**************** variables ****************//
	const [stripeApiKey, setStripeApiKey] = useState('');
	const { user, isAuthenticated, loading } = useSelector(state => state.auth);
	//**************** functions ****************//
	useEffect(() => {
		store.dispatch(loadUser());
		async function getStripApiKey() {
			const { data } = await axios.get('/api/v1/stripeapi');

			setStripeApiKey(data.stripeApiKey);
			
		}

		getStripApiKey();
	}, []);

	return (
		<Router>
			<div className='App'>
				<Header />
				<div className='container container-fluid'>
					<Route exact path='/' component={Home} />
					<Route path='/search/:keyword' component={Home} />
					<Route exact path='/product/:id' component={ProductDetails} />

					<Route path='/cart' component={Cart} exact />
					<ProtectedRoute path='/shipping' component={Shipping} />
					<ProtectedRoute path='/confirm' component={ConfirmOrder} exact />
					<ProtectedRoute path='/success' component={OrderSuccess} />
					{stripeApiKey && (
						<Elements stripe={loadStripe(stripeApiKey)}>
							<ProtectedRoute path='/payment' component={Payment} />
						</Elements>
					)}

					<Route path='/login' component={Login} />
					<Route path='/register' component={Register} />
					<Route
						path='/password/forgot'
						component={ForgotPassword}
						exact
					/>
					<Route
						path='/password/reset/:token'
						component={NewPassword}
						exact
					/>
					<ProtectedRoute path='/me' component={Profile} exact />
					<ProtectedRoute
						path='/me/update'
						component={UpdateProfile}
						exact
					/>
					<ProtectedRoute
						path='/password/update'
						component={UpdatePassword}
						exact
					/>
					<ProtectedRoute path='/orders/me' component={ListOrders} exact />
					<ProtectedRoute
						path='/order/:id'
						component={OrderDetails}
						exact
					/>
				</div>
				<ProtectedRoute
					path='/dashboard'
					isAdmin={true}
					component={Dashboard}
					exact
				/>
				<ProtectedRoute
					path='/admin/products'
					isAdmin={true}
					component={ProductsList}
					exact
				/>
				<ProtectedRoute
					path='/admin/product'
					isAdmin={true}
					component={NewProduct}
					exact
				/>
				<ProtectedRoute
					path='/admin/product/:id'
					isAdmin={true}
					component={UpdateProduct}
					exact
				/>
				{!loading && (!isAuthenticated || user.role !== 'admin') && (
					<Footer />
				)}
			</div>
		</Router>
	);
}

export default App;
