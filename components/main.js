import React from 'react';

const Main = React.createClass ({
	getInitialState: function() {
		return {title:'Blog'}
	},

	render: function() {
		return (
			<div>
				<h1> {this.state.title} </h1>
			</div>
			)
	}
});

module.exports = Main;