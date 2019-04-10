import React from "react";

//Component creates form users can add a product with
const AddProduct = ({
  handleInput,
  state: { newProductTitle, newProductDesc, newProductPrice, newProductURL }
}) => (
  <div className="ui form" id="form">
    <h2>Add Shelby</h2>
    <div className="fields">
      <div className="field">
        <label>Car Name</label>
        <input
          type="text"
          placeholder="Car Name *Required*"
          name="newProductTitle"
          onChange={handleInput}
          value={newProductTitle}
        />
      </div>
      <div className="field">
        <label>Car Description</label>
        <input
          type="text"
          placeholder="Car Description *Required*"
          name="newProductDesc"
          onChange={handleInput}
          value={newProductDesc}
        />
      </div>
      <div className="field">
        <label>Car Price</label>
        <input
          type="number"
          placeholder="Price *Required*"
          name="newProductPrice"
          onChange={handleInput}
          value={newProductPrice}
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
          onChange={handleInput}
          value={newProductURL}
        />
      </div>
    </div>
  </div>
);

export default AddProduct;
