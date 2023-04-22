/* eslint-disable react/jsx-key */
import { FoodCard } from "../components/FoodCard";
import { useCart } from "../main";

export const Cart = () => {
  const { cart, totalDeliveryTimeInCart, totalPriceInCart, displayPrice } =
    useCart();

  return (
    <>
      <h2>Cart</h2>
      <h2>Total Delivery Time: {totalDeliveryTimeInCart ?? 0} minutes</h2>
      <h2>Total Price: Rs {totalPriceInCart}</h2>
      <button onClick={() => displayPrice()}>Apply coupon</button>
      <ul>
        {cart.map((item) => (
          <FoodCard displayItem={item} cart />
        ))}
      </ul>
    </>
  );
};
