import React from "react";

//Product returns product information
const Product = ({ img, productTitle, product, price, star }) => (
  <div className="ui link cards">
    <div className="card">
      <div className="image">
        <img src={img} alt="randomProductImage" />
      </div>
      <div className="content">
        <div className="header">{productTitle}</div>
        <div className="meta" />
        <div className="description">{product}</div>
      </div>
      <div className="extra content">
        <span className="right floated">${price}</span>
        <span>
          <i className="star outline icon" />
          {star}/5.00
        </span>
      </div>
    </div>
  </div>
);

export default Product;
