import './Product.css'
import React from 'react';

const Product = (props) => {
   const {name,img,price}=props.product
    return (
        <div>
            <h2>name : {name}</h2>
            <img src={img} alt="" />
            <h3>price : {price}</h3>
        </div>
    );
};

export default Product;