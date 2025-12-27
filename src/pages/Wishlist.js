import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeFromWishlist } from "../redux/actions/productActions";
import * as bootstrap from "bootstrap";
import { useRef } from "react";

export default function Wishlist() {
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toastRef = useRef(null);
  const backtocart = () => {
    navigate("/productList");
  };
  const showToast = () => {
    const toast = new bootstrap.Toast(toastRef.current);
    toast.show();
  };

  const handleRemove = (id) => {
    dispatch(removeFromWishlist(id));
    showToast();
  };

  return (
    <div className="container mt-3">
      <h3>Wishlist</h3>

      {wishlist.length === 0 && <p>No items in wishlist</p>}

      {wishlist.map((item, index) => (
        <div key={index} className="p-2" style={{ margin: "10px 0px", borderRadius: "4px",boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}>
          <h6>{item.title}</h6>
          <p>₹ {item.price}</p>
          <button
            className="btn btn-sm btn-danger"
            onClick={() => handleRemove(item.id)}
          >
            Remove
          </button>
        </div>
      ))}
      <button onClick={() => backtocart()} className="btn btn-primary">
        Back
      </button>


      {/* TOAST FOR REMOVING THE ITEM FROM WISHLIST*/}
      <div
        className="toast align-items-center text-white bg-primary border-0 position-fixed bottom-0 end-0 m-3"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        data-bs-animation="true"
        data-bs-delay="1000"
        ref={toastRef}
      >
        <div className="d-flex">
          <div className="toast-body">Item removed from wishlist</div>
          <button
            type="button"
            className="btn-close btn-close-white me-2 m-auto"
            data-bs-dismiss="toast"
          ></button>
        </div>
      </div>
    </div>
  );
}
