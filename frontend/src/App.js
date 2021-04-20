import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/Home';
import ProductDetails from './components/product/ProductDetails';

function App() {
	return (
		<Router>
			<div className='App'>
				<Header />
				<div className='container container-fluid'>
					<Route exact path='/' component={Home} />
					<Route path='/search/:keyword' component={Home} />
					<Route exact path='/product/:id' component={ProductDetails} />
				</div>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
