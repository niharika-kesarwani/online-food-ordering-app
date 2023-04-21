/* eslint-disable react/jsx-key */
import { useState } from "react";
import { FoodCard } from "../components/FoodCard";
import { useCart } from "../main";

export const Cart = () => {
  const { cart, totalDeliveryTimeInCart, totalPriceInCart } = useCart();
  const [applyDiscount, setApplyDiscount] = useState(false);

  return (
    <>
      <h2>Cart</h2>
      <h2>Total Delivery Time: {totalDeliveryTimeInCart ?? 0} minutes</h2>
      <h2>
        Total Price: Rs{" "}
        {applyDiscount ? totalPriceInCart - 5 : totalPriceInCart}
      </h2>
      <button onClick={() => setApplyDiscount(true)}>Apply coupon</button>
      <ul>
        {cart.map((item) => (
          <FoodCard displayItem={item} cart />
        ))}
      </ul>
    </>
  );
};
