import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import createStore from './create-store'
import App from './containers/App'
import Home from './components/Home'
import Blog from './components/Blog'
import './static/style.scss'

// create redux instance
const store = createStore()

render(
	<Provider store = { store }>
		<Router history={browserHistory}>
			<Route path = "/" component = {App} >
				<IndexRoute component = {Home} />
				<Route path = "/blog" component = {Blog} />
			</Route>			
		</Router>
	</Provider >,
	document.getElementById('app')
);