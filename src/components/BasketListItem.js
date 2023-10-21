import React from 'react';
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
		<div className="container p-6 bg-white">
			<div className="flex">
				<img className="w-3/12" src={image} alt="product-img" />
				<div className="">
					<p>{description}</p>
					<h5>{price}</h5>
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
		</div>
	);
};

export default BasketListItem;
