import React,{ Component, PropTypes } from 'react';
import Blog from './blog'

export default class Main extends Component {

	render() {
		return (
			<div>
				<h1> {this.props.title }</h1>
				<Blog />
			</div>
			)
	}
}

Main.propTypes ={
	title: PropTypes.string.isRequired
}