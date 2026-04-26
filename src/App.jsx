import React, { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';

export default function App() {
  const [showProductList, setShowProductList] = useState(false);

  return (
    <div className="app-container">
      {!showProductList ? (
        <div className="hero">
          <h1>Paradise Nursery</h1>
          <p>Bring nature home with our beautiful plants</p>
          <button onClick={() => setShowProductList(true)}>
            Get Started
          </button>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
}
