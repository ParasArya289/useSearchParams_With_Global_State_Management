export const initFilterState = {
  category: [],
  sort: []
};
export const fitlerReducer = (state, action) => {
  switch (action.type) {
    case "INIT_FILTER":
      return action.payload;

    case "UPDATE_CATEGORY_CHECKED":
      return {
        ...state,
        category: [...state.category, action.payload]
      };
    case "UPDATE_CATEGORY_UNCHECKED":
      return {
        ...state,
        category: state.category.filter((c) => c !== action.payload)
      };

    case "CLEAR_CATEGORY":
      return {
        ...state,
        category: []
      };

    case "UPDATE_SORT":
      return {
        ...state,
        sort: action.payload
      };
    case "CLEAR_SORT":
      return {
        ...state,
        sort: []
      };
    default:
      return state;
  }
};
