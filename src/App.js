
import React from 'react';
import './App.css';
import './index.css'
import Products from './component/Products';
import CartProvider from './context/CartProvider'
import Header from './component/Header';

function App() {
 
  return (
    <CartProvider>
      <Header/>
      <Products/>
    </CartProvider>
  );
}

export default App;
