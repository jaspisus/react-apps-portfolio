import React, { useState, useRef } from 'react';

import { Option } from './';

function Form({ addEntry }) {
	const [transactionType, setTransactionType] = useState('income');
	const [transactionName, setTransactionName] = useState('');
	const [transactionAmount, setTransactionAmount] = useState(0);
	const [transactionCategory, setTransactionCategory] = useState(null);

	const transactionNameInput = useRef();
	const transactionAmountInput = useRef();
	const transactionCategoryInput = useRef();

	const onSubmit = event => {
		event.preventDefault();

		if (transactionNameInput.current.value === '') {
			alert('Podaj nazwę transakcji!');
			return;
		}
		if (!transactionAmountInput.current.value) {
			alert('Podaj kwotę transakcji!');
			return;
		}
		if (transactionCategoryInput.current.value === '0') {
			alert('Wybierz kategorię transakcji!');
			return;
		}

		addEntry({
			transactionType,
			transactionName,
			transactionAmount,
			transactionCategory,
		});

		transactionNameInput.current.value = '';
		transactionAmountInput.current.value = '';
		transactionCategoryInput.current.value = '0';

		setTransactionName('');
		setTransactionAmount(0);
		setTransactionCategory(null);
	};

	return (
		<form onSubmit={onSubmit}>
			<fieldset>
				<legend>Rodzaj transakcji:</legend>
				<span>
					<input id="income" type="radio" name="transactionType" defaultChecked onChange={() => setTransactionType('income')} />
					<label htmlFor="income">przychód</label>
				</span>
				<span>
					<input id="outcome" type="radio" name="transactionType" onChange={() => setTransactionType('outcome')} />
					<label htmlFor="outcome">wydatek</label>
				</span>
			</fieldset>
			<fieldset>
				<legend>Nazwa transakcji:</legend>
				<input ref={transactionNameInput} type="text" onChange={e => setTransactionName(e.target.value)} />
			</fieldset>
			<fieldset>
				<legend>Kwota:</legend>
				<input ref={transactionAmountInput} type="number" min="0" onChange={e => setTransactionAmount(e.target.value)} />
			</fieldset>
			<fieldset>
				<legend>Kategoria:</legend>
				<select ref={transactionCategoryInput} onChange={e => setTransactionCategory(e.target.value)}>
					<option value="0">--wybierz--</option>
					<Option />
				</select>
			</fieldset>
			<button type="submit">Dodaj</button>
		</form>
	);
}

export default Form;
