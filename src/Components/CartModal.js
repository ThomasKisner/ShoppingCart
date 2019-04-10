import React from "react";
import { Button, Modal } from "semantic-ui-react";
import InCart from "./InCart";

//cart modal shows overlay with user cart details
const CartModal = ({ addToCart, name, text, cart, removeCartItem }) => (
  <Modal
    trigger={
      <Button
        className="ui basic grey button modalButton"
        onClick={addToCart}
        name={name}
      >
        {text}
      </Button>
    }
    centered={false}
    closeIcon
  >
    <Modal.Header>Shopping Cart</Modal.Header>
    <Modal.Description>
      <InCart cart={cart} removeCartItem={removeCartItem} />
    </Modal.Description>
  </Modal>
);

export default CartModal;
