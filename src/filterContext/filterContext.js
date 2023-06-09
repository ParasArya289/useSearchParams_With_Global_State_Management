import { createContext, useContext, useEffect, useReducer } from "react";
import { fitlerReducer, initFilterState } from "../reducer/filterReducer";
import { useSearchParams } from "react-router-dom";
export const filterContext = createContext();

export const FilterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(fitlerReducer, initFilterState);
  const [_, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams(state);
  }, [state]);

  return (
    <filterContext.Provider value={{ state, dispatch }}>
      {children}
    </filterContext.Provider>
  );
};

export const useFilter = () => useContext(filterContext);
