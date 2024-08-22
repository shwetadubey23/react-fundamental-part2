import React from "react";
import { useCart } from "../context/CartProvider";
import CartIteam from "./CartIteam";

export default function Cart() {
    const { cart } = useCart();
    if (cart.length === 0) {
        return <h1>No items added to the cart</h1>;
    }
    let total = 0;
    total = cart.reduce((acc, item) => {
        return acc + item.price * item.quantity;
}, 0
    )
    return (
        <>
            <div>
                {cart.map((iteam) => (
                    <CartIteam key={iteam.id} {...iteam} />
                ))}
            </div>
            {/* want to give rupee symbol here &#8377: */}
          <h1> Total Amount: ₹₹ {total}</h1> 
        </>
    );
}
