import { FETCH_PRODUCTS } from "../actions/ActionProduct";

const initialState = {
  list: []
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, list: action.payload };
    default:
      return state;
  }
}
