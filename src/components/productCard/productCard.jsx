import React, { Component } from "react";
import { ReactComponent as StarSvg } from "../../img/star.svg";
import Button from "../button/button";

export default class ProductCard extends Component {
  clickBtn = () => {
    const { item, generateModalForBtn } = this.props;
    generateModalForBtn(item.article, `${item.name} (${item.color})`);
  };

  clickStar = () => {
    const { item, onClickStar } = this.props;
    onClickStar(item.article);
  };

  render() {
    const { item, isFavorite } = this.props;
    const { article, name, price, image, color } = item;
    return (
      <div id={article} className="item">
        <div className="item__image">
          <img src={image} alt={name} width="350px" height="350px" />
        </div>
        <div className="item__info">
          <h2>
            {name} ({color})
          </h2>
          <p>{price}</p>
          <span onClick={this.clickStar}>
            {isFavorite ? <StarSvg fill="greenyellow" /> : <StarSvg />}
          </span>
        </div>
        <div className="item__buttons">
          <Button
            backGround="red"
            title="Add to Cart"
            onClick={this.clickBtn}
          />
        </div>
      </div>
    );
  }
}
