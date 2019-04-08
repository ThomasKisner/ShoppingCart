import React from "react";

const CartProduct = (props) => {

return(

<div className="ui cards">
  <div className="card">
    <div className="content">
      <img className="right floated med ui image" src={props.img} alt="Shelby"/>
      <div className="header">
        {props.productDesc}
      </div>
      <div className="meta">
        {props.product}
      </div>
      <div className="description">
       ${props.price}
      </div>
    </div>
  </div>
  </div>
   
)}

export default CartProduct;