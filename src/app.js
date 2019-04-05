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

  addToCart = (e) => {
    console.log(e.target);
  }

  componentDidMount() {
    console.log(this.state);
  }

  starRating = () => {
    let number = Math.random() * 5;
    return number.toFixed(2);
  };

  addToCart = e => {
    //console.log(e.target.getAttribute('name'));
    const added = this.state.products.find(product => product.productDesc === e.target.getAttribute('name'))
    console.log(added);
};

  render() {
    return (
      <>
  <ProductsHolder products={this.state.products} addToCart={this.addToCart}/>
      </>
    );
  }
}

export default App;
