// B42_WEB_063_The-Code-Smiths\Client\src\App.jsx
import './App.css';
import Footer from './Components/Footer';
import { Navbar } from './Components/Navbar';
import Banner from './Pages/Banner'; // Banner component
import { Routes, Route } from "react-router-dom";
import WishList from './Pages/WishList';
import Profile from './Pages/Profile';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import ProtectedRoute from './routes/ProtectedRoute';
import AuthSlidePage from './Pages/AuthSlidePage'; // AuthSlidePage component
// import WelcomePage from './Pages/WelcomePage';
import { useState } from 'react';

function App() {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

    const handleLoginSuccess = () => {
        setIsUserLoggedIn(true);
    };

    return (
        <>
            <Navbar isLoggedIn={isUserLoggedIn} />
            <Banner /> {/* Banner is rendered here, outside of Routes */}
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/welcome" element={<WelcomePage />} /> Welcome page route */}
                <Route path="/wishlist" element={<ProtectedRoute isLoggedIn={isUserLoggedIn}><WishList /></ProtectedRoute>} />
                <Route path="/cart" element={<ProtectedRoute isLoggedIn={isUserLoggedIn}><Cart /></ProtectedRoute>} />
                <Route path='/profile' element={<ProtectedRoute isLoggedIn={isUserLoggedIn}><Profile /></ProtectedRoute>} />

                {/* Use AuthSlidePage for both login and create account paths - pass onLoginSuccess */}
                <Route path="/login" element={<AuthSlidePage onLoginSuccess={handleLoginSuccess} />} />
                <Route path="/create-account" element={<AuthSlidePage onLoginSuccess={handleLoginSuccess} />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App