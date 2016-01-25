import React,{ Component } from 'react';

export default class Header extends Component{
	render() {
		return (
				<nav className = "navbar">
					<ul>
						<li> Home </li>
						<li> Blog </li>
						<li> Projet </li>
					</ul>
				</nav>
			)
	}
}