import React from 'react';

function Option() {
	const options = ['gry', 'jedzenie', 'paliwo', 'wpływy - inne'];

	return (
		<>
			{options.map((elem, id) => {
				return (
					<option key={id} value={elem}>
						{elem}
					</option>
				);
			})}
		</>
	);
}

export default Option;
