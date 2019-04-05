import React from "react";
import Product from "./Components/Product.js";
import CardContainer from "./Components/CardContainer.js";
import InCart from "./Components/InCart.js";
import faker from "faker";
import ProductsHolder from "./Components/ProductsHolder.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          img: "http://lorempixel.com/640/280/cats",
          price: "336.00",
          product: "Ergonomic Concrete Tuna",
          productDesc: "Mouse",
          star: "4.21"
        },
        {
          img: "http://lorempixel.com/640/480/cats",
          price: "6.00",
          product: "Plush Metal Rhino",
          productDesc: "Hammer",
          star: "3.71"
        },
        {
          img: "http://lorempixel.com/640/580/cats",
          price: "200.00",
          product: "Incredible Rubber Towels",
          productDesc: "Ball",
          star: "0.87"
        },
        {
          img: "http://lorempixel.com/640/680/cats",
          price: "148.00",
          product: "Practical Soft Table",
          productDesc: "Car",
          star: "2.87"
        },
        {
          img: "http://lorempixel.com/640/280/cats",
          price: "413.00",
          product: "Sleek Metal Bike",
          productDesc: "Train",
          star: "2.37"
        }
      ],
      cart: []
    };
  }

  addToCart = e => {
    console.log(e.target);
  };

  componentDidMount() {
    console.log(this.state);
  }

  starRating = () => {
    let number = Math.random() * 5;
    return number.toFixed(2);
  };

  deleteItem = e => {
    //create a new array with target product filtered out, then set to state
    const newProductState = this.state.products.filter(
      product => product.productDesc !== e.target.getAttribute("name")
    );
    console.log(newProductState);
    this.setState({ products: newProductState });
  };

  addToCart = e => {
    //using the product attribute to grab the whole project object and assigning it to a variable
    const added = this.state.products.find(
      product => product.productDesc === e.target.getAttribute("name")
    );
    //if the assigned variable is not in the cart array it can be added.
    if (
      this.state.cart.find(product => product.product === added.product) ===
      undefined
    ) {
      const newArray = this.state.cart.concat(added);
      this.setState({ cart: newArray }, () => console.log(this.state));
    }
  };

  render() {
    return (
      <>
        <ProductsHolder
          products={this.state.products}
          addToCart={this.addToCart}
          deleteItem={this.deleteItem}
        />
        <InCart cart={this.state.cart} />
      </>
    );
  }
}

export default App;
