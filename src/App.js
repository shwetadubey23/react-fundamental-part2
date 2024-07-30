
import React from 'react';
import './App.css';
import Products from './component/Products';
import CartProvider from './context/CartProvider'

function App() {
 
  return (
    <CartProvider>
      <Products/>
    </CartProvider>
  );
}

export default App;
