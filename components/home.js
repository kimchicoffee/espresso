import React from 'react';
import Header from './header';

export default class Home extends React.Component {
	render() {
		return (
			<div> 
				<Header />
				<h1> Welcome to Espresso </h1>
			</div>
		)
	}
}