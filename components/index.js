import React from 'react';
import Header from './header';
import Main from './main';
import Footer from './footer';

const Index = React.createClass ({
	render: function() {
		return (
			<div> 
				<Header />
				<Main / >
				<Footer />
			</div>
		)
	}
});

module.exports = Index;