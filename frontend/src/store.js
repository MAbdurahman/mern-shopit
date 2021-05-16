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
   userReducer
}
from './reducers/userReducers'


//**************** variables ****************//
const reducers = combineReducers({
	products: productReducers,
	productDetails: productDetailsReducer,
	auth: authReducer,
	user: userReducer,
});
const middleware = [thunk];
let initialState = {

}
const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middleware)));


export default store;
