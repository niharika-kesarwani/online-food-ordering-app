import { NavLink } from "react-router-dom";
import { useCart } from "../main";

export const Header = () => {
  const { cart } = useCart();
  return (
    <>
      <div>
        <NavLink className="navlink" to="/">
          Home
        </NavLink>
        <NavLink className="navlink" to="/menu">
          Menu
        </NavLink>
        <NavLink className="navlink" to="/cart">
          Cart ({cart.length})
        </NavLink>
      </div>
    </>
  );
};
