import React from "react";

const CartProduct = (props) => {

return(

<div className="ui cards">
  <div className="card">
    <div className="content">
      <img className="right floated med ui image" src={props.img} alt="Shelby vehicle"/>
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
    {/* <div className="extra content">
      <div className="ui two buttons">
        <div className="ui basic green button" onClick={props.removeCartItem}>Remove From Cart</div>
 
      </div>
    </div> */}
  </div>
  </div>
   
)}

export default CartProduct;