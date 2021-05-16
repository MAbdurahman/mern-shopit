import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function ProtectedRoute({ isAdmin, component: Component, ...rest }) {
	//**************** variables ****************//
   const { isAuthenticated, loading, user } = useSelector(state => state.auth);

	return (
		<Fragment>
			{loading === false && (
				<Route
					{...rest}
					render={props => {
						if (isAuthenticated === false) {
							return <Redirect to='/login' />;
						}

						if (isAdmin === true && user.role !== 'admin') {
							return <Redirect to='/' />;
						}

						return <Component {...props} />;
					}}
				/>
			)}
		</Fragment>
	);
}
