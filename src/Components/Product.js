import React from "react";

const Product = props => {  
  return (
    <div className="ui link cards">
      <div className="card">
        <div className="image">
          <img src={props.img} alt="randomProductImage"/>
        </div>
        <div className="content">
          <div className="header">{props.productDesc}</div>
          <div className="meta"> 
          </div>
          <div className="description">
            {props.product}
          </div>
        </div>
        <div className="extra content">
          <span className="right floated">${props.price}</span>
          <span>
            <i className="star outline icon" />
            {props.star}/5.00
          </span>
        </div>
      </div>
    </div>
  );
};

export default Product;
