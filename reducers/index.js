import { combineReducers } from 'redux'
import posts from './posts'
import page from './page'

const reducer = combineReducers({
	posts,
	page
})

export default reducer