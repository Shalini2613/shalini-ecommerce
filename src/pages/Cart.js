// Cart.js
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const cart = useSelector(state => state.cart);
  const navigate = useNavigate();
  const backtocart = () => {
    navigate("/");
  }
  return (
    <div className="container mt-3">
      <h3>Cart</h3>
      {cart.length === 0 && <p>No items in Cart</p>}

      {cart.map((item, i) => 
        <div style={{border:'1px solid black', margin: '10px 0px'}} className="p-1">
            <img src={item.image} alt={item.title} className="card-img-top p-1" height="100" style={{width: '100px'}}/>
            <p key={i}>{item.title}</p>
        </div>
      )}
      <button onClick={()=>backtocart()} className="btn btn-sm btn-primary">Back</button>
    </div>
  );
}
