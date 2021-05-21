import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';

import MetaData from '../layout/MetaData';
import Loader from '../layout/Loader';
import Sidebar from './Sidebar';

export default function Dashboard() {
	return (
		<Fragment>
			<div className='row'>
				<div className='col-12 col-md-2'>
					<Sidebar />
				</div>
            <div className="col-12 col-md-2">
               <h2>Dashboard</h2>
            </div>

			</div>
		</Fragment>
	);
}
