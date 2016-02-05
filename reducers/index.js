import { combineReducers } from 'redux'
import { routeReducer } from 'react-router-redux'
import posts from './posts'
import page from './page'

const reducer = combineReducers({
	posts,
	page,
	routing:routeReducer
})

export default reducer