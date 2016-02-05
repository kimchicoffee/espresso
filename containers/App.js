import React, {Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { routeActions } from 'react-router-redux'

import Header from '../components/Header'
import Main from '../components/Main'

function App({children}) {
	return(
		<div>
			<Header />
			<Main children = {children} />
		</div>
	)
}


export default connect(
	null,
	routeActions
	)(App)