import { ADD_TO_CART } from "../actions/ActionProduct";
import { REMOVE_FROM_CART } from "../actions/productActions";

export default function cartReducer(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case REMOVE_FROM_CART:
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
}
