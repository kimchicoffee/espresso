import React from 'react';
// "connect" decorator connects component Redux's store.
import {connect} from 'react-redux';

import Main from './main';


export default class Index extends React.Component {
	render() {
		return (
			<div>
				<Main />
			</div>
			)
	}
}