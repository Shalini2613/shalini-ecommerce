import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const cartCount = useSelector((state) => state.cart.length);
  const wishCount = useSelector((state) => state.wishlist.length);

  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <Link to="/" className="navbar-brand">
        Shalini Shop
      </Link>

      <div>
        <Link to="/cart" className="btn btn-outline-light me-2">
          Cart ({cartCount})
        </Link>
        <Link to="/wishlist" className="btn btn-outline-light">
          Wishlist ({wishCount})
        </Link>
      </div>
    </nav>
  );
}
