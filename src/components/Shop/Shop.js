import './Shop.css'
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [products, setProducts] =useState([])
    const [cart,setCart] = useState([])
    useEffect(()=>{
        fetch('./products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
   const handleAddtoCart = product=>{
       const newCart = [...cart,product]
       setCart(newCart)
   }
    return (
        <div className="shop-container">
           <div className="product-container">
               {
                   products.map(product => <Product key={product.key} product={product} handleAddtoCart={handleAddtoCart}
                   ></Product>)
               }
           </div>
           <div className="cart-container">
               <Cart cart={cart}></Cart>
           </div>
        </div>
    );
};

export default Shop;