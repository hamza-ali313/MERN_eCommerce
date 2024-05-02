import React from "react";

const ProductList = ({ title, description, price, images }) => {
  return (
    <>
      <div className="prod-item">
        <img src={images} alt="" />
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
          <h2>{price}</h2>
        </div>
      </div>
    </>
  );
}; 

export default ProductList;
