import React from "react";
import CartProduct from "./CartProduct";
import DeleteContainer from "./DeleteContainer";

const InCart = props => {
 
  return (
    <div className="cart">
      {props.cart.map((product, index) => {
        return (
          <DeleteContainer key={index} removeCartItem={props.removeCartItem}>
            <CartProduct
              key={index}
              img={product.img}
              product={product.product}
              productDesc={product.productDesc}
              price={product.price}
              star={product.star}
              removeCartItem={props.removeCartItem}
            />
          </DeleteContainer>
        );
      })}
    </div>
  );
};

export default InCart;
