import React from 'react';
import { Helmet } from 'react-helmet';

export default function MetaData({title}) {
   return (
      <Helmet>
         <title>{`ShoppingCart | ${title}`}</title>
      </Helmet>
   )
}
