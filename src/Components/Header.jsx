import React from "react";
import { Link } from "react-router-dom";
import { BuyerCart } from "../Components/BuyerCart";
import "../Styles/header-style/header.css";
import iconMenu from "../Styles/Images/icon-menu.svg";

const Header = () => {
  return (
    <section className="header">
      <div className="inner-header">
        <div className="mobile-nav">
          <div
            className="mobile-hamburger"
            onClick={() =>
              document.querySelector("body").classList.toggle("active")
            }
          >
            <img src={iconMenu} alt="icon" />
          </div>
          <ul className="mobile-nav-list">
            <li>
              <span
                onClick={() => {
                  document.querySelector("body").classList.toggle("active");
                }}
              >
                X
              </span>
            </li>
            <li>
              <Link to="/">Collection</Link>
            </li>
            <li>
              <Link to="/">Men</Link>
            </li>
            <li>
              <Link to="/">Women</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
          </ul>
        </div>
        <div className="logo-header">
          <h1>
            Sneakers <span className="logo-span">.</span>
          </h1>
        </div>
        <ul className="nav">
          <li>
            <Link to="/">Collection</Link>
          </li>
          <li>
            <Link to="/">Men</Link>
          </li>
          <li>
            <Link to="/">Women</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </div>
      <BuyerCart />
    </section>
  );
};

export default Header;
