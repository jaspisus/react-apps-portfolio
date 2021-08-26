import React from 'react';

import { Route, HashRouter, NavLink } from 'react-router-dom';

import './css/index.min.css';

import HomePage from '../src/pages/HomePage';
import BudgetApp from '../src/pages/BudgetApp';

function App() {
	return (
		<HashRouter hashType={'noslash'}>
			<nav>
				<NavLink
					to="/"
					activeStyle={{
						fontWeight: 'bold',
					}}
				>
					Home
				</NavLink>
				<span> | </span>
				<NavLink
					to="/budgetapp"
					activeStyle={{
						fontWeight: 'bold',
					}}
				>
					Budget App
				</NavLink>
			</nav>
			<Route path="/" exact component={HomePage} />
			<Route path="/budgetapp" component={BudgetApp} />
		</HashRouter>
	);
}

export default App;
