// Cart.js
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeFromCart } from "../redux/actions/productActions";
import * as bootstrap from "bootstrap";
import { useRef } from "react";

export default function Cart() {
  const cart = useSelector(state => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
    const toastRef = useRef(null);
  const backtocart = () => {
    navigate("/productList");
  }
  const showToast = () => {
      const toast = new bootstrap.Toast(toastRef.current);
      toast.show();
    };
  
    const handleRemove = (id) => {
      dispatch(removeFromCart(id));
      showToast();
    };
  return (
    <div className="container mt-3">
      <h3>Cart</h3>
      {cart.length === 0 && <p>No items in Cart</p>}

      {cart.map((item, i) => 
        <div style={{border:'1px solid black', margin: '10px 0px'}} className="p-1">
            <img src={item.image} alt={item.title} className="card-img-top p-1" height="100" style={{width: '100px'}}/>
            <p key={i}>{item.title}</p>
            <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleRemove(item.id)}
                      >Remove</button>
        </div>
      )}
      <button onClick={()=>backtocart()} className="btn btn-sm btn-primary">Back</button>


      {/* TOAST FOR REMOVING THE ITEM FROM CART*/}
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
          <div className="toast-body">Item removed from cart</div>
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
