import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaHome, FaShoppingCart, FaHeart } from "react-icons/fa";

export default function Navbar() {
  const cartCount = useSelector((state) => state.cart.length);
  const wishCount = useSelector((state) => state.wishlist.length);

  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <Link to="/productList" className="navbar-brand">
        Shalini Shop
      </Link>

      <div>
        <Link to="/cart" className="btn btn-outline-light me-2">
         <Link to="/cart" title="Cart" className="me-1 mb-2">
            <FaShoppingCart size={16} color="white" />
          </Link>
          Cart {cartCount}
        </Link>
        <Link to="/wishlist" className="btn btn-outline-light">
        <Link to="/wishlist" title="Wishlist" className="me-1 mb-2">
      <FaHeart size={16} color="white" />
    </Link>
          Wishlist {wishCount}
        </Link>
      </div>
    </nav>
  );
}
