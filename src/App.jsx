import React from 'react';
import './App.css';

export default function App() {
  return (
    <div className="app-container">
      <nav className="navbar">
        <a href="#">Home</a>
        <a href="#plants">Plants</a>
        <a href="#cart">Cart</a>
      </nav>

      <div className="hero">
        <h1>Paradise Nursery</h1>
        <p>Bring nature home with our beautiful plants</p>
        <button>Get Started</button>
      </div>
    </div>
  );
}
