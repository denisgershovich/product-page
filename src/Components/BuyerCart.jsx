import React, { useState } from "react";
import cartSvg from "../Styles/Images/icon-cart.svg";
import buyerAvatar from "../Styles/Images/image-avatar.png";
import productImg from "../Styles/Images/carousel/image-product-1-thumbnail.jpg";
import trashImg from "../Styles/Images/icon-delete.svg";
import "../Styles/Cart-modal/cart-modal.css";
import { useSelector, useDispatch } from "react-redux";
import { clearCounter } from "../Redux/counter";

export const BuyerCart = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const count = useSelector((state) => state.counter.value);

  return (
    <>
      <div
        className="buyer-header"
        onClick={() => {
          setModalOpen(!isModalOpen);
        }}
      >
        <img className="cart" src={cartSvg} alt="cart" />
        <img className="buyer-avatar" src={buyerAvatar} alt="avatar" />
        {count > 0 && <div className="product-quantity">{count}</div>}
      </div>
      {isModalOpen && <Modal count={count} />}
    </>
  );
};

function Modal(props) {
  return (
    <div className="cart-modal">
      <h4 className="cart-title">Cart</h4>
      {props.count > 0 ? (
        <CartProduct count={props.count} />
      ) : (
        <div className="empty-cart"> Your cart is empty</div>
      )}
    </div>
  );
}

const CartProduct = (props) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="cart-product">
        <div className="cart-image">
          <img src={productImg} alt="cart" />
        </div>
        <div className="product-info">
          <h4>Fall Limited Edition Sneakers</h4>
          <h4>
            $125.00 x {props.count}{" "}
            <span className="total-price">{125 * props.count}</span>
          </h4>
        </div>
        <div className="trash-image" onClick={() => dispatch(clearCounter())}>
          <img src={trashImg} alt="trash" />
        </div>
      </div>
    </>
  );
};
