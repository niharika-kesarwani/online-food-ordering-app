/* eslint-disable react/jsx-key */
import { useState } from "react";
import { useMenu } from "../main";
import { FoodCard } from "../components/FoodCard";

export const Menu = () => {
  const { food, inputHandler, checkBoxHandler, radioHandler } = useMenu();
  const [display, setDisplay] = useState(food);

  return (
    <>
      <h2>Filters:</h2>
      <input
        placeholder="Search food here"
        type="text"
        onChange={(e) => setDisplay(inputHandler(e.target))}
      />
      <label>
        <input
          type="checkbox"
          value="veg"
          onChange={(e) => setDisplay(checkBoxHandler(e.target))}
        />
        Veg
      </label>
      <label>
        <input
          type="checkbox"
          value="spicy"
          onChange={(e) => setDisplay(checkBoxHandler(e.target))}
        />
        Spicy
      </label>
      <label>
        <input
          type="radio"
          value="lth"
          name="radio"
          onChange={(e) => setDisplay(radioHandler(e.target))}
        />
        Sort (price) Low to High{" "}
      </label>
      <label>
        <input
          type="radio"
          value="htl"
          name="radio"
          onChange={(e) => setDisplay(radioHandler(e.target))}
        />
        Sort (price) High to Low{" "}
      </label>
      <h2>Menu</h2>
      <ul>
        {display.map((displayItem) => {
          return <FoodCard displayItem={displayItem} />;
        })}
      </ul>
    </>
  );
};
