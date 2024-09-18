import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems(prevItems => [...prevItems, item]);
  };

  const incrementQuantity = (id) => {
    setCartItems(prevItems => {
      const updatedItems = prevItems.map(item => 
        item.id === id 
          ? { ...item, quantity: (item.quantity || 0) + 1 } 
          : item
      );
      return updatedItems;
    });
  };

  const decrementQuantity = (id) => {
    setCartItems(prevItems => {
      const updatedItems = prevItems.map(item => 
        item.id === id && item.quantity > 1 
          ? { ...item, quantity: item.quantity - 1 } 
          : item
      );
      return updatedItems.filter(item => item.quantity > 0);
    });
  };

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * (item.quantity || 1);
  }, 0);

  const totalQuantity = cartItems.reduce((total, item) => {
    return total + (item.quantity || 1);
  }, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, incrementQuantity, decrementQuantity, totalPrice, totalQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
