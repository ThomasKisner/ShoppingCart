import React from "react";

const SingleButtonCardContainer = ({ children, buttonClickFunction, buttonText }) => (
  <div className="ui card">
    <div className="content">{children}</div>
    <div className="extra content center">
      <div className="ui buttons">
        <div
          className="ui basic grey button center"
          onClick={buttonClickFunction}
          name={children.props.productTitle}
        >
          {buttonText}
        </div>
      </div>
    </div>
  </div>
);

export default SingleButtonCardContainer;
