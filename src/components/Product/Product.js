import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css'
const Product = (props) => {
   const {name,img,seller,price,stock}=props.product
    return (
        <div className="product">
            <img className="product-img" src={img} alt="" />
            <div>
                <h3 className="product-name">{name}</h3>
                <p><small>by : {seller}</small></p>
                <p>${price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button onClick={()=>props.handleAddtoCart(props.product)} className="product-button"><FontAwesomeIcon icon={faShoppingCart} />add to cart</button>
            </div>
        </div>
    );
};

export default Product;