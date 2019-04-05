import React from "react";
import Product from './Product';
import CardContainer from './CardContainer';

const InCart = props => {
  //    if (props.cart != undefined) {
  return (
    <div>
      {props.cart.map((product, index) => {
        return (
           
            <CardContainer key={index}  >
            <Product
                key={index}
              img={null}
              product={product.product}
              productDesc={product.productDesc}
              price={product.price}
              star={product.star}
            />
          </CardContainer>
     
        
        );
      })}
    </div>
  );
  //}
  //else{
  //  return
  //  }
};

export default InCart;
