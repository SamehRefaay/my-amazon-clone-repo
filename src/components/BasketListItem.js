import React from 'react';
import CurrencyFormat from 'react-currency-format';
import ReactStars from 'react-rating-stars-component';

const BasketListItem = ({
	id,
	title,
	description,
	image,
	category,
	price,
	rating,
}) => {
	return (
		<div className="mt-6 grid gap-4 grid-cols-4 border-b ">
			<div className=" col-span-1 border">
				<img className="w-full " src={image} alt="product-img" />
			</div>
			<div className="col-span-3">
				<p>{description}</p>
				<CurrencyFormat
					className="text-2xl font-bold"
					value={price}
					displayType="text"
					thousandSeparator={true}
					prefix="$"
				/>
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
		</div>
	);
};

export default BasketListItem;
