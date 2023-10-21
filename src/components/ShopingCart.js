import React from 'react';
import { useAuth } from '../context/GlobalState';
import BasketListItem from './BasketListItem';
import Page from './Page';

const ShopingCart = () => {
	const { basket } = useAuth();

	return (
		<Page
			title="Shopping Cart"
			content={
				<div className="grid grid-cols-4 gap-4  p-4">
					{/* left content shopping list */}
					<div className="col-span-3 bg-white p-4">
						<h1 className="text-3xl">Shopping Cart</h1>
						<hr />
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

					{/* subtotal */}
					<div className="col-span-1 h-28 border bg-white">
						<div></div>
					</div>
				</div>
			}
		/>
	);
};

export default ShopingCart;
