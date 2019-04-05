import React from "react";

const CardContainer = props => {
   
  return (
    <div className="ui card">
      <div className="content">{props.children}</div>
      <div className="extra content">
        <div className="ui two buttons">
          <div
            className="ui basic grey button"
            onClick={props.addToCart}
            name={props.children.props.productDesc}
          >
            Add To Cart
          </div>
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
