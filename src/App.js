import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import AboutPage from "./components/AboutPage/AboutPage";
import BookTablePage from "./components/BookTablePage/BookTablePage";
import ContactUsPage from "./components/ContactUsPage/ContactUsPage";
import CartPage from "./components/CartPage/CartPage";
import MenuPage from "./components/MenuPage/MenuPage";
import ServicesPage from "./components/ServicesPage/ServicesPage";
import NavBar from "./components/NavBar";
import Admin from "./components/Admin/Admin";
import Bookings from "./components/Admin/Bookings";
import Contacts from "./components/Admin/Contacts";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAction } from "./actions/CartActions";
import { selectCart } from "./reducers/CartReducer";


function App() {

  let cart = useSelector(selectCart);

  const dispatcher = useDispatch();
  useEffect(() => {
    dispatcher(fetchAction());
  }, []);
  return (
    <div className="container-xxl bg-white p-0">
      <NavBar cart={cart.length} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/service" element={<ServicesPage />} />
        <Route path="/cart" element={<CartPage cart={cart} />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/book" element={<BookTablePage />} />
        <Route path="/admin" element={<Admin />}>
          <Route path="bookings" element={<Bookings />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>

      </Routes>
    </div>

  );
}

export default App;
