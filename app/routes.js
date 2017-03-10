import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './modules/core/App';
import Gameview from './modules/gameview/container';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Gameview} />
	</Route>
);
