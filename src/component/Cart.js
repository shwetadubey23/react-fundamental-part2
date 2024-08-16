import React from "react";
import { useCart } from "../context/CartProvider";
import CartIteam from "./CartIteam";

export default function Cart() {
    const {cart} = useCart()
    return (
        <>
        {cart.map((iteam) => <CartIteam key={iteam.id} {...iteam}/> )}
        </>
    )
}