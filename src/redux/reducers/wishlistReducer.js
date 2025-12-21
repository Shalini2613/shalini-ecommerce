import { ADD_TO_WISHLIST } from "../actions/ActionProduct";

export default function wishlistReducer(state = [], action) {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return [...state, action.payload];
    default:
      return state;
  }
}
