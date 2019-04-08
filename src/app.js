import React from "react";
import ProductsHolder from "./Components/ProductsHolder.js";
import CartModalFloating from "./Components/CartModalFloating";
import Alert from "react-s-alert";
import "./app.css";
require("react-s-alert/dist/s-alert-default.css");
require("react-s-alert/dist/s-alert-css-effects/genie.css");
require("react-s-alert/dist/s-alert-css-effects/bouncyflip.css");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          img: "/shelby427.jpg",
          price: "8,000,000.00",
          product: "427CI, 500HP, 200MPH",
          productDesc: "Cobra",
          star: "4.71"
        },
        {
          img: "/shelbydaytona.jpg",
          price: "7,250,000.00",
          product: "289CI, 385HP, 194MPH",
          productDesc: "Daytona",
          star: "4.51"
        },

        {
          img: "/shelbygt40.jpg",
          price: "11,000,000.00",
          product: "289CI, 385HP, 210MPH",
          productDesc: "GT40 MKI",
          star: "4.9"
        },
        {
          img: "/shelbygt40mkii.jpg",
          price: "15,000,000.00",
          product: "427CI, 550HP , 220MPH",
          productDesc: "GT40 MKII",
          star: "5.00"
        },
        {
          img: "/shelbygt500.jpg",
          price: "1,200,000.00",
          product: "427CI, 400HP, 140MPH",
          productDesc: "GT500",
          star: "4.25"
        }
      ],
      cart: [],
      newProductName: "",
      newProductDesc: "",
      newProductPrice: "",
      newProductURL: "",
      cartTotal: 0
    };
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });

    console.log(this.state);
  };

  //adds commas to price string
  numberWithCommas = number => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  addProduct = (e, numberWithCommas) => {
    //making sure vehicle isn't already added
    if (
      !this.state.products.find(
        product =>
          product.productDesc.toLowerCase() ===
          this.state.newProductName.toLowerCase()
      )
    ) {
      //making sure price number has 2 decimal places and commas where appropriate
      let number = parseInt(this.state.newProductPrice).toFixed(2);
      number = this.numberWithCommas(number);

      //stock logo used for added product if no url supplied
      if (this.state.newProductURL === "") {
        console.log("no vehicle url");
        var logo = "/logo.jpg";
      } else {
        console.log("vehicle url defined");
        var logo = this.state.newProductURL;
      }
      let added = {
        img: logo,
        price: number.toLocaleString(),
        product: this.state.newProductDesc,
        productDesc: this.state.newProductName,
        star: "0.00"
      };
      //Add product to new array, reset all input fields for adding a product
      const newArray = this.state.products.concat(added);
      this.setState({
        products: newArray,
        newProductName: "",
        newProductDesc: "",
        newProductPrice: "",
        newProductURL: ""
      });
    } else {
      Alert.error(`That vehicle has already been added</h1>`, {
        timeout: 2000,
        position: 'bottom',
        offset:100,
      })
    }
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
    console.log("adding to cart");
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
      const newCartTotal = this.state.cartTotal + this.state.newProductPrice;
      this.setState({ cart: newArray, cartToal: newCartTotal }, () =>
        console.log(this.state)
      );
    }
  };

  removeCartItem = e => {
    //using the product attribute to grab the whole project object and assigning it to a variable
    const cartArray = this.state.cart.filter(
      product => product.productDesc !== e.target.getAttribute("name")
    );
    this.setState({ cart: cartArray }, () => console.log(this.state));
    console.log("hi");
  };

  render() {
    return (
      <>
        <ProductsHolder
          products={this.state.products}
          addToCart={this.addToCart}
          deleteItem={this.deleteItem}
          handleInput={this.handleInput}
          addProduct={this.addProduct}
          state={this.state}
          description="Add Shelby"
          cart={this.state.cart}
          removeCartItem={this.removeCartItem}
        />

        <CartModalFloating
          cart={this.state.cart}
          removeCartItem={this.removeCartItem}
          cartTotal={this.state.cartTotal}
          text="View Cart"
        />
          <Alert stack={{limit: 3}} html={true} />
      </>
    );
  }
}

export default App;
