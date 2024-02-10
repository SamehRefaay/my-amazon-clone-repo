import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ShopingCart from './pages/ShopingCart';
import { auth } from './firebase';
import { useAuth } from './context/GlobalState';
import './App.css';
import Payment from './pages/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './pages/Orders';

const stripePromise = loadStripe(
	'pk_test_51M8qBGGgMfG9lrQtwQD96xCOGZUGCke60ampxG6veTlOT3bRrKATseNAiOzXTUNYB7GyXIDHzsgSTqkcMXgnHCXL00jKa12Jue'
);

const App = () => {
	const { dispatch } = useAuth();

	useEffect(() => {
		auth.onAuthStateChanged(authUser => {
			if (authUser) {
				dispatch({
					type: 'SET_USER',
					user: authUser,
				});
			} else {
				dispatch({
					type: 'SET_USER',
					user: null,
				});
			}
		});
	}, []);

	return (
		<div className="app">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/cart" element={<ShopingCart />} />
				<Route
					path="/payment"
					element={
						<Elements stripe={stripePromise}>
							<Payment />
						</Elements>
					}
				/>
				<Route path="/orders" element={<Orders />} />
				<Route path="*" element={<h1>Page Not Found</h1>} />
			</Routes>
		</div>
	);
};

export default App;
