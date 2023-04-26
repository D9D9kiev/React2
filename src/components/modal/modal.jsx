import React, { Component } from "react";
import "./modal.scss";

export default class Modal extends Component {
  render() {
    const { content, close } = this.props;
    const { header, text, actions } = content;
    return (
      <>
        <div className={`modal`}>
          <div className="modal__header">
            <h2 className="modal__header__title">{header}</h2>
            <button className="modal__header__btn" onClick={close}>
              &times;
            </button>
          </div>
          <div className="modal__content">
            <p className="modal__content__text">{text}</p>
            {actions}
          </div>
        </div>
        <div className="backdrop" onClick={close} />
      </>
    );
  }
}
