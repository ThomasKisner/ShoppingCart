import React from "react";
import CartModal from "./CartModal";

//Card container wraps product details to give user add to cart and delete product options
const CardContainer = ({
  children,
  cart,
  removeCartItem,
  addToCart,
  deleteItem
}) => (
  <div className="ui card">
    <div className="content">{children}</div>
    <div className="extra content">
      <div className="ui two buttons">
        <CartModal
          cart={cart}
          removeCartItem={removeCartItem}
          addToCart={addToCart}
          name={children.props.productTitle}
          text="Add To Cart"
        />
        <div
          className="ui basic grey button"
          onClick={deleteItem}
          name={children.props.productTitle}
        >
          Delete Item
        </div>
      </div>
    </div>
  </div>
);

export default CardContainer;
