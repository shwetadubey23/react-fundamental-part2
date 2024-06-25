import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createContext } from 'react';


export const AuthContext = createContext()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AuthContext.Provider value={{
            userName: 'Sweta', email: 'shweta@gmail.com'
        }}>
            <App />
        </AuthContext.Provider>
    </React.StrictMode>
);


