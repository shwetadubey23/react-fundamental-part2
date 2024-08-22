import React from "react";
import { useCart } from "../context/CartProvider";
import styles from "./Product.module.css";
import { toast } from 'react-toastify';

export default function Product({ title, price, img, id }) {
    const { cart, dispatch } = useCart();

    function handelAddIteam() {
        for(let i = 0; i < cart.length; i++) {
            if(cart[i].id === id) {
              return  toast.error('This item is already in your cart')
            }
        }
        const productIteam = {
            id: id,
            title: title,
            price: price,
            img: img,
            quantity: 1,
        };
        toast("Item Added");
        return dispatch({ type: "ADD_ITEAM", payload: { productIteam } });
    }
    return (
        <div className={styles.product}   >
            <p>id: {id}</p>
            <img src={img} alt="title" className={styles.productImage} /> <br />
            <p className={styles.title}> {title}</p>
            <p className={styles.price}> ₹ {price}</p>
            <button onClick={handelAddIteam} className={styles.addToCartBtn}>Add to Cart</button>
        </div>
    );
}
