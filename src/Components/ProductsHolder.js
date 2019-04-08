import React from "react";
import Product from "./Product";
import CardContainer from "./CardContainer";
import SingleButtonCardContainer from "./SingleButtonCardContainer";
import AddProduct from "./AddProduct";

const ProductsHolder = props => {
  return (
    <div className="productsContainer">
      {props.products.map(product => {
        return (
          <CardContainer
            key={product.product}
            addToCart={props.addToCart}
            deleteItem={props.deleteItem}
            cart={props.cart}
            removeCartItem={props.removeCartItem}
          >
            <Product
              img={product.img}
              product={product.product}
              productDesc={product.productDesc}
              price={product.price}
              star={product.star}
            />
          </CardContainer>
        );
      })}
      <SingleButtonCardContainer addProduct={props.addProduct}> 
        <AddProduct handleInput={props.handleInput} state={props.state}/>
      </SingleButtonCardContainer>
    </div>
  );
};

export default ProductsHolder;
