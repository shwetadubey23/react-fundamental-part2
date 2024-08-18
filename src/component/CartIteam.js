import React from "react";
import { useCart } from "../context/CartProvider";

export default function CartIteam({ title, price, img, id, quantity }) {
    const { dispatch } = useCart();

    function handelIncreasQuantity() {
        return dispatch({ type: "INCREASE_QUANTITY", payload: { id } });
    }

    function handelDecreasQuantity() {
        return dispatch({ type: "DECREASE_QUANTITY", payload: { id } });
    }

    function handelRemoveItem() {
        return dispatch({ type: "REMOVE_ITEM", payload: { id } });
    }

    return (
        <div
            style={{
                margin: "1rem",
                padding: "1rem",
                border: "2px solid #343434",
            }}
        >
            <p>id: {id}</p>
            <p>title: {title}</p>
            <p>price: {price * quantity}</p>
            <p>img: {img}</p>
            <p>quantity: {quantity}</p>
            <button onClick={handelIncreasQuantity}>
                Increas Quantity
            </button>{" "}
            <button
                onClick={() => {
                    if (quantity === 1) {
                       return 
                    } else {
                        handelDecreasQuantity(id)
                    }
                }}
            >
                Decreas Quantity
            </button>{" "}
            <button onClick={handelRemoveItem}>Remoove Iteam</button>
        </div>
    );
}
