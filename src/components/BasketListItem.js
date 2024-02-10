import React, { useEffect, useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import ShortText from './ShortText';
import Divider from './Divider';
import { useAuth } from '../context/GlobalState';

const BasketListItem = ({ product }) => {
	const [itemCount, setItemCount] = useState(product.count);
	const { dispatch } = useAuth();

	useEffect(() => {
		dispatch({
			type: 'CHANGE_ITEM_COUNT',
			id: product.id,
			payload: Array(Number(itemCount)).fill(product),
		});
	}, [itemCount]);

	const handleQuantityChange = e => {
		setItemCount(e.target.value);
	};

	const deleteFromBasket = () => {
		dispatch({ type: 'REMOVE_FROM_CART', id: product.id });
	};

	return (
		<div className="mb-2 grid gap-4 grid-cols-5">
			<div className=" col-span-1 h-36 object-cover object-center">
				<img className="h-full w-full" src={product.image} alt="product-img" />
			</div>
			<div className="col-span-4">
				<div className="text-md">
					<ShortText text={product.description} maxlength={125} />
				</div>
				<CurrencyFormat
					className="text-base font-semibold"
					value={product.price}
					displayType="text"
					thousandSeparator={true}
					prefix="$"
				/>
				<p className="text-green-800 text-xs">In Stock</p>
				{/* actions buttons */}
				<div className=" mt-4 flex gap-4 items-center justify-start h-6">
					<div className="text-sm  ">
						<label>
							<select
								className=""
								value={itemCount}
								onChange={e => handleQuantityChange(e)}
							>
								<option value="0">0 (Delete)</option>
								{[1, 2, 3, 4, 5, 6, 7, 8, 9].map(option => (
									<option key={option} value={option}>
										{option}
									</option>
								))}
								<option value="10">10+</option>
							</select>
						</label>
					</div>
					<Divider type="vertical" />
					<button
						className="text-xs text-blue-500 hover:underline"
						onClick={deleteFromBasket}
					>
						Delete
					</button>
					<Divider type="vertical" />
					<button className="text-xs text-blue-500 hover:underline ">
						Save for later
					</button>
					<Divider type="vertical" />
					<button className="text-xs text-blue-500 hover:underline hover:text-karamel-dark">
						Share
					</button>
				</div>
			</div>
		</div>
	);
};

export default BasketListItem;
