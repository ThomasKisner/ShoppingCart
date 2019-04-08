import React from "react";

const DeleteContainer = props => {
  return (
    <div className="ui card">
      <div className="content">{props.children}</div>
      <div className="extra content center">
        <div className="ui buttons">
          <div
            className="ui basic grey button center"
            onClick={props.removeCartItem}
            name={props.children.props.productDesc}
          >
            Remove From Cart
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteContainer;
