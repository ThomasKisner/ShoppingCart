import React from "react";
import ProductsHolder from "./Components/ProductsHolder.js";
import CartModalFloating from "./Components/CartModalFloating";
import Alert from "react-s-alert";
import "./app.css";
require("react-s-alert/dist/s-alert-default.css");
require("react-s-alert/dist/s-alert-css-effects/genie.css");
require("react-s-alert/dist/s-alert-css-effects/bouncyflip.css");

class App extends React.Component {
  state = {
    products: [
      {
        img: "/shelby427.jpg",
        price: "8,000,000.00",
        product: "427CI, 500HP, 200MPH",
        productTitle: "Cobra",
        star: "4.71"
      },
      {
        img: "/shelbydaytona.jpg",
        price: "7,250,000.00",
        product: "289CI, 385HP, 194MPH",
        productTitle: "Daytona",
        star: "4.51"
      },

      {
        img: "/shelbygt40.jpg",
        price: "11,000,000.00",
        product: "289CI, 385HP, 210MPH",
        productTitle: "GT40 MKI",
        star: "4.9"
      },
      {
        img: "/shelbygt40mkii.jpg",
        price: "15,000,000.00",
        product: "427CI, 550HP , 220MPH",
        productTitle: "GT40 MKII",
        star: "5.00"
      },
      {
        img: "/shelbygt500.jpg",
        price: "1,200,000.00",
        product: "427CI, 400HP, 140MPH",
        productTitle: "GT500",
        star: "4.25"
      }
    ],
    cart: [],
    newProductDesc: "",
    newProductTitle: "",
    newProductPrice: "",
    newProductURL: "",
    cartTotal: 0
  };

  handleInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value }, () => console.log(name, value));
  };

  //adds commas to price string
  numberWithCommas = number => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  addProduct = (e, numberWithCommas) => {
    if (
      this.state.newProductDesc === "" ||
      this.state.newProductPrice === "" ||
      this.state.newProductTitle === ""
    ) {
      Alert.error(
        `<h2>New vehicle name, description, and price are required</h2>`,
        {
          timeout: 3000,
          position: "bottom",
          offset: 100
        }
      );
    } else {
      //making sure vehicle isn't already added
      if (
        !this.state.products.find(
          product =>
            product.productTitle.toLowerCase() ===
            this.state.newProductTitle.toLowerCase(), console.log(this.product)
        )
      ) {
        for(let i = 0;i<this.state.products.length; i++){
          console.log(this.state.products[i].productTitle, this.state.newProductTitle)
        }
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
          productTitle: this.state.newProductTitle,
          star: "0.00"
        };
        //Add product to new array, reset all input fields for adding a product
        const newArray = this.state.products.concat(added);
        this.setState({
          products: newArray,
          newProductTitle: "",
          newProductDesc: "",
          newProductPrice: "",
          newProductURL: ""
        },()=>console.log(this.state));

      } else {
        Alert.error(`<h2>Vehicle is already in inventory</h2>`, {
          timeout: 3000,
          position: "bottom",
          offset: 100
        });
      }
    }
  };

  deleteItem = e => {
    //create a new array with target product filtered out, then set to state
    const newProductState = this.state.products.filter(
      product => product.productTitle !== e.target.getAttribute("name")
    );
    console.log(newProductState);
    this.setState({ products: newProductState });
  };

  addToCart = e => {
    console.log("adding to cart");
    //using the product attribute to grab the whole project object and assigning it to a variable
    const added = this.state.products.find(
      product => product.productTitle === e.target.getAttribute("name")
    );

    console.log(added.product);
    //if the assigned variable is not in the cart array it can be added.
    if (
      this.state.cart.find(
        product => product.productTitle === added.productTitle
      ) === undefined
    ) {
      const newArray = this.state.cart.concat(added);
      const newCartTotal = this.state.cartTotal + this.state.newProductPrice;
      this.setState({ cart: newArray, cartToal: newCartTotal }, () =>
        console.log(this.state)
      );
    }
  };

  removeCartItem = e => {
    console.log("trying to remove cart item");
    //using the product attribute to grab the whole project object and assigning it to a variable
    const cartArray = this.state.cart.filter(
      product => product.productTitle !== e.target.getAttribute("name")
    );
    this.setState({ cart: cartArray }, () => console.log(this.state));
  };

  logHi = e => {
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
          newProductTitle={this.state.newProductTitle}
          newProductDesc={this.state.newProductDesc}
          newProductPrice={this.state.newProductPrice}
          newProductURL={this.state.newProductURL}
        />

        <CartModalFloating
          cart={this.state.cart}
          removeCartItem={this.removeCartItem}
          cartTotal={this.state.cartTotal}
          text="View Cart"
        />
        <Alert stack={{ limit: 3 }} html={true} />
      </>
    );
  }
}

export default App;
