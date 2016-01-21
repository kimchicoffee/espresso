import React from 'react';

export default class Header extends React.Component {
	render() {
		return (
			<div>
				<h1>Pas de Sujin</h1>
				<nav>
					<ul>
						<li> Home </li>
						<li> Blog </li>
						<li> Projet </li>
					</ul>
				</nav>
			</div>
		)
	}
}