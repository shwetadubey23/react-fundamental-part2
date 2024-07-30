import React from "react";

export default function Product({title, price, img, id}) {
    return (<div style={{margin:'1rem', padding: '1rem', border: '2px solid #343434'}}>
        <p>id: {id}</p>
        <p>Title: {title}</p>
        <p>Price: {price}</p>
        <img src={img} alt="title" height={200}/> <br/>
        <button>Add</button>
    </div>
    );
}