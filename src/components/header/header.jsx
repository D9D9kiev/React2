import React, { Component } from "react";
import StarSvg from "../../img/star.svg";
import "./header.scss";

export default class Header extends Component {
  render() {
    const { productsInCart, productsInFavourite } = this.props;
    return (
      <div className="header">
        <div className="header__logo">
          <h1>Apple Store</h1>
        </div>
        <div className="header__items">
          <div className="item__cart">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1413/1413925.png"
              alt="cart"
              width="30px"
            ></img>
            <p>{`: ${productsInCart}`}</p>
          </div>
          <div className="item__favorite">
            <img src={StarSvg} alt="star" width="30px"></img>
            <p>{`: ${productsInFavourite}`}</p>
          </div>
        </div>
      </div>
    );
  }
}
