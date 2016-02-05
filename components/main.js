import React,{ Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import updatePageTitle from '../actions/page'

function Main({ title, updatePageTitle ,children}) {
		return (
			<div>
				<h1>{ title }</h1>
				{children}
			</div>
			)
}

export default connect (
	function(state){
		return {title: state.page.title}
	}, {updatePageTitle}
	)(Main)