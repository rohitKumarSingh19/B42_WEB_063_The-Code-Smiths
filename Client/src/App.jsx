import './App.css';
import Footer from './Components/Footer';
import { Navbar } from './Components/Navbar';
import Banner from './Pages/Banner';
import { Routes, Route } from "react-router-dom";

import WishList from './Pages/WishList';
import Profile from './Pages/Profile';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import ProtectedRoute from './routes/ProtectedRoute';
// import AuthProvider from './context/AuthProvider';
import Login from './Pages/Login';



import ProductSection from './Pages/Products/ProductSection';
import ProductDetails from './Pages/ProductDetails';
import BusinessAccount from './Pages/BusinessAccount';
import SellProductForm from './Pages/SellProductForm';
import AddToCart from './Pages/Section/ShoppingCart';


function App() {
  return (
    <>
      <Navbar />
      <Banner />

      <Routes>
        <Route path="/" element={<ProductSection />} />
        <Route path="/wishlist" element={<ProtectedRoute><WishList /></ProtectedRoute>} />
        {/* <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} /> */}
        <Route path='/profile' element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/cart" element={<AddToCart />} />
        <Route path="/profile" element={<h1>Profile</h1>} />
        <Route path="/business-account" element={<BusinessAccount />} />
        <Route path="/product-form" element={<SellProductForm />} />
      </Routes>
      <Footer />

    </>
  )
}

export default App
