import React from 'react';

const Header = React.createClass ({
	render: function() {
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
});

module.exports = Header;