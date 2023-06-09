import { useFilter } from "./filterContext/filterContext";
import {
  clearCategoryParams,
  clearSortParams,
  updateCategoryParams,
  updateSortParams
} from "./helpers/updateFilterState";
export const Filter = () => {
  const { state, dispatch } = useFilter();
  return (
    <form>
      <input
        type="checkbox"
        name="Mobile"
        checked={state.category.includes("Mobile")}
        onChange={(e) => updateCategoryParams(e, dispatch)}
      />{" "}
      <label>Mobile</label>
      <input
        type="checkbox"
        name="Accessories"
        checked={state.category.includes("Accessories")}
        onChange={(e) => updateCategoryParams(e, dispatch)}
      />
      <label>Accessories</label>
      <input
        type="checkbox"
        name="Laptop"
        checked={state.category.includes("Laptop")}
        onChange={(e) => updateCategoryParams(e, dispatch)}
      />
      <label>Laptop</label>
      <input
        type="checkbox"
        name="Watch"
        checked={state.category.includes("Watch")}
        onChange={(e) => updateCategoryParams(e, dispatch)}
      />
      <label>Watch</label>
      <input
        type="radio"
        name="sort"
        value="LTH"
        checked={state.sort.includes("LTH")}
        onChange={(e) => updateSortParams(e, dispatch)}
      />
      <label>Low To High</label>
      <input
        type="radio"
        name="sort"
        value="HTL"
        checked={state.sort.includes("HTL")}
        onChange={(e) => updateSortParams(e, dispatch)}
      />
      <label>High To Low</label>
      <p onClick={() => clearSortParams(dispatch)}>clear sort</p>
      <p onClick={() => clearCategoryParams(dispatch)}>clear category</p>
    </form>
  );
};
