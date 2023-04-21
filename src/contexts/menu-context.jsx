/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { fakeFetch } from "../data/fakeFetch";

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [food, setFood] = useState([]);
  const [filters, setFilters] = useState({
    checkBox: [],
    textInput: "",
    sort: null,
  });

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

  const handleCheckboxInput = (type) => {
    filters?.checkBox?.includes(type)
      ? setFilters({
          ...filters,
          checkBox: filters?.checkBox?.filter(
            (checkboxFilter) => checkboxFilter !== type
          ),
        })
      : setFilters({ ...filters, checkBox: [...filters.checkBox, type] });
  };

  const handleTextInput = (inputTarget) =>
    setFilters({ ...filters, textInput: inputTarget.value });

  const handleSortInput = (sortInput) =>
    setFilters({ ...filters, sort: sortInput });

  const checkboxFiltered =
    filters?.checkBox?.length > 0
      ? food.filter((item) =>
          filters?.checkBox?.every((checkboxFilter) => item[checkboxFilter])
        )
      : food;

  const textFiltered =
    filters?.textInput?.length > 0
      ? checkboxFiltered?.filter(({ name }) =>
          name?.toLowerCase()?.includes(filters?.textInput?.toLowerCase())
        )
      : checkboxFiltered;

  const sortFiltered = filters?.sort
    ? textFiltered?.sort((item1, item2) =>
        filters?.sort === "lth"
          ? item1?.price - item2?.price
          : item2?.price - item1?.price
      )
    : textFiltered;

  return (
    <MenuContext.Provider
      value={{
        handleCheckboxInput,
        handleTextInput,
        handleSortInput,
        sortFiltered,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => useContext(MenuContext);
