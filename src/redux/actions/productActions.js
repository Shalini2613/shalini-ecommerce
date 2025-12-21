import axios from "axios";

export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const ADD_TO_CART = "ADD_TO_CART";
export const ADD_TO_WISHLIST = "ADD_TO_WISHLIST";

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
