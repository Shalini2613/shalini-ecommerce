import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, addToWishlist } from "../redux/actions/ActionProduct";
import { FaHome, FaShoppingCart, FaArrowLeft, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const product = useSelector((state) =>
    state.products.list.find((p) => p.id === Number(id))
  );

  if (!product) {
    return <div className="container mt-3">Loading...</div>;
  }
  const backtocart = () =>{
    navigate("/")
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-5">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid"
          />
        </div>

        <div className="col-md-7">
          <h3>{product.title}</h3>
          <h4 className="text-success">₹ {product.price}</h4>
          <p>{product.description}</p>

          <button
            className="btn btn-success me-2"
            onClick={() => dispatch(addToCart(product))}
          >
            Add to Cart
          </button>

          <button
            className="btn btn-warning me-2"
            onClick={() => dispatch(addToWishlist(product))}
          >
            Add to Wishlist
          </button>
          <button onClick={()=>backtocart()} className="btn btn-primary">
             <Link to="/" title="Back to Home" className="me-1">
    <FaArrowLeft size={20} color="white" />
  </Link>Home</button>
        </div>
      </div>
    </div>
  );
}
