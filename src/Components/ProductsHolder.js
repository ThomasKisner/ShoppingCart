import React from "react";
import Product from "./Product";
import CardContainer from "./CardContainer";
import SingleButtonCardContainer from "./SingleButtonCardContainer";
import AddProduct from "./AddProduct";

//ProdutsHolder returns all products wrapped in a container div that allows cart adds and product deletes
const ProductsHolder = ({
  handleInput,
  state,
  products,
  addProduct,
  cart,
  removeCartItem,
  addToCart,
  deleteItem
}) => (
  <div className="productsContainer">
    {products.map(product => {
      return (
        <CardContainer
          key={product.productTitle}
          addToCart={addToCart}
          deleteItem={deleteItem}
          cart={cart}
          removeCartItem={removeCartItem}
        >
          <Product
            img={product.img}
            product={product.product}
            productTitle={product.productTitle}
            price={product.price}
            star={product.star}
          />
        </CardContainer>
      );
    })}
    <SingleButtonCardContainer
      buttonClickFunction={addProduct}
      buttonText="Add Shelby"
    >
      <AddProduct handleInput={handleInput} state={state} />
    </SingleButtonCardContainer>
  </div>
);

export default ProductsHolder;
