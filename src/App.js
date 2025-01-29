import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/header/Header';
import Home from './components/screens/home/home.jsx';
import Checkout from './components/screens/checkout/Checkout';
import Profile from './components/screens/profile/Profile';

function App() {
    return (
        <CartProvider>
            <Router>
                <div className="app-container">
                    <Header />
                    <main className="main-content">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/checkout" element={<Checkout />} />
                            <Route path="/perfil" element={<Profile />} />
                        </Routes>
                    </main>
                </div>
            </Router>
        </CartProvider>
    );
}

export default App;