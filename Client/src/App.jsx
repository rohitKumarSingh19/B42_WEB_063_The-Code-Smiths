import './App.css';
import Footer from './Components/Footer';
import { Navbar } from './Components/Navbar';
import Register from './Pages/Authentication/Register';
import Banner from './Pages/Banner';
import { Routes, Route } from "react-router-dom";
import WishList from './Pages/WishList';
import Profile from './Pages/Profile';
import Cart from './Pages/Cart';
import Home from './Pages/Home';

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/wishlist" element={<WishList/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/login" element={<Register/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
