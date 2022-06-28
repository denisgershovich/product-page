import React, { useState } from "react";
import cartSvg from "../Styles/Images/icon-cart.svg";
import "../Styles/Product-description/product-description.css";
import { useDispatch } from "react-redux";
import { setCounter } from "../Redux/counter.js";

export const ProductDescription = () => {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  const onAddToCart = () => {
    dispatch(setCounter(count));
  };

  const onSetCount = (diff) => {
    if (count + diff < 0) return;
    setCount(count + diff);
  };

  return (
    <section className="product">
      <div className="product-description-container">
        <h5 className="product-company">SNEAKER COMPANY</h5>
        <h1 className="product-name">Fall Limited Edition Sneakers</h1>
        <div className="product-description">
          <p>
            These low-profile sneakers are your perfect casual wear companion
          </p>
          <p>
            Featuring a duravle rubber outer sole,they'll withstand everything
            the weather can offer.
          </p>
        </div>
        <p className="product-price">
          $125.00 <span className="product-discount">50%</span>
        </p>
        <p className="product-old-price">$250.00</p>
      </div>
      <div className="product-description-btns">
        <div className="product-description-btns-add">
          <div className="btn" onClick={() => onSetCount(-1)}>
            -
          </div>
          <div>{count}</div>
          <div className="btn" onClick={() => onSetCount(1)}>
            +
          </div>
        </div>
        <div
          className="product-description-btns-add-to-cart btn"
          onClick={() => onAddToCart()}
        >
          <img src={cartSvg} alt="cart" />
          Add to cart
        </div>
      </div>
    </section>
  );
};
