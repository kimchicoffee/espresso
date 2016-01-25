import React from 'react';
import {render} from 'react-dom';
import createStore from './create-store';
import { Provider } from 'react-redux';
import App from './containers/App';
import './static/style.scss';

// create redux instance
const store = createStore();

render(
	<Provider store = { store }>
		<App />
	</Provider >,
	document.getElementById('app')
);