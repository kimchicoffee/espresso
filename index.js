import React from 'react';
import {render} from 'react-dom';
import createStore from './create-store';
import App from './app';
import './style.scss';

// create redux instance
const store = createStore();

render(
	<App store={store} />, document.getElementById('app')
);