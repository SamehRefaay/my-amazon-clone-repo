import React from 'react';

const ShortText = ({ text, maxlength = 250 }) => {
	return (
		<div>
			{text.length > maxlength ? (
				<div>{text.substring(0, maxlength)}...</div>
			) : (
				<div>{text}</div>
			)}
		</div>
	);
};

export default ShortText;
