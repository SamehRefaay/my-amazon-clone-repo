import React from 'react';

const Divider = ({
	type = 'horizontal',
	color = '#ddd',
	thickness = '1px',
	marginTop = '8px',
	marginBottom = '8px',
}) => {
	return (
		<>
			{type === 'horizontal' || type === 'h' ? (
				<div
					className="w-full"
					style={{
						backgroundColor: color,
						height: thickness,
						marginTop: marginTop,
						marginBottom: marginBottom,
					}}
				></div>
			) : type === 'vertical' || type === 'v' ? (
				<div
					className="h-5/6"
					style={{ backgroundColor: color, width: thickness }}
				></div>
			) : (
				<div>error</div>
			)}
		</>
	);
};

export default Divider;
