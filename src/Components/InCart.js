import React from "react";
import CartProduct from "./CartProduct";
import SingleButtonCardContainer from "./SingleButtonCardContainer";

//InCart returns all items in shopping cart
const InCart = ({ cart, removeCartItem }) => (
  <div className="cart">
    {cart.map((product, index) => {
      return (
        <SingleButtonCardContainer
          key={index}
          buttonClickFunction={removeCartItem}
          buttonText="Remove From Cart"
        >
          <CartProduct
            key={index}
            img={product.img}
            product={product.product}
            productTitle={product.productTitle}
            price={product.price}
            star={product.star}
            onClick={removeCartItem}
          />
        </SingleButtonCardContainer>
      );
    })}
  </div>
);

export default InCart;
