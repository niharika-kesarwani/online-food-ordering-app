/* eslint-disable react/jsx-key */
import { useMenu } from "../main";
import { FoodCard } from "../components/FoodCard";

export const Menu = () => {
  const {
    handleCheckboxInput,
    handleTextInput,
    handleSortInput,
    sortFiltered,
  } = useMenu();

  return (
    <>
      <h2>Filters:</h2>
      <input
        placeholder="Search food here"
        type="text"
        onChange={(e) => handleTextInput(e.target)}
      />
      <label>
        <input
          type="checkbox"
          value="veg"
          onChange={() => handleCheckboxInput("is_vegetarian")}
        />
        Veg
      </label>
      <label>
        <input
          type="checkbox"
          value="spicy"
          onChange={() => handleCheckboxInput("is_spicy")}
        />
        Spicy
      </label>
      <label>
        <input
          type="radio"
          value="lth"
          name="radio"
          onChange={() => handleSortInput("lth")}
        />
        Sort (price) Low to High{" "}
      </label>
      <label>
        <input
          type="radio"
          value="htl"
          name="radio"
          onChange={() => handleSortInput("htl")}
        />
        Sort (price) High to Low{" "}
      </label>
      <h2>Menu</h2>
      <ul>
        {sortFiltered?.map((displayItem) => {
          return <FoodCard displayItem={displayItem} />;
        })}
      </ul>
    </>
  );
};
