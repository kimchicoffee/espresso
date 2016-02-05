import { createStore, applyMiddleware} from 'redux'
import { browserHistory } from 'react-router'
import { syncHistory, routeReducer } from 'react-router-redux'
import reducer from './reducers'

export default function(initialState) {

	// Sync dispatched route actions to the history
	const reduxRouterMiddleware = syncHistory(browserHistory)
	const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleware)(createStore)

	const store = createStoreWithMiddleware(reducer, initialState);

	if(module.hot) {
		module.hot.accept('./reducers', function(){
			const nextReducer = require('./reducers')
			store.replaceReducer(nextReducer)
		})
	}
	return store;
}