import { Routes, Route } from "react-router-dom";

// ✅ Public Pages

// ✅ User Pages

// ✅ Admin Pages
import { Navbar } from "../Components/Navbar";
import Footer from "../Components/Footer";
import Banner from "../Pages/Banner";
import ProductSection from "../Pages/Products/ProductSection";
import ProductDetails from "../Pages/ProductDetails";
import Login from "../Pages/Login";
import ShoppingCart from "../Pages/Section/ShoppingCart";
import Profile from "../Pages/Profile";
import BusinessAccount from "../Pages/BusinessAccount";
import SellProductForm from "../Pages/SellProductForm";
import AdminPanel from "../Pages/AdminPanel/AdminProductList";
import Wishlist from "../Pages/Section/Wishlist";

export default function AppRoutes() {
  return (
    <>
      <Navbar />
      <Banner />

      <Routes>
        {/* 🔹 Public Routes */}
        <Route path="/" element={<ProductSection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product-details" element={<ProductDetails />} />

        {/* 🔹 User Routes */}
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/business-account" element={<BusinessAccount />} />
        <Route path="/product-form" element={<SellProductForm />} />

        {/* 🔹 Admin Routes */}
        <Route path="/admin-panel" element={<AdminPanel />} />
      </Routes>

      <Footer />
    </>
  );
}
