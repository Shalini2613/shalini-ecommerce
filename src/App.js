import "./App.css";
import { BrowserRouter, Routes, Route, HashRouter, useLocation } from "react-router-dom";

import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
// import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Layout from "./Layout";

function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/productList" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;
