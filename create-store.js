import { createStore, applyMiddleware, combineReducers } from 'redux';
import * as reducers from './reducers/page'

export default function(data) {
	var reducer = combineReducers(reducers);
	var store = createStore(reducer);

	return store;
}