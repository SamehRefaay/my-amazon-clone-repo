import React from 'react';
import { useAuth } from '../context/GlobalState';
import BasketListItem from './BasketListItem';

const Checkout = () => {
	const { basket } = useAuth();
	return (
		<div>
			{basket.map(product => (
				<BasketListItem
					id={product.id}
					title={product.title}
					description={product.description}
					image={product.image}
					category={product.category}
					price={product.price}
					rating={product.rating}
				/>
			))}
		</div>
	);
};

export default Checkout;
