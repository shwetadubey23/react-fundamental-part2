import React, { useContext, useReducer } from "react";
import { createContext } from "react";
import CartIteam from "../component/CartIteam";

const CartContext = createContext();

function cartReducer(cartState, action) {
    switch (action.type) {
        case "ADD_ITEAM": {
            return [...cartState, action.payload.productIteam];
        }
        case "INCREASE_QUANTITY": {
            return cartState.map((item) =>
                item.id === action.payload.id
                    ? {
                          ...item,
                          quantity: item.quantity + 1,
                          // price: item.price * (item.quantity+1),
                      }
                    : item,
            );
            // console.log('INCREASE_QUANTITY')
        }
        case "DECREASE_QUANTITY": {
            return cartState.map((item) =>
                item.id === action.payload.id
                    ? {
                          ...item,
                          quantity: item.quantity - 1,
                          // price: item.price * (item.quantity),
                      }
                    : item,
            );
        }
        case "REMOVE_ITEM": {
            console.log("REMOVE_ITEM");
            return cartState.filter((item) => item.id !== action.payload.id);
        }
        default:
            cartState;
    }
}

function CartProvider({ children }) {
    const [cart, dispatch] = useReducer(cartReducer, []);
    return (
        <CartContext.Provider value={{ cart, dispatch }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}

export default CartProvider;
