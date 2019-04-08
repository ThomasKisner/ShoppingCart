import React from "react";
import { Button, Modal } from "semantic-ui-react";
import InCart from "./InCart";
 
const CartModalFloating = props => { 
  return(
  <Modal trigger={<Button className="ui basic grey button modalFloating" onClick={props.addToCart} name={props.name}>{props.text}</Button>} centered={false} closeIcon>
    <Modal.Header>Shopping Cart</Modal.Header>
    <Modal.Description>
      <InCart cart={props.cart} removeCartItem={props.removeCartItem} />
    </Modal.Description>
  </Modal>)
};

export default CartModalFloating;
