import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Products from "./pages/Products";
import { ShopContextProvider } from "./context/shopContext";
import SingleProduct from "./pages/SingleProducts";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products/:id" element={<SingleProduct />} />
          </Routes>
          <Routes>
            <Route path="/login" element={<SignIn />} />
            <Route path="/register" element={<SignUp />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
