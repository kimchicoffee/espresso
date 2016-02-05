import React,{ Component } from 'react'
import { Link } from 'react-router'

export default class Header extends Component{
	render() {
		return (
				<nav className = "navbar">
					<ul>
						<li><Link to='/'> Home </Link></li>
						<li><Link to='/blog'> Blog </Link></li>
					</ul>
				</nav>
			)
	}
}