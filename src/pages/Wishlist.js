import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Wishlist() {
  const wishlist = useSelector((state) => state.wishlist);
  const navigate = useNavigate()
  const backtocart = () => {
    navigate("/");
  }

  return (
    <div className="container mt-3">
      <h3>Wishlist</h3>

      {wishlist.length === 0 && <p>No items in wishlist</p>}

      {wishlist.map((item, index) => (
        <div key={index} className="border p-2 mb-2">
          <h6>{item.title}</h6>
          <p>₹ {item.price}</p>
        </div>
      ))}
            <button onClick={()=>backtocart()} className="btn btn-sm btn-primary">Back</button>

    </div>
  );
}
