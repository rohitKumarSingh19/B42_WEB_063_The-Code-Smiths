import './App.css'
import Footer from './Components/Footer'
import { Navbar } from './Components/Navbar';
import Banner from './Pages/Banner'
import { Routes, Route } from "react-router-dom";
import ProductSection from './Pages/Products/ProductSection';
import ProductDetails from './Pages/ProductDetails';

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Routes>
        <Route path="/" element={<ProductSection />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/cart" element={<h1>Cart</h1>} />
        <Route path="/profile" element={<h1>Profile</h1>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
