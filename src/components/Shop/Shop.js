import './Shop.css'
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] =useState([])
    useEffect(()=>{
        fetch('./products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className="shop-container">
           <div className="product-container">
               <h3>products:</h3>
               {
                   products.map(product => <Product key={product.key} product={product}></Product>)
               }
           </div>
           <div className="cart-container">
               <h3>Order Summary :  </h3>
                <h5>Items Orders : 0</h5>
           </div>
        </div>
    );
};

export default Shop;