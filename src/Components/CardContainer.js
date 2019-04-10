import React from "react";
import CartModal from "./CartModal";

//Card container wraps product details to give user add to cart and delete product options
const CardContainer = props => (
  <div className="ui card">
    <div className="content">{props.children}</div>
    <div className="extra content">
      <div className="ui two buttons">
        <CartModal
          props={props}
          cart={props.cart}
          removeCartItem={props.removeCartItem}
          addToCart={props.addToCart}
          name={props.children.props.productTitle}
          text="Add To Cart"
        />
        <div
          className="ui basic grey button"
          onClick={props.deleteItem}
          name={props.children.props.productTitle}
        >
          Delete Item
        </div>
      </div>
    </div>
  </div>
);

export default CardContainer;
