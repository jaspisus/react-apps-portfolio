import React, { useState } from 'react';

import './css/style.min.css';

import List from './List';
import Form from './Form';
import Budget from './Budget';

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

	const addEntry = ({ transactionType, transactionName, transactionAmount, transactionCategory }) => {
		if (transactionType == 'outcome')
			setExpenses([
				...expenses,
				{
					id: Math.floor(Math.random() * 100000000 + 1),
					transactionType: transactionType,
					transactionName: transactionName,
					transactionAmount: parseFloat(transactionAmount),
					transactionCategory: transactionCategory,
				},
			]);
		if (transactionType == 'income')
			setIncomes([
				...incomes,
				{
					id: Math.floor(Math.random() * 10000 + 1),
					transactionType: transactionType,
					transactionName: transactionName,
					transactionAmount: parseFloat(transactionAmount),
					transactionCategory: transactionCategory,
				},
			]);
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
		if (listType == 'incomes') {
			setIncomes(incomes.filter(elem => elem.id !== id));
		}
		if (listType == 'expenses') {
			setExpenses(expenses.filter(elem => elem.id !== id));
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
