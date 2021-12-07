import './App.css';
import Login from './pages/Auth/Login/Login';
import ContactUs from './pages/ContactUs/ContactUs';
import Home from './pages/Home/Home';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import ShopGrid from './pages/ShopGrid/ShopGrid';
import NotFound from "./pages/NotFound/NotFound";
import {
  BrowserRouter as Router,

  Route,
  Routes,
  Link
} from "react-router-dom";
import Menu from './pages/Menu';

function App() {
  return (
    <div className="App">
      <Router>

        <Routes>
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/shop" element={<ShopGrid />} />
          <Route path="/home" element={<Home />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="/" element={<Menu />} />
        </Routes>
      </Router>
      {/* <Home /> */}
      {/* <ShopGrid /> */}
      {/* <ProductDetails /> */}
      {/* <Login /> */}
      {/* <ContactUs /> */}
      {/* <NotFound /> */}
    </div>
  );
}

export default App;
