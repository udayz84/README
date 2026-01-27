import {createContext, useState} from 'react'

export const CartContext = createContext();



export const CartContextProvider = ({children}) => {
    

    const [cart, setCart] = useState({});

    const addToCart = (item) => {
      setCart(prev => ({
        ...prev,
        [item]: (prev[item] || 0) + 1   // 🔥 safe + correct
      }));
    };
    
      
      const removeFromCart = (item) => {
        setCart(prev => {
          const newCart = { ...prev };
      
          if (newCart.item > 1) {
            newCart.item = newCart.item - 1;
          } else {
            delete newCart.item;        // 🔥 remove item completely
          }
      
          return newCart;
        });
      };


    console.log(cart);
    return <CartContext.Provider value={{cart,addToCart,removeFromCart}}>{children}</CartContext.Provider>;
};

export default CartContext;
