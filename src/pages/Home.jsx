import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <h1>Welcome to neoG Food Ordering App</h1>
      <button>
        <NavLink to="/menu">Menu</NavLink>
      </button>
    </>
  );
};
