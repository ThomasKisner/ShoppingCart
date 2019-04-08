import React from "react";

const SingleButtonCardContainer = props => {
  return (
    <div className="ui card">
      <div className="content">{props.children}</div>
      <div className="extra content center">
        <div className="ui buttons">
          <div
            className="ui basic grey button center"
            onClick={props.addProduct}
            name={props.children.props.productDesc}
          >
            Add Shelby
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleButtonCardContainer;
