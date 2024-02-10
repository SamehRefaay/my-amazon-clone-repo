import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/GlobalState';
import Page from '../components/Page';
import Header from '../components/Header';
import ProductsList from '../components/ProductsList';
import Divider from '../components/Divider';
import { getBasketValue } from '../context/AppReducer';
import CurrencyFormat from 'react-currency-format';
import axios from '../components/axios';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';

const Payment = () => {
	const stripe = useStripe();
	const elements = useElements();
	const navigate = useNavigate();
	const { basket, user, dispatch } = useAuth();
	const [clientSecret, setClientSecret] = useState('');
	const [error, setError] = useState(null);
	const [processing, setProcessing] = useState(false);
	const [succeeded, setSucceeded] = useState(false);
	const [disabled, setDisabled] = useState(true);

	useEffect(() => {
		const getClientSecret = async () => {
			const response = await axios({
				method: 'post',
				url: `/payments/create?total=${getBasketValue(basket) * 100}`,
			});
			setClientSecret(response.data.clientSecret);
			return response;
		};
		getClientSecret();
	}, [basket]);

	const handleChange = e => {
		setDisabled(e.empty);
		setError(error ? error.message : '');
	};

	const handleSubmit = async e => {
		e.preventDefault();

		setProcessing(true);

		const payload = await stripe
			.confirmCardPayment(clientSecret, {
				payment_method: {
					card: elements.getElement(CardElement),
				},
			})
			.then(({ paymentIntent }) => {
				const ref = doc(db, 'users', user?.uid, 'orders', paymentIntent?.id);
				setDoc(ref, {
					basket: basket,
					amount: paymentIntent.amount,
					created: paymentIntent.created,
				});
				setSucceeded(true);
				setError(null);
				setProcessing(false);
				dispatch({ type: 'EMPTY_BASKET' });
				navigate('/orders', { replace: true });
			});
	};

	return (
		<Page
			title="Payment"
			content={
				<>
					<Header />
					<div className="p-8 w-full bg-white">
						<h3 className="text-2xl text-center font-bold">{`Checkout ${basket.length} items`}</h3>
						<Divider thickness="1px" marginTop="16px" marginBottom="16px" />
						<div className=" my-6 flex flex-col sm:flex-row">
							<div className="w-1/5">
								<strong>Delivery Address</strong>
							</div>
							<div className="w-4/5">
								<p>{user?.email}</p>
								<p>6 October, Giza, Egypt</p>
							</div>
						</div>
						<Divider thickness="1px" marginTop="16px" marginBottom="16px" />
						<div className="flex flex-col sm:flex-row justify-between">
							<div className="w-1/5">
								<strong>Review items and delivery</strong>
							</div>
							<div className="w-4/5">
								<ProductsList list={basket} />
							</div>
						</div>
						<Divider thickness="1px" marginTop="16px" marginBottom="16px" />
						{/* payment method */}
						<div className="flex flex-col sm:flex-row justify-between">
							<div className="w-1/5">
								<strong>Payment Method</strong>
							</div>
							<div className="w-4/5">
								<form onSubmit={handleSubmit}>
									<CardElement onChange={handleChange} />

									<h4 className="text-sm sm:text-xl font-medium ">
										Order Total:{' '}
										{
											<CurrencyFormat
												className="font-semibold text-xl"
												value={getBasketValue(basket).toFixed(2)}
												displayType="text"
												thousandSeparator={true}
												prefix="$"
											/>
										}
									</h4>
									<button
										type="submit"
										className="py-1 px-4 w-full mt-4 mb-4 text-sm rounded-md bg-yellow-400"
										disabled={processing || disabled || succeeded}
									>
										<span>{processing ? 'Processing' : 'Buy Now'}</span>
									</button>
									{error && <div>{error}</div>}
								</form>
							</div>
						</div>
					</div>
				</>
			}
		/>
	);
};

export default Payment;
