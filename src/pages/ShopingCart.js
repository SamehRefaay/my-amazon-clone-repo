import React from 'react';
import { useAuth } from '../context/GlobalState';
import Page from '../components/Page';
import Header from '../components/Header';
import CurrencyFormat from 'react-currency-format';
import { getBasketValue } from '../context/AppReducer';
import { useNavigate } from 'react-router-dom';
import Divider from '../components/Divider';
import ProductsList from '../components/ProductsList';

const ShopingCart = () => {
	const navigate = useNavigate();
	// basket has duplicated itmes
	const { basket } = useAuth();

	return (
		<Page
			title="Shopping Cart"
			content={
				<>
					<Header />
					<div className="grid grid-cols-4 gap-4  p-4">
						{/* left content shopping list */}
						<div className="col-span-3 bg-white p-4">
							<h1 className="text-2xl">Shopping Cart</h1>
							<Divider />
							<ProductsList list={basket} />
						</div>

						{/* right col */}
						<div className="col-span-1 border">
							{/* subtotal */}
							<div className="p-4 bg-white">
								<h4>
									Subtotal ({basket.length} items):{' '}
									{
										<CurrencyFormat
											className="text-base font-semibold"
											value={getBasketValue(basket).toFixed(2)}
											displayType="text"
											thousandSeparator={true}
											prefix="$"
										/>
									}
								</h4>
								<div className="flex items-center">
									<input type="checkbox" />
									<span className="text-sm ml-2">
										This order contains a gift
									</span>
								</div>
								<button
									onClick={() => navigate('/payment')}
									className="py-1 px-4 w-full mt-4 mb-4 text-sm rounded-md bg-yellow-400"
								>
									Proceed to Buy
								</button>
							</div>

							<div className="mt-4 p-4 bg-white">part two</div>
						</div>
					</div>
				</>
			}
		/>
	);
};

export default ShopingCart;
