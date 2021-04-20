//**************** imports ****************//
import React, { useState } from 'react';

export default function Search({history}) {
	//**************** state values ****************//
   const [ keyword, setKeyword ] = useState('');
	//***************** functions ***************************//
   const searchHandler = (e) => {
      e.preventDefault();
      
      if (keyword.trim()) {
         history.push(`/search/${keyword}`);

      } else {
         history.push(`/`)
      }

   }
	return (
		<form onSubmit={searchHandler}>
			<div className='input-group'>
				<input
					type='text'
					id='search_field'
					className='form-control'
					placeholder='Enter Product Name ...'
               onChange={(e) => setKeyword(e.target.value)}
				/>
				<div className='input-group-append'>
					<button id='search_btn' className='btn'>
						<i className='fa fa-search' aria-hidden='true'></i>
					</button>
				</div>
			</div>
		</form>
	);
}
