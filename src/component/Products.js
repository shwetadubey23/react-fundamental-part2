import React from 'react'
import { products } from '../data/products'
import Product from './Product'
import Contianer from './UI/Contianer';
import styles from './Products.module.css'

export default function Products() {
    return (
        <Contianer>
        <div className= {styles.products}>
        {products.map((product) => <Product key={product.id} {...product}/>)}
        </div>
        </Contianer>
    );
}