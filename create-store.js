import { createStore, applyMiddleware} from 'redux';
import reducer from './reducers'

export default function(initialState) {
	const store = createStore(reducer, initialState);

	if(module.hot) {
		module.hot.accept('./reducers', function(){
			const nextReducer = require('./reducers')
			store.replaceReducer(nextReducer)
		})
	}
	return store;
}