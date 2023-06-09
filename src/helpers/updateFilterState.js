export const updateCategoryParams = (event, dispatch) => {
  const { name, checked } = event.target;
  if (checked) {
    dispatch({ type: "UPDATE_CATEGORY_CHECKED", payload: name });
  } else {
    dispatch({ type: "UPDATE_CATEGORY_UNCHECKED", payload: name });
  }
};
export const updateSortParams = (event, dispatch) => {
  const { value } = event.target;
  dispatch({ type: "UPDATE_SORT", payload: value });
};
export const clearSortParams = (dispatch) => {
  dispatch({ type: "CLEAR_SORT" });
};
export const clearCategoryParams = (dispatch) => {
  dispatch({ type: "CLEAR_CATEGORY" });
};
