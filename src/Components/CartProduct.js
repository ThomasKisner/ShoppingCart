import React from "react";

//CartProduct returns the product tile inside of the shopping cart, it is slightly different
//from other card to allow it to better display inside of shopping cart modal
const CartProduct = ({ img, productTitle, product, price }) => (
  <div className="ui cards">
    <div className="card">
      <div className="content">
        <img className="right floated med ui image" src={img} alt="Shelby" />
        <div className="header">{productTitle}</div>
        <div className="meta">{product}</div>
        <div className="description">${price}</div>
      </div>
    </div>
  </div>
);
export default CartProduct;
