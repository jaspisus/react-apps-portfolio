import React, { useState, useEffect } from 'react';

import './css/style.min.css';

import { List, Form, Budget } from './Components';

function BudgetApp() {
	const [expenses, setExpenses] = useState([
		{
			id: 0,
			transactionType: 'outcome',
			transactionName: 'krewetki',
			transactionAmount: 50,
			transactionCategory: 'jedzenie',
		},
		{
			id: 1,
			transactionType: 'outcome',
			transactionName: 'Playstation5',
			transactionAmount: 5500,
			transactionCategory: 'gry',
		},
	]);

	const [incomes, setIncomes] = useState([
		{
			id: 0,
			transactionType: 'income',
			transactionName: 'fucha',
			transactionAmount: 500,
			transactionCategory: 'wpływy - inne',
		},
		{
			id: 1,
			transactionType: 'income',
			transactionName: 'napisanie kalkulatora',
			transactionAmount: 9900,
			transactionCategory: 'wpływy - inne',
		},
	]);

	useEffect(() => {
		if (sessionStorage.getItem('expenses')) {
			setExpenses(JSON.parse(sessionStorage.getItem('expenses')));
		}
		if (sessionStorage.getItem('incomes')) {
			setIncomes(JSON.parse(sessionStorage.getItem('incomes')));
		}
	}, []);

	const addEntry = ({ transactionType, transactionName, transactionAmount, transactionCategory }) => {
		const addToExpenses = [
			...expenses,
			{
				id: Math.floor(Math.random() * 100000000 + 1),
				transactionType: transactionType,
				transactionName: transactionName,
				transactionAmount: parseFloat(transactionAmount),
				transactionCategory: transactionCategory,
			},
		];

		const addToIncomes = [
			...incomes,
			{
				id: Math.floor(Math.random() * 10000 + 1),
				transactionType: transactionType,
				transactionName: transactionName,
				transactionAmount: parseFloat(transactionAmount),
				transactionCategory: transactionCategory,
			},
		];

		if (transactionType === 'outcome') {
			setExpenses(addToExpenses);
			sessionStorage.setItem('expenses', JSON.stringify(addToExpenses));
		}
		if (transactionType === 'income') {
			setIncomes(addToIncomes);
			sessionStorage.setItem('incomes', JSON.stringify(addToIncomes));
		}

		// sessionStorage.clear();
	};

	const calculateBudget = () => {
		let incomesAmount;
		let expensesAmount;

		if (incomes.length) {
			incomesAmount = incomes
				.map(elem => {
					return elem.transactionAmount;
				})
				.reduce((prev, curr) => {
					return prev + curr;
				});
		} else incomesAmount = 0;

		if (expenses.length) {
			expensesAmount = expenses
				.map(elem => {
					return elem.transactionAmount;
				})
				.reduce((prev, curr) => {
					return prev + curr;
				});
		} else expensesAmount = 0;

		return incomesAmount - expensesAmount;
	};

	const deleteEntry = (id, listType) => {
		if (listType === 'incomes') {
			setIncomes(incomes.filter(elem => elem.id !== id));
			sessionStorage.setItem('incomes', JSON.stringify(incomes.filter(elem => elem.id !== id)));
		}
		if (listType === 'expenses') {
			setExpenses(expenses.filter(elem => elem.id !== id));
			sessionStorage.setItem('expenses', JSON.stringify(expenses.filter(elem => elem.id !== id)));
		}
	};

	return (
		<main className="ex ex4">
			<article>
				<div className="box">
					<Form addEntry={addEntry} />
				</div>
				<div className="lists">
					<List listType={'expenses'} header={'Wydatki:'} list={expenses} onDelete={deleteEntry} />
					<List listType={'incomes'} header={'Przychody:'} list={incomes} onDelete={deleteEntry} />
				</div>
				<Budget budget={calculateBudget()} />
			</article>
		</main>
	);
}

export default BudgetApp;
