//**************** imports****************//
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { 
   productReducers,
   productDetailsReducer
} from './reducers/productReducers'

import {
   authReducer,
   userReducer,
   forgotPasswordReducer
}
from './reducers/userReducers'

import { cartReducer } from './reducers/cartReducers';


//**************** variables ****************//
const reducers = combineReducers({
	products: productReducers,
	productDetails: productDetailsReducer,
	auth: authReducer,
	user: userReducer,
	forgotPassword: forgotPasswordReducer,
	cart: cartReducer
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
