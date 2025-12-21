import { combineReducers } from "redux";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import wishlistReducer from "./wishlistReducer";

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  wishlist: wishlistReducer
});

export default rootReducer;
