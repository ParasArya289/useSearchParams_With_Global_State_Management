import { createContext, useContext, useEffect, useReducer } from "react";
import { fitlerReducer, initFilterState } from "../reducer/filterReducer";
import { useSearchParams } from "react-router-dom";
export const filterContext = createContext();

export const FilterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(fitlerReducer, initFilterState);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    dispatch({
      type: "INIT_FILTER",
      payload: {
        category: searchParams.getAll("category"),
        sort: searchParams.getAll("sort"),
      },
    });
  }, []);

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
