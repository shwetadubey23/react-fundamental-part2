import React, { useContext, useReducer } from "react";
import { createContext } from "react";

 const CartContext = createContext()

function cartReducer(cartState, action) {
switch(action.type) {
    case "ADD_ITEAM": {
        return [...cartState, action.payload.productIteam]
    }
}
// default 
return cartReducer
}


function CartProvider({children}) {
    const [cart, dispatch] = useReducer(cartReducer, [])
    return ( <CartContext.Provider value={{cart, dispatch}}>
{children}
    </CartContext.Provider>
    );
}

 export function useCart() {
    return useContext(CartContext)
}

export default CartProvider