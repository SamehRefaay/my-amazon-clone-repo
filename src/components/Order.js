import React from 'react';
import CurrencyFormat from 'react-currency-format';
import ProductsList from './ProductsList';
import moment from 'moment';

const Order = ({ order }) => {
	return (
		<div className="order">
			<h2>Order</h2>
			<p>{moment.unix(order.data.created).format('MMMM DD YYYY h:mma')}</p>
			<p className="order-id">
				<small>{order.id}</small>
			</p>

			<ProductsList list={order?.data?.basket} hiddenButton />

			<CurrencyFormat
				renderText={value => (
					<>
						<h3 className="order-total">Order Total: {value}</h3>
					</>
				)}
				decimalScale={2}
				value={order?.data?.amount * 100}
				displayType={'text'}
				thousandSeparator={true}
				prefix={'$'}
			/>
		</div>
	);
};

export default Order;
