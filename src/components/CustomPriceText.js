import React from 'react';

const CustomPriceText = ({ prefix, price }) => {
	const text = price.toFixed(2).toString();
	const arr = text.split('.');
	const wholeNumber = arr[0];
	const fractionPart = arr[1];

	return (
		<div className="flex text-sm">
			<span>{prefix}</span>
			<h2 className="text-2xl font-medium">{wholeNumber}</h2>
			<span>{fractionPart}</span>
		</div>
	);
};

export default CustomPriceText;
