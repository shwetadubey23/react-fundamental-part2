import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>  // remove strictMode then useEffect call one time whenever component render
    <App />
  // </React.StrictMode>
);


