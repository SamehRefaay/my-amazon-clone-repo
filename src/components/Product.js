import React from 'react';
import CurrencyFormat from 'react-currency-format';
import ReactStars from 'react-rating-stars-component';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/GlobalState';

const Product = ({
	span,
	key,
	id,
	title,
	description,
	image,
	category,
	price,
	rating,
}) => {
	const navigate = useNavigate();
	const { dispatch } = useAuth();

	const addToCart = () => {
		dispatch({
			type: 'ADD_TO_CART',
			item: {
				id,
				title,
				description,
				image,
				category,
				price,
				rating,
			},
		});
	};
	return (
		<div className={`p-4 border bg-white ${span}`}>
			<p className="mt-4 text-sm">{description}</p>
			<CurrencyFormat
				className="text-2xl font-bold"
				value={price}
				displayType="text"
				thousandSeparator={true}
				prefix="$"
			/>
			<div className="">
				{' '}
				<ReactStars
					edit={false}
					count={5}
					value={rating.rate}
					size={24}
					isHalf={true}
					emptyIcon={<i className="far fa-star"></i>}
					halfIcon={<i className="fa fa-star-half-alt"></i>}
					fullIcon={<i className="fa fa-star"></i>}
					activeColor="#FEBD69"
				/>
			</div>
			<div className="h-72 flex justify-center">
				<img className="h-full" src={image} alt="product-img" />
			</div>
			<button
				className="block py-2 px-6 mt-3 mx-auto rounded-md bg-karamel-dark"
				onClick={addToCart}
			>
				Add to Cart
			</button>
		</div>
	);
};

export default Product;
