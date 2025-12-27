import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";

const Layout = ({ children }) => {
  const location = useLocation();

  // Hide navbar ONLY on login page
  const hideNavbar = location.pathname === "/";

  return (
    <>
      {!hideNavbar && <Navbar />}
      {children}
    </>
  );
};

export default Layout;
