import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product, addCart, addWish }) {
  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100" style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px", border: 'none' }}>
        <img src={product.image} alt={product.title} className="card-img-top p-3" height="200" />
        <div className="card-body">
          <h6>{product.title}</h6>
          <p>₹ {product.price}</p>
          <Link to={`/product/${product.id}`} className="btn btn-sm btn-info me-2">View</Link>
          <button onClick={addCart} className="btn btn-sm btn-success me-2">Cart</button>
          <button onClick={addWish} className="btn btn-sm btn-warning">Wish</button>
        </div>
      </div>
    </div>
  );
}
