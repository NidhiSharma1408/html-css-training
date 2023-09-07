import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BookTablePage from "./pages/BookTablePage";
import ContactUsPage from "./pages/ContactUsPage";
import CartPage from "./pages/CartPage";
import MenuPage from "./pages/MenuPage";
import ServicesPage from "./pages/ServicesPage";
import NavBar from "./components/NavBar";
import { useState } from "react";


function App() {
  let [count, setCount] = useState(0);
  return (
    <div className="container-xxl bg-white p-0">
      <div className="container-xxl position-relative p-0">
        <NavBar cart={count} />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/service" element={<ServicesPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/book" element={<BookTablePage />} />
      </Routes>
    </div>
  );
}

export default App;
