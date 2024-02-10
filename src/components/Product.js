import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { useAuth } from '../context/GlobalState';
import ShortText from './ShortText';
import CustomPriceText from './CustomPriceText';

const Product = ({
	span,
	id,
	title,
	description,
	image,
	category,
	price,
	rating,
}) => {
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
			<div className="mt-4 text-sm">
				<ShortText text={description} maxlength={120} />
			</div>
			<CustomPriceText prefix={'$'} price={price} />
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
			<div className="h-40 flex justify-center">
				<img
					className="h-full object-cover object-center"
					src={image}
					alt="product-img"
				/>
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
