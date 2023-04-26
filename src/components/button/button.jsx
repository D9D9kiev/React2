import React, { Component } from "react";
import "./button.scss";

export default class Button extends Component {
  render() {
    const { title, backGround, onClick } = this.props;
    return (
      <button className={`btn ${backGround}`} onClick={onClick}>
        {title}
      </button>
    );
  }
}
