//**************** imports****************//
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';


//**************** variables ****************//
const reducers = combineReducers({


});
const middleware = [thunk];
let initialState = {

}
const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middleware)));


export default store;
