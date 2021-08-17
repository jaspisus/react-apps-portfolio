import React from 'react';

import { Route, HashRouter } from 'react-router-dom';

import './css/index.min.css';

import HomePage from '../src/pages/HomePage';
import BudgetApp from '../src/pages/BudgetApp';

function App() {
	return (
		<HashRouter hashtype="noslash">
			<Route path="/" exact component={HomePage} />
			<Route path="/budgetapp" component={BudgetApp} />
		</HashRouter>
	);
}

export default App;
