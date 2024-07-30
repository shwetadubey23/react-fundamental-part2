import React, { useReducer } from "react";
import { createContext } from "react";

const CartContext = createContext()
function reducer(cartState, action) {

}


function CartProvider({children}) {
    const [cart, despach] = useReducer(reducer)
    return ( <CartContext.Provider value={{cart, despach}}>
{children}
    </CartContext.Provider>
    );
}

export default CartProvider