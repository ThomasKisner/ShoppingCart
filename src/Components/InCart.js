import React from "react";
import CartProduct from "./CartProduct"; 
import SingleButtonCardContainer from "./SingleButtonCardContainer";

//InCart returns all items in shopping cart
const InCart = props => {
  return (
    <div className="cart">
      {props.cart.map((product, index) => {
        return (
          <SingleButtonCardContainer key={index} function={props.removeCartItem} buttonText="Remove From Cart">
            <CartProduct
              key={index}
              img={product.img}
              product={product.product}
              productTitle={product.productTitle}
              price={product.price}
              star={product.star}
              removeCartItem={props.removeCartItem}
            />
          </SingleButtonCardContainer>
        );
      })}
    </div>
  );
};

export default InCart;
