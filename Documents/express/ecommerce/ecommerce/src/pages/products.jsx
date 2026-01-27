import React from 'react'
import { PRODUCTS } from '../Products'
import  Product from '../components/Product'
function Products() {
  // Safety check for PRODUCTS
  if (!PRODUCTS || PRODUCTS.length === 0) {
    return (
      <div className='shop'>
        <h1>Ecommerce Store</h1>
        <p>No products available</p>
      </div>
    );
  }

  return (
   <div className='shop'>
    <h1>Ecommerce Store</h1>
    <h3>Groceries, Furniture, Electronics, more...</h3>
    <div className='products'>
       {PRODUCTS.map((product)=>{
        return (
            <Product data={product} key={product.id} />
        );
      })}
    </div>
  </div>
);
}

export default Products;