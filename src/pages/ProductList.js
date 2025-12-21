import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, addToCart, addToWishlist } from "../redux/actions/ActionProduct";
import ProductCard from "../components/ProductCard";

export default function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.list);
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="container mt-3">
      <input
        className="form-control mb-3"
        placeholder="Search products..."
        onChange={e => setSearch(e.target.value)}
      />

      <div className="row">
        {products
          .filter(p => p.title.toLowerCase().includes(search.toLowerCase()))
          .map(product => (
            <ProductCard
              key={product.id}
              product={product}
              addCart={() => dispatch(addToCart(product))}
              addWish={() => dispatch(addToWishlist(product))}
            />
          ))}
      </div>
    </div>
  );
}
