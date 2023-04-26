import React, { Component } from "react";
import Header from "./components/header/header";
import Modal from "./components/modal/modal";
import ProductList from "./components/productList";

const getHistoryFromLS = (itemArr) => {
  const lsHistory = localStorage.getItem(itemArr);
  if (!lsHistory) {
    return [];
  }
  try {
    const value = JSON.parse(lsHistory);
    return value;
  } catch (error) {
    return [];
  }
};

export default class App extends Component {
  state = {
    isLoading: false,
    products: [],
    cart: [],
    favourite: [],
    modalShow: false,
    modalContent: {},
  };

  async componentDidMount() {
    this.setState({
      cart: getHistoryFromLS("cart"),
      favourite: getHistoryFromLS("favorite"),
      isLoading: true,
    });
    const response = await fetch("apple.json");
    const data = await response.json();
    this.setState({
      products: data.products,
      isLoading: false,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { cart, favourite } = this.state;
    if (prevState.cart !== cart) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    if (prevState.favourite !== favourite) {
      localStorage.setItem("favorite", JSON.stringify(favourite));
    }
  }

  showModal = () => {
    this.setState({ modalShow: true });
  };

  generateModal = (itemArticul, nameOfProduct) => {
    this.showModal();
    this.setState({
      modalContent: {
        header: "Confirmation",
        text: `Add ${nameOfProduct} to cart?`,
        actions: (
          <>
            <button
              type="button"
              className="modal__content__btn"
              onClick={(event) => this.addToCart(itemArticul)}
            >
              Yes
            </button>
            <button
              type="button"
              className="modal__content__btn"
              onClick={this.closeModal}
            >
              No
            </button>
          </>
        ),
      },
    });
  };

  closeModal = () => {
    this.setState({ modalShow: false });
  };

  addToCart = (itemArticul) => {
    const { cart } = this.state;
    const newCart = [...cart, itemArticul];
    this.setState({ cart: newCart, modalShow: false });
  };

  addToFavourite = (itemArticul) => {
    const { favourite } = this.state;
    if (!favourite.includes(itemArticul)) {
      const newFavourite = [...favourite, itemArticul];
      this.setState({ favourite: newFavourite });
    } else {
      this.removeFromFavorite(itemArticul);
    }
  };

  removeFromFavorite = (itemArticul) => {
    const { favourite } = this.state;
    const newFavourite = favourite.filter((item) => item !== itemArticul);
    this.setState({ favourite: newFavourite });
  };

  render() {
    const { products, cart, favourite, isLoading, modalShow, modalContent } =
      this.state;
    return (
      <>
        <Header
          productsInCart={cart.length}
          productsInFavourite={favourite.length}
        />
        <ProductList
          items={products}
          isLoading={isLoading}
          generateModalForBtn={this.generateModal}
          addToCartFunc={this.addToCart}
          addToFavouriteFunc={this.addToFavourite}
          favouriteItems={favourite}
        />
        {modalShow && <Modal content={modalContent} close={this.closeModal} />}
      </>
    );
  }
}
