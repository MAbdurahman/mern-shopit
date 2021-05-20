//**************** imports****************//
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { 
   productReducers,
   productDetailsReducer,
	newReviewReducer
} from './reducers/productReducers'

import {
   authReducer,
   userReducer,
   forgotPasswordReducer
}
from './reducers/userReducers'

import { cartReducer } from './reducers/cartReducers';

import {
	newOrderReducer,
	myOrdersReducer,
	orderDetailsReducer,
	allOrdersReducer,
	orderReducer,
} from './reducers/orderReducers';
//**************** variables ****************//
const reducers = combineReducers({
	products: productReducers,
	productDetails: productDetailsReducer,
	auth: authReducer,
	user: userReducer,
	forgotPassword: forgotPasswordReducer,
	cart: cartReducer,
	newOrder: newOrderReducer,
	myOrders: myOrdersReducer,
	allOrders: allOrdersReducer,
	orderDetails: orderDetailsReducer,
	order: orderReducer,
	newReview: newReviewReducer,
});
const middleware = [thunk];
let initialState = {
	cart: {
		cartItems: localStorage.getItem('cartItems')
			? JSON.parse(localStorage.getItem('cartItems'))
			: [],
		shippingInfo: localStorage.getItem('shippingInfo')
			? JSON.parse(localStorage.getItem('shippingInfo'))
			: {},
	}
};
const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middleware)));


export default store;
