import axios from "axios";

export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const ADD_TO_CART = "ADD_TO_CART";
export const ADD_TO_WISHLIST = "ADD_TO_WISHLIST";
export const REMOVE_FROM_WISHLIST = "REMOVE_FROM_WISHLIST"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const fetchProducts = () => async (dispatch) => {
  const res = await axios.get("https://fakestoreapi.com/products");
  dispatch({ type: FETCH_PRODUCTS, payload: res.data });
};

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product
});

export const addToWishlist = (product) => ({
  type: ADD_TO_WISHLIST,
  payload: product
});

export const removeFromWishlist = (id) => {
  return {
    type: "REMOVE_FROM_WISHLIST",
    payload: id,
  };
};

export const removeFromCart = (id) => {
    return {
      type : "REMOVE_FROM_CART",
      payload: id,
    }
  };
