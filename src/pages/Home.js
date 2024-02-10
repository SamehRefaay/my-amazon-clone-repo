import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../services/FakeStore';
import bg1 from '../images/home-page-bg1.jpg';
import bg2 from '../images/home-page-bg2.jpg';
import bg3 from '../images/home-page-bg3.jpg';
import bg4 from '../images/home-page-bg4.jpg';
import bg5 from '../images/home-page-bg5.jpg';
import bg6 from '../images/home-page-bg6.jpg';
import bg7 from '../images/home-page-bg7.jpg';
import bg8 from '../images/home-page-bg8.jpg';
import bg9 from '../images/home-page-bg9.jpg';
import Product from '../components/Product';
import Page from '../components/Page';
import Header from '../components/Header';
import Carousel from '../components/Carousel';

const Home = () => {
	const bgImgs = [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9];
	const [products, setProducts] = useState();

	useEffect(() => {
		getAllProducts().then(res => setProducts(res));
	}, []);

	return (
		<Page
			title="Spend less Smile more 👻"
			content={
				<>
					<Header />
					<div className="relative">
						<Carousel>
							{bgImgs.map(slide => (
								<img
									key={slide}
									className="gradient-mask-b-20 "
									src={slide}
									alt="home-bg"
								/>
							))}
						</Carousel>

						<div className="absolute top-72 p-6 z-10 grid gap-4 grid-cols-12 ">
							{products
								?.filter(
									product =>
										product.category === 'electronics' && product.price > 500
								)
								.slice(0, 2)
								.map(item => (
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
							{products?.slice(1, 4).map(item => (
								<Product
									span="col-span-4"
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
						</div>
					</div>
				</>
			}
		/>
	);
};

export default Home;
