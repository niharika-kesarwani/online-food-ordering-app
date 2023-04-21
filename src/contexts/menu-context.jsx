/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { fakeFetch } from "../data/fakeFetch";

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [food, setFood] = useState([]);

  const getFood = async () => {
    try {
      const {
        status,
        data: { menu },
      } = await fakeFetch("https://example.com/api/menu");
      if (status === 200) {
        setFood(menu);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getFood();
  }, []);

  const inputHandler = (inputTarget) =>
    food.filter(({ name }) =>
      name.toLowerCase().includes(inputTarget.value.toLowerCase())
    );

  const checkBoxHandler = (inputTarget) => {
    const isChecked = inputTarget.checked;
    if (isChecked === false) {
      return food;
    }
    switch (inputTarget.value) {
      case "veg":
        return food.filter(({ is_vegetarian }) => is_vegetarian);
      case "spicy":
        return food.filter(({ is_spicy }) => is_spicy);
    }
  };

  const radioHandler = (inputTarget) => {
    switch (inputTarget.value) {
      case "lth":
        return [...food.sort((food1, food2) => food1.price - food2.price)];
      case "htl":
        return [...food.sort((food1, food2) => food2.price - food1.price)];
    }
  };

  return (
    <MenuContext.Provider
      value={{
        food,
        inputHandler,
        checkBoxHandler,
        radioHandler,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => useContext(MenuContext);
