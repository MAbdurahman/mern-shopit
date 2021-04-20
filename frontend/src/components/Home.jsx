//**************** imports ****************//
import React, { Fragment, useEffect, useState } from 'react';
import Pagination from 'react-js-pagination';
import MetaData from './layout/MetaData';
import Loader from './layout/Loader'
import Product from './product/Product';
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import { getProducts } from '../actions/productActions';

export default function Home({match}) {
	//**************** state values ****************//
	const dispatch = useDispatch();
	const alert = useAlert();
	const [currentPage, setCurrentPage] = useState(1);
	const { error, loading, products, productsCount, resPerPage } = useSelector(
		state => state.products
	);
	const keyword = match.params.keyword;

	//***************** functions ***************************//
	useEffect(() => {
		if (error) {
			return alert.error(error);
		}
		dispatch(getProducts(keyword, currentPage));

	}, [dispatch, alert, error, keyword, currentPage ]);

	function setCurrentPageNo(pageNumber) {
		setCurrentPage(pageNumber);
	}
	
	return (
		<Fragment>
			{loading ? (
				<Loader />
			) : (
				<Fragment>
					<MetaData title={'Best Products Online'} />
					<h1 id='products_heading'>Latest Products</h1>
					<section id='products' className='container mt-5'>
						<div className='row'>
							{products &&
								products.map(product => (
									<Product key={product._id} product={product} />
								))}
						</div>
					</section>
					{resPerPage <= productsCount && (
						<div className='d-flex justify-content-center mt-5'>
							<Pagination
								activePage={currentPage}
								itemsCountPerPage={resPerPage}
								totalItemsCount={productsCount}
								onChange={setCurrentPageNo}
								nextPageText={'Next'}
								prevPageText={'Prev'}
								firstPageText={'First'}
								lastPageText={'Last'}
								itemClass='page-item'
								linkClass='page-link'
							/>
						</div>
					)}
				</Fragment>
			)}
		</Fragment>
	);
}
