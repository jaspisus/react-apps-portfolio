import React from 'react';

function Expenses({ listType, header, list, onDelete }) {
	return (
		<div className="box">
			<h2>{header}</h2>
			<ul>
				{list.map((elem, id) => (
					<li key={id}>
						{elem.transactionName}: {elem.transactionAmount}zł,
						<br />
						kategoria: {elem.transactionCategory}
						<span onClick={() => onDelete(elem.id, listType)}>{' [X]'}</span>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Expenses;
