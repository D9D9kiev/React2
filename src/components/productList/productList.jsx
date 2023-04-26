import React, { Component } from "react";
import ProductCard from "../productCard";
import "./productList.scss";

export default class ProductList extends Component {
  render() {
    const {
      items,
      isLoading,
      addToCartFunc,
      addToFavouriteFunc,
      favouriteItems,
      generateModalForBtn,
    } = this.props;
    return (
      <div className="products">
        <div className="products__list">
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            items.map((item) => (
              <ProductCard
                key={item.article}
                item={item}
                onClickBtn={addToCartFunc}
                onClickStar={addToFavouriteFunc}
                generateModalForBtn={generateModalForBtn}
                isFavorite={favouriteItems.includes(item.article)}
              />
            ))
          )}
        </div>
      </div>
    );
  }
}
