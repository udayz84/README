import React from 'react'
import './Product.css'
import { useContext } from 'react';
import {CartContext} from '../context/Cartcontext';


function Product( props) {
  const {cart,addToCart,removeFromCart} = useContext(CartContext);
    
  return (
    <div className='product'>  
     <div className='product-container'>
            <img src={props.data.productImage} alt={props.data.productName} />
            <div className='product-info'>
                <p className='title'>{props.data.productName}</p>
                <p className='price'>${props.data.price}</p>
            </div>
            <button className='product-button' onClick={()=> addToCart(props.data.id)} >Add to Cart({cart[props.data.id] || 0})</button>
        </div>
    </div>
  );
} 
export default Product;