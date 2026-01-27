import {useContext} from 'react'
import {CartContext} from '../context/Cartcontext'

function CartItem(props) {
    const { id,productName, price,productImage} = props.data;
    const {cart, addToCart, removeFromCart} = useContext(CartContext);
    return (
        <div className='cart-item-container'>
            <div className='cart-item'>
                <img src={productImage} alt={productName} />
                <h2>{productName}</h2>
                <p>{price}</p>
                <button className='cart-item-button' onClick={() => removeFromCart(id)}>-</button>
                <p>Quantity: {cart[id]}</p>
                <button className='cart-item-button' onClick={() => addToCart(id)}>+</button>
            </div>
        </div>
    );
}
export default CartItem;