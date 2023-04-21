/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    cart.includes(item) ? null : setCart((cart) => [...cart, item]);
  };

  const isItemInCart = (item) => cart?.find(({ id }) => id === item.id);

  const totalDeliveryTimeInCart = cart?.reduce(
    (total, { delivery_time }) => total + delivery_time,
    0
  );

  const totalPriceInCart = cart?.reduce((total, { price }) => total + price, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        isItemInCart,
        totalDeliveryTimeInCart,
        totalPriceInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
