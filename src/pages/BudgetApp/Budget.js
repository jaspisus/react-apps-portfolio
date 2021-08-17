import React from 'react';

const positiveStyles = {
	fontWeight: 'bold',
	color: 'green',
};

const negativeStyles = {
	fontWeight: 'bold',
	color: 'red',
};

function Budget({ budget }) {
	return (
		<div className="box">
			Budżet: <span style={budget <= 0 ? negativeStyles : positiveStyles}>{budget}zł</span>
		</div>
	);
}

export default Budget;
