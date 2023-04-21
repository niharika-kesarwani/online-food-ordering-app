import { NavLink } from "react-router-dom";
import { useCart } from "../main";

/* eslint-disable react/prop-types */
export const FoodCard = ({ displayItem, cart }) => {
  const { addToCart, isItemInCart } = useCart();
  const { id, name, description, price, image, delivery_time } = displayItem;
  return (
    <>
      <li key={id}>
        <img src={image} />
        <p>Name: {name}</p>
        <p>
          <strong>Description: </strong>
          {description}
        </p>
        <p>Price: {price}</p>
        <p>Delivery Time: {delivery_time}</p>
        {!cart && (
          <button onClick={() => addToCart(displayItem)}>
            {isItemInCart(displayItem) ? (
              <NavLink to="/cart">Go To Cart</NavLink>
            ) : (
              "Add To Cart"
            )}
          </button>
        )}
      </li>
    </>
  );
};
