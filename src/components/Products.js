import React from 'react';
import { ProductContext } from '../contexts/ProductContext'

// Components
import Product from './Product';
import { from } from 'rxjs';

const Products = () => {
	const { products, addItem } = React.useContext(ProductContext)
	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
