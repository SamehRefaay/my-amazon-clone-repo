import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../services/FakeStore';
import homeBackgroundImg from '../images/home-bg.jpg';
import Product from './Product';

const Home = () => {
	const [products, setProducts] = useState();
	useEffect(() => {
		getAllProducts().then(res => setProducts(res));
	}, []);

	console.log(products);
	return (
		<div className="relative">
			<img
				className="absolute z-0 gradient-mask-b-0"
				src={homeBackgroundImg}
				alt="home-bg"
			/>

			<div className="absolute top-72 p-6 z-10 grid gap-4 grid-cols-6 ">
				{products
					?.filter(
						product => product.category === 'electronics' && product.price > 500
					)
					.slice(0, 2)
					.map(item => (
						<Product
							span="col-span-3"
							key={item?.id}
							id={item.id}
							title={item?.title}
							description={item?.description}
							image={item?.image}
							category={item?.category}
							rating={item?.rating}
							price={item?.price}
						/>
					))}
				{products?.slice(1, 4).map(item => (
					<Product
						span="col-span-2"
						key={item?.id}
						id={item.id}
						title={item?.title}
						description={item?.description}
						image={item?.image}
						category={item?.category}
						rating={item?.rating}
						price={item?.price}
					/>
				))}
				{products?.slice(5, 6).map(item => (
					<Product
						span="col-span-6"
						key={item?.id}
						id={item.id}
						title={item?.title}
						description={item?.description}
						image={item?.image}
						category={item?.category}
						rating={item?.rating}
						price={item?.price}
					/>
				))}
				{products?.slice(6).map(item => (
					<Product
						span="col-span-2"
						key={item?.id}
						id={item.id}
						title={item?.title}
						description={item?.description}
						image={item?.image}
						category={item?.category}
						rating={item?.rating}
						price={item?.price}
					/>
				))}
			</div>
		</div>
	);
};

export default Home;
