import React from "react";


export default function CartIteam ({title, price, img, id, quantity}) {
    return (
        <div 
        style={{
            margin:'1rem', 
            padding: '1rem', 
            border: '2px solid #343434'
        }}
            >
     <p>id: {id}</p>
     <p>title: {title}</p>
     <p>price: {price}</p>
     <p>img: {img}</p>
     <p>quantity: {quantity}</p>
     <button>Increas Quantity</button>  <button>Decreas Quantity</button> <button>Remoove Iteam</button>
        </div>
        
    )
}