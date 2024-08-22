
import React from 'react';
import './App.css';
import './index.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Products from './component/Products';
import CartProvider from './context/CartProvider'
import Header from './component/Header';

function App() {
 
  return (
    <CartProvider>
      <ToastContainer autoClose={600} hideProgressBar={true}/>
      <Header/>
      <Products/>
    </CartProvider>
  );
}

export default App;
