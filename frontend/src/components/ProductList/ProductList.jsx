import React from "react";
import {Link } from "react-router-dom";

const ProductList = ({ title, description, price, images }) => {
  return (
    <>
      <div className="prod-item">
        <img src={`http://localhost:3000/${images}`} alt="" />
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
          <h3>$ {price}</h3>
          <Link to='' className='btn1'>Add to cart</Link>
        </div>
      </div>
    </>
  );
}; 

export default ProductList;
