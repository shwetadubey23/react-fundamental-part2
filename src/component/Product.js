import React from "react";
import { useCart } from "../context/CartProvider";


export default function Product({title, price, img, id}) {
const {dispatch} = useCart()

    function handelAddIteam() {
       const productIteam = {
        id:id,
        title: title,
        price: price,
        img: img,
        quantity: 1
       }
alert('Item Added')
    return dispatch({type: "ADD_ITEAM", payload:{ productIteam}})
    }
    return (<div style={{margin:'1rem', padding: '1rem', border: '2px solid #343434'}}>
        <p>id: {id}</p>
        <p>Title: {title}</p>
        <p>Price: {price}</p>
        <img src={img} alt="title" height={200}/> <br/>
        <button onClick={handelAddIteam} >Add</button>
    </div>
    );
}