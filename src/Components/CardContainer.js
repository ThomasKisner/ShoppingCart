import React from "react";
import CartModal from './CartModal'

const CardContainer = props => { 
  return (
    <div className="ui card">
      <div className="content">{props.children}</div>
      <div className="extra content">
        <div className="ui two buttons">
          <CartModal 
            props={props} 
            cart={props.cart} 
            removeCartItem={props.removeCartItem} 
            addToCart={props.addToCart} 
            name={props.children.props.productDesc} 
            text="Add To Cart"
        />
          <div
            className="ui basic grey button"
            onClick={props.deleteItem}
            name={props.children.props.productDesc}
          >
            Delete Item
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
