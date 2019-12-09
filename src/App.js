import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import { ProductContext } from './contexts/ProductContext'
import { CartContext } from './contexts/CartContext'
// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	let initData = []

	if (window.localStorage.getItem('oldCart')) {
		initData = JSON.parse(window.localStorage.getItem('oldCart'))
	}
	const [cart, setCart] = useState(initData);
	React.useEffect(() => {
		window.localStorage.setItem('oldCart', JSON.stringify([...cart]))
	}, [cart])
	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item])
	};

	return (
		<ProductContext.Provider value={{ products, addItem }} >
			<CartContext.Provider value={cart}>
				<div className="App">
					<Navigation cart={cart} />

					{/* Routes */}
					<Route exact path="/" component={Products} />

					<Route
						path="/cart"
						render={() => <ShoppingCart cart={cart} />}
					/>
				</div>
			</CartContext.Provider>
		</ProductContext.Provider>
	);
}

export default App;
