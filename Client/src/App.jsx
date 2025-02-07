import './App.css'
import Footer from './Components/Footer'
import { Navbar } from './Components/Navbar';
import Banner from './Pages/Banner'
import { Routes, Route } from "react-router-dom";
import ProductSection from './Pages/ProductSection';

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Routes>
        <Route path="/" element={<ProductSection />} />
        <Route path="/wishlist" element={<h1>Wishlist</h1>} />
        <Route path="/cart" element={<h1>Cart</h1>} />
        <Route path="/profile" element={<h1>Profile</h1>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
