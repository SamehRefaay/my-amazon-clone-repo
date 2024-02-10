import React from 'react';
import BasketListItem from './BasketListItem';
import Divider from './Divider';

const ProductsList = ({ list }) => {
	// unique basket is list has no duplicate items
	const uniqueBasket = [...new Map(list.map(item => [item.id, item])).values()];

	const filteredList = uniqueBasket.map(product => {
		product.count = list.filter(
			basketItem => basketItem.id === product.id
		).length;
		return product;
	});
	return (
		<>
			{filteredList.map((product, index) => (
				<div key={product.id}>
					{index === filteredList.length - 1 ? (
						<BasketListItem product={product} />
					) : (
						<>
							<BasketListItem product={product} />
							<Divider />
						</>
					)}
				</div>
			))}
		</>
	);
};

export default ProductsList;
