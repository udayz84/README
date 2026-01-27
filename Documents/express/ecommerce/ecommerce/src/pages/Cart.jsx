import React from 'react'
import {PRODUCTS} from '../products'
import {CartContext} from '../context/Cartcontext'
import {useContext} from 'react'
import './Cart.css'
import CartItem from '../components/CartItem'
function Cart() {
  const {cart} = useContext(CartContext);
  return (
    <div className='cart'>
      <h1> your Cart items</h1>
    <div className='cart-items'>
      {PRODUCTS.map(product =>{
        if(cart[product.id] > 0){
          return (
            <CartItem data={product}/>
          )
        }
      })}
    </div>
       
          
    </div>
  )
}

export default Cart;
