import React from "react";
import Product from "./Product";
import CardContainer from "./CardContainer";
import SingleButtonCardContainer from "./SingleButtonCardContainer";
import AddProduct from "./AddProduct";

//ProdutsHolder returns all products wrapped in a container div that allows cart adds and product deletes
const ProductsHolder = props => (
  <div className="productsContainer">
    {props.products.map(product => {
      return (
        <CardContainer
          key={product.productTitle}
          addToCart={props.addToCart}
          deleteItem={props.deleteItem}
          cart={props.cart}
          removeCartItem={props.removeCartItem}
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
      function={props.addProduct}
      buttonText="Add Shelby"
    >
      <AddProduct handleInput={props.handleInput} state={props.state} />
    </SingleButtonCardContainer>
  </div>
);

export default ProductsHolder;
