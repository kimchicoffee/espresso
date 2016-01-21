import React from 'react';
import Home from './components/home';
import { Provider } from 'react-redux';

export default class App extends React.Component {
	render() {
		return (
			//Provider wrap application's Root component. This component and all of its children will have access to Redux store.
			<Provider store = { this.props.store } >
				<Home />
			</Provider>
		)
	}
}