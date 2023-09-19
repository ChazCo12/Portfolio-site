import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../assets/reducer/reducer";

const pokemonstate = {
  name: "",
  sprite: "",
  popup: false,
};
const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, pokemonstate);

  const fetchPokemon = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch({ type: "SET_POKEMON", payload: data });
    } catch (error) {}
  };

  const closePopup = () => {
    dispatch({ type: "CLOSE_POPUP" });
  };

  const showPopup = () => {
    dispatch({ type: "SHOW_POPUP" });
  };
  return (
    <ProductsContext.Provider
      value={{ ...state, fetchPokemon, closePopup, showPopup }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

// custom hook to call all of my variables with in the othe rparts of the project
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
