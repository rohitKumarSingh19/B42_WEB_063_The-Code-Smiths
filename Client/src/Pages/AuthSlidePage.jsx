// B42_WEB_063_The-Code-Smiths\Client\src\Pages\AuthSlidePage.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from 'react-icons/fa';
import '../AuthSlideStyles.css';

// Dummy user database (in-memory for demonstration)
const dummyUsers = []; // Initialize as empty array initially

const AuthSlidePage = ({ onLoginSuccess }) => {
    const [isLoginActive, setIsLoginActive] = useState(true);
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [registerName, setRegisterName] = useState('');
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [authError, setAuthError] = useState('');
    const navigate = useNavigate();

    const handleToggleForm = () => {
        setIsLoginActive(!isLoginActive);
        setAuthError('');
    };

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        setAuthError('');

        // Dummy authentication logic (simulating API call)
        setTimeout(() => {
            const user = dummyUsers.find(u => u.email === loginEmail && u.password === loginPassword);
            if (user) {
                // Simulate successful login
                alert('Login Successful!'); // Replace with actual UI feedback
                onLoginSuccess(); // Call onLoginSuccess to update auth state in App.jsx
                navigate("/"); // Redirect to home page after login
            } else {
                setAuthError('Invalid email or password.');
            }
        }, 1000); // Simulate 1 second API call delay
    };

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        setAuthError('');

        // Dummy registration logic (simulating API call)
        setTimeout(() => {
            const emailExists = dummyUsers.some(u => u.email === registerEmail);
            if (emailExists) {
                setAuthError('Email already registered.');
            } else {
                // Simulate successful registration
                dummyUsers.push({ name: registerName, email: registerEmail, password: registerPassword });
                alert('Account created successfully! Please sign in.'); // Replace with better UI feedback
                setIsLoginActive(true); // Switch to login form after registration
                setAuthError(''); // Clear any errors
            }
        }, 1000); // Simulate 1 second API call delay
    };


    return (
        <div className="auth-slide-container">
            <div className={`auth-form-box ${isLoginActive ? 'login-active' : 'register-active'}`}>
                {/* Login Form */}
                <div className={`auth-form login-form ${isLoginActive ? 'active' : ''}`}>
                    <div className="auth-left bg-[#5edab5] text-white">
                        <div className="welcome-content">
                            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">Hello, Friend!</h1>
                            <p className="text-white mb-12 leading-relaxed text-lg opacity-80">Enter your personal details and start journey with us</p>
                            <button onClick={handleToggleForm} type="button" className="bg-white text-[#5edab5] font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-300 text-lg">Sign Up</button>
                        </div>
                    </div>
                    <div className="auth-right bg-white">
                        <div className="auth-form-content">
                            <h2 className="text-2xl font-bold text-gray-800 mb-10 text-center">Sign in to VendoraX</h2>
                            <div className="social-login flex justify-center space-x-6 mb-10">
                                <a href="#" className="social-icon">
                                    <FaFacebookF size={20} color="#777" />
                                </a>
                                <a href="#" className="social-icon">
                                    <FaGooglePlusG size={20} color="#777" />
                                </a>
                                <a href="#" className="social-icon">
                                    <FaLinkedinIn size={20} color="#777" />
                                </a>
                            </div>
                            <form className="auth-form-inputs" onSubmit={handleLoginSubmit}>
                                <input type="email" placeholder="Email" className="auth-input" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} required />
                                <input type="password" placeholder="Password" className="auth-input" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} required />
                                <a href="#" className="block text-right text-sm text-gray-600 hover:text-gray-800 mb-8">Forgot your password?</a>
                                {authError && isLoginActive && <p className="text-red-500 text-sm mt-2 text-center">{authError}</p>} {/* Display error for login */}
                                <button type="submit" className="auth-button bg-[#f06666] hover:bg-[#e05a5a]">Sign In</button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Register Form */}
                <div className={`auth-form register-form ${isLoginActive ? '' : 'active'}`}>
                    <div className="auth-left bg-[#5edbb4] text-white">
                        <div className="welcome-content">
                            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">Welcome Back!</h1>
                            <p className="text-white mb-12 leading-relaxed text-lg opacity-80">To keep connected with us please login with your personal info.</p>
                            <button onClick={handleToggleForm} type="button" className="bg-white text-[#5edbb4] font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-300 text-lg">Sign In</button>
                        </div>
                    </div>
                    <div className="auth-right bg-white">
                        <div className="auth-form-content">
                            <h2 className="text-2xl font-bold text-gray-800 mb-10 text-center">Create Account</h2>
                            <div className="social-login flex justify-center space-x-6 mb-10">
                                <a href="#" className="social-icon">
                                    <FaFacebookF size={20} color="#777" />
                                </a>
                                <a href="#" className="social-icon">
                                    <FaGooglePlusG size={20} color="#777" />
                                </a>
                                <a href="#" className="social-icon">
                                    <FaLinkedinIn size={20} color="#777" />
                                </a>
                            </div>
                            <form className="auth-form-inputs" onSubmit={handleRegisterSubmit}>
                                <input type="text" placeholder="Name" className="auth-input" value={registerName} onChange={(e) => setRegisterName(e.target.value)} required />
                                <input type="email" placeholder="Email" className="auth-input" value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value)} required />
                                <input type="password" placeholder="Password" className="auth-input" value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)} required />
                                {authError && !isLoginActive && <p className="text-red-500 text-sm mb-2">{authError}</p>} {/* Display error for registration */}
                                <button type="submit" className="auth-button bg-[#5edbb4] hover:bg-[#52c7a3]">Sign Up</button>
                                {authError && !isLoginActive && <p className="text-red-500 text-sm mt-2 text-center">{authError}</p>} {/* Display error for registration */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthSlidePage;