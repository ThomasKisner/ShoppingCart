import React from "react";

//CartProduct returns the product tile inside of the shopping cart, it is slightly different
//from other card to allow it to better display inside of shopping cart modal
const CartProduct = props => (
  <div className="ui cards">
    <div className="card">
      <div className="content">
        <img
          className="right floated med ui image"
          src={props.img}
          alt="Shelby"
        />
        <div className="header">{props.productTitle}</div>
        <div className="meta">{props.product}</div>
        <div className="description">${props.price}</div>
      </div>
    </div>
  </div>
);
export default CartProduct;
