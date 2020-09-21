/* Import all the reducers here to make a combined reducer */

import counterReducer from './counter';
import isLoggedReducer from './isLogged';

import { combineReducers } from 'redux';

const allReducers = combineReducers({
    // Whatever name you want: Reducer name
    counter: counterReducer,
    isLogged: isLoggedReducer
});

export default allReducers