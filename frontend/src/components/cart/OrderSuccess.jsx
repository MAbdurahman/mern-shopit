import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import MetaData from '../layout/MetaData';

export default function OrderSuccess() {
	return (
		<Fragment>
			<MetaData title={'Order Success'} />

			<div className='row justify-content-center'>
				<div className='col-6 mt-5 text-center'>
					<img
						className='my-5 img-fluid d-block mx-auto'
						src='/images/order_success.png'
						alt='Order Success'
						width='200'
						height='200'
					/>

					<h3>Your Order has been placed successfully.</h3>

					<Link className='order_success-btn' to='/orders/me'>Go to Orders</Link>
				</div>
			</div>
		</Fragment>
	);
}
