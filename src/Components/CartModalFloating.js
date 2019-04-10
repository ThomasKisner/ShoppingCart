import React from "react";
import { Button, Modal } from "semantic-ui-react";
import InCart from "./InCart";

//CartModalFloating displays fixed button allowing user to toggle modal with cart info
const CartModalFloating = ({ addToCart, name, text, cart, removeCartItem }) => (
  <Modal
    trigger={
      <Button
        className="ui basic grey button modalFloating"
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

export default CartModalFloating;
