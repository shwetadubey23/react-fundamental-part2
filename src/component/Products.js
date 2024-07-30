import React from 'react'
import { products } from '../data/products'
import Product from './Product'


export default function Products() {
    return (<div>
        {products.map((product) => <Product key={product.id} {...product}/>)}
        </div>
    );
}