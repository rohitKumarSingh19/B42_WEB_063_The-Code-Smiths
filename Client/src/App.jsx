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



function App() {
  return (
    <>

      <Navbar />
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />


        <Route path="/wishlist" element={<ProtectedRoute><WishList /></ProtectedRoute>} />
        <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
        <Route path='/profile' element={<ProtectedRoute><Profile /></ProtectedRoute>} />


        {/* <Route path="/login" element={<Register />} /> */}
        <Route path="/login" element={<Login />} />

      </Routes>
      <Footer />

    </>
  )
}

export default App
