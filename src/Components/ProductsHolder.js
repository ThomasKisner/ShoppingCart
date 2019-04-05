import React from "react";
import Product from "./Product";
import CardContainer from "./CardContainer";

const ProductsHolder = props => {
  console.log(props)
    return (
    <div>
      {props.products.map(product => {
        return (
          <CardContainer key={product.product} addToCart={props.addToCart}>
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
      )
    </div>
  );
};

export default ProductsHolder;
