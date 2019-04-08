import React from "react";

const AddProduct = (props) => {
  return (
    <div className="ui form" id="form">
      <h2>Add Shelby</h2>
      <div className="fields">
        <div className="field">
          <label>Car Name</label>
          <input
            type="text"
            placeholder="Car Name"
            name="newProductName"
            onChange={props.handleInput}
            value={props.state.newProductName}
          />
        </div>
        <div className="field">
          <label>Car Description</label>
          <input
            type="text"
            placeholder="Car Description"
            name="newProductDesc"
            onChange={props.handleInput}
            value={props.state.newProductDesc}
          />
        </div>
        <div className="field">
          <label>Car Price</label>
          <input
            type="number"
            placeholder="Price"
            name="newProductPrice"
            onChange={props.handleInput}
            value={props.state.newProductPrice}
            step="250"
            min="5000"
          />
        </div>
        <div className="field">
          <label>Car Image URL</label>
          <input
            type="text"
            placeholder="Car Image URL (Optional)"
            name="newProductURL"
            onChange={props.handleInput}
            value={props.state.newProductURL}
          />
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
