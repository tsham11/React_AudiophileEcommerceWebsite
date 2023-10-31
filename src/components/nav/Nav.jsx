import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/shared/desktop/logo.svg";
import cart from "../../assets/shared/desktop/icon-cart.svg";
import menu from "../../assets/shared/tablet/icon-hamburger.svg";
import close from "../../assets/shared/tablet/icon-close.svg";
import "./Nav.css";

function Nav() {
  const menuref = useRef(null);

  function showmenu() {
    menuref.current.classList.remove("hide");
  }
  function hidemenu() {
    menuref.current.classList.add("hide");
  }
  return (
    <div className="nav">
      <div className="inner">
        <div className="menulogo">
          <span className="menu">
            <img src={menu} onClick={() => showmenu()} />
          </span>
          <span>
            <img src={logo} />
          </span>
        </div>
        <span className="linkwrap hide" ref={menuref}>
          {/* <span className="close"> */}
          <img src={close} className="close" onClick={() => hidemenu()} />
          {/* </span> */}
          <div className="links">
            <NavLink className="link" to="home" onClick={() => hidemenu()}>
              Home
            </NavLink>
            <NavLink
              className="link"
              to="headphones"
              onClick={() => hidemenu()}
            >
              headphones
            </NavLink>
            <NavLink className="link" to="speakers" onClick={() => hidemenu()}>
              speakers
            </NavLink>
            <NavLink className="link" to="earphones" onClick={() => hidemenu()}>
              earphones
            </NavLink>
          </div>
        </span>
        <span>
          <img src={cart} className="cart" />
        </span>
      </div>
    </div>
  );
}

export default Nav;
