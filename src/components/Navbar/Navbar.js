/* eslint-disable react/style-prop-object */
import React from "react";
import { Link } from "react-router-dom";
import Button from "./../Button/Button";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="lamp__nav">
        <div className="lamp__nav-logo">
          <Link to="/">
            <img src={"./lampnet-logo.png"} alt="lampnet Logo" />
          </Link>
        </div>
        <div className="lamp__nav-links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/product">Products</Link>
            </li>
            <li>
              <Link to="/features">Features</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
          </ul>
        </div>
        <Button text="Get Started" btnStyle="btn__primary" />
      </div>
      <div className="lamp__mobilenav">
        <div className="lamp__navmobile-logo">
          <img src={"/public/lampnet-logo.png"} alt="lampnet Logo" />
        </div>
        <div className="lamp__mobilenav-menu-hamburger">
          <div className="lamp_hamburger lamp_hamburger-1"></div>
          <div className="lamp_hamburger lamp_hamburger-2"></div>
          <div className="lamp_hamburger lamp_hamburger-3"></div>
        </div>

        <div className="lamp__navmobile-menu lamp__menu-open">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/features">Features</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
          </ul>
          <div className="lamp__nav-btn">
            <Button text="Get Started" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
