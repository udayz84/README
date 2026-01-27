import React from 'react'
import './Product.css'
function Product( props) {

    const{ productName, price, productImage } = props.data;
  return (
    <div className='product'>  
     <div className='product-container'>
            <img src={productImage} alt={productName} />
            <div className='product-info'>
                <p className='title'>{productName}</p>
                <p className='price'>${price}</p>
            </div>
            <button className='product-button'>Add to Cart</button>
        </div>
    </div>
  );
}
export default Product;